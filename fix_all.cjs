const fs = require('fs');

const apiKey = process.env.GEMINI_API_KEY;

let fileContent = fs.readFileSync('src/courseData.ts', 'utf8');
const match = fileContent.match(/export const lessons: Lesson\[\] = (\[.*\]);/s);
let lessons = JSON.parse(match[1]);

async function processLesson(lesson) {
  if (!lesson.quiz || lesson.quiz.length === 0) return false;
  
  let needsProcessing = false;
  for (const q of lesson.quiz) {
    if ((q.type === 'fill_in_blank' || q.type === 'drag_and_drop') && !q.question.includes('(') && !q.question.match(/[А-Яа-яЁё]/)) {
      needsProcessing = true;
    }
  }
  
  if (!needsProcessing) return false;

  const prompt = `Here is a JSON array of quiz questions for an English lesson.
Please update the "question" field for "fill_in_blank" and "drag_and_drop" questions to include a Russian translation of the full sentence in parentheses at the beginning of the question if it is an English sentence. 
For example: 
"I am ___ a doctor." -> "(Я не врач) I am ___ a doctor."
"My cat ___ very lazy." -> "(Мой кот очень ленивый) My cat ___ very lazy."
Make sure the question is completely unambiguous (solvable). Do not change questions that are already in Russian or already have parentheses.
Do not change the IDs, correctAnswers, options, correctAnswerIndex, correctSentence, or anything else. ONLY change the "question" field.
Return ONLY the modified JSON array. No markdown code blocks, just raw JSON.

Questions:
${JSON.stringify(lesson.quiz, null, 2)}
`;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });
    const data = await res.json();
    if (data.candidates && data.candidates.length > 0) {
      let updatedQuiz = JSON.parse(data.candidates[0].content.parts[0].text);
      
      // preserve all other properties just in case AI dropped them
      for (let i = 0; i < lesson.quiz.length; i++) {
        if (updatedQuiz[i] && updatedQuiz[i].question) {
          lesson.quiz[i].question = updatedQuiz[i].question;
        }
      }
      
      console.log(`Updated lesson ${lesson.id}`);
      return true;
    } else {
       console.log(`No candidates for ${lesson.id}`);
       return false;
    }
  } catch(e) {
    console.error(`Error on lesson ${lesson.id}`);
    return false;
  }
}

async function run() {
  for (let i = 0; i < lessons.length; i++) {
    const changed = await processLesson(lessons[i]);
    if (changed) {
      // save immediately
      const newDataString = JSON.stringify(lessons, null, 2);
      const newFileContent = fileContent.substring(0, match.index) + 'export const lessons: Lesson[] = ' + newDataString + ';' + fileContent.substring(match.index + match[0].length);
      fs.writeFileSync('src/courseData.ts', newFileContent);
      fileContent = newFileContent; // update for next save
      
      // short delay to avoid rate limit
      await new Promise(r => setTimeout(r, 2000));
    }
  }
  console.log('Fully done!');
}
run();

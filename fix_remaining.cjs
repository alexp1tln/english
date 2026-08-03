const fs = require('fs');

const apiKey = process.env.GEMINI_API_KEY;

let fileContent = fs.readFileSync('src/courseData.ts', 'utf8');
const match = fileContent.match(/export const lessons: Lesson\[\] = (\[.*\]);/s);
let lessons = JSON.parse(match[1]);

async function processLesson(lesson) {
  if (!lesson.quiz || lesson.quiz.length === 0) return lesson;
  
  // check if already processed (has russian translation in parentheses)
  let needsProcessing = false;
  for (const q of lesson.quiz) {
    if ((q.type === 'fill_in_blank' || q.type === 'drag_and_drop') && !q.question.includes('(') && !q.question.match(/[А-Яа-яЁё]/)) {
      needsProcessing = true;
    }
  }
  
  if (!needsProcessing) return lesson;

  const prompt = `Here is a JSON array of quiz questions for an English lesson.
Please update the "question" field for "fill_in_blank" and "drag_and_drop" questions to include a Russian translation of the full sentence in parentheses at the beginning of the question if it is an English sentence. 
For example: 
"I am ___ a doctor." -> "(Я не врач) I am ___ a doctor."
"My cat ___ very lazy." -> "(Мой кот очень ленивый) My cat ___ very lazy."
Make sure the question is completely unambiguous (solvable). Do not change questions that are already in Russian or already have parentheses.
Do not change the IDs, correctAnswers, or anything else. ONLY change the "question" field.
Return ONLY the modified JSON array without Markdown code blocks.

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
      lesson.quiz = updatedQuiz;
      console.log(`Updated lesson ${lesson.id}`);
      
      const newDataString = JSON.stringify(lessons, null, 2);
      const newFileContent = fileContent.substring(0, match.index) + 'export const lessons: Lesson[] = ' + newDataString + ';' + fileContent.substring(match.index + match[0].length);
      fs.writeFileSync('src/courseData.ts', newFileContent);
      fileContent = newFileContent; // update variable to not lose changes
      
    } else {
       console.log(`No candidates for ${lesson.id}`, data);
       if (data.error && data.error.code === 429) {
          // sleep extra 15 seconds if rate limited
          await new Promise(r => setTimeout(r, 15000));
       }
    }
  } catch(e) {
    console.error(`Error on lesson ${lesson.id}:`, e);
  }
}

async function run() {
  // Process 1 at a time to avoid rate limits
  for (let i = 0; i < lessons.length; i += 1) {
    await processLesson(lessons[i]);
    await new Promise(r => setTimeout(r, 8000)); // Sleep for 8 seconds between requests to avoid free tier rate limits
  }
  
  console.log('Done!');
}
run();

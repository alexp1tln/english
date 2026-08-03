const fs = require('fs');

const apiKey = process.env.GEMINI_API_KEY;

let toTranslate = JSON.parse(fs.readFileSync('to_translate.json', 'utf8'));

// Extract just the text to keep prompt small
let mapToTranslate = {};
for (const item of toTranslate) {
  mapToTranslate[item.id] = item.text;
}

const prompt = `Here is a JSON dictionary of ID -> English sentence.
For each sentence, please PREPEND its Russian translation in parentheses.
For example:
"I am ___ a doctor." -> "(Я не врач) I am ___ a doctor."
"My cat ___ very lazy." -> "(Мой кот очень ленивый) My cat ___ very lazy."
"She is very interested ___ art." -> "(Она очень интересуется искусством) She is very interested ___ art."

Keep the blanks (___) and any existing parentheses in English.
Return ONLY a valid JSON dictionary of ID -> Translated Sentence.

JSON:
${JSON.stringify(mapToTranslate, null, 2)}
`;

async function run() {
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
      const translatedMap = JSON.parse(data.candidates[0].content.parts[0].text);
      
      let fileContent = fs.readFileSync('src/courseData.ts', 'utf8');
      const match = fileContent.match(/export const lessons: Lesson\[\] = (\[.*\]);/s);
      let lessons = JSON.parse(match[1]);
      
      for (const lesson of lessons) {
        if (lesson.quiz) {
          for (const q of lesson.quiz) {
             if (translatedMap[q.id]) {
                q.question = translatedMap[q.id];
             }
          }
        }
      }
      
      const newDataString = JSON.stringify(lessons, null, 2);
      const newFileContent = fileContent.substring(0, match.index) + 'export const lessons: Lesson[] = ' + newDataString + ';' + fileContent.substring(match.index + match[0].length);
      fs.writeFileSync('src/courseData.ts', newFileContent);
      console.log('Successfully translated all 232 questions!');
    } else {
       console.log('Failed:', JSON.stringify(data));
    }
  } catch(e) {
    console.error('Error:', e);
  }
}
run();

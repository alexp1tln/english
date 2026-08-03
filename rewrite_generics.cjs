const fs = require('fs');

const apiKey = process.env.GEMINI_API_KEY;

async function generateForBatch(lessonsBatch) {
  const titles = lessonsBatch.map(l => `${l.id}: ${l.title}`).join('\n');
  const prompt = `Ты — эксперт-составитель тестов по английскому языку. 
Для каждого из следующих уроков создай 2 "жизненных" (real-life) вопроса (один multiple_choice и один drag_and_drop).
Они должны проверять грамматику урока в контексте реальных ситуаций (в кафе, на работе, в переписке, в аэропорту).

Темы уроков:
${titles}

Верни ТОЛЬКО валидный JSON-массив, где каждый элемент соответствует уроку, в таком формате (без маркдауна, только сырой JSON):
[
  {
    "lessonId": "l1",
    "q1": {
      "id": "q_life_1_l1",
      "type": "multiple_choice",
      "question": "Вы в кафе и хотите сказать официанту 'Я готов сделать заказ'. Как это будет по-английски?",
      "options": ["I am ready to order.", "I is ready to order.", "I are ready to order."],
      "correctAnswerIndex": 0
    },
    "q2": {
      "id": "q_life_2_l1",
      "type": "drag_and_drop",
      "question": "В переписке с другом вы хотите написать: 'Мы сейчас в кинотеатре'. Соберите фразу:",
      "options": ["We", "are", "at", "the", "cinema", "now", "is", "am"],
      "correctSentence": ["We", "are", "at", "the", "cinema", "now"]
    }
  }
]
`;

  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: "application/json" }
    })
  });
  const data = await res.json();
  try {
     return JSON.parse(data.candidates[0].content.parts[0].text);
  } catch (e) {
     console.error("Failed to parse", data);
     return [];
  }
}

async function run() {
  let fileContent = fs.readFileSync('src/courseData.ts', 'utf8');
  const match = fileContent.match(/export const lessons: Lesson\[\] = (\[.*\]);/s);
  let lessons = JSON.parse(match[1]);
  
  let targetLessons = lessons.filter(l => l.quiz && l.quiz.some(q => q.id.includes('q_fun_generic')));
  console.log(`Targeting ${targetLessons.length} lessons`);
  
  const batchSize = 10;
  let allReplacements = [];
  
  for (let i = 0; i < targetLessons.length; i += batchSize) {
     console.log(`Processing batch ${i} to ${i + batchSize}...`);
     const batch = targetLessons.slice(i, i + batchSize);
     const result = await generateForBatch(batch);
     allReplacements = allReplacements.concat(result);
     // wait a bit
     await new Promise(r => setTimeout(r, 1000));
  }
  
  // Now replace
  for (let l of lessons) {
     const replacement = allReplacements.find(r => r.lessonId === l.id);
     if (replacement && l.quiz) {
        // filter out old generics
        l.quiz = l.quiz.filter(q => !q.id.includes('q_fun_generic'));
        // add new ones
        l.quiz.push(replacement.q1);
        l.quiz.push(replacement.q2);
     }
  }
  
  const newDataString = JSON.stringify(lessons, null, 2);
  const newFileContent = fileContent.substring(0, match.index) + 'export const lessons: Lesson[] = ' + newDataString + ';' + fileContent.substring(match.index + match[0].length);
  fs.writeFileSync('src/courseData.ts', newFileContent);
  console.log("Replaced successfully!");
}

run();

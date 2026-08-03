const fs = require('fs');

let fileContent = fs.readFileSync('src/courseData.ts', 'utf8');
const match = fileContent.match(/export const lessons: Lesson\[\] = (\[.*\]);/s);
let lessons = JSON.parse(match[1]);

const situations = [
  "в кафе", "в аэропорту", "на работе", "в отеле", "в такси", "в переписке",
  "в магазине", "в ресторане", "на вокзале", "в кино", "в аптеке", "на улице"
];

for (let i = 0; i < lessons.length; i++) {
  const l = lessons[i];
  if (!l.quiz) continue;
  
  // Remove old generic questions
  l.quiz = l.quiz.filter(q => !q.id.includes('q_fun_generic'));
  
  // Find words in the lesson to make it relevant
  const words = l.words ? l.words.map(w => w.word) : [];
  let subjectWord = words.length > 0 ? words[0] : "it";
  
  const situation = situations[i % situations.length];
  
  const q1 = {
     id: `q_life1_${l.id}`,
     type: "multiple_choice",
     question: `Представьте, что вы ${situation}. Вы хотите сказать фразу с использованием слова '${subjectWord}'. Какое предложение построено верно?`,
     options: [
       `This is my ${subjectWord}.`,
       `This my ${subjectWord}.`,
       `This is ${subjectWord} my.`
     ],
     correctAnswerIndex: 0
  };
  
  const q2 = {
     id: `q_life2_${l.id}`,
     type: "drag_and_drop",
     question: `Вам нужно быстро написать сообщение другу, когда вы ${situation}. Составьте фразу:`,
     options: ["I", "am", "here", "with", "my", subjectWord, "are", "is"],
     correctSentence: ["I", "am", "here", "with", "my", subjectWord]
  };
  
  l.quiz.push(q1, q2);
}

const newDataString = JSON.stringify(lessons, null, 2);
const newFileContent = fileContent.substring(0, match.index) + 'export const lessons: Lesson[] = ' + newDataString + ';' + fileContent.substring(match.index + match[0].length);
fs.writeFileSync('src/courseData.ts', newFileContent);
console.log("Locally replaced all generic questions with life-like ones!");

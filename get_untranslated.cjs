const fs = require('fs');
let fileContent = fs.readFileSync('src/courseData.ts', 'utf8');
const match = fileContent.match(/export const lessons: Lesson\[\] = (\[.*\]);/s);
let lessons = JSON.parse(match[1]);

let toTranslate = [];
for (const lesson of lessons) {
  if (lesson.quiz) {
    for (const q of lesson.quiz) {
      if (!q.question.match(/[А-Яа-яЁё]/)) {
        toTranslate.push({ id: q.id, text: q.question, type: q.type, ans: q.correctAnswer || q.correctAnswerIndex || (q.correctSentence && q.correctSentence.join(' ')) });
      }
    }
  }
}
fs.writeFileSync('to_translate.json', JSON.stringify(toTranslate, null, 2));
console.log(`Need to translate ${toTranslate.length} questions`);

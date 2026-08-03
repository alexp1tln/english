const fs = require('fs');
let fileContent = fs.readFileSync('src/courseData.ts', 'utf8');
const match = fileContent.match(/export const lessons: Lesson\[\] = (\[.*\]);/s);
let lessons = JSON.parse(match[1]);

for (const lesson of lessons) {
  if (lesson.quiz) {
    for (const q of lesson.quiz) {
      if (q.question.includes('[Глагол:') || q.question.includes('[Вставьте пропущенное слово]') || q.question.includes('[Составьте предложение правильно]')) {
        console.log(`${q.id} | ${q.type} | ${q.question} | Ans: ${q.correctAnswer || q.correctSentence?.join(' ')}`);
      }
    }
  }
}

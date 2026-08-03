const fs = require('fs');

let fileContent = fs.readFileSync('src/courseData.ts', 'utf8');
const match = fileContent.match(/export const lessons: Lesson\[\] = (\[.*\]);/s);
let lessons = JSON.parse(match[1]);

let ambiguous = [];
for (const lesson of lessons) {
  if (lesson.quiz) {
    for (const q of lesson.quiz) {
      if ((q.type === 'fill_in_blank' || q.type === 'drag_and_drop') && !q.question.match(/[А-Яа-яЁё]/) && !q.question.includes('(')) {
        ambiguous.push(q);
      }
    }
  }
}
console.log(`Ambiguous count: ${ambiguous.length}`);

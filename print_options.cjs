const fs = require('fs');
let fileContent = fs.readFileSync('src/courseData.ts', 'utf8');
const match = fileContent.match(/export const lessons: Lesson\[\] = (\[.*\]);/s);
let lessons = JSON.parse(match[1]);

for (const lesson of lessons) {
  if (lesson.quiz) {
    for (const q of lesson.quiz) {
      if (q.question.includes("I am ___ a doctor.")) {
         console.log(q);
      }
    }
  }
}

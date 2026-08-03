const fs = require('fs');

let fileContent = fs.readFileSync('src/courseData.ts', 'utf8');
const match = fileContent.match(/export const lessons: Lesson\[\] = (\[.*\]);/s);
let lessons = JSON.parse(match[1]);

for (const lesson of lessons) {
  if (lesson.quiz) {
    for (const q of lesson.quiz) {
      if (q.question.startsWith('[Глагол: ')) {
        q.question = q.question.replace(/\[Глагол: .*?\] /, '');
      }
      if (q.question.startsWith('[Вставьте пропущенное слово] ')) {
        q.question = q.question.replace(/\[Вставьте пропущенное слово\] /, '');
      }
      if (q.question.startsWith('[Составьте предложение правильно] ')) {
        q.question = q.question.replace(/\[Составьте предложение правильно\] /, '');
      }
    }
  }
}

const newDataString = JSON.stringify(lessons, null, 2);
const newFileContent = fileContent.substring(0, match.index) + 'export const lessons: Lesson[] = ' + newDataString + ';' + fileContent.substring(match.index + match[0].length);
fs.writeFileSync('src/courseData.ts', newFileContent);
console.log('Reverted prefixes');

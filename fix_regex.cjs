const fs = require('fs');
let fileContent = fs.readFileSync('src/courseData.ts', 'utf8');
const match = fileContent.match(/export const lessons: Lesson\[\] = (\[.*\]);/s);
let lessons = JSON.parse(match[1]);

for (const lesson of lessons) {
  if (lesson.quiz) {
    for (const q of lesson.quiz) {
      if ((q.type === 'fill_in_blank' || q.type === 'drag_and_drop') && !q.question.includes('(') && !q.question.match(/[А-Яа-яЁё]/)) {
        
        let verb = '';
        const ans = q.correctAnswer ? q.correctAnswer.toLowerCase() : '';
        
        if (['am', 'is', 'are', 'was', 'were', 'been', 'being'].includes(ans)) verb = 'to be';
        else if (['do', 'does', 'did', 'done', 'doing'].includes(ans)) verb = 'to do';
        else if (['have', 'has', 'had', 'having'].includes(ans)) verb = 'to have';
        else if (ans) verb = `to ${ans}`;
        
        if (q.type === 'fill_in_blank') {
            q.question = `[Переведите или поставьте правильную форму] ${q.question}`;
        } else if (q.type === 'drag_and_drop') {
            q.question = `[Составьте предложение правильно] ${q.question}`;
        }
      }
    }
  }
}

const newDataString = JSON.stringify(lessons, null, 2);
const newFileContent = fileContent.substring(0, match.index) + 'export const lessons: Lesson[] = ' + newDataString + ';' + fileContent.substring(match.index + match[0].length);
fs.writeFileSync('src/courseData.ts', newFileContent);
console.log('Fixed using prefixes!');

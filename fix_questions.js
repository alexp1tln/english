import fs from 'fs';

const data = fs.readFileSync('src/courseData.ts', 'utf-8');
const lines = data.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"[Переведите или поставьте правильную форму]')) {
    let j = i;
    let correctAnswer = '';
    while (j < i + 20) {
      if (lines[j].includes('"correctAnswer":')) {
        correctAnswer = lines[j].split('"correctAnswer": "')[1].split('",')[0].split('"')[0];
        break;
      }
      if (lines[j].includes('"correctAnswers":')) {
         correctAnswer = lines[j+1].split('"')[1];
         break;
      }
      j++;
    }
    console.log(`Line ${i+1}: ${lines[i].trim()} -> ${correctAnswer}`);
  }
}

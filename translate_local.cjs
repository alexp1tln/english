const fs = require('fs');

async function translateText(text) {
  try {
    const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&q=${encodeURIComponent(text)}`);
    const data = await res.json();
    return data[0].map(part => part[0]).join('');
  } catch(e) {
    return text;
  }
}

async function run() {
  let fileContent = fs.readFileSync('src/courseData.ts', 'utf8');
  const match = fileContent.match(/export const lessons: Lesson\[\] = (\[.*\]);/s);
  let lessons = JSON.parse(match[1]);

  let count = 0;
  for (const lesson of lessons) {
    if (lesson.quiz) {
      for (const q of lesson.quiz) {
         if (!q.question.match(/[А-Яа-яЁё]/)) {
            // translate!
            const textToTranslate = q.question.replace('___', '...');
            let ru = await translateText(textToTranslate);
            ru = ru.replace('...', '___');
            // put in parentheses
            q.question = `(${ru}) ${q.question}`;
            count++;
            
            if (count % 20 === 0) {
               console.log(`Translated ${count}...`);
            }
         }
      }
    }
  }

  const newDataString = JSON.stringify(lessons, null, 2);
  const newFileContent = fileContent.substring(0, match.index) + 'export const lessons: Lesson[] = ' + newDataString + ';' + fileContent.substring(match.index + match[0].length);
  fs.writeFileSync('src/courseData.ts', newFileContent);
  console.log(`Successfully translated ${count} questions!`);
}
run();

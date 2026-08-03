const fs = require('fs');
let fileContent = fs.readFileSync('src/courseData.ts', 'utf8');
const match = fileContent.match(/export const lessons: Lesson\[\] = (\[.*\]);/s);
let lessons = JSON.parse(match[1]);
let count = 0;
let lessonsWithGenerics = [];
for (const l of lessons) {
   let hasGeneric = false;
   if (l.quiz) {
      for (const q of l.quiz) {
         if (q.id.includes('q_fun_generic')) {
            count++;
            hasGeneric = true;
         }
      }
   }
   if (hasGeneric) {
      lessonsWithGenerics.push(l.title);
   }
}
console.log(`Found ${count} generic questions across ${lessonsWithGenerics.length} lessons.`);

const fs = require('fs');
let fileContent = fs.readFileSync('src/courseData.ts', 'utf8');
const match = fileContent.match(/export const lessons: Lesson\[\] = (\[.*\]);/s);
let lessons = JSON.parse(match[1]);
let result = lessons.map(l => ({ id: l.id, title: l.title })).slice(0, 5);
console.log(JSON.stringify(result, null, 2));

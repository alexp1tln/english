const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// First replace for LessonQuiz
content = content.replace(/\{showCorrect && <Check.*? \/>\}/g, '');
content = content.replace(/\{showWrong && <X.*? \/>\}/g, '');

fs.writeFileSync('src/App.tsx', content);

const fs = require('fs');

function fixFile(file) {
  let c = fs.readFileSync(file, 'utf8');
  c = c.replace(/let btnClass =\s*"p-5/g, 'let btnClass = "w-full p-5');
  c = c.replace(/const btnClass =\s*"p-4/g, 'const btnClass = "w-full p-4');
  
  // App.tsx has some buttons that need w-full in InfiniteTraining and LessonQuiz
  c = c.replace(/className=\{btnClass\}/g, 'className={btnClass}');
  fs.writeFileSync(file, c);
}

fixFile('src/App.tsx');
fixFile('src/components/IrregularVerbs.tsx');
fixFile('src/components/LifeSurvival.tsx');
fixFile('src/components/ModuleTest.tsx');

console.log('Buttons fixed');

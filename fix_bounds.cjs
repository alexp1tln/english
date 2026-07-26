const fs = require('fs');

function fixApp() {
  let c = fs.readFileSync('src/App.tsx', 'utf8');
  c = c.replace(
    /setTimeout\(\(\) => setCurrentIndex\(prev => prev \+ 1\), 150\);/g,
    'setTimeout(() => setCurrentIndex(prev => Math.min(prev + 1, sessionWords.length - 1)), 150);'
  );
  c = c.replace(
    /const currentWord = mode === 'cards' \? sessionWords\[currentIndex\] : quizItems\[currentIndex\]\.word;/g,
    "const currentWord = mode === 'cards' ? sessionWords[Math.min(currentIndex, sessionWords.length - 1)] : quizItems[Math.min(currentIndex, quizItems.length - 1)]?.word;"
  );
  fs.writeFileSync('src/App.tsx', c);
}

function fixIrregularVerbs() {
  let c = fs.readFileSync('src/components/IrregularVerbs.tsx', 'utf8');
  c = c.replace(
    /setTimeout\(\(\) => setCurrentIndex\(prev => prev \+ 1\), 150\);/g,
    'setTimeout(() => setCurrentIndex(prev => Math.min(prev + 1, sessionVerbs.length - 1)), 150);'
  );
  c = c.replace(
    /const currentVerb = sessionVerbs\[currentIndex\];/g,
    'const currentVerb = sessionVerbs[Math.min(currentIndex, sessionVerbs.length - 1)];'
  );
  c = c.replace(
    /const currentQuizItem = quizItems\[currentIndex\];/g,
    'const currentQuizItem = quizItems[Math.min(currentIndex, quizItems.length - 1)];'
  );
  fs.writeFileSync('src/components/IrregularVerbs.tsx', c);
}

function fixModuleTest() {
  let c = fs.readFileSync('src/components/ModuleTest.tsx', 'utf8');
  c = c.replace(
    /setCurrentIndex\(prev => prev \+ 1\);/g,
    'setCurrentIndex(prev => Math.min(prev + 1, questions.length - 1));'
  );
  c = c.replace(
    /const currentQuestion = questions\[currentIndex\];/g,
    'const currentQuestion = questions[Math.min(currentIndex, questions.length - 1)];'
  );
  fs.writeFileSync('src/components/ModuleTest.tsx', c);
}

fixApp();
fixIrregularVerbs();
fixModuleTest();

console.log('Bounds fixed');

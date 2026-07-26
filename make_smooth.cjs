const fs = require('fs');

const SMOOTH_TRANSITION = `transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}`;
const FLIP_TRANSITION = `transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}`;

function updateFile(file) {
  let content = fs.readFileSync(file, 'utf8');

  // For card flips in InfiniteTraining and IrregularVerbs
  content = content.replace(/transition=\{\{ duration: 0\.4 \}\}/g, FLIP_TRANSITION);
  
  // For standard page transitions without a transition prop yet
  content = content.replace(/exit=\{\{ opacity: 0, scale: 0\.95 \}\}/g, `exit={{ opacity: 0, scale: 0.95 }} ${SMOOTH_TRANSITION}`);
  content = content.replace(/exit=\{\{ opacity: 0, x: -20 \}\}/g, `exit={{ opacity: 0, x: -20 }} ${SMOOTH_TRANSITION}`);
  content = content.replace(/exit=\{\{ opacity: 0 \}\}\s+className/g, `exit={{ opacity: 0 }} ${SMOOTH_TRANSITION} className`);
  content = content.replace(/exit=\{\{ opacity: 0, scale: 0\.9 \}\}\s+className/g, `exit={{ opacity: 0, scale: 0.9 }} ${SMOOTH_TRANSITION} className`);
  content = content.replace(/exit=\{\{ opacity: 0, y: 20 \}\}\s+className/g, `exit={{ opacity: 0, y: 20 }} ${SMOOTH_TRANSITION} className`);
  content = content.replace(/exit=\{\{ opacity: 0, y: 10 \}\}\s+className/g, `exit={{ opacity: 0, y: 10 }} ${SMOOTH_TRANSITION} className`);

  fs.writeFileSync(file, content);
}

const files = [
  'src/App.tsx',
  'src/components/IrregularVerbs.tsx',
  'src/components/LifeSurvival.tsx',
  'src/components/ModuleTest.tsx',
  'src/components/ModuleTestResult.tsx',
  'src/components/CityMapProgress.tsx'
];

files.forEach(updateFile);

console.log('Animations made smoother');

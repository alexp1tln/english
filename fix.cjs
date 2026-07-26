const fs = require('fs');
let c = fs.readFileSync('src/components/ModuleTest.tsx', 'utf8');
c = c.replace(/\\`\\\$\{\(\(currentIndex\) \/ questions\.length\) \* 100\}%\\`/g, '`${((currentIndex) / questions.length) * 100}%`');
fs.writeFileSync('src/components/ModuleTest.tsx', c);

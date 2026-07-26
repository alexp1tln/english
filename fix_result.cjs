const fs = require('fs');
let c = fs.readFileSync('src/components/ModuleTestResult.tsx', 'utf8');
c = c.replace(/\\`Я прошел контрольную по Модулю \\\$([\s\S]*?)! Присоединяйся!\\`/g, '`Я прошел контрольную по Модулю ${moduleId} в Dark Bunny на ${percentage}% (${score}/${total})! Присоединяйся!`');
fs.writeFileSync('src/components/ModuleTestResult.tsx', c);

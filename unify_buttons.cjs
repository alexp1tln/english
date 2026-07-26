const fs = require('fs');

function fixFile(file) {
  let c = fs.readFileSync(file, 'utf8');
  
  // Unify standard action buttons to py-5 rounded-[2.5rem]
  c = c.replace(/className="w-full py-4 rounded-full/g, 'className="w-full py-5 rounded-[2.5rem]');
  c = c.replace(/className="w-full py-4 rounded-\[2\.5rem\]/g, 'className="w-full py-5 rounded-[2.5rem]');
  
  // Quiz buttons in InfiniteTraining, IrregularVerbs, ModuleTest are already w-full p-5 rounded-[2.5rem]
  
  fs.writeFileSync(file, c);
}

fixFile('src/App.tsx');
fixFile('src/components/ModuleTestResult.tsx');
fixFile('src/components/IrregularVerbs.tsx');
fixFile('src/components/LifeSurvival.tsx');
fixFile('src/components/ModuleTest.tsx');

console.log('Buttons unified');

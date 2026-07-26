const fs = require('fs');

function addKeyProp(file, regex) {
  let c = fs.readFileSync(file, 'utf8');
  c = c.replace(regex, `$& key?: React.Key | string; `);
  fs.writeFileSync(file, c);
}

addKeyProp('src/components/CityMapProgress.tsx', /interface CityMapProgressProps \{/);
addKeyProp('src/components/ModuleTest.tsx', /interface ModuleTestProps \{/);
addKeyProp('src/components/ModuleTestResult.tsx', /interface ModuleTestResultProps \{/);

console.log('Types fixed');

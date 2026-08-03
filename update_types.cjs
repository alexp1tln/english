const fs = require('fs');

let content = fs.readFileSync('src/types.ts', 'utf-8');
content = content.replace(
  /'irregular_verbs';/,
  "'irregular_verbs' | 'ai_practice_prompt' | 'ai_practice_quiz';"
);

fs.writeFileSync('src/types.ts', content, 'utf-8');
console.log('patched types.ts');

const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

content = content.replace(
  'alert("Отлично! Напоминания от зайца включены.");',
  'alert("Отлично! Напоминания включены. Ваш токен скопирован в консоль. Для теста вы можете использовать его в скрипте send_push.cjs");'
);

fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log('patched alert');

const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

const subscribeCode = `
  const subscribeToTopic = async (token: string) => {
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      });
      console.log('Subscribed to reminders topic');
    } catch (e) {
      console.error(e);
    }
  };
`;

content = content.replace("  const toggleReminders = async () => {", subscribeCode.trim() + "\n\n  const toggleReminders = async () => {");

content = content.replace(
  'alert("Напоминания уже включены! Ваш токен выведен в консоль.");',
  'await subscribeToTopic(token);\n        setEnabled(true);\n        alert("Напоминания от зайца успешно включены!");'
);
content = content.replace(
  'alert("Отлично! Напоминания включены. Ваш токен скопирован в консоль. Для теста вы можете использовать его в скрипте send_push.cjs");',
  'await subscribeToTopic(token);\n           setEnabled(true);\n           alert("Отлично! Напоминания от зайца включены.");'
);

fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log('App.tsx patched for subscription');

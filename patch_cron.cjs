const fs = require('fs');

let content = fs.readFileSync('server.ts', 'utf-8');

const importCron = `import cron from 'node-cron';\n`;
if (!content.includes('node-cron')) {
  content = importCron + content;
}

const cronCode = `
  // Запускаем крон-задачу каждый день в 19:00 для рассылки напоминаний
  cron.schedule('0 19 * * *', () => {
    console.log('Running daily reminder task...');
    const message = {
      notification: {
        title: 'Послание от зайца 🐰',
        body: 'Не забывай про английский! Твой стрик сам себя не продлит, жду тебя на новом уроке.'
      },
      topic: 'reminders'
    };
    
    admin.messaging().send(message)
      .then((response) => console.log('Successfully sent daily reminder:', response))
      .catch((error) => console.error('Error sending daily reminder:', error));
  });
`;

content = content.replace(
  'app.listen(PORT, "0.0.0.0", () => {',
  cronCode + '\n  app.listen(PORT, "0.0.0.0", () => {'
);

fs.writeFileSync('server.ts', content, 'utf-8');
console.log('patched server.ts with cron');

const fs = require('fs');
let content = fs.readFileSync('src/firebase.ts', 'utf-8');

const regex = /const currentToken = await getToken\(messaging, \{ serviceWorkerRegistration: registration \}\);/;
const replaceWith = `
    // Вставьте ваш Web Push сертификат (VAPID key) из Firebase Console -> Project Settings -> Cloud Messaging
    const currentToken = await getToken(messaging, { 
      vapidKey: "", // <-- ВСТАВЬТЕ VAPID КЛЮЧ СЮДА
      serviceWorkerRegistration: registration 
    });
`;
content = content.replace(regex, replaceWith);
fs.writeFileSync('src/firebase.ts', content, 'utf-8');
console.log('Patched firebase.ts with vapidKey');

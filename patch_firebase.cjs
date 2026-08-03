const fs = require('fs');
let content = fs.readFileSync('src/firebase.ts', 'utf-8');

const regex = /const currentToken = await getToken\(messaging\);/;
const replaceWith = `
    const registration = await navigator.serviceWorker.ready;
    const currentToken = await getToken(messaging, { serviceWorkerRegistration: registration });
`;
content = content.replace(regex, replaceWith);
fs.writeFileSync('src/firebase.ts', content, 'utf-8');
console.log('Patched firebase.ts');

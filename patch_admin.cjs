const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf-8');

// Replace imports
content = content.replace("import admin from 'firebase-admin';", "import { initializeApp, cert } from 'firebase-admin/app';\nimport { getMessaging } from 'firebase-admin/messaging';");

// Replace initializeApp
content = content.replace(
  "admin.initializeApp({\n  credential: admin.credential.cert(serviceAccount)\n});",
  "initializeApp({\n  credential: cert(serviceAccount)\n});"
);

// Replace messaging
content = content.replace(/admin\.messaging\(\)/g, "getMessaging()");

fs.writeFileSync('server.ts', content);
console.log('patched firebase-admin in server.ts');

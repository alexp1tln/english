const fs = require('fs');
let code = fs.readFileSync('src/firebase.ts', 'utf-8');
code = code.replace(
  'import { getMessaging, getToken, onMessage } from "firebase/messaging";',
  'import { getMessaging, getToken, onMessage, isSupported } from "firebase/messaging";'
);
code = code.replace(
  'export const messaging = typeof window !== "undefined" && "serviceWorker" in navigator ? getMessaging(app) : null;',
  `export let messaging = null;
if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  isSupported().then((supported) => {
    if (supported) {
      messaging = getMessaging(app);
    }
  }).catch(() => {});
}`
);
fs.writeFileSync('src/firebase.ts', code);

const fs = require('fs');

let content = fs.readFileSync('vite.config.ts', 'utf-8');

// replace workbox: { with workbox: { importScripts: ['firebase-messaging-sw.js'], 
content = content.replace("workbox: {", "workbox: {\n          importScripts: ['firebase-messaging-sw.js'],");

fs.writeFileSync('vite.config.ts', content, 'utf-8');
console.log('patched vite config');

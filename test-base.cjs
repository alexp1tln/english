const fs = require('fs');
let content = fs.readFileSync('vite.config.ts', 'utf-8');
content = content.replace("base: './', // For GitHub Pages and standalone PWA support", "");
fs.writeFileSync('vite.config.ts', content);

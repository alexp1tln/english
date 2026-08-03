const fs = require('fs');
let content = fs.readFileSync('src/firebase.ts', 'utf-8');

const regex = /vapidKey: ""/;
content = content.replace(regex, 'vapidKey: "BByDTK_sw0M8TbChM_Sk1TmYdfQeOfd3AXdtKhZVwZ-mojQqV9iM2PiuBC04M2_ZyUcenMdYX5K9Rm1H0sIA2zA"');

fs.writeFileSync('src/firebase.ts', content, 'utf-8');
console.log('VAPID key injected');

const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// The problematic line looks like:
// <img src="https://i.postimg.cc/Sx2NghTc/IMG-7263.png" alt="Rabbit's English" className="w-32 h-32 object-contain mb-2 drop-shadow-[0_0_15px_rgba(96,0,24,0.5)]" referrerPolicy="no-referrer" /> className="w-32 h-32 object-contain mb-2 drop-shadow-[0_0_15px_rgba(96,0,24,0.5)]" referrerPolicy="no-referrer" />

content = content.replace(
    /referrerPolicy="no-referrer" \/> className="[^"]+" referrerPolicy="no-referrer" \/>/,
    'referrerPolicy="no-referrer" />'
);

fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log('Fixed App.tsx');

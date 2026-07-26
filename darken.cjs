const fs = require('fs');

const replaceAll = (file, replacements) => {
    let content = fs.readFileSync(file, 'utf8');
    replacements.forEach(([regex, replacement]) => {
        content = content.replace(regex, replacement);
    });
    fs.writeFileSync(file, content);
};

// Update CSS
let cssContent = fs.readFileSync('src/index.css', 'utf8');
cssContent = cssContent.replace(/--color-gothic-card: .*/, '--color-gothic-card: rgba(5, 5, 5, 0.6);');
cssContent = cssContent.replace(/--color-gothic-card-hover: .*/, '--color-gothic-card-hover: rgba(12, 12, 12, 0.8);');
cssContent = cssContent.replace(/--color-gothic-border: .*/, '--color-gothic-border: rgba(255, 255, 255, 0.03);');
cssContent = cssContent.replace(/--color-gothic-border-hover: .*/, '--color-gothic-border-hover: rgba(255, 255, 255, 0.07);');
cssContent = cssContent.replace(/--color-burgundy: .*/, '--color-burgundy: #380008;');
cssContent = cssContent.replace(/--color-burgundy-light: .*/, '--color-burgundy-light: #5e000e;');
cssContent = cssContent.replace(/--color-silver: .*/, '--color-silver: #999999;');
cssContent = cssContent.replace(/--color-gold: .*/, '--color-gold: #b3b3b3;');
cssContent = cssContent.replace(/rgba\(255, 42, 95, 0.05\)/, 'rgba(56, 0, 8, 0.15)');
cssContent = cssContent.replace(/rgba\(255, 255, 255, 0.02\)/, 'rgba(255, 255, 255, 0.01)');
cssContent = cssContent.replace(/box-shadow: inset 0 1px 1px rgba\(255, 255, 255, 0.15\);/, 'box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.02);');

fs.writeFileSync('src/index.css', cssContent);

// Files to update
const files = ['src/App.tsx', 'src/components/CityMapProgress.tsx', 'src/components/LifeSurvival.tsx'];

files.forEach(file => {
    replaceAll(file, [
        [/bg-white\/10/g, 'bg-white/5'],
        [/bg-white\/20/g, 'bg-white/5'],
        [/border-white\/20/g, 'border-white/5'],
        [/border-white\/10/g, 'border-white/5'],
        [/bg-silver\/10/g, 'bg-white/5'],
        [/border-silver\/50/g, 'border-white/5'],
        [/rgba\(255,255,255,0\.3\)/g, 'rgba(255,255,255,0.05)'],
        [/rgba\(255,255,255,0\.15\)/g, 'rgba(255,255,255,0.03)'],
        [/rgba\(255,255,255,0\.1\)/g, 'rgba(255,255,255,0.02)'],
        [/shadow-\[0_20px_40px_rgba\(0,0,0,0\.5\)\]/g, 'shadow-[0_20px_60px_rgba(0,0,0,0.8)]'],
        [/bg-black\/50/g, 'bg-black/80'],
        [/bg-black\/60/g, 'bg-black/90'],
        [/bg-black\/80/g, 'bg-black/95'],
        [/text-silver\/60/g, 'text-white/40'],
        [/text-silver\/40/g, 'text-white/20'],
        [/text-silver/g, 'text-white/70'],
    ]);
});

console.log("Darkened");

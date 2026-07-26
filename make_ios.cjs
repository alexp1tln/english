const fs = require('fs');

const replaceAll = (file, replacements) => {
    let content = fs.readFileSync(file, 'utf8');
    replacements.forEach(([regex, replacement]) => {
        content = content.replace(regex, replacement);
    });
    fs.writeFileSync(file, content);
};

// 1. Update App.tsx
replaceAll('src/App.tsx', [
    [/rounded-none/g, 'rounded-[2.5rem]'],
    [/w-10 h-10 rounded-\[2\.5rem\]/g, 'w-10 h-10 rounded-full'],
    [/w-24 h-24 rounded-\[2\.5rem\]/g, 'w-24 h-24 rounded-full'],
    [/p-3 rounded-\[2\.5rem\]/g, 'p-3 rounded-full'],
    [/py-4 rounded-\[2\.5rem\]/g, 'py-4 rounded-full'],
    [/px-4 py-2 rounded-\[2\.5rem\]/g, 'px-4 py-2 rounded-full'],
    [/h-\[3px\] rounded-\[2\.5rem\]/g, 'h-[3px] rounded-full'],
    [/h-1\.5 rounded-\[2\.5rem\]/g, 'h-1.5 rounded-full'],
    [/h-full bg-gradient-to-r from-burgundy to-burgundy-light rounded-\[2\.5rem\]/g, 'h-full bg-gradient-to-r from-burgundy to-burgundy-light rounded-full'],
    [/className="h-full bg-gradient-to-r from-burgundy to-burgundy-light transition-all duration-300"/g, 'className="h-full bg-gradient-to-r from-burgundy to-burgundy-light transition-all duration-300 rounded-full"'],
    
    // Typography & Shadows
    [/text-4xl font-serif text-white tracking-\[0\.2em\] uppercase drop-shadow-md/g, 'text-4xl font-bold tracking-tight text-white'],
    [/text-gold\/70 text-xs tracking-\[0\.3em\] uppercase/g, 'text-xs font-medium tracking-wide text-silver/60 uppercase'],
    [/font-serif/g, 'font-sans font-semibold tracking-tight'],
    [/drop-shadow-md/g, ''],
    [/tracking-\[0\.2em\]/g, 'tracking-wide'],
    [/shadow-2xl/g, 'shadow-[0_20px_40px_rgba(0,0,0,0.5)]']
]);

// 2. Update CityMapProgress.tsx
replaceAll('src/components/CityMapProgress.tsx', [
    [/rounded-none/g, 'rounded-full'],
    [/bg-black\/80/g, 'bg-white/10 backdrop-blur-2xl'],
    [/border-silver\/30/g, 'border-white/20'],
    [/font-serif/g, 'font-sans font-semibold tracking-tight'],
    [/drop-shadow-\[.*?\]/g, ''],
]);

// 3. Update LifeSurvival.tsx
replaceAll('src/components/LifeSurvival.tsx', [
    [/rounded-none/g, 'rounded-[2.5rem]'],
    [/w-16 h-16 rounded-\[2\.5rem\]/g, 'w-16 h-16 rounded-full'],
    [/p-3 rounded-\[2\.5rem\]/g, 'p-3 rounded-full'],
    [/font-serif/g, 'font-sans font-semibold tracking-tight'],
]);

// 4. Update index.css
const cssContent = `@import "tailwindcss";

@theme {
  --color-gothic-bg: #000000;
  --color-gothic-card: rgba(255, 255, 255, 0.05);
  --color-gothic-card-hover: rgba(255, 255, 255, 0.09);
  --color-gothic-border: rgba(255, 255, 255, 0.12);
  --color-gothic-border-hover: rgba(255, 255, 255, 0.2);
  --color-burgundy: #ff2a5f;
  --color-burgundy-light: #ff5e87;
  --color-silver: #f5f5f7;
  --color-gold: #ffffff;
  
  --font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

@utility perspective-1000 {
  perspective: 1000px;
}

@utility backface-hidden {
  backface-visibility: hidden;
}

body {
  background-color: var(--color-gothic-bg);
  color: var(--color-silver);
  font-family: var(--font-sans);
  
  /* visionOS Style ambient glow */
  background-image: 
    radial-gradient(circle at 50% 0%, rgba(255, 42, 95, 0.15), transparent 70%),
    radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.08), transparent 60%);
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* iOS 26 / visionOS Glassmorphism */
.bg-gothic-card, .bg-white\\/5 {
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.15);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-sans);
  letter-spacing: -0.02em;
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
`;
fs.writeFileSync('src/index.css', cssContent);

// 5. Update index.html
let htmlContent = fs.readFileSync('index.html', 'utf8');
htmlContent = htmlContent.replace(/<link rel="preconnect".*?rel="stylesheet">/gs, '');
fs.writeFileSync('index.html', htmlContent);

console.log("Done");

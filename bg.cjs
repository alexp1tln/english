const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

const newBody = `body {
  background-color: #000000;
  color: var(--color-silver);
  font-family: var(--font-sans);
  
  /* Very Dark Mesh Gradient Background */
  background-image: 
    radial-gradient(circle at 15% 50%, rgba(255, 42, 95, 0.08), transparent 50%),
    radial-gradient(circle at 85% 30%, rgba(255, 255, 255, 0.05), transparent 50%),
    radial-gradient(circle at 50% 90%, rgba(56, 0, 8, 0.15), transparent 60%),
    url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;

css = css.replace(/body\s*{[^}]+}/, newBody);
fs.writeFileSync('src/index.css', css);

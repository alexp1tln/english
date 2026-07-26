const fs = require('fs');
let c = fs.readFileSync('src/components/IrregularVerbs.tsx', 'utf8');

c = c.replace(
    /<h2 className="text-4xl font-sans font-semibold tracking-tight text-white mb-4 text-center">\{currentVerb\.base\}<\/h2>\n              <p className="text-lg text-white\/40 tracking-wide font-light">\{currentVerb\.translation\}<\/p>/,
    `<h2 className="text-4xl font-sans font-semibold tracking-tight text-white mb-2 text-center">{currentVerb.base}</h2>
              <p className="text-md text-white/60 tracking-wide font-light mb-4">{currentVerb.transcription}</p>
              <p className="text-lg text-white/40 tracking-wide font-light">{currentVerb.translation}</p>`
);

fs.writeFileSync('src/components/IrregularVerbs.tsx', c);

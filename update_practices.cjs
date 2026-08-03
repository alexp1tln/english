const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// InfiniteTraining signature
content = content.replace(
  /function InfiniteTraining\(\{ setView \}: \{ key\?: string, setView: \(v: ViewState\) => void \}\)/,
  "function InfiniteTraining({ setView, onActivity }: { key?: string, setView: (v: ViewState) => void, onActivity?: () => void })"
);

// InfiniteTraining interaction
content = content.replace(
  /const nextWord = \(\) => \{/,
  "const nextWord = () => {\n    if (onActivity) onActivity();"
);

// IrregularVerbs signature
content = content.replace(
  /function IrregularVerbs\(\{ setView \}: \{ key\?: string, setView: \(v: ViewState\) => void \}\)/,
  "function IrregularVerbs({ setView, onActivity }: { key?: string, setView: (v: ViewState) => void, onActivity?: () => void })"
);

// IrregularVerbs interaction
content = content.replace(
  /const checkAnswer = \(\) => \{/,
  "const checkAnswer = () => {\n    if (onActivity) onActivity();"
);

// App.tsx JSX props
content = content.replace(
  /<InfiniteTraining key="infinite" setView=\{setView\} \/>/,
  `<InfiniteTraining key="infinite" setView={setView} onActivity={updateActivity} />`
);
content = content.replace(
  /<IrregularVerbs key="irregular_verbs" setView=\{setView\} \/>/,
  `<IrregularVerbs key="irregular_verbs" setView={setView} onActivity={updateActivity} />`
);

fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log('patched practices');

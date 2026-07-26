const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf8');

c = c.replace(
    /const \[testScore, setTestScore\] = useState<\{score: number, total: number\} \| null>\(null\);/,
    `const [testScore, setTestScore] = useState<{score: number, total: number, mistakes: any[]} | null>(null);`
);

c = c.replace(
    /onFinish=\{\(score, total\) => \{/,
    `onFinish={(score, total, mistakes) => {`
);

c = c.replace(
    /setTestScore\(\{score, total\}\);/,
    `setTestScore({score, total, mistakes: mistakes || []});`
);

c = c.replace(
    /<ModuleTestResult key="module_test_result" score=\{testScore\.score\} total=\{testScore\.total\} moduleId=\{currentTestModule!\} onBack=\{\(\) => setView\('roadmap'\)\} \/>/,
    `<ModuleTestResult key="module_test_result" score={testScore.score} total={testScore.total} mistakes={testScore.mistakes} moduleId={currentTestModule!} onBack={() => setView('roadmap')} />`
);

fs.writeFileSync('src/App.tsx', c);

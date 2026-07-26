const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf8');

if (!c.includes("import IrregularVerbs")) {
  c = c.replace(
      /import ModuleTestResult from "\.\/components\/ModuleTestResult";/,
      `import ModuleTestResult from "./components/ModuleTestResult";\nimport IrregularVerbs from "./components/IrregularVerbs";`
  );
}

c = c.replace(
    /\{view === 'module_test_result' && testScore && \([\s\S]*?\}\)/,
    `{view === 'module_test_result' && testScore && (
              <ModuleTestResult key="module_test_result" score={testScore.score} total={testScore.total} mistakes={testScore.mistakes} moduleId={currentTestModule!} onBack={() => setView('roadmap')} />
            )}
            {view === 'irregular_verbs' && (
              <IrregularVerbs key="irregular_verbs" setView={setView} />
            )}`
);

fs.writeFileSync('src/App.tsx', c);

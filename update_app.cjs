const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Add new states
content = content.replace(
    /const \[currentLesson, setCurrentLesson\] = useState<Lesson \| null>\(null\);/,
    `const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [currentTestModule, setCurrentTestModule] = useState<number | null>(null);
  const [testScore, setTestScore] = useState<{score: number, total: number} | null>(null);`
);

// Update CityMapProgress usage
content = content.replace(
    /<CityMapProgress key="roadmap" setView=\{setView\} lessons=\{lessons\} completedLessons=\{completedLessons\} onSelect=\{\(lesson\) => \{[\s\S]*?\}\} \/>/,
    `<CityMapProgress key="roadmap" setView={setView} lessons={lessons} completedLessons={completedLessons} onSelect={(lesson) => {
                setCurrentLesson(lesson);
                setView('lesson_theory');
              }} onSelectTest={(moduleId) => {
                setCurrentTestModule(moduleId);
                setView('module_test');
              }} />`
);

// Add module_test views
content = content.replace(
    /\{view === 'survival' && \([\s\S]*?\)\}/,
    `{view === 'survival' && (
              <LifeSurvival key="survival" setView={setView} />
            )}
            {view === 'module_test' && currentTestModule && (
              <ModuleTest key="module_test" moduleId={currentTestModule} lessons={lessons} onFinish={(score, total) => {
                const id = \`test_\${currentTestModule}\`;
                if (!completedLessons.includes(id)) {
                  setCompletedLessons([...completedLessons, id]);
                }
                setTestScore({score, total});
                setView('module_test_result');
              }} onBack={() => setView('roadmap')} />
            )}
            {view === 'module_test_result' && testScore && (
              <ModuleTestResult key="module_test_result" score={testScore.score} total={testScore.total} moduleId={currentTestModule!} onBack={() => setView('roadmap')} />
            )}`
);

fs.writeFileSync('src/App.tsx', content);

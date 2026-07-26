const fs = require('fs');
let c = fs.readFileSync('src/components/ModuleTest.tsx', 'utf8');

c = c.replace(
    /useEffect\(\(\) => \{[\s\S]*?setQuestions\(allQs\.slice\(0, 10\)\);\n  \}, \[moduleId, lessons\]\);/m,
    `useEffect(() => {
    // Gather all questions for this module
    const moduleLessons = lessons.filter(l => l.moduleId === moduleId);
    let allQs: QuizQuestion[] = [];
    moduleLessons.forEach(l => {
      allQs = allQs.concat(l.quiz);
    });
    
    // Read mistakes
    let mistakes: string[] = [];
    try {
      mistakes = JSON.parse(localStorage.getItem('mistakes') || '[]');
    } catch(e) {}

    // Find mistakes belonging to this module
    const mistakeQs = allQs.filter(q => mistakes.includes(q.id));
    const regularQs = allQs.filter(q => !mistakes.includes(q.id));

    mistakeQs.sort(() => Math.random() - 0.5);
    regularQs.sort(() => Math.random() - 0.5);

    let finalQs = mistakeQs.concat(regularQs).slice(0, 10);
    finalQs.sort(() => Math.random() - 0.5);

    setQuestions(finalQs);
  }, [moduleId, lessons]);`
);

fs.writeFileSync('src/components/ModuleTest.tsx', c);

const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const newViews = `
            {view === 'ai_practice_prompt' && currentLesson && (
              <AiPracticePrompt 
                key="ai_prompt" 
                lesson={currentLesson} 
                onStart={(q) => { setAiQuestions(q); setView('ai_practice_quiz'); }} 
                onSkip={() => setView('roadmap')} 
              />
            )}
            {view === 'ai_practice_quiz' && currentLesson && (
              <LessonQuiz 
                key="ai_quiz" 
                questions={aiQuestions} 
                theory={currentLesson.theory} 
                onFinish={() => setView('roadmap')} 
                onBack={() => setView('ai_practice_prompt')} 
              />
            )}
`;

content = content.replace(
  "onBack={() => setView('lesson_theory')} />\n            )}",
  "onBack={() => setView('lesson_theory')} />\n            )}" + newViews
);

fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log('patched views in App.tsx');

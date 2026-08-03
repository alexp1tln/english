const fs = require('fs');

const content = fs.readFileSync('src/App.tsx', 'utf-8');

const startStr = '        <div className="flex-1 w-full h-full relative overflow-y-auto overflow-x-hidden no-scrollbar pb-6 px-6 pt-6">';
const startIdx = content.indexOf(startStr) + startStr.length;

const endStr = '                setTestScore({score, total, mistakes: mistakes || []});';
const endIdx = content.indexOf(endStr);

const correctChunk = `
          <AnimatePresence mode="wait">
            {view === 'menu' && (
              <MainMenu key="menu" setView={setView} completedCount={completedLessons.filter(id => id.startsWith('l')).length} totalCount={lessons.length} />
            )}
            {view === 'roadmap' && (
              <CityMapProgress key="roadmap" setView={setView} lessons={lessons} completedLessons={completedLessons} onSelect={(lesson) => {
                setCurrentLesson(lesson);
                setView('lesson_theory');
              }} onSelectTest={(modId) => {
                setCurrentTestModule(modId);
                setView('module_test');
              }} />
            )}
            {view === 'lesson_theory' && currentLesson && (
              <LessonTheory key="theory" lesson={currentLesson} onNext={() => setView('lesson_quiz')} onBack={() => setView('roadmap')} />
            )}
            {view === 'lesson_quiz' && currentLesson && (
              <LessonQuiz key="quiz" questions={currentLesson.quiz} theory={currentLesson.theory} onFinish={() => {
                markLessonCompleted(currentLesson.id);
                setView('roadmap');
              }} onBack={() => setView('lesson_theory')} />
            )}
            {view === 'infinite_training' && (
              <InfiniteTraining key="infinite" setView={setView} />
            )}
            {view === 'dictionary' && (
              <Dictionary key="dictionary" setView={setView} />
            )}
            {view === 'module_test' && currentTestModule && (
              <ModuleTest key="module_test" moduleId={currentTestModule} lessons={lessons} onFinish={(score, total, mistakes) => {
                const id = \`test_\${currentTestModule}\`;
                if (score >= total * 0.8) {
                  if (!completedLessons.includes(id)) {
                    const newCompleted = [...completedLessons, id];
                    setCompletedLessons(newCompleted);
                    safeStorage.setItem('rabbitsEnglishCompleted', JSON.stringify(newCompleted));
                    
                    const praiseMessages = [
                      { title: "Потрясающая работа!", message: "Ты покорил этот модуль." },
                      { title: "Великолепный результат!", message: "Твой английский стал еще лучше." },
                      { title: "Отлично справился!", message: "Еще один шаг к идеальному английскому." },
                      { title: "Невероятно!", message: "Твои знания растут с каждым днем." },
                      { title: "Так держать!", message: "Модуль пройден блестяще." }
                    ];
                    const praise = praiseMessages[(currentTestModule - 1) % praiseMessages.length];
                    showNotification(praise.title, praise.message);
                  }
                } else {
                  showNotification("Не сдавайся!", "Нужно набрать минимум 80% правильных ответов для прохождения модуля.");
                }
`;

const fixed = content.substring(0, startIdx) + correctChunk + content.substring(endIdx);
fs.writeFileSync('src/App.tsx', fixed, 'utf-8');
console.log('Fixed App.tsx again');

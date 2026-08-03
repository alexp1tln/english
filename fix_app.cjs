const fs = require('fs');

const content = fs.readFileSync('src/App.tsx', 'utf-8');

// The broken code starts at:
//   const markLessonCompleted = (id: string) => {
//         
//                 if (score >= total * 0.8) {

const brokenStart = content.indexOf('  const markLessonCompleted = (id: string) => {');
const brokenEndStr = `                setTestScore({score, total, mistakes: mistakes || []});
                setView('module_test_result');
              }} onBack={() => setView('roadmap')} />`;

const brokenEnd = content.indexOf(brokenEndStr) + brokenEndStr.length;

const correctChunk = `  const markLessonCompleted = (id: string) => {
    if (!completedLessons.includes(id)) {
      const newCompleted = [...completedLessons, id];
      setCompletedLessons(newCompleted);
      safeStorage.setItem('rabbitsEnglishCompleted', JSON.stringify(newCompleted));
    }
  };

  const showNotification = (title: string, message: string) => {
    setNotification({title, message});
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-start overflow-hidden bg-transparent font-sans relative z-0">
      <AnimatedBackground />
      <div className="w-full max-w-md h-viewport pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] relative flex flex-col bg-transparent z-10">
        
        {/* Notification Toast */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className="absolute top-0 left-4 right-4 z-50 flex items-center gap-4 p-4 rounded-[2.5rem] bg-black/95 backdrop-blur-2xl border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            >
              <div className="w-10 h-10 rounded-full bg-gothic-card flex items-center justify-center overflow-hidden border border-white/5 shrink-0">
                <span className="text-xl font-bold text-white tracking-tighter">!</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm tracking-wide">{notification.title}</span>
                <span className="text-white/50 text-xs tracking-wider">{notification.message}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex-1 w-full h-full relative overflow-y-auto overflow-x-hidden no-scrollbar pb-6 px-6 pt-6">
          <AnimatePresence mode="wait">
            {view === 'menu' && (
              <MainMenu key="menu" setView={setView} completedCount={completedLessons.filter(id => id.startsWith('l')).length} totalCount={lessons.length} />
            )}
            {view === 'roadmap' && (
              <CityMapProgress key="roadmap" setView={setView} setCurrentLesson={setCurrentLesson} setCurrentTestModule={setCurrentTestModule} completedLessons={completedLessons} lessons={lessons} />
            )}
            {view === 'lesson_theory' && currentLesson && (
              <LessonTheory key="theory" lesson={currentLesson} onNext={() => setView('lesson_words')} onBack={() => setView('roadmap')} />
            )}
            {view === 'lesson_words' && currentLesson && (
              <LessonWords key="words" words={currentLesson.words} onNext={() => setView('lesson_quiz')} onBack={() => setView('lesson_theory')} />
            )}
            {view === 'lesson_quiz' && currentLesson && (
              <LessonQuiz key="quiz" lesson={currentLesson} onFinish={() => {
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
                setTestScore({score, total, mistakes: mistakes || []});
                setView('module_test_result');
              }} onBack={() => setView('roadmap')} />`;

const fixed = content.substring(0, brokenStart) + correctChunk + content.substring(brokenEnd);

fs.writeFileSync('src/App.tsx', fixed, 'utf-8');
console.log('Fixed App.tsx successfully');

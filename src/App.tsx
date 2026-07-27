import { safeStorage } from "./utils/storage";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowLeft, BookOpen, Infinity as InfinityIcon, Sparkles, Check, X, Search, BookText, ChevronDown, Compass, Zap } from 'lucide-react';
import { lessons, vocabulary } from './courseData';
import { Lesson, ViewState, Word, QuizQuestion } from './types';
import CityMapProgress from './components/CityMapProgress';
import LifeSurvival from './components/LifeSurvival';
import ModuleTest from "./components/ModuleTest";
import ModuleTestResult from "./components/ModuleTestResult";
import IrregularVerbs from "./components/IrregularVerbs";

export default function App() {
  const [view, setView] = useState<ViewState>('menu');
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [currentTestModule, setCurrentTestModule] = useState<number | null>(null);
  const [testScore, setTestScore] = useState<{score: number, total: number, mistakes: any[]} | null>(null);
  
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [notification, setNotification] = useState<{title: string, message: string} | null>(null);

  useEffect(() => {
    const saved = safeStorage.getItem('darkBunnyCompleted');
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, []);

  const markLessonCompleted = (id: string) => {
    if (!completedLessons.includes(id)) {
      const newCompleted = [...completedLessons, id];
      setCompletedLessons(newCompleted);
      safeStorage.setItem('darkBunnyCompleted', JSON.stringify(newCompleted));
    }
  };

  const showNotification = (title: string, message: string) => {
    setNotification({ title, message });
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-start overflow-hidden bg-black font-sans">
      <div className="w-full max-w-md h-viewport pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] relative flex flex-col bg-transparent">
        
        {/* Notification Toast */}
        <AnimatePresence>
          {notification && (
            <motion.div 
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 20, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className="absolute top-0 left-4 right-4 z-50 flex items-center gap-4 p-4 rounded-[2.5rem] bg-black/95 backdrop-blur-2xl border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            >
              <div className="w-10 h-10 rounded-full bg-gothic-card flex items-center justify-center overflow-hidden border border-white/5 shrink-0">
                <img src="https://i.postimg.cc/Sx2NghTc/IMG-7263.png" alt="Bunny" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">{notification.title}</h4>
                <p className="text-white/70/80 text-xs">{notification.message}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto relative p-6 no-scrollbar pb-12">
          <AnimatePresence mode="wait">
            {view === 'menu' && (
              <MainMenu key="menu" setView={setView} completedCount={completedLessons.length} totalCount={lessons.length} />
            )}
            {view === 'roadmap' && (
              <CityMapProgress key="roadmap" setView={setView} lessons={lessons} completedLessons={completedLessons} onSelect={(lesson) => {
                setCurrentLesson(lesson);
                setView('lesson_theory');
              }} onSelectTest={(moduleId) => {
                setCurrentTestModule(moduleId);
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
            {view === 'survival' && (
              <LifeSurvival key="survival" setView={setView} />
            )}
            {view === 'module_test' && currentTestModule && (
              <ModuleTest key="module_test" moduleId={currentTestModule} lessons={lessons} onFinish={(score, total, mistakes) => {
                const id = `test_${currentTestModule}`;
                if (!completedLessons.includes(id)) {
                  const newCompleted = [...completedLessons, id];
                  setCompletedLessons(newCompleted);
                  safeStorage.setItem('darkBunnyCompleted', JSON.stringify(newCompleted));
                  
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
                setTestScore({score, total, mistakes: mistakes || []});
                setView('module_test_result');
              }} onBack={() => setView('roadmap')} />
            )}
            {view === 'module_test_result' && testScore && (
              <ModuleTestResult key="module_test_result" score={testScore.score} total={testScore.total} mistakes={testScore.mistakes} moduleId={currentTestModule!} onBack={() => setView('roadmap')} />
            )}
            {view === 'irregular_verbs' && (
              <IrregularVerbs key="irregular_verbs" setView={setView} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function MainMenu({ setView, completedCount, totalCount }: { key?: string, setView: (v: ViewState) => void, completedCount: number, totalCount: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-6 pb-12 pt-8"
    >
      <div className="text-center space-y-4 mb-4 flex flex-col items-center">
        <img src="https://i.postimg.cc/Sx2NghTc/IMG-7263.png" alt="Dark Bunny" className="w-32 h-32 object-contain mb-2 drop-shadow-[0_0_15px_rgba(96,0,24,0.5)]" referrerPolicy="no-referrer" />
        <h1 className="text-4xl font-bold tracking-tight text-white">RABBIT'S ENGLISH</h1>
        <p className="text-white/70/70 text-xs tracking-[0.3em] uppercase">English Academy</p>
      </div>

      <button 
        onClick={() => setView('roadmap')}
        className="w-full relative group p-6 rounded-[2.5rem] bg-gothic-card hover:bg-gothic-card-hover backdrop-blur-xl border border-gothic-border hover:border-gothic-border-hover shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col items-start gap-4 transition-all duration-300 active:scale-95"
      >
        <div className="flex items-center gap-3">
          <BookOpen size={28} className="text-white/70 opacity-80" />
          <span className="text-lg font-sans font-semibold tracking-tight text-white tracking-wide">Прохождение курса</span>
        </div>
        <div className="w-full bg-black/95 h-[3px] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-burgundy to-burgundy-light rounded-full" style={{ width: `${(completedCount / totalCount) * 100}%` }} />
        </div>
        <p className="text-xs text-white/20 uppercase tracking-widest font-light">Пройдено {completedCount} из {totalCount} уроков</p>
      </button>

      <div className="flex gap-4 w-full">
        <button 
          onClick={() => setView('dictionary')}
          className="flex-1 relative group p-6 rounded-[2.5rem] bg-gothic-card hover:bg-gothic-card-hover backdrop-blur-xl border border-gothic-border hover:border-gothic-border-hover shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center gap-3 transition-all duration-300 active:scale-95"
        >
          <BookText size={24} className="text-white/40 group-hover:text-white/70 transition-colors" />
          <span className="text-sm font-medium tracking-wide text-white">Словарь</span>
        </button>
        
        <button 
          onClick={() => setView('infinite_training')}
          className="flex-1 relative group p-6 rounded-[2.5rem] bg-gothic-card hover:bg-gothic-card-hover backdrop-blur-xl border border-gothic-border hover:border-gothic-border-hover shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center gap-3 transition-all duration-300 active:scale-95"
        >
          <InfinityIcon size={24} className="text-white/40 group-hover:text-white/70 transition-colors" />
          <span className="text-sm font-medium tracking-wide text-white text-center">Лексика</span>
        </button>
      </div>

      <div className="w-full flex flex-col gap-3 mt-2">
        <h3 className="text-[10px] uppercase tracking-wide text-white/20 mb-1 ml-2 ">Интерактив</h3>

        <button onClick={() => setView('survival')} className="w-full p-5 rounded-[2.5rem] bg-gothic-card hover:bg-gothic-card-hover border border-gothic-border hover:border-gothic-border-hover flex items-center justify-between active:scale-95 transition-all duration-300 shadow-lg">
          <div className="flex items-center gap-4"><Compass size={20} className="text-burgundy-light"/> <span className="text-white text-sm font-medium tracking-wide">Бытовые квесты</span></div>
          <ChevronRight size={16} className="text-white/70/30 group-hover:text-white/70 transition-colors" />
        </button>
        <button onClick={() => setView('irregular_verbs')} className="w-full p-5 rounded-[2.5rem] bg-gothic-card hover:bg-gothic-card-hover border border-gothic-border hover:border-gothic-border-hover flex items-center justify-between active:scale-95 transition-all duration-300 shadow-lg">
          <div className="flex items-center gap-4"><Zap size={20} className="text-burgundy-light"/> <span className="text-white text-sm font-medium tracking-wide">Неправильные глаголы</span></div>
          <ChevronRight size={16} className="text-white/70/30 group-hover:text-white/70 transition-colors" />
        </button>
      </div>
    </motion.div>
  );
}

// ... Additional views will be implemented next

function LessonTheory({ lesson, onNext, onBack }: { key?: string, lesson: Lesson, onNext: () => void, onBack: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-8 shrink-0">
        <button onClick={onBack} className="p-3 rounded-full bg-white/5 border border-white/5 active:bg-white/5 text-white/70 hover:bg-white/5 hover:text-white transition-colors">
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-sm font-sans font-semibold tracking-tight tracking-widest text-white/70 truncate flex-1 uppercase">{lesson.title}</h2>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24 space-y-6">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gothic-card border border-gothic-border flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.03)] overflow-hidden">
            <img src="https://i.postimg.cc/Sx2NghTc/IMG-7263.png" alt="Dark Bunny" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
        
        {lesson.theory.map((text, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="p-5 rounded-[2.5rem] bg-gothic-card backdrop-blur-md border border-gothic-border text-white/70 leading-relaxed font-light"
          >
            {text}
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-6 left-6 right-6">
        <button onClick={onNext} className="w-full py-5 rounded-[2.5rem] bg-gradient-to-r from-burgundy to-burgundy-light text-white font-medium tracking-[0.1em] flex justify-center items-center gap-2 active:scale-95 transition-transform shadow-[0_0_20px_rgba(144,0,36,0.3)]">
          Перейти к словам <ChevronRight size={20} />
        </button>
      </div>
    </motion.div>
  );
}

function LessonQuiz({ questions, theory, onFinish, onBack }: { key?: string, questions: QuizQuestion[], theory?: string[], onFinish: () => void, onBack: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [wrongAnswerIdx, setWrongAnswerIdx] = useState<number | null>(null);
  const [hint, setHint] = useState<string | null>(null);
  const [showTheory, setShowTheory] = useState(false);

  const q = questions[currentIndex];

  const handleSelect = (idx: number) => {
    if (isAnswered || wrongAnswerIdx !== null) return;
    
    if (idx === q.correctAnswerIndex) {
      setSelectedAnswer(idx);
      setIsAnswered(true);
      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex(prev => prev + 1);
          setSelectedAnswer(null);
          setIsAnswered(false);
          setHint(null);
        } else {
          onFinish();
        }
      }, 1500);
    } else {
      setWrongAnswerIdx(idx);
      setHint(`Вариант "${q.options[idx]}" не подходит. Подумайте над правилом и попробуйте еще раз.`);
      
      // Save mistake
      try {
         const mistakes = JSON.parse(safeStorage.getItem('mistakes') || '[]');
         if (!mistakes.includes(q.id)) {
            mistakes.push(q.id);
            safeStorage.setItem('mistakes', JSON.stringify(mistakes));
         }
      } catch(e) {}

      setTimeout(() => {
        setWrongAnswerIdx(null);
        setHint(null);
      }, 3000);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-8 shrink-0">
        <button onClick={onBack} className="p-3 rounded-full bg-white/5 border border-white/5 active:bg-white/5 text-white/70 hover:bg-white/5 hover:text-white transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1 bg-gothic-border h-[3px] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-burgundy to-burgundy-light transition-all duration-300 rounded-full" style={{ width: `${((currentIndex) / questions.length) * 100}%` }} />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center pb-24">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="mb-10 text-center px-4">
              <h2 className="text-3xl text-white font-sans font-semibold tracking-tight leading-snug ">{q.question}</h2>
            </div>

            {hint && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 rounded-2xl bg-burgundy/20 border border-burgundy/40 text-white/90 text-sm text-center shadow-[0_0_20px_rgba(144,0,36,0.2)]">
                {hint}
              </motion.div>
            )}
            <div className="flex flex-col gap-4">
              {q.options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === q.correctAnswerIndex;
                let btnClass = "w-full p-5 rounded-[2.5rem] border text-left text-lg transition-all duration-300 relative overflow-hidden ";
                if (isSelected) {
                  btnClass += "bg-white/10 border-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]";
                } else if (wrongAnswerIdx === idx) {
                  btnClass += "bg-burgundy/30 border-burgundy/50 text-white shadow-[0_0_20px_rgba(144,0,36,0.3)]";
                } else {
                  btnClass += "bg-gothic-card hover:bg-gothic-card-hover border-gothic-border text-white/70";
                  if (isAnswered || wrongAnswerIdx !== null) btnClass += " opacity-50";
                  else btnClass += " hover:text-white hover:border-gothic-border-hover active:scale-95";
                }

                return (
                  <button key={idx} onClick={() => handleSelect(idx)} className={btnClass} disabled={isAnswered}>
                    <span className="font-light">{opt}</span>
                    
                    
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {theory && theory.length > 0 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
          <button onClick={() => setShowTheory(true)} className="p-4 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 active:scale-95 transition-all shadow-lg backdrop-blur-md">
             <BookText size={24} />
          </button>
        </div>
      )}

      <AnimatePresence>
        {showTheory && theory && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            className="absolute inset-0 z-50 bg-gothic-bg flex flex-col"
          >
            <div className="flex items-center gap-4 p-6 shrink-0 bg-gothic-card/80 backdrop-blur-xl border-b border-gothic-border">
              <button onClick={() => setShowTheory(false)} className="p-3 rounded-full bg-white/5 border border-white/5 active:bg-white/5 text-white/70 transition-colors hover:bg-white/5 hover:text-white">
                <ChevronDown size={20} />
              </button>
              <h2 className="text-2xl font-sans font-semibold tracking-tight text-white">Теория</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {theory.map((paragraph, idx) => (
                <p key={idx} className="text-white/80 leading-relaxed font-light text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function InfiniteTraining({ setView }: { key?: string, setView: (v: ViewState) => void }) {
  const [mode, setMode] = useState<'cards' | 'quiz'>('cards');
  const [sessionWords, setSessionWords] = useState<Word[]>([]);
  const [seenWords, setSeenWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [quizItems, setQuizItems] = useState<{word: Word, type: 'eng-rus'|'rus-eng'}[]>([]);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    startNewBatch([]);
  }, []);

  const startNewBatch = (currentSeen: Word[]) => {
    const shuffled = [...vocabulary].sort(() => Math.random() - 0.5);
    const newBatch = shuffled.slice(0, 8);
    setSessionWords(newBatch);
    setSeenWords([...currentSeen, ...newBatch]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setMode('cards');
  };

  const nextCard = () => {
    if (currentIndex < sessionWords.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => Math.min(prev + 1, sessionWords.length - 1)), 150);
    } else {
      startQuiz();
    }
  };

  const startQuiz = () => {
    const items: {word: Word, type: 'eng-rus'|'rus-eng'}[] = sessionWords.map(w => ({
      word: w,
      type: Math.random() > 0.5 ? 'eng-rus' : 'rus-eng'
    }));
    
    // Add up to 2 random previously seen words
    const pastWords = seenWords.filter(w => !sessionWords.find(sw => sw.id === w.id));
    if (pastWords.length > 0) {
      const shuffledPast = [...pastWords].sort(() => Math.random() - 0.5);
      const extra = shuffledPast.slice(0, 2);
      extra.forEach(w => {
        items.push({
          word: w,
          type: Math.random() > 0.5 ? 'eng-rus' : 'rus-eng'
        });
      });
    }
    
    items.sort(() => Math.random() - 0.5);
    
    setQuizItems(items);
    setCurrentIndex(0);
    generateOptions(items[0]);
    setMode('quiz');
  };

  const generateOptions = (item: {word: Word, type: 'eng-rus'|'rus-eng'}) => {
    const correctAns = item.type === 'eng-rus' ? item.word.translation : item.word.word;
    const opts = [correctAns];
    while (opts.length < 3) {
      const randWord = vocabulary[Math.floor(Math.random() * vocabulary.length)];
      const wrongAns = item.type === 'eng-rus' ? randWord.translation : randWord.word;
      if (!opts.includes(wrongAns)) opts.push(wrongAns);
    }
    setQuizOptions(opts.sort(() => Math.random() - 0.5));
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleQuizSelect = (opt: string) => {
    if (isAnswered) return;
    setSelectedAnswer(opt);
    setIsAnswered(true);
    
    setTimeout(() => {
      if (currentIndex < quizItems.length - 1) {
        const nextItem = quizItems[currentIndex + 1];
        setCurrentIndex(prev => prev + 1);
        generateOptions(nextItem);
      } else {
        startNewBatch(seenWords);
      }
    }, 1500);
  };

  if (sessionWords.length === 0) return null;

  const currentWord = mode === 'cards' ? sessionWords[Math.min(currentIndex, sessionWords.length - 1)] : quizItems[Math.min(currentIndex, quizItems.length - 1)]?.word;
  const quizType = mode === 'quiz' ? quizItems[currentIndex].type : 'eng-rus';

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col h-full pb-10">
      <div className="flex items-center gap-4 mb-8 shrink-0">
        <button onClick={() => setView('menu')} className="p-3 rounded-full bg-white/5 border border-white/5 active:bg-white/5 text-white/70 hover:text-white hover:bg-white/5 transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1 flex justify-center items-center gap-2 text-white/70">
          <InfinityIcon size={20} />
          <span className="font-sans font-semibold tracking-tight tracking-wide uppercase text-xs">Лексика</span>
        </div>
        <div className="text-xs text-white/70/50 w-11 text-right font-light">
          {currentIndex + 1}/{mode === 'cards' ? sessionWords.length : quizItems.length}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center pb-24">
        <AnimatePresence mode="wait">
          {mode === 'cards' ? (
            <motion.div 
              key={`card-${currentWord.id}`}
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: isFlipped ? 180 : 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full aspect-[3/4] max-h-[400px] relative cursor-pointer perspective-1000 mx-auto"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 backface-hidden rounded-[2.5rem] bg-gothic-card border border-gothic-border flex flex-col items-center justify-center p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                <Sparkles className="absolute top-6 right-6 text-white/70/20" size={24} />
                <h2 className="text-4xl font-sans font-semibold tracking-tight text-white mb-4 text-center">{currentWord.word}</h2>
                <p className="text-lg text-white/40 tracking-wide font-light">{currentWord.transcription}</p>
                <p className="absolute bottom-8 text-xs uppercase tracking-widest text-white/70/30 font-light">Нажми, чтобы перевернуть</p>
              </div>
              <div className="absolute inset-0 backface-hidden rounded-[2.5rem] bg-burgundy/20 border border-burgundy/40 flex flex-col items-center justify-center p-8 shadow-[0_0_40px_rgba(144,0,36,0.2)] backdrop-blur-xl" style={{ transform: 'rotateY(180deg)' }}>
                <h2 className="text-3xl font-sans font-semibold tracking-tight text-white text-center leading-snug ">{currentWord.translation}</h2>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key={`quiz-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="w-full"
            >
              <div className="mb-10 text-center">
                <h3 className="text-white/70/50 uppercase tracking-wide font-light text-xs mb-4">Как переводится?</h3>
                <h2 className="text-4xl text-white font-sans font-semibold tracking-tight ">{quizType === 'eng-rus' ? currentWord.word : currentWord.translation}</h2>
              </div>
              <div className="flex flex-col gap-4">
                {quizOptions.map((opt, idx) => {
                  const isSelected = selectedAnswer === opt;
                  const correctAns = quizType === 'eng-rus' ? currentWord.translation : currentWord.word;
                  const isCorrect = opt === correctAns;
                  let btnClass = "w-full p-5 rounded-[2.5rem] border text-left text-lg transition-all duration-300 relative overflow-hidden ";
                  if (isSelected) {
                    btnClass += "bg-white/10 border-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]";
                  } else {
                    btnClass += "bg-gothic-card hover:bg-gothic-card-hover border-gothic-border text-white/70";
                    if (isAnswered) btnClass += " opacity-50";
                    else btnClass += " hover:text-white hover:border-gothic-border-hover active:scale-95";
                  }

                  return (
                    <button key={idx} onClick={() => handleQuizSelect(opt)} className={btnClass} disabled={isAnswered}>
                      <span className="font-light relative z-10">{opt}</span>
                      {isAnswered && isSelected && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-20">
                          {isCorrect ? (
                            <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                              <Check size={24} />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                              <X size={24} />
                            </div>
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {mode === 'cards' && (
        <div className="absolute bottom-6 left-6 right-6">
          <button onClick={nextCard} className="w-full py-5 rounded-[2.5rem] bg-white/5 border border-white/5 text-white font-medium tracking-wide flex justify-center items-center gap-2 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.02)] hover:bg-white/15">
             {currentIndex < sessionWords.length - 1 ? 'Дальше' : 'Начать тест'} <ChevronRight size={18} />
          </button>
        </div>
      )}
    </motion.div>
  );
}

function Dictionary({ setView }: { key?: string, setView: (v: ViewState) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(vocabulary.map(w => w.category || 'Другое')));

  const filteredWords = vocabulary.filter(w => {
    const matchesSearch = w.word.toLowerCase().includes(searchTerm.toLowerCase()) || w.translation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory ? (w.category || 'Другое') === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col h-full pb-10">
      <div className="flex items-center gap-4 mb-6 shrink-0">
        <button onClick={() => setView('menu')} className="p-3 rounded-full bg-white/5 border border-white/5 active:bg-white/5 text-white/70 hover:text-white hover:bg-white/5 transition-colors">
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-2xl font-sans font-semibold tracking-tight tracking-wide text-white">Словарь</h2>
      </div>

      <div className="relative mb-6 shrink-0">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70/50" size={20} />
        <input 
          type="text" 
          placeholder="Поиск слов..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gothic-card border border-gothic-border rounded-[2.5rem] py-4 pl-12 pr-4 text-white placeholder-silver/40 focus:outline-none focus:border-white/5 transition-colors font-light"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-2 shrink-0">
        <button 
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full whitespace-nowrap text-sm transition-colors border ${!activeCategory ? 'bg-burgundy text-white border-burgundy' : 'bg-gothic-card text-white/70 border-gothic-border hover:border-gothic-border-hover'}`}
        >
          Все слова
        </button>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm transition-colors border ${activeCategory === cat ? 'bg-burgundy text-white border-burgundy' : 'bg-gothic-card text-white/70 border-gothic-border hover:border-gothic-border-hover'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="grid grid-cols-1 gap-3 pb-8">
          {filteredWords.length > 0 ? filteredWords.map(word => (
            <div key={word.id} className="p-4 rounded-[2.5rem] bg-gothic-card border border-gothic-border flex flex-col gap-1 hover:border-gothic-border-hover transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-white font-medium text-lg font-sans font-semibold tracking-tight tracking-wide">{word.word}</span>
                <span className="text-xs text-white/40 tracking-wider bg-black/90 px-2 py-1 rounded-md uppercase font-light">{word.category || 'Другое'}</span>
              </div>
              <span className="text-white/70/50 font-light">{word.transcription}</span>
              <span className="text-white/70 font-sans font-semibold tracking-tight text-lg mt-1">{word.translation}</span>
            </div>
          )) : (
            <div className="text-center text-white/70/50 py-10">Слова не найдены</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

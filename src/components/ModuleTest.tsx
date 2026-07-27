import { safeStorage } from "../utils/storage";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Check, X } from 'lucide-react';
import { Lesson, QuizQuestion } from '../types';

interface ModuleTestProps { key?: React.Key | string; 
  moduleId: number;
  lessons: Lesson[];
  onFinish: (score: number, total: number, mistakes: { question: string, correct: string, selected: string }[]) => void;
  onBack: () => void;
}

export default function ModuleTest({ moduleId, lessons, onFinish, onBack }: ModuleTestProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [mistakesList, setMistakesList] = useState<{ question: string, correct: string, selected: string }[]>([]);

  useEffect(() => {
    // Gather all questions for this module
    const moduleLessons = lessons.filter(l => l.moduleId === moduleId);
    let allQs: QuizQuestion[] = [];
    moduleLessons.forEach(l => {
      allQs = allQs.concat(l.quiz);
    });
    
    // Read mistakes
    let mistakes: string[] = [];
    try {
      mistakes = JSON.parse(safeStorage.getItem('mistakes') || '[]');
    } catch(e) {}

    // Find mistakes belonging to this module
    const mistakeQs = allQs.filter(q => mistakes.includes(q.id));
    const regularQs = allQs.filter(q => !mistakes.includes(q.id));

    mistakeQs.sort(() => Math.random() - 0.5);
    regularQs.sort(() => Math.random() - 0.5);

    let finalQs = mistakeQs.concat(regularQs).slice(0, 10);
    finalQs.sort(() => Math.random() - 0.5);

    setQuestions(finalQs);
  }, [moduleId, lessons]);

  if (questions.length === 0) return null;

  const q = questions[currentIndex];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    setIsAnswered(true);
    
    let isCorrect = idx === q.correctAnswerIndex;
    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      setMistakesList(prev => [...prev, {
         question: q.question,
         correct: q.options[q.correctAnswerIndex],
         selected: q.options[idx]
      }]);
    }
    
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => Math.min(prev + 1, questions.length - 1));
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        const finalMistakes = isCorrect ? mistakesList : [...mistakesList, {
          question: q.question,
          correct: q.options[q.correctAnswerIndex],
          selected: q.options[idx]
        }];
        onFinish(score + (isCorrect ? 1 : 0), questions.length, finalMistakes);
      }
    }, 1200);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col h-full w-full absolute inset-0 bg-[#000000]">
      <div className="flex items-center gap-4 mb-8 shrink-0 p-6 z-20">
        <button onClick={onBack} className="p-3 rounded-full bg-white/5 border border-white/5 active:bg-white/5 text-white/70 hover:bg-white/5 hover:text-white transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1 bg-gothic-border h-[3px] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-burgundy to-burgundy-light transition-all duration-300 rounded-full" style={{ width: `${((currentIndex) / questions.length) * 100}%` }} />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center pb-24 px-6 z-10 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-silver/5 rounded-[2.5rem] blur-[100px] pointer-events-none" />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full relative"
          >
            <div className="mb-10 text-center px-4">
               <h3 className="text-white/70/50 uppercase tracking-wide font-light text-xs mb-4">Вопрос {currentIndex + 1} из {questions.length}</h3>
              <h2 className="text-3xl text-white font-sans font-semibold tracking-tight leading-snug ">{q.question}</h2>
            </div>

            <div className="flex flex-col gap-4">
              {q.options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                
                let btnClass = "w-full p-5 rounded-[2.5rem] border text-left text-lg transition-all duration-300 relative overflow-hidden ";
                if (isSelected) {
                  btnClass += "bg-white/10 border-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]";
                } else {
                  btnClass += "bg-gothic-card hover:bg-gothic-card-hover border-gothic-border text-white/70";
                  if (isAnswered) btnClass += " opacity-50";
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
    </motion.div>
  );
}

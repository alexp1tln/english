import { safeStorage } from "../utils/storage";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, } from 'lucide-react';
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
  const [droppedIndices, setDroppedIndices] = useState<number[]>([]);
  const [textInput, setTextInput] = useState('');
  
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [mistakesList, setMistakesList] = useState<{ question: string, correct: string, selected: string }[]>([]);

  useEffect(() => {
    const moduleLessons = lessons.filter(l => l.moduleId === moduleId);
    let allQs: QuizQuestion[] = [];
    moduleLessons.forEach(l => {
      allQs = allQs.concat(l.quiz);
    });
    
    let mistakes: string[] = [];
    try {
      mistakes = JSON.parse(safeStorage.getItem('mistakes') || '[]');
    } catch(e) { console.error(e); }

    const mistakeQs = allQs.filter(q => mistakes.includes(q.id));
    const regularQs = allQs.filter(q => !mistakes.includes(q.id));

    mistakeQs.sort(() => Math.random() - 0.5);
    regularQs.sort(() => Math.random() - 0.5);

    const finalQs = mistakeQs.concat(regularQs).slice(0, 20);
    finalQs.sort(() => Math.random() - 0.5);

    setQuestions(finalQs);
  }, [moduleId, lessons]);
  
  useEffect(() => {
    setSelectedAnswer(null);
    setDroppedIndices([]);
    setTextInput('');
    setIsAnswered(false);
  }, [currentIndex]);

  if (questions.length === 0) return null;

  const q = questions[currentIndex];
  
  const processNext = (isCorrect: boolean, correctText: string, selectedText: string) => {
    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      setMistakesList(prev => [...prev, { 
         question: q.question, 
         correct: correctText, 
         selected: selectedText
      }]);
    }
    
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => Math.min(prev + 1, questions.length - 1));
      } else {
        const finalMistakes = isCorrect ? mistakesList : [...mistakesList, {
          question: q.question,
          correct: correctText,
          selected: selectedText
        }];
        onFinish(score + (isCorrect ? 1 : 0), questions.length, finalMistakes);
      }
    }, 1200);
  };

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    setIsAnswered(true);
    
    const isCorrect = idx === q.correctAnswerIndex;
    const correctText = q.options?.[q.correctAnswerIndex ?? 0] || '';
    const selectedText = q.options?.[idx] || '';
    
    processNext(isCorrect, correctText, selectedText);
  };
  
  const checkDragAndDrop = () => {
    if (isAnswered) return;
    setIsAnswered(true);
    
    const constructedSentence = droppedIndices.map(i => q.options?.[i]).join(' ');
    const isCorrect = q.correctSentence && constructedSentence === q.correctSentence.join(' ');
    const correctText = q.correctSentence?.join(' ') || '';
    const selectedText = constructedSentence;
    
    processNext(!!isCorrect, correctText, selectedText);
  };
  
  const checkFillInBlank = () => {
    if (isAnswered) return;
    setIsAnswered(true);
    
    const input = textInput.trim().toLowerCase();
    const isCorrect = (q.correctAnswer && input === q.correctAnswer.toLowerCase()) || 
                      (q.correctAnswers && q.correctAnswers.some(ans => input === ans.toLowerCase()));
    
    const correctText = q.correctAnswers ? q.correctAnswers.join(' / ') : (q.correctAnswer || '');
    const selectedText = textInput;
    
    processNext(!!isCorrect, correctText, selectedText);
  };
  
  const handleWordClick = (wordOrIndex: number | string) => {
    const index = typeof wordOrIndex === 'number' ? wordOrIndex : -1;
    if (index === -1) return;
    if (isAnswered) return;
    if (droppedIndices.includes(index)) {
      setDroppedIndices(droppedIndices.filter(i => i !== index));
    } else {
      setDroppedIndices([...droppedIndices, index]);
    }
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
              <h2 className="text-3xl text-white font-sans font-semibold tracking-tight leading-snug break-words">{q.question}</h2>
            </div>
            
            {(!q.type || q.type === 'multiple_choice') && (
              <div className="flex flex-col gap-4 w-full">
                {q.options?.map((opt, idx) => {
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
            )}
            
            {q.type === 'drag_and_drop' && (
              <div className="flex flex-col gap-8 w-full items-center">
                <div className="min-h-[80px] w-full p-4 rounded-2xl border border-dashed border-white/20 bg-white/5 flex flex-wrap gap-2 items-center justify-center">
                  {droppedIndices.map((optIndex, position) => (
                    <motion.button
                      layout
                      key={`dropped-${position}-${optIndex}`}
                      onClick={() => handleWordClick(optIndex)}
                      className="px-4 py-2 bg-white/20 border border-white/30 rounded-xl text-white shadow-lg active:scale-95"
                    >
                      {q.options?.[optIndex]}
                    </motion.button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {q.options?.map((word, idx) => {
                    if (droppedIndices.includes(idx)) return null;
                    return (
                      <motion.button
                        layout
                        key={`opt-${idx}-${word}`}
                        onClick={() => handleWordClick(idx)}
                        className="px-4 py-2 bg-gothic-card border border-gothic-border rounded-xl text-white/80 active:scale-95 shadow-md"
                      >
                        {word}
                      </motion.button>
                    );
                  })}
                </div>
                <button
                  onClick={checkDragAndDrop}
                  disabled={droppedIndices.length !== q.correctSentence?.length || isAnswered}
                  className="mt-4 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                >
                  Проверить
                </button>
              </div>
            )}
            
            {q.type === 'fill_in_blank' && (
              <div className="flex flex-col gap-6 w-full items-center">
                <input
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  disabled={isAnswered}
                  placeholder="Введите ответ..."
                  className="w-full p-5 rounded-[2rem] bg-gothic-card border border-gothic-border text-white text-lg placeholder-white/30 outline-none focus:border-white/40 transition-colors"
                />
                <button
                  onClick={checkFillInBlank}
                  disabled={!textInput.trim() || isAnswered}
                  className="w-full px-8 py-4 bg-white/10 text-white font-semibold rounded-[2rem] border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all"
                >
                  Проверить
                </button>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

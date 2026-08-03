import { safeStorage } from "../utils/storage";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, BookText, ChevronDown } from 'lucide-react';
import { QuizQuestion } from '../types';

export default function LessonQuiz({ questions, theory, onFinish, onBack }: { key?: string, questions: QuizQuestion[], theory?: string[], onFinish: () => void, onBack: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // For multiple_choice
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  // For drag_and_drop
  const [droppedIndices, setDroppedIndices] = useState<number[]>([]);
  
  // For fill_in_blank
  const [textInput, setTextInput] = useState('');
  
  const [isAnswered, setIsAnswered] = useState(false);
  const [wrongAnswerIdx, setWrongAnswerIdx] = useState<number | null>(null);
  const [hint, setHint] = useState<string | null>(null);
  const [showTheory, setShowTheory] = useState(false);
  
  const q = questions[currentIndex];
  
  // Clean up state on question change
  useEffect(() => {
    setSelectedAnswer(null);
    setDroppedIndices([]);
    setTextInput('');
    setIsAnswered(false);
    setWrongAnswerIdx(null);
    setHint(null);
  }, [currentIndex]);
  
  const handleMistake = () => {
    try { 
       const mistakes = JSON.parse(safeStorage.getItem('mistakes') || '[]');
       if (!mistakes.includes(q.id)) {
          mistakes.push(q.id);
          safeStorage.setItem('mistakes', JSON.stringify(mistakes));
       }
    } catch(e) { console.error(e); }
  };
  
  const handleNext = () => {
    setIsAnswered(true);
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        onFinish();
      }
    }, 1500);
  };
  
  // Multiple Choice
  const handleSelect = (idx: number) => {
    if (isAnswered || wrongAnswerIdx !== null) return;
    if ((q.type === 'multiple_choice' || !q.type) && idx === q.correctAnswerIndex) {
      setSelectedAnswer(idx);
      handleNext();
    } else {
      setWrongAnswerIdx(idx);
      setHint(`Вариант "${q.options?.[idx]}" не подходит. Подумайте над правилом и попробуйте еще раз.`);
      handleMistake();
      setTimeout(() => {
        setWrongAnswerIdx(null);
        setHint(null);
      }, 3000);
    }
  };
  
  // Drag and Drop (Sentence building)
  const handleWordClick = (wordOrIndex: number | any) => {
    const index = typeof wordOrIndex === 'number' ? wordOrIndex : -1;
    if (index === -1) return;
    if (isAnswered) return;
    if (droppedIndices.includes(index)) {
      setDroppedIndices(droppedIndices.filter(i => i !== index));
    } else {
      setDroppedIndices([...droppedIndices, index]);
    }
  };
  
  const checkDragAndDrop = () => {
    if (isAnswered) return;
    const constructedSentence = droppedIndices.map(i => q.options?.[i]).join(' ');
    if (q.correctSentence && constructedSentence === q.correctSentence.join(' ')) {
      handleNext();
    } else {
      setHint('Неправильный порядок слов. Попробуйте еще раз.');
      handleMistake();
      setTimeout(() => setHint(null), 3000);
    }
  };
  
  // Fill in Blank
  const checkFillInBlank = () => {
    if (isAnswered) return;
    const input = textInput.trim().toLowerCase();
    const isCorrect = (q.correctAnswer && input === q.correctAnswer.toLowerCase()) || 
                      (q.correctAnswers && q.correctAnswers.some(ans => input === ans.toLowerCase()));
    if (isCorrect) {
      handleNext();
    } else {
      setHint('Ответ неверный. Попробуйте еще раз.');
      handleMistake();
      setTimeout(() => setHint(null), 3000);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col h-full w-full">
      <div className="flex items-center gap-4 mb-8 shrink-0">
        <button onClick={onBack} className="p-3 rounded-full bg-white/5 border border-white/5 active:bg-white/5 text-white/70 hover:bg-white/5 hover:text-white transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1 bg-gothic-border h-[3px] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-burgundy to-burgundy-light transition-all duration-300 rounded-full" style={{ width: `${((currentIndex) / questions.length) * 100}%` }} />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center pb-24 w-full">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="mb-10 text-center px-4 w-full">
              <h2 className="text-3xl text-white font-sans font-semibold tracking-tight leading-snug break-words">{q.question}</h2>
            </div>
            
            {hint && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 rounded-2xl bg-burgundy/20 border border-burgundy/40 text-white/90 text-sm text-center shadow-[0_0_20px_rgba(144,0,36,0.2)]">
                {hint}
              </motion.div>
            )}
            
            {(!q.type || q.type === 'multiple_choice') && (
              <div className="flex flex-col gap-4 w-full">
                {q.options?.map((opt, idx) => {
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
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 pb-24">
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

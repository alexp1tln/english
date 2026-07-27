import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Compass } from 'lucide-react';
import { ViewState, Lesson, Quest } from '../types';
import { quests } from '../questsData';

type WordObj = { id: number; word: string };

const cleanWords = (text: string) => text.replace(/[.,!?]/g, '').split(/\s+/).filter(Boolean);
const normalizeSentence = (text: string) => text.replace(/[.,!?]/g, '').toLowerCase().trim();

export default function LifeSurvival({ setView, completedLessons, lessons }: { key?: string, setView: (v: ViewState) => void, completedLessons: string[], lessons: Lesson[] }) {
  const [currentQuest, setCurrentQuest] = useState<Quest | null>(null);
  const [currentScene, setCurrentScene] = useState<string>('start');
  
  const [wordPool, setWordPool] = useState<WordObj[]>([]);
  const [selectedWords, setSelectedWords] = useState<WordObj[]>([]);
  const [errorShake, setErrorShake] = useState(false);

  useEffect(() => {
    const unlockedModuleId = Math.max(1, ...completedLessons.map(id => {
      if(id.startsWith('test_')) return parseInt(id.split('_')[1]) + 1;
      const lesson = lessons.find(l => l.id === id);
      return lesson ? lesson.moduleId : 1;
    }));
    
    // Filter quests up to unlockedModuleId, fallback to all if none found
    let availableQuests = quests.filter(q => q.moduleId && q.moduleId <= unlockedModuleId);
    if (availableQuests.length === 0) availableQuests = quests;
    
    const randomQuest = availableQuests[Math.floor(Math.random() * availableQuests.length)];
    setCurrentQuest(randomQuest);
  }, []);

  useEffect(() => {
    if (!currentQuest) return;
    const scene = currentQuest.nodes[currentScene];
    if (!scene) return;

    const goodOption = scene.options.find(o => o.effect === 'good');
    if (goodOption) {
      const words: string[] = [];
      words.push(...cleanWords(goodOption.text));
      const badOption = scene.options.find(o => o.effect === 'bad') || scene.options.find(o => o !== goodOption);
      if (badOption) {
        words.push(...cleanWords(badOption.text));
      }
      // Shuffle words
      words.sort(() => Math.random() - 0.5);
      
      // Keep only unique words if we want, or keep all.
      // Better to keep unique to not have duplicates unless necessary, but maybe the target sentence needs multiple same words (e.g. "I know that I know").
      // Actually it's better to keep all so they have enough pieces.
      setWordPool(words.map((w, i) => ({ id: i, word: w })));
      setSelectedWords([]);
    }
  }, [currentScene, currentQuest]);

  if (!currentQuest) return null;
  const scene = currentQuest.nodes[currentScene];
  const goodOption = scene.options.find(o => o.effect === 'good');

  const handleWordSelect = (word: WordObj) => {
    setWordPool(prev => prev.filter(w => w.id !== word.id));
    setSelectedWords(prev => [...prev, word]);
  };

  const handleWordDeselect = (word: WordObj) => {
    setSelectedWords(prev => prev.filter(w => w.id !== word.id));
    setWordPool(prev => [...prev, word]);
  };

  const handleSubmit = () => {
    if (!goodOption) return;
    const constructed = selectedWords.map(w => w.word).join(' ');
    const target = cleanWords(goodOption.text).join(' ');
    
    if (constructed.toLowerCase() === target.toLowerCase()) {
      setCurrentScene(goodOption.nextScene);
    } else {
      const badOption = scene.options.find(o => o.effect === 'bad');
      if (badOption) {
        setCurrentScene(badOption.nextScene);
      } else {
        // trigger error animation
        setErrorShake(true);
        setTimeout(() => setErrorShake(false), 500);
      }
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col h-full w-full absolute inset-0 bg-gothic-bg">
      <div className="flex items-center gap-4 p-6 shrink-0 z-20">
        <button onClick={() => setView('menu')} className="p-3 rounded-full bg-white/5 border border-white/5 active:bg-white/5 text-white/70 transition-colors hover:bg-white/5 hover:text-white">
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-2xl font-sans font-semibold tracking-tight tracking-wide text-white">Квест: {currentQuest.title}</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 relative pb-24">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-burgundy/15 rounded-[2.5rem] blur-[100px] pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentScene}
            initial={{ opacity: 0, y: 20, scale: 0.95 }} 
            animate={errorShake ? { x: [-10, 10, -10, 10, 0] } : { opacity: 1, y: 0, scale: 1, x: 0 }} 
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: errorShake ? 0.4 : 0.6, type: 'spring', bounce: 0.2 }}
            className="w-full max-w-md bg-gothic-card backdrop-blur-2xl border border-gothic-border rounded-[2.5rem] p-8 shadow-2xl z-10 relative overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex justify-center mb-6 shrink-0">
              <div className="w-16 h-16 rounded-full bg-black/90 border border-white/5 flex items-center justify-center shadow-inner">
                <Compass size={32} className="text-white/40" />
              </div>
            </div>
            
            <p className="text-lg text-white leading-relaxed text-center mb-8 font-light relative z-10">
              {scene.text}
            </p>

            {goodOption ? (
              <div className="flex flex-col gap-6 relative z-10">
                {/* Selected words area */}
                <div className="min-h-[80px] p-4 rounded-3xl bg-black/50 border border-white/5 flex flex-wrap gap-2 items-start content-start">
                  <AnimatePresence>
                    {selectedWords.map(word => (
                      <motion.button
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        key={word.id}
                        onClick={() => handleWordDeselect(word)}
                        className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
                      >
                        {word.word}
                      </motion.button>
                    ))}
                  </AnimatePresence>
                  {selectedWords.length === 0 && (
                    <span className="text-white/30 text-sm m-auto">Составьте предложение...</span>
                  )}
                </div>

                {/* Word pool area */}
                <div className="flex flex-wrap gap-2 justify-center">
                  <AnimatePresence>
                    {wordPool.map(word => (
                      <motion.button
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        key={word.id}
                        onClick={() => handleWordSelect(word)}
                        className="px-4 py-2 rounded-2xl bg-gothic-card border border-gothic-border hover:bg-white/10 text-white/80 text-sm font-medium transition-colors"
                      >
                        {word.word}
                      </motion.button>
                    ))}
                  </AnimatePresence>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={selectedWords.length === 0}
                  className="w-full mt-2 p-4 rounded-[2rem] bg-white text-black font-semibold tracking-wide disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all"
                >
                  Ответить
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 relative z-10 mt-auto">
                {scene.options.map((opt, i) => {
                  const btnClass = "w-full p-4 rounded-[2.5rem] bg-gothic-card hover:bg-gothic-card-hover border border-gothic-border hover:border-gothic-border-hover text-white/70 hover:text-white text-sm font-medium transition-all duration-300 active:scale-95 text-center";
                  return (
                    <button 
                      key={i}
                      onClick={() => {
                        if (opt.nextScene === 'end') {
                          setView('menu');
                        } else {
                          setCurrentScene(opt.nextScene);
                        }
                      }}
                      className={btnClass}
                    >
                      {opt.text}
                    </button>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

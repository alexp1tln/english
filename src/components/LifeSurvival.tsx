import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Compass } from 'lucide-react';
import { ViewState } from '../types';
import { quests, Quest } from '../questsData';

export default function LifeSurvival({ setView }: { key?: string, setView: (v: ViewState) => void }) {
  const [currentQuest, setCurrentQuest] = useState<Quest | null>(null);
  const [currentScene, setCurrentScene] = useState<string>('start');

  useEffect(() => {
    // Pick a random quest on mount
    const randomQuest = quests[Math.floor(Math.random() * quests.length)];
    // Randomize options order for each node
    Object.keys(randomQuest.nodes).forEach(key => {
      randomQuest.nodes[key].options.sort(() => Math.random() - 0.5);
    });
    setCurrentQuest(randomQuest);
  }, []);

  if (!currentQuest) return null;

  const scene = currentQuest.nodes[currentScene];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col h-full w-full absolute inset-0 bg-gothic-bg">
      <div className="flex items-center gap-4 p-6 shrink-0 z-20">
        <button onClick={() => setView('menu')} className="p-3 rounded-full bg-white/5 border border-white/5 active:bg-white/5 text-white/70 transition-colors hover:bg-white/5 hover:text-white">
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-2xl font-sans font-semibold tracking-tight tracking-wide text-white">Квест: {currentQuest.title}</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-burgundy/15 rounded-[2.5rem] blur-[100px] pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentScene}
            initial={{ opacity: 0, y: 20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
            className="w-full max-w-md bg-gothic-card backdrop-blur-2xl border border-gothic-border rounded-[2.5rem] p-8 shadow-2xl z-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-black/90 border border-white/5 flex items-center justify-center shadow-inner">
                <Compass size={32} className="text-white/40" />
              </div>
            </div>
            
            <p className="text-lg text-white leading-relaxed text-center mb-10 font-light relative z-10">
              {scene.text}
            </p>

            <div className="flex flex-col gap-3 relative z-10">
              {scene.options.map((opt, i) => {
                const btnClass = "w-full p-4 rounded-[2.5rem] bg-gothic-card hover:bg-gothic-card-hover border border-gothic-border hover:border-gothic-border-hover text-white/70 hover:text-white text-sm font-medium transition-all duration-300 active:scale-95 text-left";
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
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

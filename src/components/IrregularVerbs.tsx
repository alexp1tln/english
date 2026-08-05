import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Sparkles, ChevronRight, Check, X} from 'lucide-react';
import { ViewState } from '../types';
import { irregularVerbs, IrregularVerb } from '../irregularVerbsData';

export default function IrregularVerbs({ setView }: { key?: string, setView: (v: ViewState) => void }) {
  const [mode, setMode] = useState<'cards' | 'quiz'>('cards');
  const [sessionVerbs, setSessionVerbs] = useState<IrregularVerb[]>([]);
  const [seenVerbs, setSeenVerbs] = useState<IrregularVerb[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Quiz state
  const [quizItems, setQuizItems] = useState<{verb: IrregularVerb, type: 'past'|'participle'|'translation'}[]>([]);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    startNewBatch([]);
  }, []);

  const startNewBatch = (currentSeen: IrregularVerb[]) => {
    const shuffled = [...irregularVerbs].sort(() => Math.random() - 0.5);
    const newBatch = shuffled.slice(0, 8);
    setSessionVerbs(newBatch);
    setSeenVerbs([...currentSeen, ...newBatch]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setMode('cards');
  };

  const nextCard = () => {
    if (currentIndex < sessionVerbs.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => Math.min(prev + 1, sessionVerbs.length - 1)), 150);
    } else {
      startQuiz();
    }
  };

  const startQuiz = () => {
    const items: {verb: IrregularVerb, type: 'past'|'participle'|'translation'}[] = sessionVerbs.map(v => {
      const r = Math.random();
      let type: 'past'|'participle'|'translation' = 'past';
      if (r > 0.66) type = 'translation';
      else if (r > 0.33) type = 'participle';
      return { verb: v, type };
    });
    
    // Add up to 2 random previously seen words
    const pastVerbs = seenVerbs.filter(v => !sessionVerbs.find(sv => sv.base === v.base));
    if (pastVerbs.length > 0) {
      const shuffledPast = [...pastVerbs].sort(() => Math.random() - 0.5);
      const extra = shuffledPast.slice(0, 2);
      extra.forEach(v => {
        const r = Math.random();
        let type: 'past'|'participle'|'translation' = 'past';
        if (r > 0.66) type = 'translation';
        else if (r > 0.33) type = 'participle';
        items.push({ verb: v, type });
      });
    }
    
    items.sort(() => Math.random() - 0.5);
    
    setQuizItems(items);
    setCurrentIndex(0);
    generateOptions(items[0]);
    setMode('quiz');
  };

  const generateOptions = (item: {verb: IrregularVerb, type: 'past'|'participle'|'translation'}) => {
    const opts = new Set<string>();
    const verb = item.verb;
    const type = item.type;
    
    let correct = verb[type];
    if (type === 'past' || type === 'participle') correct = correct.split('/')[0];
    opts.add(correct);
    
    if (type === 'translation') {
      while(opts.size < 4) {
        opts.add(irregularVerbs[Math.floor(Math.random() * irregularVerbs.length)].translation);
      }
    } else {
      const otherForm = type === 'past' ? verb.participle.split('/')[0] : verb.past.split('/')[0];
      
      const plausible = new Set<string>();
      
      // Regular rules
      let reg1 = verb.base;
      if (reg1.endsWith('e')) reg1 += 'd';
      else if (reg1.endsWith('y')) reg1 = reg1.slice(0, -1) + 'ied';
      else reg1 += 'ed';
      plausible.add(reg1);
      
      if (verb.base.match(/[bcdfghjklmnpqrstvwxz]$/)) {
        plausible.add(verb.base + verb.base.slice(-1) + 'ed');
        plausible.add(verb.base + verb.base.slice(-1) + 'en');
      }

      plausible.add(verb.base + 'en');
      if (verb.base.endsWith('e')) plausible.add(verb.base + 'n');
      if (verb.base.endsWith('d')) plausible.add(verb.base.slice(0, -1) + 't');

      const vowelShifts: Record<string, string[]> = {
        'i': ['a', 'u', 'ou'], 'a': ['o', 'e', 'u'], 'e': ['o', 'a'],
        'ee': ['e', 'o'], 'ea': ['e', 'o'], 'o': ['e', 'a'], 'oo': ['o', 'u'],
        'u': ['a', 'o'], 'ow': ['ew', 'own'], 'aw': ['ew'], 'ay': ['aid', 'ought'],
        'ell': ['old'], 'ind': ['ound'], 'ing': ['ang', 'ung'], 'ink': ['ank', 'unk', 'ought']
      };

      for (const [v, subs] of Object.entries(vowelShifts)) {
        if (verb.base.includes(v)) {
          for (const sub of subs) {
            const replaced = verb.base.replace(v, sub);
            plausible.add(replaced);
            plausible.add(replaced + 'n');
            plausible.add(replaced + 'en');
          }
        }
      }
      
      plausible.add(otherForm);
      if (otherForm.endsWith('t')) plausible.add(otherForm + 'en');
      if (otherForm.endsWith('e')) plausible.add(otherForm + 'n');

      plausible.delete(correct);
      plausible.delete(verb.base);

      const arr = Array.from(plausible);
      arr.sort(() => Math.random() - 0.5);

      for (const p of arr) {
        if (opts.size >= 4) break;
        opts.add(p);
      }
      
      // Fallback
      let i = 1;
      while(opts.size < 4) {
        opts.add(reg1 + (i > 1 ? i.toString() : ''));
        i++;
      }
    }
    
    setQuizOptions(Array.from(opts).sort(() => Math.random() - 0.5));
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleQuizSelect = (opt: string) => {
    if (isAnswered) return;
    setSelectedAnswer(opt);
    setIsAnswered(true);
    
    setTimeout(() => {
      if (currentIndex < quizItems.length - 1) {
        setCurrentIndex(prev => prev + 1);
        generateOptions(quizItems[currentIndex + 1]);
      } else {
        startNewBatch(seenVerbs);
      }
    }, 1500);
  };

  if (sessionVerbs.length === 0) return null;
  const currentVerb = sessionVerbs[Math.min(currentIndex, sessionVerbs.length - 1)];
  
  const currentQuizItem = quizItems[Math.min(currentIndex, quizItems.length - 1)];
  const quizTypeLabel = currentQuizItem?.type === 'translation' ? 'Перевод' : 
                        currentQuizItem?.type === 'past' ? 'Past Simple (V2)' : 'Past Participle (V3)';
  const quizQuestion = currentQuizItem?.verb.base;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col h-full absolute inset-0 w-full bg-[#000000]">
      <div className="flex items-center gap-4 p-6 shrink-0 z-20">
        <button onClick={() => setView('menu')} className="p-3 rounded-full bg-white/5 border border-white/5 active:bg-white/5 text-white/70 hover:text-white hover:bg-white/5 transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1 bg-gothic-border h-[3px] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-burgundy to-burgundy-light transition-all duration-300 rounded-full" style={{ width: `${((currentIndex + 1) / (mode === 'cards' ? sessionVerbs.length : quizItems.length)) * 100}%` }} />
        </div>
        <div className="text-xs text-white/70/50 w-11 text-right font-light">
          {currentIndex + 1}/{mode === 'cards' ? sessionVerbs.length : quizItems.length}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center p-6 relative pb-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-burgundy/20 rounded-full blur-[100px] pointer-events-none" />
        
        <AnimatePresence mode="wait">
          {mode === 'cards' ? (
            <motion.div 
              key={`card-${currentIndex}`}
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
                <h3 className="text-white/70/50 uppercase tracking-wide font-light text-xs mb-4">Начальная форма</h3>
                <h2 className="text-4xl font-sans font-semibold tracking-tight text-white mb-2 text-center">{currentVerb.base}</h2>
                <p className="text-md text-white/60 tracking-wide font-light mb-4">{currentVerb.transcriptionBase}</p>
                <p className="text-lg text-white/40 tracking-wide font-light">{currentVerb.translation}</p>
                <p className="absolute bottom-8 text-xs uppercase tracking-widest text-white/70/30 font-light">Нажми, чтобы перевернуть</p>
              </div>
              
              <div className="absolute inset-0 backface-hidden rounded-[2.5rem] bg-burgundy/20 border border-burgundy/40 flex flex-col items-center justify-center p-8 shadow-[0_0_40px_rgba(144,0,36,0.2)] backdrop-blur-xl" style={{ transform: 'rotateY(180deg)' }}>
                <div className="flex flex-col gap-6 text-center w-full">
                  <div> 
                     <h3 className="text-white/70/70 uppercase tracking-wide font-light text-[10px] mb-2">Past Simple (V2)</h3>
                     <h2 className="text-3xl font-sans font-semibold tracking-tight text-white">{currentVerb.past}</h2>
                     <p className="text-sm text-white/60 tracking-wide font-light mt-1">{currentVerb.transcriptionPast}</p>
                  </div>
                  <div className="h-px w-1/2 bg-white/10 mx-auto" />
                  <div> 
                     <h3 className="text-white/70/70 uppercase tracking-wide font-light text-[10px] mb-2">Past Participle (V3)</h3>
                     <h2 className="text-3xl font-sans font-semibold tracking-tight text-white">{currentVerb.participle}</h2>
                     <p className="text-sm text-white/60 tracking-wide font-light mt-1">{currentVerb.transcriptionParticiple}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key={`quiz-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="w-full"
            >
              <div className="mb-10 text-center">
                <h3 className="text-white/70/50 uppercase tracking-wide font-light text-xs mb-4">{quizTypeLabel}</h3>
                <h2 className="text-4xl text-white font-sans font-semibold tracking-tight ">{quizQuestion}</h2>
              </div>
              <div className="flex flex-col gap-4">
                {quizOptions.map((opt, idx) => {
                  const isSelected = selectedAnswer === opt;
                  let correctAns = currentQuizItem.verb[currentQuizItem.type];
                  if (currentQuizItem.type !== 'translation') correctAns = correctAns.split('/')[0];
                  
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
        <div className="absolute bottom-6 left-6 right-6 z-20">
          <button onClick={nextCard} className="w-full py-5 rounded-[2.5rem] bg-white/5 border border-white/5 text-white font-medium tracking-wide flex justify-center items-center gap-2 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.02)] hover:bg-white/15">
              {currentIndex < sessionVerbs.length - 1 ? 'Дальше' : 'Начать тест'} <ChevronRight size={18} />
          </button>
        </div>
      )}
    </motion.div>
  );
}

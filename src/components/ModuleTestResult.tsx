import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Share2, Award, CheckCircle } from 'lucide-react';

interface ModuleTestResultProps { key?: React.Key | string; 
  mistakes: { question: string, correct: string, selected: string }[];
  score: number;
  total: number;
  moduleId: number;
  onBack: () => void;
}

export default function ModuleTestResult({ score, total, moduleId, mistakes, onBack }: ModuleTestResultProps) {
  const percentage = Math.round((score / total) * 100);
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    const text = `Я прошел контрольную по Модулю ${moduleId} в Dark Bunny на ${percentage}% (${score}/${total})! Присоединяйся!`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Мой результат в Dark Bunny',
          text: text,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      await navigator.clipboard.writeText(text);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col h-full w-full absolute inset-0 bg-[#000000]">
      <div className="flex items-center gap-4 p-6 shrink-0 z-20">
        <button onClick={onBack} className="p-3 rounded-full bg-white/5 border border-white/5 active:bg-white/5 text-white/70 transition-colors hover:bg-white/5 hover:text-white">
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-2xl font-sans font-semibold tracking-tight tracking-wide text-white">Результат</h2>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar"><div className="flex flex-col items-center justify-center p-6 relative min-h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-silver/10 rounded-[2.5rem] blur-[120px] pointer-events-none" />
        
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="w-40 h-40 rounded-full bg-gradient-to-br from-gothic-card to-black border-2 border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] flex items-center justify-center mb-8 relative z-10"
        >
            <div className="text-center">
                <span className="block text-5xl font-semibold text-white tracking-tighter">{score}</span>
                <span className="block text-white/50 text-sm tracking-widest uppercase mt-1">из {total}</span>
            </div>
            {percentage >= 80 && (
                 <Award size={40} className="absolute -top-4 -right-4 text-silver drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] rotate-12" />
            )}
        </motion.div>

        <h3 className="text-3xl font-sans font-semibold tracking-tight text-white mb-2 z-10 text-center">
            {percentage >= 80 ? 'Отличная работа!' : percentage >= 50 ? 'Хороший результат!' : 'Нужно потренироваться'}
        </h3>
        <p className="text-white/60 font-light text-center mb-12 z-10">
            Вы завершили контрольную по Модулю {moduleId}.
        </p>

        {mistakes && mistakes.length > 0 && (
          <div className="w-full mb-8 z-10 flex flex-col gap-4">
            <h4 className="text-xl font-sans font-semibold text-white/90 mb-2">Ошибки:</h4>
            {mistakes.map((m, i) => (
              <div key={i} className="p-4 rounded-[1.5rem] bg-burgundy/10 border border-burgundy/20 flex flex-col gap-2">
                <p className="text-white font-medium">{m.question}</p>
                <div className="flex flex-col gap-1 text-sm mt-2">
                  <span className="text-burgundy-light/90 line-through decoration-burgundy-light/50">Твой ответ: {m.selected}</span>
                  <span className="text-silver">Правильный ответ: {m.correct}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="w-full flex flex-col gap-4 z-10">
            <button 
                onClick={handleShare}
                className="w-full py-5 rounded-[2.5rem] bg-white text-black font-medium tracking-wide flex justify-center items-center gap-2 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-white/90"
            >
                {shared ? <CheckCircle size={20} /> : <Share2 size={20} />}
                {shared ? 'Скопировано!' : 'Поделиться результатом'}
            </button>
            <button 
                onClick={onBack}
                className="w-full py-5 rounded-[2.5rem] bg-gothic-card border border-gothic-border text-white font-medium tracking-wide flex justify-center items-center gap-2 active:scale-95 transition-all hover:bg-gothic-card-hover"
            >
                Вернуться к карте
            </button>
        </div>
      </div></div>
    </motion.div>
  );
}

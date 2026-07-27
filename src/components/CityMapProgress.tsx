import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Lock, MapPin, Sparkles, Star, BookOpen } from 'lucide-react';
import { Lesson, ViewState } from '../types';

interface CityMapProgressProps { key?: React.Key | string; 
  setView: (v: ViewState) => void;
  lessons: Lesson[];
  completedLessons: string[];
  onSelect: (lesson: Lesson) => void;
  onSelectTest?: (moduleId: number) => void;
}

const specialPlaces = [
  'Модуль 1: Основы и To Be',
  'Модуль 2: Существительные и Артикли',
  'Модуль 3: Местоимения Some, Any',
  'Модуль 4: Present Simple',
  'Модуль 5: Present Continuous',
  'Модуль 6: Прилагательные',
  'Модуль 7: Past Simple (База)',
  'Модуль 8: Past Simple (Вопросы)',
  'Модуль 9: Past Continuous',
  'Модуль 10: Future Simple и Планы',
  'Модуль 11: Модальные глаголы 1',
  'Модуль 12: Quantifiers и Too/Enough',
  'Модуль 13: Вопросы и Согласие',
  'Модуль 14: Present Perfect',
  'Модуль 15: Past Perfect и Must',
  'Модуль 16: Условные 0, 1, 2',
  'Модуль 17: Условные 3 и Future',
  'Модуль 18: Past Perfect Cont. и Герундий',
  'Модуль 19: Пассивный залог',
  'Модуль 20: Сложное дополнение',
  'Модуль 21: Косвенная речь',
  'Модуль 22: Модальность дедукции',
  'Модуль 23: Wishes и Mixed',
  'Модуль 24: Causative и Subjunctive',
  'Модуль 25: Инверсия и Clefts',
  'Модуль 26: Dependent Prepositions',
  'Модуль 27: Phrasal Verbs',
  'Модуль 28: Discourse Markers'
];

export default function CityMapProgress({ setView, lessons, completedLessons, onSelect, onSelectTest }: CityMapProgressProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate points for the map with an organic sine wave and varying spacing
  const items: any[] = [];
  lessons.forEach((l, i) => {
    items.push({ type: 'lesson', data: l });
    if ((i + 1) % 10 === 0) {
      items.push({ type: 'test', moduleId: l.moduleId });
    }
  });

  const points = items.map((item, i) => {
    const isSpecial = item.type === 'test';
    const amplitude = isSpecial ? 0 : 25; 
    const x = 50 + Math.sin(i * 0.5) * amplitude;
    const ySpacing = 110;
    const yOffset = i * ySpacing + 120;
    
    return {
      x: isSpecial ? 50 : x,
      y: yOffset,
      item,
      isSpecial,
      placeName: isSpecial ? specialPlaces[(item.moduleId - 1) % specialPlaces.length] : null
    };
  });

  const mapHeight = points.length * 110 + 200;

  useEffect(() => {
    if (containerRef.current) {
      const firstLockedIdx = items.findIndex((item, i) => {
        if (i === 0) return false;
        const prev = items[i - 1];
        const prevId = prev.type === 'lesson' ? prev.data.id : `test_${prev.moduleId}`;
        return !completedLessons.includes(prevId);
      });
      const targetIdx = firstLockedIdx === -1 ? items.length - 1 : firstLockedIdx;
      // Smooth scroll to the active lesson
      containerRef.current.scrollTop = Math.max(0, targetIdx * 110 - window.innerHeight / 2 + 150);
    }
  }, [lessons, completedLessons]);

  // Generate smooth bezier curve path
  const generateSmoothPath = (pts: typeof points) => {
    if (pts.length === 0) return '';
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];
      const cy = (prev.y + curr.y) / 2;
      d += ` C ${prev.x} ${cy}, ${curr.x} ${cy}, ${curr.x} ${curr.y}`;
    }
    return d;
  };

  const fullPath = generateSmoothPath(points);
  const completedPoints = points.filter((_, i) => {
    if (i === 0) return true;
    const prev = items[i - 1];
    const prevId = prev.type === 'lesson' ? prev.data.id : `test_${prev.moduleId}`;
    return completedLessons.includes(prevId);
  });
  const completedPath = generateSmoothPath(completedPoints);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col h-full w-full absolute inset-0 bg-[#050507]">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[70%] h-[50%] bg-burgundy/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[60%] h-[60%] bg-silver/5 blur-[100px] rounded-full mix-blend-screen" />
        {/* Stars/Dust */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 p-6 shrink-0 z-30 bg-gothic-bg/80 backdrop-blur-xl border-b border-gothic-border shadow-2xl">
        <button onClick={() => setView('menu')} className="p-3 rounded-full bg-white/5 border border-white/5 active:bg-white/5 text-white/70 transition-colors hover:bg-white/5 hover:text-white">
          <ArrowLeft size={20} />
        </button>
        <div className="flex flex-col">
          <h2 className="text-2xl font-sans font-semibold tracking-tight tracking-wide text-white">Карта уроков</h2>
          <span className="text-[10px] text-white/70/70 tracking-[0.2em] uppercase">Программа курса</span>
        </div>
      </div>

      {/* Map Area */}
      <div ref={containerRef} className="flex-1 overflow-y-auto overflow-x-hidden relative no-scrollbar scroll-smooth z-10">
        <div style={{ height: mapHeight, width: '100%', position: 'relative' }}>
          
          {/* SVG Paths */}
          <svg className="absolute inset-0 pointer-events-none" style={{ height: mapHeight, width: '100%' }} preserveAspectRatio="none">
            {/* Background dashed path */}
            <path 
              d={fullPath.replace(/(\d+(?:\.\d+)?) /g, '$1% ')} 
              stroke="rgba(255,255,255,0.06)" 
              strokeWidth="10" 
              fill="none" 
              strokeLinecap="round"
              strokeDasharray="1 25" 
            />
            {/* Completed solid path */}
            {completedPoints.length > 1 && (
              <path 
                d={completedPath.replace(/(\d+(?:\.\d+)?) /g, '$1% ')} 
                stroke="url(#completedGradient)" 
                strokeWidth="8" 
                fill="none" 
                strokeLinecap="round"
                className=""
              />
            )}
            <defs>
              <linearGradient id="completedGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--color-silver)" />
                <stop offset="100%" stopColor="var(--color-burgundy)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Points */}
          {points.map((p, i) => {
            const id = p.item.type === 'lesson' ? p.item.data.id : `test_${p.item.moduleId}`;
            const isCompleted = completedLessons.includes(id);
            const prevId = i > 0 ? (items[i - 1].type === 'lesson' ? items[i - 1].data.id : `test_${items[i - 1].moduleId}`) : null;
            const isLocked = i > 0 && !completedLessons.includes(prevId as string);
            const isCurrent = !isCompleted && !isLocked;

            return (
              <div 
                key={id}
                className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}px`, zIndex: isCurrent ? 30 : (p.isSpecial ? 20 : 10) }}
              >
                {p.isSpecial && (
                  <div className="absolute -top-12 flex flex-col items-center pointer-events-none">
                    <BookOpen size={16} className="text-white/70 mb-1 opacity-80" />
                    <div className="whitespace-nowrap text-xs font-sans font-semibold tracking-tight tracking-[0.2em] text-white/70 uppercase  px-4 py-1.5 bg-white/5 backdrop-blur-2xl rounded-full border border-white/5 backdrop-blur-md">
                      {p.item.type === 'test' ? `Контрольная Модуль ${p.item.moduleId}` : p.placeName}
                    </div>
                  </div>
                )}
                
                <button 
                  onClick={() => { if (!isLocked) { if (p.item.type === 'lesson') onSelect(p.item.data); else if (onSelectTest) onSelectTest(p.item.moduleId); } }}
                  className={`relative flex items-center justify-center rounded-full transition-all duration-500 group
                    ${p.isSpecial ? 'w-16 h-16' : 'w-14 h-14'}
                    ${isCompleted ? 'bg-gradient-to-br from-gothic-card to-black border-2 border-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)]' : ''}
                    ${isCurrent ? 'bg-gradient-to-br from-burgundy/40 to-black border-4 border-silver shadow-[0_0_30px_rgba(255,255,255,0.5)] scale-110' : ''}
                    ${isLocked ? 'bg-black/95 border-2 border-white/5 opacity-60' : ''}
                    hover:scale-[1.15]
                  `}
                >
                  {/* Inner glow for current */}
                  {isCurrent && <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse" />}
                  
                  {isCompleted && <Check size={p.isSpecial ? 28 : 24} className="text-white/70 " />}
                  {isCurrent && <Star size={p.isSpecial ? 32 : 26} fill="currentColor" className="text-white/70 " />}
                  {isLocked && <Lock size={p.isSpecial ? 22 : 18} className="text-white/70/30" />}
                  
                  {/* Animated ring for current level */}
                  {isCurrent && (
                    <div className="absolute -inset-3 rounded-full border-2 border-white/5 animate-[spin_4s_linear_infinite] border-t-white/80" />
                  )}
                  {isCurrent && (
                    <div className="absolute -inset-5 rounded-full border border-white/5 animate-[spin_7s_linear_infinite_reverse] border-b-white/40" />
                  )}
                </button>
                
                {!p.isSpecial && (
                  <div className={`absolute ${p.x > 50 ? 'right-[4.5rem] items-end text-right' : 'left-[4.5rem] items-start text-left'} top-1/2 -translate-y-1/2 flex flex-col pointer-events-none transition-opacity ${isLocked ? 'opacity-40' : 'opacity-100'} w-24`}>
                    <span className={`text-[11px] font-bold tracking-wider drop-shadow-md ${isCurrent ? 'text-white' : 'text-white/40'}`}>
                      УРОК {i + 1}
                    </span>
                    <span className="text-[10px] text-white/20 truncate w-full">
                      {p.item.data.title.split('(')[0]}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { opacity: 0.2; transform: scale(0.8); }
          100% { opacity: 0.8; transform: scale(1.2); }
        }
      `}} />
    </motion.div>
  );
}

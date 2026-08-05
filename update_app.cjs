const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Add Flame to lucide imports
content = content.replace(/import {([^}]+)} from 'lucide-react';/, (match, p1) => {
    if (!p1.includes('Flame')) {
        return `import {${p1}, Flame} from 'lucide-react';`;
    }
    return match;
});

// 2. Add streak state to App component
const stateHookPos = content.indexOf('const [completedLessons, setCompletedLessons] = useState<string[]>([]);');
if (stateHookPos !== -1 && !content.includes('const [streak, setStreak]')) {
    const newState = `const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [streak, setStreak] = useState<number>(0);`;
    content = content.replace('const [completedLessons, setCompletedLessons] = useState<string[]>([]);', newState);
}

// 3. Add effect logic for streak
const effectStartPos = content.indexOf('useEffect(() => {');
if (effectStartPos !== -1 && !content.includes('rabbitsStreak')) {
    const originalEffect = `  useEffect(() => {
    const saved = safeStorage.getItem('rabbitsEnglishCompleted') || safeStorage.getItem('darkBunnyCompleted');
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, []);`;
    
    const newEffect = `  useEffect(() => {
    const saved = safeStorage.getItem('rabbitsEnglishCompleted') || safeStorage.getItem('darkBunnyCompleted');
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }

    const savedStreak = safeStorage.getItem('rabbitsStreak');
    const savedLastActive = safeStorage.getItem('rabbitsLastActive');
    
    const today = new Date().toISOString().split('T')[0];
    let currentStreak = savedStreak ? parseInt(savedStreak) : 0;
    
    if (savedLastActive) {
      const last = new Date(savedLastActive);
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      
      if (savedLastActive === today) {
        // already active today
      } else if (savedLastActive === yesterdayStr) {
        currentStreak += 1;
      } else {
        currentStreak = 1;
      }
    } else {
      currentStreak = 1;
    }
    
    setStreak(currentStreak);
    safeStorage.setItem('rabbitsStreak', currentStreak.toString());
    safeStorage.setItem('rabbitsLastActive', today);
  }, []);`;
    
    content = content.replace(originalEffect, newEffect);
}

// 4. Pass streak to MainMenu
content = content.replace(
    /<MainMenu key="menu" setView={setView} completedCount={completedLessons.filter\(id => id.startsWith\('l'\)\).length} totalCount={lessons.length} \/>/,
    `<MainMenu key="menu" setView={setView} completedCount={completedLessons.filter(id => id.startsWith('l')).length} totalCount={lessons.length} streak={streak} />`
);

// 5. Update MainMenu signature
content = content.replace(
    /function MainMenu\({ setView, completedCount, totalCount }: { key\?: string, setView: \(v: ViewState\) => void, completedCount: number, totalCount: number }\) {/,
    `function MainMenu({ setView, completedCount, totalCount, streak }: { key?: string, setView: (v: ViewState) => void, completedCount: number, totalCount: number, streak: number }) {`
);

// 6. Update MainMenu UI to show streak
const menuUIReplacement = `<div className="text-center space-y-4 mb-4 flex flex-col items-center relative w-full">
        <div className="absolute top-0 right-0 flex items-center gap-1.5 bg-gothic-card/80 border border-burgundy/30 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(144,0,36,0.3)]">
          <Flame size={16} className="text-orange-500" fill="currentColor" />
          <span className="text-white font-semibold text-sm">{streak}</span>
        </div>
        <img src="https://i.postimg.cc/Sx2NghTc/IMG-7263.png" alt="Rabbit's English" className="w-32 h-32 object-contain mb-2 drop-shadow-[0_0_15px_rgba(96,0,24,0.5)]" referrerPolicy="no-referrer" />`;

content = content.replace(
    /<div className="text-center space-y-4 mb-4 flex flex-col items-center">\s*<img src="https:\/\/i.postimg.cc\/Sx2NghTc\/IMG-7263.png" alt="Rabbit's English"/,
    menuUIReplacement
);

fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log('App.tsx updated successfully');

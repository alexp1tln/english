const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Add Flame to lucide-react imports
if (!content.includes('Flame')) {
  content = content.replace("Zap, Bell } from 'lucide-react';", "Zap, Bell, Flame } from 'lucide-react';");
}

// Add state to App component
const streakStateCode = `
  const [streakCount, setStreakCount] = useState(0);

  const updateActivity = () => {
    const today = new Date();
    const savedStreak = safeStorage.getItem('rabbitsStreak');
    const savedDateStr = safeStorage.getItem('rabbitsLastActivityDate');
    
    let currentStreak = parseInt(savedStreak || '0', 10);
    let newStreak = currentStreak;
    
    if (savedDateStr) {
      const savedDate = new Date(savedDateStr);
      const utc1 = Date.UTC(savedDate.getFullYear(), savedDate.getMonth(), savedDate.getDate());
      const utc2 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
      const diffDays = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        newStreak += 1;
      } else if (diffDays > 1) {
        newStreak = 1;
      }
    } else {
      newStreak = 1;
    }
    
    setStreakCount(newStreak);
    safeStorage.setItem('rabbitsStreak', newStreak.toString());
    safeStorage.setItem('rabbitsLastActivityDate', today.toISOString());
  };

  useEffect(() => {
    const savedStreak = safeStorage.getItem('rabbitsStreak');
    const savedDateStr = safeStorage.getItem('rabbitsLastActivityDate');
    
    if (savedStreak && savedDateStr) {
      const today = new Date();
      const savedDate = new Date(savedDateStr);
      const utc1 = Date.UTC(savedDate.getFullYear(), savedDate.getMonth(), savedDate.getDate());
      const utc2 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
      const diffDays = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
      
      let currentStreak = parseInt(savedStreak, 10);
      if (diffDays > 1) {
        currentStreak = 0; // Lost streak
        setStreakCount(0);
      } else {
        setStreakCount(currentStreak);
      }
    }
  }, []);
`;

// Inject state to App
const appEffectRegex = /const \[notification, setNotification\] = useState<\{title: string, message: string\} \| null>\(null\);\s*useEffect\(\(\) => \{/;
content = content.replace(appEffectRegex, `const [notification, setNotification] = useState<{title: string, message: string} | null>(null);\n` + streakStateCode + `\n\n  useEffect(() => {`);

// Update markLessonCompleted
const markRegex = /const markLessonCompleted = \(id: string\) => {([\s\S]*?)};/;
content = content.replace(markRegex, (match, p1) => {
    if (!p1.includes('updateActivity()')) {
        return `const markLessonCompleted = (id: string) => {${p1}  updateActivity();\n  };`;
    }
    return match;
});

// Update module_test onFinish
const moduleTestRegex = /onFinish={\(score, total, mistakes\) => {([\s\S]*?)const id = \`test_\$\{currentTestModule\}\`;/;
content = content.replace(moduleTestRegex, (match) => {
    return match + `\n                updateActivity();`;
});

// Pass streakCount to MainMenu
content = content.replace(
  /<MainMenu key="menu" setView={setView} completedCount={completedLessons.filter\(id => id.startsWith\('l'\)\).length} totalCount={lessons.length} \/>/,
  `<MainMenu key="menu" setView={setView} completedCount={completedLessons.filter(id => id.startsWith('l')).length} totalCount={lessons.length} streakCount={streakCount} />`
);

// Update MainMenu signature
content = content.replace(
  /function MainMenu\({ setView, completedCount, totalCount }: { key\?: string, setView: \(v: ViewState\) => void, completedCount: number, totalCount: number }\) {/,
  `function MainMenu({ setView, completedCount, totalCount, streakCount }: { key?: string, setView: (v: ViewState) => void, completedCount: number, totalCount: number, streakCount: number }) {`
);

// Update MainMenu rendering
const mainTitleRegex = /<p className="text-white\/70\/70 text-xs tracking-\[0\.3em\] uppercase">English Academy<\/p>\s*<\/div>/;
content = content.replace(mainTitleRegex, `<p className="text-white/70/70 text-xs tracking-[0.3em] uppercase">English Academy</p>
        
        {streakCount > 0 && (
          <div className="flex items-center gap-2 px-4 py-2 mt-2 rounded-full bg-gothic-card border border-white/10 shadow-lg">
             <Flame size={18} className="text-orange-500" />
             <span className="text-white font-medium text-sm">{streakCount} {streakCount % 10 === 1 && streakCount % 100 !== 11 ? 'день' : [2,3,4].includes(streakCount % 10) && ![12,13,14].includes(streakCount % 100) ? 'дня' : 'дней'} в ударе</span>
          </div>
        )}
      </div>`);

fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log('App.tsx patched with streak logic');

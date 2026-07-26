const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf8');

if (!c.includes("import { ChevronRight, ArrowLeft, BookOpen, Infinity as InfinityIcon, Sparkles, Check, X, Search, BookText, ChevronDown, Compass, Zap } from 'lucide-react';")) {
  c = c.replace(
      /import \{ ChevronRight, ArrowLeft, BookOpen, Infinity as InfinityIcon, Sparkles, Check, X, Search, BookText, ChevronDown, Compass \} from 'lucide-react';/,
      `import { ChevronRight, ArrowLeft, BookOpen, Infinity as InfinityIcon, Sparkles, Check, X, Search, BookText, ChevronDown, Compass, Zap } from 'lucide-react';`
  );
}

c = c.replace(
    /<button onClick=\{\(\) => setView\('survival'\)\} className="w-full p-5 rounded-\[2\.5rem\] bg-gothic-card hover:bg-gothic-card-hover border border-gothic-border hover:border-gothic-border-hover flex items-center justify-between active:scale-95 transition-all duration-300 shadow-lg">[\s\S]*?<\/button>/,
    `<button onClick={() => setView('survival')} className="w-full p-5 rounded-[2.5rem] bg-gothic-card hover:bg-gothic-card-hover border border-gothic-border hover:border-gothic-border-hover flex items-center justify-between active:scale-95 transition-all duration-300 shadow-lg">
          <div className="flex items-center gap-4"><Compass size={20} className="text-burgundy-light"/> <span className="text-white text-sm font-medium tracking-wide">Бытовые квесты</span></div>
          <ChevronRight size={16} className="text-white/70/30 group-hover:text-white/70 transition-colors" />
        </button>
        <button onClick={() => setView('irregular_verbs')} className="w-full p-5 rounded-[2.5rem] bg-gothic-card hover:bg-gothic-card-hover border border-gothic-border hover:border-gothic-border-hover flex items-center justify-between active:scale-95 transition-all duration-300 shadow-lg">
          <div className="flex items-center gap-4"><Zap size={20} className="text-burgundy-light"/> <span className="text-white text-sm font-medium tracking-wide">Неправильные глаголы</span></div>
          <ChevronRight size={16} className="text-white/70/30 group-hover:text-white/70 transition-colors" />
        </button>`
);

fs.writeFileSync('src/App.tsx', c);

const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf8');

c = c.replace(
    /function LessonQuiz\(\{ questions, onFinish, onBack \}: \{ key\?: string, questions: QuizQuestion\[\], onFinish: \(\) => void, onBack: \(\) => void \}\) \{([\s\S]*?)const q = questions\[currentIndex\];/m,
    `function LessonQuiz({ questions, onFinish, onBack }: { key?: string, questions: QuizQuestion[], onFinish: () => void, onBack: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [wrongAnswerIdx, setWrongAnswerIdx] = useState<number | null>(null);
  const [hint, setHint] = useState<string | null>(null);

  const q = questions[currentIndex];`
);

c = c.replace(
    /const handleSelect = \(idx: number\) => \{([\s\S]*?)setTimeout\(\(\) => \{([\s\S]*?)\}, 1500\);\n  \};/m,
    `const handleSelect = (idx: number) => {
    if (isAnswered || wrongAnswerIdx !== null) return;
    
    if (idx === q.correctAnswerIndex) {
      setSelectedAnswer(idx);
      setIsAnswered(true);
      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex(prev => prev + 1);
          setSelectedAnswer(null);
          setIsAnswered(false);
          setHint(null);
        } else {
          onFinish();
        }
      }, 1500);
    } else {
      setWrongAnswerIdx(idx);
      setHint(\`Вариант "\${q.options[idx]}" не подходит. Подумайте над правилом и попробуйте еще раз.\`);
      
      // Save mistake
      try {
         const mistakes = JSON.parse(localStorage.getItem('mistakes') || '[]');
         if (!mistakes.includes(q.id)) {
            mistakes.push(q.id);
            localStorage.setItem('mistakes', JSON.stringify(mistakes));
         }
      } catch(e) {}

      setTimeout(() => {
        setWrongAnswerIdx(null);
        setHint(null);
      }, 3000);
    }
  };`
);

// We also need to display the hint in LessonQuiz
c = c.replace(
    /<div className="flex flex-col gap-4">/,
    `{hint && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 rounded-2xl bg-burgundy/20 border border-burgundy/40 text-white/90 text-sm text-center shadow-[0_0_20px_rgba(144,0,36,0.2)]">
                {hint}
              </motion.div>
            )}
            <div className="flex flex-col gap-4">`
);

// Update button classes in LessonQuiz
c = c.replace(
    /let btnClass =  "p-5 rounded-\[2\.5rem\] border text-left text-lg transition-all duration-300 relative overflow-hidden ";\s*if \(isSelected\) \{\s*btnClass \+= "bg-white\/10 border-white\/10 text-white shadow-\[0_0_20px_rgba\(255,255,255,0\.05\)\]";\s*\} else \{\s*btnClass \+= "bg-gothic-card hover:bg-gothic-card-hover border-gothic-border text-white\/70";\s*if \(isAnswered\) btnClass \+= " opacity-50";\s*else btnClass \+= " hover:text-white hover:border-gothic-border-hover active:scale-95";\s*\}/m,
    `let btnClass =  "p-5 rounded-[2.5rem] border text-left text-lg transition-all duration-300 relative overflow-hidden ";
                if (isSelected) {
                  btnClass += "bg-white/10 border-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]";
                } else if (wrongAnswerIdx === idx) {
                  btnClass += "bg-burgundy/30 border-burgundy/50 text-white shadow-[0_0_20px_rgba(144,0,36,0.3)]";
                } else {
                  btnClass += "bg-gothic-card hover:bg-gothic-card-hover border-gothic-border text-white/70";
                  if (isAnswered || wrongAnswerIdx !== null) btnClass += " opacity-50";
                  else btnClass += " hover:text-white hover:border-gothic-border-hover active:scale-95";
                }`
);

fs.writeFileSync('src/App.tsx', c);

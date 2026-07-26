const fs = require('fs');
let c = fs.readFileSync('src/components/ModuleTest.tsx', 'utf8');

c = c.replace(
    /onFinish: \(score: number, total: number\) => void;/,
    `onFinish: (score: number, total: number, mistakes: { question: string, correct: string, selected: string }[]) => void;`
);

c = c.replace(
    /const \[score, setScore\] = useState\(0\);/,
    `const [score, setScore] = useState(0);\n  const [mistakesList, setMistakesList] = useState<{ question: string, correct: string, selected: string }[]>([]);`
);

c = c.replace(
    /const handleSelect = \(idx: number\) => \{([\s\S]*?)\};/,
    `const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    setIsAnswered(true);
    
    let isCorrect = idx === q.correctAnswerIndex;
    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      setMistakesList(prev => [...prev, {
         question: q.question,
         correct: q.options[q.correctAnswerIndex],
         selected: q.options[idx]
      }]);
    }
    
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        const finalMistakes = isCorrect ? mistakesList : [...mistakesList, {
          question: q.question,
          correct: q.options[q.correctAnswerIndex],
          selected: q.options[idx]
        }];
        onFinish(score + (isCorrect ? 1 : 0), questions.length, finalMistakes);
      }
    }, 1200);
  };`
);

fs.writeFileSync('src/components/ModuleTest.tsx', c);

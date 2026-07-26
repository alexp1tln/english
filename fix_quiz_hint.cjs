const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf8');

c = c.replace(
    /function LessonQuiz\(\{ questions, onFinish, onBack \}: \{ key\?: string, questions: QuizQuestion\[\], onFinish: \(\) => void, onBack: \(\) => void \}\) \{/,
    `function LessonQuiz({ questions, theory, onFinish, onBack }: { key?: string, questions: QuizQuestion[], theory?: string[], onFinish: () => void, onBack: () => void }) {`
);

c = c.replace(
    /const \[hint, setHint\] = useState<string \| null>\(null\);/,
    `const [hint, setHint] = useState<string | null>(null);\n  const [showTheory, setShowTheory] = useState(false);`
);

// We need to pass theory to LessonQuiz where it's called
c = c.replace(
    /<LessonQuiz key="quiz" questions=\{currentLesson\.quiz\} onFinish=\{\(\) => \{/,
    `<LessonQuiz key="quiz" questions={currentLesson.quiz} theory={currentLesson.theory} onFinish={() => {`
);

// Now append the button and theory modal to the bottom of LessonQuiz
c = c.replace(
    /<\/AnimatePresence>\s*<\/div>\s*<\/motion\.div>/,
    `</AnimatePresence>
      </div>

      {theory && theory.length > 0 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
          <button onClick={() => setShowTheory(true)} className="p-4 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 active:scale-95 transition-all shadow-lg backdrop-blur-md">
             <BookText size={24} />
          </button>
        </div>
      )}

      <AnimatePresence>
        {showTheory && theory && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            className="absolute inset-0 z-50 bg-gothic-bg flex flex-col"
          >
            <div className="flex items-center gap-4 p-6 shrink-0 bg-gothic-card/80 backdrop-blur-xl border-b border-gothic-border">
              <button onClick={() => setShowTheory(false)} className="p-3 rounded-full bg-white/5 border border-white/5 active:bg-white/5 text-white/70 transition-colors hover:bg-white/5 hover:text-white">
                <ChevronDown size={20} />
              </button>
              <h2 className="text-2xl font-sans font-semibold tracking-tight text-white">Теория</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {theory.map((paragraph, idx) => (
                <p key={idx} className="text-white/80 leading-relaxed font-light text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>`
);

fs.writeFileSync('src/App.tsx', c);

const fs = require('fs');
let c = fs.readFileSync('src/components/ModuleTestResult.tsx', 'utf8');

c = c.replace(
    /interface ModuleTestResultProps \{/,
    `interface ModuleTestResultProps {\n  mistakes: { question: string, correct: string, selected: string }[];`
);

c = c.replace(
    /export default function ModuleTestResult\(\{ score, total, moduleId, onBack \}: ModuleTestResultProps\) \{/,
    `export default function ModuleTestResult({ score, total, moduleId, mistakes, onBack }: ModuleTestResultProps) {`
);

c = c.replace(
    /<div className="flex-1 flex flex-col items-center justify-center p-6 relative">/,
    `<div className="flex-1 overflow-y-auto no-scrollbar"><div className="flex flex-col items-center justify-center p-6 relative min-h-full">`
);

c = c.replace(
    /<div className="w-full flex flex-col gap-4 z-10">/,
    `{mistakes && mistakes.length > 0 && (
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
        <div className="w-full flex flex-col gap-4 z-10">`
);

c = c.replace(
    /<\/div>\n    <\/motion\.div>/,
    `<\/div><\/div>\n    <\/motion\.div>`
);


fs.writeFileSync('src/components/ModuleTestResult.tsx', c);

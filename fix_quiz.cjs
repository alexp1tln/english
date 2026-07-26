const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// For LessonQuiz
content = content.replace(
    /const showCorrect = isAnswered && isCorrect;\s*const showWrong = isAnswered && isSelected && !isCorrect;\s*let btnClass =([^;]+);\s*if \(!isAnswered\) {[\s\S]*?} else if \(showCorrect\) {[\s\S]*?} else if \(showWrong\) {[\s\S]*?} else {[\s\S]*?}/,
    `let btnClass = $1;\n                if (isSelected) {\n                  btnClass += "bg-white/10 border-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]";\n                } else {\n                  btnClass += "bg-gothic-card hover:bg-gothic-card-hover border-gothic-border text-white/70";\n                  if (isAnswered) btnClass += " opacity-50";\n                  else btnClass += " hover:text-white hover:border-gothic-border-hover active:scale-95";\n                }`
);

// We also need to remove the Check and X icons for LessonQuiz
content = content.replace(
    /{showCorrect && <Check className="absolute right-5 top-1\/2 -translate-y-1\/2 text-white\/70 drop-shadow-\[0_0_5px_rgba\(255,255,255,0\.5\)\]" size={24} \/>}\s*{showWrong && <X className="absolute right-5 top-1\/2 -translate-y-1\/2 text-burgundy-light drop-shadow-\[0_0_5px_rgba\(144,0,36,0\.5\)\]" size={24} \/>}/,
    ''
);

// For InfiniteTraining quiz
content = content.replace(
    /const showCorrect = isAnswered && isCorrect;\s*const showWrong = isAnswered && isSelected && !isCorrect;\s*let btnClass =([^;]+);\s*if \(!isAnswered\) {[\s\S]*?} else if \(showCorrect\) {[\s\S]*?} else if \(showWrong\) {[\s\S]*?} else {[\s\S]*?}/,
    `let btnClass = $1;\n                  if (isSelected) {\n                    btnClass += "bg-white/10 border-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]";\n                  } else {\n                    btnClass += "bg-gothic-card hover:bg-gothic-card-hover border-gothic-border text-white/70";\n                    if (isAnswered) btnClass += " opacity-50";\n                    else btnClass += " hover:text-white hover:border-gothic-border-hover active:scale-95";\n                  }`
);

content = content.replace(
    /{showCorrect && <Check className="absolute right-5 top-1\/2 -translate-y-1\/2 text-white\/70 drop-shadow-\[0_0_5px_rgba\(255,255,255,0\.5\)\]" size={24} \/>}\s*{showWrong && <X className="absolute right-5 top-1\/2 -translate-y-1\/2 text-burgundy-light drop-shadow-\[0_0_5px_rgba\(144,0,36,0\.5\)\]" size={24} \/>}/,
    ''
);

fs.writeFileSync('src/App.tsx', content);

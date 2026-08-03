const fs = require('fs');

const hints = {
  "my": "(мой)",
  "that": "(ту/эту)",
  "do": "(вспомогательный глагол / действительно)",
  "Does": "(вспомогательный глагол)",
  "is": "(форма to be)",
  "have": "(вспомогательный глагол)",
  "Have": "(вспомогательный глагол)",
  "had": "(вспомогательный глагол / иметь в прош. вр.)",
  "Had": "(вспомогательный глагол)",
  "were": "(форма to be)",
  "would": "(вспомогательный глагол 'бы')",
  "be": "(форма to be)",
  "to": "(частица инфинитива)",
  "was": "(форма to be в прош. вр.)",
  "must": "(должно быть)",
  "might": "(возможно)",
  "not": "(отрицательная частица)",
  "did": "(вспомогательный глагол)",
  "when": "(когда)",
  "What": "(То, что / Что)",
  "who": "(который / кто)",
  "does": "(действительно / вспомогательный глагол)",
  "himself": "(себя / сам)",
  "in": "(предлог)",
  "for": "(предлог)",
  "of": "(предлог)",
  "up": "(предлог / часть фразового глагола)",
  "away": "(предлог / часть фразового глагола)",
  "Nevertheless": "(Тем не менее)",
  "Overall": "(В целом)",
  "However": "(Однако)"
};

let data = fs.readFileSync('src/courseData.ts', 'utf-8');
const lines = data.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('"[Переведите или поставьте правильную форму]')) {
    let j = i;
    let correctAnswer = '';
    while (j < i + 20) {
      if (lines[j].includes('"correctAnswer":')) {
        correctAnswer = lines[j].split('"correctAnswer": "')[1].split('",')[0].split('"')[0];
        break;
      }
      if (lines[j].includes('"correctAnswers":')) {
         correctAnswer = lines[j+1].split('"')[1];
         break;
      }
      j++;
    }
    
    let hint = hints[correctAnswer] || "(переведите/вставьте)";
    let newQuestion = lines[i].replace('[Переведите или поставьте правильную форму] ', hint + ' ');
    if (correctAnswer === 'up' && lines[i].includes('put ___ with')) hint = '(смириться - put up with)';
    if (correctAnswer === 'away' && lines[i].includes('got ___ with')) hint = '(избежать наказания - get away with)';
    if (correctAnswer === 'up' && lines[i].includes('bring ___')) hint = '(поднимать тему - bring up)';
    
    if (hint.startsWith('(')) {
        newQuestion = lines[i].replace('[Переведите или поставьте правильную форму]', hint);
    }
    
    lines[i] = newQuestion;
  }
}

fs.writeFileSync('src/courseData.ts', lines.join('\n'));
console.log("Hints applied!");

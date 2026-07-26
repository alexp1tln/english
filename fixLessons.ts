import fs from 'fs';
import { vocabulary, lessons } from './src/courseData.ts';

let vocabIndex = 0;
const basicCategories = ['Основы', 'Наречия', 'Существительные', 'Глаголы'];
const basicWords = vocabulary.filter(w => basicCategories.includes(w.category || ''));

lessons.forEach((lesson, index) => {
  if (index < 20) return; // Leave the first 20 lessons alone

  const isSpecial = lesson.title.includes('(') && !lesson.title.includes('Грамматика');
  
  if (!isSpecial) {
    // Assign 5 sequential basic words
    lesson.words = [];
    for (let i = 0; i < 5; i++) {
      lesson.words.push(basicWords[vocabIndex % basicWords.length]);
      vocabIndex++;
    }
  }
});

const content = `import { Lesson, Word } from './types';

// Экспорт словаря
export const vocabulary: Word[] = ${JSON.stringify(vocabulary, null, 2)};

// Экспорт курсов
export const lessons: Lesson[] = ${JSON.stringify(lessons, null, 2)};
`;

fs.writeFileSync('src/courseData.ts', content);
console.log('Fixed lessons words!');

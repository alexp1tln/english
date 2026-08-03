import fs from 'fs';
import { vocabulary, lessons } from './src/courseData';

const newLessons = lessons.map(lesson => {
  if (lesson.quiz) {
    return {
      ...lesson,
      quiz: lesson.quiz.filter(q => !q.id.includes('_variation_'))
    };
  }
  return lesson;
});

const fileContent = `import { Lesson, Word } from './types';

export const vocabulary: Word[] = ${JSON.stringify(vocabulary, null, 2)};

export const lessons: Lesson[] = ${JSON.stringify(newLessons, null, 2)};
`;

fs.writeFileSync('./src/courseData.ts', fileContent);
console.log("Done!");

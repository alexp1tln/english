const fs = require('fs');

const content = fs.readFileSync('src/courseData.ts', 'utf-8');

const vocabStart = content.indexOf('export const vocabulary: Word[] = ') + 'export const vocabulary: Word[] = '.length;
const vocabEnd = content.indexOf(';\n\nexport const lessons: Lesson[] = ');
const vocabJson = content.slice(vocabStart, vocabEnd);

const lessonsStart = content.indexOf('export const lessons: Lesson[] = ') + 'export const lessons: Lesson[] = '.length;
const lessonsEnd = content.lastIndexOf(';');
const lessonsJson = content.slice(lessonsStart, lessonsEnd);

const vocabulary = JSON.parse(vocabJson);
const lessons = JSON.parse(lessonsJson);

lessons.forEach(lesson => {
    const originalQuiz = [...lesson.quiz];
    const newQuiz = [];
    
    // We want to add variations of questions to have more practice
    originalQuiz.forEach((q, idx) => {
        if (q.type === 'multiple_choice') {
            // Convert to drag_and_drop by splitting the question if it has '___' or just as a simple sentence builder
            if (q.question.includes('___')) {
                const parts = q.question.split('___');
                const answer = q.options[q.correctAnswerIndex];
                const fullSentence = parts[0] + answer + (parts[1] || '');
                const words = fullSentence.trim().replace(/[.!?]/g, '').split(' ').filter(w => w);
                
                const dragDrop = {
                    id: q.id + '_variation_dd',
                    type: 'drag_and_drop',
                    question: 'Составьте предложение: ' + q.question.replace('___', '...'),
                    options: [...words].sort(() => Math.random() - 0.5),
                    correctSentence: words
                };
                // avoid duplicate IDs if variation runs multiple times
                if (!originalQuiz.some(oq => oq.id === dragDrop.id)) {
                     newQuiz.push(dragDrop);
                }
            } else {
                // Convert to fill in blank if we can
                const answer = q.options[q.correctAnswerIndex];
                const fb = {
                    id: q.id + '_variation_fb',
                    type: 'fill_in_blank',
                    question: q.question,
                    correctAnswer: answer
                };
                if (!originalQuiz.some(oq => oq.id === fb.id)) {
                     newQuiz.push(fb);
                }
            }
        } else if (q.type === 'fill_in_blank') {
            // Convert to multiple choice
            const answer = q.correctAnswer;
            // Generate some dummy options (simple ones)
            const wrongOptions = [answer + 's', answer.length > 2 ? answer.substring(0, answer.length - 1) : answer + 'ed', 'not ' + answer];
            const options = [answer, ...wrongOptions.slice(0,2)].sort(() => Math.random() - 0.5);
            const correctIndex = options.indexOf(answer);
            
            const mc = {
                id: q.id + '_variation_mc',
                type: 'multiple_choice',
                question: q.question,
                options: options,
                correctAnswerIndex: correctIndex
            };
            if (!originalQuiz.some(oq => oq.id === mc.id)) {
                 newQuiz.push(mc);
            }
        }
    });
    
    // Append the new questions
    lesson.quiz = lesson.quiz.concat(newQuiz);
});

const outContent = `import { Lesson, Word } from './types';\n\nexport const vocabulary: Word[] = ${JSON.stringify(vocabulary, null, 2)};\n\nexport const lessons: Lesson[] = ${JSON.stringify(lessons, null, 2)};\n`;

fs.writeFileSync('src/courseData.ts', outContent, 'utf-8');
console.log('Expanded courseData.ts successfully.');

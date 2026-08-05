const fs = require('fs');
let data = fs.readFileSync('src/courseData.ts', 'utf8');

// Extract JSON
const vocabMatch = data.match(/export const vocabulary: Word\[\] = (\[[\s\S]*?\]);\n\nexport/);
const lessonsMatch = data.match(/export const lessons: Lesson\[\] = (\[[\s\S]*?\]);/);

if (!vocabMatch || !lessonsMatch) {
    console.error("Could not parse courseData.ts");
    process.exit(1);
}

let vocab = JSON.parse(vocabMatch[1]);
let lessons = JSON.parse(lessonsMatch[1]);

const alternatives = {
    "am": ["am", "m", "'m", "am "],
    "is": ["is", "'s", "s"],
    "are": ["are", "'re", "re"],
    "do not": ["do not", "don't", "dont"],
    "does not": ["does not", "doesn't", "doesnt"],
    "cannot": ["cannot", "can't", "cant", "can not"],
    "will not": ["will not", "won't", "wont"],
    "i am": ["i am", "i'm", "im"],
    "he is": ["he is", "he's", "hes"],
    "she is": ["she is", "she's", "shes"],
    "it is": ["it is", "it's", "its"],
    "we are": ["we are", "we're", "were"],
    "they are": ["they are", "they're", "theyre"],
    "did not": ["did not", "didn't", "didnt"],
    "was not": ["was not", "wasn't", "wasnt"],
    "were not": ["were not", "weren't", "werent"],
    "have not": ["have not", "haven't", "havent"],
    "has not": ["has not", "hasn't", "hasnt"],
    "had not": ["had not", "hadn't", "hadnt"],
    "would not": ["would not", "wouldn't", "wouldnt"],
    "should not": ["should not", "shouldn't", "shouldnt"],
    "could not": ["could not", "couldn't", "couldnt"],
    "must not": ["must not", "mustn't", "mustnt"]
};

// General templates for extra questions based on keywords in title
const extraQuestions = [
    {
        keywords: ["to be", "am", "is", "are"],
        questions: [
            { type: "fill_in_blank", question: "The weather ___ very nice today.", correctAnswer: "is", correctAnswers: ["is", "'s"] },
            { type: "fill_in_blank", question: "My friends ___ waiting for me at the cafe.", correctAnswer: "are", correctAnswers: ["are", "'re"] },
            { type: "multiple_choice", question: "Choose the correct form: I ___ not sure about this.", options: ["am", "is", "are"], correctAnswerIndex: 0 },
            { type: "drag_and_drop", question: "Put the words in order:", options: ["Are", "you", "ready", "for", "the", "trip?"], correctSentence: ["Are", "you", "ready", "for", "the", "trip?"] },
            { type: "fill_in_blank", question: "I ___ really exhausted after work.", correctAnswer: "am", correctAnswers: ["am", "'m"] }
        ]
    },
    {
        keywords: ["present simple", "do", "does"],
        questions: [
            { type: "fill_in_blank", question: "She usually ___ (wake) up early on weekdays.", correctAnswer: "wakes", correctAnswers: ["wakes", "wakes up"] },
            { type: "multiple_choice", question: "How often ___ you check your email?", options: ["do", "does", "are"], correctAnswerIndex: 0 },
            { type: "drag_and_drop", question: "Order the sentence:", options: ["He", "doesn't", "drink", "coffee", "at", "night."], correctSentence: ["He", "doesn't", "drink", "coffee", "at", "night."] },
            { type: "fill_in_blank", question: "I ___ (not/like) spicy food.", correctAnswer: "don't like", correctAnswers: ["don't like", "do not like"] }
        ]
    },
    {
        keywords: ["past simple", "did", "was", "were"],
        questions: [
            { type: "fill_in_blank", question: "We ___ (go) to a great restaurant last night.", correctAnswer: "went", correctAnswers: ["went"] },
            { type: "multiple_choice", question: "___ you finish the report on time?", options: ["Did", "Do", "Were"], correctAnswerIndex: 0 },
            { type: "fill_in_blank", question: "She ___ (not/see) the message.", correctAnswer: "didn't see", correctAnswers: ["didn't see", "did not see"] },
            { type: "drag_and_drop", question: "Order the words:", options: ["Where", "did", "you", "buy", "that", "jacket?"], correctSentence: ["Where", "did", "you", "buy", "that", "jacket?"] }
        ]
    },
    {
        keywords: ["present continuous", "ing"],
        questions: [
            { type: "fill_in_blank", question: "I can't talk right now, I ___ (drive).", correctAnswer: "am driving", correctAnswers: ["am driving", "'m driving", "im driving"] },
            { type: "multiple_choice", question: "Look! The bus ___ coming.", options: ["is", "are", "does"], correctAnswerIndex: 0 },
            { type: "fill_in_blank", question: "They ___ (not/listen) to the teacher.", correctAnswer: "aren't listening", correctAnswers: ["aren't listening", "are not listening"] }
        ]
    },
    {
        keywords: ["future", "will", "going to"],
        questions: [
            { type: "fill_in_blank", question: "I promise I ___ (call) you later.", correctAnswer: "will call", correctAnswers: ["will call", "'ll call"] },
            { type: "multiple_choice", question: "Look at those clouds. It ___ rain.", options: ["is going to", "will", "is raining"], correctAnswerIndex: 0 },
            { type: "fill_in_blank", question: "We ___ (not/go) to the party tonight.", correctAnswer: "won't go", correctAnswers: ["won't go", "will not go"] }
        ]
    },
    {
        keywords: ["perfect", "have", "has", "had"],
        questions: [
            { type: "fill_in_blank", question: "I ___ (never/be) to Japan.", correctAnswer: "have never been", correctAnswers: ["have never been", "'ve never been"] },
            { type: "multiple_choice", question: "She ___ already finished her homework.", options: ["has", "have", "had"], correctAnswerIndex: 0 },
            { type: "fill_in_blank", question: "They ___ (not/arrive) yet.", correctAnswer: "haven't arrived", correctAnswers: ["haven't arrived", "have not arrived"] }
        ]
    }
];

// Fallback diverse questions for any topic
const genericQuestions = [
    { type: "fill_in_blank", question: "Can you pass me the ___, please?", correctAnswer: "salt", correctAnswers: ["salt", "water", "book"] },
    { type: "multiple_choice", question: "What is the capital of Great Britain?", options: ["London", "Paris", "New York"], correctAnswerIndex: 0 },
    { type: "drag_and_drop", question: "Make a sentence:", options: ["English", "is", "a", "global", "language."], correctSentence: ["English", "is", "a", "global", "language."] },
    { type: "fill_in_blank", question: "I always ___ my teeth before bed.", correctAnswer: "brush", correctAnswers: ["brush", "clean"] },
    { type: "multiple_choice", question: "Which one is a fruit?", options: ["Apple", "Carrot", "Potato"], correctAnswerIndex: 0 },
    { type: "drag_and_drop", question: "Make a sentence:", options: ["Life", "is", "beautiful", "and", "amazing."], correctSentence: ["Life", "is", "beautiful", "and", "amazing."] },
    { type: "fill_in_blank", question: "He works as a software ___.", correctAnswer: "developer", correctAnswers: ["developer", "engineer", "programmer"] }
];

lessons.forEach(lesson => {
    // 1. Enrich existing questions with correctAnswers
    lesson.quiz.forEach(q => {
        if (q.type === 'fill_in_blank' && q.correctAnswer) {
            let ans = q.correctAnswer.toLowerCase().trim();
            q.correctAnswers = [q.correctAnswer];
            if (alternatives[ans]) {
                q.correctAnswers.push(...alternatives[ans]);
            }
            // Also add case variations
            let variations = new Set(q.correctAnswers);
            variations.add(q.correctAnswer);
            variations.add(ans);
            q.correctAnswers = Array.from(variations);
        }
    });

    // 2. Add more questions to reach 10-15 based on difficulty
    const targetCount = 10 + (lesson.moduleId % 5); // 10 to 14
    let titleLower = lesson.title.toLowerCase();
    
    let matchedPool = null;
    for (let eq of extraQuestions) {
        if (eq.keywords.some(kw => titleLower.includes(kw))) {
            matchedPool = eq.questions;
            break;
        }
    }
    
    if (!matchedPool) matchedPool = genericQuestions;

    // copy pool
    let pool = [...matchedPool];
    // shuffle pool
    pool.sort(() => 0.5 - Math.random());

    let idx = 0;
    while (lesson.quiz.length < targetCount && idx < pool.length) {
        let newQ = JSON.parse(JSON.stringify(pool[idx]));
        newQ.id = `q${lesson.id}_extra_${idx}`;
        lesson.quiz.push(newQ);
        idx++;
    }
    
    // If still short, add from generic
    let gIdx = 0;
    while (lesson.quiz.length < targetCount && gIdx < genericQuestions.length) {
        let newQ = JSON.parse(JSON.stringify(genericQuestions[gIdx]));
        newQ.id = `q${lesson.id}_gen_${gIdx}`;
        lesson.quiz.push(newQ);
        gIdx++;
    }
});

let outData = `import { Lesson, Word } from './types';\n\nexport const vocabulary: Word[] = ${JSON.stringify(vocab, null, 2)};\n\nexport const lessons: Lesson[] = ${JSON.stringify(lessons, null, 2)};\n`;

fs.writeFileSync('src/courseData.ts', outData, 'utf8');
console.log('Enriched courseData.ts!');

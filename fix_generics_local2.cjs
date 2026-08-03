const fs = require('fs');

let fileContent = fs.readFileSync('src/courseData.ts', 'utf8');
const match = fileContent.match(/export const lessons: Lesson\[\] = (\[.*\]);/s);
let lessons = JSON.parse(match[1]);

const scenarios = [
  {
    sit: "в кафе",
    q1: { type: "multiple_choice", q: "Вы в кафе и хотите сказать официанту 'Я готов сделать заказ'. Как это будет по-английски?", opts: ["I am ready to order.", "I is ready to order.", "I are ready to order."], ans: 0 },
    q2: { type: "drag_and_drop", q: "Вам нужно попросить счет в ресторане. Составьте фразу:", opts: ["Can", "I", "have", "the", "bill", "please", "do", "has"], correct: ["Can", "I", "have", "the", "bill", "please"] }
  },
  {
    sit: "в аэропорту",
    q1: { type: "multiple_choice", q: "Вы в аэропорту и хотите спросить: 'Где мой выход на посадку?'", opts: ["Where is my gate?", "Where my gate is?", "Where are my gate?"], ans: 0 },
    q2: { type: "drag_and_drop", q: "Соберите фразу, чтобы сказать таксисту: 'Отвезите меня в аэропорт, пожалуйста'.", opts: ["Take", "me", "to", "the", "airport", "please", "take", "does"], correct: ["Take", "me", "to", "the", "airport", "please"] }
  },
  {
    sit: "на работе",
    q1: { type: "multiple_choice", q: "На совещании вы хотите сказать: 'Я согласен с тобой'.", opts: ["I agree with you.", "I am agree with you.", "I agrees with you."], ans: 0 },
    q2: { type: "drag_and_drop", q: "Напишите письмо коллеге: 'Пожалуйста, проверьте этот документ'.", opts: ["Please", "check", "this", "document", "checking", "these"], correct: ["Please", "check", "this", "document"] }
  },
  {
    sit: "в отеле",
    q1: { type: "multiple_choice", q: "На ресепшене вы говорите: 'У меня забронирован номер'.", opts: ["I have a reservation.", "I has a reservation.", "I am a reservation."], ans: 0 },
    q2: { type: "drag_and_drop", q: "Вы просите администратора: 'Мне нужно новое полотенце'.", opts: ["I", "need", "a", "new", "towel", "needs", "an"], correct: ["I", "need", "a", "new", "towel"] }
  },
  {
    sit: "в переписке с другом",
    q1: { type: "multiple_choice", q: "Вы пишете другу: 'Я сейчас очень занят'.", opts: ["I am very busy right now.", "I is very busy right now.", "I very busy now."], ans: 0 },
    q2: { type: "drag_and_drop", q: "Соберите сообщение: 'Давай встретимся завтра'.", opts: ["Let's", "meet", "tomorrow", "meeting", "we"], correct: ["Let's", "meet", "tomorrow"] }
  }
];

for (let i = 0; i < lessons.length; i++) {
  const l = lessons[i];
  if (!l.quiz) continue;
  
  // Remove previously added life-like questions (q_life1_, q_life2_)
  l.quiz = l.quiz.filter(q => !q.id.includes('q_life1_') && !q.id.includes('q_life2_'));
  
  const scenario = scenarios[i % scenarios.length];
  
  const q1 = {
     id: `q_life1_${l.id}`,
     type: scenario.q1.type,
     question: scenario.q1.q,
     options: scenario.q1.opts,
     correctAnswerIndex: scenario.q1.ans
  };
  
  const q2 = {
     id: `q_life2_${l.id}`,
     type: scenario.q2.type,
     question: scenario.q2.q,
     options: scenario.q2.opts,
     correctSentence: scenario.q2.correct
  };
  
  l.quiz.push(q1, q2);
}

const newDataString = JSON.stringify(lessons, null, 2);
const newFileContent = fileContent.substring(0, match.index) + 'export const lessons: Lesson[] = ' + newDataString + ';' + fileContent.substring(match.index + match[0].length);
fs.writeFileSync('src/courseData.ts', newFileContent);
console.log("Locally replaced with well-formed scenario questions!");

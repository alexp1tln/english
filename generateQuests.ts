import fs from 'fs';

const drinks = ['cappuccino', 'latte', 'black coffee', 'tea', 'hot chocolate', 'green tea', 'flat white', 'espresso', 'macchiato', 'mocha'];
const foods = ['croissant', 'muffin', 'slice of cake', 'sandwich', 'bagel', 'cookie', 'brownie', 'donut', 'toast', 'scone'];
const places = ['train station', 'museum', 'hospital', 'supermarket', 'library', 'park', 'post office', 'bank', 'police station', 'pharmacy'];
const items = ['shirt', 'pair of shoes', 'jacket', 'hat', 'pair of pants', 'scarf', 'belt', 'sweater', 't-shirt', 'coat'];
const tickets = ['London', 'Manchester', 'Liverpool', 'Edinburgh', 'Glasgow', 'Birmingham', 'Bristol', 'Oxford', 'Cambridge', 'York'];
const times = ['2 PM', '3:30 PM', '10 AM', '11:15 AM', '4 PM', '9 AM', '1 PM', '5:45 PM', '6 PM', '8:30 AM'];
const names = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin'];

const quests = [];
let qId = 0;

// Scenario 1: Cafe
for(const d of drinks) {
    for(const f of foods) {
        if(quests.length >= 25) break;
        quests.push({
            id: `quest_${qId++}`,
            title: `В кофейне`,
            nodes: {
                start: {
                    text: `Вы зашли в кофейню. Бариста улыбается: 'Hello! What can I get for you?'`,
                    options: [
                        { text: `"I would like a ${d}, please."`, nextScene: 'honest', effect: 'good' },
                        { text: `"Give me ${d}!"`, nextScene: 'grammar_fail', effect: 'bad' }
                    ]
                },
                honest: {
                    text: `Бариста кивает: 'Sure thing! Would you like anything to eat?'`,
                    options: [
                        { text: `"Yes, I'll take a ${f} as well."`, nextScene: 'success', effect: 'good' },
                        { text: `"No, I only drink."`, nextScene: 'grammar_fail', effect: 'bad' }
                    ]
                },
                grammar_fail: {
                    text: `Бариста выглядит смущенно. Ваша речь звучит очень грубо и неестественно. Очередь сзади начинает недовольно вздыхать.`,
                    options: [
                        { text: "Попробовать снова", nextScene: 'start' }
                    ]
                },
                success: {
                    text: `Заказ принят! Вы успешно справились с бытовой ситуацией на английском и получили свой вкусный перекус.`,
                    options: [
                        { text: "Завершить квест", nextScene: 'end' }
                    ]
                }
            }
        });
    }
    if(quests.length >= 25) break;
}

// Scenario 2: Directions
for(const p of places) {
    for(const p2 of places) {
        if (p === p2) continue;
        if (quests.length >= 50) break;
        quests.push({
            id: `quest_${qId++}`,
            title: `Поиск дороги`,
            nodes: {
                start: {
                    text: `Вы потерялись. Вы подходите к прохожему: 'Excuse me...'`,
                    options: [
                        { text: `"Could you tell me how to get to the ${p}?"`, nextScene: 'honest', effect: 'good' },
                        { text: `"Where is ${p}?! I need now!"`, nextScene: 'grammar_fail', effect: 'bad' }
                    ]
                },
                honest: {
                    text: `Прохожий улыбается: 'Of course! Go straight, then turn left. It is right next to the ${p2}.'`,
                    options: [
                        { text: `"Thank you so much!"`, nextScene: 'success', effect: 'good' },
                        { text: `"I go there."`, nextScene: 'grammar_fail', effect: 'bad' }
                    ]
                },
                grammar_fail: {
                    text: `Прохожий пугается вашего напора и странной речи, и быстро уходит прочь.`,
                    options: [
                        { text: "Попробовать снова", nextScene: 'start' }
                    ]
                },
                success: {
                    text: `Успех! Вы вежливо узнали дорогу и теперь точно не потеряетесь.`,
                    options: [
                        { text: "Завершить квест", nextScene: 'end' }
                    ]
                }
            }
        });
    }
    if (quests.length >= 50) break;
}

// Scenario 3: Store
for(const i of items) {
    for(const t of times) {
        if(quests.length >= 75) break;
        quests.push({
            id: `quest_${qId++}`,
            title: `В магазине одежды`,
            nodes: {
                start: {
                    text: `Вы в магазине. Продавец подходит к вам: 'Do you need help finding a ${i}?'`,
                    options: [
                        { text: `"Yes, do you have this in a different size?"`, nextScene: 'honest', effect: 'good' },
                        { text: `"I want big ${i}!"`, nextScene: 'grammar_fail', effect: 'bad' }
                    ]
                },
                honest: {
                    text: `Продавец проверяет склад: 'Yes, here you go. We close at ${t}, by the way.'`,
                    options: [
                        { text: `"Great, I'll take it."`, nextScene: 'success', effect: 'good' },
                        { text: `"I take now."`, nextScene: 'grammar_fail', effect: 'bad' }
                    ]
                },
                grammar_fail: {
                    text: `Продавец не понимает вас и смущенно отходит. Вы не смогли купить то, что хотели.`,
                    options: [
                        { text: "Попробовать снова", nextScene: 'start' }
                    ]
                },
                success: {
                    text: `Покупка прошла успешно! Вы прекрасно справились с общением в магазине.`,
                    options: [
                        { text: "Завершить квест", nextScene: 'end' }
                    ]
                }
            }
        });
    }
    if (quests.length >= 75) break;
}

// Scenario 4: Train Tickets
for(const t of tickets) {
    for(const time of times) {
        if(quests.length >= 100) break;
        quests.push({
            id: `quest_${qId++}`,
            title: `Покупка билетов`,
            nodes: {
                start: {
                    text: `Вы на вокзале. Кассир спрашивает: 'Where are you travelling to today?'`,
                    options: [
                        { text: `"I need a ticket to ${t}, please."`, nextScene: 'honest', effect: 'good' },
                        { text: `"Give ticket ${t}."`, nextScene: 'grammar_fail', effect: 'bad' }
                    ]
                },
                honest: {
                    text: `Кассир печатает: 'Single or return? The next train leaves at ${time}.'`,
                    options: [
                        { text: `"A single ticket, please."`, nextScene: 'success', effect: 'good' },
                        { text: `"One way me."`, nextScene: 'grammar_fail', effect: 'bad' }
                    ]
                },
                grammar_fail: {
                    text: `Кассир просит повторить, но из-за языкового барьера вы получаете не тот билет.`,
                    options: [
                        { text: "Попробовать снова", nextScene: 'start' }
                    ]
                },
                success: {
                    text: `Отлично! Вы успешно купили билет на поезд и узнали время отправления.`,
                    options: [
                        { text: "Завершить квест", nextScene: 'end' }
                    ]
                }
            }
        });
    }
    if (quests.length >= 100) break;
}

// Scenario 5: Hotel Check-in
for(const n of names) {
    for(const d of drinks) {
        if (quests.length >= 125) break;
        quests.push({
            id: `quest_${qId++}`,
            title: `Заселение в отель`,
            nodes: {
                start: {
                    text: `Вы на ресепшене. Администратор приветствует: 'Welcome! Do you have a reservation?'`,
                    options: [
                        { text: `"Yes, it's under the name ${n}."`, nextScene: 'honest', effect: 'good' },
                        { text: `"I am ${n} room!"`, nextScene: 'grammar_fail', effect: 'bad' }
                    ]
                },
                honest: {
                    text: `Администратор проверяет систему: 'Ah yes. Here is your key. Would you like a complimentary ${d}?'`,
                    options: [
                        { text: `"That would be lovely, thank you."`, nextScene: 'success', effect: 'good' },
                        { text: `"Give ${d}!"`, nextScene: 'grammar_fail', effect: 'bad' }
                    ]
                },
                grammar_fail: {
                    text: `Администратор в замешательстве. Он не может найти вашу бронь из-за недопонимания.`,
                    options: [
                        { text: "Попробовать снова", nextScene: 'start' }
                    ]
                },
                success: {
                    text: `Вы успешно заселились в номер. Хороший английский делает путешествия гораздо приятнее!`,
                    options: [
                        { text: "Завершить квест", nextScene: 'end' }
                    ]
                }
            }
        });
    }
    if (quests.length >= 125) break;
}

const fileContent = `export type QuestNode = {
  text: string;
  options: { text: string; nextScene: string; effect?: 'good' | 'bad' }[];
};

export type Quest = {
  id: string;
  title: string;
  nodes: Record<string, QuestNode>;
};

export const quests: Quest[] = ${JSON.stringify(quests, null, 2)};
`;

fs.writeFileSync('src/questsData.ts', fileContent);
console.log('quests generated');

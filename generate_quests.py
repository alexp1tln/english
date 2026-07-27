import json

quests = []

module_topics = [
    (1, "Знакомство (Глагол To Be)", "Приветствие нового коллеги. 'Hello, I am the new manager.'", "Are you the new manager?", "Is you the new manager?", "Да, я.", "Yes, I am.", "Yes, I is."),
    (2, "Кафе (Present Simple)", "Вы заказываете кофе. 'What do you want to drink?'", "I want a cup of coffee.", "I wants a cup of coffee.", "Вы берете сахар?", "Do you take sugar?", "Are you take sugar?"),
    (3, "Отель (Present Continuous)", "Вы звоните на ресепшн. 'What is happening in the next room?'", "They are making a lot of noise.", "They making a lot of noise.", "Я пытаюсь уснуть.", "I am trying to sleep.", "I try to sleep now."),
    (4, "Магазин (Much/Many)", "Вы покупаете фрукты. 'How many apples do you need?'", "I don't need many apples.", "I don't need much apples.", "А сколько у вас сока?", "How much juice do you have?", "How many juice do you have?"),
    (5, "Собеседование (Can/Must)", "Вас спрашивают о навыках. 'Can you speak Spanish?'", "Yes, I can speak Spanish.", "Yes, I can to speak Spanish.", "Вы должны приходить вовремя.", "You must arrive on time.", "You must to arrive on time."),
    (6, "Таможня (Past Simple)", "Офицер спрашивает о вашей поездке. 'When did you arrive?'", "I arrived yesterday.", "I arrived today.", "Где вы остановились?", "Where did you stay?", "Where you stayed?"),
    (7, "Ресторан (Степени сравнения)", "Вы выбираете блюдо. 'Which dish is better?'", "This soup is better than the salad.", "This soup is more better.", "Это самый дорогой стейк.", "This is the most expensive steak.", "This is the expensivest steak."),
    (8, "Полиция (Past Continuous)", "Вас спрашивают о происшествии. 'What were you doing at 8 PM?'", "I was watching TV.", "I watched TV at 8 PM.", "Что делала ваша жена?", "What was your wife doing?", "What did your wife doing?"),
    (9, "Аэропорт (Future Forms)", "Вы спрашиваете о рейсе. 'When will the plane leave?'", "The plane is going to leave soon.", "The plane will leaving soon.", "Я подожду здесь.", "I will wait here.", "I am wait here."),
    (10, "Больница (Модальность)", "Врач дает советы. 'You look terrible.'", "You should take a rest.", "You should to take a rest.", "Мне можно выпить воды?", "May I drink some water?", "Must I drink water?"),
    (11, "Банк (Conditionals 1 & 2)", "Вы берете кредит. 'What happens if I lose my job?'", "If you lose it, you will have problems.", "If you will lose it, you have problems.", "Если бы я был богат, я бы не брал кредит.", "If I were rich, I would not take a loan.", "If I am rich, I will not take loan."),
    (12, "Новости (Косвенная речь)", "Пересказ слухов. 'The boss said: I will fire him.'", "The boss said that he would fire him.", "The boss said that he will fire him.", "Она сказала, что занята.", "She said she was busy.", "She said she is busy."),
    (13, "Фитнес (Герундий)", "Тренер дает инструкции. 'What do you enjoy doing?'", "I enjoy running.", "I enjoy to run.", "Прекратите есть фастфуд.", "Stop eating fast food.", "Stop to eat fast food."),
    (14, "Музей (Придаточные)", "Гид описывает картину. 'This is the artist.'", "This is the artist who painted it.", "This is the artist which painted it.", "Дом, где он жил, очень старый.", "The house where he lived is very old.", "The house which he lived is old."),
    (15, "Встреча (Used to)", "Вы встретили старого друга. 'You look different.'", "I used to have long hair.", "I used to having long hair.", "Я привык к этому городу.", "I am used to this city.", "I used to this city."),
    (16, "Сделка (Mixed Conditionals)", "Обсуждение провала. 'Why did we lose the contract?'", "If we had prepared better, we would be fine now.", "If we prepared better, we would be fine now.", "Никогда я не видел такого провала.", "Never have I seen such a failure.", "Never I have seen such failure."),
    (17, "Автосервис (Causative)", "Ремонт машины. 'Are you repairing the car yourself?'", "No, I am having my car repaired.", "No, I am repairing my car.", "Важно, чтобы механик был осторожен.", "It is crucial that the mechanic be careful.", "It is crucial that the mechanic is careful."),
    (18, "Суд (Обороты/Эмфаза)", "Дача показаний. 'Who stole the money?'", "It was John who stole the money.", "John it was who stole the money.", "Увидев полицию, он убежал.", "Seeing the police, he ran away.", "Saw the police, he ran away."),
    (19, "Корпорация (Passive Reporting)", "Слухи в офисе. 'What do they say about the CEO?'", "He is said to be resigning.", "He is said he is resigning.", "Должно быть, он устал.", "He must have been tired.", "He should have been tired."),
    (20, "Конференция (Фронтинг/Предлоги)", "Сложный разговор. 'What do you object to?'", "I object to working on weekends.", "I object to work on weekends.", "Именно он согласился помочь.", "He did agree to help.", "He agreed do help."),
    (21, "Дискуссия (Фразовые глаголы)", "Подведение итогов. 'How do we solve this?'", "We need to come up with a solution.", "We need to come up to a solution.", "В целом, проект успешен.", "Overall, the project is successful.", "Overall the project successful.")
]

for mod, title, scene1, g1, b1, scene2, g2, b2 in module_topics:
    quest = {
        "id": f"quest_m{mod}",
        "title": f"Модуль {mod}: {title}",
        "moduleId": mod,
        "nodes": {
            "start": {
                "text": scene1,
                "options": [
                    {"text": g1, "nextScene": "honest", "effect": "good"},
                    {"text": b1, "nextScene": "grammar_fail", "effect": "bad"}
                ]
            },
            "honest": {
                "text": scene2,
                "options": [
                    {"text": g2, "nextScene": "success", "effect": "good"},
                    {"text": b2, "nextScene": "grammar_fail", "effect": "bad"}
                ]
            },
            "grammar_fail": {
                "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грамматически неверно.",
                "options": [
                    {"text": "Попробовать снова", "nextScene": "start"}
                ]
            },
            "success": {
                "text": "Отлично! Вы успешно справились с ситуацией.",
                "options": [
                    {"text": "Завершить квест", "nextScene": "end"}
                ]
            }
        }
    }
    quests.append(quest)

out = "import { Quest } from './types';\n\nexport const quests: Quest[] = " + json.dumps(quests, ensure_ascii=False, indent=2) + ";\n"

with open("src/questsData.ts", "w", encoding="utf-8") as f:
    f.write(out)


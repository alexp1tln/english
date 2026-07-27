import re

with open("generate_detailed_course.py", "r") as f:
    content = f.read()

new_lessons = """
extra_lessons = [
    {
        "title": "Past Continuous (Прошедшее длительное)",
        "module": 22,
        "theory": [
            "Past Continuous используется для описания действия, которое длилось в определенный момент в прошлом.",
            "Формула: was/were + V-ing. 'I was watching TV at 5 PM yesterday'.",
            "Часто используется, когда одно действие (Past Continuous) прерывается другим (Past Simple): 'I was reading when he called'.",
            "Слова-маркеры: at that moment, while (в то время как), when (когда).",
            "Для параллельных действий в прошлом: 'While I was cooking, she was reading'."
        ],
        "questions": [
            ("FB", "I ___ (watch) TV when the phone rang.", "was watching"),
            ("MC", "Какое предложение описывает прерванное действие?", ["I was sleeping when the alarm went off.", "I slept yesterday.", "I was sleeping all day."], 0),
            ("DD", "Составьте фразу: 'Они играли в теннис, когда пошел дождь'.", ["They", "were", "playing", "tennis", "when", "it", "started", "to", "rain"], ["was", "played", "playing"]),
            ("MC", "Какое время используется после слова 'while'?", ["Past Continuous", "Past Simple", "Present Perfect"], 0),
            ("FB", "While she was reading, he ___ (cook) dinner.", "was cooking")
        ]
    },
    {
        "title": "Past Perfect (Предпрошедшее время)",
        "module": 22,
        "theory": [
            "Past Perfect используется для действия, которое произошло ДО другого действия в прошлом.",
            "Формула: had + V3 (или окончание -ed). 'When I arrived, the train had left' (Когда я прибыл, поезд УЖЕ ушел).",
            "Без второго действия в прошлом использовать Past Perfect нельзя. Оно нужно именно для того, чтобы показать 'что было раньше'.",
            "Часто используется со словами: by the time (к тому времени как), already (уже), before (до того как), after (после того как).",
            "Пример: 'I had finished my homework before my mom came home'."
        ],
        "questions": [
            ("FB", "By the time we arrived, the movie ___ (start).", "had started"),
            ("MC", "Зачем нужен Past Perfect?", ["Показать, что одно действие в прошлом произошло раньше другого", "Описать привычку в прошлом", "Рассказать о далеком прошлом"], 0),
            ("DD", "Составьте фразу: 'Я уже поужинал, когда она позвонила'.", ["I", "had", "already", "eaten", "dinner", "when", "she", "called"], ["have", "eat", "was"]),
            ("MC", "Что случилось раньше: 'When I woke up, it had stopped raining'?", ["Дождь прекратился", "Я проснулся", "Произошло одновременно"], 0),
            ("FB", "He ___ (never/be) to Paris before last year.", "had never been")
        ]
    },
    {
        "title": "Past Perfect Continuous",
        "module": 22,
        "theory": [
            "Past Perfect Continuous показывает действие, которое длилось в прошлом до определенного момента в прошлом.",
            "Формула: had been + V-ing. 'I had been waiting for an hour when the bus finally arrived'.",
            "Фокус на длительности: нам важно подчеркнуть, как долго что-то происходило.",
            "Обычно есть маркеры длительности: for 2 hours (в течение 2 часов), since morning (с утра) ПЛЮС второе действие в Past Simple.",
            "Глаголы состояния (know, like, believe) не используются в Continuous, вместо них берем обычный Past Perfect."
        ],
        "questions": [
            ("FB", "They had ___ (wait) for 2 hours when he came.", "been waiting"),
            ("MC", "В чем фокус Past Perfect Continuous?", ["На длительности действия до момента в прошлом", "На результате", "На факте совершения действия"], 0),
            ("DD", "Составьте фразу: 'Он был уставшим, потому что работал весь день'.", ["He", "was", "tired", "because", "he", "had", "been", "working", "all", "day"], ["has", "worked", "is"]),
            ("MC", "Можно ли сказать 'I had been knowing him for a year when we married'?", ["Нет, глагол know не используется в Continuous", "Да, это правильно", "Только в разговорной речи"], 0),
            ("FB", "She had been ___ (cry) before I entered.", "crying")
        ]
    },
    {
        "title": "Future Continuous (Будущее длительное)",
        "module": 23,
        "theory": [
            "Future Continuous описывает действие, которое будет длиться в определенный момент в будущем.",
            "Формула: will be + V-ing. 'This time tomorrow, I will be flying to Paris'.",
            "Используется для планов или событий, которые точно будут происходить в известное время.",
            "Также используется для вежливых вопросов о планах: 'Will you be using your car tomorrow?' (Вы не будете завтра использовать машину? Мне бы она пригодилась).",
            "Маркеры: at 5 PM tomorrow, this time next week, from 3 to 5."
        ],
        "questions": [
            ("FB", "At 8 PM tomorrow, I ___ (watch) a movie.", "will be watching"),
            ("MC", "Какое время выбрать для фразы: 'Завтра в это время я буду лежать на пляже'?", ["Future Continuous", "Future Simple", "Present Continuous"], 0),
            ("DD", "Составьте фразу: 'Они будут играть в футбол с 3 до 5'.", ["They", "will", "be", "playing", "football", "from", "3", "to", "5"], ["play", "played", "are"]),
            ("MC", "Зачем спрашивать 'Will you be going to the shop?'", ["Чтобы вежливо узнать планы (может, попросить что-то купить)", "Чтобы отругать", "Это грамматическая ошибка"], 0),
            ("FB", "Don't call me at 6, I will be ___ (work).", "working")
        ]
    },
    {
        "title": "Future Perfect (Будущее совершенное)",
        "module": 23,
        "theory": [
            "Future Perfect описывает действие, которое ЗАВЕРШИТСЯ к определенному моменту в будущем.",
            "Формула: will have + V3 (-ed). 'I will have finished the report by Friday' (Я закончу отчет к пятнице).",
            "Ключевой предлог — 'BY' (к какому-то моменту). By 5 PM, by tomorrow, by next year.",
            "Фокус на результате в будущем: к тому времени, как что-то случится, действие уже будет выполнено.",
            "Например: 'By the time you wake up, I will have left' (К тому времени как ты проснешься, я уже уйду)."
        ],
        "questions": [
            ("FB", "By tomorrow, I ___ (finish) the book.", "will have finished"),
            ("MC", "Какое слово является главным маркером Future Perfect?", ["By (к определенному моменту)", "At (в точное время)", "In (через)"], 0),
            ("DD", "Составьте фразу: 'Они построят дом к следующему году'.", ["They", "will", "have", "built", "the", "house", "by", "next", "year"], ["build", "building", "has"]),
            ("MC", "Что значит 'I will have read this book by Monday'?", ["Я прочитаю эту книгу до наступления понедельника", "Я буду читать ее в понедельник", "Я начал читать ее в понедельник"], 0),
            ("FB", "By 2030, we will ___ (discover) new planets.", "have discovered")
        ]
    },
    {
        "title": "Question Tags (Разделительные вопросы)",
        "module": 24,
        "theory": [
            "Question tags используются для подтверждения информации, как русское 'не так ли?' или 'правда?'.",
            "Правило: если основное предложение утвердительное, tag будет отрицательным. И наоборот.",
            "Пример: 'You are a student, aren't you?' (утверждение -> отрицание).",
            "Пример: 'She doesn't like apples, does she?' (отрицание -> утверждение).",
            "В tag используется тот же вспомогательный глагол, что и в предложении (do, does, did, will, have, is/are).",
            "Исключение: 'I am late, aren't I?' (а не am not I). И 'Let's go, shall we?'"
        ],
        "questions": [
            ("FB", "You speak English, ___ you?", "don't"),
            ("MC", "Какой tag правильный для 'She is beautiful'?", ["isn't she?", "is she?", "doesn't she?"], 0),
            ("DD", "Составьте фразу: 'Он не пришел, не так ли?'", ["He", "didn't", "come", "did", "he"], ["didn't", "was", "does"]),
            ("MC", "Какое исключение для 'I am' в question tags?", ["aren't I?", "am not I?", "don't I?"], 0),
            ("FB", "They have finished, ___ they?", "haven't")
        ]
    },
    {
        "title": "Модальные глаголы дедукции (Must have / Can't have)",
        "module": 24,
        "theory": [
            "Когда мы делаем логические выводы о прошлом, мы используем модальный глагол + have + V3.",
            "'Must have + V3' (Должно быть, точно да): 'She got a 100%. She must have studied hard' (Она, должно быть, усердно училась).",
            "'Can't have + V3' (Не может быть, точно нет): 'He can't have stolen it, he was with me' (Не может быть, чтобы он украл, он был со мной).",
            "'Might/May/Could have + V3' (Возможно, вероятно): 'He might have missed the bus' (Возможно, он опоздал на автобус).",
            "Обратите внимание: для уверенного отрицания в прошлом используется 'can't have', а не 'mustn't have'."
        ],
        "questions": [
            ("FB", "She looks happy. She ___ have passed the exam.", "must"),
            ("MC", "Как сказать 'Не может быть, чтобы он забыл'?", ["He can't have forgotten", "He mustn't have forgotten", "He shouldn't have forgotten"], 0),
            ("DD", "Составьте фразу: 'Возможно, он оставил ключи дома'.", ["He", "might", "have", "left", "the", "keys", "at", "home"], ["must", "can't", "leave"]),
            ("MC", "Что значит 'They must have arrived by now'?", ["Они точно уже прибыли (я уверен)", "Они обязаны прибыть", "Они, возможно, прибыли"], 0),
            ("FB", "You've been travelling all day. You ___ be tired. (Настоящее время)", "must")
        ]
    },
    {
        "title": "I wish / If only (Сожаления)",
        "module": 25,
        "theory": [
            "Конструкция 'I wish' или 'If only' (Жаль, что / Если бы только) используется для выражения сожаления.",
            "Если сожалеем о НАСТОЯЩЕМ: используем Past Simple. 'I wish I had a car' (Жаль, что у меня нет машины / Хотел бы я иметь машину).",
            "Если сожалеем о ПРОШЛОМ: используем Past Perfect (had + V3). 'I wish I had studied harder' (Жаль, что я не учился усерднее).",
            "Если нас раздражает чье-то поведение и мы хотим, чтобы оно изменилось: используем would. 'I wish he would stop talking' (Хоть бы он перестал говорить).",
            "Глагол 'to be' часто принимает форму 'were' для всех лиц: 'I wish I were rich'."
        ],
        "questions": [
            ("FB", "I wish I ___ (have) more free time now.", "had"),
            ("MC", "Как сказать 'Жаль, что я не купил тот телефон' (о прошлом)?", ["I wish I had bought that phone", "I wish I bought that phone", "I wish I would buy that phone"], 0),
            ("DD", "Составьте фразу: 'Хоть бы пошел дождь' (я хочу, чтобы ситуация изменилась).", ["I", "wish", "it", "would", "rain"], ["rained", "had", "will"]),
            ("MC", "Что значит 'I wish I were taller'?", ["Жаль, что я не выше", "Я был высоким", "Я буду высоким"], 0),
            ("FB", "If only she ___ (know) the truth yesterday.", "had known")
        ]
    },
    {
        "title": "So do I / Neither do I",
        "module": 25,
        "theory": [
            "Для краткого согласия (Я тоже) используются конструкции с So и Neither.",
            "Если соглашаемся с УТВЕРЖДЕНИЕМ: So + вспомогательный глагол + подлежащее.",
            "'I like tea' -> 'So do I' (Я тоже). 'I am tired' -> 'So am I'. 'I will go' -> 'So will I'.",
            "Если соглашаемся с ОТРИЦАНИЕМ: Neither + вспомогательный глагол + подлежащее.",
            "'I don't like coffee' -> 'Neither do I' (Я тоже нет). 'I can't swim' -> 'Neither can I'.",
            "Вспомогательный глагол зависит от времени первого предложения."
        ],
        "questions": [
            ("FB", "A: I love pizza. B: ___ do I.", "So"),
            ("MC", "Как согласиться с фразой 'I am not hungry'?", ["Neither am I", "So am I", "Neither do I"], 0),
            ("DD", "Составьте фразу: 'Она не была там, и я тоже (нет)'.", ["She", "wasn't", "there", "and", "neither", "was", "I"], ["so", "did", "am"]),
            ("MC", "Ответ на 'I went to Paris':", ["So did I", "So do I", "So was I"], 0),
            ("FB", "A: I have never been to Mars. B: ___ have I.", "Neither")
        ]
    }
]

raw_lessons.extend(extra_lessons)
"""

content = content.replace("raw_lessons.extend(advanced_lessons)", "raw_lessons.extend(advanced_lessons)\n" + new_lessons)

with open("generate_detailed_course.py", "w") as f:
    f.write(content)

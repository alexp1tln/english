import sys
import reprlib

extra_lessons = [
    {
        "title": "Past Continuous: Процесс в прошлом",
        "module": 8,
        "theory": [
            "Past Continuous (Прошедшее длительное время) используется для описания процесса, который происходил и длился в определенный момент в прошлом.",
            "Структура образования: глагол 'to be' в прошедшем времени (was/were) + смысловой глагол с окончанием '-ing'. 'Was' используется для I, he, she, it, а 'were' — для we, you, they.",
            "Точное указание времени — частый спутник этого времени: 'at 5 o\\'clock yesterday', 'from 6 to 8 pm'. Пример: 'I was reading a book at 5 pm yesterday' (Я находился в процессе чтения).",
            "Past Continuous часто выступает фоном для более короткого действия, выраженного в Past Simple. Короткое действие прерывает длительное: 'I was taking a shower when the phone rang' (Я принимал душ, когда зазвонил телефон).",
            "Для отрицания добавляется 'not' (wasn't, weren't). В вопросительной форме 'was/were' выносится перед подлежащим: 'Were you sleeping?'."
        ],
        "questions": [
            ("FB", "I ___ reading a book at 6 PM.", "was"),
            ("MC", "Какая формула у Past Continuous?", ["was/were + Ving", "have/has + V3", "am/is/are + Ving"], 0),
            ("DD", "Составьте фразу: 'Она смотрела ТВ, когда он пришел'.", "She was watching TV when he came".split(), ["is", "watches"]),
            ("MC", "Какое время используется для прерывающего короткого действия?", ["Past Simple", "Past Continuous", "Present Simple"], 0),
            ("FB", "We ___ playing tennis all morning.", "were"),
            ("DD", "Переведите: 'Я не спал, когда ты позвонил'.", "I was not sleeping when you called".split(), ["did", "sleep", "am"]),
            ("FB", "___ you watching a movie when I called?", "Were")
        ]
    },
    {
        "title": "Past Perfect: Предпрошедшее время",
        "module": 8,
        "theory": [
            "Past Perfect (Прошедшее совершенное время) — это «предпрошедшее» время. Оно необходимо, чтобы показать, что одно действие в прошлом произошло ДО другого действия в прошлом.",
            "Формула образования: вспомогательный глагол 'had' + третья форма глагола (V3 / Past Participle). 'Had' используется для всех лиц и чисел.",
            "Пример: 'When I arrived at the station, the train had already left'. Здесь два действия: я прибыл (Past Simple) и поезд ушел (Past Perfect). Поезд ушел раньше, чем я прибыл.",
            "Маркеры времени: 'by 5 o\\'clock yesterday' (к 5 часам вчера), 'by the time' (к тому времени как), 'after' (после того как), 'before' (до того как).",
            "Отрицательная форма образуется добавлением 'not' к 'had' (hadn't). Вопросительная — вынесением 'had' перед подлежащим: 'Had they finished the work before the boss arrived?'."
        ],
        "questions": [
            ("FB", "When I arrived, the train ___ already left.", "had"),
            ("MC", "Для чего используется Past Perfect?", ["Действие произошло ДО другого действия в прошлом", "Действие происходит прямо сейчас", "Действие произошло в точное время в прошлом"], 0),
            ("DD", "Составьте фразу: 'Она ушла до того, как я пришел'.", "She had left before I arrived".split(), ["leaves", "has"]),
            ("MC", "Какая форма глагола используется после 'had'?", ["V3 (Past Participle)", "V2 (Past Simple)", "Ving"], 0),
            ("FB", "I realized I had ___ (forget) my keys.", "forgotten"),
            ("DD", "Переведите: 'Мы не закончили проект к пятнице'.", "We had not finished the project by Friday".split(), ["didn't", "finish", "are"]),
            ("FB", "___ you ever met him before that day?", "Had")
        ]
    },
    {
        "title": "Future Continuous и Future Perfect",
        "module": 9,
        "theory": [
            "Future Continuous (Будущее длительное) описывает действие, которое БУДЕТ происходить (длиться) в определенный момент в будущем.",
            "Формула Future Continuous: will be + Ving. Пример: 'At 5 PM tomorrow, I will be flying to Paris' (Завтра в 5 я буду находиться в процессе полета).",
            "Future Perfect (Будущее совершенное) используется для действия, которое уже ЗАВЕРШИТСЯ к определенному моменту в будущем.",
            "Формула Future Perfect: will have + V3. Пример: 'By next week, I will have finished this book' (К следующей неделе я уже дочитаю эту книгу — будет результат).",
            "Важно различать акценты: Continuous делает упор на процесс в конкретную секунду будущего, а Perfect — на достижение результата к дедлайну в будущем."
        ],
        "questions": [
            ("FB", "At 8 PM tomorrow, I will ___ watching a movie.", "be"),
            ("MC", "Какая формула у Future Perfect?", ["will have + V3", "will be + Ving", "will + V1"], 0),
            ("DD", "Составьте фразу: 'Я буду работать завтра в это время'.", "I will be working at this time tomorrow".split(), ["work", "am"]),
            ("MC", "Какое время выбрать для 'к следующему году я выучу английский'?", ["Future Perfect", "Future Continuous", "Future Simple"], 0),
            ("FB", "By 2030, they will ___ built a new city.", "have"),
            ("DD", "Переведите: 'Она напишет отчет к 5 часам'.", "She will have written the report by 5 o'clock".split(), ["be", "writing", "has"]),
            ("FB", "Will you ___ sleeping when I return?", "be")
        ]
    },
    {
        "title": "Модальные глаголы: May, Might, Could",
        "module": 10,
        "theory": [
            "Для выражения вероятности, разрешения или вежливой просьбы в английском языке используется группа модальных глаголов: may, might, could.",
            "'May' используется для вежливого разрешения или высокой степени вероятности (около 50%). 'May I come in?' (Можно войти?). 'It may rain today' (Возможно, сегодня пойдет дождь).",
            "'Might' выражает меньшую степень вероятности (около 20-30%) или неуверенность. 'He might be at home' (Он, возможно, дома, но я сильно сомневаюсь).",
            "'Could' в контексте вероятности переводится как 'мог бы' и часто указывает на теоретическую возможность. 'This could be dangerous' (Это может быть опасно).",
            "Также 'could' является формой прошедшего времени от 'can' (умел, мог физически). 'When I was 5, I could read' (Когда мне было 5, я умел читать)."
        ],
        "questions": [
            ("FB", "___ I use your phone, please?", "May"),
            ("MC", "Какой модальный глагол выражает наименьшую уверенность?", ["might", "must", "will"], 0),
            ("DD", "Составьте фразу: 'Завтра возможно пойдет снег'.", "It might snow tomorrow".split(), ["snows", "is"]),
            ("MC", "Как сказать 'Я умел плавать в детстве'?", ["I could swim", "I may swim", "I might swim"], 0),
            ("FB", "He ___ be right, but I'm not sure.", "might"),
            ("DD", "Переведите: 'Можно мне открыть окно?'.", "May I open the window ?".split(), ["Do", "opens", "am"]),
            ("FB", "This ___ be the best day of my life (вероятность).", "could")
        ]
    },
    {
        "title": "Модальные глаголы: Have to vs Must",
        "module": 10,
        "theory": [
            "Глаголы 'must' и 'have to' переводятся как 'должен', но имеют важные смысловые различия. Разница кроется в источнике обязательства.",
            "'Must' выражает внутреннее обязательство, личное убеждение или строгий приказ говорящего. 'I must study harder' (Я сам решил, что мне это нужно).",
            "'Have to' выражает внешнее обязательство, обусловленное правилами, законами или обстоятельствами. 'I have to wear a uniform at work' (Таковы правила компании, это не мой выбор).",
            "В отрицательной форме разница колоссальная! 'Mustn\\'t' означает строгий запрет ('нельзя'). 'You mustn\\'t smoke here'.",
            "'Don\\'t have to' означает отсутствие необходимости ('не нужно, нет необходимости, но если хочешь — можешь'). 'You don\\'t have to come' (Тебе не обязательно приходить)."
        ],
        "questions": [
            ("FB", "I ___ to wake up early tomorrow because of work.", "have"),
            ("MC", "Что означает 'You don't have to do it'?", ["Тебе не обязательно это делать", "Тебе строго запрещено это делать", "Ты не умеешь это делать"], 0),
            ("DD", "Составьте фразу: 'Ты не должен трогать это (запрет)'.", "You must not touch this".split(), ["have", "don't"]),
            ("MC", "Какое слово выражает личное внутреннее обязательство?", ["must", "have to", "might"], 0),
            ("FB", "She doesn't ___ to pay for the ticket.", "have"),
            ("DD", "Переведите: 'Мне приходится работать по выходным'.", "I have to work on weekends".split(), ["must", "works", "am"]),
            ("FB", "You ___ see this movie, it's amazing! (рекомендация/обязательство)", "must")
        ]
    },
    {
        "title": "Conditionals: Условные предложения 2",
        "module": 11,
        "theory": [
            "Second Conditional (Условие второго типа) используется для описания нереальных, воображаемых или маловероятных ситуаций в настоящем или будущем.",
            "Структура: If + Past Simple, would + глагол в инфинитиве (без 'to').",
            "Пример: 'If I had a million dollars, I would buy an island' (Если бы у меня был миллион долларов, я бы купил остров). В реальности миллиона у меня сейчас нет.",
            "Интересная особенность: в Second Conditional глагол 'to be' для всех лиц (даже I, he, she, it) часто принимает форму 'were' (хотя 'was' тоже допустимо в разговорной речи).",
            "Знаменитая фраза 'If I were you, I would...' переводится как 'На твоем месте я бы...'. Пример: 'If I were you, I would apologize' (На твоем месте я бы извинился)."
        ],
        "questions": [
            ("FB", "If I ___ you, I would study harder.", "were"),
            ("MC", "Какая формула у Second Conditional?", ["If + Past Simple, would + V1", "If + Present Simple, will + V1", "If + Past Perfect, would have + V3"], 0),
            ("DD", "Составьте фразу: 'Если бы я знал, я бы сказал тебе'.", "If I knew I would tell you".split(), ["know", "will"]),
            ("MC", "Для чего используется Second Conditional?", ["Нереальные ситуации в настоящем/будущем", "Реальные планы на будущее", "Научные факты"], 0),
            ("FB", "She ___ travel the world if she had money.", "would"),
            ("DD", "Переведите: 'На твоем месте, я бы не делал этого'.", "If I were you I would not do it".split(), ["am", "will", "was"]),
            ("FB", "If he ___ time, he would help.", "had")
        ]
    },
    {
        "title": "Conditionals: Условные предложения 3",
        "module": 11,
        "theory": [
            "Third Conditional (Условие третьего типа) — это время сожалений и критики. Оно описывает нереальные ситуации в ПРОШЛОМ.",
            "Мы используем его, когда действие уже произошло (или не произошло) в прошлом, и мы фантазируем: 'А вот если бы тогда всё было иначе...'. Но изменить уже ничего нельзя.",
            "Структура сложная: If + Past Perfect, would have + V3 (Past Participle).",
            "Пример: 'If I had studied harder, I would have passed the exam' (Если бы я учился усерднее тогда, я бы сдал экзамен тогда). По факту: я не учился и провалил экзамен.",
            "Еще пример: 'If she hadn\\'t missed the train, she wouldn\\'t have been late' (Если бы она не опоздала на поезд, она бы не опоздала). Все события остались в прошлом."
        ],
        "questions": [
            ("FB", "If I ___ known, I would have come.", "had"),
            ("MC", "Для чего используется Third Conditional?", ["Нереальные ситуации и сожаления о прошлом", "Нереальные ситуации в будущем", "Запланированные действия"], 0),
            ("DD", "Составьте фразу: 'Если бы он спросил, я бы помог'.", "If he had asked I would have helped".split(), ["asks", "help", "will"]),
            ("MC", "Какая формула у Third Conditional?", ["If + Past Perfect, would have + V3", "If + Past Simple, would + V1", "If + Present Simple, will + V1"], 0),
            ("FB", "She would have passed if she had ___ (study).", "studied"),
            ("DD", "Переведите: 'Они бы выиграли, если бы играли лучше'.", "They would have won if they had played better".split(), ["win", "play", "will"]),
            ("FB", "If it had rained, we would ___ stayed home.", "have")
        ]
    },
    {
        "title": "Reported Speech: Косвенная речь",
        "module": 12,
        "theory": [
            "Когда мы передаем чьи-то слова не прямой цитатой, а пересказом, мы используем косвенную речь (Reported Speech).",
            "Главное правило косвенной речи — 'шаг назад во времени' (Backshift). Если вводный глагол стоит в прошедшем времени (например, 'He said...'), время оригинальной фразы сдвигается на шаг в прошлое.",
            "Present Simple превращается в Past Simple. Прямая речь: 'I like apples'. Косвенная: He said (that) he liked apples.",
            "Present Continuous -> Past Continuous. 'I am working' -> He said he was working.",
            "Past Simple -> Past Perfect. 'I bought a car' -> He said he had bought a car.",
            "Модальные глаголы также меняются: will -> would, can -> could. Местоимения адаптируются по смыслу: I -> he/she."
        ],
        "questions": [
            ("FB", "He said that he ___ (like) coffee.", "liked"),
            ("MC", "В какое время переходит Present Simple в косвенной речи?", ["Past Simple", "Past Perfect", "Present Perfect"], 0),
            ("DD", "Составьте фразу: 'Она сказала, что она работает'.", "She said that she was working".split(), ["is", "work"]),
            ("MC", "Как изменится слово 'will' в косвенной речи?", ["would", "can", "should"], 0),
            ("FB", "They told me they ___ bought a house.", "had"),
            ("DD", "Переведите: 'Он сказал, что может помочь'.", "He said he could help".split(), ["can", "will", "helps"]),
            ("FB", "She said she ___ come tomorrow.", "would")
        ]
    },
    {
        "title": "Gerund и Infinitive",
        "module": 13,
        "theory": [
            "Когда в предложении встречаются два глагола подряд, второй глагол принимает форму либо инфинитива (с частицей 'to'), либо герундия (глагол с окончанием '-ing').",
            "Выбор формы зависит от первого глагола. Некоторые глаголы требуют после себя только инфинитив: want, decide, hope, promise, plan. 'I want to go'. 'She decided to stay'.",
            "Другие глаголы требуют после себя только герундий: enjoy, mind, suggest, finish, avoid. 'I enjoy reading'. 'He suggested going to the cinema'.",
            "После любых предлогов (in, on, at, of, for, about) всегда используется только герундий! 'I am interested in learning English'. 'Thank you for coming'.",
            "Некоторые глаголы могут принимать обе формы без изменения смысла (like, love, start), а некоторые — со значительным изменением смысла (stop, remember). 'Stop smoking' (бросить курить) vs 'Stop to smoke' (остановиться, чтобы покурить)."
        ],
        "questions": [
            ("FB", "I enjoy ___ (read) books in the evening.", "reading"),
            ("MC", "Что ставится после глагола 'decide'?", ["Infinitive (to do)", "Gerund (doing)", "V1 без to"], 0),
            ("DD", "Составьте фразу: 'Она хочет купить новую машину'.", "She wants to buy a new car".split(), ["buying", "buy"]),
            ("MC", "Какая форма используется после предлогов?", ["Gerund (-ing)", "Infinitive (to + V1)", "V3"], 0),
            ("FB", "Thank you for ___ (help) me.", "helping"),
            ("DD", "Переведите: 'Он предложил пойти в парк'.", "He suggested going to the park".split(), ["to", "go", "goes"]),
            ("FB", "I promise ___ call you later.", "to")
        ]
    },
    {
        "title": "Относительные придаточные (Relative Clauses)",
        "module": 14,
        "theory": [
            "Относительные придаточные предложения дают дополнительную информацию о людях, вещах или местах. Для их присоединения используются относительные местоимения: who, which, that, whose, where.",
            "WHO используется только для людей. 'The man who lives next door is a doctor' (Мужчина, который живет по соседству — врач).",
            "WHICH используется только для вещей и животных. 'The book which is on the table is mine' (Книга, которая на столе — моя).",
            "THAT универсально: может заменять и 'who', и 'which' в определяющих придаточных (особенно в разговорной речи). 'The car that I bought is fast'.",
            "WHOSE переводится как 'чей/которого' и указывает на принадлежность. 'The girl whose dog is barking is my sister'. WHERE используется для мест: 'The city where I was born'."
        ],
        "questions": [
            ("FB", "The man ___ called you is my boss (who/which).", "who"),
            ("MC", "Какое местоимение используется для неодушевленных предметов?", ["which", "who", "where"], 0),
            ("DD", "Составьте фразу: 'Машина, которую я купил, очень быстрая'.", "The car which I bought is very fast".split(), ["who", "whom"]),
            ("MC", "Что означает слово 'whose'?", ["Чей / которого", "Кто", "Где"], 0),
            ("FB", "This is the house ___ I grew up (where).", "where"),
            ("DD", "Переведите: 'Женщина, чья сумка была украдена'.", "The woman whose bag was stolen".split(), ["who", "which", "is"]),
            ("FB", "The movie ___ we watched was great (that).", "that")
        ]
    },
    {
        "title": "Used to vs Be used to",
        "module": 15,
        "theory": [
            "Конструкция 'used to' используется для описания привычек или состояний в прошлом, которые сейчас больше не актуальны. Переводится как 'раньше'.",
            "Пример: 'I used to smoke, but I stopped' (Раньше я курил, но бросил). 'She used to have long hair' (Раньше у нее были длинные волосы).",
            "После 'used to' всегда идет начальная форма глагола (инфинитив). Отрицание строится с 'didn\\'t': 'I didn\\'t use to like olives' (Раньше я не любил оливки).",
            "Внимание, не путайте с 'be used to' (быть привыкшим к чему-то)! Эта конструкция означает, что что-то стало для вас нормальным и не вызывает дискомфорта.",
            "После 'be used to' идет существительное или герундий (-ing). 'I am used to waking up early' (Я привык просыпаться рано). 'He is used to cold weather' (Он привык к холодной погоде)."
        ],
        "questions": [
            ("FB", "I ___ to live in London.", "used"),
            ("MC", "Что означает 'I used to play tennis'?", ["Раньше играл, сейчас нет", "Привык играть в теннис", "Играю в теннис каждый день"], 0),
            ("DD", "Составьте фразу: 'Раньше он не курил'.", "He didn't use to smoke".split(), ["used", "smokes"]),
            ("MC", "Какая форма глагола ставится после 'be used to'?", ["Gerund (-ing) / существительное", "Infinitive (V1)", "V3"], 0),
            ("FB", "I am used to ___ (work) late.", "working"),
            ("DD", "Переведите: 'Она привыкла к этому городу'.", "She is used to this city".split(), ["use", "was", "does"]),
            ("FB", "Did you ___ (use) to play the piano?", "use")
        ]
    }
]

with open("generate_detailed_course.py", "r", encoding="utf-8") as f:
    content = f.read()

# Insert the code just before final_lessons = []
insertion = "raw_lessons.extend(extra_lessons)\n\n"
new_content = content.replace("final_lessons = []", "extra_lessons = " + repr(extra_lessons) + "\n\n" + insertion + "final_lessons = []")

with open("generate_detailed_course.py", "w", encoding="utf-8") as f:
    f.write(new_content)

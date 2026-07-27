import sys
import reprlib

advanced_lessons = [
    {
        "title": "Inversion: Инверсия после отрицательных наречий",
        "module": 16,
        "theory": [
            "Инверсия — это изменение прямого порядка слов для придания речи большей эмоциональности или формальности. На уровне C1-C2 она часто используется в письменной речи и выступлениях.",
            "При использовании отрицательных или ограничительных наречий в начале предложения (Never, Rarely, Seldom, Hardly, Scarcely, No sooner, Only then), мы меняем местами подлежащее и вспомогательный глагол.",
            "Например, вместо 'I have never seen such a beautiful sunset', мы говорим: 'Never have I seen such a beautiful sunset'.",
            "Для Present и Past Simple необходимо добавить вспомогательный глагол (do/does/did). Вместо 'She rarely goes out' -> 'Rarely does she go out'.",
            "Конструкции 'No sooner... than' и 'Hardly... when' используются для действий, произошедших одно сразу после другого: 'No sooner had I arrived than the phone rang'."
        ],
        "questions": [
            ("FB", "Never ___ I seen such a mess.", "have"),
            ("MC", "Какое слово используется в паре с 'No sooner'?", ["than", "when", "that"], 0),
            ("DD", "Составьте фразу: 'Редко он говорит о своем прошлом'.", "Rarely does he speak about his past".split(), ["do", "speaks", "is"]),
            ("MC", "Какая форма правильная?", ["Hardly had I arrived when...", "Hardly I had arrived when...", "Hardly did I arrived when..."], 0),
            ("FB", "Only then ___ I realize my mistake.", "did"),
            ("DD", "Переведите: 'Никогда раньше она не была так счастлива'.", "Never before had she been so happy".split(), ["has", "was", "she's"]),
            ("FB", "Scarcely had the match started ___ it began to rain.", "when")
        ]
    },
    {
        "title": "Mixed Conditionals: Смешанные условные предложения",
        "module": 16,
        "theory": [
            "В реальной жизни мы не всегда можем использовать классические условные предложения (2 или 3 типа). Иногда условие относится к прошлому, а результат к настоящему, или наоборот.",
            "Тип 1 (Прошлое -> Настоящее): Если бы что-то произошло в прошлом, то сейчас ситуация была бы иной. Конструкция: If + Past Perfect, would + V1.",
            "Пример: 'If I had won the lottery (в прошлом), I would be rich now (сейчас)'.",
            "Тип 2 (Настоящее/Постоянное -> Прошлое): Если бы я был кем-то/имел что-то (вообще), я бы поступил иначе в прошлом. Конструкция: If + Past Simple, would have + V3.",
            "Пример: 'If I spoke French (вообще умел говорить), I would have translated that document for you yesterday' (перевел бы вчера)."
        ],
        "questions": [
            ("FB", "If I had taken the medicine, I would ___ fine now.", "be"),
            ("MC", "Какая формула описывает: Условие в прошлом -> Результат сейчас?", ["If + Past Perfect, would + V1", "If + Past Simple, would have + V3", "If + Past Simple, would + V1"], 0),
            ("DD", "Составьте фразу: 'Если бы я был богатым, я бы купил ту машину вчера'.", "If I were rich I would have bought that car yesterday".split(), ["was", "buy", "will"]),
            ("MC", "Что значит 'If he had missed the train, he wouldn't be here now'?", ["Он опоздал на поезд и его здесь нет.", "Он успел на поезд и сейчас здесь.", "Он успел на поезд, но его здесь нет."], 0),
            ("FB", "If I knew her number, I would ___ called her yesterday.", "have"),
            ("DD", "Переведите: 'Если бы он не потерял паспорт, он бы сейчас летел в Париж'.", "If he hadn't lost his passport he would be flying to Paris now".split(), ["didn't", "is", "have"]),
            ("FB", "If I ___ (be) you, I would have accepted the offer.", "were")
        ]
    },
    {
        "title": "Causative Verbs: Have / Get something done",
        "module": 17,
        "theory": [
            "Каузативная форма (Causative) используется, когда мы организуем, чтобы кто-то другой сделал работу для нас, а не делаем её сами.",
            "Основная структура: have + объект + V3 (Past Participle). Пример: 'I had my car repaired' (Мне починили машину — я не сам её чинил, я нанял механика).",
            "Вместо 'have' в разговорной речи часто используется 'get'. 'I got my hair cut' (Меня подстригли).",
            "Для активной формы, если мы хотим указать исполнителя, мы говорим: 'have + кто-то + V1' (I had the mechanic repair my car) ИЛИ 'get + кто-то + to + V1' (I got the mechanic to repair my car).",
            "Использование 'get' в активном залоге часто подразумевает убеждение ('Я уговорил его это сделать')."
        ],
        "questions": [
            ("FB", "I need to have my car ___ (wash).", "washed"),
            ("MC", "Что значит 'She had her house painted'?", ["Кто-то покрасил её дом для неё.", "Она сама покрасила свой дом.", "Она должна покрасить дом."], 0),
            ("DD", "Составьте фразу: 'Я хочу подстричься (чтобы меня подстригли)'.", "I want to get my hair cut".split(), ["cutted", "to", "have"]),
            ("MC", "Как правильно указать исполнителя с глаголом 'get'?", ["I got him to do it", "I got him do it", "I got him doing it"], 0),
            ("FB", "The boss had his assistant ___ (type) the report.", "type"),
            ("DD", "Переведите: 'Мы ремонтируем крышу сейчас (кто-то чинит для нас)'.", "We are having our roof repaired now".split(), ["repairing", "is", "do"]),
            ("FB", "I got him ___ (to help/help) me with the bags.", "to help")
        ]
    },
    {
        "title": "Subjunctive Mood: Сослагательное наклонение",
        "module": 17,
        "theory": [
            "Subjunctive Mood используется для выражения важности, требований, предложений или пожеланий в формальном английском.",
            "Структура: после определенных слов (suggest, demand, insist, recommend, it is crucial, it is vital) в придаточном предложении используется глагол в форме инфинитива без 'to' ДЛЯ ВСЕХ лиц.",
            "Пример: 'I suggest that he GO (не goes!) to the doctor'. 'It is essential that she BE (не is!) on time'.",
            "Для отрицания мы используем 'not + глагол' без вспомогательных do/does. 'I insisted that he NOT LEAVE early'.",
            "В современном британском английском часто используется 'should + инфинитив' вместо чистого subjunctive: 'I suggest that he should go...'. Но в американском чистый subjunctive очень распространен."
        ],
        "questions": [
            ("FB", "The doctor recommended that he ___ (stop) smoking.", "stop"),
            ("MC", "Как правильно сказать в формальном английском?", ["I insist that she arrive on time.", "I insist that she arrives on time.", "I insist that she to arrive on time."], 0),
            ("DD", "Составьте фразу: 'Важно, чтобы он был здесь'.", "It is important that he be here".split(), ["is", "was", "are"]),
            ("MC", "Как строится отрицание в Subjunctive?", ["not + V1", "does not + V1", "don't + V1"], 0),
            ("FB", "I demand that he ___ not enter this room.", "not"),
            ("DD", "Переведите: 'Я предложил, чтобы она позвонила ему'.", "I suggested that she call him".split(), ["calls", "called", "do"]),
            ("FB", "It is crucial that they ___ (be) informed immediately.", "be")
        ]
    },
    {
        "title": "Participle Clauses: Причастные обороты",
        "module": 18,
        "theory": [
            "Причастные обороты позволяют сделать речь более элегантной и лаконичной, объединяя два предложения в одно.",
            "Present Participle (V-ing) используется для активного действия, происходящего одновременно. 'Waiting for the train, I read a book' (Ожидая поезд, я читал книгу).",
            "Past Participle (V3) используется для пассивного значения. 'Built in 1900, the house is very old' (Построенный в 1900, дом очень стар).",
            "Perfect Participle (Having + V3) показывает, что одно действие завершилось ДО начала другого. 'Having finished my work, I went home' (Завершив работу, я пошел домой).",
            "Важно: подлежащее в обеих частях предложения должно быть одинаковым! Иначе получится грамматическая ошибка 'dangling participle' (например: 'Looking out the window, the mountains were beautiful' — горы не смотрели в окно!)."
        ],
        "questions": [
            ("FB", "___ (walk) down the street, I saw a friend.", "Walking"),
            ("MC", "Какой оборот показывает завершенность ДО следующего действия?", ["Having done (Perfect Participle)", "Doing (Present Participle)", "Done (Past Participle)"], 0),
            ("DD", "Составьте фразу: 'Написанная от руки, записка была трудночитаемой'.", "Written by hand the note was hard to read".split(), ["Writing", "is", "writes"]),
            ("MC", "Есть ли ошибка в предложении: 'Walking in the park, a dog bit me'?", ["Да, подлежащие не совпадают", "Нет, предложение составлено верно", "Да, нужно использовать Past Participle"], 0),
            ("FB", "Having ___ (eat) my dinner, I watched TV.", "eaten"),
            ("DD", "Переведите: 'Испугавшись паука, она закричала'.", "Frightened by the spider she screamed".split(), ["Frightening", "Frightens", "is"]),
            ("FB", "___ (use) carefully, this computer will last for years.", "Used")
        ]
    },
    {
        "title": "Cleft Sentences: Эмфатические конструкции",
        "module": 18,
        "theory": [
            "Cleft sentences (расщепленные предложения) используются для выделения, акцентирования внимания на определенной части предложения.",
            "It-cleft: It is/was + выделяемая часть + that/who. Пример: 'John broke the window'. Выделяем Джона: 'It was John who broke the window' (Именно Джон разбил окно). Выделяем окно: 'It was the window that John broke'.",
            "Wh-cleft: What + придаточное + is/was + акцент. Обычно используется для выделения действия или целой идеи. Пример: 'What I need is a good sleep' (Что мне нужно, так это хороший сон).",
            "Для выделения человека можно сказать: 'The person who helped me was Jane'. Для места: 'The place where we met was Paris'.",
            "All-cleft: Начинается со слова All и значит 'единственное, что...'. 'All I want for Christmas is you' (Единственное, что я хочу на Рождество — это ты)."
        ],
        "questions": [
            ("FB", "It ___ Sarah who told me the secret.", "was"),
            ("MC", "Как выделить слово 'yesterday' в предложении 'I saw him yesterday'?", ["It was yesterday that I saw him.", "What I saw him was yesterday.", "Yesterday it was I saw him."], 0),
            ("DD", "Составьте фразу: 'Что мне действительно нравится, так это погода'.", "What I really like is the weather".split(), ["It", "was", "are"]),
            ("MC", "Какое слово используется в конструкции 'It was the car ___ he bought'?", ["that", "what", "where"], 0),
            ("FB", "___ I need is more time.", "What"),
            ("DD", "Переведите: 'Всё, что я сделал, это позвонил ей'.", "All I did was call her".split(), ["What", "called", "is"]),
            ("FB", "It is the manager ___ makes the final decision.", "who")
        ]
    },
    {
        "title": "Passive Reporting Verbs: Продвинутый Пассив",
        "module": 19,
        "theory": [
            "При передаче слухов, мнений или новостей часто используются пассивные конструкции с глаголами вроде say, think, believe, report, expect.",
            "Конструкция 1 (безличная): It is said / believed / expected + that... Пример: 'It is said that he is rich' (Говорят, что он богат).",
            "Конструкция 2 (с личным подлежащим): Подлежащее + is said / expected + Infinitive (to do). Пример: 'He is said to be rich'.",
            "Если действие в инфинитиве произошло в ПРОШЛОМ, используется Perfect Infinitive (to have + V3). Пример: 'He is believed to have stolen the money' (Считается, что он украл деньги в прошлом).",
            "Если действие длительное, используется Continuous Infinitive (to be + V-ing). 'She is reported to be hiding in Spain' (Сообщают, что она прячется в Испании прямо сейчас)."
        ],
        "questions": [
            ("FB", "It is ___ (say) that the company is bankrupt.", "said"),
            ("MC", "Какая конструкция означает 'Считается, что он был богат (в прошлом)'?", ["He is believed to have been rich.", "He is believed to be rich.", "It is believed that he is rich."], 0),
            ("DD", "Составьте фразу: 'Говорят, что она живет здесь'.", "She is said to live here".split(), ["living", "have", "are"]),
            ("MC", "Что означает 'The president is expected to arrive soon'?", ["Ожидается, что президент скоро прибудет.", "Президент ожидает прибытия.", "Президент скоро прибыл."], 0),
            ("FB", "The thieves are reported to ___ left the country.", "have"),
            ("DD", "Переведите: 'Считается, что картина была украдена'.", "The painting is believed to have been stolen".split(), ["has", "stole", "be"]),
            ("FB", "He is thought ___ (be) one of the best players.", "to be")
        ]
    },
    {
        "title": "Modals of Deduction in the Past",
        "module": 19,
        "theory": [
            "Для выражения догадок и предположений о прошлом используются модальные глаголы с перфектным инфинитивом (have + V3).",
            "Must have + V3 (почти 100% уверенность): 'Должно быть, это было так'. Пример: 'You must have been exhausted after the marathon' (Ты, должно быть, очень устал).",
            "Can't have / Couldn't have + V3 (100% уверенность, что это НЕ так): 'Не может быть, чтобы...'. Пример: 'He can't have stolen the car, he was with me' (Он не мог украсть машину).",
            "May/Might/Could have + V3 (неуверенность, 50/50): 'Возможно, это было так'. Пример: 'She might have missed the bus' (Возможно, она опоздала на автобус).",
            "Should have + V3 (критика или сожаление о прошлом): 'Следовало бы сделать (но не сделал)'. 'You should have called me!' (Тебе следовало мне позвонить!)."
        ],
        "questions": [
            ("FB", "You worked all night. You ___ have been tired.", "must"),
            ("MC", "Какая фраза означает сожаление: 'Мне следовало учиться усерднее'?", ["I should have studied harder.", "I must have studied harder.", "I might have studied harder."], 0),
            ("DD", "Составьте фразу: 'Она, должно быть, забыла о встрече'.", "She must have forgotten about the meeting".split(), ["has", "forget", "should"]),
            ("MC", "Что значит 'He can't have done it'?", ["Не может быть, чтобы он это сделал.", "Он не смог этого сделать (физически).", "Он не должен был этого делать."], 0),
            ("FB", "I can't find my keys. I ___ have left them at home (возможно).", "might"),
            ("DD", "Переведите: 'Тебе не следовало говорить ей это'.", "You shouldn't have told her that".split(), ["mustn't", "tell", "didn't"]),
            ("FB", "The window is broken. The kids ___ have done it.", "must")
        ]
    },
    {
        "title": "Advanced Emphatic Structures",
        "module": 20,
        "theory": [
            "Для усиления значения в английском языке используются различные эмфатические структуры, которые делают речь более экспрессивной.",
            "Эмфатическое Do/Does/Did: Используется в утвердительных предложениях для подчеркивания. 'I do love you!' (Я действительно тебя люблю!). 'He did tell me the truth' (Он и вправду сказал мне правду).",
            "Fronting (фронтинг): Вынесение важной информации (часто обстоятельства места или времени) в начало предложения. 'Into the room walked the boss' (В комнату вошел босс). Заметьте, что при этом может происходить инверсия.",
            "Фронтинг с причастиями: 'Sitting at the desk was a young woman' (За столом сидела молодая женщина).",
            "Фронтинг часто используется в литературном стиле и журналистике для создания драматического эффекта или плавного перехода в тексте."
        ],
        "questions": [
            ("FB", "I ___ like your new haircut! (Действительно)", "do"),
            ("MC", "Какой из вариантов использует фронтинг и инверсию верно?", ["On the table lay a beautiful book.", "On the table a beautiful book lay.", "Lay on the table a beautiful book."], 0),
            ("DD", "Составьте фразу: 'Она и вправду позвонила мне вчера'.", "She did call me yesterday".split(), ["called", "does", "do"]),
            ("MC", "Зачем используют 'do' в утверждении 'I do know him'?", ["Для усиления, подтверждения", "Потому что это вопрос", "Это ошибка"], 0),
            ("FB", "Down the hill ___ (roll) the ball.", "rolled"),
            ("DD", "Переведите: 'В углу стоял старый стул'.", "In the corner stood an old chair".split(), ["standing", "stands", "was"]),
            ("FB", "He ___ work hard, I can confirm that.", "does")
        ]
    },
    {
        "title": "Dependent Prepositions",
        "module": 20,
        "theory": [
            "В английском языке многие глаголы, прилагательные и существительные требуют после себя строго определенных предлогов. Логики здесь часто нет, их нужно запоминать.",
            "Примеры с глаголами: rely ON (полагаться на), object TO (возражать против), insist ON (настаивать на), apologize FOR (извиняться за), consist OF (состоять из).",
            "Примеры с прилагательными: afraid OF (бояться), famous FOR (знаменит чем-то), responsible FOR (ответственен за), interested IN (заинтересован в), accustomed TO (привыкший к).",
            "Важное правило: после предлогов всегда используется существительное, местоимение или глагол с окончанием -ING (герундий). 'I object to going there' (а не 'to go').",
            "Особое внимание обратите на 'to', которое часто бывает предлогом, а не частью инфинитива. (Looking forward to, object to, used to)."
        ],
        "questions": [
            ("FB", "She is very interested ___ art.", "in"),
            ("MC", "Какой предлог нужен: 'I rely ___ you'?", ["on", "in", "for"], 0),
            ("DD", "Составьте фразу: 'Он извинился за опоздание'.", "He apologized for being late".split(), ["to", "be", "was"]),
            ("MC", "Что значит 'I object to doing this'?", ["Я возражаю против того, чтобы делать это.", "Я согласен делать это.", "Мой объект делает это."], 0),
            ("FB", "They are famous ___ their pizza.", "for"),
            ("DD", "Переведите: 'Она привыкла жить здесь'.", "She is accustomed to living here".split(), ["live", "for", "with"]),
            ("FB", "The team consists ___ five members.", "of")
        ]
    },
    {
        "title": "Advanced Phrasal Verbs",
        "module": 21,
        "theory": [
            "Фразовые глаголы на уровне C1-C2 часто имеют сильно идиоматическое значение, которое невозможно угадать по составным частям.",
            "Примеры: 'come up with' (придумать идею), 'fall out with' (поссориться), 'put up with' (терпеть/мириться с чем-то), 'turn out' (оказаться).",
            "Многие продвинутые фразовые глаголы состоят из трех слов (Verb + Adverb + Preposition). В таких глаголах прямое дополнение всегда стоит после всего комплекса: 'I look forward to the meeting'.",
            "'Bring up' (воспитывать / поднять тему). 'Make up for' (компенсировать). 'Get away with' (избежать наказания за проступок).",
            "Для свободного владения языком критически важно уметь заменять формальные латинские глаголы (tolerate, compensate) на их фразовые эквиваленты (put up with, make up for)."
        ],
        "questions": [
            ("FB", "I can't put ___ with this noise anymore! (терпеть)", "up"),
            ("MC", "Что означает фраза 'come up with an idea'?", ["Придумать идею", "Забыть идею", "Украсть идею"], 0),
            ("DD", "Составьте фразу: 'Она поссорилась со своим братом'.", "She fell out with her brother".split(), ["down", "falling", "falls"]),
            ("MC", "Какой фразовый глагол заменяет слово 'compensate'?", ["make up for", "make out", "make off"], 0),
            ("FB", "He got ___ with stealing the car (избежал наказания).", "away"),
            ("DD", "Переведите: 'Я с нетерпением жду нашей встречи'.", "I look forward to our meeting".split(), ["at", "looking", "for"]),
            ("FB", "Please don't bring ___ that topic again (поднимать тему).", "up")
        ]
    },
    {
        "title": "Discourse Markers (C1-C2)",
        "module": 21,
        "theory": [
            "Discourse markers (маркеры дискурса) организуют, структурируют и направляют нашу речь. Они критически важны для связности (coherence) и беглости.",
            "Для противопоставления: nevertheless (тем не менее), on the other hand, however, conversely, whereas.",
            "Для добавления информации: furthermore, moreover, in addition.",
            "Для подведения итогов: ultimately, overall, by and large, taking everything into consideration.",
            "В разговорной речи маркеры смягчают высказывания или меняют тему: 'By the way' (кстати), 'As a matter of fact' (на самом деле), 'To be honest', 'Well'. Уверенное использование этих слов отличает носителя языка от ученика."
        ],
        "questions": [
            ("FB", "It was raining. ___, we went for a walk (Тем не менее).", "Nevertheless"),
            ("MC", "Какое слово используется для добавления информации?", ["Furthermore", "However", "Therefore"], 0),
            ("DD", "Составьте фразу: 'На самом деле, я не согласен'.", "As a matter of fact I disagree".split(), ["factly", "in", "don't"]),
            ("MC", "Что означает 'By and large'?", ["В общем и целом", "Большой и широкий", "Внезапно"], 0),
            ("FB", "___, I think we did a great job (В целом - Overall).", "Overall"),
            ("DD", "Переведите: 'Кстати, где он?'", "By the way where is he".split(), ["On", "wayly", "was"]),
            ("FB", "He is very smart. ___, he is very lazy (Однако).", "However")
        ]
    }
]

with open("generate_detailed_course.py", "r", encoding="utf-8") as f:
    content = f.read()

# Insert the code just before final_lessons = []
insertion = "raw_lessons.extend(advanced_lessons)\n\n"
new_content = content.replace("final_lessons = []", "advanced_lessons = " + repr(advanced_lessons) + "\n\n" + insertion + "final_lessons = []")

with open("generate_detailed_course.py", "w", encoding="utf-8") as f:
    f.write(new_content)

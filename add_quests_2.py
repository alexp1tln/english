with open('generate_detailed_course.py', 'r') as f:
    content = f.read()

new_lessons = """
extra_lessons_2 = [
    {
        "title": "Quantifiers: Much, Many, A lot of, (A) few, (A) little",
        "module": 26,
        "theory": [
            "Quantifiers (квантификаторы) показывают количество. Их выбор зависит от того, исчисляемое существительное или нет.",
            "Для ИСЧИСЛЯЕМЫХ (можно посчитать: apples, cars): MANY (много), FEW (мало), A FEW (немного, но достаточно).",
            "Для НЕИСЧИСЛЯЕМЫХ (вода, время, деньги): MUCH (много), LITTLE (мало), A LITTLE (немного, но достаточно).",
            "A LOT OF (много) — универсально, подходит для всех, особенно в утверждениях.",
            "Разница между 'few' и 'a few': 'few' — мало (негативный оттенок, не хватает), 'a few' — несколько (позитивный, хватает). То же самое с 'little' и 'a little'."
        ],
        "questions": [
            ("FB", "I have ___ (немного) time, we can talk.", "a little"),
            ("MC", "Какое слово нужно для 'apples' (яблоки)?", ["many / few", "much / little", "much / few"], 0),
            ("DD", "Составьте фразу: 'У него мало друзей'.", ["He", "has", "few", "friends"], ["a", "little", "much"]),
            ("MC", "Что означает 'I have little money'?", ["У меня мало денег (мне не хватает)", "У меня немного денег (но мне хватит)", "У меня много денег"], 0),
            ("FB", "There isn't ___ (много) water in the bottle.", "much")
        ]
    },
    {
        "title": "Some, Any, No и их производные",
        "module": 26,
        "theory": [
            "SOME (несколько, немного) используется в утвердительных предложениях: 'I have some apples'. И в вежливых просьбах/предложениях: 'Would you like some tea?'",
            "ANY (любой, какие-либо) используется в вопросах и отрицаниях: 'Do you have any brothers?', 'I don't have any ideas'.",
            "NO (никакой) используется для отрицания вместо 'not any': 'I have no time' = 'I don't have any time'.",
            "Производные: something / anything / nothing (что-то / что угодно / ничего), somebody / anybody / nobody (для людей), somewhere / anywhere / nowhere (для мест).",
            "В английском языке может быть только ОДНО отрицание! 'I know nothing' (ПРАВИЛЬНО), 'I don't know nothing' (ОШИБКА)."
        ],
        "questions": [
            ("FB", "Do you have ___ questions?", "any"),
            ("MC", "Когда мы используем SOME в вопросах?", ["Когда это вежливая просьба или предложение", "Никогда", "Только с неисчисляемыми существительными"], 0),
            ("DD", "Составьте фразу: 'Я никого не знаю здесь'.", ["I", "know", "nobody", "here"], ["don't", "anybody", "somebody"]),
            ("MC", "Какое предложение грамматически верное?", ["I didn't see anything.", "I didn't see nothing.", "I saw anything."], 0),
            ("FB", "Would you like ___ (немного) coffee?", "some")
        ]
    },
    {
        "title": "Возвратные местоимения (Reflexive Pronouns)",
        "module": 26,
        "theory": [
            "Возвратные местоимения показывают, что действие направлено на самого себя: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.",
            "Пример: 'I cut myself' (Я порезался). 'She looked at herself in the mirror' (Она посмотрела на себя в зеркало).",
            "Они также используются для подчеркивания (что кто-то сделал что-то САМ): 'I baked this cake myself' (Я сам испек этот торт).",
            "Внимание: мы НЕ используем возвратные местоимения после глаголов feel, relax, concentrate, wash, dress, shave. 'I feel good' (не 'I feel myself good').",
            "Фраза 'by myself' означает 'в одиночестве' или 'без чьей-либо помощи'."
        ],
        "questions": [
            ("FB", "He hurt ___ while playing football.", "himself"),
            ("MC", "Как правильно сказать 'Я чувствую себя хорошо'?", ["I feel good", "I feel myself good", "I feel me good"], 0),
            ("DD", "Составьте фразу: 'Она сделала это сама'.", ["She", "did", "it", "herself"], ["himself", "by"]),
            ("MC", "Что значит 'I live by myself'?", ["Я живу один", "Я живу для себя", "Я живу у себя"], 0),
            ("FB", "We enjoyed ___ at the party.", "ourselves")
        ]
    },
    {
        "title": "Предлоги времени и места (In, On, At)",
        "module": 27,
        "theory": [
            "ВРЕМЯ: IN - для больших периодов (годы, месяцы, сезоны - in 2023, in May, in summer), а также части дня (in the morning).",
            "ON - для конкретных дней и дат (on Monday, on my birthday, on the 5th of June).",
            "AT - для точного времени по часам (at 5 PM, at noon) и в выражениях (at night, at the weekend).",
            "МЕСТО: IN - внутри чего-то, в городах/странах (in the box, in London, in a car).",
            "ON - на поверхности (on the table, on the wall) и транспорт, где можно стоять (on a bus, on a train).",
            "AT - в конкретной точке, на мероприятии, у цели (at the bus stop, at the door, at a concert, at work/school/home)."
        ],
        "questions": [
            ("FB", "I will meet you ___ Monday.", "on"),
            ("MC", "Какой предлог нужен для '5 o'clock' (5 часов)?", ["at", "in", "on"], 0),
            ("DD", "Составьте фразу: 'Он сейчас на работе'.", ["He", "is", "at", "work", "now"], ["in", "on"]),
            ("MC", "Как сказать 'в автобусе'?", ["on a bus", "in a bus", "at a bus"], 0),
            ("FB", "My birthday is ___ October.", "in")
        ]
    },
    {
        "title": "Порядок прилагательных (Order of Adjectives)",
        "module": 27,
        "theory": [
            "Если перед существительным стоит несколько прилагательных, они должны идти в определенном порядке. Правило OSASCOMP:",
            "1. Opinion (мнение): beautiful, ugly, smart.",
            "2. Size (размер): big, small, tall.",
            "3. Age (возраст): old, new, young.",
            "4. Shape (форма): round, square.",
            "5. Color (цвет): red, black.",
            "6. Origin (происхождение): Italian, American.",
            "7. Material (материал): wooden, metal.",
            "8. Purpose (назначение): sleeping (bag), racing (car).",
            "Пример: 'A beautiful (мнение) small (размер) old (возраст) brown (цвет) Italian (происхождение) wooden (материал) box'."
        ],
        "questions": [
            ("FB", "A beautiful big red car. (Мнение - размер - цвет). Напишите 'red'.", "red"),
            ("MC", "Какой вариант правильный?", ["A nice new wooden table", "A wooden nice new table", "A new nice wooden table"], 0),
            ("DD", "Составьте фразу: 'Маленький черный кот'.", ["A", "small", "black", "cat"], ["black", "small"]),
            ("MC", "Где должно стоять прилагательное происхождения (Italian, French)?", ["Ближе к концу, перед материалом", "В самом начале", "После существительного"], 0),
            ("FB", "An ugly old brown coat. Напишите 'old' (возраст).", "old")
        ]
    },
    {
        "title": "Too и Enough",
        "module": 27,
        "theory": [
            "TOO (слишком) ставится ПЕРЕД прилагательными или наречиями. 'It is too hot' (Слишком жарко).",
            "ENOUGH (достаточно) ставится ПОСЛЕ прилагательных или наречий: 'He is strong enough' (Он достаточно сильный).",
            "НО! Если enough используется с существительным, оно ставится ПЕРЕД ним: 'We have enough money' (У нас достаточно денег).",
            "Часто используются с инфинитивом (to do): 'He is too young to drive' (Он слишком молод, чтобы водить).",
            "'The water is warm enough to swim' (Вода достаточно теплая, чтобы плавать)."
        ],
        "questions": [
            ("FB", "This box is ___ (слишком) heavy.", "too"),
            ("MC", "Где ставится 'enough' по отношению к прилагательному?", ["После него", "Перед ним", "Не имеет значения"], 0),
            ("DD", "Составьте фразу: 'У нас нет достаточного количества времени'.", ["We", "don't", "have", "enough", "time"], ["time", "enough", "too"]),
            ("MC", "Какая фраза правильная?", ["He is not tall enough.", "He is not enough tall.", "He is too not tall."], 0),
            ("FB", "She is smart ___ to solve this problem.", "enough")
        ]
    },
    {
        "title": "Сложное дополнение (Complex Object)",
        "module": 28,
        "theory": [
            "Complex Object (Сложное дополнение) используется, когда мы хотим, чтобы кто-то другой что-то сделал.",
            "Формула: Подлежащее + глагол (want/expect/would like) + объект (him/her/me) + to V1.",
            "Пример: 'I want YOU TO HELP me' (Я хочу, чтобы ТЫ ПОМОГ мне. Буквально: 'Я хочу тебя помочь мне').",
            "'She expected HIM TO CALL' (Она ожидала, что он позвонит).",
            "ИСКЛЮЧЕНИЯ: после глаголов MAKE (заставлять) и LET (разрешать) частица 'to' НЕ ставится!",
            "Пример: 'He made me cry' (Он заставил меня плакать). 'Let him go' (Позволь ему уйти)."
        ],
        "questions": [
            ("FB", "I want him ___ (help) me.", "to help"),
            ("MC", "Как правильно сказать: 'Я хочу, чтобы она ушла'?", ["I want her to leave", "I want that she leaves", "I want she to leave"], 0),
            ("DD", "Составьте фразу: 'Мой босс заставил меня работать допоздна'.", ["My", "boss", "made", "me", "work", "late"], ["to", "working", "makes"]),
            ("MC", "Нужна ли частица 'to' после глагола 'let'?", ["Нет", "Да", "Иногда"], 0),
            ("FB", "Let me ___ (pay) for the dinner.", "pay")
        ]
    },
    {
        "title": "Причастные обороты (Participle Clauses)",
        "module": 28,
        "theory": [
            "Причастные обороты позволяют объединить два предложения, делая речь более беглой и красивой.",
            "Причастие I (с окончанием -ing, 'делающий') показывает активное действие. 'Walking down the street, I saw a friend' (Гуляя по улице, я увидел друга).",
            "Оно часто заменяет фразы с when, while или because. 'Knowing the truth, she said nothing' = 'Because she knew the truth...'",
            "Причастие II (3-я форма глагола, 'сделанный') показывает пассивное действие. 'Written in 1920, the book is still popular' (Написанная в 1920 году...).",
            "Оба действия в главном предложении и в причастном обороте должны относиться к одному и тому же подлежащему!"
        ],
        "questions": [
            ("FB", "___ (read) the book, I went to sleep. (Прочитав)", "Reading"),
            ("MC", "Какое причастие выбрать для пассивного значения ('Основанный в...)?", ["Founded", "Founding", "Found"], 0),
            ("DD", "Составьте фразу: 'Почувствовав усталость, он пошел домой'.", ["Feeling", "tired", "he", "went", "home"], ["Felt", "was"]),
            ("MC", "Что заменяет фраза 'Not having a car, I take the bus'?", ["Because I don't have a car", "When I don't have a car", "If I don't have a car"], 0),
            ("FB", "___ (build) of wood, the house was very warm. (Построенный)", "Built")
        ]
    }
]

raw_lessons.extend(extra_lessons_2)
"""

content = content.replace("raw_lessons.extend(extra_lessons)", "raw_lessons.extend(extra_lessons)\n" + new_lessons)
with open('generate_detailed_course.py', 'w') as f:
    f.write(content)

import json

raw_topics = [
    # Mod 1: Basics
    ("1", "Местоимения (Subject)", "Личные местоимения заменяют существительные в роли подлежащего.\nI - я, You - ты/вы, He - он, She - она, It - оно (для животных/предметов), We - мы, They - они.", "I,You,He", "I am a student", "___ is a doctor (он).", "He", "Какое местоимение означает 'мы'?", "We,They,You", 0),
    ("1", "Глагол To Be (Утверждение)", "Самый важный глагол: 'быть, являться'.\nФормы: I am, He/She/It is, We/You/They are.\nВ английском он обязателен: 'I am a doctor'.", "Be,Doctor,Student", "He is my friend", "I ___ happy.", "am", "Форма to be для 'They'?", "are,is,am", 0),
    ("1", "To Be (Отрицание и Вопрос)", "Отрицание: I am not (I'm not), He is not (isn't), We are not (aren't).\nВопрос: Am I? Is he? Are we?", "Not,Happy,Sad", "Are you a student", "She ___ not here.", "is", "Как сокращается are not?", "aren't,isn't,am't", 0),
    ("1", "Указательные местоимения", "This - этот (рядом, ед.ч.), That - тот (далеко, ед.ч.).\nThese - эти (рядом, мн.ч.), Those - те (далеко, мн.ч.).", "This,That,These", "This is my book", "___ are my friends (эти).", "These", "Что используется для мн.ч. вдалеке?", "Those,That,These", 0),
    ("1", "Притяжательные прилагательные", "Показывают принадлежность: my (мой), your (твой), his (его), her (её), its (его/её для неодуш.), our (наш), their (их).", "My,Your,His", "This is my house", "Where is ___ car (его)?", "his", "Перевод 'our':", "наш,ваш,их", 0),
    ("1", "There is / There are", "Указывают на наличие предмета где-то.\nThere is - ед.ч., There are - мн.ч.\nThere is a cat on the table.", "There,Table,Cat", "There is a book", "There ___ two cats.", "are", "Форма для единственного числа?", "There is,There are,There am", 0),
    ("1", "Предлоги места", "In (в), on (на), under (под), next to (рядом с), behind (позади), in front of (перед).", "In,On,Under", "The cat is under the table", "The book is ___ the desk (на).", "on", "Как переводится 'behind'?", "позади,перед,под", 0),
    ("1", "Have got / Has got", "Означает 'иметь, обладать'.\nI/We/They have got. He/She/It has got.", "Have,Got,Dog", "I have got a dog", "He ___ got a car.", "has", "Какая форма для 'She'?", "has got,have got,has get", 0),
    ("1", "Множественное число (Основы)", "К большинству существительных добавляем -s: cat -> cats.\nЕсли слово заканчивается на шипящую (s, ch, sh, x) — добавляем -es: bus -> buses.", "Cat,Bus,Dog", "I have two cats", "Three ___ (автобуса).", "buses", "Множественное число от 'book':", "books,bookes,book", 0),
    ("1", "Множественное число (Исключения)", "Некоторые слова меняют форму: man -> men, woman -> women, child -> children, tooth -> teeth, mouse -> mice.", "Man,Child,Mouse", "The children are here", "Two ___ (мужчины).", "men", "Множественное число от 'child':", "children,childs,childrens", 0),
    
    # Mod 2: Present Simple
    ("2", "Present Simple (Утверждение)", "Регулярные действия. Для he/she/it к глаголу добавляется -s/-es (I work, He works).", "Work,Live,Play", "He lives in London", "I ___ every day (play).", "play", "Правильное окончание для 'She':", "works,work,workes", 0),
    ("2", "Present Simple (Отрицание)", "Используем вспомогательные глаголы: do not (don't) и does not (doesn't) для he/she/it.", "Like,Do,Does", "I do not like this", "He ___ not work here.", "does", "Как сокращается does not?", "doesn't,don't,doen't", 0),
    ("2", "Present Simple (Вопросы)", "Вспомогательный глагол Do/Does ставится перед подлежащим: Do you play? Does he read?", "Read,Play,Speak", "Do you speak English", "___ she know him?", "Does", "Какой вспомогательный глагол для 'I'?", "Do,Does,Are", 0),
    ("2", "Наречия частотности", "Always (всегда), usually (обычно), often (часто), sometimes (иногда), never (никогда). Ставятся ПЕРЕД основным глаголом.", "Always,Never,Often", "I always wake up early", "He ___ late (никогда).", "is never", "Куда ставится usually?", "перед глаголом,в конце,в начале", 0),
    ("2", "Вопросительные слова", "Who (кто), What (что), Where (где), When (когда), Why (почему), How (как).", "Who,What,Where", "Where do you live", "___ is your name?", "What", "Как переводится 'Why'?", "почему,где,когда", 0),
    ("2", "Модальный глагол Can", "Означает физическую способность или умение (могу, умею).\nI can swim. Вопрос: Can you help?", "Can,Swim,Help", "I can swim very well", "___ you help me?", "Can", "Отрицание от can:", "cannot / can't,can don't,don't can", 0),
    ("2", "Like / Love / Hate + V-ing", "После глаголов предпочтения мы обычно ставим следующий глагол с окончанием -ing: I like reading.", "Like,Love,Hate", "I love reading books", "She likes ___ (swim).", "swimming", "Что идет после 'enjoy'?", "V-ing,to V,V", 0),
    ("2", "Объектные местоимения", "Заменяют дополнение: me (мне), you, him (ему), her (ей), it, us (нам), them (им).", "Me,Him,Us", "Give it to me", "I see ___ (его).", "him", "Местоимение для 'их':", "them,they,their", 0),
    ("2", "Предлоги времени", "At (часы: at 5 o'clock), On (дни: on Monday), In (месяцы, годы: in 2020, in May).", "Time,Day,Year", "I wake up at seven", "My birthday is ___ May.", "in", "Какой предлог с днями недели?", "on,in,at", 0),
    ("2", "Повелительное наклонение", "Используется для команд или просьб. Отрицание через Don't.\nOpen the door! Don't touch it!", "Open,Close,Touch", "Do not touch this", "___ the window (открой).", "Open", "Как сказать 'Не делай этого'?", "Don't do it,No do it,Not do it", 0),
    
    # Mod 3: Nouns, Articles, Adjectives
    ("3", "Неопределенный артикль (a/an)", "Ставится перед исчисляемыми существительными в ед.ч., если предмет упоминается впервые.\na - перед согласными (a car), an - перед гласными (an apple).", "Car,Apple,Book", "I have an apple", "This is ___ book.", "a", "Когда используется 'an'?", "перед гласным звуком,всегда,перед согласным", 0),
    ("3", "Определенный артикль (The)", "Указывает на конкретный предмет, известный собеседникам, или на уникальный (the sun).", "Sun,Moon,Earth", "The sun is hot", "Look at ___ moon.", "the", "Нужен ли артикль перед именами людей?", "нет,да,иногда", 0),
    ("3", "Нулевой артикль", "Артикль не ставится перед именами, названиями городов/стран, неисчисляемыми существительными в общем смысле.", "Water,Love,Life", "I love music", "I live in ___ London.", "", "Нужен ли артикль со словом 'Water' в общем смысле?", "нет,да (the),да (a)", 0),
    ("3", "Исчисляемые и неисчисляемые", "Исчисляемые можно посчитать (apples). Неисчисляемые - нельзя (water, money, information).", "Water,Money,Information", "I drink a lot of water", "Can you give me some ___ (деньги)?", "money", "Слово 'news' (новости):", "неисчисляемое,исчисляемое,множественное", 0),
    ("3", "Some и Any", "Some - 'несколько, немного' в утверждениях. Any - в вопросах и отрицаниях.", "Some,Any,Milk", "I have some money", "Do you have ___ questions?", "any", "Что используем в утверждении?", "some,any,no", 0),
    ("3", "Much, Many, A lot of", "Much - для неисчисляемых. Many - для исчисляемых. A lot of - универсально для утверждений.", "Much,Many,Lot", "I have a lot of friends", "How ___ time do we have?", "much", "Что использовать с 'apples'?", "many,much,little", 0),
    ("3", "A few / A little", "A few - немного (исчисляемые, достаточно). A little - немного (неисчисляемые, достаточно).", "Few,Little,Time", "I have a few friends", "I need ___ time.", "a little", "Для исчисляемых используем:", "a few,a little,much", 0),
    ("3", "Сравнительная степень", "Для коротких прилагательных добавляем -er (taller). Для длинных - more (more beautiful).", "Tall,Short,Beautiful", "He is taller than me", "This car is ___ (быстрее).", "faster", "Сравнительная от 'expensive':", "more expensive,expensiver,most expensive", 0),
    ("3", "Превосходная степень", "Самый-самый. Добавляем -est (the tallest) или most (the most beautiful). Всегда с артиклем the.", "Fast,Slow,Good", "He is the fastest runner", "This is the ___ (лучший) day.", "best", "Превосходная форма от 'good':", "the best,the goodest,the better", 0),
    ("3", "Прилагательные Исключения", "Good -> better -> the best. Bad -> worse -> the worst. Far -> further -> the furthest.", "Good,Bad,Far", "This is the worst movie", "My results are ___ (хуже) than yours.", "worse", "Как будет 'лучший'?", "the best,the better,the goodest", 0),
]

progression = [
    ("4", "Past Simple: Глагол To Be"), ("4", "Past Simple: Правильные глаголы"), ("4", "Past Simple: Неправильные глаголы 1"),
    ("4", "Past Simple: Неправильные глаголы 2"), ("4", "Past Simple: Отрицание (didn't)"), ("4", "Past Simple: Вопросы (Did)"),
    ("4", "Past Simple: Слова-маркеры (yesterday, ago)"), ("4", "Конструкция Used to"), ("4", "Past Simple: Практика текстов"), ("4", "Обзор прошедшего времени"),
    
    ("5", "Future Simple (Will)"), ("5", "Конструкция Be going to"), ("5", "Will vs Be going to"), ("5", "Present Continuous для будущего"),
    ("5", "Модальные глаголы: Must / Have to"), ("5", "Модальные глаголы: Should / Ought to"), ("5", "Модальные глаголы: May / Might"),
    ("5", "Модальные глаголы в прошедшем (must have)"), ("5", "Придаточные времени (When, As soon as)"), ("5", "Обзор будущего времени"),
    
    ("6", "Present Continuous (Повторение)"), ("6", "Past Continuous: Утверждение"), ("6", "Past Continuous: Вопросы и Отрицания"),
    ("6", "Past Simple vs Past Continuous"), ("6", "Future Continuous"), ("6", "State verbs (Глаголы состояния)"),
    ("6", "Конструкции с While / When"), ("6", "Сложное дополнение (Complex Object)"), ("6", "Усилительные местоимения (myself)"), ("6", "Обзор длительных времен"),
    
    ("7", "Present Perfect: Основы"), ("7", "Present Perfect: Правильные и неправильные V3"), ("7", "Present Perfect: Вопросы и Отрицания"),
    ("7", "Маркеры: Just, Already, Yet"), ("7", "Маркеры: Ever, Never"), ("7", "Present Perfect: For / Since"),
    ("7", "Present Perfect vs Past Simple 1"), ("7", "Present Perfect vs Past Simple 2"), ("7", "Been vs Gone"), ("7", "Обзор Present Perfect"),
    
    ("8", "Present Perfect Continuous: Основы"), ("8", "Present Perfect vs Present Perfect Continuous"), ("8", "Past Perfect: Предпрошедшее"),
    ("8", "Past Perfect vs Past Simple"), ("8", "Past Perfect Continuous"), ("8", "Future Perfect"),
    ("8", "Future Perfect Continuous"), ("8", "Сравнение Perfect Tenses"), ("8", "Сложные предлоги (despite, instead of)"), ("8", "Обзор всех времен"),
    
    ("9", "Zero Conditional"), ("9", "First Conditional"), ("9", "Second Conditional"), ("9", "Third Conditional"),
    ("9", "Mixed Conditionals"), ("9", "I wish / If only (Настоящее)"), ("9", "I wish / If only (Прошлое)"),
    ("9", "Passive Voice (Present Simple)"), ("9", "Passive Voice (Past Simple)"), ("9", "Passive Voice (Continuous & Perfect)"),
    
    ("10", "Reported Speech: Утверждения"), ("10", "Reported Speech: Вопросы"), ("10", "Reported Speech: Команды (told to)"),
    ("10", "Герундий (Gerund): Основы"), ("10", "Инфинитив (Infinitive): Основы"), ("10", "Gerund vs Infinitive"),
    ("10", "Relative Clauses (who, which, that)"), ("10", "Non-defining Relative Clauses"), ("10", "Causative (Have something done)"), ("10", "Финальный тест и Инверсия")
]

for mod, title in progression:
    theory = f"Это тема '{title}'.\nВ этом уроке мы детально разберем правила и нюансы использования.\nТренируйте грамматику и словарный запас с помощью различных механик."
    raw_topics.append((mod, title, theory, "Word,Learn,Rule", "I understand this grammar rule", "Please ___ this task.", "finish", f"Какая главная мысль урока '{title}'?", "Изучение грамматики,Повторение,Пропуск темы", 0))

lessons_ts = []
vocabulary = []
word_id_counter = 1

for idx, t in enumerate(raw_topics):
    lesson_id = idx + 1
    mod, title, theory_raw, words_raw, drag, fill_q, fill_a, mc_q, mc_opts, mc_ans = t
    
    theory_paragraphs = theory_raw.split("\n")
    
    lesson_words = []
    for w in words_raw.split(","):
        v_id = f"v{word_id_counter}"
        word_id_counter += 1
        lesson_words.append({
            "id": v_id,
            "word": w.strip(),
            "transcription": f"[{w.strip().lower()}]",
            "translation": "Слово",
            "category": "Course"
        })
        vocabulary.append(lesson_words[-1])
        
    opts_arr = mc_opts.split(",")
    quiz = [
        {
            "id": f"q{lesson_id}_1",
            "type": "multiple_choice",
            "question": mc_q,
            "options": opts_arr,
            "correctAnswerIndex": mc_ans
        },
        {
            "id": f"q{lesson_id}_2",
            "type": "drag_and_drop",
            "question": "Составьте предложение:",
            "options": drag.split(" "),
            "correctSentence": drag.split(" ")
        },
        {
            "id": f"q{lesson_id}_3",
            "type": "fill_in_blank",
            "question": fill_q,
            "correctAnswer": fill_a
        },
        {
            "id": f"q{lesson_id}_4",
            "type": "multiple_choice",
            "question": "Выберите правильный вариант утверждения:",
            "options": ["Правильно", "С ошибкой", "Совсем неверно"],
            "correctAnswerIndex": 0
        },
        {
            "id": f"q{lesson_id}_5",
            "type": "drag_and_drop",
            "question": "Постройте структуру правильно:",
            "options": ["This", "is", "correct", "structure"],
            "correctSentence": ["This", "is", "correct", "structure"]
        }
    ]
    
    lesson_obj = {
        "id": f"l{lesson_id}",
        "title": f"Урок {lesson_id}: {title}",
        "moduleId": int(mod),
        "theory": theory_paragraphs,
        "words": lesson_words,
        "quiz": quiz
    }
    lessons_ts.append(lesson_obj)

unique_vocab = []
seen = set()
for v in vocabulary:
    if v['word'] not in seen:
        seen.add(v['word'])
        unique_vocab.append(v)

with open('src/courseData.ts', 'w', encoding='utf-8') as f:
    f.write("import { Lesson, Word } from './types';\n\n")
    f.write("export const vocabulary: Word[] = " + json.dumps(unique_vocab, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("export const lessons: Lesson[] = " + json.dumps(lessons_ts, ensure_ascii=False, indent=2) + ";\n")

print("Done")

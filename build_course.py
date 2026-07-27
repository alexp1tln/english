import json
import random

theory_templates = {
    "pronouns": [
        "Местоимения — это наши главные помощники. Они заменяют существительные, чтобы речь не звучала как заезженная пластинка. Без них нам пришлось бы повторять одни и те же слова снова и снова.",
        "В английском языке порядок слов строгий, и правильное использование местоимений помогает строить четкие предложения. Подлежащее всегда стоит на первом месте.",
        "Запомни: 'I' (Я) всегда пишется с большой буквы. 'It' используем для животных и неодушевленных предметов, а 'You' — это и 'ты', и 'вы', и вежливое 'Вы'!"
    ],
    "to_be": [
        "Глагол To Be переводится как 'быть, являться, находиться'. В отличие от русского языка, в английском мы не можем просто сказать 'Я студент'. Нужно говорить 'Я ЕСТЬ студент'.",
        "Это самый важный глагол английского языка! Он служит фундаментом для построения множества времен и конструкций.",
        "Не забывай про формы: am (для I), is (для He/She/It), are (для You/We/They). В вопросах этот глагол всегда выпрыгивает на первое место перед подлежащим!"
    ],
    "nouns": [
        "Существительные и артикли — это основа предметного мира в английском. Исчисляемые предметы можно посчитать, а неисчисляемые (как вода или время) — нет.",
        "Артикли a/an и the помогают понять, говорим ли мы о любом предмете или о конкретном. Это как маленькие ярлыки-указатели.",
        "При образовании множественного числа будь осторожен с исключениями. Не все слова подчиняются правилу добавления '-s'!"
    ],
    "present_simple": [
        "Present Simple — это наше 'обычное' настоящее. Мы используем его для привычек, рутины и общеизвестных фактов. Это то, что происходит every day.",
        "Самое главное правило здесь — не забывать про окончание '-s' или '-es', когда речь идет о He, She или It.",
        "А для отрицаний и вопросов мы зовем на помощь глаголы 'do' и 'does'. И помни, что 'does' жадный — он забирает окончание '-s' у основного глагола!"
    ],
    "past_simple": [
        "Past Simple отправляет нас в прошлое. Если действие завершилось (вчера, год назад, в 2010 году), мы смело используем это время.",
        "Для правильных глаголов мы просто добавляем окончание '-ed'. Но английский язык коварен, поэтому таблицу неправильных глаголов придется выучить наизусть!",
        "В вопросах и отрицаниях нам помогает глагол 'did'. Как только появляется 'did', основной глагол возвращается в свою начальную форму."
    ],
    "future": [
        "Будущее время в английском можно выразить по-разному. Will — для спонтанных решений и обещаний. Be going to — для четких планов.",
        "Англичане любят конкретику. Если у тебя уже куплены билеты и забронирован отель, смело используй Present Continuous!",
        "Никогда не используй 'will' после слов if или when в придаточных предложениях времени и условия. Это золотое правило."
    ],
    "modals": [
        "Модальные глаголы — это особые слова. Они выражают не само действие, а отношение к нему: могу, должен, следует.",
        "После модальных глаголов (can, must, should, may) мы никогда не ставим частицу 'to'. Глагол идет в чистом виде.",
        "Также для них не нужны помощники do/does в вопросах. Они достаточно сильны, чтобы сами встать на первое место!"
    ],
    "perfect": [
        "Perfect — это времена-результаты. Present Perfect связывает прошлое с настоящим. Действие было в прошлом, но результат важен прямо сейчас.",
        "Мы используем помощники have/has и третью форму глагола (V3 или окончание -ed).",
        "Обращай внимание на маркеры: just (только что), already (уже), yet (еще), ever (когда-либо). Они подскажут, что нужен именно Perfect."
    ],
    "adjectives": [
        "Прилагательные украшают нашу речь. Чтобы сравнивать предметы, мы используем степени сравнения: сравнительную и превосходную.",
        "Короткие слова получают окончания -er и -est, а длинные требуют слов more и the most. Это нужно, чтобы язык не ломался при произношении.",
        "Не забывай про артикль 'the' перед превосходной степенью и про слова-исключения, такие как good (better - the best)."
    ],
    "conditionals": [
        "Условные предложения (Conditionals) — это конструкции с 'If' (если). Они бывают реальными и нереальными.",
        "В нереальных условиях мы сдвигаем время на шаг назад. Вместо настоящего используем прошедшее, чтобы показать гипотетичность.",
        "Главное правило: в части с 'If' (условии) мы не используем будущее время 'will'. Всегда заменяем его на настоящее."
    ],
    "passive": [
        "Пассивный залог (Passive Voice) переносит фокус с того, КТО сделал действие, на то, НАД КЕМ оно совершено.",
        "Формула пассива проста: глагол To Be в нужном времени + третья форма основного глагола (V3).",
        "Используй пассив, когда деятель неизвестен, не важен, или когда результат важнее самого процесса."
    ],
    "advanced": [
        "Продвинутая грамматика открывает двери к свободной и красивой английской речи.",
        "Здесь важны нюансы: разница между герундием и инфинитивом, правильное построение косвенной речи и сложные придаточные.",
        "Вникай в примеры, анализируй структуру, и скоро ты будешь звучать как носитель языка!"
    ],
    "general": [
        "Английская грамматика логична, как математика. Стоит один раз понять структуру, и ты сможешь строить любые фразы.",
        "Важнейший принцип — прямой порядок слов в утверждениях и обратный в вопросах.",
        "Внимательно изучай контекст и обращай внимание на слова-маркеры времени."
    ]
}

pools = {
    "pronouns": [
        ("FB", "___ is a doctor (Он).", "He"),
        ("MC", "Какое местоимение заменяет 'my friends'?", ["They", "We", "It"], 0),
        ("DD", "Соберите фразу:", "She is my best friend".split()),
        ("FB", "Переведите 'Мы':", "We"),
        ("MC", "Замените 'The book':", ["It", "He", "She"], 0),
        ("DD", "Порядок слов:", "They are learning English".split()),
        ("FB", "___ am a student.", "I"),
        ("MC", "Какое местоимение использовать для себя?", ["I", "Me", "My"], 0),
        ("DD", "Соберите:", "You are very smart".split()),
        ("FB", "___ (Она) works here.", "She"),
        ("MC", "Замените 'The cat':", ["It", "He", "They"], 0),
        ("DD", "Постройте предложение:", "We love our family".split()),
    ],
    "to_be": [
        ("FB", "I ___ happy.", "am"),
        ("MC", "The cat ___ sleeping.", ["is", "are", "am"], 0),
        ("DD", "Составьте вопрос:", "Are you at home ?".split()),
        ("FB", "We ___ not late.", "are"),
        ("MC", "___ he a good doctor?", ["Is", "Are", "Am"], 0),
        ("DD", "Отрицание:", "She is not my sister".split()),
        ("FB", "It ___ a beautiful day.", "is"),
        ("MC", "You ___ my best friend.", ["are", "is", "am"], 0),
        ("DD", "Вопрос:", "Is this your bag ?".split()),
        ("FB", "They ___ ready.", "are"),
        ("MC", "I ___ not sure.", ["am", "is", "are"], 0),
        ("DD", "Утверждение:", "He is a great teacher".split()),
    ],
    "present_simple": [
        ("FB", "She ___ (go) to school.", "goes"),
        ("MC", "They ___ (not/play) tennis.", ["don't play", "doesn't play", "not play"], 0),
        ("DD", "Вопрос:", "Do you like green tea ?".split()),
        ("FB", "He ___ (watch) TV every evening.", "watches"),
        ("MC", "___ he know the answer?", ["Does", "Do", "Is"], 0),
        ("DD", "Утверждение:", "I usually drink coffee".split()),
        ("FB", "We ___ (live) in London.", "live"),
        ("MC", "She ___ hard every day.", ["works", "work", "working"], 0),
        ("DD", "Отрицание:", "I do not want this".split()),
        ("FB", "It ___ (rain) a lot here.", "rains"),
        ("MC", "What time ___ you wake up?", ["do", "does", "are"], 0),
        ("DD", "Вопрос:", "Does she speak English ?".split()),
    ],
    "past_simple": [
        ("FB", "I ___ (go) to the park yesterday.", "went"),
        ("MC", "She ___ (not/see) him.", ["didn't see", "doesn't see", "not saw"], 0),
        ("DD", "Составьте вопрос:", "Did you watch the movie ?".split()),
        ("FB", "He ___ (be) at home.", "was"),
        ("MC", "They ___ (be) very happy.", ["were", "was", "are"], 0),
        ("DD", "Утверждение:", "We played football last week".split()),
        ("FB", "I ___ (buy) a new car.", "bought"),
        ("MC", "What ___ you do yesterday?", ["did", "do", "were"], 0),
        ("DD", "Отрицание:", "She did not call me".split()),
        ("FB", "He ___ (eat) an apple.", "ate"),
        ("MC", "I ___ born in 1990.", ["was", "were", "did"], 0),
        ("DD", "Утверждение:", "They visited us last month".split()),
    ],
    "future": [
        ("FB", "I ___ help you (обещание).", "will"),
        ("MC", "She ___ going to visit us.", ["is", "are", "will"], 0),
        ("DD", "Составьте:", "I will always love you".split()),
        ("FB", "They ___ (not) come tomorrow.", "won't"),
        ("MC", "___ you open the door?", ["Will", "Do", "Are"], 0),
        ("DD", "Вопрос:", "Are you going to do it ?".split()),
        ("FB", "It ___ rain soon.", "will"),
        ("MC", "I ___ going to sleep.", ["am", "is", "will"], 0),
        ("DD", "Утверждение:", "We will see you soon".split()),
        ("FB", "What ___ you do?", "will"),
        ("MC", "They ___ be here in a minute.", ["will", "are", "do"], 0),
        ("DD", "Отрицание:", "I am not going to wait".split()),
    ],
    "modals": [
        ("FB", "I ___ swim very well (умею).", "can"),
        ("MC", "You ___ smoke here (строгий запрет).", ["mustn't", "don't have to", "can't"], 0),
        ("DD", "Соберите:", "You should see a doctor".split()),
        ("FB", "We ___ go now (мы должны).", "must"),
        ("MC", "___ I help you?", ["May", "Must", "Have to"], 0),
        ("DD", "Отрицание:", "I cannot do this right now".split()),
        ("FB", "You ___ better listen to him.", "had"),
        ("MC", "She ___ speak three languages.", ["can", "should", "must"], 0),
        ("DD", "Вопрос:", "Could you pass the salt ?".split()),
        ("FB", "It ___ rain today (вероятно).", "might"),
        ("MC", "You ___ not worry.", ["need", "must", "can"], 0),
        ("DD", "Соберите:", "We ought to help them".split()),
    ],
    "perfect": [
        ("FB", "I have just ___ (finish) my work.", "finished"),
        ("MC", "___ you ever been to Paris?", ["Have", "Has", "Did"], 0),
        ("DD", "Утверждение:", "She has already left".split()),
        ("FB", "He ___ not seen this movie yet.", "has"),
        ("MC", "We have lived here ___ 10 years.", ["for", "since", "from"], 0),
        ("DD", "Вопрос:", "Have you done your homework ?".split()),
        ("FB", "I have ___ (know) him since 2010.", "known"),
        ("MC", "She has ___ finished her lunch.", ["just", "yet", "ever"], 0),
        ("DD", "Утверждение:", "I have never seen this before".split()),
        ("FB", "They have ___ (go) to Spain.", "gone"),
        ("MC", "Have you finished ___?", ["yet", "already", "just"], 0),
        ("DD", "Отрицание:", "We have not met before".split()),
    ],
    "adjectives": [
        ("FB", "He is ___ (tall) than me.", "taller"),
        ("MC", "This is the ___ book ever.", ["best", "better", "good"], 0),
        ("DD", "Сравнение:", "My car is faster than yours".split()),
        ("FB", "She is the ___ (beautiful) girl.", "most beautiful"),
        ("MC", "Today the weather is ___ than yesterday.", ["worse", "bad", "worst"], 0),
        ("DD", "Превосходная:", "This is the most expensive phone".split()),
        ("FB", "It is ___ (easy) than I thought.", "easier"),
        ("MC", "He works ___.", ["hard", "hardly", "hards"], 0),
        ("DD", "Сравнение:", "This test is more difficult".split()),
        ("FB", "That is the ___ (big) house.", "biggest"),
        ("MC", "She sings very ___.", ["well", "good", "nice"], 0),
        ("DD", "Превосходная:", "He is the smartest student here".split()),
    ],
    "nouns": [
        ("FB", "I have two ___ (apple).", "apples"),
        ("MC", "There are three ___ in the room.", ["men", "mans", "man"], 0),
        ("DD", "Утверждение:", "Children like playing games".split()),
        ("FB", "She bought a lot of ___ (tomato).", "tomatoes"),
        ("MC", "I need some ___.", ["water", "waters", "a water"], 0),
        ("DD", "Соберите:", "These are my new shoes".split()),
        ("FB", "My ___ (tooth) hurt.", "teeth"),
        ("MC", "How ___ money do you have?", ["much", "many", "a lot"], 0),
        ("DD", "Утверждение:", "I have a lot of friends".split()),
        ("FB", "She has long ___ (hair).", "hair"),
        ("MC", "Do you have ___ brothers?", ["any", "some", "no"], 0),
        ("DD", "Соберите:", "There is no milk left".split()),
    ],
    "conditionals": [
        ("FB", "If it rains, I ___ stay home.", "will"),
        ("MC", "If I ___ you, I would study harder.", ["were", "was", "am"], 0),
        ("DD", "Соберите:", "If he calls I will answer".split()),
        ("FB", "If she had known, she would ___ come.", "have"),
        ("MC", "Water boils if you ___ it to 100 degrees.", ["heat", "will heat", "heats"], 0),
        ("DD", "Второе условие:", "I would buy a car if I had money".split()),
        ("FB", "If I ___ (have) time, I will help.", "have"),
        ("MC", "If I had seen him, I ___ told him.", ["would have", "would", "will have"], 0),
        ("DD", "Нулевое условие:", "If ice melts it becomes water".split()),
        ("FB", "I wish I ___ (be) rich.", "were"),
        ("MC", "If only I ___ (know) this yesterday.", ["had known", "knew", "know"], 0),
        ("DD", "Третье условие:", "If we had hurried we would have caught the train".split()),
    ],
    "passive": [
        ("FB", "The book ___ written in 1999.", "was"),
        ("MC", "This house ___ built last year.", ["was", "is", "were"], 0),
        ("DD", "Пассив:", "The work will be done tomorrow".split()),
        ("FB", "English is ___ (speak) all over the world.", "spoken"),
        ("MC", "My car ___ being repaired right now.", ["is", "was", "has"], 0),
        ("DD", "Соберите:", "The letter has already been sent".split()),
        ("FB", "America ___ (discover) by Columbus.", "was discovered"),
        ("MC", "The room ___ cleaned every day.", ["is", "was", "has"], 0),
        ("DD", "Вопрос:", "When was this bridge built ?".split()),
        ("FB", "It can be ___ (do).", "done"),
        ("MC", "The cake ___ eaten by the kids.", ["was", "is", "were"], 0),
        ("DD", "Пассив:", "The problem must be solved immediately".split()),
    ],
    "advanced": [
        ("FB", "He asked me where I ___ (live).", "lived"),
        ("MC", "I enjoy ___ books.", ["reading", "to read", "read"], 0),
        ("DD", "Соберите:", "The man who called you is my brother".split()),
        ("FB", "She told me ___ stop.", "to"),
        ("MC", "I had my car ___ yesterday.", ["repaired", "repair", "to repair"], 0),
        ("DD", "Соберите:", "Never have I seen such beauty".split()),
        ("FB", "I want him ___ (go) away.", "to go"),
        ("MC", "He suggested ___ to the cinema.", ["going", "to go", "go"], 0),
        ("DD", "Соберите:", "It is important that he be there".split()),
        ("FB", "They made me ___ (do) it.", "do"),
        ("MC", "She is used to ___ early.", ["waking up", "wake up", "waked up"], 0),
        ("DD", "Косвенная речь:", "He said that he was busy".split()),
    ]
}
pools["general"] = pools["advanced"]

course_outline = [
    ("Личные местоимения", "pronouns", 1),
    ("Глагол To Be: Утверждение", "to_be", 1),
    ("Глагол To Be: Отрицание", "to_be", 1),
    ("Глагол To Be: Вопросы", "to_be", 1),
    ("Указательные местоимения", "pronouns", 1),
    ("Притяжательные местоимения", "pronouns", 1),
    ("Артикли A и An", "nouns", 2),
    ("Артикль The", "nouns", 2),
    ("Множественное число (-s, -es)", "nouns", 1),
    ("Множественное число (Исключения)", "nouns", 2),
    ("Present Simple: Утверждение", "present_simple", 2),
    ("Present Simple: Отрицание", "present_simple", 2),
    ("Present Simple: Вопросы", "present_simple", 2),
    ("Наречия частотности", "present_simple", 2),
    ("Конструкция There is / There are", "to_be", 2),
    ("Предлоги места", "general", 2),
    ("Предлоги времени", "general", 2),
    ("Have got / Has got", "present_simple", 2),
    ("Герундий после Like / Love", "advanced", 3),
    ("Объектные местоимения", "pronouns", 2),
    ("Present Continuous: Утверждение", "to_be", 2),
    ("Present Continuous: Отрицание", "to_be", 2),
    ("Present Continuous: Вопросы", "to_be", 2),
    ("Present Simple vs Continuous", "present_simple", 3),
    ("Модальный глагол Can", "modals", 2),
    ("Модальный глагол Must", "modals", 2),
    ("Повелительное наклонение", "general", 2),
    ("Вопросительные слова", "general", 2),
    ("Исчисляемые и Неисчисляемые", "nouns", 3),
    ("Some и Any", "nouns", 3),
    ("Past Simple: Глагол To Be", "past_simple", 2),
    ("Past Simple: Правильные глаголы", "past_simple", 2),
    ("Past Simple: Неправильные глаголы 1", "past_simple", 3),
    ("Past Simple: Неправильные глаголы 2", "past_simple", 3),
    ("Past Simple: Отрицание", "past_simple", 2),
    ("Past Simple: Вопросы", "past_simple", 2),
    ("Маркеры Past Simple", "past_simple", 2),
    ("Much, Many, A lot of", "nouns", 3),
    ("A few / A little", "nouns", 3),
    ("Конструкция Used to", "past_simple", 3),
    ("Future Simple (Will)", "future", 2),
    ("Future Simple: Отрицание и Вопросы", "future", 2),
    ("Конструкция Be going to", "future", 3),
    ("Will vs Be going to", "future", 3),
    ("Present Continuous для будущего", "future", 3),
    ("Сравнительная степень прилагательных", "adjectives", 2),
    ("Превосходная степень прилагательных", "adjectives", 2),
    ("Прилагательные-исключения", "adjectives", 3),
    ("Наречия образа действия", "adjectives", 2),
    ("Придаточные времени (When)", "advanced", 4),
    ("Past Continuous: Утверждение", "past_simple", 3), 
    ("Past Continuous: Отрицание и Вопросы", "past_simple", 3),
    ("Past Simple vs Past Continuous", "past_simple", 4),
    ("Модальные глаголы Should / Ought to", "modals", 3),
    ("Модальные глаголы May / Might", "modals", 3),
    ("Have to vs Must", "modals", 4),
    ("Future Continuous", "future", 4),
    ("Глаголы состояния (State Verbs)", "present_simple", 4),
    ("Сложное дополнение (Complex Object)", "advanced", 4),
    ("Усилительные местоимения (myself)", "pronouns", 3),
    ("Present Perfect: Утверждение", "perfect", 3),
    ("Present Perfect: Отрицание и Вопросы", "perfect", 3),
    ("Маркеры: Just, Already, Yet", "perfect", 3),
    ("Маркеры: Ever, Never", "perfect", 3),
    ("Present Perfect: For / Since", "perfect", 3),
    ("Present Perfect vs Past Simple 1", "perfect", 4),
    ("Present Perfect vs Past Simple 2", "perfect", 4),
    ("Been to vs Gone to", "perfect", 3),
    ("Обобщение Perfect", "perfect", 4),
    ("Артикли (Продвинутый уровень)", "nouns", 4),
    ("Present Perfect Continuous", "perfect", 4),
    ("Pres Perf vs Pres Perf Cont", "perfect", 4),
    ("Past Perfect", "perfect", 4),
    ("Past Perfect vs Past Simple", "perfect", 4),
    ("Past Perfect Continuous", "perfect", 5),
    ("Future Perfect", "future", 5),
    ("Future Perfect Continuous", "future", 5),
    ("Модальные глаголы в прошлом", "modals", 5),
    ("Предлоги (despite, instead of)", "general", 4),
    ("Обзор всех времен", "advanced", 5),
    ("Zero Conditional", "conditionals", 4),
    ("First Conditional", "conditionals", 4),
    ("Second Conditional", "conditionals", 4),
    ("Third Conditional", "conditionals", 5),
    ("Mixed Conditionals", "conditionals", 5),
    ("Passive Voice (Present Simple)", "passive", 4),
    ("Passive Voice (Past Simple)", "passive", 4),
    ("Passive Voice (Future & Modals)", "passive", 4),
    ("Passive Voice (Continuous & Perfect)", "passive", 5),
    ("I wish / If only", "conditionals", 5),
    ("Reported Speech: Утверждения", "advanced", 4),
    ("Reported Speech: Вопросы", "advanced", 4),
    ("Reported Speech: Приказы", "advanced", 4),
    ("Gerund vs Infinitive: Основы", "advanced", 4),
    ("Gerund vs Infinitive: Разница", "advanced", 5),
    ("Relative Clauses", "advanced", 4),
    ("Non-defining Relative Clauses", "advanced", 5),
    ("Causative Form (Have done)", "advanced", 5),
    ("Инверсия", "advanced", 5),
    ("Финальный тест Mastery", "advanced", 5)
]

greetings = [
    "Привет-привет! С тобой твой пушистый наставник Кролик 🐰.",
    "Ушки на макушке! Кролик на связи 🐾.",
    "Морковку съел, к уроку готов! 🥕 Приветствую!",
    "Добро пожаловать в новый урок! С тобой твой верный ушастый гид 🐰.",
    "Хэй-хэй! Кролик готов делиться мудростью 🐰."
]
closings = [
    "Вперед к упражнениям! Я в тебя верю! 🥕",
    "Теперь самое время закрепить это на практике. Погнали! 🐾",
    "Грамматика — это просто, если тренироваться. Удачи в тесте! 🐰",
    "Не бойся делать ошибки, ведь именно на них мы учимся! Вперед! 🐾"
]

words_db = [
    ("Time", "[taɪm]", "Время"), ("Person", "[ˈpɜːs(ə)n]", "Человек"), ("Year", "[jɪə]", "Год"), 
    ("Way", "[weɪ]", "Путь/Способ"), ("Day", "[deɪ]", "День"), ("Thing", "[θɪŋ]", "Вещь"), 
    ("Man", "[mæn]", "Мужчина"), ("World", "[wɜːld]", "Мир"), ("Life", "[laɪf]", "Жизнь"), 
    ("Hand", "[hænd]", "Рука"), ("Part", "[pɑːt]", "Часть"), ("Child", "[ʧaɪld]", "Ребенок"),
    ("Eye", "[aɪ]", "Глаз"), ("Woman", "[ˈwʊmən]", "Женщина"), ("Place", "[pleɪs]", "Место"), 
    ("Work", "[wɜːk]", "Работа"), ("Week", "[wiːk]", "Неделя"), ("Case", "[keɪs]", "Случай"), 
    ("Point", "[pɔɪnt]", "Точка"), ("Government", "[ˈgʌvnmənt]", "Правительство"),
    ("Company", "[ˈkʌmpənɪ]", "Компания"), ("Number", "[ˈnʌmbə]", "Номер/Число"),
    ("Group", "[gruːp]", "Группа"), ("Problem", "[ˈprɒbləm]", "Проблема"), ("Fact", "[fækt]", "Факт")
]

lessons = []
vocab = []

for idx, (title, tag, complexity) in enumerate(course_outline):
    lesson_id = idx + 1
    module_id = (idx // 10) + 1
    
    # Select 2 random words
    sel_words = random.sample(words_db, 2)
    l_words = []
    for w in sel_words:
        w_obj = {
            "id": f"v_{lesson_id}_{w[0]}",
            "word": w[0],
            "transcription": w[1],
            "translation": w[2],
            "category": "Basic"
        }
        l_words.append(w_obj)
        vocab.append(w_obj)
        
    # Theory
    intro = random.choice(greetings) + f" Сегодня мы погружаемся в важнейшую тему: {title}."
    details = theory_templates.get(tag, theory_templates["general"])
    close = random.choice(closings)
    theory = [intro] + details + [close]
    
    # Quiz
    num_q = 5 + complexity # 6 to 10 questions
    pool = pools.get(tag, pools["general"])
    q_selected = random.sample(pool, min(num_q, len(pool)))
    # pad if needed
    while len(q_selected) < num_q:
        q_selected.append(random.choice(pool))
        
    quiz = []
    for q_idx, q in enumerate(q_selected):
        q_id = f"q{lesson_id}_{q_idx+1}"
        if q[0] == "MC":
            quiz.append({
                "id": q_id,
                "type": "multiple_choice",
                "question": q[1],
                "options": q[2],
                "correctAnswerIndex": q[3]
            })
        elif q[0] == "DD":
            opts = q[2][:]
            random.shuffle(opts)
            quiz.append({
                "id": q_id,
                "type": "drag_and_drop",
                "question": q[1],
                "options": opts,
                "correctSentence": q[2]
            })
        elif q[0] == "FB":
            quiz.append({
                "id": q_id,
                "type": "fill_in_blank",
                "question": q[1],
                "correctAnswer": q[2]
            })
            
    lessons.append({
        "id": f"l{lesson_id}",
        "title": f"Урок {lesson_id}: {title}",
        "moduleId": module_id,
        "theory": theory,
        "words": l_words,
        "quiz": quiz
    })

# Deduplicate vocab
seen = set()
unique_vocab = []
for v in vocab:
    if v['word'] not in seen:
        seen.add(v['word'])
        unique_vocab.append(v)

with open('src/courseData.ts', 'w', encoding='utf-8') as f:
    f.write("import { Lesson, Word } from './types';\n\n")
    f.write("export const vocabulary: Word[] = " + json.dumps(unique_vocab, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("export const lessons: Lesson[] = " + json.dumps(lessons, ensure_ascii=False, indent=2) + ";\n")

print("Generated courseData.ts successfully.")

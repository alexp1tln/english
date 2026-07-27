import { Lesson, Word } from './types';

// Экспорт словаря
export const vocabulary: Word[] = [
  {
    "id": "v1",
    "word": "Always",
    "transcription": "[о́лвэйз]",
    "translation": "Всегда",
    "category": "Наречия"
  },
  {
    "id": "v2",
    "word": "Never",
    "transcription": "[нэ́вэ]",
    "translation": "Никогда",
    "category": "Наречия"
  },
  {
    "id": "v3",
    "word": "Sometimes",
    "transcription": "[самта́ймз]",
    "translation": "Иногда",
    "category": "Наречия"
  },
  {
    "id": "v4",
    "word": "Often",
    "transcription": "[о́фн]",
    "translation": "Часто",
    "category": "Наречия"
  },
  {
    "id": "v5",
    "word": "Usually",
    "transcription": "[ю́жуали]",
    "translation": "Обычно",
    "category": "Наречия"
  },
  {
    "id": "v6",
    "word": "Seldom",
    "transcription": "[сэ́лдом]",
    "translation": "Редко",
    "category": "Наречия"
  },
  {
    "id": "v7",
    "word": "Every day",
    "transcription": "[э́ври дэй]",
    "translation": "Каждый день",
    "category": "Наречия"
  },
  {
    "id": "v8",
    "word": "Now",
    "transcription": "[нау]",
    "translation": "Сейчас",
    "category": "Наречия"
  },
  {
    "id": "v9",
    "word": "Today",
    "transcription": "[тадэ́й]",
    "translation": "Сегодня",
    "category": "Наречия"
  },
  {
    "id": "v10",
    "word": "Tomorrow",
    "transcription": "[тумо́роу]",
    "translation": "Завтра",
    "category": "Наречия"
  },
  {
    "id": "v11",
    "word": "Yesterday",
    "transcription": "[е́стэдэй]",
    "translation": "Вчера",
    "category": "Наречия"
  },
  {
    "id": "v12",
    "word": "Soon",
    "transcription": "[сун]",
    "translation": "Скоро",
    "category": "Наречия"
  },
  {
    "id": "v13",
    "word": "Already",
    "transcription": "[олрэ́ди]",
    "translation": "Уже",
    "category": "Наречия"
  },
  {
    "id": "v14",
    "word": "Yet",
    "transcription": "[ет]",
    "translation": "Еще (не)",
    "category": "Наречия"
  },
  {
    "id": "v15",
    "word": "Just",
    "transcription": "[джаст]",
    "translation": "Только что",
    "category": "Наречия"
  },
  {
    "id": "v16",
    "word": "Time",
    "transcription": "[тайм]",
    "translation": "Время",
    "category": "Существительные"
  },
  {
    "id": "v17",
    "word": "Year",
    "transcription": "[йе́а]",
    "translation": "Год",
    "category": "Существительные"
  },
  {
    "id": "v18",
    "word": "People",
    "transcription": "[пипл]",
    "translation": "Люди",
    "category": "Существительные"
  },
  {
    "id": "v19",
    "word": "Way",
    "transcription": "[уэ́й]",
    "translation": "Путь / Способ",
    "category": "Существительные"
  },
  {
    "id": "v20",
    "word": "Day",
    "transcription": "[дэй]",
    "translation": "День",
    "category": "Существительные"
  },
  {
    "id": "v21",
    "word": "Man",
    "transcription": "[мэн]",
    "translation": "Мужчина / Человек",
    "category": "Существительные"
  },
  {
    "id": "v22",
    "word": "Thing",
    "transcription": "[синг]",
    "translation": "Вещь",
    "category": "Существительные"
  },
  {
    "id": "v23",
    "word": "Woman",
    "transcription": "[уу́мэн]",
    "translation": "Женщина",
    "category": "Существительные"
  },
  {
    "id": "v24",
    "word": "Life",
    "transcription": "[лайф]",
    "translation": "Жизнь",
    "category": "Существительные"
  },
  {
    "id": "v25",
    "word": "Child",
    "transcription": "[чайлд]",
    "translation": "Ребенок",
    "category": "Существительные"
  },
  {
    "id": "v26",
    "word": "World",
    "transcription": "[уо́рлд]",
    "translation": "Мир",
    "category": "Существительные"
  },
  {
    "id": "v27",
    "word": "School",
    "transcription": "[скул]",
    "translation": "Школа",
    "category": "Существительные"
  },
  {
    "id": "v28",
    "word": "State",
    "transcription": "[стэйт]",
    "translation": "Состояние / Штат",
    "category": "Существительные"
  },
  {
    "id": "v29",
    "word": "Family",
    "transcription": "[фэ́мили]",
    "translation": "Семья",
    "category": "Существительные"
  },
  {
    "id": "v30",
    "word": "Student",
    "transcription": "[стью́дэнт]",
    "translation": "Студент",
    "category": "Существительные"
  },
  {
    "id": "v31",
    "word": "Group",
    "transcription": "[груп]",
    "translation": "Группа",
    "category": "Основы"
  },
  {
    "id": "v32",
    "word": "Country",
    "transcription": "[ка́нтри]",
    "translation": "Страна",
    "category": "Основы"
  },
  {
    "id": "v33",
    "word": "Problem",
    "transcription": "[про́блем]",
    "translation": "Проблема",
    "category": "Основы"
  },
  {
    "id": "v34",
    "word": "Hand",
    "transcription": "[хэнд]",
    "translation": "Рука",
    "category": "Основы"
  },
  {
    "id": "v35",
    "word": "Part",
    "transcription": "[парт]",
    "translation": "Часть",
    "category": "Основы"
  },
  {
    "id": "v36",
    "word": "Place",
    "transcription": "[плэйс]",
    "translation": "Место",
    "category": "Основы"
  },
  {
    "id": "v37",
    "word": "Case",
    "transcription": "[кэйс]",
    "translation": "Случай",
    "category": "Основы"
  },
  {
    "id": "v38",
    "word": "Week",
    "transcription": "[уи́к]",
    "translation": "Неделя",
    "category": "Основы"
  },
  {
    "id": "v39",
    "word": "Company",
    "transcription": "[ка́мпани]",
    "translation": "Компания",
    "category": "Основы"
  },
  {
    "id": "v40",
    "word": "System",
    "transcription": "[си́стэм]",
    "translation": "Система",
    "category": "Основы"
  },
  {
    "id": "v41",
    "word": "Program",
    "transcription": "[про́грэм]",
    "translation": "Программа",
    "category": "Основы"
  },
  {
    "id": "v42",
    "word": "Question",
    "transcription": "[квэ́счэн]",
    "translation": "Вопрос",
    "category": "Основы"
  },
  {
    "id": "v43",
    "word": "Work",
    "transcription": "[уо́рк]",
    "translation": "Работа",
    "category": "Основы"
  },
  {
    "id": "v44",
    "word": "Government",
    "transcription": "[га́вернмэнт]",
    "translation": "Правительство",
    "category": "Основы"
  },
  {
    "id": "v45",
    "word": "Number",
    "transcription": "[на́мбэр]",
    "translation": "Число",
    "category": "Основы"
  },
  {
    "id": "v46",
    "word": "Night",
    "transcription": "[найт]",
    "translation": "Ночь",
    "category": "Основы"
  },
  {
    "id": "v47",
    "word": "Point",
    "transcription": "[пойнт]",
    "translation": "Точка / Суть",
    "category": "Основы"
  },
  {
    "id": "v48",
    "word": "Home",
    "transcription": "[хоум]",
    "translation": "Дом",
    "category": "Основы"
  },
  {
    "id": "v49",
    "word": "Water",
    "transcription": "[уо́тэр]",
    "translation": "Вода",
    "category": "Основы"
  },
  {
    "id": "v50",
    "word": "Room",
    "transcription": "[рум]",
    "translation": "Комната",
    "category": "Основы"
  },
  {
    "id": "v51",
    "word": "Mother",
    "transcription": "[ма́зэр]",
    "translation": "Мать",
    "category": "Основы"
  },
  {
    "id": "v52",
    "word": "Area",
    "transcription": "[э́риа]",
    "translation": "Область",
    "category": "Основы"
  },
  {
    "id": "v53",
    "word": "Money",
    "transcription": "[ма́ни]",
    "translation": "Деньги",
    "category": "Основы"
  },
  {
    "id": "v54",
    "word": "Story",
    "transcription": "[сто́ри]",
    "translation": "История",
    "category": "Основы"
  },
  {
    "id": "v55",
    "word": "Fact",
    "transcription": "[фэкт]",
    "translation": "Факт",
    "category": "Основы"
  },
  {
    "id": "v56",
    "word": "Month",
    "transcription": "[манс]",
    "translation": "Месяц",
    "category": "Основы"
  },
  {
    "id": "v57",
    "word": "Lot",
    "transcription": "[лат]",
    "translation": "Много",
    "category": "Основы"
  },
  {
    "id": "v58",
    "word": "Right",
    "transcription": "[райт]",
    "translation": "Право / Правильный",
    "category": "Основы"
  },
  {
    "id": "v59",
    "word": "Study",
    "transcription": "[ста́ди]",
    "translation": "Изучать",
    "category": "Основы"
  },
  {
    "id": "v60",
    "word": "Book",
    "transcription": "[бук]",
    "translation": "Книга",
    "category": "Основы"
  },
  {
    "id": "v61",
    "word": "Eye",
    "transcription": "[ай]",
    "translation": "Глаз",
    "category": "Основы"
  },
  {
    "id": "v62",
    "word": "Job",
    "transcription": "[джаб]",
    "translation": "Работа (профессия)",
    "category": "Основы"
  },
  {
    "id": "v63",
    "word": "Word",
    "transcription": "[уо́рд]",
    "translation": "Слово",
    "category": "Основы"
  },
  {
    "id": "v64",
    "word": "Business",
    "transcription": "[би́знас]",
    "translation": "Бизнес",
    "category": "Основы"
  },
  {
    "id": "v65",
    "word": "Issue",
    "transcription": "[и́шу]",
    "translation": "Вопрос (проблема)",
    "category": "Основы"
  },
  {
    "id": "v66",
    "word": "Side",
    "transcription": "[сайд]",
    "translation": "Сторона",
    "category": "Основы"
  },
  {
    "id": "v67",
    "word": "Kind",
    "transcription": "[кайнд]",
    "translation": "Вид / Добрый",
    "category": "Основы"
  },
  {
    "id": "v68",
    "word": "Head",
    "transcription": "[хёд]",
    "translation": "Голова",
    "category": "Основы"
  },
  {
    "id": "v69",
    "word": "House",
    "transcription": "[хаус]",
    "translation": "Дом (здание)",
    "category": "Основы"
  },
  {
    "id": "v70",
    "word": "Service",
    "transcription": "[сэ́вас]",
    "translation": "Служба",
    "category": "Основы"
  },
  {
    "id": "v71",
    "word": "Friend",
    "transcription": "[фрэнд]",
    "translation": "Друг",
    "category": "Основы"
  },
  {
    "id": "v72",
    "word": "Father",
    "transcription": "[фа́зэр]",
    "translation": "Отец",
    "category": "Основы"
  },
  {
    "id": "v73",
    "word": "Power",
    "transcription": "[па́уэ]",
    "translation": "Сила / Власть",
    "category": "Основы"
  },
  {
    "id": "v74",
    "word": "Hour",
    "transcription": "[а́уэ]",
    "translation": "Час",
    "category": "Основы"
  },
  {
    "id": "v75",
    "word": "Game",
    "transcription": "[гэйм]",
    "translation": "Игра",
    "category": "Основы"
  },
  {
    "id": "v76",
    "word": "Line",
    "transcription": "[лайн]",
    "translation": "Линия",
    "category": "Основы"
  },
  {
    "id": "v77",
    "word": "End",
    "transcription": "[энд]",
    "translation": "Конец",
    "category": "Основы"
  },
  {
    "id": "v78",
    "word": "Member",
    "transcription": "[мэ́мбэр]",
    "translation": "Член (группы)",
    "category": "Основы"
  },
  {
    "id": "v79",
    "word": "Law",
    "transcription": "[ло]",
    "translation": "Закон",
    "category": "Основы"
  },
  {
    "id": "v80",
    "word": "Car",
    "transcription": "[кар]",
    "translation": "Машина",
    "category": "Основы"
  },
  {
    "id": "v81",
    "word": "City",
    "transcription": "[си́ти]",
    "translation": "Город",
    "category": "Основы"
  },
  {
    "id": "v82",
    "word": "Community",
    "transcription": "[комью́нити]",
    "translation": "Сообщество",
    "category": "Основы"
  },
  {
    "id": "v83",
    "word": "Name",
    "transcription": "[нэйм]",
    "translation": "Имя",
    "category": "Основы"
  },
  {
    "id": "v84",
    "word": "President",
    "transcription": "[прэ́зидант]",
    "translation": "Президент",
    "category": "Основы"
  },
  {
    "id": "v85",
    "word": "Team",
    "transcription": "[тим]",
    "translation": "Команда",
    "category": "Основы"
  },
  {
    "id": "v86",
    "word": "Minute",
    "transcription": "[ми́нат]",
    "translation": "Минута",
    "category": "Основы"
  },
  {
    "id": "v87",
    "word": "Idea",
    "transcription": "[айди́а]",
    "translation": "Идея",
    "category": "Основы"
  },
  {
    "id": "v88",
    "word": "Kid",
    "transcription": "[кид]",
    "translation": "Ребенок (разг.)",
    "category": "Основы"
  },
  {
    "id": "v89",
    "word": "Body",
    "transcription": "[ба́ди]",
    "translation": "Тело",
    "category": "Основы"
  },
  {
    "id": "v90",
    "word": "Information",
    "transcription": "[информэ́йшн]",
    "translation": "Информация",
    "category": "Основы"
  },
  {
    "id": "v91",
    "word": "Back",
    "transcription": "[бэк]",
    "translation": "Спина / Назад",
    "category": "Основы"
  },
  {
    "id": "v92",
    "word": "Parent",
    "transcription": "[пэ́рэнт]",
    "translation": "Родитель",
    "category": "Основы"
  },
  {
    "id": "v93",
    "word": "Face",
    "transcription": "[фэйс]",
    "translation": "Лицо",
    "category": "Основы"
  },
  {
    "id": "v94",
    "word": "Others",
    "transcription": "[а́зэрз]",
    "translation": "Другие",
    "category": "Основы"
  },
  {
    "id": "v95",
    "word": "Level",
    "transcription": "[лэ́вэл]",
    "translation": "Уровень",
    "category": "Основы"
  },
  {
    "id": "v96",
    "word": "Office",
    "transcription": "[о́фис]",
    "translation": "Офис",
    "category": "Основы"
  },
  {
    "id": "v97",
    "word": "Door",
    "transcription": "[дор]",
    "translation": "Дверь",
    "category": "Основы"
  },
  {
    "id": "v98",
    "word": "Health",
    "transcription": "[хэлс]",
    "translation": "Здоровье",
    "category": "Основы"
  },
  {
    "id": "v99",
    "word": "Person",
    "transcription": "[пё́рсн]",
    "translation": "Человек (личность)",
    "category": "Основы"
  },
  {
    "id": "v100",
    "word": "Art",
    "transcription": "[арт]",
    "translation": "Искусство",
    "category": "Основы"
  },
  {
    "id": "v101",
    "word": "War",
    "transcription": "[уо́р]",
    "translation": "Война",
    "category": "Основы"
  },
  {
    "id": "v102",
    "word": "History",
    "transcription": "[хи́стори]",
    "translation": "История (наука)",
    "category": "Основы"
  },
  {
    "id": "v103",
    "word": "Party",
    "transcription": "[па́рти]",
    "translation": "Вечеринка / Партия",
    "category": "Основы"
  },
  {
    "id": "v104",
    "word": "Result",
    "transcription": "[риза́лт]",
    "translation": "Результат",
    "category": "Основы"
  },
  {
    "id": "v105",
    "word": "Change",
    "transcription": "[чэйндж]",
    "translation": "Изменение",
    "category": "Основы"
  },
  {
    "id": "v106",
    "word": "Morning",
    "transcription": "[мо́рнинг]",
    "translation": "Утро",
    "category": "Основы"
  },
  {
    "id": "v107",
    "word": "Reason",
    "transcription": "[ри́зн]",
    "translation": "Причина",
    "category": "Основы"
  },
  {
    "id": "v108",
    "word": "Research",
    "transcription": "[рисё́ч]",
    "translation": "Исследование",
    "category": "Основы"
  },
  {
    "id": "v109",
    "word": "Girl",
    "transcription": "[гёл]",
    "translation": "Девочка",
    "category": "Основы"
  },
  {
    "id": "v110",
    "word": "Guy",
    "transcription": "[гай]",
    "translation": "Парень",
    "category": "Основы"
  },
  {
    "id": "v111",
    "word": "Food",
    "transcription": "[фуд]",
    "translation": "Еда",
    "category": "Основы"
  },
  {
    "id": "v112",
    "word": "Moment",
    "transcription": "[мо́умант]",
    "translation": "Момент",
    "category": "Основы"
  },
  {
    "id": "v113",
    "word": "Air",
    "transcription": "[эр]",
    "translation": "Воздух",
    "category": "Основы"
  },
  {
    "id": "v114",
    "word": "Teacher",
    "transcription": "[ти́чэр]",
    "translation": "Учитель",
    "category": "Основы"
  },
  {
    "id": "v115",
    "word": "Force",
    "transcription": "[форс]",
    "translation": "Сила (физическая)",
    "category": "Основы"
  },
  {
    "id": "v116",
    "word": "Education",
    "transcription": "[эдюкэ́йшн]",
    "translation": "Образование",
    "category": "Основы"
  },
  {
    "id": "v117",
    "word": "Good",
    "transcription": "[гуд]",
    "translation": "Хороший",
    "category": "Основы"
  },
  {
    "id": "v118",
    "word": "New",
    "transcription": "[нью]",
    "translation": "Новый",
    "category": "Основы"
  },
  {
    "id": "v119",
    "word": "First",
    "transcription": "[фаст]",
    "translation": "Первый",
    "category": "Основы"
  },
  {
    "id": "v120",
    "word": "Last",
    "transcription": "[лэст]",
    "translation": "Последний",
    "category": "Основы"
  },
  {
    "id": "v121",
    "word": "Long",
    "transcription": "[лонг]",
    "translation": "Длинный",
    "category": "Основы"
  },
  {
    "id": "v122",
    "word": "Great",
    "transcription": "[грэйт]",
    "translation": "Великий / Отличный",
    "category": "Основы"
  },
  {
    "id": "v123",
    "word": "Little",
    "transcription": "[литл]",
    "translation": "Маленький",
    "category": "Основы"
  },
  {
    "id": "v124",
    "word": "Own",
    "transcription": "[оун]",
    "translation": "Собственный",
    "category": "Основы"
  },
  {
    "id": "v125",
    "word": "Other",
    "transcription": "[а́зэр]",
    "translation": "Другой",
    "category": "Основы"
  },
  {
    "id": "v126",
    "word": "Old",
    "transcription": "[оулд]",
    "translation": "Старый",
    "category": "Основы"
  },
  {
    "id": "v127",
    "word": "Right",
    "transcription": "[райт]",
    "translation": "Правый",
    "category": "Основы"
  },
  {
    "id": "v128",
    "word": "Big",
    "transcription": "[биг]",
    "translation": "Большой",
    "category": "Основы"
  },
  {
    "id": "v129",
    "word": "High",
    "transcription": "[хай]",
    "translation": "Высокий",
    "category": "Основы"
  },
  {
    "id": "v130",
    "word": "Different",
    "transcription": "[ди́ферэнт]",
    "translation": "Различный",
    "category": "Основы"
  },
  {
    "id": "v131",
    "word": "Small",
    "transcription": "[смол]",
    "translation": "Маленький",
    "category": "Основы"
  },
  {
    "id": "v132",
    "word": "Large",
    "transcription": "[лардж]",
    "translation": "Крупный",
    "category": "Основы"
  },
  {
    "id": "v133",
    "word": "Next",
    "transcription": "[нэкст]",
    "translation": "Следующий",
    "category": "Основы"
  },
  {
    "id": "v134",
    "word": "Early",
    "transcription": "[э́ли]",
    "translation": "Ранний",
    "category": "Основы"
  },
  {
    "id": "v135",
    "word": "Young",
    "transcription": "[янг]",
    "translation": "Молодой",
    "category": "Основы"
  },
  {
    "id": "v136",
    "word": "Important",
    "transcription": "[импо́ртэнт]",
    "translation": "Важный",
    "category": "Основы"
  },
  {
    "id": "v137",
    "word": "Few",
    "transcription": "[фю]",
    "translation": "Несколько",
    "category": "Основы"
  },
  {
    "id": "v138",
    "word": "Public",
    "transcription": "[па́блик]",
    "translation": "Общественный",
    "category": "Основы"
  },
  {
    "id": "v139",
    "word": "Bad",
    "transcription": "[бэд]",
    "translation": "Плохой",
    "category": "Основы"
  },
  {
    "id": "v140",
    "word": "Same",
    "transcription": "[сэйм]",
    "translation": "Тот же самый",
    "category": "Основы"
  },
  {
    "id": "v141",
    "word": "Able",
    "transcription": "[эйбл]",
    "translation": "Способный",
    "category": "Основы"
  },
  {
    "id": "v142",
    "word": "To be",
    "transcription": "[ту би]",
    "translation": "Быть",
    "category": "Глаголы"
  },
  {
    "id": "v143",
    "word": "To have",
    "transcription": "[ту хэв]",
    "translation": "Иметь",
    "category": "Глаголы"
  },
  {
    "id": "v144",
    "word": "To do",
    "transcription": "[ту ду]",
    "translation": "Делать",
    "category": "Глаголы"
  },
  {
    "id": "v145",
    "word": "To say",
    "transcription": "[ту сэй]",
    "translation": "Сказать",
    "category": "Глаголы"
  },
  {
    "id": "v146",
    "word": "To go",
    "transcription": "[ту гоу]",
    "translation": "Идти",
    "category": "Глаголы"
  },
  {
    "id": "v147",
    "word": "To get",
    "transcription": "[ту гет]",
    "translation": "Получить",
    "category": "Глаголы"
  },
  {
    "id": "v148",
    "word": "To make",
    "transcription": "[ту мэйк]",
    "translation": "Сделать (создать)",
    "category": "Глаголы"
  },
  {
    "id": "v149",
    "word": "To know",
    "transcription": "[ту ноу]",
    "translation": "Знать",
    "category": "Глаголы"
  },
  {
    "id": "v150",
    "word": "To think",
    "transcription": "[ту синк]",
    "translation": "Думать",
    "category": "Глаголы"
  },
  {
    "id": "v151",
    "word": "Deploy",
    "transcription": "[дипло́й]",
    "translation": "Развертывать",
    "category": "IT и технологии"
  },
  {
    "id": "v152",
    "word": "Debug",
    "transcription": "[диба́г]",
    "translation": "Отлаживать",
    "category": "IT и технологии"
  },
  {
    "id": "v153",
    "word": "Framework",
    "transcription": "[фрэ́ймвэк]",
    "translation": "Фреймворк",
    "category": "IT и технологии"
  },
  {
    "id": "v154",
    "word": "Frontend",
    "transcription": "[фрoнтэнд]",
    "translation": "Фронтенд",
    "category": "IT и технологии"
  },
  {
    "id": "v155",
    "word": "Backend",
    "transcription": "[бэкэ́нд]",
    "translation": "Бэкенд",
    "category": "IT и технологии"
  },
  {
    "id": "v156",
    "word": "Leak",
    "transcription": "[лик]",
    "translation": "Утечка / Течь",
    "category": "Бытовые проблемы"
  },
  {
    "id": "v157",
    "word": "Plumber",
    "transcription": "[пла́мэ]",
    "translation": "Сантехник",
    "category": "Бытовые проблемы"
  },
  {
    "id": "v158",
    "word": "Outage",
    "transcription": "[а́утадж]",
    "translation": "Сбой (электричества)",
    "category": "Бытовые проблемы"
  },
  {
    "id": "v159",
    "word": "Clogged",
    "transcription": "[клогд]",
    "translation": "Засоренный",
    "category": "Бытовые проблемы"
  },
  {
    "id": "v160",
    "word": "Repair",
    "transcription": "[рипэ́р]",
    "translation": "Ремонт",
    "category": "Бытовые проблемы"
  },
  {
    "id": "v161",
    "word": "Ghost",
    "transcription": "[гоуст]",
    "translation": "Игнорировать (в сети)",
    "category": "Сленг"
  },
  {
    "id": "v162",
    "word": "Spill the tea",
    "transcription": "[спилл тхэ тэa]",
    "translation": "Сплетничать",
    "category": "Сленг"
  },
  {
    "id": "v163",
    "word": "Flex",
    "transcription": "[флекс]",
    "translation": "Хвастаться",
    "category": "Сленг"
  },
  {
    "id": "v164",
    "word": "Lowkey",
    "transcription": "[лoвкэй]",
    "translation": "Тайно / Скромно",
    "category": "Сленг"
  },
  {
    "id": "v165",
    "word": "Savage",
    "transcription": "[сэ́вадж]",
    "translation": "Дерзкий",
    "category": "Сленг"
  },
  {
    "id": "v166",
    "word": "Departure",
    "transcription": "[дипа́рчэ]",
    "translation": "Отправление",
    "category": "Путешествия"
  },
  {
    "id": "v167",
    "word": "Arrival",
    "transcription": "[эа́йвал]",
    "translation": "Прибытие",
    "category": "Путешествия"
  },
  {
    "id": "v168",
    "word": "Luggage",
    "transcription": "[ла́гадж]",
    "translation": "Багаж",
    "category": "Путешествия"
  },
  {
    "id": "v169",
    "word": "Boarding pass",
    "transcription": "[бoaрдинг пaсс]",
    "translation": "Посадочный талон",
    "category": "Путешествия"
  },
  {
    "id": "v170",
    "word": "Customs",
    "transcription": "[ка́стамз]",
    "translation": "Таможня",
    "category": "Путешествия"
  },
  {
    "id": "v171",
    "word": "Overcooked",
    "transcription": "[оувэку́кт]",
    "translation": "Переваренный",
    "category": "Ресторан"
  },
  {
    "id": "v172",
    "word": "Undercooked",
    "transcription": "[андэку́кт]",
    "translation": "Недоготовленный",
    "category": "Ресторан"
  },
  {
    "id": "v173",
    "word": "Bill",
    "transcription": "[бил]",
    "translation": "Счет",
    "category": "Ресторан"
  },
  {
    "id": "v174",
    "word": "Tip",
    "transcription": "[тип]",
    "translation": "Чаевые",
    "category": "Ресторан"
  },
  {
    "id": "v175",
    "word": "Spicy",
    "transcription": "[спа́йси]",
    "translation": "Острый",
    "category": "Ресторан"
  }
];

// Экспорт курсов
export const lessons: Lesson[] = [
  {
    "id": "l1",
    "title": "Урок 1: Глагол \"to be\" (быть)",
    "theory": [
      "Привет! Я твой гид-кролик 🐰. Начнем с самого важного глагола в английском — \"to be\" (быть).",
      "В русском мы часто пропускаем его: \"Я студент\". В английском так нельзя! Нужно сказать \"I AM a student\" (Я ЕСТЬ студент).",
      "У него три формы в настоящем времени: AM (для I), IS (для he, she, it) и ARE (для we, you, they).",
      "Запомни: I am. He is. They are. Всё просто! 🦇"
    ],
    "words": [
      {
        "id": "v142",
        "word": "To be",
        "transcription": "[ту би]",
        "translation": "Быть"
      },
      {
        "id": "v143",
        "word": "To have",
        "transcription": "[ту хэв]",
        "translation": "Иметь"
      },
      {
        "id": "v144",
        "word": "To do",
        "transcription": "[ту ду]",
        "translation": "Делать"
      },
      {
        "id": "v145",
        "word": "To say",
        "transcription": "[ту сэй]",
        "translation": "Сказать"
      },
      {
        "id": "v146",
        "word": "To go",
        "transcription": "[ту гоу]",
        "translation": "Идти"
      },
      {
        "id": "v147",
        "word": "To get",
        "transcription": "[ту гет]",
        "translation": "Получить"
      },
      {
        "id": "v148",
        "word": "To make",
        "transcription": "[ту мэйк]",
        "translation": "Сделать (создать)"
      },
      {
        "id": "v149",
        "word": "To know",
        "transcription": "[ту ноу]",
        "translation": "Знать"
      },
      {
        "id": "v18",
        "word": "People",
        "transcription": "[пипл]",
        "translation": "Люди"
      },
      {
        "id": "v19",
        "word": "Way",
        "transcription": "[уэ́й]",
        "translation": "Путь / Способ"
      }
    ],
    "quiz": [
      {
        "id": "q1_1",
        "question": "I ___ a student.",
        "options": [
          "am",
          "is",
          "are"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q1_2",
        "question": "She ___ beautiful.",
        "options": [
          "am",
          "is",
          "are"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q1_3",
        "question": "They ___ my friends.",
        "options": [
          "am",
          "is",
          "are"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q1_4",
        "question": "Как переводится \"to be\"?",
        "options": [
          "иметь",
          "быть",
          "делать"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q1_5",
        "question": "We ___ ready.",
        "options": [
          "am",
          "is",
          "are"
        ],
        "correctAnswerIndex": 2
      }
    ],
    "moduleId": 1
  },
  {
    "id": "l2",
    "title": "Урок 2: Личные местоимения",
    "theory": [
      "Снова я! 🐰 Сегодня выучим слова, которые заменяют имена. Это местоимения!",
      "I - я. You - ты / вы. (В английском это одно и то же слово, удобно!)",
      "He - он, She - она, It - оно (для неживых предметов и животных).",
      "We - мы, They - они. Выучи их как таблицу умножения!"
    ],
    "words": [
      {
        "id": "v1",
        "word": "Always",
        "transcription": "[о́лвэйз]",
        "translation": "Всегда"
      },
      {
        "id": "v2",
        "word": "Never",
        "transcription": "[нэ́вэ]",
        "translation": "Никогда"
      },
      {
        "id": "v3",
        "word": "Sometimes",
        "transcription": "[самта́ймз]",
        "translation": "Иногда"
      },
      {
        "id": "v4",
        "word": "Often",
        "transcription": "[о́фн]",
        "translation": "Часто"
      },
      {
        "id": "v5",
        "word": "Usually",
        "transcription": "[ю́жуали]",
        "translation": "Обычно"
      },
      {
        "id": "v6",
        "word": "Seldom",
        "transcription": "[сэ́лдом]",
        "translation": "Редко"
      },
      {
        "id": "v7",
        "word": "Every day",
        "transcription": "[э́ври дэй]",
        "translation": "Каждый день"
      },
      {
        "id": "v8",
        "word": "Now",
        "transcription": "[нау]",
        "translation": "Сейчас"
      },
      {
        "id": "v9",
        "word": "Today",
        "transcription": "[тадэ́й]",
        "translation": "Сегодня"
      },
      {
        "id": "v10",
        "word": "Tomorrow",
        "transcription": "[тумо́роу]",
        "translation": "Завтра"
      }
    ],
    "quiz": [
      {
        "id": "q2_1",
        "question": "Как сказать \"он\"?",
        "options": [
          "She",
          "He",
          "It"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q2_2",
        "question": "\"Они\" по-английски это...",
        "options": [
          "We",
          "You",
          "They"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q2_3",
        "question": "Какое местоимение используется для животных?",
        "options": [
          "He",
          "It",
          "She"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q2_4",
        "question": "\"Мы\" на английском:",
        "options": [
          "They",
          "We",
          "I"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q2_5",
        "question": "\"I\" означает...",
        "options": [
          "Ты",
          "Оно",
          "Я"
        ],
        "correctAnswerIndex": 2
      }
    ],
    "moduleId": 1
  },
  {
    "id": "l3",
    "title": "Урок 3: Present Simple (Настоящее простое)",
    "theory": [
      "Время Present Simple! 🐰 Используем его, когда говорим о рутине, привычках или фактах.",
      "Например: \"I play tennis every day\". Действие происходит вообще, регулярно.",
      "Для I, You, We, They берем просто глагол. Для He, She, It — добавляем окончание \"-s\" или \"-es\"!",
      "Например: \"He playS tennis\". Не забывай эту \"s\", иначе будет звучать странно!"
    ],
    "words": [
      {
        "id": "v11",
        "word": "Yesterday",
        "transcription": "[е́стэдэй]",
        "translation": "Вчера"
      },
      {
        "id": "v12",
        "word": "Soon",
        "transcription": "[сун]",
        "translation": "Скоро"
      },
      {
        "id": "v13",
        "word": "Already",
        "transcription": "[олрэ́ди]",
        "translation": "Уже"
      },
      {
        "id": "v14",
        "word": "Yet",
        "transcription": "[ет]",
        "translation": "Еще (не)"
      },
      {
        "id": "v15",
        "word": "Just",
        "transcription": "[джаст]",
        "translation": "Только что"
      },
      {
        "id": "v16",
        "word": "Time",
        "transcription": "[тайм]",
        "translation": "Время"
      },
      {
        "id": "v17",
        "word": "Year",
        "transcription": "[йе́а]",
        "translation": "Год"
      },
      {
        "id": "v18",
        "word": "People",
        "transcription": "[пипл]",
        "translation": "Люди"
      },
      {
        "id": "v19",
        "word": "Way",
        "transcription": "[уэ́й]",
        "translation": "Путь / Способ"
      },
      {
        "id": "v20",
        "word": "Day",
        "transcription": "[дэй]",
        "translation": "День"
      }
    ],
    "quiz": [
      {
        "id": "q3_1",
        "question": "I ___ apples.",
        "options": [
          "likes",
          "like",
          "liking"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q3_2",
        "question": "He ___ to school.",
        "options": [
          "go",
          "goes",
          "going"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q3_3",
        "question": "They ___ tennis every Sunday.",
        "options": [
          "play",
          "plays",
          "playing"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q3_4",
        "question": "She ___ TV in the evening.",
        "options": [
          "watch",
          "watches",
          "watched"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q3_5",
        "question": "We ___ in London.",
        "options": [
          "lives",
          "living",
          "live"
        ],
        "correctAnswerIndex": 2
      }
    ],
    "moduleId": 1
  },
  {
    "id": "l4",
    "title": "Урок 4: Present Simple (Отрицание)",
    "theory": [
      "А как сказать \"не\"? 🐰 В английском нам нужны помощники (вспомогательные глаголы) DO и DOES.",
      "Для I, You, We, They мы говорим \"do not\" (или don't). \"I don't like broccoli\".",
      "Для He, She, It мы говорим \"does not\" (или doesn't). \"He doesn't like broccoli\".",
      "Заметь! Буковка \"-s\" убежала от глагола и спряталась в DOES! Поэтому глагол остается чистым: \"He doesn't PLAY\" (а не plays)."
    ],
    "words": [
      {
        "id": "v21",
        "word": "Man",
        "transcription": "[мэн]",
        "translation": "Мужчина / Человек"
      },
      {
        "id": "v22",
        "word": "Thing",
        "transcription": "[синг]",
        "translation": "Вещь"
      },
      {
        "id": "v23",
        "word": "Woman",
        "transcription": "[уу́мэн]",
        "translation": "Женщина"
      },
      {
        "id": "v24",
        "word": "Life",
        "transcription": "[лайф]",
        "translation": "Жизнь"
      },
      {
        "id": "v25",
        "word": "Child",
        "transcription": "[чайлд]",
        "translation": "Ребенок"
      },
      {
        "id": "v26",
        "word": "World",
        "transcription": "[уо́рлд]",
        "translation": "Мир"
      },
      {
        "id": "v27",
        "word": "School",
        "transcription": "[скул]",
        "translation": "Школа"
      },
      {
        "id": "v28",
        "word": "State",
        "transcription": "[стэйт]",
        "translation": "Состояние / Штат"
      },
      {
        "id": "v29",
        "word": "Family",
        "transcription": "[фэ́мили]",
        "translation": "Семья"
      },
      {
        "id": "v30",
        "word": "Student",
        "transcription": "[стью́дэнт]",
        "translation": "Студент"
      }
    ],
    "quiz": [
      {
        "id": "q4_1",
        "question": "I ___ like fish.",
        "options": [
          "don't",
          "doesn't",
          "not"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q4_2",
        "question": "She ___ speak French.",
        "options": [
          "don't",
          "doesn't",
          "not"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q4_3",
        "question": "They ___ know the answer.",
        "options": [
          "don't",
          "doesn't",
          "aren't"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q4_4",
        "question": "He doesn't ___ tea.",
        "options": [
          "likes",
          "like",
          "liking"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q4_5",
        "question": "We ___ go to school on Sunday.",
        "options": [
          "doesn't",
          "not",
          "don't"
        ],
        "correctAnswerIndex": 2
      }
    ],
    "moduleId": 1
  },
  {
    "id": "l5",
    "title": "Урок 5: Множественное число существительных",
    "theory": [
      "Один кот — cat. Много котов — cats! 🐰 Просто добавляем \"-s\".",
      "Если слово заканчивается на шипящую (-s, -ss, -sh, -ch, -x, -o), добавляем \"-es\": bus -> buses, tomato -> tomatoes.",
      "Есть исключения! Man (мужчина) - Men (мужчины). Woman - Women. Child (ребенок) - Children. Foot - Feet.",
      "Запомни эти исключения, они встречаются очень часто!"
    ],
    "words": [
      {
        "id": "v31",
        "word": "Group",
        "transcription": "[груп]",
        "translation": "Группа"
      },
      {
        "id": "v32",
        "word": "Country",
        "transcription": "[ка́нтри]",
        "translation": "Страна"
      },
      {
        "id": "v33",
        "word": "Problem",
        "transcription": "[про́блем]",
        "translation": "Проблема"
      },
      {
        "id": "v34",
        "word": "Hand",
        "transcription": "[хэнд]",
        "translation": "Рука"
      },
      {
        "id": "v35",
        "word": "Part",
        "transcription": "[парт]",
        "translation": "Часть"
      },
      {
        "id": "v36",
        "word": "Place",
        "transcription": "[плэйс]",
        "translation": "Место"
      },
      {
        "id": "v37",
        "word": "Case",
        "transcription": "[кэйс]",
        "translation": "Случай"
      },
      {
        "id": "v38",
        "word": "Week",
        "transcription": "[уи́к]",
        "translation": "Неделя"
      },
      {
        "id": "v39",
        "word": "Company",
        "transcription": "[ка́мпани]",
        "translation": "Компания"
      },
      {
        "id": "v40",
        "word": "System",
        "transcription": "[си́стэм]",
        "translation": "Система"
      }
    ],
    "quiz": [
      {
        "id": "q5_1",
        "question": "Множественное от \"apple\"",
        "options": [
          "apples",
          "appless",
          "applies"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q5_2",
        "question": "Множественное от \"child\"",
        "options": [
          "childs",
          "childrens",
          "children"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q5_3",
        "question": "Множественное от \"man\"",
        "options": [
          "mans",
          "men",
          "mens"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q5_4",
        "question": "Множественное от \"box\"",
        "options": [
          "boxs",
          "boxes",
          "boxies"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q5_5",
        "question": "Множественное от \"woman\"",
        "options": [
          "womens",
          "womans",
          "women"
        ],
        "correctAnswerIndex": 2
      }
    ],
    "moduleId": 1
  },
  {
    "id": "l6",
    "title": "Урок 6: Артикли A, An, The",
    "theory": [
      "Артикли — это боль, но мы справимся! 🐰 \"A\" и \"An\" означают \"один какой-то\".",
      "Мы ставим \"A\" перед согласным звуком (a car), и \"An\" перед гласным звуком (an apple) для красоты звучания.",
      "Используем их только с исчисляемыми предметами в единственном числе. \"Дай мне (какое-нибудь) яблоко\".",
      "Артикль \"The\" — это конкретика. \"Дай мне ТО САМОЕ яблоко\" (the apple). Можно использовать с чем угодно."
    ],
    "words": [
      {
        "id": "v41",
        "word": "Program",
        "transcription": "[про́грэм]",
        "translation": "Программа"
      },
      {
        "id": "v42",
        "word": "Question",
        "transcription": "[квэ́счэн]",
        "translation": "Вопрос"
      },
      {
        "id": "v43",
        "word": "Work",
        "transcription": "[уо́рк]",
        "translation": "Работа"
      },
      {
        "id": "v44",
        "word": "Government",
        "transcription": "[га́вернмэнт]",
        "translation": "Правительство"
      },
      {
        "id": "v45",
        "word": "Number",
        "transcription": "[на́мбэр]",
        "translation": "Число"
      },
      {
        "id": "v46",
        "word": "Night",
        "transcription": "[найт]",
        "translation": "Ночь"
      },
      {
        "id": "v47",
        "word": "Point",
        "transcription": "[пойнт]",
        "translation": "Точка / Суть"
      },
      {
        "id": "v48",
        "word": "Home",
        "transcription": "[хоум]",
        "translation": "Дом"
      },
      {
        "id": "v49",
        "word": "Water",
        "transcription": "[уо́тэр]",
        "translation": "Вода"
      },
      {
        "id": "v50",
        "word": "Room",
        "transcription": "[рум]",
        "translation": "Комната"
      }
    ],
    "quiz": [
      {
        "id": "q6_1",
        "question": "I see ___ cat. The cat is black.",
        "options": [
          "a",
          "an",
          "the"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q6_2",
        "question": "I want ___ orange.",
        "options": [
          "a",
          "an",
          "the"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q6_3",
        "question": "Look at ___ sun!",
        "options": [
          "a",
          "an",
          "the"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q6_4",
        "question": "She is ___ doctor.",
        "options": [
          "a",
          "an",
          "the"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q6_5",
        "question": "I live in ___ house. ___ house is old.",
        "options": [
          "The / A",
          "A / The",
          "An / The"
        ],
        "correctAnswerIndex": 1
      }
    ],
    "moduleId": 1
  },
  {
    "id": "l7",
    "title": "Урок 7: Глагол \"to have\" (иметь)",
    "theory": [
      "У меня что-то есть! 🐰 По-английски это глагол \"to have\".",
      "Для I, You, We, They мы говорим \"have\". \"I have a car\".",
      "А вот для He, She, It форма меняется на \"has\". \"She has a dog\".",
      "В британском английском часто добавляют слово \"got\": \"I have got a car\", смысл тот же самый."
    ],
    "words": [
      {
        "id": "v51",
        "word": "Mother",
        "transcription": "[ма́зэр]",
        "translation": "Мать"
      },
      {
        "id": "v52",
        "word": "Area",
        "transcription": "[э́риа]",
        "translation": "Область"
      },
      {
        "id": "v53",
        "word": "Money",
        "transcription": "[ма́ни]",
        "translation": "Деньги"
      },
      {
        "id": "v54",
        "word": "Story",
        "transcription": "[сто́ри]",
        "translation": "История"
      },
      {
        "id": "v55",
        "word": "Fact",
        "transcription": "[фэкт]",
        "translation": "Факт"
      },
      {
        "id": "v56",
        "word": "Month",
        "transcription": "[манс]",
        "translation": "Месяц"
      },
      {
        "id": "v57",
        "word": "Lot",
        "transcription": "[лат]",
        "translation": "Много"
      },
      {
        "id": "v58",
        "word": "Right",
        "transcription": "[райт]",
        "translation": "Право / Правильный"
      },
      {
        "id": "v59",
        "word": "Study",
        "transcription": "[ста́ди]",
        "translation": "Изучать"
      },
      {
        "id": "v60",
        "word": "Book",
        "transcription": "[бук]",
        "translation": "Книга"
      }
    ],
    "quiz": [
      {
        "id": "q7_1",
        "question": "I ___ two sisters.",
        "options": [
          "has",
          "have",
          "having"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q7_2",
        "question": "He ___ a big house.",
        "options": [
          "has",
          "have",
          "is"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q7_3",
        "question": "They ___ a problem.",
        "options": [
          "have",
          "has",
          "having"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q7_4",
        "question": "She ___ beautiful eyes.",
        "options": [
          "have",
          "having",
          "has"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q7_5",
        "question": "We ___ a lot of time.",
        "options": [
          "have",
          "has",
          "are"
        ],
        "correctAnswerIndex": 0
      }
    ],
    "moduleId": 1
  },
  {
    "id": "l8",
    "title": "Урок 8: Указательные местоимения",
    "theory": [
      "Как сказать \"этот\" или \"тот\"? 🐰 Это легко!",
      "This — этот (один, рядом). That — тот (один, далеко).",
      "These — эти (много, рядом). Those — те (много, далеко).",
      "Например: This is my book (Она у меня в руке). That is a bird (Она летит далеко в небе)."
    ],
    "words": [
      {
        "id": "v61",
        "word": "Eye",
        "transcription": "[ай]",
        "translation": "Глаз"
      },
      {
        "id": "v62",
        "word": "Job",
        "transcription": "[джаб]",
        "translation": "Работа (профессия)"
      },
      {
        "id": "v63",
        "word": "Word",
        "transcription": "[уо́рд]",
        "translation": "Слово"
      },
      {
        "id": "v64",
        "word": "Business",
        "transcription": "[би́знас]",
        "translation": "Бизнес"
      },
      {
        "id": "v65",
        "word": "Issue",
        "transcription": "[и́шу]",
        "translation": "Вопрос (проблема)"
      },
      {
        "id": "v66",
        "word": "Side",
        "transcription": "[сайд]",
        "translation": "Сторона"
      },
      {
        "id": "v67",
        "word": "Kind",
        "transcription": "[кайнд]",
        "translation": "Вид / Добрый"
      },
      {
        "id": "v68",
        "word": "Head",
        "transcription": "[хёд]",
        "translation": "Голова"
      },
      {
        "id": "v69",
        "word": "House",
        "transcription": "[хаус]",
        "translation": "Дом (здание)"
      },
      {
        "id": "v70",
        "word": "Service",
        "transcription": "[сэ́вас]",
        "translation": "Служба"
      }
    ],
    "quiz": [
      {
        "id": "q8_1",
        "question": "___ is my pen (в руке).",
        "options": [
          "That",
          "This",
          "These"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q8_2",
        "question": "Look at ___ stars (далеко).",
        "options": [
          "these",
          "those",
          "this"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q8_3",
        "question": "___ shoes are nice (на моих ногах).",
        "options": [
          "These",
          "Those",
          "That"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q8_4",
        "question": "___ house over there is old (вдалеке).",
        "options": [
          "This",
          "That",
          "These"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q8_5",
        "question": "I like ___ apples (тут на столе).",
        "options": [
          "those",
          "that",
          "these"
        ],
        "correctAnswerIndex": 2
      }
    ],
    "moduleId": 1
  },
  {
    "id": "l9",
    "title": "Урок 9: Present Continuous (Настоящее продолженное)",
    "theory": [
      "Действие происходит ПРЯМО СЕЙЧАС! 🐰 Это время Present Continuous.",
      "Оно строится так: глагол \"to be\" (am/is/are) + глагол с окончанием -ing.",
      "Например: \"I am reading a book\" (Я читаю книгу прямо сейчас).",
      "Сравни: \"I read every day\" (Present Simple, регулярно) и \"I am reading now\" (Present Continuous, сейчас)."
    ],
    "words": [
      {
        "id": "v71",
        "word": "Friend",
        "transcription": "[фрэнд]",
        "translation": "Друг"
      },
      {
        "id": "v72",
        "word": "Father",
        "transcription": "[фа́зэр]",
        "translation": "Отец"
      },
      {
        "id": "v73",
        "word": "Power",
        "transcription": "[па́уэ]",
        "translation": "Сила / Власть"
      },
      {
        "id": "v74",
        "word": "Hour",
        "transcription": "[а́уэ]",
        "translation": "Час"
      },
      {
        "id": "v75",
        "word": "Game",
        "transcription": "[гэйм]",
        "translation": "Игра"
      },
      {
        "id": "v76",
        "word": "Line",
        "transcription": "[лайн]",
        "translation": "Линия"
      },
      {
        "id": "v77",
        "word": "End",
        "transcription": "[энд]",
        "translation": "Конец"
      },
      {
        "id": "v78",
        "word": "Member",
        "transcription": "[мэ́мбэр]",
        "translation": "Член (группы)"
      },
      {
        "id": "v79",
        "word": "Law",
        "transcription": "[ло]",
        "translation": "Закон"
      },
      {
        "id": "v80",
        "word": "Car",
        "transcription": "[кар]",
        "translation": "Машина"
      }
    ],
    "quiz": [
      {
        "id": "q9_1",
        "question": "I ___ TV now.",
        "options": [
          "watch",
          "am watching",
          "is watching"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q9_2",
        "question": "He ___ currently working.",
        "options": [
          "is",
          "are",
          "am"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q9_3",
        "question": "They are ___ football.",
        "options": [
          "play",
          "playing",
          "plays"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q9_4",
        "question": "She ___ sleeping right now.",
        "options": [
          "are",
          "am",
          "is"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q9_5",
        "question": "We ___ learning English.",
        "options": [
          "are",
          "is",
          "am"
        ],
        "correctAnswerIndex": 0
      }
    ],
    "moduleId": 1
  },
  {
    "id": "l10",
    "title": "Урок 10: Предлоги места (in, on, at)",
    "theory": [
      "Где мы? 🐰 Давайте разберемся с предлогами.",
      "IN — внутри чего-то (in a box, in London, in a room).",
      "ON — на поверхности (on the table, on the floor).",
      "AT — в конкретной точке, учреждении или на мероприятии (at school, at home, at the bus stop).",
      "Запомни: I am IN the building, but I am AT work."
    ],
    "words": [
      {
        "id": "v81",
        "word": "City",
        "transcription": "[си́ти]",
        "translation": "Город"
      },
      {
        "id": "v82",
        "word": "Community",
        "transcription": "[комью́нити]",
        "translation": "Сообщество"
      },
      {
        "id": "v83",
        "word": "Name",
        "transcription": "[нэйм]",
        "translation": "Имя"
      },
      {
        "id": "v84",
        "word": "President",
        "transcription": "[прэ́зидант]",
        "translation": "Президент"
      },
      {
        "id": "v85",
        "word": "Team",
        "transcription": "[тим]",
        "translation": "Команда"
      },
      {
        "id": "v86",
        "word": "Minute",
        "transcription": "[ми́нат]",
        "translation": "Минута"
      },
      {
        "id": "v87",
        "word": "Idea",
        "transcription": "[айди́а]",
        "translation": "Идея"
      },
      {
        "id": "v88",
        "word": "Kid",
        "transcription": "[кид]",
        "translation": "Ребенок (разг.)"
      },
      {
        "id": "v89",
        "word": "Body",
        "transcription": "[ба́ди]",
        "translation": "Тело"
      },
      {
        "id": "v90",
        "word": "Information",
        "transcription": "[информэ́йшн]",
        "translation": "Информация"
      }
    ],
    "quiz": [
      {
        "id": "q10_1",
        "question": "The book is ___ the table.",
        "options": [
          "in",
          "on",
          "at"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q10_2",
        "question": "I live ___ New York.",
        "options": [
          "in",
          "on",
          "at"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q10_3",
        "question": "She is waiting ___ the bus stop.",
        "options": [
          "in",
          "on",
          "at"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q10_4",
        "question": "There is a spider ___ the wall!",
        "options": [
          "in",
          "on",
          "at"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q10_5",
        "question": "He is currently ___ home.",
        "options": [
          "in",
          "on",
          "at"
        ],
        "correctAnswerIndex": 2
      }
    ],
    "moduleId": 1
  },
  {
    "id": "l11",
    "title": "Урок 11: Past Simple (Прошедшее простое)",
    "theory": [
      "Погружаемся в прошлое! 🐰 Действие произошло и закончилось.",
      "Для правильных глаголов добавляем окончание \"-ed\": work -> worked, play -> played.",
      "Но в английском много неправильных глаголов. Их нужно учить наизусть! Go -> went, see -> saw, buy -> bought.",
      "Например: \"I played tennis yesterday\" или \"I went to school\"."
    ],
    "words": [
      {
        "id": "v91",
        "word": "Back",
        "transcription": "[бэк]",
        "translation": "Спина / Назад"
      },
      {
        "id": "v92",
        "word": "Parent",
        "transcription": "[пэ́рэнт]",
        "translation": "Родитель"
      },
      {
        "id": "v93",
        "word": "Face",
        "transcription": "[фэйс]",
        "translation": "Лицо"
      },
      {
        "id": "v94",
        "word": "Others",
        "transcription": "[а́зэрз]",
        "translation": "Другие"
      },
      {
        "id": "v95",
        "word": "Level",
        "transcription": "[лэ́вэл]",
        "translation": "Уровень"
      },
      {
        "id": "v96",
        "word": "Office",
        "transcription": "[о́фис]",
        "translation": "Офис"
      },
      {
        "id": "v97",
        "word": "Door",
        "transcription": "[дор]",
        "translation": "Дверь"
      },
      {
        "id": "v98",
        "word": "Health",
        "transcription": "[хэлс]",
        "translation": "Здоровье"
      },
      {
        "id": "v99",
        "word": "Person",
        "transcription": "[пё́рсн]",
        "translation": "Человек (личность)"
      },
      {
        "id": "v100",
        "word": "Art",
        "transcription": "[арт]",
        "translation": "Искусство"
      }
    ],
    "quiz": [
      {
        "id": "q11_1",
        "question": "He ___ TV yesterday.",
        "options": [
          "watch",
          "watched",
          "watching"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q11_2",
        "question": "I ___ to London last year.",
        "options": [
          "go",
          "went",
          "goed"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q11_3",
        "question": "She ___ a new car.",
        "options": [
          "buy",
          "buyed",
          "bought"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q11_4",
        "question": "They ___ football on Sunday.",
        "options": [
          "play",
          "played",
          "playing"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q11_5",
        "question": "We ___ him yesterday.",
        "options": [
          "see",
          "saw",
          "seed"
        ],
        "correctAnswerIndex": 1
      }
    ],
    "moduleId": 2
  },
  {
    "id": "l12",
    "title": "Урок 12: Вопросы в Past Simple",
    "theory": [
      "Как задать вопрос о прошлом? 🐰 На помощь приходит супергерой DID (прошлая форма от do).",
      "DID ставится в начало предложения, и он забирает всю \"прошлость\" на себя!",
      "Поэтому основной глагол возвращается в начальную форму.",
      "Пример: \"You went to school\" -> \"DID you GO to school?\". Не \"did you went\"!"
    ],
    "words": [
      {
        "id": "v101",
        "word": "War",
        "transcription": "[уо́р]",
        "translation": "Война"
      },
      {
        "id": "v102",
        "word": "History",
        "transcription": "[хи́стори]",
        "translation": "История (наука)"
      },
      {
        "id": "v103",
        "word": "Party",
        "transcription": "[па́рти]",
        "translation": "Вечеринка / Партия"
      },
      {
        "id": "v104",
        "word": "Result",
        "transcription": "[риза́лт]",
        "translation": "Результат"
      },
      {
        "id": "v105",
        "word": "Change",
        "transcription": "[чэйндж]",
        "translation": "Изменение"
      },
      {
        "id": "v106",
        "word": "Morning",
        "transcription": "[мо́рнинг]",
        "translation": "Утро"
      },
      {
        "id": "v107",
        "word": "Reason",
        "transcription": "[ри́зн]",
        "translation": "Причина"
      },
      {
        "id": "v108",
        "word": "Research",
        "transcription": "[рисё́ч]",
        "translation": "Исследование"
      },
      {
        "id": "v109",
        "word": "Girl",
        "transcription": "[гёл]",
        "translation": "Девочка"
      },
      {
        "id": "v110",
        "word": "Guy",
        "transcription": "[гай]",
        "translation": "Парень"
      }
    ],
    "quiz": [
      {
        "id": "q12_1",
        "question": "___ you watch the movie?",
        "options": [
          "Do",
          "Did",
          "Does"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q12_2",
        "question": "Did he ___ to the party?",
        "options": [
          "went",
          "goes",
          "go"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q12_3",
        "question": "Where did you ___?",
        "options": [
          "live",
          "lived",
          "living"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q12_4",
        "question": "___ they buy a car?",
        "options": [
          "Did",
          "Do",
          "Are"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q12_5",
        "question": "Did she ___ the homework?",
        "options": [
          "did",
          "do",
          "does"
        ],
        "correctAnswerIndex": 1
      }
    ],
    "moduleId": 2
  },
  {
    "id": "l13",
    "title": "Урок 13: Future Simple (Будущее время)",
    "theory": [
      "Заглянем в будущее! 🐰 Это самое легкое время.",
      "Просто ставим слово \"WILL\" перед глаголом. \"I will go\" (Я пойду).",
      "В отрицании: \"will not\", а сокращенно — \"won't\". \"I won't go\" (Я не пойду).",
      "Используй Future Simple для спонтанных решений, обещаний и прогнозов."
    ],
    "words": [
      {
        "id": "v111",
        "word": "Food",
        "transcription": "[фуд]",
        "translation": "Еда"
      },
      {
        "id": "v112",
        "word": "Moment",
        "transcription": "[мо́умант]",
        "translation": "Момент"
      },
      {
        "id": "v113",
        "word": "Air",
        "transcription": "[эр]",
        "translation": "Воздух"
      },
      {
        "id": "v114",
        "word": "Teacher",
        "transcription": "[ти́чэр]",
        "translation": "Учитель"
      },
      {
        "id": "v115",
        "word": "Force",
        "transcription": "[форс]",
        "translation": "Сила (физическая)"
      },
      {
        "id": "v116",
        "word": "Education",
        "transcription": "[эдюкэ́йшн]",
        "translation": "Образование"
      },
      {
        "id": "v117",
        "word": "Good",
        "transcription": "[гуд]",
        "translation": "Хороший"
      },
      {
        "id": "v118",
        "word": "New",
        "transcription": "[нью]",
        "translation": "Новый"
      },
      {
        "id": "v119",
        "word": "First",
        "transcription": "[фаст]",
        "translation": "Первый"
      },
      {
        "id": "v120",
        "word": "Last",
        "transcription": "[лэст]",
        "translation": "Последний"
      }
    ],
    "quiz": [
      {
        "id": "q13_1",
        "question": "I ___ help you!",
        "options": [
          "will",
          "am",
          "do"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q13_2",
        "question": "She ___ be here tomorrow.",
        "options": [
          "wills",
          "will",
          "is"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q13_3",
        "question": "They ___ come to the party.",
        "options": [
          "don't",
          "won't",
          "willn't"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q13_4",
        "question": "___ you open the door?",
        "options": [
          "Will",
          "Are",
          "Do"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q13_5",
        "question": "I think it ___ rain.",
        "options": [
          "will",
          "is",
          "does"
        ],
        "correctAnswerIndex": 0
      }
    ],
    "moduleId": 2
  },
  {
    "id": "l14",
    "title": "Урок 14: Конструкция \"going to\"",
    "theory": [
      "А если у тебя есть четкий план на будущее? 🐰 Используй конструкцию \"be going to\" (собираться что-то сделать).",
      "Формула: am/is/are + going to + глагол.",
      "Например: \"I am going to visit my granny\" (Я собираюсь навестить бабулю - у меня куплены билеты).",
      "Сравни: \"I will call him\" (спонтанно решил) и \"I am going to call him\" (спланировал заранее)."
    ],
    "words": [
      {
        "id": "v121",
        "word": "Long",
        "transcription": "[лонг]",
        "translation": "Длинный"
      },
      {
        "id": "v122",
        "word": "Great",
        "transcription": "[грэйт]",
        "translation": "Великий / Отличный"
      },
      {
        "id": "v123",
        "word": "Little",
        "transcription": "[литл]",
        "translation": "Маленький"
      },
      {
        "id": "v124",
        "word": "Own",
        "transcription": "[оун]",
        "translation": "Собственный"
      },
      {
        "id": "v125",
        "word": "Other",
        "transcription": "[а́зэр]",
        "translation": "Другой"
      },
      {
        "id": "v126",
        "word": "Old",
        "transcription": "[оулд]",
        "translation": "Старый"
      },
      {
        "id": "v127",
        "word": "Right",
        "transcription": "[райт]",
        "translation": "Правый"
      },
      {
        "id": "v128",
        "word": "Big",
        "transcription": "[биг]",
        "translation": "Большой"
      },
      {
        "id": "v129",
        "word": "High",
        "transcription": "[хай]",
        "translation": "Высокий"
      },
      {
        "id": "v130",
        "word": "Different",
        "transcription": "[ди́ферэнт]",
        "translation": "Различный"
      }
    ],
    "quiz": [
      {
        "id": "q14_1",
        "question": "I am ___ to buy a car.",
        "options": [
          "go",
          "going",
          "will"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q14_2",
        "question": "He ___ going to sleep.",
        "options": [
          "is",
          "are",
          "am"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q14_3",
        "question": "They ___ going to win.",
        "options": [
          "is",
          "am",
          "are"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q14_4",
        "question": "Are you going to ___ ?",
        "options": [
          "swimming",
          "swam",
          "swim"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q14_5",
        "question": "She is going ___ read a book.",
        "options": [
          "for",
          "to",
          "at"
        ],
        "correctAnswerIndex": 1
      }
    ],
    "moduleId": 2
  },
  {
    "id": "l15",
    "title": "Урок 15: Модальный глагол CAN",
    "theory": [
      "Модальные глаголы — особые! 🐰 Глагол CAN означает \"могу, умею\".",
      "Особенности: 1. После него не ставится \"to\" (I can swim).",
      "2. К нему никогда не добавляется \"-s\" (He can swim).",
      "3. Для вопроса он сам выходит вперед (Can you swim?), а для отрицания берет частицу not (cannot или can't)."
    ],
    "words": [
      {
        "id": "v131",
        "word": "Small",
        "transcription": "[смол]",
        "translation": "Маленький"
      },
      {
        "id": "v132",
        "word": "Large",
        "transcription": "[лардж]",
        "translation": "Крупный"
      },
      {
        "id": "v133",
        "word": "Next",
        "transcription": "[нэкст]",
        "translation": "Следующий"
      },
      {
        "id": "v134",
        "word": "Early",
        "transcription": "[э́ли]",
        "translation": "Ранний"
      },
      {
        "id": "v135",
        "word": "Young",
        "transcription": "[янг]",
        "translation": "Молодой"
      },
      {
        "id": "v136",
        "word": "Important",
        "transcription": "[импо́ртэнт]",
        "translation": "Важный"
      },
      {
        "id": "v137",
        "word": "Few",
        "transcription": "[фю]",
        "translation": "Несколько"
      },
      {
        "id": "v138",
        "word": "Public",
        "transcription": "[па́блик]",
        "translation": "Общественный"
      },
      {
        "id": "v139",
        "word": "Bad",
        "transcription": "[бэд]",
        "translation": "Плохой"
      },
      {
        "id": "v140",
        "word": "Same",
        "transcription": "[сэйм]",
        "translation": "Тот же самый"
      }
    ],
    "quiz": [
      {
        "id": "q15_1",
        "question": "I can ___ English.",
        "options": [
          "to speak",
          "speak",
          "speaking"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q15_2",
        "question": "___ you help me?",
        "options": [
          "Can",
          "Do",
          "Are"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q15_3",
        "question": "He can ___ very fast.",
        "options": [
          "runs",
          "running",
          "run"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q15_4",
        "question": "She ___ play the piano.",
        "options": [
          "can't",
          "don't can",
          "doesn't can"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q15_5",
        "question": "They can ___ us.",
        "options": [
          "to see",
          "sees",
          "see"
        ],
        "correctAnswerIndex": 2
      }
    ],
    "moduleId": 2
  },
  {
    "id": "l16",
    "title": "Урок 16: Модальные глаголы MUST и SHOULD",
    "theory": [
      "Продолжаем с модальными! 🐰 MUST означает жесткое \"должен, обязан\".",
      "SHOULD означает совет — \"следует\".",
      "Как и у CAN, после них нет \"to\" и они не меняются по лицам.",
      "Пример: \"You must stop!\" (Ты обязан остановиться). \"You should sleep\" (Тебе следует поспать, совет)."
    ],
    "words": [
      {
        "id": "v1",
        "word": "Always",
        "transcription": "[о́лвэйз]",
        "translation": "Всегда"
      },
      {
        "id": "v2",
        "word": "Never",
        "transcription": "[нэ́вэ]",
        "translation": "Никогда"
      },
      {
        "id": "v3",
        "word": "Sometimes",
        "transcription": "[самта́ймз]",
        "translation": "Иногда"
      },
      {
        "id": "v4",
        "word": "Often",
        "transcription": "[о́фн]",
        "translation": "Часто"
      },
      {
        "id": "v5",
        "word": "Usually",
        "transcription": "[ю́жуали]",
        "translation": "Обычно"
      },
      {
        "id": "v6",
        "word": "Seldom",
        "transcription": "[сэ́лдом]",
        "translation": "Редко"
      },
      {
        "id": "v7",
        "word": "Every day",
        "transcription": "[э́ври дэй]",
        "translation": "Каждый день"
      },
      {
        "id": "v8",
        "word": "Now",
        "transcription": "[нау]",
        "translation": "Сейчас"
      },
      {
        "id": "v9",
        "word": "Today",
        "transcription": "[тадэ́й]",
        "translation": "Сегодня"
      },
      {
        "id": "v10",
        "word": "Tomorrow",
        "transcription": "[тумо́роу]",
        "translation": "Завтра"
      }
    ],
    "quiz": [
      {
        "id": "q16_1",
        "question": "You ___ brush your teeth (совет).",
        "options": [
          "must",
          "should",
          "can"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q16_2",
        "question": "You ___ stop at a red light (закон).",
        "options": [
          "should",
          "must",
          "can"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q16_3",
        "question": "He should ___ a doctor.",
        "options": [
          "to see",
          "sees",
          "see"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q16_4",
        "question": "I must ___ now.",
        "options": [
          "going",
          "to go",
          "go"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q16_5",
        "question": "___ I open the window? (Следует ли мне?)",
        "options": [
          "Must",
          "Should",
          "Do"
        ],
        "correctAnswerIndex": 1
      }
    ],
    "moduleId": 2
  },
  {
    "id": "l17",
    "title": "Урок 17: Present Perfect (Настоящее совершенное)",
    "theory": [
      "Ох, это сложное время! 🐰 Present Perfect — это связь прошлого и настоящего.",
      "Действие произошло в прошлом, но РЕЗУЛЬТАТ важен прямо сейчас.",
      "Формула: have/has + глагол в 3-й форме (V3 или -ed).",
      "Например: \"I have lost my keys\" (Я потерял ключи — факт из прошлого, но результат: я не могу попасть в дом сейчас)."
    ],
    "words": [
      {
        "id": "v11",
        "word": "Yesterday",
        "transcription": "[е́стэдэй]",
        "translation": "Вчера"
      },
      {
        "id": "v12",
        "word": "Soon",
        "transcription": "[сун]",
        "translation": "Скоро"
      },
      {
        "id": "v13",
        "word": "Already",
        "transcription": "[олрэ́ди]",
        "translation": "Уже"
      },
      {
        "id": "v14",
        "word": "Yet",
        "transcription": "[ет]",
        "translation": "Еще (не)"
      },
      {
        "id": "v15",
        "word": "Just",
        "transcription": "[джаст]",
        "translation": "Только что"
      },
      {
        "id": "v16",
        "word": "Time",
        "transcription": "[тайм]",
        "translation": "Время"
      },
      {
        "id": "v17",
        "word": "Year",
        "transcription": "[йе́а]",
        "translation": "Год"
      },
      {
        "id": "v18",
        "word": "People",
        "transcription": "[пипл]",
        "translation": "Люди"
      },
      {
        "id": "v19",
        "word": "Way",
        "transcription": "[уэ́й]",
        "translation": "Путь / Способ"
      },
      {
        "id": "v20",
        "word": "Day",
        "transcription": "[дэй]",
        "translation": "День"
      }
    ],
    "quiz": [
      {
        "id": "q17_1",
        "question": "I ___ finished my work.",
        "options": [
          "have",
          "has",
          "did"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q17_2",
        "question": "She has ___ a new car.",
        "options": [
          "buy",
          "bought",
          "buyed"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q17_3",
        "question": "We have ___ to Paris.",
        "options": [
          "go",
          "went",
          "been"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q17_4",
        "question": "He ___ broken his leg.",
        "options": [
          "have",
          "has",
          "is"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q17_5",
        "question": "Have you ever ___ sushi?",
        "options": [
          "eat",
          "ate",
          "eaten"
        ],
        "correctAnswerIndex": 2
      }
    ],
    "moduleId": 2
  },
  {
    "id": "l18",
    "title": "Урок 18: Сравнительные прилагательные",
    "theory": [
      "Давай сравнивать вещи! 🐰 Кто быстрее, выше, сильнее?",
      "Для коротких слов добавляем \"-er\": fast -> faster (быстрее), tall -> taller (выше).",
      "Для длинных слов используем \"more\": beautiful -> more beautiful (более красивый).",
      "Слово \"чем\" по-английски будет \"than\". \"He is taller THAN me\"."
    ],
    "words": [
      {
        "id": "v21",
        "word": "Man",
        "transcription": "[мэн]",
        "translation": "Мужчина / Человек"
      },
      {
        "id": "v22",
        "word": "Thing",
        "transcription": "[синг]",
        "translation": "Вещь"
      },
      {
        "id": "v23",
        "word": "Woman",
        "transcription": "[уу́мэн]",
        "translation": "Женщина"
      },
      {
        "id": "v24",
        "word": "Life",
        "transcription": "[лайф]",
        "translation": "Жизнь"
      },
      {
        "id": "v25",
        "word": "Child",
        "transcription": "[чайлд]",
        "translation": "Ребенок"
      },
      {
        "id": "v26",
        "word": "World",
        "transcription": "[уо́рлд]",
        "translation": "Мир"
      },
      {
        "id": "v27",
        "word": "School",
        "transcription": "[скул]",
        "translation": "Школа"
      },
      {
        "id": "v28",
        "word": "State",
        "transcription": "[стэйт]",
        "translation": "Состояние / Штат"
      },
      {
        "id": "v29",
        "word": "Family",
        "transcription": "[фэ́мили]",
        "translation": "Семья"
      },
      {
        "id": "v30",
        "word": "Student",
        "transcription": "[стью́дэнт]",
        "translation": "Студент"
      }
    ],
    "quiz": [
      {
        "id": "q18_1",
        "question": "My car is ___ than yours.",
        "options": [
          "fast",
          "faster",
          "more fast"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q18_2",
        "question": "This book is ___ interesting than that one.",
        "options": [
          "more",
          "most",
          "much"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q18_3",
        "question": "He is older ___ me.",
        "options": [
          "then",
          "than",
          "that"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q18_4",
        "question": "A cat is ___ than an elephant.",
        "options": [
          "small",
          "smaller",
          "more small"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q18_5",
        "question": "English is ___ than Chinese.",
        "options": [
          "easier",
          "easyer",
          "more easy"
        ],
        "correctAnswerIndex": 0
      }
    ],
    "moduleId": 2
  },
  {
    "id": "l19",
    "title": "Урок 19: Превосходная степень прилагательных",
    "theory": [
      "Самый-самый! 🐰",
      "Для коротких слов добавляем \"-est\" и артикль \"the\": fast -> the fastest (самый быстрый).",
      "Для длинных слов: \"the most\": beautiful -> the most beautiful (самый красивый).",
      "Исключения: good -> better -> THE BEST (лучший). bad -> worse -> THE WORST (худший)."
    ],
    "words": [
      {
        "id": "v31",
        "word": "Group",
        "transcription": "[груп]",
        "translation": "Группа"
      },
      {
        "id": "v32",
        "word": "Country",
        "transcription": "[ка́нтри]",
        "translation": "Страна"
      },
      {
        "id": "v33",
        "word": "Problem",
        "transcription": "[про́блем]",
        "translation": "Проблема"
      },
      {
        "id": "v34",
        "word": "Hand",
        "transcription": "[хэнд]",
        "translation": "Рука"
      },
      {
        "id": "v35",
        "word": "Part",
        "transcription": "[парт]",
        "translation": "Часть"
      },
      {
        "id": "v36",
        "word": "Place",
        "transcription": "[плэйс]",
        "translation": "Место"
      },
      {
        "id": "v37",
        "word": "Case",
        "transcription": "[кэйс]",
        "translation": "Случай"
      },
      {
        "id": "v38",
        "word": "Week",
        "transcription": "[уи́к]",
        "translation": "Неделя"
      },
      {
        "id": "v39",
        "word": "Company",
        "transcription": "[ка́мпани]",
        "translation": "Компания"
      },
      {
        "id": "v40",
        "word": "System",
        "transcription": "[си́стэм]",
        "translation": "Система"
      }
    ],
    "quiz": [
      {
        "id": "q19_1",
        "question": "He is ___ student in the class.",
        "options": [
          "the best",
          "the goodest",
          "better"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q19_2",
        "question": "This is the ___ movie ever.",
        "options": [
          "more bad",
          "worse",
          "worst"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q19_3",
        "question": "Cheetah is the ___ animal.",
        "options": [
          "fast",
          "faster",
          "fastest"
        ],
        "correctAnswerIndex": 2
      },
      {
        "id": "q19_4",
        "question": "She is the ___ beautiful girl.",
        "options": [
          "most",
          "more",
          "much"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q19_5",
        "question": "Mount Everest is the ___ mountain.",
        "options": [
          "highest",
          "high",
          "higher"
        ],
        "correctAnswerIndex": 0
      }
    ],
    "moduleId": 2
  },
  {
    "id": "l20",
    "title": "Урок 20: Условные предложения (First Conditional)",
    "theory": [
      "А что если?.. 🐰 Если погода будет хорошая, мы пойдем гулять.",
      "Это First Conditional (реальное условие в будущем).",
      "В части с \"IF\" (если) мы ВСЕГДА используем Present Simple, даже если говорим о будущем!",
      "В главной части используем Future (will).",
      "Формула: If + Present Simple, [подлежащее] + will + глагол."
    ],
    "words": [
      {
        "id": "v41",
        "word": "Program",
        "transcription": "[про́грэм]",
        "translation": "Программа"
      },
      {
        "id": "v42",
        "word": "Question",
        "transcription": "[квэ́счэн]",
        "translation": "Вопрос"
      },
      {
        "id": "v43",
        "word": "Work",
        "transcription": "[уо́рк]",
        "translation": "Работа"
      },
      {
        "id": "v44",
        "word": "Government",
        "transcription": "[га́вернмэнт]",
        "translation": "Правительство"
      },
      {
        "id": "v45",
        "word": "Number",
        "transcription": "[на́мбэр]",
        "translation": "Число"
      },
      {
        "id": "v46",
        "word": "Night",
        "transcription": "[найт]",
        "translation": "Ночь"
      },
      {
        "id": "v47",
        "word": "Point",
        "transcription": "[пойнт]",
        "translation": "Точка / Суть"
      },
      {
        "id": "v48",
        "word": "Home",
        "transcription": "[хоум]",
        "translation": "Дом"
      },
      {
        "id": "v49",
        "word": "Water",
        "transcription": "[уо́тэр]",
        "translation": "Вода"
      },
      {
        "id": "v50",
        "word": "Room",
        "transcription": "[рум]",
        "translation": "Комната"
      }
    ],
    "quiz": [
      {
        "id": "q20_1",
        "question": "If it ___, we will stay home.",
        "options": [
          "rains",
          "will rain",
          "rain"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q20_2",
        "question": "If you study hard, you ___ pass the exam.",
        "options": [
          "will pass",
          "pass",
          "passed"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q20_3",
        "question": "I will call you if I ___ time.",
        "options": [
          "will have",
          "have",
          "had"
        ],
        "correctAnswerIndex": 1
      },
      {
        "id": "q20_4",
        "question": "If she ___ late, we will leave without her.",
        "options": [
          "is",
          "will be",
          "are"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q20_5",
        "question": "What will you do if you ___ your phone?",
        "options": [
          "will lose",
          "loses",
          "lose"
        ],
        "correctAnswerIndex": 2
      }
    ],
    "moduleId": 2
  },
  {
    "id": "l21",
    "title": "Урок 21: Грамматика (Intermediate)",
    "moduleId": 3,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 21.",
      "Сегодня наша тема: Урок 21: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v1",
        "word": "Always",
        "transcription": "[о́лвэйз]",
        "translation": "Всегда",
        "category": "Наречия"
      },
      {
        "id": "v2",
        "word": "Never",
        "transcription": "[нэ́вэ]",
        "translation": "Никогда",
        "category": "Наречия"
      },
      {
        "id": "v3",
        "word": "Sometimes",
        "transcription": "[самта́ймз]",
        "translation": "Иногда",
        "category": "Наречия"
      },
      {
        "id": "v4",
        "word": "Often",
        "transcription": "[о́фн]",
        "translation": "Часто",
        "category": "Наречия"
      },
      {
        "id": "v5",
        "word": "Usually",
        "transcription": "[ю́жуали]",
        "translation": "Обычно",
        "category": "Наречия"
      }
    ],
    "quiz": [
      {
        "id": "q21_1",
        "question": "Вопрос 1 для урока 21",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q21_2",
        "question": "Вопрос 2 для урока 21",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q21_3",
        "question": "Вопрос 3 для урока 21",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q21_4",
        "question": "Вопрос 4 для урока 21",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q21_5",
        "question": "Вопрос 5 для урока 21",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l22",
    "title": "Урок 22: Грамматика (Intermediate)",
    "moduleId": 3,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 22.",
      "Сегодня наша тема: Урок 22: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v6",
        "word": "Seldom",
        "transcription": "[сэ́лдом]",
        "translation": "Редко",
        "category": "Наречия"
      },
      {
        "id": "v7",
        "word": "Every day",
        "transcription": "[э́ври дэй]",
        "translation": "Каждый день",
        "category": "Наречия"
      },
      {
        "id": "v8",
        "word": "Now",
        "transcription": "[нау]",
        "translation": "Сейчас",
        "category": "Наречия"
      },
      {
        "id": "v9",
        "word": "Today",
        "transcription": "[тадэ́й]",
        "translation": "Сегодня",
        "category": "Наречия"
      },
      {
        "id": "v10",
        "word": "Tomorrow",
        "transcription": "[тумо́роу]",
        "translation": "Завтра",
        "category": "Наречия"
      }
    ],
    "quiz": [
      {
        "id": "q22_1",
        "question": "Вопрос 1 для урока 22",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q22_2",
        "question": "Вопрос 2 для урока 22",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q22_3",
        "question": "Вопрос 3 для урока 22",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q22_4",
        "question": "Вопрос 4 для урока 22",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q22_5",
        "question": "Вопрос 5 для урока 22",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l23",
    "title": "Урок 23: Грамматика (Intermediate)",
    "moduleId": 3,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 23.",
      "Сегодня наша тема: Урок 23: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v11",
        "word": "Yesterday",
        "transcription": "[е́стэдэй]",
        "translation": "Вчера",
        "category": "Наречия"
      },
      {
        "id": "v12",
        "word": "Soon",
        "transcription": "[сун]",
        "translation": "Скоро",
        "category": "Наречия"
      },
      {
        "id": "v13",
        "word": "Already",
        "transcription": "[олрэ́ди]",
        "translation": "Уже",
        "category": "Наречия"
      },
      {
        "id": "v14",
        "word": "Yet",
        "transcription": "[ет]",
        "translation": "Еще (не)",
        "category": "Наречия"
      },
      {
        "id": "v15",
        "word": "Just",
        "transcription": "[джаст]",
        "translation": "Только что",
        "category": "Наречия"
      }
    ],
    "quiz": [
      {
        "id": "q23_1",
        "question": "Вопрос 1 для урока 23",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q23_2",
        "question": "Вопрос 2 для урока 23",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q23_3",
        "question": "Вопрос 3 для урока 23",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q23_4",
        "question": "Вопрос 4 для урока 23",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q23_5",
        "question": "Вопрос 5 для урока 23",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l24",
    "title": "Урок 24: Грамматика (Intermediate)",
    "moduleId": 3,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 24.",
      "Сегодня наша тема: Урок 24: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v16",
        "word": "Time",
        "transcription": "[тайм]",
        "translation": "Время",
        "category": "Существительные"
      },
      {
        "id": "v17",
        "word": "Year",
        "transcription": "[йе́а]",
        "translation": "Год",
        "category": "Существительные"
      },
      {
        "id": "v18",
        "word": "People",
        "transcription": "[пипл]",
        "translation": "Люди",
        "category": "Существительные"
      },
      {
        "id": "v19",
        "word": "Way",
        "transcription": "[уэ́й]",
        "translation": "Путь / Способ",
        "category": "Существительные"
      },
      {
        "id": "v20",
        "word": "Day",
        "transcription": "[дэй]",
        "translation": "День",
        "category": "Существительные"
      }
    ],
    "quiz": [
      {
        "id": "q24_1",
        "question": "Вопрос 1 для урока 24",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q24_2",
        "question": "Вопрос 2 для урока 24",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q24_3",
        "question": "Вопрос 3 для урока 24",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q24_4",
        "question": "Вопрос 4 для урока 24",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q24_5",
        "question": "Вопрос 5 для урока 24",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l25",
    "title": "Урок 25: IT и технологии (Собеседование)",
    "moduleId": 3,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 25.",
      "Сегодня наша тема: Урок 25: IT и технологии (Собеседование).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v151",
        "word": "Deploy",
        "transcription": "[дипло́й]",
        "translation": "Развертывать",
        "category": "IT и технологии"
      },
      {
        "id": "v152",
        "word": "Debug",
        "transcription": "[диба́г]",
        "translation": "Отлаживать",
        "category": "IT и технологии"
      },
      {
        "id": "v153",
        "word": "Framework",
        "transcription": "[фрэ́ймвэк]",
        "translation": "Фреймворк",
        "category": "IT и технологии"
      },
      {
        "id": "v154",
        "word": "Frontend",
        "transcription": "[фрoнтэнд]",
        "translation": "Фронтенд",
        "category": "IT и технологии"
      },
      {
        "id": "v155",
        "word": "Backend",
        "transcription": "[бэкэ́нд]",
        "translation": "Бэкенд",
        "category": "IT и технологии"
      }
    ],
    "quiz": [
      {
        "id": "q25_1",
        "question": "Вопрос 1 для урока 25",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q25_2",
        "question": "Вопрос 2 для урока 25",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q25_3",
        "question": "Вопрос 3 для урока 25",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q25_4",
        "question": "Вопрос 4 для урока 25",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q25_5",
        "question": "Вопрос 5 для урока 25",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l26",
    "title": "Урок 26: Грамматика (Intermediate)",
    "moduleId": 3,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 26.",
      "Сегодня наша тема: Урок 26: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v21",
        "word": "Man",
        "transcription": "[мэн]",
        "translation": "Мужчина / Человек",
        "category": "Существительные"
      },
      {
        "id": "v22",
        "word": "Thing",
        "transcription": "[синг]",
        "translation": "Вещь",
        "category": "Существительные"
      },
      {
        "id": "v23",
        "word": "Woman",
        "transcription": "[уу́мэн]",
        "translation": "Женщина",
        "category": "Существительные"
      },
      {
        "id": "v24",
        "word": "Life",
        "transcription": "[лайф]",
        "translation": "Жизнь",
        "category": "Существительные"
      },
      {
        "id": "v25",
        "word": "Child",
        "transcription": "[чайлд]",
        "translation": "Ребенок",
        "category": "Существительные"
      }
    ],
    "quiz": [
      {
        "id": "q26_1",
        "question": "Вопрос 1 для урока 26",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q26_2",
        "question": "Вопрос 2 для урока 26",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q26_3",
        "question": "Вопрос 3 для урока 26",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q26_4",
        "question": "Вопрос 4 для урока 26",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q26_5",
        "question": "Вопрос 5 для урока 26",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l27",
    "title": "Урок 27: Грамматика (Intermediate)",
    "moduleId": 3,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 27.",
      "Сегодня наша тема: Урок 27: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v26",
        "word": "World",
        "transcription": "[уо́рлд]",
        "translation": "Мир",
        "category": "Существительные"
      },
      {
        "id": "v27",
        "word": "School",
        "transcription": "[скул]",
        "translation": "Школа",
        "category": "Существительные"
      },
      {
        "id": "v28",
        "word": "State",
        "transcription": "[стэйт]",
        "translation": "Состояние / Штат",
        "category": "Существительные"
      },
      {
        "id": "v29",
        "word": "Family",
        "transcription": "[фэ́мили]",
        "translation": "Семья",
        "category": "Существительные"
      },
      {
        "id": "v30",
        "word": "Student",
        "transcription": "[стью́дэнт]",
        "translation": "Студент",
        "category": "Существительные"
      }
    ],
    "quiz": [
      {
        "id": "q27_1",
        "question": "Вопрос 1 для урока 27",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q27_2",
        "question": "Вопрос 2 для урока 27",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q27_3",
        "question": "Вопрос 3 для урока 27",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q27_4",
        "question": "Вопрос 4 для урока 27",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q27_5",
        "question": "Вопрос 5 для урока 27",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l28",
    "title": "Урок 28: Грамматика (Intermediate)",
    "moduleId": 3,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 28.",
      "Сегодня наша тема: Урок 28: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v31",
        "word": "Group",
        "transcription": "[груп]",
        "translation": "Группа",
        "category": "Основы"
      },
      {
        "id": "v32",
        "word": "Country",
        "transcription": "[ка́нтри]",
        "translation": "Страна",
        "category": "Основы"
      },
      {
        "id": "v33",
        "word": "Problem",
        "transcription": "[про́блем]",
        "translation": "Проблема",
        "category": "Основы"
      },
      {
        "id": "v34",
        "word": "Hand",
        "transcription": "[хэнд]",
        "translation": "Рука",
        "category": "Основы"
      },
      {
        "id": "v35",
        "word": "Part",
        "transcription": "[парт]",
        "translation": "Часть",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q28_1",
        "question": "Вопрос 1 для урока 28",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q28_2",
        "question": "Вопрос 2 для урока 28",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q28_3",
        "question": "Вопрос 3 для урока 28",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q28_4",
        "question": "Вопрос 4 для урока 28",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q28_5",
        "question": "Вопрос 5 для урока 28",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l29",
    "title": "Урок 29: Грамматика (Intermediate)",
    "moduleId": 3,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 29.",
      "Сегодня наша тема: Урок 29: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v36",
        "word": "Place",
        "transcription": "[плэйс]",
        "translation": "Место",
        "category": "Основы"
      },
      {
        "id": "v37",
        "word": "Case",
        "transcription": "[кэйс]",
        "translation": "Случай",
        "category": "Основы"
      },
      {
        "id": "v38",
        "word": "Week",
        "transcription": "[уи́к]",
        "translation": "Неделя",
        "category": "Основы"
      },
      {
        "id": "v39",
        "word": "Company",
        "transcription": "[ка́мпани]",
        "translation": "Компания",
        "category": "Основы"
      },
      {
        "id": "v40",
        "word": "System",
        "transcription": "[си́стэм]",
        "translation": "Система",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q29_1",
        "question": "Вопрос 1 для урока 29",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q29_2",
        "question": "Вопрос 2 для урока 29",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q29_3",
        "question": "Вопрос 3 для урока 29",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q29_4",
        "question": "Вопрос 4 для урока 29",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q29_5",
        "question": "Вопрос 5 для урока 29",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l30",
    "title": "Урок 30: Протечка труб (Бытовые проблемы)",
    "moduleId": 3,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 30.",
      "Сегодня наша тема: Урок 30: Протечка труб (Бытовые проблемы).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v156",
        "word": "Leak",
        "transcription": "[лик]",
        "translation": "Утечка / Течь",
        "category": "Бытовые проблемы"
      },
      {
        "id": "v157",
        "word": "Plumber",
        "transcription": "[пла́мэ]",
        "translation": "Сантехник",
        "category": "Бытовые проблемы"
      },
      {
        "id": "v158",
        "word": "Outage",
        "transcription": "[а́утадж]",
        "translation": "Сбой (электричества)",
        "category": "Бытовые проблемы"
      },
      {
        "id": "v159",
        "word": "Clogged",
        "transcription": "[клогд]",
        "translation": "Засоренный",
        "category": "Бытовые проблемы"
      },
      {
        "id": "v160",
        "word": "Repair",
        "transcription": "[рипэ́р]",
        "translation": "Ремонт",
        "category": "Бытовые проблемы"
      }
    ],
    "quiz": [
      {
        "id": "q30_1",
        "question": "Вопрос 1 для урока 30",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q30_2",
        "question": "Вопрос 2 для урока 30",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q30_3",
        "question": "Вопрос 3 для урока 30",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q30_4",
        "question": "Вопрос 4 для урока 30",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q30_5",
        "question": "Вопрос 5 для урока 30",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l31",
    "title": "Урок 31: Грамматика (Intermediate)",
    "moduleId": 4,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 31.",
      "Сегодня наша тема: Урок 31: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v41",
        "word": "Program",
        "transcription": "[про́грэм]",
        "translation": "Программа",
        "category": "Основы"
      },
      {
        "id": "v42",
        "word": "Question",
        "transcription": "[квэ́счэн]",
        "translation": "Вопрос",
        "category": "Основы"
      },
      {
        "id": "v43",
        "word": "Work",
        "transcription": "[уо́рк]",
        "translation": "Работа",
        "category": "Основы"
      },
      {
        "id": "v44",
        "word": "Government",
        "transcription": "[га́вернмэнт]",
        "translation": "Правительство",
        "category": "Основы"
      },
      {
        "id": "v45",
        "word": "Number",
        "transcription": "[на́мбэр]",
        "translation": "Число",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q31_1",
        "question": "Вопрос 1 для урока 31",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q31_2",
        "question": "Вопрос 2 для урока 31",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q31_3",
        "question": "Вопрос 3 для урока 31",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q31_4",
        "question": "Вопрос 4 для урока 31",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q31_5",
        "question": "Вопрос 5 для урока 31",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l32",
    "title": "Урок 32: Грамматика (Intermediate)",
    "moduleId": 4,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 32.",
      "Сегодня наша тема: Урок 32: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v46",
        "word": "Night",
        "transcription": "[найт]",
        "translation": "Ночь",
        "category": "Основы"
      },
      {
        "id": "v47",
        "word": "Point",
        "transcription": "[пойнт]",
        "translation": "Точка / Суть",
        "category": "Основы"
      },
      {
        "id": "v48",
        "word": "Home",
        "transcription": "[хоум]",
        "translation": "Дом",
        "category": "Основы"
      },
      {
        "id": "v49",
        "word": "Water",
        "transcription": "[уо́тэр]",
        "translation": "Вода",
        "category": "Основы"
      },
      {
        "id": "v50",
        "word": "Room",
        "transcription": "[рум]",
        "translation": "Комната",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q32_1",
        "question": "Вопрос 1 для урока 32",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q32_2",
        "question": "Вопрос 2 для урока 32",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q32_3",
        "question": "Вопрос 3 для урока 32",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q32_4",
        "question": "Вопрос 4 для урока 32",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q32_5",
        "question": "Вопрос 5 для урока 32",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l33",
    "title": "Урок 33: Грамматика (Intermediate)",
    "moduleId": 4,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 33.",
      "Сегодня наша тема: Урок 33: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v51",
        "word": "Mother",
        "transcription": "[ма́зэр]",
        "translation": "Мать",
        "category": "Основы"
      },
      {
        "id": "v52",
        "word": "Area",
        "transcription": "[э́риа]",
        "translation": "Область",
        "category": "Основы"
      },
      {
        "id": "v53",
        "word": "Money",
        "transcription": "[ма́ни]",
        "translation": "Деньги",
        "category": "Основы"
      },
      {
        "id": "v54",
        "word": "Story",
        "transcription": "[сто́ри]",
        "translation": "История",
        "category": "Основы"
      },
      {
        "id": "v55",
        "word": "Fact",
        "transcription": "[фэкт]",
        "translation": "Факт",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q33_1",
        "question": "Вопрос 1 для урока 33",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q33_2",
        "question": "Вопрос 2 для урока 33",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q33_3",
        "question": "Вопрос 3 для урока 33",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q33_4",
        "question": "Вопрос 4 для урока 33",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q33_5",
        "question": "Вопрос 5 для урока 33",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l34",
    "title": "Урок 34: Грамматика (Intermediate)",
    "moduleId": 4,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 34.",
      "Сегодня наша тема: Урок 34: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v56",
        "word": "Month",
        "transcription": "[манс]",
        "translation": "Месяц",
        "category": "Основы"
      },
      {
        "id": "v57",
        "word": "Lot",
        "transcription": "[лат]",
        "translation": "Много",
        "category": "Основы"
      },
      {
        "id": "v58",
        "word": "Right",
        "transcription": "[райт]",
        "translation": "Право / Правильный",
        "category": "Основы"
      },
      {
        "id": "v59",
        "word": "Study",
        "transcription": "[ста́ди]",
        "translation": "Изучать",
        "category": "Основы"
      },
      {
        "id": "v60",
        "word": "Book",
        "transcription": "[бук]",
        "translation": "Книга",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q34_1",
        "question": "Вопрос 1 для урока 34",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q34_2",
        "question": "Вопрос 2 для урока 34",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q34_3",
        "question": "Вопрос 3 для урока 34",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q34_4",
        "question": "Вопрос 4 для урока 34",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q34_5",
        "question": "Вопрос 5 для урока 34",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l35",
    "title": "Урок 35: Жалобы в ресторане (Заказ еды)",
    "moduleId": 4,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 35.",
      "Сегодня наша тема: Урок 35: Жалобы в ресторане (Заказ еды).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v171",
        "word": "Overcooked",
        "transcription": "[оувэку́кт]",
        "translation": "Переваренный",
        "category": "Ресторан"
      },
      {
        "id": "v172",
        "word": "Undercooked",
        "transcription": "[андэку́кт]",
        "translation": "Недоготовленный",
        "category": "Ресторан"
      },
      {
        "id": "v173",
        "word": "Bill",
        "transcription": "[бил]",
        "translation": "Счет",
        "category": "Ресторан"
      },
      {
        "id": "v174",
        "word": "Tip",
        "transcription": "[тип]",
        "translation": "Чаевые",
        "category": "Ресторан"
      },
      {
        "id": "v175",
        "word": "Spicy",
        "transcription": "[спа́йси]",
        "translation": "Острый",
        "category": "Ресторан"
      }
    ],
    "quiz": [
      {
        "id": "q35_1",
        "question": "Вопрос 1 для урока 35",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q35_2",
        "question": "Вопрос 2 для урока 35",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q35_3",
        "question": "Вопрос 3 для урока 35",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q35_4",
        "question": "Вопрос 4 для урока 35",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q35_5",
        "question": "Вопрос 5 для урока 35",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l36",
    "title": "Урок 36: Грамматика (Intermediate)",
    "moduleId": 4,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 36.",
      "Сегодня наша тема: Урок 36: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v61",
        "word": "Eye",
        "transcription": "[ай]",
        "translation": "Глаз",
        "category": "Основы"
      },
      {
        "id": "v62",
        "word": "Job",
        "transcription": "[джаб]",
        "translation": "Работа (профессия)",
        "category": "Основы"
      },
      {
        "id": "v63",
        "word": "Word",
        "transcription": "[уо́рд]",
        "translation": "Слово",
        "category": "Основы"
      },
      {
        "id": "v64",
        "word": "Business",
        "transcription": "[би́знас]",
        "translation": "Бизнес",
        "category": "Основы"
      },
      {
        "id": "v65",
        "word": "Issue",
        "transcription": "[и́шу]",
        "translation": "Вопрос (проблема)",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q36_1",
        "question": "Вопрос 1 для урока 36",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q36_2",
        "question": "Вопрос 2 для урока 36",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q36_3",
        "question": "Вопрос 3 для урока 36",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q36_4",
        "question": "Вопрос 4 для урока 36",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q36_5",
        "question": "Вопрос 5 для урока 36",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l37",
    "title": "Урок 37: Грамматика (Intermediate)",
    "moduleId": 4,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 37.",
      "Сегодня наша тема: Урок 37: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v66",
        "word": "Side",
        "transcription": "[сайд]",
        "translation": "Сторона",
        "category": "Основы"
      },
      {
        "id": "v67",
        "word": "Kind",
        "transcription": "[кайнд]",
        "translation": "Вид / Добрый",
        "category": "Основы"
      },
      {
        "id": "v68",
        "word": "Head",
        "transcription": "[хёд]",
        "translation": "Голова",
        "category": "Основы"
      },
      {
        "id": "v69",
        "word": "House",
        "transcription": "[хаус]",
        "translation": "Дом (здание)",
        "category": "Основы"
      },
      {
        "id": "v70",
        "word": "Service",
        "transcription": "[сэ́вас]",
        "translation": "Служба",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q37_1",
        "question": "Вопрос 1 для урока 37",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q37_2",
        "question": "Вопрос 2 для урока 37",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q37_3",
        "question": "Вопрос 3 для урока 37",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q37_4",
        "question": "Вопрос 4 для урока 37",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q37_5",
        "question": "Вопрос 5 для урока 37",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l38",
    "title": "Урок 38: Грамматика (Intermediate)",
    "moduleId": 4,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 38.",
      "Сегодня наша тема: Урок 38: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v71",
        "word": "Friend",
        "transcription": "[фрэнд]",
        "translation": "Друг",
        "category": "Основы"
      },
      {
        "id": "v72",
        "word": "Father",
        "transcription": "[фа́зэр]",
        "translation": "Отец",
        "category": "Основы"
      },
      {
        "id": "v73",
        "word": "Power",
        "transcription": "[па́уэ]",
        "translation": "Сила / Власть",
        "category": "Основы"
      },
      {
        "id": "v74",
        "word": "Hour",
        "transcription": "[а́уэ]",
        "translation": "Час",
        "category": "Основы"
      },
      {
        "id": "v75",
        "word": "Game",
        "transcription": "[гэйм]",
        "translation": "Игра",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q38_1",
        "question": "Вопрос 1 для урока 38",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q38_2",
        "question": "Вопрос 2 для урока 38",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q38_3",
        "question": "Вопрос 3 для урока 38",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q38_4",
        "question": "Вопрос 4 для урока 38",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q38_5",
        "question": "Вопрос 5 для урока 38",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l39",
    "title": "Урок 39: Грамматика (Intermediate)",
    "moduleId": 4,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 39.",
      "Сегодня наша тема: Урок 39: Грамматика (Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v76",
        "word": "Line",
        "transcription": "[лайн]",
        "translation": "Линия",
        "category": "Основы"
      },
      {
        "id": "v77",
        "word": "End",
        "transcription": "[энд]",
        "translation": "Конец",
        "category": "Основы"
      },
      {
        "id": "v78",
        "word": "Member",
        "transcription": "[мэ́мбэр]",
        "translation": "Член (группы)",
        "category": "Основы"
      },
      {
        "id": "v79",
        "word": "Law",
        "transcription": "[ло]",
        "translation": "Закон",
        "category": "Основы"
      },
      {
        "id": "v80",
        "word": "Car",
        "transcription": "[кар]",
        "translation": "Машина",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q39_1",
        "question": "Вопрос 1 для урока 39",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q39_2",
        "question": "Вопрос 2 для урока 39",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q39_3",
        "question": "Вопрос 3 для урока 39",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q39_4",
        "question": "Вопрос 4 для урока 39",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q39_5",
        "question": "Вопрос 5 для урока 39",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l40",
    "title": "Урок 40: Сленг и соцсети",
    "moduleId": 4,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 40.",
      "Сегодня наша тема: Урок 40: Сленг и соцсети.",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v81",
        "word": "City",
        "transcription": "[си́ти]",
        "translation": "Город",
        "category": "Основы"
      },
      {
        "id": "v82",
        "word": "Community",
        "transcription": "[комью́нити]",
        "translation": "Сообщество",
        "category": "Основы"
      },
      {
        "id": "v83",
        "word": "Name",
        "transcription": "[нэйм]",
        "translation": "Имя",
        "category": "Основы"
      },
      {
        "id": "v84",
        "word": "President",
        "transcription": "[прэ́зидант]",
        "translation": "Президент",
        "category": "Основы"
      },
      {
        "id": "v85",
        "word": "Team",
        "transcription": "[тим]",
        "translation": "Команда",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q40_1",
        "question": "Вопрос 1 для урока 40",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q40_2",
        "question": "Вопрос 2 для урока 40",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q40_3",
        "question": "Вопрос 3 для урока 40",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q40_4",
        "question": "Вопрос 4 для урока 40",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q40_5",
        "question": "Вопрос 5 для урока 40",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l41",
    "title": "Урок 41: Грамматика (Upper-Intermediate)",
    "moduleId": 5,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 41.",
      "Сегодня наша тема: Урок 41: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v86",
        "word": "Minute",
        "transcription": "[ми́нат]",
        "translation": "Минута",
        "category": "Основы"
      },
      {
        "id": "v87",
        "word": "Idea",
        "transcription": "[айди́а]",
        "translation": "Идея",
        "category": "Основы"
      },
      {
        "id": "v88",
        "word": "Kid",
        "transcription": "[кид]",
        "translation": "Ребенок (разг.)",
        "category": "Основы"
      },
      {
        "id": "v89",
        "word": "Body",
        "transcription": "[ба́ди]",
        "translation": "Тело",
        "category": "Основы"
      },
      {
        "id": "v90",
        "word": "Information",
        "transcription": "[информэ́йшн]",
        "translation": "Информация",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q41_1",
        "question": "Вопрос 1 для урока 41",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q41_2",
        "question": "Вопрос 2 для урока 41",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q41_3",
        "question": "Вопрос 3 для урока 41",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q41_4",
        "question": "Вопрос 4 для урока 41",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q41_5",
        "question": "Вопрос 5 для урока 41",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l42",
    "title": "Урок 42: Грамматика (Upper-Intermediate)",
    "moduleId": 5,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 42.",
      "Сегодня наша тема: Урок 42: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v91",
        "word": "Back",
        "transcription": "[бэк]",
        "translation": "Спина / Назад",
        "category": "Основы"
      },
      {
        "id": "v92",
        "word": "Parent",
        "transcription": "[пэ́рэнт]",
        "translation": "Родитель",
        "category": "Основы"
      },
      {
        "id": "v93",
        "word": "Face",
        "transcription": "[фэйс]",
        "translation": "Лицо",
        "category": "Основы"
      },
      {
        "id": "v94",
        "word": "Others",
        "transcription": "[а́зэрз]",
        "translation": "Другие",
        "category": "Основы"
      },
      {
        "id": "v95",
        "word": "Level",
        "transcription": "[лэ́вэл]",
        "translation": "Уровень",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q42_1",
        "question": "Вопрос 1 для урока 42",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q42_2",
        "question": "Вопрос 2 для урока 42",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q42_3",
        "question": "Вопрос 3 для урока 42",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q42_4",
        "question": "Вопрос 4 для урока 42",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q42_5",
        "question": "Вопрос 5 для урока 42",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l43",
    "title": "Урок 43: Грамматика (Upper-Intermediate)",
    "moduleId": 5,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 43.",
      "Сегодня наша тема: Урок 43: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v96",
        "word": "Office",
        "transcription": "[о́фис]",
        "translation": "Офис",
        "category": "Основы"
      },
      {
        "id": "v97",
        "word": "Door",
        "transcription": "[дор]",
        "translation": "Дверь",
        "category": "Основы"
      },
      {
        "id": "v98",
        "word": "Health",
        "transcription": "[хэлс]",
        "translation": "Здоровье",
        "category": "Основы"
      },
      {
        "id": "v99",
        "word": "Person",
        "transcription": "[пё́рсн]",
        "translation": "Человек (личность)",
        "category": "Основы"
      },
      {
        "id": "v100",
        "word": "Art",
        "transcription": "[арт]",
        "translation": "Искусство",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q43_1",
        "question": "Вопрос 1 для урока 43",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q43_2",
        "question": "Вопрос 2 для урока 43",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q43_3",
        "question": "Вопрос 3 для урока 43",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q43_4",
        "question": "Вопрос 4 для урока 43",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q43_5",
        "question": "Вопрос 5 для урока 43",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l44",
    "title": "Урок 44: Грамматика (Upper-Intermediate)",
    "moduleId": 5,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 44.",
      "Сегодня наша тема: Урок 44: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v101",
        "word": "War",
        "transcription": "[уо́р]",
        "translation": "Война",
        "category": "Основы"
      },
      {
        "id": "v102",
        "word": "History",
        "transcription": "[хи́стори]",
        "translation": "История (наука)",
        "category": "Основы"
      },
      {
        "id": "v103",
        "word": "Party",
        "transcription": "[па́рти]",
        "translation": "Вечеринка / Партия",
        "category": "Основы"
      },
      {
        "id": "v104",
        "word": "Result",
        "transcription": "[риза́лт]",
        "translation": "Результат",
        "category": "Основы"
      },
      {
        "id": "v105",
        "word": "Change",
        "transcription": "[чэйндж]",
        "translation": "Изменение",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q44_1",
        "question": "Вопрос 1 для урока 44",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q44_2",
        "question": "Вопрос 2 для урока 44",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q44_3",
        "question": "Вопрос 3 для урока 44",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q44_4",
        "question": "Вопрос 4 для урока 44",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q44_5",
        "question": "Вопрос 5 для урока 44",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l45",
    "title": "Урок 45: Аэропорт и таможня",
    "moduleId": 5,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 45.",
      "Сегодня наша тема: Урок 45: Аэропорт и таможня.",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v106",
        "word": "Morning",
        "transcription": "[мо́рнинг]",
        "translation": "Утро",
        "category": "Основы"
      },
      {
        "id": "v107",
        "word": "Reason",
        "transcription": "[ри́зн]",
        "translation": "Причина",
        "category": "Основы"
      },
      {
        "id": "v108",
        "word": "Research",
        "transcription": "[рисё́ч]",
        "translation": "Исследование",
        "category": "Основы"
      },
      {
        "id": "v109",
        "word": "Girl",
        "transcription": "[гёл]",
        "translation": "Девочка",
        "category": "Основы"
      },
      {
        "id": "v110",
        "word": "Guy",
        "transcription": "[гай]",
        "translation": "Парень",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q45_1",
        "question": "Вопрос 1 для урока 45",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q45_2",
        "question": "Вопрос 2 для урока 45",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q45_3",
        "question": "Вопрос 3 для урока 45",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q45_4",
        "question": "Вопрос 4 для урока 45",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q45_5",
        "question": "Вопрос 5 для урока 45",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l46",
    "title": "Урок 46: Грамматика (Upper-Intermediate)",
    "moduleId": 5,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 46.",
      "Сегодня наша тема: Урок 46: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v111",
        "word": "Food",
        "transcription": "[фуд]",
        "translation": "Еда",
        "category": "Основы"
      },
      {
        "id": "v112",
        "word": "Moment",
        "transcription": "[мо́умант]",
        "translation": "Момент",
        "category": "Основы"
      },
      {
        "id": "v113",
        "word": "Air",
        "transcription": "[эр]",
        "translation": "Воздух",
        "category": "Основы"
      },
      {
        "id": "v114",
        "word": "Teacher",
        "transcription": "[ти́чэр]",
        "translation": "Учитель",
        "category": "Основы"
      },
      {
        "id": "v115",
        "word": "Force",
        "transcription": "[форс]",
        "translation": "Сила (физическая)",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q46_1",
        "question": "Вопрос 1 для урока 46",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q46_2",
        "question": "Вопрос 2 для урока 46",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q46_3",
        "question": "Вопрос 3 для урока 46",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q46_4",
        "question": "Вопрос 4 для урока 46",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q46_5",
        "question": "Вопрос 5 для урока 46",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l47",
    "title": "Урок 47: Грамматика (Upper-Intermediate)",
    "moduleId": 5,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 47.",
      "Сегодня наша тема: Урок 47: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v116",
        "word": "Education",
        "transcription": "[эдюкэ́йшн]",
        "translation": "Образование",
        "category": "Основы"
      },
      {
        "id": "v117",
        "word": "Good",
        "transcription": "[гуд]",
        "translation": "Хороший",
        "category": "Основы"
      },
      {
        "id": "v118",
        "word": "New",
        "transcription": "[нью]",
        "translation": "Новый",
        "category": "Основы"
      },
      {
        "id": "v119",
        "word": "First",
        "transcription": "[фаст]",
        "translation": "Первый",
        "category": "Основы"
      },
      {
        "id": "v120",
        "word": "Last",
        "transcription": "[лэст]",
        "translation": "Последний",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q47_1",
        "question": "Вопрос 1 для урока 47",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q47_2",
        "question": "Вопрос 2 для урока 47",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q47_3",
        "question": "Вопрос 3 для урока 47",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q47_4",
        "question": "Вопрос 4 для урока 47",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q47_5",
        "question": "Вопрос 5 для урока 47",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l48",
    "title": "Урок 48: Грамматика (Upper-Intermediate)",
    "moduleId": 5,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 48.",
      "Сегодня наша тема: Урок 48: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v121",
        "word": "Long",
        "transcription": "[лонг]",
        "translation": "Длинный",
        "category": "Основы"
      },
      {
        "id": "v122",
        "word": "Great",
        "transcription": "[грэйт]",
        "translation": "Великий / Отличный",
        "category": "Основы"
      },
      {
        "id": "v123",
        "word": "Little",
        "transcription": "[литл]",
        "translation": "Маленький",
        "category": "Основы"
      },
      {
        "id": "v124",
        "word": "Own",
        "transcription": "[оун]",
        "translation": "Собственный",
        "category": "Основы"
      },
      {
        "id": "v125",
        "word": "Other",
        "transcription": "[а́зэр]",
        "translation": "Другой",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q48_1",
        "question": "Вопрос 1 для урока 48",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q48_2",
        "question": "Вопрос 2 для урока 48",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q48_3",
        "question": "Вопрос 3 для урока 48",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q48_4",
        "question": "Вопрос 4 для урока 48",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q48_5",
        "question": "Вопрос 5 для урока 48",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l49",
    "title": "Урок 49: Грамматика (Upper-Intermediate)",
    "moduleId": 5,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 49.",
      "Сегодня наша тема: Урок 49: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v126",
        "word": "Old",
        "transcription": "[оулд]",
        "translation": "Старый",
        "category": "Основы"
      },
      {
        "id": "v127",
        "word": "Right",
        "transcription": "[райт]",
        "translation": "Правый",
        "category": "Основы"
      },
      {
        "id": "v128",
        "word": "Big",
        "transcription": "[биг]",
        "translation": "Большой",
        "category": "Основы"
      },
      {
        "id": "v129",
        "word": "High",
        "transcription": "[хай]",
        "translation": "Высокий",
        "category": "Основы"
      },
      {
        "id": "v130",
        "word": "Different",
        "transcription": "[ди́ферэнт]",
        "translation": "Различный",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q49_1",
        "question": "Вопрос 1 для урока 49",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q49_2",
        "question": "Вопрос 2 для урока 49",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q49_3",
        "question": "Вопрос 3 для урока 49",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q49_4",
        "question": "Вопрос 4 для урока 49",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q49_5",
        "question": "Вопрос 5 для урока 49",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l50",
    "title": "Урок 50: Грамматика (Upper-Intermediate)",
    "moduleId": 5,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 50.",
      "Сегодня наша тема: Урок 50: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v131",
        "word": "Small",
        "transcription": "[смол]",
        "translation": "Маленький",
        "category": "Основы"
      },
      {
        "id": "v132",
        "word": "Large",
        "transcription": "[лардж]",
        "translation": "Крупный",
        "category": "Основы"
      },
      {
        "id": "v133",
        "word": "Next",
        "transcription": "[нэкст]",
        "translation": "Следующий",
        "category": "Основы"
      },
      {
        "id": "v134",
        "word": "Early",
        "transcription": "[э́ли]",
        "translation": "Ранний",
        "category": "Основы"
      },
      {
        "id": "v135",
        "word": "Young",
        "transcription": "[янг]",
        "translation": "Молодой",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q50_1",
        "question": "Вопрос 1 для урока 50",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q50_2",
        "question": "Вопрос 2 для урока 50",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q50_3",
        "question": "Вопрос 3 для урока 50",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q50_4",
        "question": "Вопрос 4 для урока 50",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q50_5",
        "question": "Вопрос 5 для урока 50",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l51",
    "title": "Урок 51: Грамматика (Upper-Intermediate)",
    "moduleId": 6,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 51.",
      "Сегодня наша тема: Урок 51: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v136",
        "word": "Important",
        "transcription": "[импо́ртэнт]",
        "translation": "Важный",
        "category": "Основы"
      },
      {
        "id": "v137",
        "word": "Few",
        "transcription": "[фю]",
        "translation": "Несколько",
        "category": "Основы"
      },
      {
        "id": "v138",
        "word": "Public",
        "transcription": "[па́блик]",
        "translation": "Общественный",
        "category": "Основы"
      },
      {
        "id": "v139",
        "word": "Bad",
        "transcription": "[бэд]",
        "translation": "Плохой",
        "category": "Основы"
      },
      {
        "id": "v140",
        "word": "Same",
        "transcription": "[сэйм]",
        "translation": "Тот же самый",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q51_1",
        "question": "Вопрос 1 для урока 51",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q51_2",
        "question": "Вопрос 2 для урока 51",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q51_3",
        "question": "Вопрос 3 для урока 51",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q51_4",
        "question": "Вопрос 4 для урока 51",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q51_5",
        "question": "Вопрос 5 для урока 51",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l52",
    "title": "Урок 52: Грамматика (Upper-Intermediate)",
    "moduleId": 6,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 52.",
      "Сегодня наша тема: Урок 52: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v141",
        "word": "Able",
        "transcription": "[эйбл]",
        "translation": "Способный",
        "category": "Основы"
      },
      {
        "id": "v142",
        "word": "To be",
        "transcription": "[ту би]",
        "translation": "Быть",
        "category": "Глаголы"
      },
      {
        "id": "v143",
        "word": "To have",
        "transcription": "[ту хэв]",
        "translation": "Иметь",
        "category": "Глаголы"
      },
      {
        "id": "v144",
        "word": "To do",
        "transcription": "[ту ду]",
        "translation": "Делать",
        "category": "Глаголы"
      },
      {
        "id": "v145",
        "word": "To say",
        "transcription": "[ту сэй]",
        "translation": "Сказать",
        "category": "Глаголы"
      }
    ],
    "quiz": [
      {
        "id": "q52_1",
        "question": "Вопрос 1 для урока 52",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q52_2",
        "question": "Вопрос 2 для урока 52",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q52_3",
        "question": "Вопрос 3 для урока 52",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q52_4",
        "question": "Вопрос 4 для урока 52",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q52_5",
        "question": "Вопрос 5 для урока 52",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l53",
    "title": "Урок 53: Грамматика (Upper-Intermediate)",
    "moduleId": 6,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 53.",
      "Сегодня наша тема: Урок 53: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v146",
        "word": "To go",
        "transcription": "[ту гоу]",
        "translation": "Идти",
        "category": "Глаголы"
      },
      {
        "id": "v147",
        "word": "To get",
        "transcription": "[ту гет]",
        "translation": "Получить",
        "category": "Глаголы"
      },
      {
        "id": "v148",
        "word": "To make",
        "transcription": "[ту мэйк]",
        "translation": "Сделать (создать)",
        "category": "Глаголы"
      },
      {
        "id": "v149",
        "word": "To know",
        "transcription": "[ту ноу]",
        "translation": "Знать",
        "category": "Глаголы"
      },
      {
        "id": "v150",
        "word": "To think",
        "transcription": "[ту синк]",
        "translation": "Думать",
        "category": "Глаголы"
      }
    ],
    "quiz": [
      {
        "id": "q53_1",
        "question": "Вопрос 1 для урока 53",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q53_2",
        "question": "Вопрос 2 для урока 53",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q53_3",
        "question": "Вопрос 3 для урока 53",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q53_4",
        "question": "Вопрос 4 для урока 53",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q53_5",
        "question": "Вопрос 5 для урока 53",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l54",
    "title": "Урок 54: Грамматика (Upper-Intermediate)",
    "moduleId": 6,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 54.",
      "Сегодня наша тема: Урок 54: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v1",
        "word": "Always",
        "transcription": "[о́лвэйз]",
        "translation": "Всегда",
        "category": "Наречия"
      },
      {
        "id": "v2",
        "word": "Never",
        "transcription": "[нэ́вэ]",
        "translation": "Никогда",
        "category": "Наречия"
      },
      {
        "id": "v3",
        "word": "Sometimes",
        "transcription": "[самта́ймз]",
        "translation": "Иногда",
        "category": "Наречия"
      },
      {
        "id": "v4",
        "word": "Often",
        "transcription": "[о́фн]",
        "translation": "Часто",
        "category": "Наречия"
      },
      {
        "id": "v5",
        "word": "Usually",
        "transcription": "[ю́жуали]",
        "translation": "Обычно",
        "category": "Наречия"
      }
    ],
    "quiz": [
      {
        "id": "q54_1",
        "question": "Вопрос 1 для урока 54",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q54_2",
        "question": "Вопрос 2 для урока 54",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q54_3",
        "question": "Вопрос 3 для урока 54",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q54_4",
        "question": "Вопрос 4 для урока 54",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q54_5",
        "question": "Вопрос 5 для урока 54",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l55",
    "title": "Урок 55: Грамматика (Upper-Intermediate)",
    "moduleId": 6,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 55.",
      "Сегодня наша тема: Урок 55: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v6",
        "word": "Seldom",
        "transcription": "[сэ́лдом]",
        "translation": "Редко",
        "category": "Наречия"
      },
      {
        "id": "v7",
        "word": "Every day",
        "transcription": "[э́ври дэй]",
        "translation": "Каждый день",
        "category": "Наречия"
      },
      {
        "id": "v8",
        "word": "Now",
        "transcription": "[нау]",
        "translation": "Сейчас",
        "category": "Наречия"
      },
      {
        "id": "v9",
        "word": "Today",
        "transcription": "[тадэ́й]",
        "translation": "Сегодня",
        "category": "Наречия"
      },
      {
        "id": "v10",
        "word": "Tomorrow",
        "transcription": "[тумо́роу]",
        "translation": "Завтра",
        "category": "Наречия"
      }
    ],
    "quiz": [
      {
        "id": "q55_1",
        "question": "Вопрос 1 для урока 55",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q55_2",
        "question": "Вопрос 2 для урока 55",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q55_3",
        "question": "Вопрос 3 для урока 55",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q55_4",
        "question": "Вопрос 4 для урока 55",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q55_5",
        "question": "Вопрос 5 для урока 55",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l56",
    "title": "Урок 56: Грамматика (Upper-Intermediate)",
    "moduleId": 6,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 56.",
      "Сегодня наша тема: Урок 56: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v11",
        "word": "Yesterday",
        "transcription": "[е́стэдэй]",
        "translation": "Вчера",
        "category": "Наречия"
      },
      {
        "id": "v12",
        "word": "Soon",
        "transcription": "[сун]",
        "translation": "Скоро",
        "category": "Наречия"
      },
      {
        "id": "v13",
        "word": "Already",
        "transcription": "[олрэ́ди]",
        "translation": "Уже",
        "category": "Наречия"
      },
      {
        "id": "v14",
        "word": "Yet",
        "transcription": "[ет]",
        "translation": "Еще (не)",
        "category": "Наречия"
      },
      {
        "id": "v15",
        "word": "Just",
        "transcription": "[джаст]",
        "translation": "Только что",
        "category": "Наречия"
      }
    ],
    "quiz": [
      {
        "id": "q56_1",
        "question": "Вопрос 1 для урока 56",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q56_2",
        "question": "Вопрос 2 для урока 56",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q56_3",
        "question": "Вопрос 3 для урока 56",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q56_4",
        "question": "Вопрос 4 для урока 56",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q56_5",
        "question": "Вопрос 5 для урока 56",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l57",
    "title": "Урок 57: Грамматика (Upper-Intermediate)",
    "moduleId": 6,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 57.",
      "Сегодня наша тема: Урок 57: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v16",
        "word": "Time",
        "transcription": "[тайм]",
        "translation": "Время",
        "category": "Существительные"
      },
      {
        "id": "v17",
        "word": "Year",
        "transcription": "[йе́а]",
        "translation": "Год",
        "category": "Существительные"
      },
      {
        "id": "v18",
        "word": "People",
        "transcription": "[пипл]",
        "translation": "Люди",
        "category": "Существительные"
      },
      {
        "id": "v19",
        "word": "Way",
        "transcription": "[уэ́й]",
        "translation": "Путь / Способ",
        "category": "Существительные"
      },
      {
        "id": "v20",
        "word": "Day",
        "transcription": "[дэй]",
        "translation": "День",
        "category": "Существительные"
      }
    ],
    "quiz": [
      {
        "id": "q57_1",
        "question": "Вопрос 1 для урока 57",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q57_2",
        "question": "Вопрос 2 для урока 57",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q57_3",
        "question": "Вопрос 3 для урока 57",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q57_4",
        "question": "Вопрос 4 для урока 57",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q57_5",
        "question": "Вопрос 5 для урока 57",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l58",
    "title": "Урок 58: Грамматика (Upper-Intermediate)",
    "moduleId": 6,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 58.",
      "Сегодня наша тема: Урок 58: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v21",
        "word": "Man",
        "transcription": "[мэн]",
        "translation": "Мужчина / Человек",
        "category": "Существительные"
      },
      {
        "id": "v22",
        "word": "Thing",
        "transcription": "[синг]",
        "translation": "Вещь",
        "category": "Существительные"
      },
      {
        "id": "v23",
        "word": "Woman",
        "transcription": "[уу́мэн]",
        "translation": "Женщина",
        "category": "Существительные"
      },
      {
        "id": "v24",
        "word": "Life",
        "transcription": "[лайф]",
        "translation": "Жизнь",
        "category": "Существительные"
      },
      {
        "id": "v25",
        "word": "Child",
        "transcription": "[чайлд]",
        "translation": "Ребенок",
        "category": "Существительные"
      }
    ],
    "quiz": [
      {
        "id": "q58_1",
        "question": "Вопрос 1 для урока 58",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q58_2",
        "question": "Вопрос 2 для урока 58",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q58_3",
        "question": "Вопрос 3 для урока 58",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q58_4",
        "question": "Вопрос 4 для урока 58",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q58_5",
        "question": "Вопрос 5 для урока 58",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l59",
    "title": "Урок 59: Грамматика (Upper-Intermediate)",
    "moduleId": 6,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 59.",
      "Сегодня наша тема: Урок 59: Грамматика (Upper-Intermediate).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v26",
        "word": "World",
        "transcription": "[уо́рлд]",
        "translation": "Мир",
        "category": "Существительные"
      },
      {
        "id": "v27",
        "word": "School",
        "transcription": "[скул]",
        "translation": "Школа",
        "category": "Существительные"
      },
      {
        "id": "v28",
        "word": "State",
        "transcription": "[стэйт]",
        "translation": "Состояние / Штат",
        "category": "Существительные"
      },
      {
        "id": "v29",
        "word": "Family",
        "transcription": "[фэ́мили]",
        "translation": "Семья",
        "category": "Существительные"
      },
      {
        "id": "v30",
        "word": "Student",
        "transcription": "[стью́дэнт]",
        "translation": "Студент",
        "category": "Существительные"
      }
    ],
    "quiz": [
      {
        "id": "q59_1",
        "question": "Вопрос 1 для урока 59",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q59_2",
        "question": "Вопрос 2 для урока 59",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q59_3",
        "question": "Вопрос 3 для урока 59",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q59_4",
        "question": "Вопрос 4 для урока 59",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q59_5",
        "question": "Вопрос 5 для урока 59",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l60",
    "title": "Урок 60: Грамматика (Advanced)",
    "moduleId": 6,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 60.",
      "Сегодня наша тема: Урок 60: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v31",
        "word": "Group",
        "transcription": "[груп]",
        "translation": "Группа",
        "category": "Основы"
      },
      {
        "id": "v32",
        "word": "Country",
        "transcription": "[ка́нтри]",
        "translation": "Страна",
        "category": "Основы"
      },
      {
        "id": "v33",
        "word": "Problem",
        "transcription": "[про́блем]",
        "translation": "Проблема",
        "category": "Основы"
      },
      {
        "id": "v34",
        "word": "Hand",
        "transcription": "[хэнд]",
        "translation": "Рука",
        "category": "Основы"
      },
      {
        "id": "v35",
        "word": "Part",
        "transcription": "[парт]",
        "translation": "Часть",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q60_1",
        "question": "Вопрос 1 для урока 60",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q60_2",
        "question": "Вопрос 2 для урока 60",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q60_3",
        "question": "Вопрос 3 для урока 60",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q60_4",
        "question": "Вопрос 4 для урока 60",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q60_5",
        "question": "Вопрос 5 для урока 60",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l61",
    "title": "Урок 61: Грамматика (Advanced)",
    "moduleId": 7,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 61.",
      "Сегодня наша тема: Урок 61: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v36",
        "word": "Place",
        "transcription": "[плэйс]",
        "translation": "Место",
        "category": "Основы"
      },
      {
        "id": "v37",
        "word": "Case",
        "transcription": "[кэйс]",
        "translation": "Случай",
        "category": "Основы"
      },
      {
        "id": "v38",
        "word": "Week",
        "transcription": "[уи́к]",
        "translation": "Неделя",
        "category": "Основы"
      },
      {
        "id": "v39",
        "word": "Company",
        "transcription": "[ка́мпани]",
        "translation": "Компания",
        "category": "Основы"
      },
      {
        "id": "v40",
        "word": "System",
        "transcription": "[си́стэм]",
        "translation": "Система",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q61_1",
        "question": "Вопрос 1 для урока 61",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q61_2",
        "question": "Вопрос 2 для урока 61",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q61_3",
        "question": "Вопрос 3 для урока 61",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q61_4",
        "question": "Вопрос 4 для урока 61",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q61_5",
        "question": "Вопрос 5 для урока 61",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l62",
    "title": "Урок 62: Грамматика (Advanced)",
    "moduleId": 7,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 62.",
      "Сегодня наша тема: Урок 62: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v41",
        "word": "Program",
        "transcription": "[про́грэм]",
        "translation": "Программа",
        "category": "Основы"
      },
      {
        "id": "v42",
        "word": "Question",
        "transcription": "[квэ́счэн]",
        "translation": "Вопрос",
        "category": "Основы"
      },
      {
        "id": "v43",
        "word": "Work",
        "transcription": "[уо́рк]",
        "translation": "Работа",
        "category": "Основы"
      },
      {
        "id": "v44",
        "word": "Government",
        "transcription": "[га́вернмэнт]",
        "translation": "Правительство",
        "category": "Основы"
      },
      {
        "id": "v45",
        "word": "Number",
        "transcription": "[на́мбэр]",
        "translation": "Число",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q62_1",
        "question": "Вопрос 1 для урока 62",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q62_2",
        "question": "Вопрос 2 для урока 62",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q62_3",
        "question": "Вопрос 3 для урока 62",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q62_4",
        "question": "Вопрос 4 для урока 62",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q62_5",
        "question": "Вопрос 5 для урока 62",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l63",
    "title": "Урок 63: Грамматика (Advanced)",
    "moduleId": 7,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 63.",
      "Сегодня наша тема: Урок 63: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v46",
        "word": "Night",
        "transcription": "[найт]",
        "translation": "Ночь",
        "category": "Основы"
      },
      {
        "id": "v47",
        "word": "Point",
        "transcription": "[пойнт]",
        "translation": "Точка / Суть",
        "category": "Основы"
      },
      {
        "id": "v48",
        "word": "Home",
        "transcription": "[хоум]",
        "translation": "Дом",
        "category": "Основы"
      },
      {
        "id": "v49",
        "word": "Water",
        "transcription": "[уо́тэр]",
        "translation": "Вода",
        "category": "Основы"
      },
      {
        "id": "v50",
        "word": "Room",
        "transcription": "[рум]",
        "translation": "Комната",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q63_1",
        "question": "Вопрос 1 для урока 63",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q63_2",
        "question": "Вопрос 2 для урока 63",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q63_3",
        "question": "Вопрос 3 для урока 63",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q63_4",
        "question": "Вопрос 4 для урока 63",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q63_5",
        "question": "Вопрос 5 для урока 63",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l64",
    "title": "Урок 64: Грамматика (Advanced)",
    "moduleId": 7,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 64.",
      "Сегодня наша тема: Урок 64: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v51",
        "word": "Mother",
        "transcription": "[ма́зэр]",
        "translation": "Мать",
        "category": "Основы"
      },
      {
        "id": "v52",
        "word": "Area",
        "transcription": "[э́риа]",
        "translation": "Область",
        "category": "Основы"
      },
      {
        "id": "v53",
        "word": "Money",
        "transcription": "[ма́ни]",
        "translation": "Деньги",
        "category": "Основы"
      },
      {
        "id": "v54",
        "word": "Story",
        "transcription": "[сто́ри]",
        "translation": "История",
        "category": "Основы"
      },
      {
        "id": "v55",
        "word": "Fact",
        "transcription": "[фэкт]",
        "translation": "Факт",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q64_1",
        "question": "Вопрос 1 для урока 64",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q64_2",
        "question": "Вопрос 2 для урока 64",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q64_3",
        "question": "Вопрос 3 для урока 64",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q64_4",
        "question": "Вопрос 4 для урока 64",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q64_5",
        "question": "Вопрос 5 для урока 64",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l65",
    "title": "Урок 65: Грамматика (Advanced)",
    "moduleId": 7,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 65.",
      "Сегодня наша тема: Урок 65: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v56",
        "word": "Month",
        "transcription": "[манс]",
        "translation": "Месяц",
        "category": "Основы"
      },
      {
        "id": "v57",
        "word": "Lot",
        "transcription": "[лат]",
        "translation": "Много",
        "category": "Основы"
      },
      {
        "id": "v58",
        "word": "Right",
        "transcription": "[райт]",
        "translation": "Право / Правильный",
        "category": "Основы"
      },
      {
        "id": "v59",
        "word": "Study",
        "transcription": "[ста́ди]",
        "translation": "Изучать",
        "category": "Основы"
      },
      {
        "id": "v60",
        "word": "Book",
        "transcription": "[бук]",
        "translation": "Книга",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q65_1",
        "question": "Вопрос 1 для урока 65",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q65_2",
        "question": "Вопрос 2 для урока 65",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q65_3",
        "question": "Вопрос 3 для урока 65",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q65_4",
        "question": "Вопрос 4 для урока 65",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q65_5",
        "question": "Вопрос 5 для урока 65",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l66",
    "title": "Урок 66: Грамматика (Advanced)",
    "moduleId": 7,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 66.",
      "Сегодня наша тема: Урок 66: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v61",
        "word": "Eye",
        "transcription": "[ай]",
        "translation": "Глаз",
        "category": "Основы"
      },
      {
        "id": "v62",
        "word": "Job",
        "transcription": "[джаб]",
        "translation": "Работа (профессия)",
        "category": "Основы"
      },
      {
        "id": "v63",
        "word": "Word",
        "transcription": "[уо́рд]",
        "translation": "Слово",
        "category": "Основы"
      },
      {
        "id": "v64",
        "word": "Business",
        "transcription": "[би́знас]",
        "translation": "Бизнес",
        "category": "Основы"
      },
      {
        "id": "v65",
        "word": "Issue",
        "transcription": "[и́шу]",
        "translation": "Вопрос (проблема)",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q66_1",
        "question": "Вопрос 1 для урока 66",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q66_2",
        "question": "Вопрос 2 для урока 66",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q66_3",
        "question": "Вопрос 3 для урока 66",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q66_4",
        "question": "Вопрос 4 для урока 66",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q66_5",
        "question": "Вопрос 5 для урока 66",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l67",
    "title": "Урок 67: Грамматика (Advanced)",
    "moduleId": 7,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 67.",
      "Сегодня наша тема: Урок 67: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v66",
        "word": "Side",
        "transcription": "[сайд]",
        "translation": "Сторона",
        "category": "Основы"
      },
      {
        "id": "v67",
        "word": "Kind",
        "transcription": "[кайнд]",
        "translation": "Вид / Добрый",
        "category": "Основы"
      },
      {
        "id": "v68",
        "word": "Head",
        "transcription": "[хёд]",
        "translation": "Голова",
        "category": "Основы"
      },
      {
        "id": "v69",
        "word": "House",
        "transcription": "[хаус]",
        "translation": "Дом (здание)",
        "category": "Основы"
      },
      {
        "id": "v70",
        "word": "Service",
        "transcription": "[сэ́вас]",
        "translation": "Служба",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q67_1",
        "question": "Вопрос 1 для урока 67",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q67_2",
        "question": "Вопрос 2 для урока 67",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q67_3",
        "question": "Вопрос 3 для урока 67",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q67_4",
        "question": "Вопрос 4 для урока 67",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q67_5",
        "question": "Вопрос 5 для урока 67",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l68",
    "title": "Урок 68: Грамматика (Advanced)",
    "moduleId": 7,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 68.",
      "Сегодня наша тема: Урок 68: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v71",
        "word": "Friend",
        "transcription": "[фрэнд]",
        "translation": "Друг",
        "category": "Основы"
      },
      {
        "id": "v72",
        "word": "Father",
        "transcription": "[фа́зэр]",
        "translation": "Отец",
        "category": "Основы"
      },
      {
        "id": "v73",
        "word": "Power",
        "transcription": "[па́уэ]",
        "translation": "Сила / Власть",
        "category": "Основы"
      },
      {
        "id": "v74",
        "word": "Hour",
        "transcription": "[а́уэ]",
        "translation": "Час",
        "category": "Основы"
      },
      {
        "id": "v75",
        "word": "Game",
        "transcription": "[гэйм]",
        "translation": "Игра",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q68_1",
        "question": "Вопрос 1 для урока 68",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q68_2",
        "question": "Вопрос 2 для урока 68",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q68_3",
        "question": "Вопрос 3 для урока 68",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q68_4",
        "question": "Вопрос 4 для урока 68",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q68_5",
        "question": "Вопрос 5 для урока 68",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l69",
    "title": "Урок 69: Грамматика (Advanced)",
    "moduleId": 7,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 69.",
      "Сегодня наша тема: Урок 69: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v76",
        "word": "Line",
        "transcription": "[лайн]",
        "translation": "Линия",
        "category": "Основы"
      },
      {
        "id": "v77",
        "word": "End",
        "transcription": "[энд]",
        "translation": "Конец",
        "category": "Основы"
      },
      {
        "id": "v78",
        "word": "Member",
        "transcription": "[мэ́мбэр]",
        "translation": "Член (группы)",
        "category": "Основы"
      },
      {
        "id": "v79",
        "word": "Law",
        "transcription": "[ло]",
        "translation": "Закон",
        "category": "Основы"
      },
      {
        "id": "v80",
        "word": "Car",
        "transcription": "[кар]",
        "translation": "Машина",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q69_1",
        "question": "Вопрос 1 для урока 69",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q69_2",
        "question": "Вопрос 2 для урока 69",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q69_3",
        "question": "Вопрос 3 для урока 69",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q69_4",
        "question": "Вопрос 4 для урока 69",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q69_5",
        "question": "Вопрос 5 для урока 69",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l70",
    "title": "Урок 70: Грамматика (Advanced)",
    "moduleId": 7,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 70.",
      "Сегодня наша тема: Урок 70: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v81",
        "word": "City",
        "transcription": "[си́ти]",
        "translation": "Город",
        "category": "Основы"
      },
      {
        "id": "v82",
        "word": "Community",
        "transcription": "[комью́нити]",
        "translation": "Сообщество",
        "category": "Основы"
      },
      {
        "id": "v83",
        "word": "Name",
        "transcription": "[нэйм]",
        "translation": "Имя",
        "category": "Основы"
      },
      {
        "id": "v84",
        "word": "President",
        "transcription": "[прэ́зидант]",
        "translation": "Президент",
        "category": "Основы"
      },
      {
        "id": "v85",
        "word": "Team",
        "transcription": "[тим]",
        "translation": "Команда",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q70_1",
        "question": "Вопрос 1 для урока 70",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q70_2",
        "question": "Вопрос 2 для урока 70",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q70_3",
        "question": "Вопрос 3 для урока 70",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q70_4",
        "question": "Вопрос 4 для урока 70",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q70_5",
        "question": "Вопрос 5 для урока 70",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l71",
    "title": "Урок 71: Грамматика (Advanced)",
    "moduleId": 8,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 71.",
      "Сегодня наша тема: Урок 71: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v86",
        "word": "Minute",
        "transcription": "[ми́нат]",
        "translation": "Минута",
        "category": "Основы"
      },
      {
        "id": "v87",
        "word": "Idea",
        "transcription": "[айди́а]",
        "translation": "Идея",
        "category": "Основы"
      },
      {
        "id": "v88",
        "word": "Kid",
        "transcription": "[кид]",
        "translation": "Ребенок (разг.)",
        "category": "Основы"
      },
      {
        "id": "v89",
        "word": "Body",
        "transcription": "[ба́ди]",
        "translation": "Тело",
        "category": "Основы"
      },
      {
        "id": "v90",
        "word": "Information",
        "transcription": "[информэ́йшн]",
        "translation": "Информация",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q71_1",
        "question": "Вопрос 1 для урока 71",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q71_2",
        "question": "Вопрос 2 для урока 71",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q71_3",
        "question": "Вопрос 3 для урока 71",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q71_4",
        "question": "Вопрос 4 для урока 71",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q71_5",
        "question": "Вопрос 5 для урока 71",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l72",
    "title": "Урок 72: Грамматика (Advanced)",
    "moduleId": 8,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 72.",
      "Сегодня наша тема: Урок 72: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v91",
        "word": "Back",
        "transcription": "[бэк]",
        "translation": "Спина / Назад",
        "category": "Основы"
      },
      {
        "id": "v92",
        "word": "Parent",
        "transcription": "[пэ́рэнт]",
        "translation": "Родитель",
        "category": "Основы"
      },
      {
        "id": "v93",
        "word": "Face",
        "transcription": "[фэйс]",
        "translation": "Лицо",
        "category": "Основы"
      },
      {
        "id": "v94",
        "word": "Others",
        "transcription": "[а́зэрз]",
        "translation": "Другие",
        "category": "Основы"
      },
      {
        "id": "v95",
        "word": "Level",
        "transcription": "[лэ́вэл]",
        "translation": "Уровень",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q72_1",
        "question": "Вопрос 1 для урока 72",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q72_2",
        "question": "Вопрос 2 для урока 72",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q72_3",
        "question": "Вопрос 3 для урока 72",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q72_4",
        "question": "Вопрос 4 для урока 72",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q72_5",
        "question": "Вопрос 5 для урока 72",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l73",
    "title": "Урок 73: Грамматика (Advanced)",
    "moduleId": 8,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 73.",
      "Сегодня наша тема: Урок 73: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v96",
        "word": "Office",
        "transcription": "[о́фис]",
        "translation": "Офис",
        "category": "Основы"
      },
      {
        "id": "v97",
        "word": "Door",
        "transcription": "[дор]",
        "translation": "Дверь",
        "category": "Основы"
      },
      {
        "id": "v98",
        "word": "Health",
        "transcription": "[хэлс]",
        "translation": "Здоровье",
        "category": "Основы"
      },
      {
        "id": "v99",
        "word": "Person",
        "transcription": "[пё́рсн]",
        "translation": "Человек (личность)",
        "category": "Основы"
      },
      {
        "id": "v100",
        "word": "Art",
        "transcription": "[арт]",
        "translation": "Искусство",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q73_1",
        "question": "Вопрос 1 для урока 73",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q73_2",
        "question": "Вопрос 2 для урока 73",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q73_3",
        "question": "Вопрос 3 для урока 73",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q73_4",
        "question": "Вопрос 4 для урока 73",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q73_5",
        "question": "Вопрос 5 для урока 73",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l74",
    "title": "Урок 74: Грамматика (Advanced)",
    "moduleId": 8,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 74.",
      "Сегодня наша тема: Урок 74: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v101",
        "word": "War",
        "transcription": "[уо́р]",
        "translation": "Война",
        "category": "Основы"
      },
      {
        "id": "v102",
        "word": "History",
        "transcription": "[хи́стори]",
        "translation": "История (наука)",
        "category": "Основы"
      },
      {
        "id": "v103",
        "word": "Party",
        "transcription": "[па́рти]",
        "translation": "Вечеринка / Партия",
        "category": "Основы"
      },
      {
        "id": "v104",
        "word": "Result",
        "transcription": "[риза́лт]",
        "translation": "Результат",
        "category": "Основы"
      },
      {
        "id": "v105",
        "word": "Change",
        "transcription": "[чэйндж]",
        "translation": "Изменение",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q74_1",
        "question": "Вопрос 1 для урока 74",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q74_2",
        "question": "Вопрос 2 для урока 74",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q74_3",
        "question": "Вопрос 3 для урока 74",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q74_4",
        "question": "Вопрос 4 для урока 74",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q74_5",
        "question": "Вопрос 5 для урока 74",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l75",
    "title": "Урок 75: Грамматика (Advanced)",
    "moduleId": 8,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 75.",
      "Сегодня наша тема: Урок 75: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v106",
        "word": "Morning",
        "transcription": "[мо́рнинг]",
        "translation": "Утро",
        "category": "Основы"
      },
      {
        "id": "v107",
        "word": "Reason",
        "transcription": "[ри́зн]",
        "translation": "Причина",
        "category": "Основы"
      },
      {
        "id": "v108",
        "word": "Research",
        "transcription": "[рисё́ч]",
        "translation": "Исследование",
        "category": "Основы"
      },
      {
        "id": "v109",
        "word": "Girl",
        "transcription": "[гёл]",
        "translation": "Девочка",
        "category": "Основы"
      },
      {
        "id": "v110",
        "word": "Guy",
        "transcription": "[гай]",
        "translation": "Парень",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q75_1",
        "question": "Вопрос 1 для урока 75",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q75_2",
        "question": "Вопрос 2 для урока 75",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q75_3",
        "question": "Вопрос 3 для урока 75",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q75_4",
        "question": "Вопрос 4 для урока 75",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q75_5",
        "question": "Вопрос 5 для урока 75",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l76",
    "title": "Урок 76: Грамматика (Advanced)",
    "moduleId": 8,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 76.",
      "Сегодня наша тема: Урок 76: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v111",
        "word": "Food",
        "transcription": "[фуд]",
        "translation": "Еда",
        "category": "Основы"
      },
      {
        "id": "v112",
        "word": "Moment",
        "transcription": "[мо́умант]",
        "translation": "Момент",
        "category": "Основы"
      },
      {
        "id": "v113",
        "word": "Air",
        "transcription": "[эр]",
        "translation": "Воздух",
        "category": "Основы"
      },
      {
        "id": "v114",
        "word": "Teacher",
        "transcription": "[ти́чэр]",
        "translation": "Учитель",
        "category": "Основы"
      },
      {
        "id": "v115",
        "word": "Force",
        "transcription": "[форс]",
        "translation": "Сила (физическая)",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q76_1",
        "question": "Вопрос 1 для урока 76",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q76_2",
        "question": "Вопрос 2 для урока 76",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q76_3",
        "question": "Вопрос 3 для урока 76",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q76_4",
        "question": "Вопрос 4 для урока 76",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q76_5",
        "question": "Вопрос 5 для урока 76",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l77",
    "title": "Урок 77: Грамматика (Advanced)",
    "moduleId": 8,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 77.",
      "Сегодня наша тема: Урок 77: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v116",
        "word": "Education",
        "transcription": "[эдюкэ́йшн]",
        "translation": "Образование",
        "category": "Основы"
      },
      {
        "id": "v117",
        "word": "Good",
        "transcription": "[гуд]",
        "translation": "Хороший",
        "category": "Основы"
      },
      {
        "id": "v118",
        "word": "New",
        "transcription": "[нью]",
        "translation": "Новый",
        "category": "Основы"
      },
      {
        "id": "v119",
        "word": "First",
        "transcription": "[фаст]",
        "translation": "Первый",
        "category": "Основы"
      },
      {
        "id": "v120",
        "word": "Last",
        "transcription": "[лэст]",
        "translation": "Последний",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q77_1",
        "question": "Вопрос 1 для урока 77",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q77_2",
        "question": "Вопрос 2 для урока 77",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q77_3",
        "question": "Вопрос 3 для урока 77",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q77_4",
        "question": "Вопрос 4 для урока 77",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q77_5",
        "question": "Вопрос 5 для урока 77",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l78",
    "title": "Урок 78: Грамматика (Advanced)",
    "moduleId": 8,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 78.",
      "Сегодня наша тема: Урок 78: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v121",
        "word": "Long",
        "transcription": "[лонг]",
        "translation": "Длинный",
        "category": "Основы"
      },
      {
        "id": "v122",
        "word": "Great",
        "transcription": "[грэйт]",
        "translation": "Великий / Отличный",
        "category": "Основы"
      },
      {
        "id": "v123",
        "word": "Little",
        "transcription": "[литл]",
        "translation": "Маленький",
        "category": "Основы"
      },
      {
        "id": "v124",
        "word": "Own",
        "transcription": "[оун]",
        "translation": "Собственный",
        "category": "Основы"
      },
      {
        "id": "v125",
        "word": "Other",
        "transcription": "[а́зэр]",
        "translation": "Другой",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q78_1",
        "question": "Вопрос 1 для урока 78",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q78_2",
        "question": "Вопрос 2 для урока 78",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q78_3",
        "question": "Вопрос 3 для урока 78",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q78_4",
        "question": "Вопрос 4 для урока 78",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q78_5",
        "question": "Вопрос 5 для урока 78",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l79",
    "title": "Урок 79: Грамматика (Advanced)",
    "moduleId": 8,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 79.",
      "Сегодня наша тема: Урок 79: Грамматика (Advanced).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v126",
        "word": "Old",
        "transcription": "[оулд]",
        "translation": "Старый",
        "category": "Основы"
      },
      {
        "id": "v127",
        "word": "Right",
        "transcription": "[райт]",
        "translation": "Правый",
        "category": "Основы"
      },
      {
        "id": "v128",
        "word": "Big",
        "transcription": "[биг]",
        "translation": "Большой",
        "category": "Основы"
      },
      {
        "id": "v129",
        "word": "High",
        "transcription": "[хай]",
        "translation": "Высокий",
        "category": "Основы"
      },
      {
        "id": "v130",
        "word": "Different",
        "transcription": "[ди́ферэнт]",
        "translation": "Различный",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q79_1",
        "question": "Вопрос 1 для урока 79",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q79_2",
        "question": "Вопрос 2 для урока 79",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q79_3",
        "question": "Вопрос 3 для урока 79",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q79_4",
        "question": "Вопрос 4 для урока 79",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q79_5",
        "question": "Вопрос 5 для урока 79",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l80",
    "title": "Урок 80: Грамматика (Mastery)",
    "moduleId": 8,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 80.",
      "Сегодня наша тема: Урок 80: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v131",
        "word": "Small",
        "transcription": "[смол]",
        "translation": "Маленький",
        "category": "Основы"
      },
      {
        "id": "v132",
        "word": "Large",
        "transcription": "[лардж]",
        "translation": "Крупный",
        "category": "Основы"
      },
      {
        "id": "v133",
        "word": "Next",
        "transcription": "[нэкст]",
        "translation": "Следующий",
        "category": "Основы"
      },
      {
        "id": "v134",
        "word": "Early",
        "transcription": "[э́ли]",
        "translation": "Ранний",
        "category": "Основы"
      },
      {
        "id": "v135",
        "word": "Young",
        "transcription": "[янг]",
        "translation": "Молодой",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q80_1",
        "question": "Вопрос 1 для урока 80",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q80_2",
        "question": "Вопрос 2 для урока 80",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q80_3",
        "question": "Вопрос 3 для урока 80",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q80_4",
        "question": "Вопрос 4 для урока 80",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q80_5",
        "question": "Вопрос 5 для урока 80",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l81",
    "title": "Урок 81: Грамматика (Mastery)",
    "moduleId": 9,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 81.",
      "Сегодня наша тема: Урок 81: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v136",
        "word": "Important",
        "transcription": "[импо́ртэнт]",
        "translation": "Важный",
        "category": "Основы"
      },
      {
        "id": "v137",
        "word": "Few",
        "transcription": "[фю]",
        "translation": "Несколько",
        "category": "Основы"
      },
      {
        "id": "v138",
        "word": "Public",
        "transcription": "[па́блик]",
        "translation": "Общественный",
        "category": "Основы"
      },
      {
        "id": "v139",
        "word": "Bad",
        "transcription": "[бэд]",
        "translation": "Плохой",
        "category": "Основы"
      },
      {
        "id": "v140",
        "word": "Same",
        "transcription": "[сэйм]",
        "translation": "Тот же самый",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q81_1",
        "question": "Вопрос 1 для урока 81",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q81_2",
        "question": "Вопрос 2 для урока 81",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q81_3",
        "question": "Вопрос 3 для урока 81",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q81_4",
        "question": "Вопрос 4 для урока 81",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q81_5",
        "question": "Вопрос 5 для урока 81",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l82",
    "title": "Урок 82: Грамматика (Mastery)",
    "moduleId": 9,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 82.",
      "Сегодня наша тема: Урок 82: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v141",
        "word": "Able",
        "transcription": "[эйбл]",
        "translation": "Способный",
        "category": "Основы"
      },
      {
        "id": "v142",
        "word": "To be",
        "transcription": "[ту би]",
        "translation": "Быть",
        "category": "Глаголы"
      },
      {
        "id": "v143",
        "word": "To have",
        "transcription": "[ту хэв]",
        "translation": "Иметь",
        "category": "Глаголы"
      },
      {
        "id": "v144",
        "word": "To do",
        "transcription": "[ту ду]",
        "translation": "Делать",
        "category": "Глаголы"
      },
      {
        "id": "v145",
        "word": "To say",
        "transcription": "[ту сэй]",
        "translation": "Сказать",
        "category": "Глаголы"
      }
    ],
    "quiz": [
      {
        "id": "q82_1",
        "question": "Вопрос 1 для урока 82",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q82_2",
        "question": "Вопрос 2 для урока 82",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q82_3",
        "question": "Вопрос 3 для урока 82",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q82_4",
        "question": "Вопрос 4 для урока 82",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q82_5",
        "question": "Вопрос 5 для урока 82",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l83",
    "title": "Урок 83: Грамматика (Mastery)",
    "moduleId": 9,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 83.",
      "Сегодня наша тема: Урок 83: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v146",
        "word": "To go",
        "transcription": "[ту гоу]",
        "translation": "Идти",
        "category": "Глаголы"
      },
      {
        "id": "v147",
        "word": "To get",
        "transcription": "[ту гет]",
        "translation": "Получить",
        "category": "Глаголы"
      },
      {
        "id": "v148",
        "word": "To make",
        "transcription": "[ту мэйк]",
        "translation": "Сделать (создать)",
        "category": "Глаголы"
      },
      {
        "id": "v149",
        "word": "To know",
        "transcription": "[ту ноу]",
        "translation": "Знать",
        "category": "Глаголы"
      },
      {
        "id": "v150",
        "word": "To think",
        "transcription": "[ту синк]",
        "translation": "Думать",
        "category": "Глаголы"
      }
    ],
    "quiz": [
      {
        "id": "q83_1",
        "question": "Вопрос 1 для урока 83",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q83_2",
        "question": "Вопрос 2 для урока 83",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q83_3",
        "question": "Вопрос 3 для урока 83",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q83_4",
        "question": "Вопрос 4 для урока 83",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q83_5",
        "question": "Вопрос 5 для урока 83",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l84",
    "title": "Урок 84: Грамматика (Mastery)",
    "moduleId": 9,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 84.",
      "Сегодня наша тема: Урок 84: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v1",
        "word": "Always",
        "transcription": "[о́лвэйз]",
        "translation": "Всегда",
        "category": "Наречия"
      },
      {
        "id": "v2",
        "word": "Never",
        "transcription": "[нэ́вэ]",
        "translation": "Никогда",
        "category": "Наречия"
      },
      {
        "id": "v3",
        "word": "Sometimes",
        "transcription": "[самта́ймз]",
        "translation": "Иногда",
        "category": "Наречия"
      },
      {
        "id": "v4",
        "word": "Often",
        "transcription": "[о́фн]",
        "translation": "Часто",
        "category": "Наречия"
      },
      {
        "id": "v5",
        "word": "Usually",
        "transcription": "[ю́жуали]",
        "translation": "Обычно",
        "category": "Наречия"
      }
    ],
    "quiz": [
      {
        "id": "q84_1",
        "question": "Вопрос 1 для урока 84",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q84_2",
        "question": "Вопрос 2 для урока 84",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q84_3",
        "question": "Вопрос 3 для урока 84",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q84_4",
        "question": "Вопрос 4 для урока 84",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q84_5",
        "question": "Вопрос 5 для урока 84",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l85",
    "title": "Урок 85: Грамматика (Mastery)",
    "moduleId": 9,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 85.",
      "Сегодня наша тема: Урок 85: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v6",
        "word": "Seldom",
        "transcription": "[сэ́лдом]",
        "translation": "Редко",
        "category": "Наречия"
      },
      {
        "id": "v7",
        "word": "Every day",
        "transcription": "[э́ври дэй]",
        "translation": "Каждый день",
        "category": "Наречия"
      },
      {
        "id": "v8",
        "word": "Now",
        "transcription": "[нау]",
        "translation": "Сейчас",
        "category": "Наречия"
      },
      {
        "id": "v9",
        "word": "Today",
        "transcription": "[тадэ́й]",
        "translation": "Сегодня",
        "category": "Наречия"
      },
      {
        "id": "v10",
        "word": "Tomorrow",
        "transcription": "[тумо́роу]",
        "translation": "Завтра",
        "category": "Наречия"
      }
    ],
    "quiz": [
      {
        "id": "q85_1",
        "question": "Вопрос 1 для урока 85",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q85_2",
        "question": "Вопрос 2 для урока 85",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q85_3",
        "question": "Вопрос 3 для урока 85",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q85_4",
        "question": "Вопрос 4 для урока 85",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q85_5",
        "question": "Вопрос 5 для урока 85",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l86",
    "title": "Урок 86: Грамматика (Mastery)",
    "moduleId": 9,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 86.",
      "Сегодня наша тема: Урок 86: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v11",
        "word": "Yesterday",
        "transcription": "[е́стэдэй]",
        "translation": "Вчера",
        "category": "Наречия"
      },
      {
        "id": "v12",
        "word": "Soon",
        "transcription": "[сун]",
        "translation": "Скоро",
        "category": "Наречия"
      },
      {
        "id": "v13",
        "word": "Already",
        "transcription": "[олрэ́ди]",
        "translation": "Уже",
        "category": "Наречия"
      },
      {
        "id": "v14",
        "word": "Yet",
        "transcription": "[ет]",
        "translation": "Еще (не)",
        "category": "Наречия"
      },
      {
        "id": "v15",
        "word": "Just",
        "transcription": "[джаст]",
        "translation": "Только что",
        "category": "Наречия"
      }
    ],
    "quiz": [
      {
        "id": "q86_1",
        "question": "Вопрос 1 для урока 86",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q86_2",
        "question": "Вопрос 2 для урока 86",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q86_3",
        "question": "Вопрос 3 для урока 86",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q86_4",
        "question": "Вопрос 4 для урока 86",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q86_5",
        "question": "Вопрос 5 для урока 86",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l87",
    "title": "Урок 87: Грамматика (Mastery)",
    "moduleId": 9,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 87.",
      "Сегодня наша тема: Урок 87: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v16",
        "word": "Time",
        "transcription": "[тайм]",
        "translation": "Время",
        "category": "Существительные"
      },
      {
        "id": "v17",
        "word": "Year",
        "transcription": "[йе́а]",
        "translation": "Год",
        "category": "Существительные"
      },
      {
        "id": "v18",
        "word": "People",
        "transcription": "[пипл]",
        "translation": "Люди",
        "category": "Существительные"
      },
      {
        "id": "v19",
        "word": "Way",
        "transcription": "[уэ́й]",
        "translation": "Путь / Способ",
        "category": "Существительные"
      },
      {
        "id": "v20",
        "word": "Day",
        "transcription": "[дэй]",
        "translation": "День",
        "category": "Существительные"
      }
    ],
    "quiz": [
      {
        "id": "q87_1",
        "question": "Вопрос 1 для урока 87",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q87_2",
        "question": "Вопрос 2 для урока 87",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q87_3",
        "question": "Вопрос 3 для урока 87",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q87_4",
        "question": "Вопрос 4 для урока 87",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q87_5",
        "question": "Вопрос 5 для урока 87",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l88",
    "title": "Урок 88: Грамматика (Mastery)",
    "moduleId": 9,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 88.",
      "Сегодня наша тема: Урок 88: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v21",
        "word": "Man",
        "transcription": "[мэн]",
        "translation": "Мужчина / Человек",
        "category": "Существительные"
      },
      {
        "id": "v22",
        "word": "Thing",
        "transcription": "[синг]",
        "translation": "Вещь",
        "category": "Существительные"
      },
      {
        "id": "v23",
        "word": "Woman",
        "transcription": "[уу́мэн]",
        "translation": "Женщина",
        "category": "Существительные"
      },
      {
        "id": "v24",
        "word": "Life",
        "transcription": "[лайф]",
        "translation": "Жизнь",
        "category": "Существительные"
      },
      {
        "id": "v25",
        "word": "Child",
        "transcription": "[чайлд]",
        "translation": "Ребенок",
        "category": "Существительные"
      }
    ],
    "quiz": [
      {
        "id": "q88_1",
        "question": "Вопрос 1 для урока 88",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q88_2",
        "question": "Вопрос 2 для урока 88",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q88_3",
        "question": "Вопрос 3 для урока 88",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q88_4",
        "question": "Вопрос 4 для урока 88",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q88_5",
        "question": "Вопрос 5 для урока 88",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l89",
    "title": "Урок 89: Грамматика (Mastery)",
    "moduleId": 9,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 89.",
      "Сегодня наша тема: Урок 89: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v26",
        "word": "World",
        "transcription": "[уо́рлд]",
        "translation": "Мир",
        "category": "Существительные"
      },
      {
        "id": "v27",
        "word": "School",
        "transcription": "[скул]",
        "translation": "Школа",
        "category": "Существительные"
      },
      {
        "id": "v28",
        "word": "State",
        "transcription": "[стэйт]",
        "translation": "Состояние / Штат",
        "category": "Существительные"
      },
      {
        "id": "v29",
        "word": "Family",
        "transcription": "[фэ́мили]",
        "translation": "Семья",
        "category": "Существительные"
      },
      {
        "id": "v30",
        "word": "Student",
        "transcription": "[стью́дэнт]",
        "translation": "Студент",
        "category": "Существительные"
      }
    ],
    "quiz": [
      {
        "id": "q89_1",
        "question": "Вопрос 1 для урока 89",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q89_2",
        "question": "Вопрос 2 для урока 89",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q89_3",
        "question": "Вопрос 3 для урока 89",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q89_4",
        "question": "Вопрос 4 для урока 89",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q89_5",
        "question": "Вопрос 5 для урока 89",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l90",
    "title": "Урок 90: Грамматика (Mastery)",
    "moduleId": 9,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 90.",
      "Сегодня наша тема: Урок 90: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v31",
        "word": "Group",
        "transcription": "[груп]",
        "translation": "Группа",
        "category": "Основы"
      },
      {
        "id": "v32",
        "word": "Country",
        "transcription": "[ка́нтри]",
        "translation": "Страна",
        "category": "Основы"
      },
      {
        "id": "v33",
        "word": "Problem",
        "transcription": "[про́блем]",
        "translation": "Проблема",
        "category": "Основы"
      },
      {
        "id": "v34",
        "word": "Hand",
        "transcription": "[хэнд]",
        "translation": "Рука",
        "category": "Основы"
      },
      {
        "id": "v35",
        "word": "Part",
        "transcription": "[парт]",
        "translation": "Часть",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q90_1",
        "question": "Вопрос 1 для урока 90",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q90_2",
        "question": "Вопрос 2 для урока 90",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q90_3",
        "question": "Вопрос 3 для урока 90",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q90_4",
        "question": "Вопрос 4 для урока 90",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q90_5",
        "question": "Вопрос 5 для урока 90",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l91",
    "title": "Урок 91: Грамматика (Mastery)",
    "moduleId": 10,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 91.",
      "Сегодня наша тема: Урок 91: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v36",
        "word": "Place",
        "transcription": "[плэйс]",
        "translation": "Место",
        "category": "Основы"
      },
      {
        "id": "v37",
        "word": "Case",
        "transcription": "[кэйс]",
        "translation": "Случай",
        "category": "Основы"
      },
      {
        "id": "v38",
        "word": "Week",
        "transcription": "[уи́к]",
        "translation": "Неделя",
        "category": "Основы"
      },
      {
        "id": "v39",
        "word": "Company",
        "transcription": "[ка́мпани]",
        "translation": "Компания",
        "category": "Основы"
      },
      {
        "id": "v40",
        "word": "System",
        "transcription": "[си́стэм]",
        "translation": "Система",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q91_1",
        "question": "Вопрос 1 для урока 91",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q91_2",
        "question": "Вопрос 2 для урока 91",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q91_3",
        "question": "Вопрос 3 для урока 91",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q91_4",
        "question": "Вопрос 4 для урока 91",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q91_5",
        "question": "Вопрос 5 для урока 91",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l92",
    "title": "Урок 92: Грамматика (Mastery)",
    "moduleId": 10,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 92.",
      "Сегодня наша тема: Урок 92: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v41",
        "word": "Program",
        "transcription": "[про́грэм]",
        "translation": "Программа",
        "category": "Основы"
      },
      {
        "id": "v42",
        "word": "Question",
        "transcription": "[квэ́счэн]",
        "translation": "Вопрос",
        "category": "Основы"
      },
      {
        "id": "v43",
        "word": "Work",
        "transcription": "[уо́рк]",
        "translation": "Работа",
        "category": "Основы"
      },
      {
        "id": "v44",
        "word": "Government",
        "transcription": "[га́вернмэнт]",
        "translation": "Правительство",
        "category": "Основы"
      },
      {
        "id": "v45",
        "word": "Number",
        "transcription": "[на́мбэр]",
        "translation": "Число",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q92_1",
        "question": "Вопрос 1 для урока 92",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q92_2",
        "question": "Вопрос 2 для урока 92",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q92_3",
        "question": "Вопрос 3 для урока 92",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q92_4",
        "question": "Вопрос 4 для урока 92",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q92_5",
        "question": "Вопрос 5 для урока 92",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l93",
    "title": "Урок 93: Грамматика (Mastery)",
    "moduleId": 10,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 93.",
      "Сегодня наша тема: Урок 93: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v46",
        "word": "Night",
        "transcription": "[найт]",
        "translation": "Ночь",
        "category": "Основы"
      },
      {
        "id": "v47",
        "word": "Point",
        "transcription": "[пойнт]",
        "translation": "Точка / Суть",
        "category": "Основы"
      },
      {
        "id": "v48",
        "word": "Home",
        "transcription": "[хоум]",
        "translation": "Дом",
        "category": "Основы"
      },
      {
        "id": "v49",
        "word": "Water",
        "transcription": "[уо́тэр]",
        "translation": "Вода",
        "category": "Основы"
      },
      {
        "id": "v50",
        "word": "Room",
        "transcription": "[рум]",
        "translation": "Комната",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q93_1",
        "question": "Вопрос 1 для урока 93",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q93_2",
        "question": "Вопрос 2 для урока 93",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q93_3",
        "question": "Вопрос 3 для урока 93",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q93_4",
        "question": "Вопрос 4 для урока 93",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q93_5",
        "question": "Вопрос 5 для урока 93",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l94",
    "title": "Урок 94: Грамматика (Mastery)",
    "moduleId": 10,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 94.",
      "Сегодня наша тема: Урок 94: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v51",
        "word": "Mother",
        "transcription": "[ма́зэр]",
        "translation": "Мать",
        "category": "Основы"
      },
      {
        "id": "v52",
        "word": "Area",
        "transcription": "[э́риа]",
        "translation": "Область",
        "category": "Основы"
      },
      {
        "id": "v53",
        "word": "Money",
        "transcription": "[ма́ни]",
        "translation": "Деньги",
        "category": "Основы"
      },
      {
        "id": "v54",
        "word": "Story",
        "transcription": "[сто́ри]",
        "translation": "История",
        "category": "Основы"
      },
      {
        "id": "v55",
        "word": "Fact",
        "transcription": "[фэкт]",
        "translation": "Факт",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q94_1",
        "question": "Вопрос 1 для урока 94",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q94_2",
        "question": "Вопрос 2 для урока 94",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q94_3",
        "question": "Вопрос 3 для урока 94",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q94_4",
        "question": "Вопрос 4 для урока 94",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q94_5",
        "question": "Вопрос 5 для урока 94",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l95",
    "title": "Урок 95: Грамматика (Mastery)",
    "moduleId": 10,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 95.",
      "Сегодня наша тема: Урок 95: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v56",
        "word": "Month",
        "transcription": "[манс]",
        "translation": "Месяц",
        "category": "Основы"
      },
      {
        "id": "v57",
        "word": "Lot",
        "transcription": "[лат]",
        "translation": "Много",
        "category": "Основы"
      },
      {
        "id": "v58",
        "word": "Right",
        "transcription": "[райт]",
        "translation": "Право / Правильный",
        "category": "Основы"
      },
      {
        "id": "v59",
        "word": "Study",
        "transcription": "[ста́ди]",
        "translation": "Изучать",
        "category": "Основы"
      },
      {
        "id": "v60",
        "word": "Book",
        "transcription": "[бук]",
        "translation": "Книга",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q95_1",
        "question": "Вопрос 1 для урока 95",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q95_2",
        "question": "Вопрос 2 для урока 95",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q95_3",
        "question": "Вопрос 3 для урока 95",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q95_4",
        "question": "Вопрос 4 для урока 95",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q95_5",
        "question": "Вопрос 5 для урока 95",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l96",
    "title": "Урок 96: Грамматика (Mastery)",
    "moduleId": 10,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 96.",
      "Сегодня наша тема: Урок 96: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v61",
        "word": "Eye",
        "transcription": "[ай]",
        "translation": "Глаз",
        "category": "Основы"
      },
      {
        "id": "v62",
        "word": "Job",
        "transcription": "[джаб]",
        "translation": "Работа (профессия)",
        "category": "Основы"
      },
      {
        "id": "v63",
        "word": "Word",
        "transcription": "[уо́рд]",
        "translation": "Слово",
        "category": "Основы"
      },
      {
        "id": "v64",
        "word": "Business",
        "transcription": "[би́знас]",
        "translation": "Бизнес",
        "category": "Основы"
      },
      {
        "id": "v65",
        "word": "Issue",
        "transcription": "[и́шу]",
        "translation": "Вопрос (проблема)",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q96_1",
        "question": "Вопрос 1 для урока 96",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q96_2",
        "question": "Вопрос 2 для урока 96",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q96_3",
        "question": "Вопрос 3 для урока 96",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q96_4",
        "question": "Вопрос 4 для урока 96",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q96_5",
        "question": "Вопрос 5 для урока 96",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l97",
    "title": "Урок 97: Грамматика (Mastery)",
    "moduleId": 10,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 97.",
      "Сегодня наша тема: Урок 97: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v66",
        "word": "Side",
        "transcription": "[сайд]",
        "translation": "Сторона",
        "category": "Основы"
      },
      {
        "id": "v67",
        "word": "Kind",
        "transcription": "[кайнд]",
        "translation": "Вид / Добрый",
        "category": "Основы"
      },
      {
        "id": "v68",
        "word": "Head",
        "transcription": "[хёд]",
        "translation": "Голова",
        "category": "Основы"
      },
      {
        "id": "v69",
        "word": "House",
        "transcription": "[хаус]",
        "translation": "Дом (здание)",
        "category": "Основы"
      },
      {
        "id": "v70",
        "word": "Service",
        "transcription": "[сэ́вас]",
        "translation": "Служба",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q97_1",
        "question": "Вопрос 1 для урока 97",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q97_2",
        "question": "Вопрос 2 для урока 97",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q97_3",
        "question": "Вопрос 3 для урока 97",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q97_4",
        "question": "Вопрос 4 для урока 97",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q97_5",
        "question": "Вопрос 5 для урока 97",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l98",
    "title": "Урок 98: Грамматика (Mastery)",
    "moduleId": 10,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 98.",
      "Сегодня наша тема: Урок 98: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v71",
        "word": "Friend",
        "transcription": "[фрэнд]",
        "translation": "Друг",
        "category": "Основы"
      },
      {
        "id": "v72",
        "word": "Father",
        "transcription": "[фа́зэр]",
        "translation": "Отец",
        "category": "Основы"
      },
      {
        "id": "v73",
        "word": "Power",
        "transcription": "[па́уэ]",
        "translation": "Сила / Власть",
        "category": "Основы"
      },
      {
        "id": "v74",
        "word": "Hour",
        "transcription": "[а́уэ]",
        "translation": "Час",
        "category": "Основы"
      },
      {
        "id": "v75",
        "word": "Game",
        "transcription": "[гэйм]",
        "translation": "Игра",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q98_1",
        "question": "Вопрос 1 для урока 98",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q98_2",
        "question": "Вопрос 2 для урока 98",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q98_3",
        "question": "Вопрос 3 для урока 98",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q98_4",
        "question": "Вопрос 4 для урока 98",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q98_5",
        "question": "Вопрос 5 для урока 98",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l99",
    "title": "Урок 99: Грамматика (Mastery)",
    "moduleId": 10,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 99.",
      "Сегодня наша тема: Урок 99: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v76",
        "word": "Line",
        "transcription": "[лайн]",
        "translation": "Линия",
        "category": "Основы"
      },
      {
        "id": "v77",
        "word": "End",
        "transcription": "[энд]",
        "translation": "Конец",
        "category": "Основы"
      },
      {
        "id": "v78",
        "word": "Member",
        "transcription": "[мэ́мбэр]",
        "translation": "Член (группы)",
        "category": "Основы"
      },
      {
        "id": "v79",
        "word": "Law",
        "transcription": "[ло]",
        "translation": "Закон",
        "category": "Основы"
      },
      {
        "id": "v80",
        "word": "Car",
        "transcription": "[кар]",
        "translation": "Машина",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q99_1",
        "question": "Вопрос 1 для урока 99",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q99_2",
        "question": "Вопрос 2 для урока 99",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q99_3",
        "question": "Вопрос 3 для урока 99",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q99_4",
        "question": "Вопрос 4 для урока 99",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q99_5",
        "question": "Вопрос 5 для урока 99",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  },
  {
    "id": "l100",
    "title": "Урок 100: Грамматика (Mastery)",
    "moduleId": 10,
    "theory": [
      "Привет от Кролика 🐰! Добро пожаловать на урок 100.",
      "Сегодня наша тема: Урок 100: Грамматика (Mastery).",
      "Мы продолжаем углубляться в английский. Скоро ты станешь настоящим мастером 🦇!"
    ],
    "words": [
      {
        "id": "v81",
        "word": "City",
        "transcription": "[си́ти]",
        "translation": "Город",
        "category": "Основы"
      },
      {
        "id": "v82",
        "word": "Community",
        "transcription": "[комью́нити]",
        "translation": "Сообщество",
        "category": "Основы"
      },
      {
        "id": "v83",
        "word": "Name",
        "transcription": "[нэйм]",
        "translation": "Имя",
        "category": "Основы"
      },
      {
        "id": "v84",
        "word": "President",
        "transcription": "[прэ́зидант]",
        "translation": "Президент",
        "category": "Основы"
      },
      {
        "id": "v85",
        "word": "Team",
        "transcription": "[тим]",
        "translation": "Команда",
        "category": "Основы"
      }
    ],
    "quiz": [
      {
        "id": "q100_1",
        "question": "Вопрос 1 для урока 100",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q100_2",
        "question": "Вопрос 2 для урока 100",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q100_3",
        "question": "Вопрос 3 для урока 100",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q100_4",
        "question": "Вопрос 4 для урока 100",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      },
      {
        "id": "q100_5",
        "question": "Вопрос 5 для урока 100",
        "options": [
          "Ответ A",
          "Ответ B",
          "Ответ C"
        ],
        "correctAnswerIndex": 0
      }
    ]
  }
];

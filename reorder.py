import json

module_assignment = {
    "Местоимения и глагол To Be (Утверждение)": 1,
    "Глагол To Be: Отрицание и Вопросы": 1,
    "Указательные и Притяжательные местоимения": 2,
    "Множественное число и Артикли (a/an/the)": 2,
    "Some, Any, No и их производные": 3,
    "Возвратные местоимения (Reflexive Pronouns)": 3,
    "Present Simple: Утверждение и Рутина": 4,
    "Present Simple: Отрицание и Вопросы": 4,
    "Present Continuous: Прямо сейчас": 5,
    "Предлоги времени и места (In, On, At)": 5,
    "Порядок прилагательных (Order of Adjectives)": 6,
    "Степени сравнения прилагательных": 6,
    "Past Simple: Глагол to be в прошлом (was/were)": 7,
    "Past Simple: Правильные и неправильные глаголы": 7,
    "Past Simple: Вопросы и Отрицания": 8,
    "Used to vs Be used to": 8,
    "Past Continuous: Процесс в прошлом": 9,
    "Past Continuous (Прошедшее длительное)": 9,
    "Future Simple (Будущее с Will)": 10,
    "Конструкция Be Going To (Планы)": 10,
    "Модальные глаголы: Can, Must, Should": 11,
    "Модальные глаголы: May, Might, Could": 11,
    "Quantifiers: Much, Many, A lot of, (A) few, (A) little": 12,
    "Too и Enough": 12,
    "Question Tags (Разделительные вопросы)": 13,
    "So do I / Neither do I": 13,
    "Present Perfect: Результат": 14,
    "Present Perfect: Маркеры": 14,
    "Past Perfect: Предпрошедшее время": 15,
    "Past Perfect (Предпрошедшее время)": 15,
    "Модальные глаголы: Have to vs Must": 15,
    "Conditionals: Условные предложения 0 и 1": 16,
    "Conditionals: Условные предложения 2": 16,
    "Conditionals: Условные предложения 3": 17,
    "Future Continuous и Future Perfect": 17,
    "Future Continuous (Будущее длительное)": 17,
    "Future Perfect (Будущее совершенное)": 17,
    "Past Perfect Continuous": 18,
    "Gerund и Infinitive": 18,
    "Пассивный залог (Passive Voice)": 19,
    "Относительные придаточные (Relative Clauses)": 19,
    "Сложное дополнение (Complex Object)": 20,
    "Participle Clauses: Причастные обороты": 20,
    "Reported Speech: Косвенная речь": 21,
    "Passive Reporting Verbs: Продвинутый Пассив": 21,
    "Модальные глаголы дедукции (Must have / Can't have)": 22,
    "Modals of Deduction in the Past": 22,
    "I wish / If only (Сожаления)": 23,
    "Mixed Conditionals: Смешанные условные предложения": 23,
    "Causative Verbs: Have / Get something done": 24,
    "Subjunctive Mood: Сослагательное наклонение": 24,
    "Inversion: Инверсия после отрицательных наречий": 25,
    "Cleft Sentences: Эмфатические конструкции": 25,
    "Advanced Emphatic Structures": 25,
    "Dependent Prepositions": 26,
    "Advanced Phrasal Verbs": 27,
    "Discourse Markers (C1-C2)": 28
}

with open('generate_detailed_course.py', 'r') as f:
    content = f.read()

reorder_snippet = """
module_assignment = """ + json.dumps(module_assignment, ensure_ascii=False) + """
for l in raw_lessons:
    l['module'] = module_assignment.get(l['title'], 28)

# Now sort raw_lessons by module, and then by their original order somewhat.
# We can just sort by module.
raw_lessons.sort(key=lambda x: x['module'])

# We should also ensure lesson_counter increases sequentially.
"""

content = content.replace("raw_lessons.extend(extra_lessons_2)\n", "raw_lessons.extend(extra_lessons_2)\n" + reorder_snippet + "\n")

with open('generate_detailed_course.py', 'w') as f:
    f.write(content)

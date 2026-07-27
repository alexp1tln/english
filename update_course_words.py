import json
import re
import random

# A list of words organized by difficulty (from A1 to C2).
# We have 21 modules, so let's provide about 5-6 words per module.
structured_words = {
    1: [("Hi", "[haɪ]", "Привет"), ("Name", "[neɪm]", "Имя"), ("Friend", "[frend]", "Друг"), ("Student", "[ˈstjuːdənt]", "Студент"), ("Teacher", "[ˈtiːtʃə]", "Учитель")],
    2: [("Coffee", "[ˈkɒfi]", "Кофе"), ("Water", "[ˈwɔːtə]", "Вода"), ("Food", "[fuːd]", "Еда"), ("Shop", "[ʃɒp]", "Магазин"), ("Buy", "[baɪ]", "Покупать")],
    3: [("Hotel", "[həʊˈtɛl]", "Отель"), ("Room", "[ruːm]", "Комната"), ("Bed", "[bɛd]", "Кровать"), ("Sleep", "[sliːp]", "Спать"), ("Wake", "[weɪk]", "Просыпаться")],
    4: [("Much", "[mʌtʃ]", "Много (неисчисл.)"), ("Many", "[ˈmɛni]", "Много (исчисл.)"), ("Apple", "[ˈæp(ə)l]", "Яблоко"), ("Juice", "[dʒuːs]", "Сок"), ("Money", "[ˈmʌni]", "Деньги")],
    5: [("Job", "[dʒɒb]", "Работа"), ("Skill", "[skɪl]", "Навык"), ("Time", "[taɪm]", "Время"), ("Must", "[mʌst]", "Должен"), ("Can", "[kæn]", "Могу")],
    6: [("Travel", "[ˈtræv(ə)l]", "Путешествие"), ("Ticket", "[ˈtɪkɪt]", "Билет"), ("Flight", "[flaɪt]", "Рейс"), ("Arrive", "[əˈraɪv]", "Прибывать"), ("Yesterday", "[ˈjɛstədeɪ]", "Вчера")],
    7: [("Better", "[ˈbɛtə]", "Лучше"), ("Best", "[bɛst]", "Лучший"), ("Expensive", "[ɪksˈpɛnsɪv]", "Дорогой"), ("Cheap", "[tʃiːp]", "Дешевый"), ("Restaurant", "[ˈrɛstrɒnt]", "Ресторан")],
    8: [("Police", "[pəˈliːs]", "Полиция"), ("Accident", "[ˈæksɪdənt]", "Авария/Случай"), ("Watch", "[wɒtʃ]", "Смотреть"), ("Happen", "[ˈhæpən]", "Случаться"), ("Evening", "[ˈiːvnɪŋ]", "Вечер")],
    9: [("Plane", "[pleɪn]", "Самолет"), ("Leave", "[liːv]", "Покидать/Уезжать"), ("Soon", "[suːn]", "Скоро"), ("Wait", "[weɪt]", "Ждать"), ("Future", "[ˈfjuːtʃə]", "Будущее")],
    10: [("Doctor", "[ˈdɒktə]", "Врач"), ("Health", "[hɛlθ]", "Здоровье"), ("Rest", "[rɛst]", "Отдых"), ("Should", "[ʃʊd]", "Следует"), ("Medicine", "[ˈmɛdsɪn]", "Лекарство")],
    11: [("Bank", "[bæŋk]", "Банк"), ("Loan", "[ləʊn]", "Кредит"), ("Problem", "[ˈprɒbləm]", "Проблема"), ("Rich", "[rɪtʃ]", "Богатый"), ("Lose", "[luːz]", "Терять")],
    12: [("News", "[njuːz]", "Новости"), ("Say", "[seɪ]", "Сказать"), ("Tell", "[tɛl]", "Рассказывать"), ("Boss", "[bɒs]", "Босс"), ("Busy", "[ˈbɪzi]", "Занятой")],
    13: [("Run", "[rʌn]", "Бежать"), ("Enjoy", "[ɪnˈdʒɔɪ]", "Наслаждаться"), ("Stop", "[stɒp]", "Останавливаться"), ("Fast", "[fɑːst]", "Быстрый"), ("Fitness", "[ˈfɪtnɪs]", "Фитнес")],
    14: [("Art", "[ɑːt]", "Искусство"), ("Paint", "[peɪnt]", "Рисовать/Красить"), ("Museum", "[mju(ː)ˈzɪəm]", "Музей"), ("Old", "[əʊld]", "Старый"), ("Artist", "[ˈɑːtɪst]", "Художник")],
    15: [("Meet", "[miːt]", "Встречать"), ("Different", "[ˈdɪfrənt]", "Разный"), ("Habit", "[ˈhæbɪt]", "Привычка"), ("Used", "[juːzd]", "Привыкший"), ("City", "[ˈsɪti]", "Город")],
    16: [("Contract", "[ˈkɒntrækt]", "Контракт"), ("Failure", "[ˈfeɪljə]", "Провал"), ("Prepare", "[prɪˈpeə]", "Готовить(ся)"), ("Fine", "[faɪn]", "В порядке"), ("Never", "[ˈnɛvə]", "Никогда")],
    17: [("Car", "[kɑː]", "Машина"), ("Repair", "[rɪˈpeə]", "Ремонт(ировать)"), ("Mechanic", "[mɪˈkænɪk]", "Механик"), ("Careful", "[ˈkeəfʊl]", "Осторожный"), ("Crucial", "[ˈkruːʃəl]", "Ключевой/Решающий")],
    18: [("Court", "[kɔːt]", "Суд"), ("Steal", "[stiːl]", "Красть"), ("Run away", "[rʌn əˈweɪ]", "Убегать"), ("Money", "[ˈmʌni]", "Деньги"), ("Police", "[pəˈliːs]", "Полиция")],
    19: [("CEO", "[ˌsiː iː ˈəʊ]", "Генеральный директор"), ("Resign", "[rɪˈzaɪn]", "Увольняться"), ("Tired", "[ˈtaɪəd]", "Уставший"), ("Rumor", "[ˈruːmə]", "Слух"), ("Office", "[ˈɒfɪs]", "Офис")],
    20: [("Object", "[əbˈdʒɛkt]", "Возражать"), ("Weekend", "[ˌwiːkˈɛnd]", "Выходные"), ("Agree", "[əˈɡriː]", "Соглашаться"), ("Help", "[hɛlp]", "Помогать"), ("Conference", "[ˈkɒnfərəns]", "Конференция")],
    21: [("Solution", "[səˈluːʃ(ə)n]", "Решение"), ("Come up with", "[kʌm ʌp wɪð]", "Придумать"), ("Successful", "[səkˈsɛsfʊl]", "Успешный"), ("Overall", "[ˌəʊvərˈɔːl]", "В целом"), ("Project", "[ˈprɒdʒɛkt]", "Проект")]
}

with open("src/courseData.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Extract the lessons array
match = re.search(r'export const lessons: Lesson\[\] = (\[.*\]);', content, re.DOTALL)
if not match:
    print("Could not find lessons array.")
    exit(1)

lessons_json = match.group(1)
lessons = json.loads(lessons_json)

unique_vocab = []
seen = set()

for l in lessons:
    mod_id = l.get('moduleId', 1)
    if mod_id > 21: mod_id = 21
    
    # Pick 2-3 words from the corresponding module's vocabulary
    pool = structured_words.get(mod_id, structured_words[1])
    sel = random.sample(pool, min(len(pool), 3))
    
    l_words = []
    for w in sel:
        w_obj = {
            "id": f"v_{l['id']}_{w[0]}",
            "word": w[0],
            "transcription": w[1],
            "translation": w[2],
            "category": f"Module {mod_id}"
        }
        l_words.append(w_obj)
        if w[0] not in seen:
            seen.add(w[0])
            unique_vocab.append(w_obj)
            
    l['words'] = l_words

# Write back
out = "import { Lesson, Word } from './types';\n\n"
out += "export const vocabulary: Word[] = " + json.dumps(unique_vocab, ensure_ascii=False, indent=2) + ";\n\n"
out += "export const lessons: Lesson[] = " + json.dumps(lessons, ensure_ascii=False, indent=2) + ";\n"

with open("src/courseData.ts", "w", encoding="utf-8") as f:
    f.write(out)

print("Vocabulary updated based on modules.")

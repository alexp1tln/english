import json

module_count = 28
quests = []

for m in range(1, module_count + 1):
    quests.append({
        "id": f"quest_mod_{m}",
        "title": f"Quest Module {m}",
        "moduleId": m,
        "nodes": {
            "start": {
                "text": f"Вы начинаете приключение в модуле {m}. Готовы ли вы?",
                "options": [
                    {"text": "Да, вперед!", "nextScene": "success", "effect": "good"},
                    {"text": "Нет, мне страшно.", "nextScene": "fail", "effect": "bad"}
                ]
            },
            "success": {
                "text": "Отлично! Вы успешно справились.",
                "options": []
            },
            "fail": {
                "text": "Вы отступили, но завтра будет новый день.",
                "options": []
            }
        }
    })

with open('src/questsData.ts', 'w', encoding='utf-8') as f:
    f.write("import { Quest } from './types';\n\n")
    f.write("export const initialQuestNodes: Quest[] = " + json.dumps(quests, ensure_ascii=False, indent=2) + ";\n")

print("Quests fixed.")

with open('src/questsData.ts', 'r') as f:
    content = f.read()

new_quests = """
  },
  {
    "id": "quest_m26",
    "title": "Модуль 26: Магазин (Quantifiers & Some/Any)",
    "moduleId": 26,
    "nodes": {
      "start": {
        "text": "Покупка продуктов. 'Do you need any help?'",
        "options": [
          {
            "text": "Yes, I need some apples.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Yes, I need any apples.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Сколько вам нужно?",
        "options": [
          {
            "text": "Not many, just a few.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Not much, just a little.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Продавец в замешательстве. Вы использовали неправильные квантификаторы.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Покупки сделаны успешно.",
        "options": [
          {
            "text": "Завершить квест",
            "nextScene": "end"
          }
        ]
      }
    }
  },
  {
    "id": "quest_m27",
    "title": "Модуль 27: Встреча (Предлоги и Порядок)",
    "moduleId": 27,
    "nodes": {
      "start": {
        "text": "Назначение встречи. 'When and where should we meet?'",
        "options": [
          {
            "text": "Let's meet on Monday at 5 PM in the park.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Let's meet in Monday on 5 PM at the park.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Как я тебя узнаю?",
        "options": [
          {
            "text": "I'll be wearing a beautiful new red coat.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I'll be wearing a red new beautiful coat.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник не понял вас из-за грамматических ошибок.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Встреча назначена.",
        "options": [
          {
            "text": "Завершить квест",
            "nextScene": "end"
          }
        ]
      }
    }
  },
  {
    "id": "quest_m28",
    "title": "Модуль 28: Работа (Сложное дополнение и Причастия)",
    "moduleId": 28,
    "nodes": {
      "start": {
        "text": "Распределение задач. 'What do you want me to do?'",
        "options": [
          {
            "text": "I want you to finish this report.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I want that you finish this report.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Отчет сложный, я могу не успеть.",
        "options": [
          {
            "text": "Knowing that, I will give you more time.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Knew that, I will give you more time.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Коллега запутался. Ваша речь звучит неестественно.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Задачи распределены.",
        "options": [
          {
            "text": "Завершить квест",
            "nextScene": "end"
          }
        ]
      }
    }
  }
];
"""

content = content.replace("    }\n  }\n];", new_quests)
with open('src/questsData.ts', 'w') as f:
    f.write(content)

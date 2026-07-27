with open('src/questsData.ts', 'r') as f:
    content = f.read()

new_quests = """  },
  {
    "id": "quest_m22",
    "title": "Модуль 22: Детектив (Past Continuous/Perfect)",
    "moduleId": 22,
    "nodes": {
      "start": {
        "text": "Допрос свидетеля. 'What were you doing when the alarm went off?'",
        "options": [
          {
            "text": "I was sleeping when it happened.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I slept when it was happening.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "А до этого?",
        "options": [
          {
            "text": "I had finished my work before I went to bed.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I finished my work before I had gone to bed.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грамматически неверно.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией.",
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
    "id": "quest_m23",
    "title": "Модуль 23: Планирование (Future Advanced)",
    "moduleId": 23,
    "nodes": {
      "start": {
        "text": "Обсуждение проекта. 'Will you have finished the report by tomorrow?'",
        "options": [
          {
            "text": "Yes, I will have finished it by 5 PM.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Yes, I will finish it by 5 PM.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Что ты будешь делать завтра в это время?",
        "options": [
          {
            "text": "This time tomorrow, I will be flying to Paris.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "This time tomorrow, I will fly to Paris.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грамматически неверно.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией.",
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
    "id": "quest_m24",
    "title": "Модуль 24: Слухи (Модальность Дедукции)",
    "moduleId": 24,
    "nodes": {
      "start": {
        "text": "Коллега не пришел. 'Why is he absent?'",
        "options": [
          {
            "text": "He must have missed his train.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "He must missed his train.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Он сказал, что заболел. Ты веришь?",
        "options": [
          {
            "text": "He can't have been sick, I saw him at the party.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "He mustn't have been sick.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грамматически неверно.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией.",
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
    "id": "quest_m25",
    "title": "Модуль 25: Сожаления (Wishes/If only)",
    "moduleId": 25,
    "nodes": {
      "start": {
        "text": "Разговор о прошлом. 'Do you have any regrets?'",
        "options": [
          {
            "text": "I wish I had studied harder.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I wish I studied harder.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Жаль, что сейчас так мало времени.",
        "options": [
          {
            "text": "If only I had more free time now.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "If only I have more free time now.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грамматически неверно.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией.",
        "options": [
          {
            "text": "Завершить квест",
            "nextScene": "end"
          }
        ]
      }
    }
  }
];"""

content = content.replace("    }\n  }\n];", new_quests)
with open('src/questsData.ts', 'w') as f:
    f.write(content)

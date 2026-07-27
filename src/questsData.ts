import { Quest } from './types';

export const quests: Quest[] = [
  {
    "id": "quest_m1",
    "title": "Модуль 1: Знакомство (Глагол To Be)",
    "moduleId": 1,
    "nodes": {
      "start": {
        "text": "Приветствие нового коллеги. 'Hello, I am the new manager.'",
        "options": [
          {
            "text": "Are you the new manager?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Is you the new manager?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Да, я.",
        "options": [
          {
            "text": "Yes, I am.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Yes, I is.",
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
    "id": "quest_m2",
    "title": "Модуль 2: Кафе (Present Simple)",
    "moduleId": 2,
    "nodes": {
      "start": {
        "text": "Вы заказываете кофе. 'What do you want to drink?'",
        "options": [
          {
            "text": "I want a cup of coffee.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I wants a cup of coffee.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Вы берете сахар?",
        "options": [
          {
            "text": "Do you take sugar?",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Are you take sugar?",
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
    "id": "quest_m3",
    "title": "Модуль 3: Отель (Present Continuous)",
    "moduleId": 3,
    "nodes": {
      "start": {
        "text": "Вы звоните на ресепшн. 'What is happening in the next room?'",
        "options": [
          {
            "text": "They are making a lot of noise.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "They making a lot of noise.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Я пытаюсь уснуть.",
        "options": [
          {
            "text": "I am trying to sleep.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I try to sleep now.",
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
    "id": "quest_m4",
    "title": "Модуль 4: Магазин (Much/Many)",
    "moduleId": 4,
    "nodes": {
      "start": {
        "text": "Вы покупаете фрукты. 'How many apples do you need?'",
        "options": [
          {
            "text": "I don't need many apples.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I don't need much apples.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "А сколько у вас сока?",
        "options": [
          {
            "text": "How much juice do you have?",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "How many juice do you have?",
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
    "id": "quest_m5",
    "title": "Модуль 5: Собеседование (Can/Must)",
    "moduleId": 5,
    "nodes": {
      "start": {
        "text": "Вас спрашивают о навыках. 'Can you speak Spanish?'",
        "options": [
          {
            "text": "Yes, I can speak Spanish.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Yes, I can to speak Spanish.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Вы должны приходить вовремя.",
        "options": [
          {
            "text": "You must arrive on time.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "You must to arrive on time.",
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
    "id": "quest_m6",
    "title": "Модуль 6: Таможня (Past Simple)",
    "moduleId": 6,
    "nodes": {
      "start": {
        "text": "Офицер спрашивает о вашей поездке. 'When did you arrive?'",
        "options": [
          {
            "text": "I arrived yesterday.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I arrived today.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Где вы остановились?",
        "options": [
          {
            "text": "Where did you stay?",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Where you stayed?",
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
    "id": "quest_m7",
    "title": "Модуль 7: Ресторан (Степени сравнения)",
    "moduleId": 7,
    "nodes": {
      "start": {
        "text": "Вы выбираете блюдо. 'Which dish is better?'",
        "options": [
          {
            "text": "This soup is better than the salad.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "This soup is more better.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Это самый дорогой стейк.",
        "options": [
          {
            "text": "This is the most expensive steak.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "This is the expensivest steak.",
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
    "id": "quest_m8",
    "title": "Модуль 8: Полиция (Past Continuous)",
    "moduleId": 8,
    "nodes": {
      "start": {
        "text": "Вас спрашивают о происшествии. 'What were you doing at 8 PM?'",
        "options": [
          {
            "text": "I was watching TV.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I watched TV at 8 PM.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Что делала ваша жена?",
        "options": [
          {
            "text": "What was your wife doing?",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "What did your wife doing?",
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
    "id": "quest_m9",
    "title": "Модуль 9: Аэропорт (Future Forms)",
    "moduleId": 9,
    "nodes": {
      "start": {
        "text": "Вы спрашиваете о рейсе. 'When will the plane leave?'",
        "options": [
          {
            "text": "The plane is going to leave soon.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "The plane will leaving soon.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Я подожду здесь.",
        "options": [
          {
            "text": "I will wait here.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I am wait here.",
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
    "id": "quest_m10",
    "title": "Модуль 10: Больница (Модальность)",
    "moduleId": 10,
    "nodes": {
      "start": {
        "text": "Врач дает советы. 'You look terrible.'",
        "options": [
          {
            "text": "You should take a rest.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "You should to take a rest.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Мне можно выпить воды?",
        "options": [
          {
            "text": "May I drink some water?",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Must I drink water?",
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
    "id": "quest_m11",
    "title": "Модуль 11: Банк (Conditionals 1 & 2)",
    "moduleId": 11,
    "nodes": {
      "start": {
        "text": "Вы берете кредит. 'What happens if I lose my job?'",
        "options": [
          {
            "text": "If you lose it, you will have problems.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "If you will lose it, you have problems.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Если бы я был богат, я бы не брал кредит.",
        "options": [
          {
            "text": "If I were rich, I would not take a loan.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "If I am rich, I will not take loan.",
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
    "id": "quest_m12",
    "title": "Модуль 12: Новости (Косвенная речь)",
    "moduleId": 12,
    "nodes": {
      "start": {
        "text": "Пересказ слухов. 'The boss said: I will fire him.'",
        "options": [
          {
            "text": "The boss said that he would fire him.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "The boss said that he will fire him.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Она сказала, что занята.",
        "options": [
          {
            "text": "She said she was busy.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "She said she is busy.",
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
    "id": "quest_m13",
    "title": "Модуль 13: Фитнес (Герундий)",
    "moduleId": 13,
    "nodes": {
      "start": {
        "text": "Тренер дает инструкции. 'What do you enjoy doing?'",
        "options": [
          {
            "text": "I enjoy running.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I enjoy to run.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Прекратите есть фастфуд.",
        "options": [
          {
            "text": "Stop eating fast food.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Stop to eat fast food.",
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
    "id": "quest_m14",
    "title": "Модуль 14: Музей (Придаточные)",
    "moduleId": 14,
    "nodes": {
      "start": {
        "text": "Гид описывает картину. 'This is the artist.'",
        "options": [
          {
            "text": "This is the artist who painted it.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "This is the artist which painted it.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Дом, где он жил, очень старый.",
        "options": [
          {
            "text": "The house where he lived is very old.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "The house which he lived is old.",
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
    "id": "quest_m15",
    "title": "Модуль 15: Встреча (Used to)",
    "moduleId": 15,
    "nodes": {
      "start": {
        "text": "Вы встретили старого друга. 'You look different.'",
        "options": [
          {
            "text": "I used to have long hair.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I used to having long hair.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Я привык к этому городу.",
        "options": [
          {
            "text": "I am used to this city.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I used to this city.",
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
    "id": "quest_m16",
    "title": "Модуль 16: Сделка (Mixed Conditionals)",
    "moduleId": 16,
    "nodes": {
      "start": {
        "text": "Обсуждение провала. 'Why did we lose the contract?'",
        "options": [
          {
            "text": "If we had prepared better, we would be fine now.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "If we prepared better, we would be fine now.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Никогда я не видел такого провала.",
        "options": [
          {
            "text": "Never have I seen such a failure.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Never I have seen such failure.",
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
    "id": "quest_m17",
    "title": "Модуль 17: Автосервис (Causative)",
    "moduleId": 17,
    "nodes": {
      "start": {
        "text": "Ремонт машины. 'Are you repairing the car yourself?'",
        "options": [
          {
            "text": "No, I am having my car repaired.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "No, I am repairing my car.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Важно, чтобы механик был осторожен.",
        "options": [
          {
            "text": "It is crucial that the mechanic be careful.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "It is crucial that the mechanic is careful.",
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
    "id": "quest_m18",
    "title": "Модуль 18: Суд (Обороты/Эмфаза)",
    "moduleId": 18,
    "nodes": {
      "start": {
        "text": "Дача показаний. 'Who stole the money?'",
        "options": [
          {
            "text": "It was John who stole the money.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "John it was who stole the money.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Увидев полицию, он убежал.",
        "options": [
          {
            "text": "Seeing the police, he ran away.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Saw the police, he ran away.",
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
    "id": "quest_m19",
    "title": "Модуль 19: Корпорация (Passive Reporting)",
    "moduleId": 19,
    "nodes": {
      "start": {
        "text": "Слухи в офисе. 'What do they say about the CEO?'",
        "options": [
          {
            "text": "He is said to be resigning.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "He is said he is resigning.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Должно быть, он устал.",
        "options": [
          {
            "text": "He must have been tired.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "He should have been tired.",
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
    "id": "quest_m20",
    "title": "Модуль 20: Конференция (Фронтинг/Предлоги)",
    "moduleId": 20,
    "nodes": {
      "start": {
        "text": "Сложный разговор. 'What do you object to?'",
        "options": [
          {
            "text": "I object to working on weekends.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I object to work on weekends.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Именно он согласился помочь.",
        "options": [
          {
            "text": "He did agree to help.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "He agreed do help.",
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
    "id": "quest_m21",
    "title": "Модуль 21: Дискуссия (Фразовые глаголы)",
    "moduleId": 21,
    "nodes": {
      "start": {
        "text": "Подведение итогов. 'How do we solve this?'",
        "options": [
          {
            "text": "We need to come up with a solution.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "We need to come up to a solution.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "В целом, проект успешен.",
        "options": [
          {
            "text": "Overall, the project is successful.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Overall the project successful.",
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
];

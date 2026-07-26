export type QuestNode = {
  text: string;
  options: { text: string; nextScene: string; effect?: 'good' | 'bad' }[];
};

export type Quest = {
  id: string;
  title: string;
  nodes: Record<string, QuestNode>;
};

export const quests: Quest[] = [
  {
    "id": "quest_1",
    "title": "Аэропорт: Регистрация на рейс",
    "nodes": {
      "start": {
        "text": "[Airport] Вы у стойки регистрации. Hello, your passport and ticket please.",
        "options": [
          {
            "text": "Here they are.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give ticket!",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Отлично. Do you have any luggage to check in?",
        "options": [
          {
            "text": "Yes, one suitcase.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I have bag.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_2",
    "title": "Аэропорт: Прохождение таможни",
    "nodes": {
      "start": {
        "text": "[Airport] Таможенный контроль. What is the purpose of your visit?",
        "options": [
          {
            "text": "Tourism.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I go walk.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Понятно. How long are you staying?",
        "options": [
          {
            "text": "For two weeks.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Much days.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_3",
    "title": "Аэропорт: Поиск выхода на посадку",
    "nodes": {
      "start": {
        "text": "[Airport] Вы ищете свой гейт. Can I help you find something?",
        "options": [
          {
            "text": "Where is gate 4?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Where 4?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Конечно. It is down the hall to the right.",
        "options": [
          {
            "text": "Thank you.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Give go.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_4",
    "title": "Аэропорт: Проблема с багажом",
    "nodes": {
      "start": {
        "text": "[Airport] Ваш багаж не приехал. Did you lose your baggage?",
        "options": [
          {
            "text": "Yes, I cannot find my suitcase.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Bag no.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Опишите его. What does it look like?",
        "options": [
          {
            "text": "It is a large blue suitcase.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Blue big.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_5",
    "title": "Аэропорт: Покупка сувениров",
    "nodes": {
      "start": {
        "text": "[Airport] В Duty Free. Are you paying with cash or card?",
        "options": [
          {
            "text": "By card, please.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give card.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Хорошо. Do you need a bag?",
        "options": [
          {
            "text": "No, thank you.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "No bag give.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_6",
    "title": "Отель: Заселение в номер",
    "nodes": {
      "start": {
        "text": "[Hotel] Вы на ресепшене. Welcome! Do you have a reservation?",
        "options": [
          {
            "text": "Yes, under the name Smith.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I want sleep.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Нашел. Could you fill out this form?",
        "options": [
          {
            "text": "Sure.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "No write.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_7",
    "title": "Отель: Проблема с ключом",
    "nodes": {
      "start": {
        "text": "[Hotel] Ваш ключ не работает. How can I help you?",
        "options": [
          {
            "text": "My keycard is not working.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Key dead.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Давайте проверим. What is your room number?",
        "options": [
          {
            "text": "Room 304.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "304 number.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_8",
    "title": "Отель: Заказ еды в номер",
    "nodes": {
      "start": {
        "text": "[Hotel] Вы звоните в обслуживание. Room service, what would you like?",
        "options": [
          {
            "text": "I would like a sandwich.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give bread.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Принято. Anything to drink?",
        "options": [
          {
            "text": "A bottle of water.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Water me.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_9",
    "title": "Отель: Выселение",
    "nodes": {
      "start": {
        "text": "[Hotel] Вы покидаете отель. Are you checking out?",
        "options": [
          {
            "text": "Yes, here is my key.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I go out.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Надеюсь, вам понравилось. Did you have anything from the minibar?",
        "options": [
          {
            "text": "No, I did not.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "No eat minibar.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_10",
    "title": "Отель: Просьба о полотенцах",
    "nodes": {
      "start": {
        "text": "[Hotel] Вам нужны полотенца. Housekeeping, how can I help?",
        "options": [
          {
            "text": "Could I get some extra towels?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give towel.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Сейчас принесу. How many do you need?",
        "options": [
          {
            "text": "Two, please.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Two want.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_11",
    "title": "Ресторан: Заказ столика",
    "nodes": {
      "start": {
        "text": "[Restaurant] Вы у входа. Do you have a reservation?",
        "options": [
          {
            "text": "No, do you have a table for two?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Table two!",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Минутку. Would you like to sit inside or outside?",
        "options": [
          {
            "text": "Outside, please.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Out sit.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_12",
    "title": "Ресторан: Заказ еды",
    "nodes": {
      "start": {
        "text": "[Restaurant] Официант подошел. Are you ready to order?",
        "options": [
          {
            "text": "Yes, I will have the steak.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give meat.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Отличный выбор. How would you like it cooked?",
        "options": [
          {
            "text": "Medium rare.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Middle fire.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_13",
    "title": "Ресторан: Проблема с блюдом",
    "nodes": {
      "start": {
        "text": "[Restaurant] Еда холодная. Is everything okay with your meal?",
        "options": [
          {
            "text": "Actually, my soup is cold.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Soup cold, bad.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Извините. I will bring you a hot one right away.",
        "options": [
          {
            "text": "I appreciate it.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Fast do.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_14",
    "title": "Ресторан: Оплата счета",
    "nodes": {
      "start": {
        "text": "[Restaurant] Вы поели. Here is your bill.",
        "options": [
          {
            "text": "Can I pay by card?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Card take.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Да. Do you want to leave a tip on the card?",
        "options": [
          {
            "text": "Yes, add 10 percent.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Ten percent give.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_15",
    "title": "Ресторан: Просьба упаковать",
    "nodes": {
      "start": {
        "text": "[Restaurant] Осталась еда. Would you like a box for that?",
        "options": [
          {
            "text": "Yes, please pack it to go.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give box.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Конечно. I will bring it in a moment.",
        "options": [
          {
            "text": "Take your time.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Time go.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_16",
    "title": "Кофейня: Выбор кофе",
    "nodes": {
      "start": {
        "text": "[Coffee Shop] Вы у кассы. What can I get you?",
        "options": [
          {
            "text": "A large latte, please.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give big latte.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Хорошо. For here or to go?",
        "options": [
          {
            "text": "To go.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Go me.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_17",
    "title": "Кофейня: Выбор десерта",
    "nodes": {
      "start": {
        "text": "[Coffee Shop] Вы смотрите на витрину. Would you like something sweet?",
        "options": [
          {
            "text": "Yes, that muffin looks good.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Muffin give.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Вкусно. Do you want it warmed up?",
        "options": [
          {
            "text": "Yes, please.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Hot it.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_18",
    "title": "Кофейня: Альтернативное молоко",
    "nodes": {
      "start": {
        "text": "[Coffee Shop] Вы заказываете капучино. What kind of milk do you prefer?",
        "options": [
          {
            "text": "Oat milk, please.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Oat drink.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Принято. Any syrups?",
        "options": [
          {
            "text": "No, just the coffee.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "No sweet.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_19",
    "title": "Кофейня: Вопрос про Wi-Fi",
    "nodes": {
      "start": {
        "text": "[Coffee Shop] Вы сели за стол. Here is your coffee.",
        "options": [
          {
            "text": "What is the Wi-Fi password?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Internet give.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Без проблем. It is written on your receipt.",
        "options": [
          {
            "text": "Ah, I see it.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I look.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_20",
    "title": "Кофейня: Ошибка в заказе",
    "nodes": {
      "start": {
        "text": "[Coffee Shop] Вам дали чай вместо кофе. Here is your tea.",
        "options": [
          {
            "text": "Excuse me, I ordered a coffee.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "No tea!",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Простите. I will remake it right now.",
        "options": [
          {
            "text": "Thank you.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Make fast.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_21",
    "title": "Магазин одежды: Поиск размера",
    "nodes": {
      "start": {
        "text": "[Clothes Store] Вы смотрите рубашку. Do you need help finding a size?",
        "options": [
          {
            "text": "Yes, do you have this in medium?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give medium.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Посмотрим. Here is a medium. Would you like to try it on?",
        "options": [
          {
            "text": "Where is the fitting room?",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Where put on?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_22",
    "title": "Магазин одежды: Примерка",
    "nodes": {
      "start": {
        "text": "[Clothes Store] Вы в примерочной. How does it fit?",
        "options": [
          {
            "text": "It is a bit too tight.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Small much.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Жаль. Shall I bring a larger size?",
        "options": [
          {
            "text": "Yes, a large please.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Big give.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_23",
    "title": "Магазин одежды: Поиск отдела",
    "nodes": {
      "start": {
        "text": "[Clothes Store] Вы зашли в магазин. Welcome! What are you looking for?",
        "options": [
          {
            "text": "Where is the men's section?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Man clothes where?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Там. It is upstairs on the second floor.",
        "options": [
          {
            "text": "Got it, thanks.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I go up.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_24",
    "title": "Магазин одежды: Скидки",
    "nodes": {
      "start": {
        "text": "[Clothes Store] Вы смотрите на ценник. Those are on sale today.",
        "options": [
          {
            "text": "How much is the discount?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "How cheap?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Выгодно. It is 30 percent off the tag price.",
        "options": [
          {
            "text": "That is a great deal.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Good buy.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_25",
    "title": "Магазин одежды: Возврат товара",
    "nodes": {
      "start": {
        "text": "[Clothes Store] Вы у кассы. Are you returning this?",
        "options": [
          {
            "text": "Yes, it did not fit well.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Bad clothes.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Понятно. Do you have the receipt?",
        "options": [
          {
            "text": "Here it is.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Take paper.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_26",
    "title": "Супермаркет: Поиск продукта",
    "nodes": {
      "start": {
        "text": "[Grocery Store] Вы ищете молоко. Can I help you?",
        "options": [
          {
            "text": "Where can I find the dairy aisle?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Where milk?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Конечно. Aisle 4, on the left.",
        "options": [
          {
            "text": "Thank you.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Ok I go.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_27",
    "title": "Супермаркет: На кассе",
    "nodes": {
      "start": {
        "text": "[Grocery Store] Вы выкладываете товар. Do you need any bags?",
        "options": [
          {
            "text": "Yes, two bags, please.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give bag two.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "С вас 20 баксов. Cash or card?",
        "options": [
          {
            "text": "I will pay by card.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Card pay.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_28",
    "title": "Супермаркет: Взвешивание",
    "nodes": {
      "start": {
        "text": "[Grocery Store] Вы покупаете яблоки. You need to weigh these first.",
        "options": [
          {
            "text": "Oh, where is the scale?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Where weight?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Там. Right next to the tomatoes.",
        "options": [
          {
            "text": "I will be right back.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I go back.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_29",
    "title": "Супермаркет: Просроченный товар",
    "nodes": {
      "start": {
        "text": "[Grocery Store] Вы нашли старый сыр. Did you find everything okay?",
        "options": [
          {
            "text": "This cheese is expired.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Cheese bad old.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Ой. Sorry, let me get you a fresh one.",
        "options": [
          {
            "text": "I would appreciate that.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Give fresh.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_30",
    "title": "Супермаркет: Карта лояльности",
    "nodes": {
      "start": {
        "text": "[Grocery Store] Кассир спрашивает. Do you have our loyalty card?",
        "options": [
          {
            "text": "No, I don't have one.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "No card.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Предлагаю. Would you like to sign up?",
        "options": [
          {
            "text": "Not today, thanks.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "No sign.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_31",
    "title": "Аптека: Лекарство от головы",
    "nodes": {
      "start": {
        "text": "[Pharmacy] У вас болит голова. How can I help you today?",
        "options": [
          {
            "text": "I need something for a headache.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Head hurt, give pill.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Есть варианты. Do you prefer ibuprofen or paracetamol?",
        "options": [
          {
            "text": "Ibuprofen, please.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Give first.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_32",
    "title": "Аптека: По рецепту",
    "nodes": {
      "start": {
        "text": "[Pharmacy] Вы протягиваете бумажку. Are you picking up a prescription?",
        "options": [
          {
            "text": "Yes, my doctor sent it over.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Doctor give paper.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Ищу. Can I have your name and date of birth?",
        "options": [
          {
            "text": "John Doe, 12th of May.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "My name John.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_33",
    "title": "Аптека: Пластыри",
    "nodes": {
      "start": {
        "text": "[Pharmacy] Вы порезались. Do you need help finding anything?",
        "options": [
          {
            "text": "Where are the bandages?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Where tape for blood?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Вон там. Aisle 2, bottom shelf.",
        "options": [
          {
            "text": "Thank you so much.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Ok go.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_34",
    "title": "Аптека: Аллергия",
    "nodes": {
      "start": {
        "text": "[Pharmacy] Вы чихаете. Are you looking for allergy medicine?",
        "options": [
          {
            "text": "Yes, my eyes are very itchy.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Eyes bad want pill.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Попробуйте это. Take this once a day.",
        "options": [
          {
            "text": "Does it cause drowsiness?",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I sleep?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_35",
    "title": "Аптека: Витамины",
    "nodes": {
      "start": {
        "text": "[Pharmacy] Вы ищете витамин С. Looking for supplements?",
        "options": [
          {
            "text": "Yes, do you have vitamin C?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give vitamin C.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Да. We have gummies or tablets.",
        "options": [
          {
            "text": "Tablets are fine.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Tablet give.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_36",
    "title": "Больница: Регистратура",
    "nodes": {
      "start": {
        "text": "[Hospital] Вы пришли на прием. Do you have an appointment?",
        "options": [
          {
            "text": "Yes, with Dr. Smith at 2 PM.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I see doctor.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Заполните. Please fill out these forms and take a seat.",
        "options": [
          {
            "text": "Will do.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I sit.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_37",
    "title": "Больница: Симптомы",
    "nodes": {
      "start": {
        "text": "[Hospital] Врач спрашивает. What seems to be the problem?",
        "options": [
          {
            "text": "I have a terrible sore throat.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Throat bad.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Давно? How long have you had it?",
        "options": [
          {
            "text": "Since yesterday morning.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Yesterday start.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_38",
    "title": "Больница: Оплата приема",
    "nodes": {
      "start": {
        "text": "[Hospital] Вы на выходе. That will be 50 dollars.",
        "options": [
          {
            "text": "Here is my insurance card.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Take money.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Спасибо. Your insurance covers it fully.",
        "options": [
          {
            "text": "That is good to hear.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Good.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_39",
    "title": "Больница: Анализ крови",
    "nodes": {
      "start": {
        "text": "[Hospital] Медсестра с иглой. Please roll up your sleeve.",
        "options": [
          {
            "text": "I am a bit afraid of needles.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "No needle!",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Не бойтесь. It will just be a quick pinch.",
        "options": [
          {
            "text": "Okay, I am ready.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Do fast.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_40",
    "title": "Больница: Посещение больного",
    "nodes": {
      "start": {
        "text": "[Hospital] Вы ищете палату. Who are you here to see?",
        "options": [
          {
            "text": "My friend, Mark Johnson.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I see friend.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Этаж. He is in room 412 on the 4th floor.",
        "options": [
          {
            "text": "Thank you.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I go 4.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_41",
    "title": "Банк: Открытие счета",
    "nodes": {
      "start": {
        "text": "[Bank] Вы у менеджера. How can I help you today?",
        "options": [
          {
            "text": "I would like to open a checking account.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Open money account.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Документы. Do you have your ID and proof of address?",
        "options": [
          {
            "text": "Yes, here they are.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Give papers.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_42",
    "title": "Банк: Обмен валюты",
    "nodes": {
      "start": {
        "text": "[Bank] Вы у кассы. Are you depositing or withdrawing?",
        "options": [
          {
            "text": "I want to exchange some euros to dollars.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Change money.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Курс. The exchange rate is 1.1 today.",
        "options": [
          {
            "text": "That works for me.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Ok change.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_43",
    "title": "Банк: Проблема с картой",
    "nodes": {
      "start": {
        "text": "[Bank] Банкомат съел карту. Did you lose your card?",
        "options": [
          {
            "text": "The ATM swallowed my card.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Machine eat card.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Заблокируем. We will need to issue a new one.",
        "options": [
          {
            "text": "How long will that take?",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "When new?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_44",
    "title": "Банк: Снятие наличных",
    "nodes": {
      "start": {
        "text": "[Bank] Вам нужны деньги. How much would you like to withdraw?",
        "options": [
          {
            "text": "Two hundred dollars, please.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give two hundred.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Купюры. How would you like your bills?",
        "options": [
          {
            "text": "In twenties, please.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Give twenties.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_45",
    "title": "Банк: Перевод средств",
    "nodes": {
      "start": {
        "text": "[Bank] Вам нужно отправить деньги. Where are you sending the money?",
        "options": [
          {
            "text": "To a bank account in Spain.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Send Spain.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Реквизиты. I need the IBAN number.",
        "options": [
          {
            "text": "I have it written down here.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Here number.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_46",
    "title": "Почта: Отправка посылки",
    "nodes": {
      "start": {
        "text": "[Post Office] Вы с коробкой. Where is this package going?",
        "options": [
          {
            "text": "I need to send this to London.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Go London.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Вес. Please place it on the scale.",
        "options": [
          {
            "text": "Sure, here you go.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I put.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_47",
    "title": "Почта: Покупка марок",
    "nodes": {
      "start": {
        "text": "[Post Office] Вам нужны марки. Can I help you?",
        "options": [
          {
            "text": "I would like to buy some stamps.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give stamps.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Сколько? How many books of stamps do you need?",
        "options": [
          {
            "text": "Just one book, please.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "One give.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_48",
    "title": "Почта: Получение письма",
    "nodes": {
      "start": {
        "text": "[Post Office] Вам пришло извещение. Do you have a pick-up slip?",
        "options": [
          {
            "text": "Yes, and here is my ID.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give letter.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Ищу. Here is your registered mail. Please sign here.",
        "options": [
          {
            "text": "Signing now, thank you.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I sign.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_49",
    "title": "Почта: Быстрая доставка",
    "nodes": {
      "start": {
        "text": "[Post Office] Срочное письмо. How fast do you want this to arrive?",
        "options": [
          {
            "text": "What is the fastest option?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Fast go!",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Экспресс. Overnight delivery is $25.",
        "options": [
          {
            "text": "I will take that.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Pay much.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_50",
    "title": "Почта: Смена адреса",
    "nodes": {
      "start": {
        "text": "[Post Office] Вы переехали. What form do you need?",
        "options": [
          {
            "text": "I need a change of address form.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Change home form.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Держите. Fill this out and drop it in the box.",
        "options": [
          {
            "text": "Will do, thanks.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Ok I drop.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_51",
    "title": "Полиция: Кража кошелька",
    "nodes": {
      "start": {
        "text": "[Police Station] У вас украли бумажник. What seems to be the problem?",
        "options": [
          {
            "text": "My wallet was stolen on the subway.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Wallet gone.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Опишите. Can you describe the person who took it?",
        "options": [
          {
            "text": "I did not see their face.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "No look face.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_52",
    "title": "Полиция: Потеря паспорта",
    "nodes": {
      "start": {
        "text": "[Police Station] Вы потеряли документы. Are you reporting a crime?",
        "options": [
          {
            "text": "No, I lost my passport.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Passport lost.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Заполним. We need to file a missing item report.",
        "options": [
          {
            "text": "What details do you need?",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "What want?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_53",
    "title": "Полиция: Свидетель ДТП",
    "nodes": {
      "start": {
        "text": "[Police Station] Вы видели аварию. Did you witness the accident?",
        "options": [
          {
            "text": "Yes, the red car ran a red light.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Red car bad.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Номера? Did you catch the license plate?",
        "options": [
          {
            "text": "No, it happened too fast.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "No see plate.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_54",
    "title": "Полиция: Шумные соседи",
    "nodes": {
      "start": {
        "text": "[Police Station] Вы жалуетесь. How can we help?",
        "options": [
          {
            "text": "My neighbors are playing loud music.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Loud music bad.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Адрес. What is the address?",
        "options": [
          {
            "text": "123 Main Street, apartment 4.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "My home.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_55",
    "title": "Полиция: Справка о несудимости",
    "nodes": {
      "start": {
        "text": "[Police Station] Вам нужна бумажка. What do you need?",
        "options": [
          {
            "text": "I need a police clearance certificate.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give clean paper.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Цель? Is it for a visa application?",
        "options": [
          {
            "text": "Yes, exactly.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Yes visa.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_56",
    "title": "Вокзал: Покупка билета",
    "nodes": {
      "start": {
        "text": "[Train Station] Вы у кассы. Where to?",
        "options": [
          {
            "text": "A return ticket to Paris, please.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Go Paris back.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Время. When are you coming back?",
        "options": [
          {
            "text": "Next Tuesday.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Tuesday go.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_57",
    "title": "Вокзал: Поиск платформы",
    "nodes": {
      "start": {
        "text": "[Train Station] Вы не знаете куда идти. Do you need directions?",
        "options": [
          {
            "text": "Which platform for the train to Berlin?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Where Berlin train?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Табло. It departs from platform 9 in ten minutes.",
        "options": [
          {
            "text": "I better hurry then.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I run.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_58",
    "title": "Вокзал: Опоздание поезда",
    "nodes": {
      "start": {
        "text": "[Train Station] Поезд задерживается. May I help you?",
        "options": [
          {
            "text": "Is the 10 AM train delayed?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Train late?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Да. Yes, it is delayed by 20 minutes.",
        "options": [
          {
            "text": "Thank you for letting me know.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Ok wait.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_59",
    "title": "Вокзал: Потерянный багаж",
    "nodes": {
      "start": {
        "text": "[Train Station] Вы оставили сумку в вагоне. Lost and found, how can I help?",
        "options": [
          {
            "text": "I left my bag on the train.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Bag in train.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Номер. Do you remember your carriage number?",
        "options": [
          {
            "text": "I was in carriage 4.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Number 4.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_60",
    "title": "Вокзал: Еда в дорогу",
    "nodes": {
      "start": {
        "text": "[Train Station] Вы в киоске. What would you like?",
        "options": [
          {
            "text": "A sandwich and a coffee, please.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give eat and drink.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Оплата. That is 8 euros.",
        "options": [
          {
            "text": "Here is 10.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Take money.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_61",
    "title": "Автобус: Ожидание автобуса",
    "nodes": {
      "start": {
        "text": "[Bus Stop] Вы спрашиваете прохожего. Are you waiting for the 42?",
        "options": [
          {
            "text": "Yes, has it come yet?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Bus 42 where?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Ответ. No, it should be here in 5 minutes.",
        "options": [
          {
            "text": "Great, thank you.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Good 5.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_62",
    "title": "Автобус: Покупка билета",
    "nodes": {
      "start": {
        "text": "[Bus Stop] Вы зашли в автобус. Tickets please.",
        "options": [
          {
            "text": "Can I buy a ticket from you?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give ticket.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Только нал. Yes, but exact change only.",
        "options": [
          {
            "text": "I have coins.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Give change.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_63",
    "title": "Автобус: Поиск остановки",
    "nodes": {
      "start": {
        "text": "[Bus Stop] Вы в автобусе. Where are you getting off?",
        "options": [
          {
            "text": "Can you tell me when we reach the museum?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Museum stop when?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Помощь. Sure, I will let you know.",
        "options": [
          {
            "text": "I appreciate it.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "You say me.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_64",
    "title": "Автобус: Пропущенная остановка",
    "nodes": {
      "start": {
        "text": "[Bus Stop] Вы проехали мимо. Are you getting off here?",
        "options": [
          {
            "text": "No, I missed my stop.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Stop pass.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Совет. You can get off at the next one and walk back.",
        "options": [
          {
            "text": "I will do that.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I walk back.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_65",
    "title": "Автобус: Расписание",
    "nodes": {
      "start": {
        "text": "[Bus Stop] Вы смотрите на знак. Need help reading the schedule?",
        "options": [
          {
            "text": "How often does this bus run?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "When bus go?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Частота. Every 15 minutes during peak hours.",
        "options": [
          {
            "text": "That is convenient.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Good much.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_66",
    "title": "Такси: Посадка",
    "nodes": {
      "start": {
        "text": "[Taxi] Вы сели в машину. Where to, boss?",
        "options": [
          {
            "text": "Please take me to the airport.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Go airport.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Багаж. Do you want me to put your bags in the trunk?",
        "options": [
          {
            "text": "Yes, please.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Put back.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_67",
    "title": "Такси: Указание пути",
    "nodes": {
      "start": {
        "text": "[Taxi] Водитель спрашивает дорогу. Should I take the highway?",
        "options": [
          {
            "text": "Yes, it is much faster.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Go fast highway.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Пробки. There might be traffic, though.",
        "options": [
          {
            "text": "Let us risk it.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Risk go.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_68",
    "title": "Такси: Оплата",
    "nodes": {
      "start": {
        "text": "[Taxi] Вы приехали. Here we are. That is 30 dollars.",
        "options": [
          {
            "text": "Do you accept credit cards?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Card take?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Да. Yes, just tap it here.",
        "options": [
          {
            "text": "Keep the change.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "No change give.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_69",
    "title": "Такси: Остановка в пути",
    "nodes": {
      "start": {
        "text": "[Taxi] Вам нужно в банкомат. Are we going straight to the hotel?",
        "options": [
          {
            "text": "Can we stop at an ATM first?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Stop machine money.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Окей. Sure, there is one on the next corner.",
        "options": [
          {
            "text": "Perfect, I will be quick.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I fast.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_70",
    "title": "Такси: Забытая вещь",
    "nodes": {
      "start": {
        "text": "[Taxi] Вы звоните диспетчеру. Taxi dispatch, how can I help?",
        "options": [
          {
            "text": "I left my phone in a cab.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Phone in car.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Номер. Do you have the taxi number or receipt?",
        "options": [
          {
            "text": "I have the receipt right here.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Have paper.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_71",
    "title": "Музей: Билеты",
    "nodes": {
      "start": {
        "text": "[Museum] Вы у кассы музея. One adult ticket?",
        "options": [
          {
            "text": "Yes, and one student ticket as well.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Student give.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Окей. Do you have a valid student ID?",
        "options": [
          {
            "text": "Yes, here it is.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Look card.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_72",
    "title": "Музей: Аудиогид",
    "nodes": {
      "start": {
        "text": "[Museum] Вы хотите слушать экскурсию. Would you like an audio guide?",
        "options": [
          {
            "text": "Yes, do you have it in Russian?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give Russian voice.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Да. Yes, it costs an extra 5 dollars.",
        "options": [
          {
            "text": "I will take one.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Take it.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_73",
    "title": "Музей: Гардероб",
    "nodes": {
      "start": {
        "text": "[Museum] Вам нужно сдать куртку. Can I take your coat?",
        "options": [
          {
            "text": "Yes, and my umbrella too.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Take coat umbrella.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Бирка. Here is your ticket, do not lose it.",
        "options": [
          {
            "text": "I will put it in my pocket.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I keep.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_74",
    "title": "Музей: Поиск туалета",
    "nodes": {
      "start": {
        "text": "[Museum] Вам нужно отойти. Are you lost?",
        "options": [
          {
            "text": "Could you point me to the restrooms?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Where toilet?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Направление. Down the hall, past the Egyptian exhibit.",
        "options": [
          {
            "text": "Thanks for your help.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Ok I go.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_75",
    "title": "Музей: Фотографии",
    "nodes": {
      "start": {
        "text": "[Museum] Вы достаете камеру. Excuse me, sir.",
        "options": [
          {
            "text": "Is photography allowed here?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Can photo?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Ограничения. Yes, but without flash, please.",
        "options": [
          {
            "text": "Understood, no flash.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "No light ok.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_76",
    "title": "Кино: Покупка билетов",
    "nodes": {
      "start": {
        "text": "[Cinema] У кассы кинотеатра. What movie would you like to see?",
        "options": [
          {
            "text": "Two tickets for the new action movie, please.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Two action.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Места. Where would you like to sit?",
        "options": [
          {
            "text": "In the middle, towards the back.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Middle back sit.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_77",
    "title": "Кино: Попкорн",
    "nodes": {
      "start": {
        "text": "[Cinema] Вы покупаете снеки. Can I get you some popcorn?",
        "options": [
          {
            "text": "A large popcorn and two colas.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Popcorn big cola two.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Вкус. Sweet or salty popcorn?",
        "options": [
          {
            "text": "Half and half, if possible.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Sweet salt both.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_78",
    "title": "Кино: Поиск зала",
    "nodes": {
      "start": {
        "text": "[Cinema] Вы с билетом. Ticket check.",
        "options": [
          {
            "text": "Which screen is this playing on?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Where screen?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Зал. Screen 5, down the corridor on your left.",
        "options": [
          {
            "text": "Thank you.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Ok go.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_79",
    "title": "Кино: Кто-то шумит",
    "nodes": {
      "start": {
        "text": "[Cinema] В зале громко. Shhh!",
        "options": [
          {
            "text": "Could you please keep it down?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Shut up!",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Реакция. Oh, sorry about that.",
        "options": [
          {
            "text": "Thanks.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Good.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_80",
    "title": "Кино: После сеанса",
    "nodes": {
      "start": {
        "text": "[Cinema] Вы выходите. Did you enjoy the movie?",
        "options": [
          {
            "text": "Yes, the special effects were amazing.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Good effects.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Мнение. I thought the ending was a bit confusing.",
        "options": [
          {
            "text": "I agree, it was left open.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Ending strange.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_81",
    "title": "Спортзал: Покупка абонемента",
    "nodes": {
      "start": {
        "text": "[Gym] Вы на ресепшене. Are you looking to join the gym?",
        "options": [
          {
            "text": "Yes, what are your membership options?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Want gym card.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Варианты. We have monthly and yearly plans.",
        "options": [
          {
            "text": "I will start with one month.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Month give.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_82",
    "title": "Спортзал: Поиск тренажера",
    "nodes": {
      "start": {
        "text": "[Gym] Вы ищете беговую дорожку. Do you need help?",
        "options": [
          {
            "text": "Where are the treadmills?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Where run machine?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Этаж. They are upstairs in the cardio zone.",
        "options": [
          {
            "text": "Got it, thanks.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Up I go.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_83",
    "title": "Спортзал: Свободен ли тренажер?",
    "nodes": {
      "start": {
        "text": "[Gym] Кто-то стоит рядом. Are you using this?",
        "options": [
          {
            "text": "No, I am just resting between sets.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "I rest now.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Вопрос. Can I work in with you?",
        "options": [
          {
            "text": "Sure, go ahead.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "You do.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_84",
    "title": "Спортзал: Запись на класс",
    "nodes": {
      "start": {
        "text": "[Gym] Вы хотите на йогу. Can I help you book a class?",
        "options": [
          {
            "text": "I want to sign up for yoga at 6 PM.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Yoga 6 want.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Места. There are only two spots left.",
        "options": [
          {
            "text": "Book one for me, please.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Give one.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_85",
    "title": "Спортзал: Шкафчик не открывается",
    "nodes": {
      "start": {
        "text": "[Gym] Вы в раздевалке. Having trouble with the lock?",
        "options": [
          {
            "text": "Yes, my locker will not open.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Locker break.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Ключ. Let me try the master key.",
        "options": [
          {
            "text": "Thank you, my clothes are inside.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Clothes inside.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_86",
    "title": "Парк: Пикник",
    "nodes": {
      "start": {
        "text": "[Park] Вы ищете место. Is this spot taken?",
        "options": [
          {
            "text": "No, it is all yours.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Take it.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Спасибо. Great weather for a picnic, isn't it?",
        "options": [
          {
            "text": "Yes, it is absolutely beautiful today.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Good weather.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_87",
    "title": "Парк: Чужая собака",
    "nodes": {
      "start": {
        "text": "[Park] К вам подбежал пес. I am so sorry, he is friendly!",
        "options": [
          {
            "text": "It is okay, I love dogs.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Dog ok.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Имя. His name is Buster.",
        "options": [
          {
            "text": "Hi Buster, you are a good boy.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Good dog.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_88",
    "title": "Парк: Прокат велосипеда",
    "nodes": {
      "start": {
        "text": "[Park] Вы у стойки. Would you like to rent a bike?",
        "options": [
          {
            "text": "How much is it for an hour?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Rent hour how much?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Цена. It is 10 dollars an hour.",
        "options": [
          {
            "text": "I will take one for two hours.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Two hours give.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_89",
    "title": "Парк: Потерялся",
    "nodes": {
      "start": {
        "text": "[Park] Вы ищете выход. Are you looking for something?",
        "options": [
          {
            "text": "Where is the main exit?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Exit where?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Направление. Just follow this path straight ahead.",
        "options": [
          {
            "text": "Thank you for the help.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Ok go straight.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_90",
    "title": "Парк: Кормление уток",
    "nodes": {
      "start": {
        "text": "[Park] Вы стоите у пруда. Please do not feed them bread.",
        "options": [
          {
            "text": "Oh, what should I give them instead?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "No bread why?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Еда. Seeds or peas are much better for them.",
        "options": [
          {
            "text": "I will remember that for next time.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Ok I remember.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_91",
    "title": "Библиотека: Регистрация",
    "nodes": {
      "start": {
        "text": "[Library] Вы хотите взять книгу. Do you have a library card?",
        "options": [
          {
            "text": "Not yet, how do I apply for one?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Give card.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Анкета. Just fill out this form and show your ID.",
        "options": [
          {
            "text": "Here is my driver's license.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Look ID.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_92",
    "title": "Библиотека: Поиск книги",
    "nodes": {
      "start": {
        "text": "[Library] Вы ищете фантастику. Need help finding a book?",
        "options": [
          {
            "text": "Where is the science fiction section?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Where space book?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Ряд. Aisle 3 on the second floor.",
        "options": [
          {
            "text": "I will go check it out.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I go 3.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_93",
    "title": "Библиотека: Срок возврата",
    "nodes": {
      "start": {
        "text": "[Library] Вы берете книгу. You can keep this for two weeks.",
        "options": [
          {
            "text": "Can I renew it online if I need more time?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "More time how?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Да. Yes, through our website.",
        "options": [
          {
            "text": "That is very convenient.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Good.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_94",
    "title": "Библиотека: Тишина",
    "nodes": {
      "start": {
        "text": "[Library] У вас зазвонил телефон. Excuse me, this is a quiet zone.",
        "options": [
          {
            "text": "I am so sorry, I will put it on silent.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Sorry, I silent.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Спасибо. Thank you for understanding.",
        "options": [
          {
            "text": "My apologies again.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Sorry.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_95",
    "title": "Библиотека: Компьютеры",
    "nodes": {
      "start": {
        "text": "[Library] Вам нужен интернет. Do you want to use a computer?",
        "options": [
          {
            "text": "Yes, is there a time limit?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "How long compute?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Лимит. You get one hour per session.",
        "options": [
          {
            "text": "That is plenty of time for me.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Good hour.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_96",
    "title": "Парикмахерская: Запись",
    "nodes": {
      "start": {
        "text": "[Hair Salon] Вы звоните. Salon, how can I help?",
        "options": [
          {
            "text": "I would like to book a haircut for tomorrow.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Cut hair tomorrow.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Время. Does 2 PM work for you?",
        "options": [
          {
            "text": "Yes, that is perfect.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Ok 2.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_97",
    "title": "Парикмахерская: Обсуждение стрижки",
    "nodes": {
      "start": {
        "text": "[Hair Salon] Вы в кресле. How would you like your hair today?",
        "options": [
          {
            "text": "Just a trim, please. Keep the length.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Cut little.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Слои? Do you want any layers added?",
        "options": [
          {
            "text": "Maybe just a few framing the face.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Face cut little.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_98",
    "title": "Парикмахерская: Цвет",
    "nodes": {
      "start": {
        "text": "[Hair Salon] Вы хотите покраситься. Are we doing color today?",
        "options": [
          {
            "text": "I am thinking about going blonde.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Make blonde.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Оттенок. Ash blonde or golden?",
        "options": [
          {
            "text": "Let us do an ash blonde.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Ash do.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_99",
    "title": "Парикмахерская: Мытье головы",
    "nodes": {
      "start": {
        "text": "[Hair Salon] Вода слишком горячая. How is the water temperature?",
        "options": [
          {
            "text": "It is a bit too hot, actually.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Water fire!",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Извинения. Sorry about that, is this better?",
        "options": [
          {
            "text": "Yes, that is much better.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Ok now.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_100",
    "title": "Парикмахерская: Оплата и чаевые",
    "nodes": {
      "start": {
        "text": "[Hair Salon] Вы у кассы. That will be 45 dollars.",
        "options": [
          {
            "text": "Here is 55. Keep the change for a tip.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Take 55, keep rest.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Спасибо. Thank you very much! Have a great day.",
        "options": [
          {
            "text": "You too, goodbye.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Bye.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_101",
    "title": "Магазин техники: Покупка телефона",
    "nodes": {
      "start": {
        "text": "[Tech Store] Вы выбираете смартфон. Are you looking for a new phone?",
        "options": [
          {
            "text": "Yes, what are the latest models?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "New phone what?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Варианты. We have the new Pro model on display here.",
        "options": [
          {
            "text": "Can I test the camera?",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "I look camera.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_102",
    "title": "Магазин техники: Гарантия",
    "nodes": {
      "start": {
        "text": "[Tech Store] Вы оплачиваете покупку. Would you like to buy extended warranty?",
        "options": [
          {
            "text": "What does it cover?",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Why buy?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Покрытие. It covers accidental damage and screen repairs.",
        "options": [
          {
            "text": "Yes, I will add it.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Add it.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_103",
    "title": "Магазин техники: Ремонт ноутбука",
    "nodes": {
      "start": {
        "text": "[Tech Store] Вы у стойки сервиса. What is wrong with your laptop?",
        "options": [
          {
            "text": "The battery drains very quickly.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Battery fast die.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Диагностика. We will need to run some diagnostics.",
        "options": [
          {
            "text": "How long will that take?",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "When finish?",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_104",
    "title": "Магазин техники: Поиск кабеля",
    "nodes": {
      "start": {
        "text": "[Tech Store] Вам нужна зарядка. Can I help you find an accessory?",
        "options": [
          {
            "text": "I need a USB-C charging cable.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Need cable phone.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Длина. Do you prefer a one-meter or two-meter cable?",
        "options": [
          {
            "text": "Two meters, please.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Give two.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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
    "id": "quest_105",
    "title": "Магазин техники: Возврат",
    "nodes": {
      "start": {
        "text": "[Tech Store] Гарнитура не работает. Are you returning these headphones?",
        "options": [
          {
            "text": "Yes, the left earphone has no sound.",
            "nextScene": "honest",
            "effect": "good"
          },
          {
            "text": "Headphone break left.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "honest": {
        "text": "Замена. Do you want a refund or a replacement?",
        "options": [
          {
            "text": "I would like a replacement.",
            "nextScene": "success",
            "effect": "good"
          },
          {
            "text": "Give new.",
            "nextScene": "grammar_fail",
            "effect": "bad"
          }
        ]
      },
      "grammar_fail": {
        "text": "Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.",
        "options": [
          {
            "text": "Попробовать снова",
            "nextScene": "start"
          }
        ]
      },
      "success": {
        "text": "Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.",
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

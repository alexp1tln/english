const fs = require('fs');

const places = [
  { name: 'Аэропорт', eng: 'Airport', scenarios: [
    { title: 'Регистрация на рейс', prompt: 'Вы у стойки регистрации.', npc: 'Hello, your passport and ticket please.', good1: 'Here they are.', bad1: 'Give ticket!', next: 'Отлично.', npc2: 'Do you have any luggage to check in?', good2: 'Yes, one suitcase.', bad2: 'I have bag.' },
    { title: 'Прохождение таможни', prompt: 'Таможенный контроль.', npc: 'What is the purpose of your visit?', good1: 'Tourism.', bad1: 'I go walk.', next: 'Понятно.', npc2: 'How long are you staying?', good2: 'For two weeks.', bad2: 'Much days.' },
    { title: 'Поиск выхода на посадку', prompt: 'Вы ищете свой гейт.', npc: 'Can I help you find something?', good1: 'Where is gate 4?', bad1: 'Where 4?', next: 'Конечно.', npc2: 'It is down the hall to the right.', good2: 'Thank you.', bad2: 'Give go.' },
    { title: 'Проблема с багажом', prompt: 'Ваш багаж не приехал.', npc: 'Did you lose your baggage?', good1: 'Yes, I cannot find my suitcase.', bad1: 'Bag no.', next: 'Опишите его.', npc2: 'What does it look like?', good2: 'It is a large blue suitcase.', bad2: 'Blue big.' },
    { title: 'Покупка сувениров', prompt: 'В Duty Free.', npc: 'Are you paying with cash or card?', good1: 'By card, please.', bad1: 'Give card.', next: 'Хорошо.', npc2: 'Do you need a bag?', good2: 'No, thank you.', bad2: 'No bag give.' }
  ]},
  { name: 'Отель', eng: 'Hotel', scenarios: [
    { title: 'Заселение в номер', prompt: 'Вы на ресепшене.', npc: 'Welcome! Do you have a reservation?', good1: 'Yes, under the name Smith.', bad1: 'I want sleep.', next: 'Нашел.', npc2: 'Could you fill out this form?', good2: 'Sure.', bad2: 'No write.' },
    { title: 'Проблема с ключом', prompt: 'Ваш ключ не работает.', npc: 'How can I help you?', good1: 'My keycard is not working.', bad1: 'Key dead.', next: 'Давайте проверим.', npc2: 'What is your room number?', good2: 'Room 304.', bad2: '304 number.' },
    { title: 'Заказ еды в номер', prompt: 'Вы звоните в обслуживание.', npc: 'Room service, what would you like?', good1: 'I would like a sandwich.', bad1: 'Give bread.', next: 'Принято.', npc2: 'Anything to drink?', good2: 'A bottle of water.', bad2: 'Water me.' },
    { title: 'Выселение', prompt: 'Вы покидаете отель.', npc: 'Are you checking out?', good1: 'Yes, here is my key.', bad1: 'I go out.', next: 'Надеюсь, вам понравилось.', npc2: 'Did you have anything from the minibar?', good2: 'No, I did not.', bad2: 'No eat minibar.' },
    { title: 'Просьба о полотенцах', prompt: 'Вам нужны полотенца.', npc: 'Housekeeping, how can I help?', good1: 'Could I get some extra towels?', bad1: 'Give towel.', next: 'Сейчас принесу.', npc2: 'How many do you need?', good2: 'Two, please.', bad2: 'Two want.' }
  ]},
  { name: 'Ресторан', eng: 'Restaurant', scenarios: [
    { title: 'Заказ столика', prompt: 'Вы у входа.', npc: 'Do you have a reservation?', good1: 'No, do you have a table for two?', bad1: 'Table two!', next: 'Минутку.', npc2: 'Would you like to sit inside or outside?', good2: 'Outside, please.', bad2: 'Out sit.' },
    { title: 'Заказ еды', prompt: 'Официант подошел.', npc: 'Are you ready to order?', good1: 'Yes, I will have the steak.', bad1: 'Give meat.', next: 'Отличный выбор.', npc2: 'How would you like it cooked?', good2: 'Medium rare.', bad2: 'Middle fire.' },
    { title: 'Проблема с блюдом', prompt: 'Еда холодная.', npc: 'Is everything okay with your meal?', good1: 'Actually, my soup is cold.', bad1: 'Soup cold, bad.', next: 'Извините.', npc2: 'I will bring you a hot one right away.', good2: 'I appreciate it.', bad2: 'Fast do.' },
    { title: 'Оплата счета', prompt: 'Вы поели.', npc: 'Here is your bill.', good1: 'Can I pay by card?', bad1: 'Card take.', next: 'Да.', npc2: 'Do you want to leave a tip on the card?', good2: 'Yes, add 10 percent.', bad2: 'Ten percent give.' },
    { title: 'Просьба упаковать', prompt: 'Осталась еда.', npc: 'Would you like a box for that?', good1: 'Yes, please pack it to go.', bad1: 'Give box.', next: 'Конечно.', npc2: 'I will bring it in a moment.', good2: 'Take your time.', bad2: 'Time go.' }
  ]},
  { name: 'Кофейня', eng: 'Coffee Shop', scenarios: [
    { title: 'Выбор кофе', prompt: 'Вы у кассы.', npc: 'What can I get you?', good1: 'A large latte, please.', bad1: 'Give big latte.', next: 'Хорошо.', npc2: 'For here or to go?', good2: 'To go.', bad2: 'Go me.' },
    { title: 'Выбор десерта', prompt: 'Вы смотрите на витрину.', npc: 'Would you like something sweet?', good1: 'Yes, that muffin looks good.', bad1: 'Muffin give.', next: 'Вкусно.', npc2: 'Do you want it warmed up?', good2: 'Yes, please.', bad2: 'Hot it.' },
    { title: 'Альтернативное молоко', prompt: 'Вы заказываете капучино.', npc: 'What kind of milk do you prefer?', good1: 'Oat milk, please.', bad1: 'Oat drink.', next: 'Принято.', npc2: 'Any syrups?', good2: 'No, just the coffee.', bad2: 'No sweet.' },
    { title: 'Вопрос про Wi-Fi', prompt: 'Вы сели за стол.', npc: 'Here is your coffee.', good1: 'What is the Wi-Fi password?', bad1: 'Internet give.', next: 'Без проблем.', npc2: 'It is written on your receipt.', good2: 'Ah, I see it.', bad2: 'I look.' },
    { title: 'Ошибка в заказе', prompt: 'Вам дали чай вместо кофе.', npc: 'Here is your tea.', good1: 'Excuse me, I ordered a coffee.', bad1: 'No tea!', next: 'Простите.', npc2: 'I will remake it right now.', good2: 'Thank you.', bad2: 'Make fast.' }
  ]},
  { name: 'Магазин одежды', eng: 'Clothes Store', scenarios: [
    { title: 'Поиск размера', prompt: 'Вы смотрите рубашку.', npc: 'Do you need help finding a size?', good1: 'Yes, do you have this in medium?', bad1: 'Give medium.', next: 'Посмотрим.', npc2: 'Here is a medium. Would you like to try it on?', good2: 'Where is the fitting room?', bad2: 'Where put on?' },
    { title: 'Примерка', prompt: 'Вы в примерочной.', npc: 'How does it fit?', good1: 'It is a bit too tight.', bad1: 'Small much.', next: 'Жаль.', npc2: 'Shall I bring a larger size?', good2: 'Yes, a large please.', bad2: 'Big give.' },
    { title: 'Поиск отдела', prompt: 'Вы зашли в магазин.', npc: 'Welcome! What are you looking for?', good1: 'Where is the men\'s section?', bad1: 'Man clothes where?', next: 'Там.', npc2: 'It is upstairs on the second floor.', good2: 'Got it, thanks.', bad2: 'I go up.' },
    { title: 'Скидки', prompt: 'Вы смотрите на ценник.', npc: 'Those are on sale today.', good1: 'How much is the discount?', bad1: 'How cheap?', next: 'Выгодно.', npc2: 'It is 30 percent off the tag price.', good2: 'That is a great deal.', bad2: 'Good buy.' },
    { title: 'Возврат товара', prompt: 'Вы у кассы.', npc: 'Are you returning this?', good1: 'Yes, it did not fit well.', bad1: 'Bad clothes.', next: 'Понятно.', npc2: 'Do you have the receipt?', good2: 'Here it is.', bad2: 'Take paper.' }
  ]},
  { name: 'Супермаркет', eng: 'Grocery Store', scenarios: [
    { title: 'Поиск продукта', prompt: 'Вы ищете молоко.', npc: 'Can I help you?', good1: 'Where can I find the dairy aisle?', bad1: 'Where milk?', next: 'Конечно.', npc2: 'Aisle 4, on the left.', good2: 'Thank you.', bad2: 'Ok I go.' },
    { title: 'На кассе', prompt: 'Вы выкладываете товар.', npc: 'Do you need any bags?', good1: 'Yes, two bags, please.', bad1: 'Give bag two.', next: 'С вас 20 баксов.', npc2: 'Cash or card?', good2: 'I will pay by card.', bad2: 'Card pay.' },
    { title: 'Взвешивание', prompt: 'Вы покупаете яблоки.', npc: 'You need to weigh these first.', good1: 'Oh, where is the scale?', bad1: 'Where weight?', next: 'Там.', npc2: 'Right next to the tomatoes.', good2: 'I will be right back.', bad2: 'I go back.' },
    { title: 'Просроченный товар', prompt: 'Вы нашли старый сыр.', npc: 'Did you find everything okay?', good1: 'This cheese is expired.', bad1: 'Cheese bad old.', next: 'Ой.', npc2: 'Sorry, let me get you a fresh one.', good2: 'I would appreciate that.', bad2: 'Give fresh.' },
    { title: 'Карта лояльности', prompt: 'Кассир спрашивает.', npc: 'Do you have our loyalty card?', good1: 'No, I don\'t have one.', bad1: 'No card.', next: 'Предлагаю.', npc2: 'Would you like to sign up?', good2: 'Not today, thanks.', bad2: 'No sign.' }
  ]},
  { name: 'Аптека', eng: 'Pharmacy', scenarios: [
    { title: 'Лекарство от головы', prompt: 'У вас болит голова.', npc: 'How can I help you today?', good1: 'I need something for a headache.', bad1: 'Head hurt, give pill.', next: 'Есть варианты.', npc2: 'Do you prefer ibuprofen or paracetamol?', good2: 'Ibuprofen, please.', bad2: 'Give first.' },
    { title: 'По рецепту', prompt: 'Вы протягиваете бумажку.', npc: 'Are you picking up a prescription?', good1: 'Yes, my doctor sent it over.', bad1: 'Doctor give paper.', next: 'Ищу.', npc2: 'Can I have your name and date of birth?', good2: 'John Doe, 12th of May.', bad2: 'My name John.' },
    { title: 'Пластыри', prompt: 'Вы порезались.', npc: 'Do you need help finding anything?', good1: 'Where are the bandages?', bad1: 'Where tape for blood?', next: 'Вон там.', npc2: 'Aisle 2, bottom shelf.', good2: 'Thank you so much.', bad2: 'Ok go.' },
    { title: 'Аллергия', prompt: 'Вы чихаете.', npc: 'Are you looking for allergy medicine?', good1: 'Yes, my eyes are very itchy.', bad1: 'Eyes bad want pill.', next: 'Попробуйте это.', npc2: 'Take this once a day.', good2: 'Does it cause drowsiness?', bad2: 'I sleep?' },
    { title: 'Витамины', prompt: 'Вы ищете витамин С.', npc: 'Looking for supplements?', good1: 'Yes, do you have vitamin C?', bad1: 'Give vitamin C.', next: 'Да.', npc2: 'We have gummies or tablets.', good2: 'Tablets are fine.', bad2: 'Tablet give.' }
  ]},
  { name: 'Больница', eng: 'Hospital', scenarios: [
    { title: 'Регистратура', prompt: 'Вы пришли на прием.', npc: 'Do you have an appointment?', good1: 'Yes, with Dr. Smith at 2 PM.', bad1: 'I see doctor.', next: 'Заполните.', npc2: 'Please fill out these forms and take a seat.', good2: 'Will do.', bad2: 'I sit.' },
    { title: 'Симптомы', prompt: 'Врач спрашивает.', npc: 'What seems to be the problem?', good1: 'I have a terrible sore throat.', bad1: 'Throat bad.', next: 'Давно?', npc2: 'How long have you had it?', good2: 'Since yesterday morning.', bad2: 'Yesterday start.' },
    { title: 'Оплата приема', prompt: 'Вы на выходе.', npc: 'That will be 50 dollars.', good1: 'Here is my insurance card.', bad1: 'Take money.', next: 'Спасибо.', npc2: 'Your insurance covers it fully.', good2: 'That is good to hear.', bad2: 'Good.' },
    { title: 'Анализ крови', prompt: 'Медсестра с иглой.', npc: 'Please roll up your sleeve.', good1: 'I am a bit afraid of needles.', bad1: 'No needle!', next: 'Не бойтесь.', npc2: 'It will just be a quick pinch.', good2: 'Okay, I am ready.', bad2: 'Do fast.' },
    { title: 'Посещение больного', prompt: 'Вы ищете палату.', npc: 'Who are you here to see?', good1: 'My friend, Mark Johnson.', bad1: 'I see friend.', next: 'Этаж.', npc2: 'He is in room 412 on the 4th floor.', good2: 'Thank you.', bad2: 'I go 4.' }
  ]},
  { name: 'Банк', eng: 'Bank', scenarios: [
    { title: 'Открытие счета', prompt: 'Вы у менеджера.', npc: 'How can I help you today?', good1: 'I would like to open a checking account.', bad1: 'Open money account.', next: 'Документы.', npc2: 'Do you have your ID and proof of address?', good2: 'Yes, here they are.', bad2: 'Give papers.' },
    { title: 'Обмен валюты', prompt: 'Вы у кассы.', npc: 'Are you depositing or withdrawing?', good1: 'I want to exchange some euros to dollars.', bad1: 'Change money.', next: 'Курс.', npc2: 'The exchange rate is 1.1 today.', good2: 'That works for me.', bad2: 'Ok change.' },
    { title: 'Проблема с картой', prompt: 'Банкомат съел карту.', npc: 'Did you lose your card?', good1: 'The ATM swallowed my card.', bad1: 'Machine eat card.', next: 'Заблокируем.', npc2: 'We will need to issue a new one.', good2: 'How long will that take?', bad2: 'When new?' },
    { title: 'Снятие наличных', prompt: 'Вам нужны деньги.', npc: 'How much would you like to withdraw?', good1: 'Two hundred dollars, please.', bad1: 'Give two hundred.', next: 'Купюры.', npc2: 'How would you like your bills?', good2: 'In twenties, please.', bad2: 'Give twenties.' },
    { title: 'Перевод средств', prompt: 'Вам нужно отправить деньги.', npc: 'Where are you sending the money?', good1: 'To a bank account in Spain.', bad1: 'Send Spain.', next: 'Реквизиты.', npc2: 'I need the IBAN number.', good2: 'I have it written down here.', bad2: 'Here number.' }
  ]},
  { name: 'Почта', eng: 'Post Office', scenarios: [
    { title: 'Отправка посылки', prompt: 'Вы с коробкой.', npc: 'Where is this package going?', good1: 'I need to send this to London.', bad1: 'Go London.', next: 'Вес.', npc2: 'Please place it on the scale.', good2: 'Sure, here you go.', bad2: 'I put.' },
    { title: 'Покупка марок', prompt: 'Вам нужны марки.', npc: 'Can I help you?', good1: 'I would like to buy some stamps.', bad1: 'Give stamps.', next: 'Сколько?', npc2: 'How many books of stamps do you need?', good2: 'Just one book, please.', bad2: 'One give.' },
    { title: 'Получение письма', prompt: 'Вам пришло извещение.', npc: 'Do you have a pick-up slip?', good1: 'Yes, and here is my ID.', bad1: 'Give letter.', next: 'Ищу.', npc2: 'Here is your registered mail. Please sign here.', good2: 'Signing now, thank you.', bad2: 'I sign.' },
    { title: 'Быстрая доставка', prompt: 'Срочное письмо.', npc: 'How fast do you want this to arrive?', good1: 'What is the fastest option?', bad1: 'Fast go!', next: 'Экспресс.', npc2: 'Overnight delivery is $25.', good2: 'I will take that.', bad2: 'Pay much.' },
    { title: 'Смена адреса', prompt: 'Вы переехали.', npc: 'What form do you need?', good1: 'I need a change of address form.', bad1: 'Change home form.', next: 'Держите.', npc2: 'Fill this out and drop it in the box.', good2: 'Will do, thanks.', bad2: 'Ok I drop.' }
  ]},
  { name: 'Полиция', eng: 'Police Station', scenarios: [
    { title: 'Кража кошелька', prompt: 'У вас украли бумажник.', npc: 'What seems to be the problem?', good1: 'My wallet was stolen on the subway.', bad1: 'Wallet gone.', next: 'Опишите.', npc2: 'Can you describe the person who took it?', good2: 'I did not see their face.', bad2: 'No look face.' },
    { title: 'Потеря паспорта', prompt: 'Вы потеряли документы.', npc: 'Are you reporting a crime?', good1: 'No, I lost my passport.', bad1: 'Passport lost.', next: 'Заполним.', npc2: 'We need to file a missing item report.', good2: 'What details do you need?', bad2: 'What want?' },
    { title: 'Свидетель ДТП', prompt: 'Вы видели аварию.', npc: 'Did you witness the accident?', good1: 'Yes, the red car ran a red light.', bad1: 'Red car bad.', next: 'Номера?', npc2: 'Did you catch the license plate?', good2: 'No, it happened too fast.', bad2: 'No see plate.' },
    { title: 'Шумные соседи', prompt: 'Вы жалуетесь.', npc: 'How can we help?', good1: 'My neighbors are playing loud music.', bad1: 'Loud music bad.', next: 'Адрес.', npc2: 'What is the address?', good2: '123 Main Street, apartment 4.', bad2: 'My home.' },
    { title: 'Справка о несудимости', prompt: 'Вам нужна бумажка.', npc: 'What do you need?', good1: 'I need a police clearance certificate.', bad1: 'Give clean paper.', next: 'Цель?', npc2: 'Is it for a visa application?', good2: 'Yes, exactly.', bad2: 'Yes visa.' }
  ]},
  { name: 'Вокзал', eng: 'Train Station', scenarios: [
    { title: 'Покупка билета', prompt: 'Вы у кассы.', npc: 'Where to?', good1: 'A return ticket to Paris, please.', bad1: 'Go Paris back.', next: 'Время.', npc2: 'When are you coming back?', good2: 'Next Tuesday.', bad2: 'Tuesday go.' },
    { title: 'Поиск платформы', prompt: 'Вы не знаете куда идти.', npc: 'Do you need directions?', good1: 'Which platform for the train to Berlin?', bad1: 'Where Berlin train?', next: 'Табло.', npc2: 'It departs from platform 9 in ten minutes.', good2: 'I better hurry then.', bad2: 'I run.' },
    { title: 'Опоздание поезда', prompt: 'Поезд задерживается.', npc: 'May I help you?', good1: 'Is the 10 AM train delayed?', bad1: 'Train late?', next: 'Да.', npc2: 'Yes, it is delayed by 20 minutes.', good2: 'Thank you for letting me know.', bad2: 'Ok wait.' },
    { title: 'Потерянный багаж', prompt: 'Вы оставили сумку в вагоне.', npc: 'Lost and found, how can I help?', good1: 'I left my bag on the train.', bad1: 'Bag in train.', next: 'Номер.', npc2: 'Do you remember your carriage number?', good2: 'I was in carriage 4.', bad2: 'Number 4.' },
    { title: 'Еда в дорогу', prompt: 'Вы в киоске.', npc: 'What would you like?', good1: 'A sandwich and a coffee, please.', bad1: 'Give eat and drink.', next: 'Оплата.', npc2: 'That is 8 euros.', good2: 'Here is 10.', bad2: 'Take money.' }
  ]},
  { name: 'Автобус', eng: 'Bus Stop', scenarios: [
    { title: 'Ожидание автобуса', prompt: 'Вы спрашиваете прохожего.', npc: 'Are you waiting for the 42?', good1: 'Yes, has it come yet?', bad1: 'Bus 42 where?', next: 'Ответ.', npc2: 'No, it should be here in 5 minutes.', good2: 'Great, thank you.', bad2: 'Good 5.' },
    { title: 'Покупка билета', prompt: 'Вы зашли в автобус.', npc: 'Tickets please.', good1: 'Can I buy a ticket from you?', bad1: 'Give ticket.', next: 'Только нал.', npc2: 'Yes, but exact change only.', good2: 'I have coins.', bad2: 'Give change.' },
    { title: 'Поиск остановки', prompt: 'Вы в автобусе.', npc: 'Where are you getting off?', good1: 'Can you tell me when we reach the museum?', bad1: 'Museum stop when?', next: 'Помощь.', npc2: 'Sure, I will let you know.', good2: 'I appreciate it.', bad2: 'You say me.' },
    { title: 'Пропущенная остановка', prompt: 'Вы проехали мимо.', npc: 'Are you getting off here?', good1: 'No, I missed my stop.', bad1: 'Stop pass.', next: 'Совет.', npc2: 'You can get off at the next one and walk back.', good2: 'I will do that.', bad2: 'I walk back.' },
    { title: 'Расписание', prompt: 'Вы смотрите на знак.', npc: 'Need help reading the schedule?', good1: 'How often does this bus run?', bad1: 'When bus go?', next: 'Частота.', npc2: 'Every 15 minutes during peak hours.', good2: 'That is convenient.', bad2: 'Good much.' }
  ]},
  { name: 'Такси', eng: 'Taxi', scenarios: [
    { title: 'Посадка', prompt: 'Вы сели в машину.', npc: 'Where to, boss?', good1: 'Please take me to the airport.', bad1: 'Go airport.', next: 'Багаж.', npc2: 'Do you want me to put your bags in the trunk?', good2: 'Yes, please.', bad2: 'Put back.' },
    { title: 'Указание пути', prompt: 'Водитель спрашивает дорогу.', npc: 'Should I take the highway?', good1: 'Yes, it is much faster.', bad1: 'Go fast highway.', next: 'Пробки.', npc2: 'There might be traffic, though.', good2: 'Let us risk it.', bad2: 'Risk go.' },
    { title: 'Оплата', prompt: 'Вы приехали.', npc: 'Here we are. That is 30 dollars.', good1: 'Do you accept credit cards?', bad1: 'Card take?', next: 'Да.', npc2: 'Yes, just tap it here.', good2: 'Keep the change.', bad2: 'No change give.' },
    { title: 'Остановка в пути', prompt: 'Вам нужно в банкомат.', npc: 'Are we going straight to the hotel?', good1: 'Can we stop at an ATM first?', bad1: 'Stop machine money.', next: 'Окей.', npc2: 'Sure, there is one on the next corner.', good2: 'Perfect, I will be quick.', bad2: 'I fast.' },
    { title: 'Забытая вещь', prompt: 'Вы звоните диспетчеру.', npc: 'Taxi dispatch, how can I help?', good1: 'I left my phone in a cab.', bad1: 'Phone in car.', next: 'Номер.', npc2: 'Do you have the taxi number or receipt?', good2: 'I have the receipt right here.', bad2: 'Have paper.' }
  ]},
  { name: 'Музей', eng: 'Museum', scenarios: [
    { title: 'Билеты', prompt: 'Вы у кассы музея.', npc: 'One adult ticket?', good1: 'Yes, and one student ticket as well.', bad1: 'Student give.', next: 'Окей.', npc2: 'Do you have a valid student ID?', good2: 'Yes, here it is.', bad2: 'Look card.' },
    { title: 'Аудиогид', prompt: 'Вы хотите слушать экскурсию.', npc: 'Would you like an audio guide?', good1: 'Yes, do you have it in Russian?', bad1: 'Give Russian voice.', next: 'Да.', npc2: 'Yes, it costs an extra 5 dollars.', good2: 'I will take one.', bad2: 'Take it.' },
    { title: 'Гардероб', prompt: 'Вам нужно сдать куртку.', npc: 'Can I take your coat?', good1: 'Yes, and my umbrella too.', bad1: 'Take coat umbrella.', next: 'Бирка.', npc2: 'Here is your ticket, do not lose it.', good2: 'I will put it in my pocket.', bad2: 'I keep.' },
    { title: 'Поиск туалета', prompt: 'Вам нужно отойти.', npc: 'Are you lost?', good1: 'Could you point me to the restrooms?', bad1: 'Where toilet?', next: 'Направление.', npc2: 'Down the hall, past the Egyptian exhibit.', good2: 'Thanks for your help.', bad2: 'Ok I go.' },
    { title: 'Фотографии', prompt: 'Вы достаете камеру.', npc: 'Excuse me, sir.', good1: 'Is photography allowed here?', bad1: 'Can photo?', next: 'Ограничения.', npc2: 'Yes, but without flash, please.', good2: 'Understood, no flash.', bad2: 'No light ok.' }
  ]},
  { name: 'Кино', eng: 'Cinema', scenarios: [
    { title: 'Покупка билетов', prompt: 'У кассы кинотеатра.', npc: 'What movie would you like to see?', good1: 'Two tickets for the new action movie, please.', bad1: 'Two action.', next: 'Места.', npc2: 'Where would you like to sit?', good2: 'In the middle, towards the back.', bad2: 'Middle back sit.' },
    { title: 'Попкорн', prompt: 'Вы покупаете снеки.', npc: 'Can I get you some popcorn?', good1: 'A large popcorn and two colas.', bad1: 'Popcorn big cola two.', next: 'Вкус.', npc2: 'Sweet or salty popcorn?', good2: 'Half and half, if possible.', bad2: 'Sweet salt both.' },
    { title: 'Поиск зала', prompt: 'Вы с билетом.', npc: 'Ticket check.', good1: 'Which screen is this playing on?', bad1: 'Where screen?', next: 'Зал.', npc2: 'Screen 5, down the corridor on your left.', good2: 'Thank you.', bad2: 'Ok go.' },
    { title: 'Кто-то шумит', prompt: 'В зале громко.', npc: 'Shhh!', good1: 'Could you please keep it down?', bad1: 'Shut up!', next: 'Реакция.', npc2: 'Oh, sorry about that.', good2: 'Thanks.', bad2: 'Good.' },
    { title: 'После сеанса', prompt: 'Вы выходите.', npc: 'Did you enjoy the movie?', good1: 'Yes, the special effects were amazing.', bad1: 'Good effects.', next: 'Мнение.', npc2: 'I thought the ending was a bit confusing.', good2: 'I agree, it was left open.', bad2: 'Ending strange.' }
  ]},
  { name: 'Спортзал', eng: 'Gym', scenarios: [
    { title: 'Покупка абонемента', prompt: 'Вы на ресепшене.', npc: 'Are you looking to join the gym?', good1: 'Yes, what are your membership options?', bad1: 'Want gym card.', next: 'Варианты.', npc2: 'We have monthly and yearly plans.', good2: 'I will start with one month.', bad2: 'Month give.' },
    { title: 'Поиск тренажера', prompt: 'Вы ищете беговую дорожку.', npc: 'Do you need help?', good1: 'Where are the treadmills?', bad1: 'Where run machine?', next: 'Этаж.', npc2: 'They are upstairs in the cardio zone.', good2: 'Got it, thanks.', bad2: 'Up I go.' },
    { title: 'Свободен ли тренажер?', prompt: 'Кто-то стоит рядом.', npc: 'Are you using this?', good1: 'No, I am just resting between sets.', bad1: 'I rest now.', next: 'Вопрос.', npc2: 'Can I work in with you?', good2: 'Sure, go ahead.', bad2: 'You do.' },
    { title: 'Запись на класс', prompt: 'Вы хотите на йогу.', npc: 'Can I help you book a class?', good1: 'I want to sign up for yoga at 6 PM.', bad1: 'Yoga 6 want.', next: 'Места.', npc2: 'There are only two spots left.', good2: 'Book one for me, please.', bad2: 'Give one.' },
    { title: 'Шкафчик не открывается', prompt: 'Вы в раздевалке.', npc: 'Having trouble with the lock?', good1: 'Yes, my locker will not open.', bad1: 'Locker break.', next: 'Ключ.', npc2: 'Let me try the master key.', good2: 'Thank you, my clothes are inside.', bad2: 'Clothes inside.' }
  ]},
  { name: 'Парк', eng: 'Park', scenarios: [
    { title: 'Пикник', prompt: 'Вы ищете место.', npc: 'Is this spot taken?', good1: 'No, it is all yours.', bad1: 'Take it.', next: 'Спасибо.', npc2: 'Great weather for a picnic, isn\'t it?', good2: 'Yes, it is absolutely beautiful today.', bad2: 'Good weather.' },
    { title: 'Чужая собака', prompt: 'К вам подбежал пес.', npc: 'I am so sorry, he is friendly!', good1: 'It is okay, I love dogs.', bad1: 'Dog ok.', next: 'Имя.', npc2: 'His name is Buster.', good2: 'Hi Buster, you are a good boy.', bad2: 'Good dog.' },
    { title: 'Прокат велосипеда', prompt: 'Вы у стойки.', npc: 'Would you like to rent a bike?', good1: 'How much is it for an hour?', bad1: 'Rent hour how much?', next: 'Цена.', npc2: 'It is 10 dollars an hour.', good2: 'I will take one for two hours.', bad2: 'Two hours give.' },
    { title: 'Потерялся', prompt: 'Вы ищете выход.', npc: 'Are you looking for something?', good1: 'Where is the main exit?', bad1: 'Exit where?', next: 'Направление.', npc2: 'Just follow this path straight ahead.', good2: 'Thank you for the help.', bad2: 'Ok go straight.' },
    { title: 'Кормление уток', prompt: 'Вы стоите у пруда.', npc: 'Please do not feed them bread.', good1: 'Oh, what should I give them instead?', bad1: 'No bread why?', next: 'Еда.', npc2: 'Seeds or peas are much better for them.', good2: 'I will remember that for next time.', bad2: 'Ok I remember.' }
  ]},
  { name: 'Библиотека', eng: 'Library', scenarios: [
    { title: 'Регистрация', prompt: 'Вы хотите взять книгу.', npc: 'Do you have a library card?', good1: 'Not yet, how do I apply for one?', bad1: 'Give card.', next: 'Анкета.', npc2: 'Just fill out this form and show your ID.', good2: 'Here is my driver\'s license.', bad2: 'Look ID.' },
    { title: 'Поиск книги', prompt: 'Вы ищете фантастику.', npc: 'Need help finding a book?', good1: 'Where is the science fiction section?', bad1: 'Where space book?', next: 'Ряд.', npc2: 'Aisle 3 on the second floor.', good2: 'I will go check it out.', bad2: 'I go 3.' },
    { title: 'Срок возврата', prompt: 'Вы берете книгу.', npc: 'You can keep this for two weeks.', good1: 'Can I renew it online if I need more time?', bad1: 'More time how?', next: 'Да.', npc2: 'Yes, through our website.', good2: 'That is very convenient.', bad2: 'Good.' },
    { title: 'Тишина', prompt: 'У вас зазвонил телефон.', npc: 'Excuse me, this is a quiet zone.', good1: 'I am so sorry, I will put it on silent.', bad1: 'Sorry, I silent.', next: 'Спасибо.', npc2: 'Thank you for understanding.', good2: 'My apologies again.', bad2: 'Sorry.' },
    { title: 'Компьютеры', prompt: 'Вам нужен интернет.', npc: 'Do you want to use a computer?', good1: 'Yes, is there a time limit?', bad1: 'How long compute?', next: 'Лимит.', npc2: 'You get one hour per session.', good2: 'That is plenty of time for me.', bad2: 'Good hour.' }
  ]},
  { name: 'Парикмахерская', eng: 'Hair Salon', scenarios: [
    { title: 'Запись', prompt: 'Вы звоните.', npc: 'Salon, how can I help?', good1: 'I would like to book a haircut for tomorrow.', bad1: 'Cut hair tomorrow.', next: 'Время.', npc2: 'Does 2 PM work for you?', good2: 'Yes, that is perfect.', bad2: 'Ok 2.' },
    { title: 'Обсуждение стрижки', prompt: 'Вы в кресле.', npc: 'How would you like your hair today?', good1: 'Just a trim, please. Keep the length.', bad1: 'Cut little.', next: 'Слои?', npc2: 'Do you want any layers added?', good2: 'Maybe just a few framing the face.', bad2: 'Face cut little.' },
    { title: 'Цвет', prompt: 'Вы хотите покраситься.', npc: 'Are we doing color today?', good1: 'I am thinking about going blonde.', bad1: 'Make blonde.', next: 'Оттенок.', npc2: 'Ash blonde or golden?', good2: 'Let us do an ash blonde.', bad2: 'Ash do.' },
    { title: 'Мытье головы', prompt: 'Вода слишком горячая.', npc: 'How is the water temperature?', good1: 'It is a bit too hot, actually.', bad1: 'Water fire!', next: 'Извинения.', npc2: 'Sorry about that, is this better?', good2: 'Yes, that is much better.', bad2: 'Ok now.' },
    { title: 'Оплата и чаевые', prompt: 'Вы у кассы.', npc: 'That will be 45 dollars.', good1: 'Here is 55. Keep the change for a tip.', bad1: 'Take 55, keep rest.', next: 'Спасибо.', npc2: 'Thank you very much! Have a great day.', good2: 'You too, goodbye.', bad2: 'Bye.' }
  ]},
  { name: 'Магазин техники', eng: 'Tech Store', scenarios: [
    { title: 'Покупка телефона', prompt: 'Вы выбираете смартфон.', npc: 'Are you looking for a new phone?', good1: 'Yes, what are the latest models?', bad1: 'New phone what?', next: 'Варианты.', npc2: 'We have the new Pro model on display here.', good2: 'Can I test the camera?', bad2: 'I look camera.' },
    { title: 'Гарантия', prompt: 'Вы оплачиваете покупку.', npc: 'Would you like to buy extended warranty?', good1: 'What does it cover?', bad1: 'Why buy?', next: 'Покрытие.', npc2: 'It covers accidental damage and screen repairs.', good2: 'Yes, I will add it.', bad2: 'Add it.' },
    { title: 'Ремонт ноутбука', prompt: 'Вы у стойки сервиса.', npc: 'What is wrong with your laptop?', good1: 'The battery drains very quickly.', bad1: 'Battery fast die.', next: 'Диагностика.', npc2: 'We will need to run some diagnostics.', good2: 'How long will that take?', bad2: 'When finish?' },
    { title: 'Поиск кабеля', prompt: 'Вам нужна зарядка.', npc: 'Can I help you find an accessory?', good1: 'I need a USB-C charging cable.', bad1: 'Need cable phone.', next: 'Длина.', npc2: 'Do you prefer a one-meter or two-meter cable?', good2: 'Two meters, please.', bad2: 'Give two.' },
    { title: 'Возврат', prompt: 'Гарнитура не работает.', npc: 'Are you returning these headphones?', good1: 'Yes, the left earphone has no sound.', bad1: 'Headphone break left.', next: 'Замена.', npc2: 'Do you want a refund or a replacement?', good2: 'I would like a replacement.', bad2: 'Give new.' }
  ]}
];

let globalId = 0;
const questArray = [];

places.forEach(place => {
  place.scenarios.forEach(scen => {
    globalId++;
    questArray.push({
      id: `quest_${globalId}`,
      title: `${place.name}: ${scen.title}`,
      nodes: {
        start: {
          text: `[${place.eng}] ${scen.prompt} ${scen.npc}`,
          options: [
            { text: scen.good1, nextScene: 'honest', effect: 'good' },
            { text: scen.bad1, nextScene: 'grammar_fail', effect: 'bad' }
          ]
        },
        honest: {
          text: `${scen.next} ${scen.npc2}`,
          options: [
            { text: scen.good2, nextScene: 'success', effect: 'good' },
            { text: scen.bad2, nextScene: 'grammar_fail', effect: 'bad' }
          ]
        },
        grammar_fail: {
          text: `Собеседник выглядит смущенно. Ваша речь звучит неестественно или грубо. Вы теряете жизнь.`,
          options: [
            { text: "Попробовать снова", nextScene: "start" }
          ]
        },
        success: {
          text: `Отлично! Вы успешно справились с ситуацией. Ваш английский звучит естественно.`,
          options: [
            { text: "Завершить квест", nextScene: "end" }
          ]
        }
      }
    });
  });
});

let output = `export type QuestNode = {
  text: string;
  options: { text: string; nextScene: string; effect?: 'good' | 'bad' }[];
};

export type Quest = {
  id: string;
  title: string;
  nodes: Record<string, QuestNode>;
};

export const quests: Quest[] = ${JSON.stringify(questArray, null, 2)};
`;

fs.writeFileSync('src/questsData.ts', output);

const fs = require('fs');

const content = fs.readFileSync('src/App.tsx', 'utf-8');

const regex = /if \(\!completedLessons\.includes\(id\)\) \{([\s\S]*?)setTestScore/;

const newBlock = `
                if (score >= total * 0.8) {
                  if (!completedLessons.includes(id)) {
                    const newCompleted = [...completedLessons, id];
                    setCompletedLessons(newCompleted);
                    safeStorage.setItem('rabbitsEnglishCompleted', JSON.stringify(newCompleted));
                    
                    const praiseMessages = [
                      { title: "Потрясающая работа!", message: "Ты покорил этот модуль." },
                      { title: "Великолепный результат!", message: "Твой английский стал еще лучше." },
                      { title: "Отлично справился!", message: "Еще один шаг к идеальному английскому." },
                      { title: "Невероятно!", message: "Твои знания растут с каждым днем." },
                      { title: "Так держать!", message: "Модуль пройден блестяще." }
                    ];
                    const praise = praiseMessages[(currentTestModule - 1) % praiseMessages.length];
                    showNotification(praise.title, praise.message);
                  }
                } else {
                  showNotification("Не сдавайся!", "Нужно набрать минимум 80% правильных ответов для прохождения модуля.");
                }
                setTestScore`;

const patched = content.replace(regex, newBlock);
fs.writeFileSync('src/App.tsx', patched, 'utf-8');
console.log('Patched test result logic.');

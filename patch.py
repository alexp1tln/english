import re
import sys

def patch():
    with open('src/App.tsx', 'r') as f:
        content = f.read()

    # 1. Remove lesson notification
    old_mark_lesson = """  const markLessonCompleted = (id: string) => {
    if (!completedLessons.includes(id)) {
      const newCompleted = [...completedLessons, id];
      setCompletedLessons(newCompleted);
      safeStorage.setItem('darkBunnyCompleted', JSON.stringify(newCompleted));
      showNotification('Ты получил темную корону 👑', 'Урок успешно пройден!');
    }
  };"""
    new_mark_lesson = """  const markLessonCompleted = (id: string) => {
    if (!completedLessons.includes(id)) {
      const newCompleted = [...completedLessons, id];
      setCompletedLessons(newCompleted);
      safeStorage.setItem('darkBunnyCompleted', JSON.stringify(newCompleted));
    }
  };"""
    if old_mark_lesson in content:
        content = content.replace(old_mark_lesson, new_mark_lesson)
    else:
        print("Warning: markLessonCompleted not found")

    # 2. Add module praise
    old_module_finish = """            {view === 'module_test' && currentTestModule && (
              <ModuleTest key="module_test" moduleId={currentTestModule} lessons={lessons} onFinish={(score, total, mistakes) => {
                const id = `test_${currentTestModule}`;
                if (!completedLessons.includes(id)) {
                  setCompletedLessons([...completedLessons, id]);
                }
                setTestScore({score, total, mistakes: mistakes || []});
                setView('module_test_result');
              }} onBack={() => setView('roadmap')} />
            )}"""
    new_module_finish = """            {view === 'module_test' && currentTestModule && (
              <ModuleTest key="module_test" moduleId={currentTestModule} lessons={lessons} onFinish={(score, total, mistakes) => {
                const id = `test_${currentTestModule}`;
                if (!completedLessons.includes(id)) {
                  const newCompleted = [...completedLessons, id];
                  setCompletedLessons(newCompleted);
                  safeStorage.setItem('darkBunnyCompleted', JSON.stringify(newCompleted));
                  
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
                setTestScore({score, total, mistakes: mistakes || []});
                setView('module_test_result');
              }} onBack={() => setView('roadmap')} />
            )}"""
    
    if old_module_finish in content:
        content = content.replace(old_module_finish, new_module_finish)
    else:
        print("Warning: old_module_finish not found")
        
    with open('src/App.tsx', 'w') as f:
        f.write(content)
        
patch()

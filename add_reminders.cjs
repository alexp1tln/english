const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Add Bell to imports
content = content.replace("Zap } from 'lucide-react';", "Zap, Bell } from 'lucide-react';");

// Create RemindersButton component
const remindersComponent = `
function RemindersButton() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if ("Notification" in window && Notification.permission === "granted") {
      setEnabled(true);
    }
  }, []);

  const toggleReminders = async () => {
    if (!("Notification" in window)) {
      alert("К сожалению, ваш браузер не поддерживает пуш-уведомления.");
      return;
    }

    if (Notification.permission === "granted") {
      // If already granted, we can just send a test one
      sendRabbitNotification();
      setEnabled(true);
    } else if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        sendRabbitNotification();
        setEnabled(true);
      } else {
        alert("Вы отклонили отправку уведомлений.");
      }
    } else {
      alert("Уведомления заблокированы в настройках браузера.");
    }
  };

  const sendRabbitNotification = () => {
    const title = "Послание от зайца 🐰";
    const options = {
      body: "Не забывай про английский! Твои знания ждут тебя на новом уроке.",
      icon: "https://i.postimg.cc/Sx2NghTc/IMG-7263.png",
      vibrate: [200, 100, 200]
    };

    if (navigator.serviceWorker) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification(title, options);
      }).catch(() => {
        new Notification(title, options);
      });
    } else {
      new Notification(title, options);
    }
  };

  return (
    <button onClick={toggleReminders} className="w-full p-5 rounded-[2.5rem] bg-gothic-card hover:bg-gothic-card-hover border border-gothic-border hover:border-gothic-border-hover flex items-center justify-between active:scale-95 transition-all duration-300 shadow-lg mt-3">
      <div className="flex items-center gap-4">
        <Bell size={20} className={enabled ? "text-burgundy-light" : "text-white/40"}/> 
        <span className="text-white text-sm font-medium tracking-wide">
          {enabled ? "Напоминания включены" : "Включить напоминания"}
        </span>
      </div>
      <ChevronRight size={16} className="text-white/70/30 group-hover:text-white/70 transition-colors" />
    </button>
  );
}
`;

// Inject before MainMenu
const insertPos = content.indexOf('function MainMenu');
content = content.substring(0, insertPos) + remindersComponent + content.substring(insertPos);

// Add to MainMenu
const menuSearchStr = `<button onClick={() => setView('irregular_verbs')} className="w-full p-5 rounded-[2.5rem] bg-gothic-card hover:bg-gothic-card-hover border border-gothic-border hover:border-gothic-border-hover flex items-center justify-between active:scale-95 transition-all duration-300 shadow-lg">
          <div className="flex items-center gap-4"><Zap size={20} className="text-burgundy-light"/> <span className="text-white text-sm font-medium tracking-wide">Неправильные глаголы</span></div>
          <ChevronRight size={16} className="text-white/70/30 group-hover:text-white/70 transition-colors" />
        </button>`;
        
const newMenuCode = menuSearchStr + `
        <RemindersButton />`;

content = content.replace(menuSearchStr, newMenuCode);

fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log('Added reminders.');

const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Ensure firebase requestForToken is imported
if (!content.includes("import { requestForToken, onMessageListener } from './firebase';")) {
  content = content.replace("import { lessons, vocabulary } from './courseData';", "import { requestForToken, onMessageListener } from './firebase';\nimport { lessons, vocabulary } from './courseData';");
}

const remindersCode = `
function RemindersButton() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if ("Notification" in window && Notification.permission === "granted") {
      setEnabled(true);
      // Initialize foreground listener
      onMessageListener().then((payload: any) => {
        console.log("Foreground notification received: ", payload);
        // We could show a toast here if we wanted
      }).catch(err => console.log('failed: ', err));
    }
  }, []);

  const toggleReminders = async () => {
    if (!("Notification" in window)) {
      alert("К сожалению, ваш браузер не поддерживает пуш-уведомления.");
      return;
    }

    if (Notification.permission === "granted") {
      // If already granted, let's make sure we have a token
      const token = await requestForToken();
      if (token) {
        console.log("Token exists:", token);
        setEnabled(true);
        alert("Напоминания уже включены! Ваш токен выведен в консоль.");
      }
    } else if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        const token = await requestForToken();
        if (token) {
           console.log("New token:", token);
           setEnabled(true);
           alert("Отлично! Напоминания от зайца включены.");
        }
      } else {
        alert("Вы отклонили отправку уведомлений.");
      }
    } else {
      alert("Уведомления заблокированы в настройках браузера. Разрешите их в адресной строке.");
    }
  };

  return (
    <button onClick={toggleReminders} className="w-full p-5 rounded-[2.5rem] bg-gothic-card hover:bg-gothic-card-hover border border-gothic-border hover:border-gothic-border-hover flex items-center justify-between active:scale-95 transition-all duration-300 shadow-lg mt-3">
      <div className="flex items-center gap-4">
        <Bell size={20} className={enabled ? "text-burgundy-light" : "text-white/40"}/> 
        <span className="text-white text-sm font-medium tracking-wide">
          {enabled ? "Напоминания от зайца включены" : "Включить напоминания (Firebase)"}
        </span>
      </div>
      <ChevronRight size={16} className="text-white/70/30 group-hover:text-white/70 transition-colors" />
    </button>
  );
}
`;

const remindersRegex = /function RemindersButton\(\) \{[\s\S]*?return \([\s\S]*?<\/button>\s*\);\s*\}/m;
content = content.replace(remindersRegex, remindersCode.trim());

fs.writeFileSync('src/App.tsx', content, 'utf-8');
console.log("Updated App.tsx with Firebase push integration.");

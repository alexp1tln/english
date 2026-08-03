importScripts('https://www.gstatic.com/firebasejs/10.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBj4r88IVMggxoA5Lgeun236ECk9ou2rgw",
  authDomain: "rabbits-english-75e11.firebaseapp.com",
  projectId: "rabbits-english-75e11",
  storageBucket: "rabbits-english-75e11.firebasestorage.app",
  messagingSenderId: "399256108199",
  appId: "1:399256108199:web:5865686a8bab2cf8382f82",
  measurementId: "G-7D3F5F8PDP"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification?.title || "Послание от зайца 🐰";
  const notificationOptions = {
    body: payload.notification?.body || "Не забывай про английский! Твои знания ждут тебя на новом уроке.",
    icon: 'https://i.postimg.cc/Sx2NghTc/IMG-7263.png',
    vibrate: [200, 100, 200]
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

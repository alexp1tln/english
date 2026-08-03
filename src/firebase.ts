import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBj4r88IVMggxoA5Lgeun236ECk9ou2rgw",
  authDomain: "rabbits-english-75e11.firebaseapp.com",
  projectId: "rabbits-english-75e11",
  storageBucket: "rabbits-english-75e11.firebasestorage.app",
  messagingSenderId: "399256108199",
  appId: "1:399256108199:web:5865686a8bab2cf8382f82",
  measurementId: "G-7D3F5F8PDP"
};

const app = initializeApp(firebaseConfig);

export const messaging = typeof window !== "undefined" && "serviceWorker" in navigator ? getMessaging(app) : null;

export const requestForToken = async () => {
  if (!messaging) return null;
  try {
    
    const registration = await navigator.serviceWorker.ready;
    
    // Вставьте ваш Web Push сертификат (VAPID key) из Firebase Console -> Project Settings -> Cloud Messaging
    const currentToken = await getToken(messaging, { 
      vapidKey: "BByDTK_sw0M8TbChM_Sk1TmYdfQeOfd3AXdtKhZVwZ-mojQqV9iM2PiuBC04M2_ZyUcenMdYX5K9Rm1H0sIA2zA", // <-- ВСТАВЬТЕ VAPID КЛЮЧ СЮДА
      serviceWorkerRegistration: registration 
    });


    if (currentToken) {
      console.log('Firebase registration token:', currentToken);
      // In a real application, you would send this token to your server to send targeted notifications
      return currentToken;
    } else {
      console.log('No registration token available. Request permission to generate one.');
      return null;
    }
  } catch (err) {
    console.log('An error occurred while retrieving token. ', err);
    return null;
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    if (!messaging) return;
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

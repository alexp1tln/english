import cron from 'node-cron';
import express from 'express';
import { initializeApp, cert } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

let firebaseAdminInitialized = false;
try {
  if (fs.existsSync('./service-account.json')) {
    const serviceAccount = JSON.parse(fs.readFileSync('./service-account.json', 'utf-8'));
    initializeApp({
      credential: cert(serviceAccount)
    });
    firebaseAdminInitialized = true;
  } else {
    console.warn('service-account.json not found, Firebase Admin features will be disabled.');
  }
} catch (e) {
  console.warn('Failed to initialize Firebase Admin:', e);
}

async function startServer() {
  const app = express();
  const PORT = 3000;
  
  app.use(express.json());

  app.post('/api/subscribe', async (req, res) => {
    if (!firebaseAdminInitialized) {
      return res.status(500).json({ error: "Firebase Admin is not configured" });
    }
    const { token } = req.body;
    if (!token) {
        res.status(400).json({ error: "No token provided" });
        return;
    }
    try {
      await getMessaging().subscribeToTopic(token, 'reminders');
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to subscribe" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  
  // Запускаем крон-задачу каждый день в 19:00 для рассылки напоминаний
  cron.schedule('0 19 * * *', () => {
    if (!firebaseAdminInitialized) return;
    console.log('Running daily reminder task...');
    const message = {
      notification: {
        title: 'Послание от зайца 🐰',
        body: 'Не забывай про английский! Твой стрик сам себя не продлит, жду тебя на новом уроке.'
      },
      topic: 'reminders'
    };
    
    getMessaging().send(message)
      .then((response) => console.log('Successfully sent daily reminder:', response))
      .catch((error) => console.error('Error sending daily reminder:', error));
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

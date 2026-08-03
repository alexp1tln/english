const admin = require("firebase-admin");
const serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const message = {
  notification: {
    title: 'Послание от зайца 🐰',
    body: 'Не забывай про английский! Твои знания ждут тебя на новом уроке.'
  },
  topic: 'reminders'
};

admin.messaging().send(message)
  .then((response) => {
    console.log('Successfully sent message to all users:', response);
    process.exit(0);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
    process.exit(1);
  });

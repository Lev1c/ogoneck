const admin = require('firebase-admin');

// Путь к вашему файлу с сервисным аккаунтом JSON (например, `serviceAccountKey.json`)
const serviceAccount = require('./serviceAccountKey.json');

// Инициализация Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ogonek-826f9-default-rtdb.firebaseio.com" // Замените на свой URL базы данных, если необходимо
});

// Экспортируем объект admin для использования в других частях приложения
const db = admin.firestore();
module.exports = { db };
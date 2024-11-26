require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const firebaseAdmin = require('./firebase'); // Инициализация Firebase

const app = express();

app.use(cors());

// Главный маршрут
app.get('/', (req, res) => {
  res.send('Hello, Vercel!');
});

// Подключение дополнительных маршрутов
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb' }));
app.use('/', router);

// Экспортируем как обработчик serverless функции для Vercel
module.exports = app;
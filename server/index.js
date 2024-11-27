require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const router = require('./routes/index');
const firebaseAdmin = require('./firebase'); // Firebase инициализация


const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, Vercel!');
});

const server = http.createServer(app);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb' }));
app.use('/', router);


const start = async () => {
    try {
        // Здесь больше не нужно подключаться к Sequelize
        console.log('Firebase initialized');
        server.listen(PORT, '0.0.0.0', () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
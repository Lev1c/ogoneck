require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const router = require('./routes/index');
const sequelize = require('./db')

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());


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
      await sequelize.authenticate()
      await sequelize.sync()
      server.listen(PORT, '0.0.0.0', () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
      console.log(e)
  }
}

start();
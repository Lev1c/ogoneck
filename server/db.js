const {Sequelize} = require('sequelize')
const config = require('./config');

module.exports = new Sequelize(
    config.DB_NAME, // Название БД
    config.DB_USER, // Пользователь
    config.DB_PASSWORD, // ПАРОЛЬ
    { 
        dialect: 'postgres',
        host: config.DB_HOST,
        port: config.DB_PORT
    }
)

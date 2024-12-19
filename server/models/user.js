const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    unique: true,
  },
  role: {
    type: DataTypes.INTEGER,
    unique: true,
  },
});


module.exports = {
    User
};
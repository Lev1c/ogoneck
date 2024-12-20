const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Info = sequelize.define('Info', {
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
  text: {
    type: DataTypes.TEXT,
  },
});


module.exports = {
    Info
};
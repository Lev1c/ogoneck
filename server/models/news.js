const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const News = sequelize.define('News', {
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
  text: {
    type: DataTypes.TEXT,
  },
  img: {
    type: DataTypes.STRING,
  },
  dop_text: {
    type: DataTypes.STRING,
  }
});


module.exports = {
    News
};
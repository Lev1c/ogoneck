const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING, 
    unique: true,
  },
  password: {
    type: DataTypes.STRING,

  },
});

const Claim = sequelize.define('Claim', {
  name: {
    type: DataTypes.STRING, 
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  text: {
    type: DataTypes.STRING,
  },
  pick: {
    type: DataTypes.INTEGER,
  },
  trim: {
    type: DataTypes.INTEGER,
  },
});


module.exports = {
    User,
    Claim
};
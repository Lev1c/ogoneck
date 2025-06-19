const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const FeedBack = sequelize.define("FeedBack", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  typeFeed: {
    type: DataTypes.INTEGER,
  },
  typeWork: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  text: {
    type: DataTypes.TEXT,
  },
});

module.exports = {
  FeedBack,
};

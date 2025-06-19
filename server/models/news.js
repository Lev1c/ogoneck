const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const News = sequelize.define("News", {
  name: {
    type: DataTypes.STRING,
  },
  text: {
    type: DataTypes.TEXT,
  },
  img: {
    type: DataTypes.TEXT,
  },
  dop_text: {
    type: DataTypes.STRING,
  },
  visible: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = {
  News,
};

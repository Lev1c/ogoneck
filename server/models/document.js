const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Document = sequelize.define('Document', {
    name: {
      type: DataTypes.STRING,
      
    },
    fileName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    filePath: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


module.exports = {
    Document
};
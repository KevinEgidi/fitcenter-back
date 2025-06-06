const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Category = sequelize.define(
  'Category',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    },
  },
  {
  },
);

module.exports = Category;

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const User = sequelize.define(
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

module.exports = User;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('name', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false
});

module.exports = sequelize;
const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Sucursales = sequelize.define("Sucursales", {
    adress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    puesto: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "sucursales",
    timestamps: false
});

module.exports = Sucursales;
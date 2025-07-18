const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database.js");

const Subsidiary = sequelize.define("Subsidiary", {
    adress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    position: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "subsidiary",
    timestamps: false
});

module.exports = Subsidiary;
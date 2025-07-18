const { DataTypes } = require('sequelize'); // Importa DataTypes de Sequelize
const sequelize = require('../../config/database.js'); // Importa la instancia de Sequelize

const Booking = sequelize.define('Booking', { // Define el modelo Turnos
    
    activity: {
        type: DataTypes.STRING, // Define el campo actividad como tipo STRING
        allowNull: false // No permite valores nulos
    },
    entry: {
        type: DataTypes.STRING, // Define el campo horarioEntra como tipo STRING
        allowNull: false // No permite valores nulos
    },
    exit: {
        type: DataTypes.STRING, // Define el campo horarioSal como tipo STRING
        allowNull: false // No permite valores nulos
    }
}, {
    tableName: 'booking', // Especifica el nombre de la tabla en la base de datos
    timestamps: false // Desactiva los timestamps (createdAt, updatedAt)
});

module.exports = Booking; // Exporta el modelo Turnos para usarlo en otros archivos
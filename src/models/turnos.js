const { DataTypes } = require('sequelize'); // Importa DataTypes de Sequelize
const sequelize = require('../database/db'); // Importa la instancia de Sequelize

const Turnos = sequelize.define('Turnos', { // Define el modelo Turnos
    
    actividad: {
        type: DataTypes.STRING, // Define el campo actividad como tipo STRING
        allowNull: false // No permite valores nulos
    },
    horarioEntra: {
        type: DataTypes.STRING, // Define el campo horarioEntra como tipo STRING
        allowNull: false // No permite valores nulos
    },
    horarioSal: {
        type: DataTypes.STRING, // Define el campo horarioSal como tipo STRING
        allowNull: false // No permite valores nulos
    }
}, {
    tableName: 'turnos', // Especifica el nombre de la tabla en la base de datos
    timestamps: false // Desactiva los timestamps (createdAt, updatedAt)
});

module.exports = Turnos; // Exporta el modelo Turnos para usarlo en otros archivos
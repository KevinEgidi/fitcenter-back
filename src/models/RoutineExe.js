import sequelize from 'sequelize';
import sequelize from '../../config/database.js';

const RoutineExe = sequelize.define(
    'RoutineExe',
    {
        routineId:{
            type: DataTypes.INTEGER,
            references:{
                model:Routine,
                key: 'id'
            },
        },
        exerciseId:{
            type: DataTypes.INTEGER,
            references:{
                model:Exercise,
                key: 'id'
            }
        },
        series:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        repetitions:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }
)


export default RoutineExe;
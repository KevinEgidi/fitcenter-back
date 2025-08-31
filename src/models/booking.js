import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const Booking = sequelize.define(
  "Booking",
  {
    date: {
      type: DataTypes.STRING, //  DATE si querés validación de fecha
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING, // o TIME si tu DB lo soporta
      allowNull: false,
    },
    instructor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "booking",
    timestamps: false,
  }
);

export default Booking;

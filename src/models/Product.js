import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

const Product = sequelize.define(
  'Product',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
  },
);


Product.associate = (models) => {
  Product.belongsTo(models.Category, {
    foreignKey: 'categoryId',
    as: 'category',
  });
}

export default Product;

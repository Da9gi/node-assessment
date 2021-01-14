const { DataTypes } = require("sequelize");

module.exports = function (db) {
  return db.define(
    "products",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        unique: true,
      },
      title: {
        defaultValue: "item#0",
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        defaultValue: 0,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      isInStock: {
        defaultValue: true,
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    { createdAt: false, updatedAt: false }
  );
};

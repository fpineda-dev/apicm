const { DataTypes } = require("sequelize");
const sequelize = require("../config/mysql");

const Category = sequelize.define(
  "categories",
  {
    ID_CATEGORY: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    DESCRIPTION: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "categories",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_CATEGORY" }],
      },
    ],
  }
);

module.exports = Category;

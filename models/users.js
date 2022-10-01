const { DataTypes } = require("sequelize");
const sequelize = require("../config/mysql");

const User = sequelize.define(
  "users",
  {
    ID_USERS: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    ID_ROLES: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    LAST_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    DNI: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    USER: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "user_EMAIL_uk",
    },
    PASSWORD: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_USERS" }],
      },
      {
        name: "user_EMAIL_uk",
        unique: true,
        using: "BTREE",
        fields: [{ name: "EMAIL" }],
      },
      {
        name: "Ref67",
        using: "BTREE",
        fields: [{ name: "ID_ROLES" }],
      },
    ],
  }
);

module.exports = {
  User,
};

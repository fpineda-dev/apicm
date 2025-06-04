const { DataTypes } = require('sequelize');

const sequelize = require('../config/mysql');

const Departments = sequelize.define(
  'departments',
  {
    ID_DEPARTMENT: {
      autoIncrement: true,
      type: DataTypes.BIGINT(20),
      allowNull: false,
      primaryKey: true,
    },
    NAME: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    ID_ORGANIZATION: {
      type: DataTypes.INTEGER,
    },
  },
);

module.exports = Departments;

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/mysql');

const Entries = sequelize.define(
  'financial_statements',
  {
    ID_FINANCIAL_STATEMENTS: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    SERVICE: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    DAYLY_OFFERING: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    MISSION_OFFERING: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    SPECIAL_OFFERING: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    TOTAL_TITHES: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    TOTAL: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    ID_DEPARTMENT: {
      type: DataTypes.INTEGER,
    },
    CREATED_ON: {
      field: 'created_on',
      type: Sequelize.DATE,
    },
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: Sequelize.DATE,
    },
  },
);

module.exports = Entries;

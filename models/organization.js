const { DataTypes } = require('sequelize');

const sequelize = require('../config/mysql');

const Organization = sequelize.define(
  'organization',
  {
    ID_ORGANIZATION: {
      autoIncrement: true,
      type: DataTypes.BIGINT(20),
      allowNull: false,
      primaryKey: true,
    },
    NAME: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    CREATED_ON: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    SERVICE: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
    },
  },
);

module.exports = Organization;

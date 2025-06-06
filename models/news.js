const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/mysql');

const News = sequelize.define(
  'news',
  {
    ID_NEWS: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    TITLE: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    DESCRIPTION: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    IMAGE: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    VIDEO: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    CREATED_AT: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    UPDATE_AT: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    NAME_EDITOR: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'news',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'ID_NEWS' }],
      },
    ],
  },
);

module.exports = News;

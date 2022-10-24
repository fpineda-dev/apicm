const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/mysql');

const usersCategoriesNews = sequelize.define('users_categories_news', {
  ID_USERS_CATEGORIES_NEWS: {
    autoIncrement: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
  },
  ID_NEWS: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  ID_CATEGORY: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  ID_USERS: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  ID_ROLES: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  STATUS_NEWS: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
}, {
  Sequelize,
  tableName: 'users_categories_news',
  timestamps: false,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: [
        { name: 'ID_USERS_CATEGORIES_NEWS' },
      ],
    },
    {
      name: 'users_ID_USERS_fk',
      using: 'BTREE',
      fields: [
        { name: 'ID_USERS' },
      ],
    },
    {
      name: 'Ref13',
      using: 'BTREE',
      fields: [
        { name: 'ID_NEWS' },
      ],
    },
    {
      name: 'Ref44',
      using: 'BTREE',
      fields: [
        { name: 'ID_ROLES' },
      ],
    },
  ],
});

module.exports = usersCategoriesNews;

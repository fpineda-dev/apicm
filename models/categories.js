const { DataTypes } = require('sequelize');
const sequelize = require('../config/mysql');

const categories = sequelize.define('categories', {
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
}, {
  sequelize,
  tableName: 'categories',
  timestamps: false,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: [
        { name: 'ID_CATEGORY' },
      ],
    },
  ],
});

sequelize.sync().then(() => {
  console.log('categories table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

module.exports = categories;

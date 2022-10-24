const { Sequelize, DataTypes } = require('sequelize');

const permissions = Sequelize.define('permissions', {
  ID_PERMISSION: {
    autoIncrement: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
  },
  MODULE: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  Sequelize,
  tableName: 'permissions',
  timestamps: false,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: [
        { name: 'ID_PERMISSION' },
      ],
    },
  ],
});

module.exports = permissions;

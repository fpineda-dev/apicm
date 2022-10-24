const { Sequelize, DataTypes } = require('sequelize');

const permissionsRoles = Sequelize.define('permissions_roles', {
  ID_PERMISSIONS_ROLES: {
    autoIncrement: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
  },
  ID_ROLES: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  ID_PERMISSION: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
}, {
  Sequelize,
  tableName: 'permissions_roles',
  timestamps: false,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: [
        { name: 'ID_PERMISSIONS_ROLES' },
      ],
    },
    {
      name: 'Ref65',
      using: 'BTREE',
      fields: [
        { name: 'ID_ROLES' },
      ],
    },
    {
      name: 'Ref76',
      using: 'BTREE',
      fields: [
        { name: 'ID_PERMISSION' },
      ],
    },
  ],
});

module.exports = permissionsRoles;

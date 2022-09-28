const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roles', {
    ID_ROLES: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "roles_NAME_uk"
    },
    TOKEN: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    UPDATE_AT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ACTIVE: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'roles',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_ROLES" },
        ]
      },
      {
        name: "roles_NAME_uk",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NAME" },
        ]
      },
    ]
  });
};

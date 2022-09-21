const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_categories_news', {
    ID_USERS_CATEGORIES_NEWS: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ID_NEWS: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ID_USERS_EDITORS: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'users_categories_news',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_USERS_CATEGORIES_NEWS" },
          { name: "ID_NEWS" },
          { name: "ID_USERS_EDITORS" },
        ]
      },
      {
        name: "Refnews3",
        using: "BTREE",
        fields: [
          { name: "ID_NEWS" },
        ]
      },
      {
        name: "Refusers_editors4",
        using: "BTREE",
        fields: [
          { name: "ID_USERS_EDITORS" },
        ]
      },
    ]
  });
};

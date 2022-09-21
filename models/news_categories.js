const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news_categories', {
    ID_NEWS_CATEGORIES: {
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
    ID_CATEGORY: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'news_categories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_NEWS_CATEGORIES" },
          { name: "ID_NEWS" },
          { name: "ID_CATEGORY" },
        ]
      },
      {
        name: "Refnews1",
        using: "BTREE",
        fields: [
          { name: "ID_NEWS" },
        ]
      },
      {
        name: "Refcategories2",
        using: "BTREE",
        fields: [
          { name: "ID_CATEGORY" },
        ]
      },
    ]
  });
};

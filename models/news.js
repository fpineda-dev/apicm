const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news', {
    ID_NEWS: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    TITLE: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    DESCRIPTION: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    IMAGE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VIDEO: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DATE: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'news',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_NEWS" },
        ]
      },
    ]
  });
};

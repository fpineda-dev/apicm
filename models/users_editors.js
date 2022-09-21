const {Sequelize, DataTypes} = require('sequelize');
require("dotenv").config();

  const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
      host: process.env.HOST,
      dialect: "mysql"
  });

  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });


const users = sequelize.define('users_editors', {
  ID_USERS_EDITORS: {
    autoIncrement: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  NAME: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  LAST_NAME: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  DNI: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  USER: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  PASSWORD: {
    type: DataTypes.STRING(200),
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'users_editors',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "ID_USERS_EDITORS" },
      ]
    },
  ]
});


sequelize.sync().then(() => {
  console.log('users_editors table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});


const createUsersEditors = async (req, res) =>{
  users.create({
    NAME: req.body.name,
    LAST_NAME: req.body.last_name,
    DNI: req.body.dni,
    USER: req.body.user,
    PASSWORD: req.body.password
    }).then(res =>{
    console.log(`This is a response ${res}`)
      //res.status(201).end();
    }).catch((error) =>{
    console.log(`Failed to create a new record : ${error}`);
    });

}

module.exports = {
  users,
  createUsersEditors
};


/*module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_editors', {
    ID_USERS_EDITORS: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LAST_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DNI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    USER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PASSWORD: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users_editors',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_USERS_EDITORS" },
        ]
      },
    ]
  });
};*/



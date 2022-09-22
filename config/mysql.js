require('dotenv').config();
const { Sequelize } = require('sequelize');
/**
 * var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE
});

const dbConnect = () =>{

connection.connect(function(err){

    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }

      console.log('connected as id ' + connection.threadId);

      connection.end();
})

}
 * */

const dbConnect = async () => {
  const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  sequelize.close();
};

module.exports = dbConnect;

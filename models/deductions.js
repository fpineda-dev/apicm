/* const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/mysql');

const Deductions = sequelize.define(
  'deductions',
  {
    ID_DEDUCTIONS: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    NAME_HELP: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    SPECCIAL_HELP: {
      type: DataTypes.DECIMAL(18, 5),
      allowNull: true,
    },
    NUMBER: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    AMOUNT: {
      type: DataTypes.DECIMAL(18, 5),
      allowNull: true,
    },
    RECEIPT: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    NAME_PASTOR: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    PAYMENT_PASTOR: {
      type: DataTypes.DECIMAL(18, 5),
      allowNull: true,
    },
    ID_DEPARTMENT: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: Sequelize.DATE,
    },
  },
);

module.exports = Deductions; */

const getPool = require('../config/db-conecction');

// eslint-disable-next-line camelcase, max-len
async function saveDeduction(name_help, speccial_help, name_pastor, payment_pastor, tithe_of_tithes, id_financial_statements, id_department) {
  // , fields
  // eslint-disable-next-line camelcase
  console.log(`Before, ${name_help}, ${speccial_help}, ${name_pastor}, ${payment_pastor}, ${tithe_of_tithes}, ${id_financial_statements}, ${id_department}`);

  // const pool = await getPool();
  // let connection;
  try {
    // connection = await pool.getConnection();

    // eslint-disable-next-line camelcase
    const result = await getPool.query('INSERT INTO deductions (name_help, speccial_help, name_pastor, payment_pastor, tithe_of_tithes, id_financial_statements, id_department) VALUES (?, ?, ?, ?, ?, ?, ?)', [name_help, speccial_help, name_pastor, payment_pastor, tithe_of_tithes, id_financial_statements, id_department]);
    console.log('Data inserted successfully:', result);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

module.exports = {
  saveDeduction,
};

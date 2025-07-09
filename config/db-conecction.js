require('dotenv').config();
// const { query } = require('express');
const mysql = require('mysql2/promise');

const dbConfig = {
  host: process.env.HOST,
  user: process.env.USER_MYSQL,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

let pool;

async function getPool() {
  pool = await mysql.createConnection(dbConfig);

  pool.on('error', (err) => {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      getPool();
    } else {
      throw err;
    }
  });
}

getPool();

module.exports = {
  getConnection: () => pool,
  query: async (sql, values) => {
    // const { receipt } = values;
    // console.log(`Values \n ${receipt}`);
    try {
      const [rows] = await pool.execute(sql, values);
      return rows;
    } catch (error) {
      console.error('Database query error:', error);
      throw error;
    }
  },
};

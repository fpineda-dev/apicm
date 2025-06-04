const getPool = require('../config/db-conecction');

// eslint-disable-next-line camelcase, max-len
async function saveReceipts(id_financial_statements, number, amount, receipt) {
  // , fields
  // eslint-disable-next-line camelcase
  console.log(`Before, ${id_financial_statements}, ${number}, ${amount}, ${receipt}`);

  // const pool = await getPool();
  // let connection;
  try {
    // connection = await pool.getConnection();

    // eslint-disable-next-line camelcase
    const result = await getPool.query('INSERT INTO receipts (id_financial_statements, number, amount, receipt) VALUES (?, ?, ?, ?)', [id_financial_statements, number, amount, receipt]);
    console.log('Data inserted successfully:', result.insertId);
    return result.insertId;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

module.exports = {
  saveReceipts,
};

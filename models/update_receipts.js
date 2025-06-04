const getPool = require('../config/db-conecction');

// eslint-disable-next-line camelcase, max-len
async function updateReceipts(id_receipts, id_financial_statements) {
  // , fields
  // eslint-disable-next-line camelcase
  console.log(`Before, ${id_financial_statements}, ${id_receipts}`);

  // const pool = await getPool();
  // let connection;
  try {
    // connection = await pool.getConnection();

    // eslint-disable-next-line camelcase
    const result = await getPool.query('UPDATE receipts SET id_financial_statements = ? WHERE id_receipts = ?', [id_financial_statements, id_receipts]);
    console.log('Data inserted successfully :', result);
    return result.affectedRows;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

module.exports = {
  updateReceipts,
};

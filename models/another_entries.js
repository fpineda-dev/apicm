const getPool = require('../config/db-conecction');

// eslint-disable-next-line camelcase, max-len
async function saveAnotherEntries(id_financial_statements, decimator_number, amount_tithes, another_number_concept, amount_another_concept) {
  // , fields
  // eslint-disable-next-line camelcase
  console.log(`Before, ${id_financial_statements}, ${decimator_number}, ${amount_tithes}, ${another_number_concept}, ${amount_another_concept}`);

  // const pool = await getPool();
  // let connection;
  try {
    // connection = await pool.getConnection();

    // eslint-disable-next-line camelcase
    const result = await getPool.query('INSERT INTO another_entries(id_financial_statements, decimator_number, amount_tithes, another_number_concept, amount_another_concept) VALUES (?, ?, ?, ?, ?)', [id_financial_statements, decimator_number, amount_tithes, another_number_concept, amount_another_concept]);
    console.log('Data inserted successfully:', result);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

module.exports = {
  saveAnotherEntries,
};

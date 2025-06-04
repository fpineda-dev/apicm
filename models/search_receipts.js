const getPool = require('../config/db-conecction');

// eslint-disable-next-line camelcase, max-len
async function foundReceipts(from, to, iddepa) {
  // , fields
  // eslint-disable-next-line camelcase
  console.log(`Before, ${from}, ${to}, ${iddepa}`);

  if (from === null && to === null) {
    console.log('Parameter of Date are empty');
    return null;
  }

  // const pool = await getPool();
  // let connection;
  try {
    // connection = await pool.getConnection();

    // eslint-disable-next-line camelcase
    const result = await getPool.query('call icmdb.Reports_ICMCR_DocumentosDiario(?, ?, ?);', [from, to, iddepa]);
    console.log('Data found:', result[0]);
    return result[0];
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

module.exports = {
  foundReceipts,
};

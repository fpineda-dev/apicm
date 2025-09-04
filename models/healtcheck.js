/* eslint-disable no-unreachable-loop */
const getPool = require('../config/db-conecction');

// eslint-disable-next-line camelcase, max-len
async function healthCheck() {
  // , fields
  // const pool = await getPool();
  // let connection;
  try {
    // connection = await pool.getConnection();
    /*
    call sql10795605.Reports_ICMCR_DocumentosDiario(?, ?, ?);
    */

    // eslint-disable-next-line camelcase, quotes
    const result = await getPool.query(`select count(*) as 'Review' from sql10795605.financial_statements limit 1;`);
    /* .then((res) => {
      console.log(res);
      // return res;
    }).catch((error) => error); */

    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    console.log(`Entro Health Check ${result[0].Review}`);

    return result[0].Review;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

module.exports = {
  healthCheck,
};

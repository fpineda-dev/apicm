/* eslint-disable no-unreachable-loop */
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
    /*
    call sql10783187.Reports_ICMCR_DocumentosDiario(?, ?, ?);
    */

    // eslint-disable-next-line camelcase
    const result = await getPool.query(`SELECT date_add(created_on, interval 1 day) as 'created_at', (total_tithes + total) as 'total', (ifnull(deductions, 0) + ifnull(receipts, 0)) as 'deductions' FROM(
    select DATE_FORMAT(f.created_on,"%Y-%m-%d") as created_on, f.total_tithes, f.total,
    (d.speccial_help + d.payment_pastor + d.tithe_of_tithes) as 'deductions',  sum(r.amount) as 'receipts' from sql10783187.financial_statements f 
    left join sql10783187.deductions d on f.id_financial_statements = d.id_financial_statements
    left join sql10783187.receipts r on f.id_financial_statements = r.id_financial_statements
    where f.created_on between ? and ? and f.id_department = ?
    group by created_on, f.total_tithes, f.total, deductions) AS finances;`, [from, to, iddepa]);

    const elements = [];
    let element = {};

    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const propertyName in result) {
      const item = result[propertyName];
      const elementData = JSON.stringify(item);
      // console.log(`The Principal Array ${elementData}`);

      element = elementData;
      const objParse = JSON.parse(element);
      elements[propertyName] = objParse;
      // console.log('Data found:', typeof (strObjson));
    }

    return elements;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

module.exports = {
  foundReceipts,
};

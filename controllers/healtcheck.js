const checkReceipts = require('../models/healtcheck');

async function healtcheckReview(req, res) {
  const countReceipts = await checkReceipts.healthCheck();
  res.status(200).json({ data: `${JSON.stringify(countReceipts)}` });
}

module.exports = {
  healtcheckReview,
};

const Receipts = require('../models/receipts');

async function create(req, res) {
  const {
    ID_FINANCIAL_STATEMENTS,
    NUMBER,
    AMOUNT,
    RECEIPT,
  } = req.body;
  const receipts = await Receipts.saveReceipts(
    ID_FINANCIAL_STATEMENTS,
    NUMBER,
    AMOUNT,
    RECEIPT,
  );
  res.status(201).json({ success: true, data: receipts });
}

module.exports = {
  create,
};

const Receipts = require('../models/update_receipts');

async function create(req, res) {
  const ID_RECEIPTS = req.params.id;
  console.log(`Param Id: ${req.params.id}`);
  const {
    ID_FINANCIAL_STATEMENTS,
  } = req.body;
  const receipts = await Receipts.updateReceipts(
    ID_RECEIPTS,
    ID_FINANCIAL_STATEMENTS,
  );
  res.status(202).json({ message: `Data update ${receipts}` });
}

module.exports = {
  create,
};

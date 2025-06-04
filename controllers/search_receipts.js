const Allreceipts = require('../models/search_receipts');

async function found(req, res) {
  const FROM = req.params.from;
  const TO = req.params.to;
  const DEPA = req.params.iddepa;
  console.log(`Param Id: ${req.params.iddepa}`);
  const receipts = await Allreceipts.foundReceipts(
    FROM,
    TO,
    DEPA,
  );
  res.status(200).json({ data: `${JSON.stringify(receipts)}` });
}

module.exports = {
  found,
};

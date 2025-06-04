const anotherEntries = require('../models/another_entries');

async function create(req, res) {
  const {
    ID_FINANCIAL_STATEMENTS,
    DECIMATOR_NUMBER,
    AMOUNT_TITHES,
    ANOTHER_NUMBER_CONCEPT,
    AMOUNT_ANOTHER_CONCEPT,
  } = req.body;
  const entries = await anotherEntries.saveAnotherEntries(
    ID_FINANCIAL_STATEMENTS,
    DECIMATOR_NUMBER,
    AMOUNT_TITHES,
    ANOTHER_NUMBER_CONCEPT,
    AMOUNT_ANOTHER_CONCEPT,
  );
  res.status(201).json({ success: true, data: entries });
}

module.exports = {
  create,
};

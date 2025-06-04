const Entries = require('../models/financial_statements');

async function create(req, res) {
  const {
    NAME,
    SERVICE,
    DAYLY_OFFERING,
    MISSION_OFFERING,
    SPECIAL_OFFERING,
    TOTAL_TITHES,
    TOTAL,
    ID_DEPARTMENT,
    CREATED_ON,
  } = req.body;
  const entries = await Entries.create({
    NAME,
    SERVICE,
    DAYLY_OFFERING,
    MISSION_OFFERING,
    SPECIAL_OFFERING,
    TOTAL_TITHES,
    TOTAL,
    ID_DEPARTMENT,
    CREATED_ON,
  });
  res.status(201).json({ success: true, data: entries });
}

module.exports = {
  create,
};

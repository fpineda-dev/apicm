/* const Deductions = require('../models/deductions');

async function create(req, res) {
  const {
    NAME_HELP,
    SPECCIAL_HELP,
    NUMBER,
    AMOUNT,
    RECEIPT,
    NAME_PASTOR,
    PAYMENT_PASTOR,
    ID_DEPARTMENT,

  } = req.body;
  const deductions = await Deductions.create({
    NAME_HELP,
    SPECCIAL_HELP,
    NUMBER,
    AMOUNT,
    RECEIPT,
    NAME_PASTOR,
    PAYMENT_PASTOR,
    ID_DEPARTMENT,
  });
  res.status(201).json({ success: true, data: deductions });
}

module.exports = {
  create,
}; */

const Deductions = require('../models/deductions');

async function create(req, res) {
  const {
    NAME_HELP,
    SPECCIAL_HELP,
    NAME_PASTOR,
    PAYMENT_PASTOR,
    TITHE_OF_TITHES,
    ID_FINANCIAL_STATEMENTS,
    ID_DEPARTMENT,
  } = req.body;
  const deductions = await Deductions.saveDeduction(
    NAME_HELP,
    SPECCIAL_HELP,
    NAME_PASTOR,
    PAYMENT_PASTOR,
    TITHE_OF_TITHES,
    ID_FINANCIAL_STATEMENTS,
    ID_DEPARTMENT,
  );
  res.status(201).json({ success: true, data: deductions });
}

module.exports = {
  create,
};

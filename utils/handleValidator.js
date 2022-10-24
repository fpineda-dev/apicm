const { validationResult } = require('express-validator');

// eslint-disable-next-line consistent-return
const validatorResults = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.errors });
  }
  next();
};

module.exports = validatorResults;

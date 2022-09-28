const { validationResult } = require('express-validator');

// eslint-disable-next-line consistent-return
const validatorResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);
    res.send({ error: error.array() });
  }
};

module.exports = validatorResults;

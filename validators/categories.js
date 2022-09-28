const { check } = require('express-validator');
const validatorResults = require('../utils/handleValidator');

const validatorCreateCategories = [
  check('description')
    .exists()
    .notEmpty(),
  (req, res, next) => {
    validatorResults(req, res, next);
  },
];

const validatorUpdateCategories = [
  check('description')
    .exists()
    .notEmpty(),
  (req, res, next) => {
    validatorResults(req, res, next);
  },
];

module.exports = { validatorCreateCategories, validatorUpdateCategories };

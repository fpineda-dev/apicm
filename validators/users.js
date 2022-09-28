const { check } = require('express-validator');
const validatorResults = require('../utils/handleValidator');

const validatorCreateUser = [
  check('id_roles')
    .exists()
    .notEmpty(),
  check('name')
    .exists()
    .notEmpty(),
  check('last_name')
    .exists()
    .notEmpty(),
  check('dni')
    .exists()
    .notEmpty(),
  check('user')
    .exists()
    .notEmpty(),
  check('email')
    .exists()
    .notEmpty(),
  check('password')
    .exists()
    .notEmpty(),
  (req, res, next) => {
    validatorResults(req, res, next);
  },
];

const validatorUpdateUser = [
  check('user')
    .exists()
    .notEmpty(),
  check('password')
    .exists()
    .notEmpty(),
  (req, res, next) => {
    validatorResults(req, res, next);
  },
];

module.exports = { validatorCreateUser, validatorUpdateUser };

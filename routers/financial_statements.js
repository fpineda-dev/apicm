const express = require('express');

const router = express.Router();
const {
  create,
} = require('../controllers/financial_statements');

router.post('/', create);

module.exports = router;

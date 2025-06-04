const express = require('express');

const router = express.Router();
const {
  create,
} = require('../controllers/deductions');

router.post('/', create);

module.exports = router;

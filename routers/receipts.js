const express = require('express');

const router = express.Router();
const {
  create,
} = require('../controllers/receipts');

router.post('/', create);

module.exports = router;

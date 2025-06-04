const express = require('express');

const router = express.Router();
const {
  create,
} = require('../controllers/update_receipts');

router.put('/:id', create);

module.exports = router;

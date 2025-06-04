const express = require('express');

const router = express.Router();
const {
  found,
} = require('../controllers/search_receipts');

router.get('/:from/:to/:iddepa/', found);

module.exports = router;

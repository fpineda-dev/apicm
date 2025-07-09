const express = require('express');

const router = express.Router();
const {
  healtcheckReview,
} = require('../controllers/healtcheck');

router.get('/', healtcheckReview);

module.exports = router;

const express = require('express');

const router = express.Router();
const {
  create,
} = require('../controllers/another_entries');

router.post('/', create);

module.exports = router;

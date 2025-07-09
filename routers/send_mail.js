const express = require('express');

const router = express.Router();
const {
  sendMail,
} = require('../controllers/send_mail');

router.post('/', sendMail);

module.exports = router;

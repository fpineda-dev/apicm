const express = require('express');
const passport = require('passport');
const auth = require('../middlewares/auth');
// const { retrieveSession } = require('../middlewares/retrieveSession');

const router = express.Router();
const {
  getAll,
  update,
} = require('../controllers/categorynews');

router.get(
  '/',
  [auth, passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
      // mail = req.user.EMAIL;
      console.log(`This Current Email ---> ${req.user.EMAIL}`);
      next();
    },
    getAll],
);

router.patch(
  '/:id',
  [auth, passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
      // mail = req.user.EMAIL;
      console.log(`This Current Email ---> ${req.user.EMAIL} and Auth ${auth}`);
      next();
    },
    update],
);

module.exports = router;

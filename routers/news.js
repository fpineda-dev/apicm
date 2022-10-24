const express = require('express');
const passport = require('passport');
const validatorResults = require('../utils/handleValidator');
const { validatorBody, validatorId } = require('../validators/news');
const auth = require('../middlewares/auth');
// const { retrieveSession } = require('../middlewares/retrieveSession');
// eslint-disable-next-line import/no-extraneous-dependencies
const router = express.Router();
const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require('../controllers/news');

// console.log(`Retrieve Session...${retrieveSession}`);

// let mail = '';

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

/* router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    res.json({
      name: req.user.NAME,
      email: req.user.EMAIL,
    });
    console.log(`This Current Email ---> ${req.user.EMAIL}`);
    next();
  },
  getAll,
); */
router.get('/:id', [auth, passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
  // mail = req.user.EMAIL;
    console.log(`This Current Email ---> ${req.user.EMAIL} and Auth ${auth}`);
    next();
  },
  [...validatorId, validatorResults],
  getById]);

router.post('/', [auth, passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
  // mail = req.user.EMAIL;
    console.log(`This Current Email ---> ${req.user.EMAIL}`);
    next();
  },
  [...validatorBody, validatorResults],
  create]);
router.patch(
  '/:id',
  [auth, passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
      // mail = req.user.EMAIL;
      console.log(`This Current Email ---> ${req.user.EMAIL} and Auth ${auth}`);
      next();
    },
    [...validatorId, ...validatorBody, validatorResults],
    update],
);
router.delete('/:id', [auth, passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    // mail = req.user.EMAIL;
    console.log(`This Current Email ---> ${req.user.EMAIL} and Auth ${auth}`);
    next();
  },
  [...validatorId, validatorResults],
  remove]);

/* router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      name: req.user.NAME,
      email: req.user.EMAIL,
    });
  },
);

const currentSession = new Promise(() => {
  passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.json({
        name: req.user.NAME,
        email: req.user.EMAIL,
      });
    },
  }).then(

  ); */

module.exports = router;

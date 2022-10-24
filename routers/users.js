const express = require('express');
const passport = require('passport');
const validatorResults = require('../utils/handleValidator');
const { validatorBody, validatorId } = require('../validators/users');
const auth = require('../middlewares/auth');
// eslint-disable-next-line import/no-extraneous-dependencies

const router = express.Router();
const {
  getAll,
  getById,
  singInLocal,
  create,
  update,
  remove,
} = require('../controllers/users');

router.get('/', getAll);
router.get('/:id', [...validatorId, validatorResults], getById);
router.get('/:email/:password', singInLocal);
router.post('/', [auth, passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    // mail = req.user.EMAIL;
    console.log(`This Current Email ---> ${req.user.EMAIL} and Auth ${auth}`);
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

module.exports = router;

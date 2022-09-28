const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies

const { validatorCreateCategories, validatorUpdateCategories } = require('../validators/categories');

const router = express.Router();
const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require('../controllers/categories');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', validatorCreateCategories, create);
router.put('/:id', validatorUpdateCategories, update);
router.delete('/:id', remove);

module.exports = router;

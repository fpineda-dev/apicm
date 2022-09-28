const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
// const bodyParser = require('body-parser');
const { validatorCreateUser, validatorUpdateUser } = require('../validators/users');

const router = express.Router();
const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require('../controllers/users');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', validatorCreateUser, create);
router.put('/:id', validatorUpdateUser, update);
router.delete('/:id', remove);

/* const controllers = {
  // eslint-disable-next-line global-require
  users: require('../controllers/users'),
};

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// We create a wrapper to workaround async errors not being transmitted correctly.
function makeHandlerAwareOfAsyncErrors(handler) {
  // eslint-disable-next-line func-names
  return async function (req, res, next) {
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  };
}

// We define the standard REST APIs for each controller (if they exist).
// eslint-disable-next-line no-restricted-syntax
for (const [routeName, routeController] of Object.entries(controllers)) {
  if (routeController.getAll) {
    router.get(
      `/api/${routeName}`,
      makeHandlerAwareOfAsyncErrors(routeController.getAll),
    );
  }
  if (routeController.getById) {
    router.get(
      `/api/${routeName}/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.getById),
    );
  }
  if (routeController.create) {
    router.post(
      `/api/${routeName}`,
      makeHandlerAwareOfAsyncErrors(routeController.create),
    );
  }
  if (routeController.update) {
    router.put(
      `/api/${routeName}/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.update),
    );
  }
  if (routeController.remove) {
    router.delete(
      `/api/${routeName}/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.remove),
    );
  }
} */

module.exports = router;

const { users } = require('../models/users');

async function getAll(req, res) {
  const userEditors = await users.findAll(); // user_editors.findAll();
  res.status(200).json(userEditors);
}

async function getById(req, res) {
  const { id } = req.params;
  const findUserById = await users.findByPk(id);
  if (findUserById) {
    res.status(200).json(findUserById);
  } else {
    res.status(404).send('404 - Not found');
  }
}

/**
   * create a new user editor
   * @param {*} req
   * @param {*} res
*/

async function create(req, res) {
  if (req.body.id) {
    res.status(400).send('Bad request: ID should not be provided, since it is determined automatically by the database.');
  } else {
    await users.create({
      ID_ROLES: req.body.id_roles,
      NAME: req.body.name,
      LAST_NAME: req.body.last_name,
      DNI: req.body.dni,
      USER: req.body.user,
      EMAIL: req.body.email,
      PASSWORD: req.body.password,
    }).then(() => {
      console.log(`This is a response ${res}`);
      res.status(201).end();
    }).catch((error) => {
      console.log(`Failed to create a new record : ${error}`);
    });
    res.status(201).end();
  }
}

async function update(req, res) {
  // const id = getIdParam(req);
  const { id } = req.params;
  console.log(`Entro a actualizar ${req.params.id}, ${req.body.password}`);

  // We only accept an UPDATE request if the `:id` param matches the body `id`
  if (id !== 0) {
    await users.update(
      {
        USER: req.body.user,
        PASSWORD: req.body.password,
      },
      {
        where: {
          ID_USERS_EDITORS: id,
        },
      },
    );

    res.status(200).end();
  } else {
    res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.params.id}).`);
  }
}

async function remove(req, res) {
  // const id = getIdParam(req);
  const { id } = req.params;
  await users.destroy({
    where: {
      ID_USERS_EDITORS: id,
    },
  });
  res.status(200).end();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

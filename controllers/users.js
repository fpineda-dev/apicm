const { User } = require("../models/users");

async function getAll(req, res) {
  const users = await User.findAll();
  res.status(200).json({ success: true, data: users });
}

async function getById(req, res) {
  const user = await User.findByPk(req.params.id);
  res.status(200).json({ success: true, data: user });
}

async function create(req, res) {
  const { ID_ROLES, NAME, LAST_NAME, DNI, USER, EMAIL, PASSWORD } = req.body;
  const user = await User.create({
    ID_ROLES,
    NAME,
    LAST_NAME,
    DNI,
    USER,
    EMAIL,
    PASSWORD,
  });
  res.status(201).json({ success: true, data: user });
}

async function update(req, res) {
  const { ID_ROLES, NAME, LAST_NAME, DNI, USER, EMAIL, PASSWORD } = req.body;
  const user = await User.findByPk(req.params.id);
  await user.update({
    ID_ROLES,
    NAME,
    LAST_NAME,
    DNI,
    USER,
    EMAIL,
    PASSWORD,
  });
  res.status(200).json({ success: true, data: user });
}

async function remove(req, res) {
  const user = await User.findByPk(req.params.id);
  await user.destroy();
  res.status(200).json({ success: true, data: {} });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

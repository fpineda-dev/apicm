require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/users');

async function getAll(req, res) {
  const users = await User.findAll();
  res.status(200).json({ success: true, data: users });
}

async function getById(req, res) {
  const user = await User.findByPk(req.params.id);
  res.status(200).json({ success: true, data: user });
}

async function singInLocal(req, res) {
  let user = '';
  try {
    const { email, password } = req.params;
    if (email !== '') {
      const userMail = { EMAIL: email };
      // check if user already exist in our database
      user = await User.findOne({ where: userMail });
    }
    console.log(`User ${user.EMAIL} Password ${password} and user Password ${user.PASSWORD}`);
    if (!user) res.status(401).json({ message: 'User does not exist' });
    if (user && (await bcrypt.compare(password, user.PASSWORD))) {
      const token = jwt.sign(
        { id_user: user.ID_USERS, id_roles: user.ID_ROLES, email },
        process.env.JWT_KEY,
      );
      // user token
      console.log(`Token... ${token}`);
      // user
      res.status(200).json(user);
    } else {
      res.status(400).send('Invalid Credentials');
    }
  } catch (error) {
    console.log(error);
  }
}

async function create(req, res) {
  const {
    ID_ROLES, NAME, LAST_NAME, DNI, USERNAME, EMAIL, PASSWORD,
  } = req.body;
  const encryptedPassword = await bcrypt.hash(PASSWORD, 10);
  console.log(encryptedPassword);
  console.log(`This Current Email in create User ---> ${req.user.EMAIL}`);
  const rol = req.user.ID_ROLES;
  if (rol === 1) {
    const user = await User.create({
      ID_ROLES,
      NAME,
      LAST_NAME,
      DNI,
      USERNAME,
      EMAIL,
      PASSWORD: encryptedPassword,
    });
    res.status(201).json({ success: true, data: user });
  } else {
    return res.status(401).send({ message: 'Unauthorized for to create user' });
  }
  return res.status(500).send({ message: 'Internal server error' });
}

async function update(req, res) {
  const {
    ID_ROLES, NAME, LAST_NAME, DNI, USERNAME, EMAIL, PASSWORD,
  } = req.body;
  const user = await User.findByPk(req.params.id);
  console.log(`This Current Email in Update ---> ${req.user.EMAIL}`);
  const rol = req.user.ID_ROLES;
  if (rol === 1) {
    await user.update({
      ID_ROLES,
      NAME,
      LAST_NAME,
      DNI,
      USERNAME,
      EMAIL,
      PASSWORD,
    });
    res.status(200).json({ success: true, data: user });
  } else {
    return res.status(401).send({ message: 'Unauthorized for to update user' });
  }
  return res.status(500).send({ message: 'Internal server error' });
}

async function remove(req, res) {
  const user = await User.findByPk(req.params.id);
  console.log(`This Current Email in delete ---> ${req.user.EMAIL}`);
  const rol = req.user.ID_ROLES;
  if (rol === 1) {
    await user.destroy();
    res.status(200).json({ success: true, data: {} });
  } else {
    return res.status(401).send({ message: 'Unauthorized for to delete user' });
  }
  return res.status(500).send({ message: 'Internal server error' });
}

module.exports = {
  getAll,
  getById,
  singInLocal,
  create,
  update,
  remove,
};

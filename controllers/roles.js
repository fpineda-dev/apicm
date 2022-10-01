const Rol = require("../models/roles");

const getAll = async (req, res) => {
  const roles = await Rol.findAll();
  res.status(200).json({ roles });
};

const getById = async (req, res) => {
  const rol = await Rol.findByPk(req.params.id);
  res.status(200).json({ success: true, data: rol });
};

const create = async (req, res) => {
  const { NAME, TOKEN } = req.body;
  const rol = await Rol.create({
    NAME,
    TOKEN,
  });
  res.status(201).json({
    success: true,
    data: rol,
  });
};

const update = async (req, res) => {
  const { NAME, TOKEN } = req.body;
  const rol = await Rol.findByPk(req.params.id);
  await rol.update({
    NAME,
    TOKEN,
  });
  res.status(200).json({
    success: true,
    data: rol,
  });
};

const remove = async (req, res) => {
  const rol = await Rol.findByPk(req.params.id);
  await rol.destroy();
  res.status(200).json({ success: true, data: {} });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

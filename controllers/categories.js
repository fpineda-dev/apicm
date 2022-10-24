const Category = require('../models/categories');

async function getAll(req, res) {
  const categories = await Category.findAll();
  res.status(200).json({ success: true, data: categories });
}

async function getById(req, res) {
  const category = await Category.findByPk(req.params.id);
  res.status(200).json({ success: true, data: category });
}

async function create(req, res) {
  const { DESCRIPTION } = req.body;
  const category = await Category.create({
    DESCRIPTION,
  });
  res.status(201).json({ success: true, data: category });
}

async function update(req, res) {
  const { DESCRIPTION } = req.body;
  const category = await Category.findByPk(req.params.id);
  await category.update({ DESCRIPTION });
  res.status(200).json({ success: true, data: category });
}

async function remove(req, res) {
  const category = await Category.findByPk(req.params.id);
  await category.destroy();
  res.status(200).json({ success: true, data: {} });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

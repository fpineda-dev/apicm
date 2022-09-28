const category = require('../models/categories');

async function getAll(req, res) {
  const foundCategory = await category.findAll(); // Categorie_editors.findAll();
  res.status(200).json(foundCategory);
}

async function getById(req, res) {
  const { id } = req.params;
  const foundCategory = await category.findByPk(id);
  if (!foundCategory) res.status(404).send('404 - Not found');

  res.status(200).json(foundCategory);
}

/**
 * create a new Categorie editor
 * @param {*} req
 * @param {*} res
 */

async function create(req, res) {
  const { name, description } = req.body;
  console.log(name, description);
  const categorie = await category.create({
    DESCRIPTION: description,
  });
  res.send(categorie);
}

async function update(req, res) {
  // const id = getIdParam(req);
  const { id } = req.params;
  const foundCategory = await category.findByPk(id);
  if (!foundCategory) res.status(404).send('not found category');
  const updateCategory = await category.update(
    {
      DESCRIPTION: req.body.description,
    },
    {
      where: { ID_CATEGORY: id },
    },
  );
  res.send(updateCategory);
}

async function remove(req, res) {
  const { id } = req.params;
  const foundCategory = await category.findByPk(id);
  if (!foundCategory) res.status(404).send('not found category');
  await category.destroy({
    where: {
      ID_CATEGORY: id,
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

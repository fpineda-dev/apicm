const Category = require('../models/categories');
const Rol = require('../models/roles');
const News = require('../models/news');
const { User } = require('../models/users');

const thereIsNews = async (id) => {
  const news = await News.findByPk(id);
  if (!news) throw new Error(`No existe noticia con el id: ${id}`);
};

const thereIsCategory = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) throw new Error(`No existe categoría con el id: ${id}`);
};

const thereIsUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error(`No existe usuario con el id: ${id}`);
};

const thereIsRol = async (id) => {
  const rol = await Rol.findByPk(id);
  if (!rol) throw new Error(`No existe rol con el id: ${id}`);
};

const thereIsEmail = async (EMAIL) => {
  const user = await User.findOne({ where: { EMAIL } });
  if (user) throw new Error('El email ingresado ya está registrado');
};

module.exports = {
  thereIsNews,
  thereIsCategory,
  thereIsUser,
  thereIsRol,
  thereIsEmail,
};

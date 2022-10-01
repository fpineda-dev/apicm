const { Op } = require("sequelize");
const News = require("../models/news");
const Category = require("../models/categories");
require("../models/associations");
const { paginate } = require("../utils/paginate");

const getAll = async (req, res) => {
  const [limit, offset] = paginate(req);
  let news = {};
  //const count = await News.count({ limit, offset });
  if (req.query.search) {
    news = await News.findAll({
      where: { TITLE: { [Op.like]: `%${req.query.search}%` } },
      offset,
      limit,
      include: [
        {
          model: Category,
          through: { attributes: [] },
        },
      ],
      order: [["ID_NEWS", "DESC"]],
    });
    return res.status(200).json({ success: true, data: news });
  }
  if (req.query.category) {
    news = await News.findAll({
      limit,
      offset,
      include: [
        {
          model: Category,
          through: { attributes: [] },
          where: { DESCRIPTION: req.query.category },
        },
      ],
      order: [["ID_NEWS", "DESC"]],
    });
    return res.status(200).json({ success: true, data: news });
  }
  news = await News.findAll({
    limit,
    offset,
    include: [
      {
        model: Category,
        through: { attributes: [] },
      },
    ],
    order: [["ID_NEWS", "DESC"]],
  });
  res.status(200).json({ success: true, data: news });
};

const getById = async (req, res) => {
  const news = await News.findByPk(req.params.id, {
    include: [
      {
        model: Category,
        through: { attributes: [] },
      },
    ],
  });
  res.status(200).json({ success: true, data: news });
};

const create = async (req, res) => {
  const { ID_CATEGORY, TITLE, DESCRIPTION, IMAGE, VIDEO } = req.body;
  const category = await Category.findByPk(ID_CATEGORY);
  const news = await News.create({
    TITLE,
    DESCRIPTION,
    IMAGE,
    VIDEO,
  });
  news.addCategories(category);
  res.status(201).json({
    success: true,
    data: news,
  });
};

const update = async (req, res) => {
  const { ID_CATEGORY, TITLE, DESCRIPTION, IMAGE, VIDEO } = req.body;
  const category = await Category.findByPk(ID_CATEGORY);
  const news = await News.findByPk(req.params.id);
  await news.update({
    TITLE,
    DESCRIPTION,
    IMAGE,
    VIDEO,
  });
  news.setCategories(category);
  res.status(200).json({
    success: true,
    data: news,
  });
};

const remove = async (req, res) => {
  const news = await News.findByPk(req.params.id);
  await news.destroy();
  res.status(200).json({ success: true, data: {} });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};

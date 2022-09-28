/* eslint-disable curly */
const { Op } = require('sequelize');
const { News } = require('../models/news');
const ErrorResponse = require('../utils/errorResponse');
const { paginate } = require('../utils/paginate');

// eslint-disable-next-line consistent-return
const getAll = async (req, res) => {
  const [limit, offset] = paginate(req);
  let news = {};
  const count = await News.count({ limit, offset });
  if (req.query.search) {
    news = await News.findAll({
      where: { TITLE: { [Op.like]: `%${req.query.search}%` } },
      offset,
      limit,
    });
    return res.status(200).json({ count, news });
  }
  news = await News.findAll({
    limit,
    offset,
  });
  console.log(news.length);
  res.status(200).json({ count, news });
};

// eslint-disable-next-line consistent-return
const getById = async (req, res, next) => {
  const news = await News.findByPk(req.params.id);
  if (!news) return next(
    new ErrorResponse(`No existe noticia con el id: ${req.params.id}.`, 404),
  );
  res.status(200).json({ success: true, data: news });
};

// eslint-disable-next-line consistent-return
const create = async (req, res, next) => {
  const {
    TITLE, DESCRIPTION, IMAGE, VIDEO,
  } = req.body;
  if (!TITLE) return next(new ErrorResponse(`El 'TITLE' es un campo requerido... ${404}`));
  const news = await News.create({
    TITLE,
    DESCRIPTION,
    IMAGE,
    VIDEO,
  });
  res.status(201).json({
    success: true,
    data: news,
  });
};
// eslint-disable-next-line consistent-return
const update = async (req, res, next) => {
  const {
    TITLE, DESCRIPTION, IMAGE, VIDEO,
  } = req.body;
  console.log(TITLE);
  if (!TITLE) return next(new ErrorResponse(`El 'TITLE' es un campo requerido.. ${404}`));
  const news = await News.findByPk(req.params.id);
  if (!news) return next(
    new ErrorResponse(`No existe noticia con el id: ${req.params.id}.`, 404),
  );
  await news.update({
    TITLE,
    DESCRIPTION,
    IMAGE,
    VIDEO,
  });
  res.status(200).json({
    success: true,
    data: news,
  });
};

// eslint-disable-next-line consistent-return
const remove = async (req, res, next) => {
  const news = await News.findByPk(req.params.id);
  if (!news) return next(
    new ErrorResponse(`No existe noticia con el id: ${req.params.id}.`, 404),
  );
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

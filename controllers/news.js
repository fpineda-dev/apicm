/* eslint-disable no-unused-expressions */
const { Op } = require('sequelize');
const News = require('../models/news');
const Category = require('../models/categories');
require('../models/associations');
const { paginate } = require('../utils/paginate');
const usersCategoriesNews = require('../models/users_categories_news');

// eslint-disable-next-line consistent-return
const getAll = async (req, res) => {
  console.log(`This Current Email in getAll ---> ${req.user.EMAIL} and ${req.user.ID_ROLES}`);
  // const userMail = { NAME_EDITOR: req.user.EMAIL };
  const rol = req.user.ID_ROLES;
  const [limit, offset] = paginate(req);
  let news = {};
  // const count = await News.count({ limit, offset });
  if (req.query.search) {
    if (rol === 1) {
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
        order: [['ID_NEWS', 'DESC']],
      });
      return res.status(200).json({ success: true, data: news });
    }
    if (rol === 0) {
      news = await News.findAll({
        where: { [Op.and]: [{ NAME_EDITOR: req.user.EMAIL }, { TITLE: { [Op.like]: `%${req.query.search}%` } }] },
        offset,
        limit,
        include: [
          {
            model: Category,
            through: { attributes: [] },
          },
        ],
        order: [['ID_NEWS', 'DESC']],
      }); // end if rol admin
      return res.status(200).json({ success: true, data: news });
    }
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
      order: [['ID_NEWS', 'DESC']],
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
    order: [['ID_NEWS', 'DESC']],
  });
  res.status(200).json({ success: true, data: news });
};

// eslint-disable-next-line consistent-return
const getById = async (req, res) => {
  console.log(`This Current Email in getById ---> ${req.user.EMAIL} and ${req.user.ID_ROLES}`);
  const rol = req.user.ID_ROLES;
  if (rol === 1) {
    const news = await News.findByPk(req.params.id, {
      include: [
        {
          model: Category,
          through: { attributes: [] },
        },
      ],
    });
    res.status(200).json({ success: true, data: news });
  } else if (rol === 0) {
    const news = await News.findAll({
      where: { [Op.and]: [{ ID_NEWS: req.params.id }, { NAME_EDITOR: req.user.EMAIL }] },

      include: [
        {
          model: Category,
          through: { attributes: [] },
        },
      ],

    });
    if (Object.entries(news).length === 0) {
      return res.status(403).send('Forbidden for search this news');
    }
    res.status(200).json({ success: true, data: news });
  } else {
    return res.status(401).send({ message: 'Unauthorized to find current new' });
  }
};

const create = async (req, res) => {
  let idNews = 0;
  const {
    ID_CATEGORY, TITLE, DESCRIPTION, IMAGE, VIDEO,
  } = req.body;
  // const category = await Category.findByPk(ID_CATEGORY);
  const news = await News.create({
    TITLE,
    DESCRIPTION,
    IMAGE,
    VIDEO,
    NAME_EDITOR: req.user.EMAIL,
  }).then((result) => { idNews = result.ID_NEWS; });
  // news.addCategories(category);
  // Add relationship between user, category and news
  const categoryNews = await usersCategoriesNews.create({
    ID_NEWS: idNews,
    ID_CATEGORY,
    ID_USERS: req.user.ID_USERS,
    ID_ROLES: req.user.ID_ROLES,
    STATUS_NEWS: 0,
  });
  res.status(201).json({
    success: true,
    data: {
      news,
      categoryNews,
    },
    // data_category: categoryNews,
  });
};

// eslint-disable-next-line consistent-return
const update = async (req, res) => {
  const userEmail = req.user.EMAIL;
  const {
    ID_CATEGORY, TITLE, DESCRIPTION, IMAGE, VIDEO,
  } = req.body;
  const category = await Category.findByPk(ID_CATEGORY);
  const news = await News.findByPk(req.params.id);
  console.log(`Current user ${news.NAME_EDITOR}`);
  if (userEmail === news.NAME_EDITOR) {
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
  } else {
    return res.status(403).send('Forbidden for update this news');
  }
};

// eslint-disable-next-line consistent-return
const remove = async (req, res) => {
  const userEmail = req.user.EMAIL;
  const news = await News.findByPk(req.params.id);
  console.log(`Current user ${news.NAME_EDITOR}`);
  if (userEmail === news.NAME_EDITOR) {
    await news.destroy();
    res.status(200).json({ success: true, data: {} });
  } else {
    return res.status(403).send('Forbidden for delete this news');
  }
};

async function getAllCategoriesNews(req, res) {
  const categoriesNews = await usersCategoriesNews.findAll();
  res.status(200).json({ success: true, data: categoriesNews });
}

// eslint-disable-next-line consistent-return
const updateCategoriesNews = async (req, res) => {
  const {
    STATUS_NEWS,
  } = req.body;
  if (Object.entries(req.body).length !== 0 || req.params.id !== null) {
    const rol = req.user.ID_ROLES;
    if (rol === 1) {
      await usersCategoriesNews.updateOne(
        { ID_USERS_CATEGORIES_NEWS: req.params.id },
        STATUS_NEWS,
      );
      const categoriesNews = await usersCategoriesNews.findByPk(req.params.id);
      res.status(200).json({
        success: true,
        data: categoriesNews,
      });
    } else {
      return res.status(403).send('Forbidden for update this usersCategoriesNews');
    }
  } else {
    return res.status(404).send({ message: 'Param ID_USERS_CATEGORIES_NEWS and field in body STATUS_NEWS is required' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getAllCategoriesNews,
  updateCategoriesNews,
};

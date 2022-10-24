/* eslint-disable no-unused-expressions */
require('../models/associations');
const usersCategoriesNews = require('../models/users_categories_news');

async function getAll(req, res) {
  const categoriesNews = await usersCategoriesNews.findAll();
  res.status(200).json({ success: true, data: categoriesNews });
}

// eslint-disable-next-line consistent-return
const update = async (req, res) => {
  const {
    STATUS_NEWS,
  } = req.body;
  if (Object.entries(req.body).length !== 0 || req.params.id !== 0) {
    const rol = req.user.ID_ROLES;
    console.log(`Param id and Status news ${req.params.id} ${STATUS_NEWS}`);
    if (rol === 1) {
      await usersCategoriesNews.update({ STATUS_NEWS }, {
        where: {
          ID_USERS_CATEGORIES_NEWS: req.params.id,
        },
      }).catch((error) => {
        // do seomthing with the error
        throw new Error(error);
      });
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
  update,
};

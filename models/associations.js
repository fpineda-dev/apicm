const Category = require('./categories');
const News = require('./news');
const NewsCategories = require('./news_categories');

News.belongsToMany(Category, {
  through: NewsCategories,
  foreignKey: 'ID_NEWS',
});
Category.belongsToMany(News, {
  through: NewsCategories,
  foreignKey: 'ID_CATEGORY',
});

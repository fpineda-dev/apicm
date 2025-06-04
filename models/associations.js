const Category = require('./categories');
const News = require('./news');
const NewsCategories = require('./news_categories');
// const Deductions = require('./deductions');
const Departments = require('./departments');
const Organization = require('./organization');
const Entries = require('./financial_statements');

News.belongsToMany(Category, {
  through: NewsCategories,
  foreignKey: 'ID_NEWS',
});
Category.belongsToMany(News, {
  through: NewsCategories,
  foreignKey: 'ID_CATEGORY',
});
/* Deductions.belongsToMany(Departments, {
  through: Deductions,
  foreignKey: 'ID_DEPARTMENT',
}); */
Departments.belongsToMany(Organization, {
  through: Departments,
  foreignKey: 'ID_ORGANIZATION',
});
Entries.belongsToMany(Departments, {
  through: Entries,
  foreignKey: 'ID_DEPARTMENT',
});

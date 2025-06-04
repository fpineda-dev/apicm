/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
// eslint-disable-next-line no-underscore-dangle
const _categories = require('./categories');
// eslint-disable-next-line no-underscore-dangle
const _news = require('./news');
// eslint-disable-next-line no-underscore-dangle, camelcase
const _news_categories = require('./news_categories');
// eslint-disable-next-line no-underscore-dangle
const _permissions = require('./permissions');
// eslint-disable-next-line no-underscore-dangle, camelcase
const _permissions_roles = require('./permissions_roles');
// eslint-disable-next-line no-underscore-dangle
const _roles = require('./roles');
// eslint-disable-next-line no-underscore-dangle
const _users = require('./users');
// eslint-disable-next-line no-underscore-dangle
const _users_categories_news = require('./users_categories_news');
// eslint-disable-next-line no-underscore-dangle
// const _deductions = require('./deductions');
// eslint-disable-next-line no-underscore-dangle
const _departments = require('./departments');
// eslint-disable-next-line no-underscore-dangle
const _entries = require('./financial_statements');
// eslint-disable-next-line no-underscore-dangle
const _organization = require('./organization');

function initModels(sequelize) {
  const categories = _categories(sequelize, DataTypes);
  const news = _news(sequelize, DataTypes);
  const news_categories = _news_categories(sequelize, DataTypes);
  const permissions = _permissions(sequelize, DataTypes);
  const permissions_roles = _permissions_roles(sequelize, DataTypes);
  const roles = _roles(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);
  const users_categories_news = _users_categories_news(sequelize, DataTypes);
  // const deductions = _deductions(sequelize, DataTypes);
  const departments = _departments(sequelize, DataTypes);
  const entries = _entries(sequelize, DataTypes);
  const organization = _organization(sequelize, DataTypes);

  return {
    categories,
    news,
    news_categories,
    permissions,
    permissions_roles,
    roles,
    users,
    users_categories_news,
    // deductions,
    departments,
    entries,
    organization,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

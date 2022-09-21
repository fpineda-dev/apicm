var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _news = require("./news");
var _news_categories = require("./news_categories");
var _users_categories_news = require("./users_categories_news");
var _users_editors = require("./users_editors");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var news = _news(sequelize, DataTypes);
  var news_categories = _news_categories(sequelize, DataTypes);
  var users_categories_news = _users_categories_news(sequelize, DataTypes);
  var users_editors = _users_editors(sequelize, DataTypes);


  return {
    categories,
    news,
    news_categories,
    users_categories_news,
    users_editors,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

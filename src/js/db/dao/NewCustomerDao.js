const Sequelize = require('sequelize');
const Config = require('config');

//    設定を読み込む
const params = Config.sequelize || {};


const sequelize = new Sequelize(
  params.database,
  params.username,
  params.password,
  params.options);

const Model = require("../models");
const NewCustomer = Model.NewCustomer(sequelize);

module.exports = function(storeId, callback) {
  NewCustomer.findAll({
    where: {
      storeId: storeId
    },
    attributes: ['month', 'storeName', 'count', ],
    order: 'month'
  })
  .then(results => {
    results.forEach(function(area) {
      console.log(JSON.stringify(area));
    });
    callback(results);
  })
  .catch(err => {
    if (err)
      console.error(JSON.stringify(err));
  });
};

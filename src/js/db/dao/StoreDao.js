var Sequelize = require('sequelize');

import Config from 'config';

//    設定を読み込む
const params = Config.sequelize || {};

const sequelize = new Sequelize(
  params.database,
  params.username,
  params.password,
  params.options);
  
const Model = require("../models");
const Store = Model.Store(sequelize);


module.exports = function (callback) {
  Store.findAll().then(stores => {
    stores.forEach(store => console.log(`${store.id} ${store.name}`));

    const array = [];
    stores.forEach(store => {
      array.push({"id": store.storeId, "name": store.storeName});
    });
    callback(array);
  });
};

var Sequelize = require('sequelize');
var IP = process.env.IP;
var username = process.env.C9_USER;
var password = null;
var sequelize = 
  new Sequelize('c9', username, password, {
    host: IP,
    port: 3306,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });
  
const Model = require("../models");
const Store = Model.Store(sequelize);


module.exports = function (callback) {
  Store.findAll().then(stores => {
    stores.forEach(store => console.log(`${store.id} ${store.name}`));

    const array = [];
    stores.forEach(store => {
      array.push({"id": store.id, "name": store.name});
    });
    callback(array);
  });
};

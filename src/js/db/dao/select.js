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
// const User = Model.User(sequelize);

// User.findAll().then(users => {
// //  console.log(JSON.stringify(users));
//   users.forEach(user => console.log(`${user.id} ${user.username} ${user.birthday}`));
// });

// const Store = Model.Store(sequelize);
// Store.findAll().then(stores => {
// //  console.log(JSON.stringify(users));
//   stores.forEach(store => console.log(`${store.id} ${store.name}`));
// });

// const NewCustomer = Model.NewCustomer(sequelize);
// NewCustomer.findAll().then(results => {
//   console.log(JSON.stringify(results));
// });

const dao = require("./NewCustomerDao.js");
dao(2, (results) => results.forEach(result => console.log(`${result.month} ${result.storeName} ${result.count}`)));

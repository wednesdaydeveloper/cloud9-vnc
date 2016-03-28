var Sequelize = require('sequelize');
var IP = process.env.IP;
var username = process.env.C9_USER;
var password = null;

var Config = require('config');

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

const Store = Model.Store(sequelize);
Store.findAll().then(stores => {
//  console.log(JSON.stringify(users));
  stores.forEach(store => console.log(`${store.id} ${store.name}`));
});

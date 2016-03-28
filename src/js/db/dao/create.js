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
const User = Model.User(sequelize);
const Store = Model.Store(sequelize);

sequelize.sync().then(function() {
  User.bulkCreate([
    { username: 'barfooz', birthday: new Date(1980, 6, 21) },
    { username: 'foo', birthday: new Date(1980, 6, 22)},
    { username: 'bar', ibirthday: new Date(1980, 6, 23) }
  ]).then(function() {
    console.log("ok");
  }).catch(function(err) {
    console.log(err);
  });
});

sequelize.sync().then(function() {
  Store.bulkCreate([
    { id: 1, name: "store1" },
    { id: 2, name: "store2" },
    { id: 3, name: "store3" },
    { id: 4, name: "store4" },
    { id: 5, name: "store5" },
    { id: 6, name: "store6" }
  ]).then(function() {
    console.log("ok");
  }).catch(function(err) {
    console.log(err);
  });
});

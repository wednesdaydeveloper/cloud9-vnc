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
// sequelize.sync().then(function() {
//   User.bulkCreate([
//     { username: 'barfooz', birthday: new Date(1980, 6, 21) },
//     { username: 'foo', birthday: new Date(1980, 6, 22)},
//     { username: 'bar', ibirthday: new Date(1980, 6, 23) }
//   ]).then(function() {
//     console.log("ok");
//   }).catch(function(err) {
//     console.log(err);
//   });
// });

const Store = Model.Store(sequelize);
sequelize.sync().then(function() {
  Store.bulkCreate([
    { storeId: 1, storeName: "store1" },
    { storeId: 2, storeName: "store2" },
    { storeId: 3, storeName: "store3" },
    { storeId: 4, storeName: "store4" },
    { storeId: 5, storeName: "store5" },
    { storeId: 6, storeName: "store6" }
  ]).then(function() {
    console.log("ok");
  }).catch(function(err) {
    console.log(err);
  });
});

// const NewCustomer = Model.NewCustomer(sequelize);
// sequelize.sync().then(function() {
//   NewCustomer.bulkCreate([
//     { month: '2016-01', storeId: 1, storeName: "store1", count: 11 },
//     { month: '2016-02', storeId: 1, storeName: "store1", count: 12 },
//     { month: '2016-03', storeId: 1, storeName: "store1", count: 13 },
//     { month: '2016-04', storeId: 1, storeName: "store1", count: 14 },

//     { month: '2016-01', storeId: 2, storeName: "store2", count: 21 },
//     { month: '2016-02', storeId: 2, storeName: "store2", count: 22 },
//     { month: '2016-03', storeId: 2, storeName: "store2", count: 23 },
//     { month: '2016-04', storeId: 2, storeName: "store2", count: 24 },

//     { month: '2016-01', storeId: 3, storeName: "store3", count: 31 },
//     { month: '2016-02', storeId: 3, storeName: "store3", count: 32 },
//     { month: '2016-03', storeId: 3, storeName: "store3", count: 33 },
//     { month: '2016-04', storeId: 3, storeName: "store3", count: 34 },

//     { month: '2016-01', storeId: 4, storeName: "store4", count: 41 },
//     { month: '2016-02', storeId: 4, storeName: "store4", count: 42 },
//     { month: '2016-03', storeId: 4, storeName: "store4", count: 43 },
//     { month: '2016-04', storeId: 4, storeName: "store4", count: 44 },

//     { month: '2016-01', storeId: 5, storeName: "store5", count: 51 },
//     { month: '2016-02', storeId: 5, storeName: "store5", count: 52 },
//     { month: '2016-03', storeId: 5, storeName: "store5", count: 53 },
//     { month: '2016-04', storeId: 5, storeName: "store5", count: 54 },

//     { month: '2016-01', storeId: 6, storeName: "store6", count: 61 },
//     { month: '2016-02', storeId: 6, storeName: "store6", count: 62 },
//     { month: '2016-03', storeId: 6, storeName: "store6", count: 63 },
//     { month: '2016-04', storeId: 6, storeName: "store6", count: 64 },
//   ]).then(function() {
//     console.log("ok");
//   }).catch(function(err) {
//     console.log(err);
//   });
// });

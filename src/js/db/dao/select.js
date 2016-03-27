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

const Sequelize = require("sequelize");

const sequelize = new Sequelize('database', '', '', {
  dialect: 'sqlite',
  storage: './sequelize-sqlite3.db'
});

const Model = require("../models");
const User = Model.User(sequelize);

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

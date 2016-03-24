import React from 'react';
import { render } from 'react-dom';
import Main from './components/view.js';

render(
  <Main />,
  document.getElementById('content')
);



const Sequelize = require("sequelize");
const Model = require("../db/models");

const sequelize = new Sequelize('database', '', '', {
  dialect: 'sqlite',
  storage: './sequelize-sqlite3.db'
});

const User = Model.User(sequelize);

User.findAll().then(users => {
//  console.log(JSON.stringify(users));
  users.forEach(user => console.log(`${user.id} ${user.username} ${user.birthday}`));
});

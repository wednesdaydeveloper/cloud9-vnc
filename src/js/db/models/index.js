const Sequelize = require("sequelize");

module.exports = {
  User: function(sequelize) {
    return sequelize.define('user', {
      username: Sequelize.STRING,
      birthday: Sequelize.DATE
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'm_user'     
    });
  }
};

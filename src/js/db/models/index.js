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
  },
  Store: function(sequelize) {
    return sequelize.define('store', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'm_store'     
    });
  }
  
  
  
};

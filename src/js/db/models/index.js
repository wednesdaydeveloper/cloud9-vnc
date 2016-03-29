const Sequelize = require("sequelize");

module.exports = {
  
  Store: function(sequelize) {
    return sequelize.define('M_STORE', {
      storeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'ID'
      },
      storeName: {
        type: Sequelize.STRING,
        field: 'NAME'
      }
    }, {
      getterMethods: {},
      classMethods: {},
      instanceMethods: {},
      tableName: 'M_STORE',
      timestamps: false
    });
    // return sequelize.define('store', {
    //   id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    //   },
    //   name: Sequelize.STRING
    // }, {
    //   timestamps: false,
    //   underscored: true,
    //   tableName: 'm_store'     
    // });    
  },
  NewCustomer: function(sequelize) {
    return sequelize.define('V_NEW_CUSTOMER_COUNT', {
      month: {
        type: Sequelize.STRING,
        field: 'MONTH'
      },
      storeId: {
        type: Sequelize.INTEGER,
        field: 'STORE_ID'
      },
      storeName: {
        type: Sequelize.STRING,
        field: 'STORE_NAME'
      },
      count: {
        type: Sequelize.INTEGER,
        field: 'COUNT'
      }
    }, {
      getterMethods: {},
      classMethods: {},
      instanceMethods: {},
      tableName: 'V_NEW_CUSTOMER_COUNT',
      timestamps: false
    });
  }
};

import React from 'react';
import View from './view.js';
import Search from './Search.js';
import Store from './Store.js';
import { connect } from 'react-redux';



// Containers
function mapStateToProps(state) {
  return {
    stores: [
      {id: 1, name: "shop1"},
      {id: 2, name: "shop2"},
      {id: 3, name: "shop3"},
      {id: 4, name: "shop4"}
    ]
  };
}


const Store2 = connect(
  mapStateToProps
)(Store);


const App = () => (
  <div>
    <Store2 />
    <Search />
    <View />
  </div>
);

export default App;
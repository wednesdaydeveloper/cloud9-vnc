import React, { Component, PropTypes } from 'react';

export default class Store extends Component {

  handleClick(ev) {
    ev.preventDefault();
    console.log("Store:handleClick" + ev);
  };

  render() {
    var stores = this.props.stores.map(store => {
      return <option value={store.id}>{store.name}</option>;
    });
    return (
      <select multiple id="storeNames" onChange={ ev=> this.handleClick(ev)}>
        {stores}
      </select>
    );    
  }
}

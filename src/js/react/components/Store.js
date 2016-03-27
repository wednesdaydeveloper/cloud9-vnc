import React, { Component, PropTypes } from 'react';

export default class Store extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stores: []
    };
  }

  componentDidMount() {
    const dao = require('../../db/dao/StoreDao');
    dao((stores) => this.setState({stores: stores}));
  }
  

  handleClick(ev) {
    ev.preventDefault();
    console.log("Store:handleClick" + ev);
    
    this.props.onChange(ev);
  };

  render() {
    var stores = this.state.stores.map(store => {
      return <option value={store.id}>{store.name}</option>;
    });
    
    console.log("count: " + stores.length);
    return (
      <select multiple id="storeNames" onChange={ ev=> this.handleClick(ev)}>
        {stores}
      </select>
    );    
  }
}

Store.propTypes = {
  onChange: PropTypes.func.isRequired
};
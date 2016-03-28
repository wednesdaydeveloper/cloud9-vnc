import React, { Component, PropTypes } from 'react';

export default class Store extends Component {

  constructor(props) {
    super(props);
    this.state = { stores: [] };
  }
  
  handleClick(ev) {
    ev.preventDefault();
    const node = this.refs.store;
    if (node.selectedIndex >= 0) {
      const id = node.selectedOptions[0].value;
      this.props.onClick(id);
    }
  }

  render() {
    const stores = this.props.stores.map(store => {
      return <option value={store.id}>{store.name}</option>;
    });
    
    console.log("count: " + stores.length);
    return (
      <div>
        <div>
          <select id="storeNames" ref='store' size="5">
            {stores}
          </select>
        </div>
        <div>
          <button onClick={e => this.handleClick(e)}>
            Search
          </button>
        </div>
      </div>
    );    
  }
}

Store.propTypes = {
  onClick: PropTypes.func.isRequired
};

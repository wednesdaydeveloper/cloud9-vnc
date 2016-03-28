import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeStoreAsync } from '../actions/ActionCreators';

class Store extends Component {

  constructor(props) {
    super(props);
    
    this.state = { stores: [] };
  }
  
  componentDidMount() {
    const dao = require('../../db/dao/StoreDao');
    dao((stores) => this.setState({stores: stores}));
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
    const stores = this.state.stores.map(store => {
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


// Containers
function mapStateToProps(state) {
  return {
    stores: state.stores
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: (id) => {
      dispatch(changeStoreAsync(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Store);



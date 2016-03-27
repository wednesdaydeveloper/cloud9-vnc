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
      const name = node.selectedOptions[0].text;
      this.props.onClick(id, name);
    }
  };


  render() {
    const stores = this.state.stores.map(store => {
      return <option value={store.id}>{store.name}</option>;
    });
    
    console.log("count: " + stores.length);
    return (
      <div>
        <div>
          <select multiple id="storeNames" ref='store'>
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
    onClick: (id, name) => {
      dispatch(changeStoreAsync(id));
    },
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Store);



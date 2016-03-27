import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
  
  render() {
    return (
      <div>
        <button onClick={e => this.handleClick(e)}>
          Search
        </button>
      </div>
    );
  }

  handleClick(ev) {
    ev.preventDefault();
    console.log("Search:handleClick");
    this.props.onAddClick(ev);
  };
}

Search.propTypes = {
  onAddClick: PropTypes.func.isRequired
};


// Containers
function mapStateToProps(state) {
  return {
    stores: state.stores
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddClick: (ev) => {
      console.log("mapDispatchToProps:onAddClick");
    },
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);



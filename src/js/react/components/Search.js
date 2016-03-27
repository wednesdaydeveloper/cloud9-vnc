import React, { Component, PropTypes } from 'react';

export default class Search extends Component {
  
  render() {
    return (
      <div>
        <button onClick={e => this.handleClick(e)}>
          Search
        </button>
      </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    console.log("Search:handleClick");
  };
}

// Search.propTypes = {
//   onAddClick: PropTypes.func.isRequired
// };

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
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  };
}

// Search.propTypes = {
//   onAddClick: PropTypes.func.isRequired
// };

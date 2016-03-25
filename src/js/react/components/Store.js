import React, { Component, PropTypes } from 'react';

export default class Store extends Component {
  
  render() {
    return (
      <div>
        <select name="options">
          <option value="option-1">Option1</option>
          <option value="option-2">Option2</option>
          <option value="option-3">Option3</option>
        </select>  
      </div>
    );
  }
}

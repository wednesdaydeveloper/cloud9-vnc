import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const View = ({ message }) => (
  <div>{message}</div>
);

View.propTypes = {
  message: PropTypes.string.isRequired
};

export default connect(
  (state) => ({message: state.message})
)(View);

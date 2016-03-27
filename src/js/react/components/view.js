import React from 'react';
import { connect } from 'react-redux';

class View extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>{this.props.message}</div>
    );
  }
}

// Containers
function mapStateToProps(state) {
  return {
    message: state.message
  };
}


export default connect(
  mapStateToProps
)(View);
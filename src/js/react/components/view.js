import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const View = ({ results }) => {

  if (!results || results.count == 0) {
    return <table/>;
  }

  const body = results.map(result => {
    return <tr>
      <td>{result.month}</td>
      <td>{result.count}</td>
    </tr>;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>month</th>
          <th>count</th>
        </tr>
      </thead>
    
      <tbody>
      {body}
      </tbody>
    
    </table>
  );
};

View.propTypes = {
  results: PropTypes.array.isRequired
};

export default connect(
  (state) => ({results: state.results})
)(View);

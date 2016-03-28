import { connect } from 'react-redux';
import { changeStoreAsync } from '../actions/ActionCreators';
import Store from '../components/Store';

export default connect(
  (state) => ({stores: state.stores}),
  (dispatch) => ({
    onClick: (id) => {
      dispatch(changeStoreAsync(id));
    }
  })
)(Store);

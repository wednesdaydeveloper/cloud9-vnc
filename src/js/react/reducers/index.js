import { handleActions } from 'redux-actions';

const reducer = handleActions({
  CHANGE_STORE: (state, action) => {
    return { message: action.payload };
  }
}, { message: "未選択" });

export default reducer;
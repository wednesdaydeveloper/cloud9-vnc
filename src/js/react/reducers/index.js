import { handleActions } from 'redux-actions';

const reducer = handleActions({
  CHANGE_STORE: (state, action) => {
    console.log("action.payload: " + action.payload);
    
    return { message: action.payload };
    
  },
}, { message: "未選択" });

export default reducer;
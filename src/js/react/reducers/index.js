import { handleActions } from 'redux-actions';
import { CHANGE_STORE, FETCH_STORES } from '../actions/ActionTypes';

const reducer = handleActions({
  //  店舗選択の変更
  [CHANGE_STORE]: (state, action) => {
    return Object.assign({}, state, { message: action.payload });
  },
  //  店舗情報の一覧を取得
  [FETCH_STORES]: (state, action) => {
    return Object.assign({}, state, { stores: action.payload });
  }
}, { message: "未選択", stores: [] });

export default reducer;

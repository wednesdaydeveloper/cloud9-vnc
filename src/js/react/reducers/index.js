import { handleActions } from 'redux-actions';
import { CHANGE_STORE, FETCH_STORES } from '../actions/ActionTypes';

const reducer = handleActions({
  //  店舗選択の変更
  [CHANGE_STORE]: (state, action) => {
    return Object.assign({}, state, { results: action.payload });
  },
  //  店舗情報の一覧を取得
  [FETCH_STORES]: (state, action) => {
    return Object.assign({}, state, { stores: action.payload });
  }
}, { results: [], stores: [] });

export default reducer;

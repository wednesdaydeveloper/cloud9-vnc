import { createAction } from 'redux-actions';
import { CHANGE_STORE } from './ActionTypes';

// Action Creator
export const changeStore = createAction(CHANGE_STORE);

const delay = 1000;

//  Promise を用いて非同期にタイマーをセットする。
function setTimeoutAsync(d) {
  return new Promise((resolve, reject) => (
    setTimeout(resolve, d)
  ));
}



//  Promise を用いて非同期に decrement する。
export const changeStoreAsync = (payload) => (dispatch, getState) => (
  setTimeoutAsync(delay)
  .then(() => dispatch(changeStore(payload)))
);
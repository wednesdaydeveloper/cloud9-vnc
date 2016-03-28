import { createAction } from 'redux-actions';
import { CHANGE_STORE } from './ActionTypes';

// Action Creator
export const changeStore = createAction(CHANGE_STORE);

const Delay = 1000;

//  Promise を用いて非同期にタイマーをセットする。
function setTimeoutAsync(delay) {
  return new Promise((resolve, reject) => (
    setTimeout(resolve, delay)
  ));
}
//  Promise を用いて非同期に処理する。
export const changeStoreAsync = (payload) => (dispatch, getState) => {
  setTimeoutAsync(Delay).then(() => dispatch(changeStore("selected " + payload)));
};
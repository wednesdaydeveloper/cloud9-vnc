import { createAction } from 'redux-actions';
import { CHANGE_STORE, FETCH_STORES } from './ActionTypes';

// Action Creator
export const changeStore = createAction(CHANGE_STORE);
export const fetchStores = createAction(FETCH_STORES);

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

//  Promise を用いて非同期に処理する。
export const fetchStoresAsync = () => (dispatch, getState) => {
  //  店舗情報をDBから取得し、state にセット。
  const dao = require('../../db/dao/StoreDao');
  dao((stores) => dispatch(fetchStores(stores)));
};

import { createAction } from 'redux-actions';
import { CHANGE_STORE, FETCH_STORES } from './ActionTypes';

// Action Creator
export const changeStore = createAction(CHANGE_STORE);
export const fetchStores = createAction(FETCH_STORES);

const dao = require("../../db/dao/NewCustomerDao.js");

//  DBから該当する店舗の情報を取得
export const changeStoreAsync = (payload) => (dispatch, getState) => {
  dao(payload, (results) => dispatch(changeStore(results)));
};

//  店舗情報をDBから非同期に取得する。
export const fetchStoresAsync = () => (dispatch, getState) => {
  const dao = require('../../db/dao/StoreDao');
  dao((stores) => dispatch(fetchStores(stores)));
};

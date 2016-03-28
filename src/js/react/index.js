import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.js';
import createFinalStore from './store/configureStore';
import { fetchStoresAsync } from './actions/ActionCreators';

// Store
const store = createFinalStore();

//  店舗一覧を非同期に取得
store.dispatch(fetchStoresAsync());

// main
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('content')
);
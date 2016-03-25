import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import App from './components/App.js';
import createFinalStore from './store/configureStore';

// Store
const store = createFinalStore();

// main
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('content')
);
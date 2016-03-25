import { applyMiddleware, compose, createStore } from 'redux';
import Thunk from 'redux-thunk';
import counter from '../reducers';
import createLogger from 'redux-logger'

export default function createFinalStore() {
  const finalCreateStore = compose(applyMiddleware(Thunk, createLogger()))(createStore);
  return finalCreateStore(counter);
}
import { handleActions } from 'redux-actions';

const reducer = handleActions({

}, { stores: [
      {id: 1, name: "shop1"},
      {id: 2, name: "shop2"},
      {id: 3, name: "shop3"},
      {id: 4, name: "shop4"}]});

export default reducer;
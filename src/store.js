import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;

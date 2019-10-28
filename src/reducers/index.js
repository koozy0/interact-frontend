import { combineReducers } from 'redux';
import errorReducer from './error';
import eventReducer from './event';
import userReducer from './user';

// import questionReducer from './question';

export default combineReducers({
  error: errorReducer,
  event: eventReducer,
  // question: questionReducer,
  user: userReducer,
});

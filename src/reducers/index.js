import { combineReducers } from 'redux';
import errorReducer from './error';
import eventReducer from './event';
import questionReducer from './question';
import userReducer from './user';

export default combineReducers({
  error: errorReducer,
  event: eventReducer,
  question: questionReducer,
  user: userReducer,
});

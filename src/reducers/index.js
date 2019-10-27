import { combineReducers } from 'redux';
import eventReducer from './event';

// import questionReducer from './question';
// import userReducer from './user';

export default combineReducers({
  event: eventReducer,
  // question: questionReducer,
  // user: userReducer,
});

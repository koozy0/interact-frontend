import {
  AUTH_ERROR,
  USER_LOADED,
  USER_LOADING,
  USER_LOGIN,
  USER_LOGOUT,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_ERROR:
      return {
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null,
      };

    case USER_LOGIN:
      return {
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
      };

    case USER_LOGOUT:
      return {
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null,
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
      };

    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}

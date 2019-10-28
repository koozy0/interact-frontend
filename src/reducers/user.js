import {
  AUTH_ERROR,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_LOADED,
  USER_LOADING,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  isAdmin: null,
  user: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_ERROR:
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        isAdmin: null,
        user: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        isAdmin: action.payload.user.role.includes('administrator'),
        user: action.payload.user,
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        isAdmin: action.payload.user.role.includes('administrator'),
        user: action.payload,
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

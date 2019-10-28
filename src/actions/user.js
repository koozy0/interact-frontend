import {
  AUTH_ERROR,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_LOADED,
  USER_LOADING,
} from './types';
import { clearErrors, returnErrors } from './error';

import interactApi from '../services/interact-api';

// Check token and load user
export const loadUser = () => async (dispatch, getState) => {
  // Clear errors
  dispatch(clearErrors());

  // User loading
  dispatch({ type: USER_LOADING });

  // Get token from localStorage
  const token = getState().user.token;

  // Fetch user
  try {
    const user = await interactApi.getUser(token);

    if (user) {
      dispatch({ type: USER_LOADED, payload: user.data });
    }
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({ type: AUTH_ERROR });
    localStorage.removeItem('token');
  }
};

// Login user
export const login = ({ username, password }) => async dispatch => {
  // Clear errors
  dispatch(clearErrors());

  try {
    const user = await interactApi.login({ username, password });

    if (user) {
      dispatch({ type: LOGIN_SUCCESS, payload: user.data });
      localStorage.setItem('token', user.data.token);
    }
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({ type: LOGIN_FAILURE });
  }
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

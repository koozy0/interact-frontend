import {
  AUTH_ERROR,
  USER_LOGIN,
  USER_LOGOUT,
  USER_LOADED,
  USER_LOADING,
} from './types';
import { deleteErrors, updateErrors } from './error';

import interactApi from '../services/interact-api';

// Check token and load user
export const loadUser = () => async (dispatch, getState) => {
  // Clear errors
  dispatch(deleteErrors());

  // User loading
  dispatch({
    type: USER_LOADING,
  });

  // Get token from localStorage
  const token = getState().user.token;

  // Fetch user
  try {
    const user = await interactApi.users.loadUser(token);

    if (user) {
      dispatch({
        type: USER_LOADED,
        payload: user,
      });
    } else {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  } catch (err) {
    dispatch(updateErrors(err));
    dispatch({
      type: AUTH_ERROR,
    });
    localStorage.removeItem('token');
  }
};

// Login user
export const userLogin = ({ username, password }) => async dispatch => {
  // Clear errors
  dispatch(deleteErrors());

  // User loading
  dispatch({
    type: USER_LOADING,
  });

  try {
    const user = await interactApi.users.login({
      username,
      password,
    });

    if (user) {
      dispatch({
        type: USER_LOGIN,
        payload: user,
      });
      localStorage.setItem('token', user.token);
    } else {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  } catch (err) {
    dispatch(updateErrors(err));
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Logout User
export const userLogout = () => {
  localStorage.removeItem('token');

  return { type: USER_LOGOUT };
};

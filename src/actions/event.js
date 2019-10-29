import {
  CLEAR_EVENTS,
  CREATE_EVENT,
  CREATE_EVENT_SUCCESS,
  DELETE_EVENT,
  EVENTS_LOADING,
  EVENT_ERROR,
  GET_EVENT,
  GET_EVENTS,
  SEARCH_EVENTS,
  UPDATE_EVENT,
} from './types';
import { clearErrors, returnErrors } from './error';

import interactApi from '../services/interact-api';

export const clearEvents = () => {
  return {
    type: CLEAR_EVENTS,
  };
};

export const eventsLoading = () => {
  return {
    type: EVENTS_LOADING,
  };
};

export const getEvents = () => async dispatch => {
  // Clear errors
  dispatch(clearErrors());

  // Events loading
  dispatch(eventsLoading());

  // Get token from localStorage
  const token = localStorage.getItem('token');

  // Fetch Events
  try {
    const res = await interactApi.getEvents(token);

    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (err) {
    const data = (err.response && err.response.data) || { msg: err.message };
    const status = (err.response && err.response.status) || null;

    dispatch(returnErrors(data, status));
    dispatch({ type: EVENT_ERROR });
  }
};

export const searchEvents = q => async dispatch => {
  // Clear errors
  dispatch(clearErrors());

  // Events loading
  dispatch(eventsLoading());

  // Fetch Events
  try {
    const res = await interactApi.searchEvents(q);

    dispatch({
      type: SEARCH_EVENTS,
      payload: res.data,
    });
  } catch (err) {
    const data = (err.response && err.response.data) || { msg: err.message };
    const status = (err.response && err.response.status) || null;

    dispatch(returnErrors(data, status));
    dispatch({ type: EVENT_ERROR });
  }
};

export const createEvent = payload => async dispatch => {
  // Create Event
  dispatch({
    type: CREATE_EVENT,
  });

  // Clear errors
  dispatch(clearErrors());

  // Get token from localStorage
  const token = localStorage.getItem('token');

  // Create Event
  try {
    await interactApi.createEvent(token, payload);

    dispatch({
      type: CREATE_EVENT_SUCCESS,
    });
  } catch (err) {
    const data = (err.response && err.response.data) || { msg: err.message };
    const status = (err.response && err.response.status) || null;

    dispatch(returnErrors(data, status));
    dispatch({ type: EVENT_ERROR });
  }
};

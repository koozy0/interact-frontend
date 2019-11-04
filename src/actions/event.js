import {
  CREATE_EVENT,
  DELETE_EVENT,
  EVENT_LOADING,
  FETCH_EVENT,
  FETCH_EVENTS,
  UPDATE_EVENT,
} from './types';
import { deleteErrors, updateErrors } from './error';

import interactApi from '../services/interact-api';

export const createEvent = payload => async dispatch => {
  // Reset error state
  dispatch(deleteErrors());

  // Get token from localStorage
  const token = localStorage.getItem('token');

  try {
    const newEvent = await interactApi.events.createEvent(token, payload);

    dispatch({
      type: CREATE_EVENT,
      payload: newEvent,
    });
  } catch (err) {
    dispatch(updateErrors(err));
  }
};

export const deleteEvent = id => async dispatch => {
  // Reset error state
  dispatch(deleteErrors());

  // Get token from localStorage
  const token = localStorage.getItem('token');

  try {
    await interactApi.events.deleteEvent(token, id);

    dispatch({
      type: DELETE_EVENT,
      payload: id,
    });
  } catch (err) {
    dispatch(updateErrors(err));
  }
};

export const fetchEvent = eventcode => dispatch => {
  // Reset error state
  dispatch(deleteErrors());

  // Events loading
  dispatch({
    type: EVENT_LOADING,
  });

  try {
    const event = interactApi.events.fetchEvent(eventcode);

    dispatch({
      type: FETCH_EVENT,
      payload: event,
    });
  } catch (err) {
    dispatch(updateErrors(err));
  }
};

export const fetchEvents = eventcode => dispatch => {
  // Reset error state
  dispatch(deleteErrors());

  // Events loading
  dispatch({
    type: EVENT_LOADING,
  });

  try {
    const events = interactApi.events.fetchEvents(eventcode);

    dispatch({
      type: FETCH_EVENTS,
      payload: events,
    });
  } catch (err) {
    dispatch(updateErrors(err));
  }
};

export const updateEvent = id => async dispatch => {
  // Reset error state
  dispatch(deleteErrors());

  // Get token from localStorage
  const token = localStorage.getItem('token');

  try {
    const updatedEvent = await interactApi.events.updateEvent(token, id);

    dispatch({
      type: UPDATE_EVENT,
      payload: updatedEvent,
    });
  } catch (err) {
    dispatch(updateErrors(err));
  }
};

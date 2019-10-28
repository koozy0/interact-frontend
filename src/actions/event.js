import {
  CLEAR_EVENTS,
  CREATE_EVENT,
  DELETE_EVENT,
  EVENTS_LOADING,
  GET_EVENT,
  GET_EVENTS,
  SEARCH_EVENTS,
  UPDATE_EVENT,
} from './types';

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

export const getEvents = () => dispatch => {
  dispatch(eventsLoading);

  return {
    type: GET_EVENTS,
  };
};

export const searchEvents = q => dispatch => {
  dispatch(eventsLoading);

  interactApi.searchEvents(q).then(res => {
    dispatch({
      type: SEARCH_EVENTS,
      payload: res.data,
    });
  });
};

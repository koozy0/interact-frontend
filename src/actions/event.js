import {
  CREATE_EVENT,
  DELETE_EVENT,
  EVENTS_LOADING,
  GET_EVENT,
  GET_EVENTS,
  UPDATE_EVENT,
} from './types';

import axios from 'axios';

export const getEvents = () => dispatch => {
  dispatch(setEventsLoading);

  return {
    type: GET_EVENTS,
  };
};

export const setEventsLoading = () => {
  return {
    type: EVENTS_LOADING,
  };
};

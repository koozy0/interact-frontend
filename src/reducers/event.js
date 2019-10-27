import {
  CREATE_EVENT,
  DELETE_EVENT,
  EVENTS_LOADING,
  GET_EVENT,
  GET_EVENTS,
  UPDATE_EVENT,
} from '../actions/types';

const initialState = {
  events: [],
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
      };

    case DELETE_EVENT:
      return {
        ...state,
      };

    case GET_EVENT:
      return {
        ...state,
      };

    case GET_EVENTS:
      return {
        ...state,
      };

    case UPDATE_EVENT:
      return {
        ...state,
      };

    case EVENTS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}

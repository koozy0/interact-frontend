import {
  CREATE_EVENT,
  DELETE_EVENT,
  EVENT_ERROR,
  EVENT_LOADING,
  FETCH_EVENT,
  FETCH_EVENTS,
  UPDATE_EVENT,
} from '../actions/types';

const initialState = {
  events: [],
  event: null,
  newEvent: null,
  isLoading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        newEvent: action.payload,
      };

    case DELETE_EVENT:
      return {
        ...state,
      };

    case EVENT_ERROR:
      return {
        events: [],
        event: null,
        isLoading: false,
      };

    case EVENT_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_EVENT:
      return {
        ...state,
        event: action.payload,
        isLoading: false,
      };

    case FETCH_EVENTS:
      return {
        ...state,
        events: action.payload,
        isLoading: false,
      };

    case UPDATE_EVENT:
      return {
        ...state,
      };

    default:
      return state;
  }
}

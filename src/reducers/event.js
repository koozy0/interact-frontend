import {
  CLEAR_EVENTS,
  CLEAR_SELECTED,
  CREATE_EVENT,
  CREATE_EVENT_SUCCESS,
  DELETE_EVENT,
  EVENTS_LOADING,
  EVENT_ERROR,
  GET_EVENT,
  GET_EVENTS,
  SEARCH_EVENTS,
  UPDATE_EVENT,
} from '../actions/types';

const initialState = {
  events: [],
  isLoading: false,
  isCreated: false,
  selected: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLEAR_EVENTS:
      return {
        ...state,
        events: [],
      };

    case CLEAR_SELECTED:
      return {
        ...state,
        selected: null,
      };

    case CREATE_EVENT:
      return {
        ...state,
        isCreated: false,
      };

    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        isCreated: true,
      };

    case DELETE_EVENT:
      return {
        ...state,
      };

    case EVENTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case EVENT_ERROR:
      return {
        events: [],
        isLoading: false,
      };

    case GET_EVENT:
      return {
        ...state,
        selected: action.payload,
        isLoading: false,
      };

    case GET_EVENTS:
    case SEARCH_EVENTS:
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

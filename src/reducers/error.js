import { CLEAR_ERRORS, GET_ERRORS } from '../actions/types';

const initialState = {
  data: {},
  status: null,
  id: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLEAR_ERRORS:
      return {
        data: {},
        status: null,
        id: null,
      };

    case GET_ERRORS:
      return {
        data:
          typeof action.payload.data === 'string'
            ? { msg: action.payload.data }
            : action.payload.data,
        status: action.payload.status,
        id: action.payload.id,
      };

    default:
      return state;
  }
}

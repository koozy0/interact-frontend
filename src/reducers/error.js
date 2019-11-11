import { DELETE_ERRORS, UPDATE_ERRORS } from '../actions/types';

const initialState = {
  data: {},
  status: null,
  code: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DELETE_ERRORS:
      return {
        data: {},
        status: null,
        code: null,
      };

    case UPDATE_ERRORS:
      return {
        data: action.payload,
        status: action.payload.status,
        code: action.payload.code,
      };

    default:
      return state;
  }
}

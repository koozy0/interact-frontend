import { CLEAR_ERRORS, GET_ERRORS } from './types';

export const returnErrors = (data, status, id) => {
  return {
    type: GET_ERRORS,
    payload: { data, status, id },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

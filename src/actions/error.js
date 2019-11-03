import { DELETE_ERRORS, UPDATE_ERRORS } from './types';

export const deleteErrors = (data, status, id) => {
  return {
    type: DELETE_ERRORS,
    payload: { data, status, id }
  };
};

export const updateErrors = () => {
  return {
    type: UPDATE_ERRORS
  };
};

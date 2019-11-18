import { DELETE_ERRORS, UPDATE_ERRORS } from './types';

export const deleteErrors = () => {
  return {
    type: DELETE_ERRORS,
  };
};

export const updateErrors = (err, code) => {
  const message = err.message;
  const status = err.status || err.response.status;

  return {
    type: UPDATE_ERRORS,
    payload: { message, status, code },
  };
};

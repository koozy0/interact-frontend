import { DELETE_ERRORS, UPDATE_ERRORS } from './types';

export const deleteErrors = () => {
  return {
    type: DELETE_ERRORS,
  };
};

export const updateErrors = (err, id) => {
  console.log('ERROR', err);

  const data = (err.response && err.response.data) || err;
  const status = (err.response && err.response.status) || null;

  return {
    type: UPDATE_ERRORS,
    payload: { data, status, id },
  };
};

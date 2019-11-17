import {
  CREATE_QUESTION,
  DELETE_QUESTION,
  FETCH_QUESTIONS,
  QUESTION_CREATED,
  QUESTION_DELETED,
  QUESTION_ERROR,
  QUESTION_LOADING,
  QUESTION_UPDATED,
  UPDATE_QUESTION,
} from './types';
import { deleteErrors, updateErrors } from './error';

import interactApi from '../services/interact-api';

export const createQuestion = payload => async dispatch => {
  // Reset error state
  dispatch(deleteErrors());

  try {
    const newQuestion = await interactApi.questions.createQuestion();

    dispatch({
      type: CREATE_QUESTION,
      payload: newQuestion,
    });
  } catch (err) {
    dispatch(updateErrors(err));
    dispatch({
      type: QUESTION_ERROR,
    });
  }
};

export const deleteQuestion = id => async dispatch => {};

export const fetchQuestions = eventcode => async dispatch => {};

export const updateQuestion = question => async dispatch => {};

export const questionCreated = question => async dispatch => {};

export const questionDeleted = id => async dispatch => {};

export const questionUpdated = payload => async dispatch => {};

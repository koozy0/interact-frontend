import {
  FETCH_QUESTIONS,
  QUESTION_CREATED,
  QUESTION_DELETED,
  QUESTION_ERROR,
  QUESTION_LOADING,
  QUESTION_UPDATED,
} from './types';
import { deleteErrors, updateErrors } from './error';

import interactApi from '../services/interact-api';

export const createQuestion = (event, payload) => async dispatch => {
  // Reset error state
  dispatch(deleteErrors());

  // Questions loading
  dispatch({
    type: QUESTION_LOADING,
  });

  try {
    await interactApi.questions.createQuestion(event, payload);
  } catch (err) {
    dispatch(updateErrors(err));
    dispatch({
      type: QUESTION_ERROR,
    });
  }
};

export const deleteQuestion = id => async dispatch => {};

export const fetchQuestions = eventId => async dispatch => {
  // Reset error state
  dispatch(deleteErrors());

  // Questions loading
  dispatch({
    type: QUESTION_LOADING,
  });

  try {
    const questions = await interactApi.questions.fetchQuestions(eventId);

    dispatch({
      type: FETCH_QUESTIONS,
      payload: questions,
    });
  } catch (err) {
    dispatch(updateErrors(err));
    dispatch({
      type: QUESTION_ERROR,
    });
  }
};

export const updateQuestion = question => async dispatch => {};

export const questionCreated = question => dispatch => {
  dispatch({
    type: QUESTION_CREATED,
    payload: question,
  });
};

export const questionDeleted = id => async dispatch => {};

export const questionUpdated = payload => async dispatch => {};

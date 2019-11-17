import {
  FETCH_QUESTIONS,
  QUESTION_CREATED,
  QUESTION_DELETED,
  QUESTION_ERROR,
  QUESTION_LOADING,
  QUESTION_UPDATED,
} from '../actions/types';

const initialState = {
  questions: [],
  highlighted: [],
  isLoading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        highlighted: action.payload.filter(question => question.highlighted),
        isLoading: false,
      };

    case QUESTION_CREATED:
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };

    case QUESTION_DELETED:
      return {
        ...state,
        questions: state.questions.filter(
          question => question._id !== action.payload,
        ),
      };

    case QUESTION_ERROR:
      return {
        questions: [],
        highlighted: [],
        isLoading: false,
      };

    case QUESTION_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case QUESTION_UPDATED:
      return {
        ...state,
        questions: state.questions.reduce(
          (acc, question) =>
            action.payload._id === question._id
              ? [...acc, action.payload]
              : [...acc, question],
          [],
        ),
      };

    default:
      return state;
  }
}

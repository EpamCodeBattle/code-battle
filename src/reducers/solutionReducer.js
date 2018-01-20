import {
  SOLUTION_LOADING,
  SOLUTION_FETCH_FAILED,
  SOLUTION_FETCH_SUCCESS
} from '../actions/actions';

const initialState = {
  isLoading: false,
  error: null,
  result: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SOLUTION_LOADING:
    return {
      ...state,
      isLoading: true
    };
  case SOLUTION_FETCH_SUCCESS:
    return {
      ...state,
      result: action.payload,
      isLoading: false
    };
  case SOLUTION_FETCH_FAILED:
    return {
      ...state,
      error: action.error && action.error.data || 'Solution fetch failed',
      isLoading: false
    };
  default:
    return state;
  }
};

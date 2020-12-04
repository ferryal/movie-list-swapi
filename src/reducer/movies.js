import { MOVIELIST } from '../actions/ActionTypes';

const initialState = {
  loading: false,
  movies: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIELIST.LOADING:
      return {
        ...state,
        loading: true
      };
    case MOVIELIST.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
				movies: action.payload.data.results
      };
    case MOVIELIST.FETCH_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

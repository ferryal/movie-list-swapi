import { PEOPLE } from '../actions/ActionTypes';

const initialState = {
  loading: false,
  people: {},
  // peoples: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PEOPLE.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
				people: action.payload.data.results
      };
    case PEOPLE.FETCH_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

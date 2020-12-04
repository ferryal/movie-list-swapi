import { combineReducers } from 'redux';
import { reducer as movies } from './reducer/movies';
import { reducer as people } from './reducer/people';
import { reducer as peopleInfo } from './reducer/peopleInfo';

export default combineReducers({
  movies,
  people,
  peopleInfo
});

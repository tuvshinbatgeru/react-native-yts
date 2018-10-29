import { combineReducers } from 'redux'

import MovieReducer from '../modules/movie/MovieReducer';
// ## Generator Reducer Imports

export default combineReducers({
  movie: MovieReducer,
});
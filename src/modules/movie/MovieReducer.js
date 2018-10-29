import { fromJS } from 'immutable'
import * as types from './MovieConstant'
import { InitialState } from './MovieInitial'

export default function MovieStateReducer(state = InitialState, action) {
	switch(action.type) {
		case types.GET_MOVIES:
			return state.setIn(['movies', 'fetching'], true)
		case types.GET_MOVIES_FAILED:
			return state.setIn(['movies', 'fetching'], false)
		case types.GET_MOVIES_FULFILLED: {
			const {
				movie_count,
				limit,
				movies,
				page_number,
			} = action.payload

			if(movies == null) return state.setIn(['movies', 'fetching'], false)
										   //.setIn(['movies', 'total'], 0)
										   .setIn(['movies', 'pages'], 1)
			
			let pages = parseInt(movie_count / limit)

			let prevMovies = state.getIn(['movies', 'data'])

			let nextState = state.setIn(['movies', 'fetching'], false)
								 .setIn(['movies', 'total'], movie_count)
								 .setIn(['movies', 'pages'], pages)
								 .setIn(['movies', 'data'], page_number == 1 ? fromJS(movies) : prevMovies.concat(fromJS(movies)))
			return nextState
		}
		default:
			return state
	}
}
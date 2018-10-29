import * as types from './MovieConstant'
import { fetchMovies } from './MovieApi'

const SUCCESS = 'ok'

export function getMovies(params) {
	return dispatch => { //redux action call handler
		dispatch({ type: types.GET_MOVIES })
		fetchMovies(params)
		.then((res) => {
			if(res.data.status == SUCCESS) {
				dispatch({ type: types.GET_MOVIES_FULFILLED, payload: res.data.data })
			} else {
				dispatch({ type: types.GET_MOVIES_FAILED, })
			}
		})
		.catch((error) => {
			dispatch({ type: types.GET_MOVIES_FAILED, })
		})
	}
}
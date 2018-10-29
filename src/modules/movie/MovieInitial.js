import { fromJS } from 'immutable'

export const InitialState = fromJS({
	movies: {
		fetching: false,
		total: 0,
		page: 0,
		pages: 0,
		data: [],
	},
	selected_movie: {
		fetching: false,
		data: {},
	}
})
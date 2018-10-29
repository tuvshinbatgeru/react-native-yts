import axios from 'axios'
import querystring from 'querystring'
const API_URL = 'https://yts.am/api/v2/'
const RECORD_LIMIT = 15

export function fetchMovies({ page, quality }) {
	let query = querystring.stringify({
		limit: RECORD_LIMIT,
		page,
		quality,
		//genre,
		with_rt_ratings: true,
	})

	//?page=1&quality=3D

	return axios.get(API_URL + 'list_movies.json?' + query)
}
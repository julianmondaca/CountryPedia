import axios from 'axios';

export function getCountries(name, order, aux) {
	var query = '';
	if (name.length > 1) {
		query = name;
	}

	return async function (dispatch) {
		const res = await axios.get(
			`http://localhost:3001/countries?name=${query}&order=${order}&aux=${aux}`
		);
		dispatch({type: 'GET_COUNTRIES', payload: res.data});
	};
}

export function countryDetail(id) {
	return async function (dispatch) {
		const res = await axios.get(`http://localhost:3001/countries/${id}`);

		dispatch({type: 'COUNTRY_DETAIL', payload: res.data});
	};
}

export function postActivity(activity) {
	return async function (dispatch) {
		const res = await axios.post(`http://localhost:3001/activity`, activity);
		dispatch({type: 'POST_ACTIVITY', payload: res.data});
	};
}

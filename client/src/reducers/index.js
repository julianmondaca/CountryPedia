const initialState = {
	countries: [],
	countryDetail: {},
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_COUTRIES':
			return {
				...state,
				countries: action.payload,
			};

		case 'COUNTRY_DETAIL':
			return {
				...state,
				countryDetail: action.payload,
			};
		case 'POST_ACTIVITY':
			return {
				...state,
				ok: action.payload,
			};

		default:
			return state;
	}
};

export default rootReducer;

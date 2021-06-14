const initialState = {
	countries: [],
	countryDetail: {},
	activities: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_COUNTRIES':
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
				activities: [...state.activities, action.payload],
			};

		default:
			return state;
	}
};

export default rootReducer;

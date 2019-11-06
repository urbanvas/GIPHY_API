import searchTypes from '../constants/searchConstants';

const initalState = {
	searchResults: []
};

const SearchReducer = (state = initalState, action) => {
	switch (action.type) {
		case searchTypes.SET_SEARCH_RESULTS:
			return {
				searchResults: [ ...action.results ]
			};
		default:
			return state;
	}
};
export default SearchReducer;

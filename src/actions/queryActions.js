import searchTypes from '../constants/searchConstants';

// this query watches the state that comes from the search component giving the searchSaga its values.
export const watchQuery = (value) => ({
	type: searchTypes.WATCH_SEARCH_QUERY,
	value
});

// after its value is giving to the Saga, this action is used to populate the store so the rest of the app
// can have access to its results
export const setSearchResults = (results) => ({
	type: searchTypes.SET_SEARCH_RESULTS,
	results
});

import { debounce, put } from 'redux-saga/effects';
import searchTypes from '../constants/searchConstants';
import axios from 'axios';
import { setSearchResults } from '../actions/queryActions';

function* fetchQueryfromGiphyAPI({ value }) {
	try {
		const URL = `https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=${value}`;
		const data = yield axios.get(URL);
		// GIPHY API has nested JSON and only the urls were needed fro this app.
		return yield put(setSearchResults(data.data.data));
	} catch (e) {
		console.log(e);
	}
}

// standard deboucne of 500ms, change here if API calls are too much/litte
function* watchSearch() {
	yield debounce(500, searchTypes.WATCH_SEARCH_QUERY, fetchQueryfromGiphyAPI);
}

export default watchSearch;

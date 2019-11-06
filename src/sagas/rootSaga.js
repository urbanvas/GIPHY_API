import SearchSaga from './SearchSaga';
import { fork, all } from 'redux-saga/effects';

function* rootSaga() {
	yield all([ fork(SearchSaga) ]);
}

export default rootSaga;

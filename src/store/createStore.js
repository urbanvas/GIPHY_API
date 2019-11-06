import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from '../reducers/rootReducer';
import RootSaga from '../sagas/rootSaga';

const sagaMiddleWare = createSagaMiddleware();
// REFACTORED OUT SAGAS AND STORE COMBINATION OUT OF FILE
const store = createStore(RootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(RootSaga);

export default store;

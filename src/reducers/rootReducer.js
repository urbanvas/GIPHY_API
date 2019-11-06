import { combineReducers } from 'redux';
import SearchReducer from './searchReducer';
import UserReducer from './userReducer';

// currently 'user' only returns favorites but its naming allows for more user data to be passed in the future
export default combineReducers({
	search: SearchReducer,
	user: UserReducer
});

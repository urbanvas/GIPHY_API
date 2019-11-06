import userTypes from '../constants/userConstants';

const initalState = [];

const userReducer = (state = initalState, action) => {
	switch (action.type) {
		case userTypes.ADD_TO_FAVORITES:
			return [ ...state, action.favorite ];

		default:
			return state;
	}
};
export default userReducer;

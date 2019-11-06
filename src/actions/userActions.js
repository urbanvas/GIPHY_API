import userTypes from '../constants/userConstants';

// favroites are taken directly from the search results so they dont ahve to be reloaded/ refetched
// after users add favorites it is stored into the redux store and saved there even after new
// fetchs to the GIPHY API
export const addFavorite = (favorite) => ({
	type: userTypes.ADD_TO_FAVORITES,
	favorite
});

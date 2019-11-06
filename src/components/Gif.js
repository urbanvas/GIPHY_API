import React from 'react';
import '../main.scss';
import { connect } from 'react-redux';
import { addFavorite } from '../actions/userActions';

const Gif = ({ data, addFavorite }) => {
	// data comes from the parent Results, and addFavorite is a redux action
	// handleClick sends and async action to the store to give it acess to the Favorites compondent
	const handleClick = () => {
		addFavorite(data);
	};
	return (
		<div key={data.id} className="column is-one-quarter" onClick={handleClick}>
			<img alt="awesome-gif" src={data.images.original.url} className="img-border" />
		</div>
	);
};

// mapDispatch is deconstructed here as it is the only action needed
export default connect(null, { addFavorite })(Gif);

import React from 'react';
import { connect } from 'react-redux';

const Favorites = ({ user }) => {
	// User prop name isnt the smartest props name, but it allows for more info to be passed down into the future
	// at the current moment it only passes down a array of favorite gifs
	return (
		<span className="columns is-multiline">
			{user.map((img, idx) => (
				<div key={idx} className="column is-one-quarter">
					<img alt="cool-gif" src={img.images.original.url} className="img-border" />
				</div>
			))}
		</span>
	);
};

const MapStateToProps = (state) => state;

export default connect(MapStateToProps, null)(Favorites);

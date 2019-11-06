import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { watchQuery } from '../actions/queryActions';

const Search = ({ watchQuery, handleButtonClick, showFavorites }) => {
	// hook to handle query
	const [ query, setQuery ] = useState('');
	// use effect to call the saga that fetches from the API
	useEffect(
		() => {
			watchQuery(query);
		},
		[ query, watchQuery ]
	);

	// TODO: REFACTOR OUT NAVBAR MARKUP FROM BUTTON AND INPUT BAR
	return (
		<section className="hero is-warning is-bold">
			<div className="hero-body">
				<div className="container has-text-centered">
					<h1 className="title is-1">GIPHY Search</h1>
					<p className="subtitle is-4">Find Your Weird</p>
					<br />
					<p className="title is-5">by Neil</p>
					<input
						className="input is-rounded is-warning"
						type="text"
						onChange={(e) => setQuery(e.target.value)}
						value={query}
					/>
					<button className="fav-button" onClick={handleButtonClick}>
						{showFavorites ? 'Back to Homepage' : 'Go To Favorites'}
					</button>
				</div>
				<p className=" level-right title is-6">Pshhh...Click any gif to add it to YOUR favorites!</p>
			</div>
		</section>
	);
};

export default connect(null, { watchQuery })(Search);

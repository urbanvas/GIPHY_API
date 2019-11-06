import React from 'react';
import { connect } from 'react-redux';
import Gif from './Gif';

const Results = ({ searchResults }) => {
	// only props needed is from the global redux state
	// which is the results populated by the sagas
	return (
		<span className="columns is-multiline">
			{searchResults.map((result) => <Gif key={result.id} data={result} />)}
		</span>
	);
};

const mapStatetoProps = (state) => {
	return {
		searchResults: state.search.searchResults
	};
};
export default connect(mapStatetoProps, null)(Results);

import React, { useState } from 'react';
import '../main.scss';
import Search from './Search';
import Results from './Results';
import Favorties from './Favorites';

function App() {
	// The Search component has a button and here lies the logic to know when it is clicked
	// the logic for handling the button lives here becuase Favorites and Results need that infomation
	// in order to know if to display or not
	const [ showFavorites, setShowFavorites ] = useState(false);
	const handleButtonClick = () => {
		showFavorites ? setShowFavorites(false) : setShowFavorites(true);
	};
	// // //
	return (
		<div className="App">
			{/* the Search is passed down props from its parent, APP to handle button logic */}
			<Search handleButtonClick={handleButtonClick} showFavorites={showFavorites} />

			{/* TODO: REFACTOR FOR REACT-ROUTER-DOM */}
			{showFavorites && <Favorties />}
			{!showFavorites && <Results />}
		</div>
	);
}

export default App;

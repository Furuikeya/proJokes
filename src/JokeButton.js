import React from 'react';
import 'tachyons';

const JokeButton = ({ jokeClick }) => {
	return (
		<button 
			className='joke-button bg-gold bw4 br-pill b--dark-red grow grow:hover '
			onClick={jokeClick}
			>joke
		</button>
	)
		
}


export default JokeButton;
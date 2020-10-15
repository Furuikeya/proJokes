import React from 'react';
import 'tachyons';


const JokeBox = ({ joke, setup, delivery }) => {
	return (
		<div className='f3'>
          <div>{joke}</div>
          <div>{setup}</div>
          <div>{delivery}</div>  
        </div>
	)
}

export default JokeBox;
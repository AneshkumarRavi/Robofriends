import React, {Component} from 'react';
import Robots from './Robots'


const Card = ({name, email, id}) => {

	return(
	<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt ='Robots' src ={`https://robohash.org/${name}?50*50`} />
	  <div>
		<h2>{name}</h2>
		<p>{email}</p>
	  </div>
	 </div>
  );

		
}

export default Card;
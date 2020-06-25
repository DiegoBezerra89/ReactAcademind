import React from 'react';
import './Person.css';

const Person = (props) => {
	return (
		<div className='Person'>
			<h1>I'm {props.name}! And I'm {props.age} years old!</h1>
			<p onClick={props.click}>click here</p>
			<p>To change the name type below</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	)
}

export default Person
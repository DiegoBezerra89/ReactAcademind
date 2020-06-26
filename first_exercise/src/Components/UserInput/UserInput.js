import React from 'react';
import './UserInput.css';

const UserInput = ( props ) => {
	const inputStyle = {
		borderRadius: '3px',
		border: 'none',
		padding: '10px'
	};
	
	return (
		<div className='UserInput'>
			<p>UserInput</p>
			<input 
				type='text'
				onChange={props.changeHandler}
				value={props.name}
				style={inputStyle}
			/>
		</div>
	);
};

export default UserInput;
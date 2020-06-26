import React from 'react'
import './UserInput.css'

const UserInput = ( props ) => {
	const style = {
		borderRadius: '3px',
		border: 'none',
		padding: '10px'
	}
	
	return (
		<div>
			<p>UserInput</p>
			<input type='text' onChange={props.changeHandler} value={props.name} style={style}/>
		</div>
	)
}

export default UserInput
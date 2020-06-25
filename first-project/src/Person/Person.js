import React from 'react'

const Person = (props) => {
	return (
		<div>
			<h1>I'm {props.name}! And I'm {props.age} years old!</h1>
			{props.children}
		</div>
	)
}

export default Person
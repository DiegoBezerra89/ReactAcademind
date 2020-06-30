import React from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
	let assignedClasses = [];
	let btnClass = '';

	if(props.showElement) {
		btnClass = classes.Red;
	}

	if(props.persons.length <= 2) {
		assignedClasses.push(classes.textRed);
	}
	if(props.persons.length <= 1) {
		assignedClasses.push(classes.fontBold);
	}

	return (
		<div className={classes.Cockpit}>
			<h1>Hello React!</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button className={btnClass} onClick={props.onClick}>Toggle Elements</button>
		</div>
	);
}

export default Cockpit;
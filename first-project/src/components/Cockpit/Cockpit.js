import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
	useEffect(() => {
		toggleBtnRef.current.click();
	},[]);
	const toggleBtnRef = useRef(null);


	let btnClass = '';
	let assignedClasses = [];

	if(props.showElement) {
		btnClass = classes.Red;
	}

	if(props.personsLength <= 2) {
		assignedClasses.push(classes.textRed);
	}
	if(props.personsLength <= 1) {
		assignedClasses.push(classes.fontBold);
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button ref={toggleBtnRef} className={btnClass} onClick={props.onClick}>Toggle Elements</button>
			<AuthContext.Consumer>
			{(context) => <button onClick={context.login}>Log In</button>}				
			</AuthContext.Consumer>
		</div>
	);
}

export default React.memo(Cockpit);
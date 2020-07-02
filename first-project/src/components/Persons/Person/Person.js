import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary'; //high order component
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
	render() {
		console.log('[Person.js] render');
		return (
			<Aux>
				<AuthContext.Consumer>
					{(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please Log in.</p>}
				</AuthContext.Consumer>
					<h1>I'm {this.props.name}! And I'm {this.props.age} years old!</h1>
					<p onClick={this.props.click}>click here to delete the element.</p>
					<p>To change the name type below</p>
					<input type="text" onChange={this.props.changed} value={this.props.name} />
			</Aux>	
		);
	}
}

Person.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	click: PropTypes.func,
	changed: PropTypes.func
};

export default withClass(Person, classes.Person);
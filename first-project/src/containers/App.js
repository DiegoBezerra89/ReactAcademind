import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';


// class App extends Component {
class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

	state = {
		persons: [
			{ id: 1, name: 'Diego', age: 30 },
			{ id: 2, name: 'Renata', age: 24 },
			{ id: 3, name: 'Elizabete', age: 54}
		],
		showElement: false,
		showCockpit: true,
		authenticated: false
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex( p => {
			return p.id === id;
		});

		const person = {	
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState( { persons: persons });
	}

	toggleElements = () => {
		const doesShow = this.state.showElement;
		this.setState({ showElement: !doesShow });
	}

	deleteElement = (index) => {
		const person =  [...this.state.persons];
		person.splice(index, 1);
		this.setState({ persons: person });
	}

	loginHandler = () => {
		this.setState({ authenticated: true });
	}

	render() {
		console.log('[App.js] render');
		let person = null;

		if (this.state.showElement) {
			person = (
				<Persons 
					persons={this.state.persons}
					clicked={this.deleteElement}
					changed={this.nameChangeHandler} 
					isAuthenticated={this.state.authenticated} 
				/>
			);
		}

		let cockpit = this.state.showCockpit;
		return (
			<Aux>
				<button
					onClick={() => {
						this.setState({showCockpit: !cockpit})
					}}
				>
					Click to remove Cockpit
				</button>
				<AuthContext.Provider
					value={{
						authenticated: this.state.authenticated,
						login: this.loginHandler
					}}
				>
					{this.state.showCockpit ? (
						<Cockpit
							title={this.props.appTitle}
							showElement={this.state.showElement}
							onClick={this.toggleElements}
							personsLength={this.state.persons.length}
						/>
					) : null}
					{person}
				</AuthContext.Provider>
			</Aux>
		);
	}
}

export default withClass(App, classes.App);

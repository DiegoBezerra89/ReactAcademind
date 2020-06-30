import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


// class App extends Component {
class App extends Component {
	state = {
		persons: [
			{ id: 1, name: 'Diego', age: 30 },
			{ id: 2, name: 'Renata', age: 24 },
			{ id: 3, name: 'Elizabete', age: 54}
		],
		showElement: false
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

	render() {
		let person = null;

		if (this.state.showElement) {
			person = <Persons
						persons={this.state.persons}
						clicked={this.deleteElement}
						changed={this.nameChangeHandler} />
			btnClass = classes.Red;
		}

		return (
			<div className={classes.App}>
			<Cockpit
				showElement={this.state.showElement}
				onClick={this.toggleElements}
				persons={this.state.persons}/>
			{person}
			</div>
		);
	}
}

export default App;

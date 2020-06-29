import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person'



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

		let btnClass = '';

		if (this.state.showElement) {
			person = (
				<div>
					{this.state.persons.map( (item, index) => {
						return(
							<Person
								name={item.name}
								age={item.age}
								click={() => this.deleteElement(index)}
								key={item.id}
								changed={(event) => this.nameChangeHandler(event, item.id)}
							/>
						);
						})
					}
				</div>
			);

			btnClass = classes.Red;
		}

		let assignedClasses = '';

		if(this.state.persons.length <= 2) {
			assignedClasses = classes.red;
		}
		if(this.state.persons.length <= 1) {
			assignedClasses = `${assignedClasses} ${classes.bold}`;
		}

		return (
			<div className={classes.App}>
				<h1>Hello React!</h1>
				<p className={assignedClasses}>This is really working!</p>
				<button className={btnClass} onClick={this.toggleElements}>Toggle Elements</button>
				{person}
			</div>
		);
	}
}

export default App;

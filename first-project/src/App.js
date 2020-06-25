import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

// class App extends Component {
class App extends Component {
	state = {
		person: [
			{ name: 'Diego', age: 30 },
			{ name: 'Renata', age: 24 },
			{ name: 'Elizabete', age: 54}
		]
	}

	switchNameHandler = (newName) => {
		this.setState({
			person: [
				{ name: newName, age: 30 },
				{ name: newName, age: 24 },
				{ name: newName, age: 254}
			]
		})
	}

	nameChangeHandler = (event) => {
		this.setState({
			person: [
				{ name: event.target.value, age: 30 },
				{ name: event.target.value, age: 24 },
				{ name: event.target.value, age: 54}
			]
		})
	}

	render() {
		const style = {
			backgroundColor: 'yellow',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		}
		return (
			<div className='App'>
				<h1>Hello World!</h1>
				<button style={style} onClick={this.switchNameHandler.bind(this, 'teste')}>Switch name</button>
				<Person 
					name={this.state.person[0].name} 
					age={this.state.person[0].age}
					click={this.switchNameHandler.bind(this, 'DiegoBezerra')}
					changed={this.nameChangeHandler}
				/>
				<Person
					name={this.state.person[1].name} 
					age={this.state.person[1].age}
					click={this.switchNameHandler.bind(this, 'RenataAmeida')}
					changed={this.nameChangeHandler}
				/>
				<Person 
					name={this.state.person[2].name} 
					age={this.state.person[2].age}
					click={this.switchNameHandler.bind(this, 'ElizabeteBatista')}
					changed={this.nameChangeHandler}
				/>
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
	state = {
		person: [
			{ name: 'Diego', age: 30 },
			{ name: 'Renata', age: 24 },
			{ name: 'Elizabete', age: 54}
		]
	}
	
	render () {
		return (
			<div className='App'>
				<h1>Hello World!</h1>
				<Person name={this.state.person[0].name} age={this.state.person[0].age}/>
				<Person name={this.state.person[1].name} age={this.state.person[1].age}>
					<p>props.children</p>
				</Person>
				<Person name={this.state.person[2].name} age={this.state.person[2].age}/>
			</div>
		);
	}
  //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hello World!'))
}

export default App;

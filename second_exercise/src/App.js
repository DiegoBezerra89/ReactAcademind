import React, { Component } from 'react';
import './App.css';
import Validation from './Components/Validation/Validation';
import Char from './Components/Char/Char';

class App extends Component {
	state = {
		userInput: ''
	}

	inputChangeHandler = (event) => {
		this.setState({userInput: event.target.value});
	}

	deleteCharHandler = ( index ) => {
		const text = this.state.userInput.split('');
		text.splice(index, 1);
		const updatedText = text.join('');
		this.setState({userInput: updatedText});
	}

	render() {
		const charList = this.state.userInput.split('').map((char, index) => {
			return (
				<Char
					character={char}
					key={index}
					clicked={() => this.deleteCharHandler(index)}
				/>
			);
		});
		return(
			<div className="App">
				<input
					type="text"
					onChange={this.inputChangeHandler}
					value={this.state.userInput}	
				/>
				<p>{this.state.userInput}</p>
				<Validation inputLength={this.state.userInput.length}/>
				{charList}
			</div>
		);
	};
}

export default App;

/*
- create an input field with an event listener, which outputs the length of the entered text below(e.g in a paragraph) ##
- create a new component(validation) which receives that length
- inside validation, either output 'text too short' or 'text long enough' depending on the text length
- create another component(charComponent) and style it as an 
	inline box(display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)
- Render a list of charcomponents, it should be removed from the entered text
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput/UserInput'
import UserOutput from './Components/UserOutput/UserOutput'

class App extends Component {
	state = {
		userName: 'Diego'
	}

	eventHandler = ( event ) => {
		console.log(event)
		this.setState({
			userName: event.target.value
		})
	}

	render() {
		const style = {
			display: 'inline-block',
			width: '40%',
			padding: '20px',
			textAlign: 'center',
			border: '1px solid #ccc'
		}

		return (
			<div className='App'>
				<div style={style}>
				<h1>Components Exercise</h1>
					<UserInput changeHandler={this.eventHandler} name={this.state.userName}/>
					<UserOutput userName={this.state.userName} />
					<UserOutput userName={this.state.userName} />
					<UserOutput userName={this.state.userName} />
					<UserOutput userName={this.state.userName} />
				</div>
			</div>
		)
	}
}	

export default App;

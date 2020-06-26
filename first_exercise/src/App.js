import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';

class App extends Component {
	state = {
		username: 'Diego'
	}

	eventHandler = ( event ) => {
		console.log(event);
		this.setState({
			username: event.target.value
		});
	};

	render() {
		const style = {
			display: 'inline-block',
			width: '40%',
			padding: '20px',
			textAlign: 'center',
			border: '1px solid #ccc'
		};

		return (
			<div className='App'>
				<div style={style}>
				<h1>Components Exercise</h1>
					<UserInput 
						changeHandler={this.eventHandler}
						name={this.state.userName}
					/>
					<UserOutput userName={this.state.username} />
					<UserOutput userName={this.state.username} />
					<UserOutput userName={this.state.username} />
					<UserOutput userName={this.state.username} />
				</div>
			</div>
		);
	};
}	;

export default App;

import React, { Component } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

class App extends Component {
	state = { number: 0 };
	render() {
		return (
			<div className="App">
				<h1>Root</h1>
				<AddNumberRoot
				// onClick={function (size) {
				//   this.setState({ number: this.state.number + size });
				// }.bind(this)} // 리덕스로 전환하였기 떄문에 필요 없다.
				></AddNumberRoot>
				<DisplayNumberRoot
				//  number={this.state.number} //
				></DisplayNumberRoot>
			</div>
		);
	}
}

export default App;

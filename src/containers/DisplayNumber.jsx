import DisplayNumber from '../components/DisplayNumber';

// redux 문구로 인하여 자동 익스포드 디폴트 해준다
// 전에는 수동으로 displaynumber 에서 import store 해주었지만 redux 화로 인하여 index.js 에서 해주면 끝이다.
import { connect } from 'react-redux';
function mapReduxStateToReactProps(state) {
	return {
		number: state.number,
		// 전달 하고자 하는 것

		// 아래 부분과 같다.
		// state = { number: store.getState().number };
		// 		store.subscribe(
		// 			function () {
		// 				this.setState({ number: store.getState().number });
		// 			}.bind(this),
		// 		);
		//		number={this.state.number}
	};
}
function mapReduxDispatchToReactProps(props) {
	return {
		unit: props.unit,
	};
}
export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNumber);

// connect 란 함수가
// 	render() {
// 		return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>;
// 	}
// 이런 것을 자동으로 뱉어내줌

// import React, { Component } from 'react';
// import store from '../store';

// export default class extends Component {
// 	state = { number: store.getState().number };
// 	constructor(props) {
// 		// componentDidMount(props) {
// 		super(props);
// 		store.subscribe(
// 			function () {
// 				this.setState({ number: store.getState().number });
// 			}.bind(this),
// 		);
// 	}
// 	render() {
// 		return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>;
// 	}
// }

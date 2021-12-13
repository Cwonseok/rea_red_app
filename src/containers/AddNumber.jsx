import AddNumber from '../components/AddNumber';

import { connect } from 'react-redux';

function mapReduxDispatchToReactProps(dispatch) {
	return {
		// add number 의 프록스 값을 넘겨줘야 하니 onClick
		// 의 주는 값는 함수 값을 넣어줌
		onClick: function (size) {
			// store.dispatch({ type: 'INCREMENT', size: size });
			dispatch({ type: 'INCREMENT', size: size });
		},
	};
}
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);
// connect 란 api 는 2번 호출해야 한다 .
// 두번째 인자는 리덕스의 dispatch 를 리액트의 컴포넌트에 프롭스로 연결시켜주는 정보를 담고 있는 (return 값 안의 함수) 를 만들어서 공급해주면 나머지
// 아래와 같은 (redux 화 이전의 react 형식의) 부분의 작업들은 redux 가 대신에 알아서 해준다.

// import React, { Component } from 'react';
// import store from '../store';

// export default class extends Component {
// 	render() {
// 		return (
// 			<AddNumber
// 				onClick={function (size) {
// 					store.dispatch({ type: 'INCREMENT', size: size });
// 				}.bind(this)}></AddNumber>
// 이벤트 프롭스 만 있으니 export default 의 첫번째 인자는 없어도 괜찮다 = null
// 		);
// 	}
// }

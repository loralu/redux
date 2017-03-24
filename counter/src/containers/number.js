import {
	connect
} from 'react-redux'
import {
	increment,
	decrement
} from '../actions'
import Counter from '../components/counter.js'

const mapStateToProps = function(state) {
	return {
		num: state.number,
		isOdd: state.number % 2 !== 0
	}
}


const mapDispatchToProps = function(dispatch) {
	return {
		increment: function() {
			return dispatch(increment())
		},
		decrement: function() {
			return dispatch(decrement())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter)
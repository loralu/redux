import {
	connect
} from 'react-redux'
import {
	setVisibilityFliters,
	clearCompleted
} from '../actions'

import Footer from '../components/Footer.js'

const mapStateToProps = function(state) {
	let lefted = state.todos.reduce(function(preValue, value) {
		return value.completed ? preValue : preValue + 1
	}, 0);
	return {
		selectedFilter: state.visibilityFilter,
		lefted: lefted
	}
}


const mapDispatchToProps = function(dispatch) {
	return {
		setVisibilityFliters: function(filter) {
			return dispatch(setVisibilityFliters(filter))
		},
		clearCompleted: function() {
			return dispatch(clearCompleted())
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer)
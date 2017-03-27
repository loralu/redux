import {
	connect
} from 'react-redux'
import {
	ActionCreators as UndoActionCreators
} from 'redux-undo'

import Undo from '../components/Undo.js'



const mapStateToProps = function(state) {
	return {
		canUndo: state.todos.past.length > 0 || state.visibilityFilter.past.length > 0,
		canRedo: state.todos.future.length > 0 || state.visibilityFilter.future.length > 0
	}
}


const mapDispatchToProps = function(dispatch) {
	return {
		onUndo: function() {
			return dispatch(UndoActionCreators.undo())
		},
		onRedo: function() {
			return dispatch(UndoActionCreators.redo())
		}
	}
}



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Undo)
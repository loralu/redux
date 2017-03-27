import {
	connect
} from 'react-redux'

import Todolist from '../components/Todolist.js'
import {
	toggleTodo,
	deleteTodo
} from '../actions'


const getVisibleTodos = function(todos, filter) {
	switch (filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(function(t) {
				return t.completed
			})
		case 'SHOW_ACTIVE':
			return todos.filter(function(t) {
				return !t.completed
			})
		default:
			return todos
	}
}

const mapStateToProps = function(state) {
	return {
		visibleTodos: getVisibleTodos(state.todos.present, state.visibilityFilter.present),
		visibilityFilter: state.visibilityFilter
	}
}


const mapDispatchToProps = function(dispatch) {
	return {
		toggleTodo: function(index) {
			return dispatch(toggleTodo(index))
		},
		delTodo: function(index) {
			return dispatch(deleteTodo(index))
		}
	}
}
const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(Todolist)

export default VisibleTodoList
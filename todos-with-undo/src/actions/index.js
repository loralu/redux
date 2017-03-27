import * as types from '../constants/ActionTypes'


export const addTodo = function(text) {
	return {
		type: types.ADD_TODO,
		text
	}
}

export const toggleTodo = function(id) {
	return {
		type: types.TOGGLE_TODO,
		id: id
	}
}

export const deleteTodo = function(id) {
	return {
		type: types.DELETE_TODO,
		id
	}
}

export const clearCompleted = function() {
	return {
		type: types.CLEAR_COMPLETED
	}
}

export const setVisibilityFliters = function(filter) {
	return {
		type: types.SET_VISIBILITY_FILTER,
		filter
	}
}
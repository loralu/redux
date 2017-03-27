import {
	combineReducers
} from 'redux';



const initialState = {
	title: "todos",
	visibilityFilter: 'SHOW_ALL',
	todos: [{
		text: 'Consider using Redux',
		completed: true,
	}, {
		text: 'Keep all state in a single tree',
		completed: false
	}]
};

//管理todo list列表里的数据
function todos(state = initialState.todos, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state, {
					text: action.text,
					completed: false
				}
			]
		case 'TOGGLE_TODO':
			return state.map(function(value, index) {
				if (action.id === index) {
					return Object.assign({}, value, {
						completed: !value.completed
					})
				}
				return value
			})

		case 'DELETE_TODO':
			return state.filter(function(value, index) {
				return index !== action.id
			})
			return
		case 'CLEAR_COMPLETED':
			return state.filter(function(value, index) {
				return value.completed === false
			})
		default:
			return state

	}
}

//以下函数和上面函数等价，该函数使用了 ES6 参数默认值语法 来精简代码
/*function todoApp(state, action) {
	if (typeof state === 'underfined') {
		return initialState
	}
	return state
}*/

//管理footer里filter的数据
function visibilityFilter(state = 'SHOW_ALL', action) {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
});
export default todoApp
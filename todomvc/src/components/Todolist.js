import React, {
	Component,
	PropTypes
} from 'react'
import Todo from './Todo'

export default class Todolist extends Component {
	render() {
		let that = this;
		return <ul className="todo-list">
			{	
				this.props.visibleTodos.map(function(todo,index){
				return <Todo {...todo}
							 key={index}
							 index={index}
							 toggleTodo={function(){return that.props.toggleTodo(index)}}
							 delTask={function(){return  that.props.delTodo(index)}}
							 ></Todo>
						
			})}
			</ul>
	}
}


Todolist.propTypes = {
	toggleTodo: PropTypes.func.isRequired,
	delTask: PropTypes.func.isRequired,
	visibleTodos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired
}
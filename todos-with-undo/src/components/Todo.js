import React, {
	Component,
	PropTypes
} from 'react'
import classnames from 'classnames'


export default class Todo extends Component {
	render() {
		let that = this;
		return <li  className={classnames({'completed': that.props.completed})}> 
					<div className="view">
						<input className="toggle" type="checkbox" checked={this.props.completed} onClick={this.props.toggleTodo} />
						<label>{this.props.text}</label>
						<button className="destroy" onClick={this.props.delTask}></button>
					</div>
				</li>
	}
}


Todo.propTypes = {
	toggleTodo: PropTypes.func.isRequired,
	delTask: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired
}
import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'

import {
	addTodo
} from '../actions'

class AddTodo extends Component {
	render() {
		let input = "";
		const {
			dispatch
		} = this.props;
		return <header className="header">
					<h1>todos</h1>
					<div className="add-taskItem-box">
						<input  ref={node=>input=node}
								className="new-todo"
								placeholder="What needs to be done?"
						/>
				<button className="add-taskItem" onClick={function(){dispatch(addTodo(input.value))}}>Add</button>
					</div>
				</header>
	}

}
const Header = connect()(AddTodo)
export default Header
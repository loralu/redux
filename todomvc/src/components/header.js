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
	handleSubmit(e) {
		const {
			dispatch
		} = this.props;
		const text = e.target.value.trim(); //removes whitespace from both ends of a string
		if (e.which == 13) { //e.which==13为键盘键为enter键
			e.target.value = "";
			return dispatch(addTodo(text))
		}
	}
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
								onKeyDown={this.handleSubmit.bind(this)}								
						/>
					<button className="add-taskItem" onClick={()=>{dispatch(addTodo(input.value));input.value=""}}>Add</button>
					</div>
				</header>
	}

}
const Header = connect()(AddTodo)
export default Header
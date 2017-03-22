import React, {
	Component,
	PropTypes
} from 'react'
import {
	connect
} from 'react-redux'
import classnames from 'classnames'
import {
	setVisibilityFliters,
	clearCompleted
} from '../actions'

const FILTER_TITLES = {
	'SHOW_ALL': 'All',
	'SHOW_ACTIVE': 'Active',
	'SHOW_COMPLETED': 'Completed'
}

const mapStateToProps = function(state, ownProps) {
	let lefted = state.todos.reduce(function(preValue, value) {
		return value.completed ? preValue : preValue + 1
	}, 0);
	return {
		selectedFilter: state.visibilityFilter,
		lefted: lefted
	}
}

class Footer extends Component {
	render() {
		const {
			dispatch,
			selectedFilter
		} = this.props;
		const Filters = ['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED'];
		return <div className="footer">
						<span className="todo-count">{this.props.lefted} items left</span>
						<ul className="filters">
						{
							Filters.map(function(filter,index){
								return <li key={filter}>
											<a className={classnames({'selected': selectedFilter===filter})} 
											   onClick={function(){return dispatch(setVisibilityFliters(filter))}}
											   >
											   {FILTER_TITLES[filter]}
											</a>
										</li>
							})
						}
						</ul>
						<button className="clear-completed" onClick={function(){return dispatch(clearCompleted())}}>Clear completed</button>
					</div>
	}
}

Footer.propTypes = {
	selectedFilter: PropTypes.string.isRequired,
	lefted: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(Footer)
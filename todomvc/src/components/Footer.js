import React, {
	Component,
	PropTypes
} from 'react'

import classnames from 'classnames'


const FILTER_TITLES = {
	'SHOW_ALL': 'All',
	'SHOW_ACTIVE': 'Active',
	'SHOW_COMPLETED': 'Completed'
}


export default class Footer extends Component {
	render() {
		const {
			selectedFilter,
			lefted,
			setVisibilityFliters,
			clearCompleted
		} = this.props;
		let that = this;
		const Filters = ['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED'];
		return <div className="footer">
						<span className="todo-count">{lefted} items left</span>
						<ul className="filters">
						{
							Filters.map(function(filter,index){
								return <li key={filter}>
											<a className={classnames({'selected': selectedFilter===filter})} 
											   onClick={()=>{setVisibilityFliters(filter)}}
											   >
											   {FILTER_TITLES[filter]}
											</a>
										</li>
							})
						}
						</ul>
						<button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
					</div>
	}
}

Footer.propTypes = {
	selectedFilter: PropTypes.string.isRequired,
	lefted: PropTypes.number.isRequired,
	setVisibilityFliters: PropTypes.func.isRequired,
	clearCompleted: PropTypes.func.isRequired
}
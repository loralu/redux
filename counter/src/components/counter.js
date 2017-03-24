import React, {
	Component,
	PropTypes
} from 'react'

import {
	increment,
	decrement
} from '../actions'


class Counter extends Component {
	IncrmtIfOdd = function() {
		if (this.props.isOdd) {
			return this.props.increment()
		}
	}

	IncrmtAsync = function() {
		setTimeout(this.props.increment(), 5000)
	}

	render() {
		const {
			num,
			isOdd,
			increment,
			decrement
		} = this.props;
		return <div>
					<p>
						Click: {num} times
						{' '}
						<button onClick={increment}>+</button>
						<button onClick={decrement}>-</button>
						<button onClick={this.IncrmtIfOdd.bind(this)}>Increment if odd</button>
						<button onClick={this.IncrmtAsync.bind(this)}>Increment async</button>
					</p>
				</div>
	}

}

Counter.propTypes = {
	num: PropTypes.number.isRequired,
	isOdd: PropTypes.bool.isRequired,
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired
}


export default Counter
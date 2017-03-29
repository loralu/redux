import {
	connect
} from 'react-redux'

import Cart from '../components/cart.js'
import {
	checkOut
} from '../action/index.js'


const mapStateToProps = function(state) {
	let sum = 0;
	state.cart.map(function(value, id) {
		sum += value.price;
	});
	return {
		cartItems: state.cart,
		hasCartItem: state.cart.length > 0,
		total: sum
	}
}

const mapDispatchTpProps = function(dispatch) {
	return {
		checkOut: function() {
			return dispatch(checkOut())
		}
	}
}



export default connect(
	mapStateToProps,
	mapDispatchTpProps
)(Cart)
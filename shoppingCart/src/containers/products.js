import {
	connect
} from 'react-redux'

import Products from '../components/products.js'
import {
	addToCart
} from '../action/index.js'


const mapStateToProps = function(state) {
	return {
		products: state.products

	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		addToCart: function(id) {

			return dispatch(addToCart(id))
		}
	}
}



export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Products)
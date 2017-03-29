import React, {
	Component
} from 'react'

import Product from '../containers/products.js'
import Cart from '../containers/cart.js'


export default class App extends Component {
	render() {
		return <div>
					<Product/>
					<Cart/>
				</div>

	}
}
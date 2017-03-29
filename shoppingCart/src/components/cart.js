import React, {
	Component,
	PropTypes
}
from 'react'



export default class Products extends Component {
	render() {
		const {
			cartItems,
			hasCartItem,
			checkOut,
			total
		} = this.props;
		const cartContent = hasCartItem ? (
			<div>
				{
					cartItems.map(function(value,index){
						return <div key={index}>
									<span>{value.name}</span>
									<span>-</span>
									<span>{value.price}</span>
								</div>
					})
				}
			</div>
		) : (
			<p >Please add some products to cart</p>
		)
		return <div>	
					<hr></hr>
					<h3>Your Cart</h3>
					<div>{cartContent}</div>
					<div>total:${total}</div>					
					<button onClick={checkOut}>Check Out</button>
				</div>
	}
}

Products.propTypes = {
	cartItems: PropTypes.array.isRequired,
	hasCartItem: PropTypes.bool.isRequired,
	checkOut: PropTypes.func.isRequired,
	total: PropTypes.number.isRequired
}
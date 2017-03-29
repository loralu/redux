import React, {
	Component,
	PropTypes
}
from 'react'


export default class Products extends Component {
	render() {
		const {
			products,
			addToCart,
		} = this.props;

		return <div>
					<h2>Shopping Cart </h2>
					<hr></hr>
					<div>
						<h3>Products</h3>
						<div>
							{
								products.map(function(value,index){
								return <div key={index}>
											<span>{value.name}</span>
											<span>-</span>
											<span>${value.price}</span>
											<div>
												<button disabled={value.hasAdded} onClick={()=>{addToCart(index)}}>Add to Cart</button>
											</div>
										</div>
								})
							}
						</div>
					</div>
				</div>
	}
}

Products.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		hasAdded: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	addToCart: PropTypes.func.isRequired
}
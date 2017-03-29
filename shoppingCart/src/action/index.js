export const addToCart = function(id) {
	return {
		type: 'ADDTOCART',
		id
	}
}

export const checkOut = function() {
	return {
		type: 'CHECKOUT'
	}
}
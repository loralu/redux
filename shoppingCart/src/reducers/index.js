import {
	combineReducers
} from 'redux';

const productLists = [{
	name: "iPad 4 Mini",
	price: 500.01,
	hasAdded: false
}, {
	name: "H&M T-Shirt White",
	price: 10.99,
	hasAdded: false
}, {
	name: "Charli XCX - Sucker CD",
	price: 19.99,
	hasAdded: false
}]



function cart(state = [], action) {
	switch (action.type) {
		case 'ADDTOCART':
			return [
				...state, {
					name: productLists[action.id].name,
					price: productLists[action.id].price
				}
			]
		case 'CHECKOUT':
			state = [];
			return state
		default:
			return state
	}
}

function products(state = productLists, action) {
	switch (action.type) {
		case 'ADDTOCART':
			return state.map(function(value, index) {
				if (action.id === index) {
					return Object.assign({}, value, {
						hasAdded: !value.hasAdded
					})
				}
				return value
			})
		case 'CHECKOUT':
			state = productLists;
			return state
		default:
			return state
	}
}

export default combineReducers({
	products,
	cart
})
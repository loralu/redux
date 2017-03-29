import React from 'react'
import {
	createStore
} from 'redux'
import {
	render
} from 'react-dom'
import {
	Provider
} from 'react-redux'

import state from './reducers/index.js'
import App from './components/app.js'


import {
	addToCart,
	checkOut
} from './action/index.js'


const store = createStore(state)

let rootElement = document.getElementById('root')


render(
	<Provider store={store}>
		 <App/>
		</Provider>,
	rootElement

)
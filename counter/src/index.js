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

import number from './reducer/index.js'
import Counter from './containers/number.js'
import {
	increment,
	decrement
} from './actions/index.js'


const store = createStore(number)
let rootElement = document.getElementById('root')


render(
	<Provider store={store}>
		 <Counter/>
		</Provider>,
	rootElement

)
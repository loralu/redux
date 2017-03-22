import React from 'react'
import {
	render
} from 'react-dom'
import {
	createStore
} from 'redux'
import {
	Provider
} from 'react-redux'
import App from './components/App.js'
import todoApp from './reducers/index.js'
import '../css/app.css'
import '../css/base.css'


const store = createStore(todoApp)

let rootElement = document.getElementById('root')


render(
	<Provider store={store}>
		 <App/>
		</Provider>,
	rootElement

)
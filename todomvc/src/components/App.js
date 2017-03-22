import React, {
	Component
} from 'react'

import Header from '../components/header.js'
import VisibleTodoList from '../containers/VisibleTodoList.js'
import Footer from '../components/Footer.js'


export default class App extends Component {
	render() {
		return <div>
		<Header/> 
		< VisibleTodoList / >
		<Footer/>
		</div>

	}
}
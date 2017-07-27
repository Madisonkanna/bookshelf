import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


const App () => {
	return (
		<BrowserRouter>
			<div className="app">
				<Route exact path="/" component={Home} />
				
			</div>
		</BrowserRouter>
				);
}



ReactDOM.render(
	<BrowserRouter><App /></BrowserRouter>,
	document.getElementById('root')

	);
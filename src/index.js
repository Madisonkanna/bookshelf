import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import AddBooks from './AddBooks'
import './index.css'
import { BrowserRouter, Route } from 'react-router-dom'


const BookApp = () => {
	return (
		<BrowserRouter>
			<div className="book-app">
				<Route exact path="/" component={Home} />
				<Route exact path="/add" componet={AddBooks} />
			</div>
		</BrowserRouter>
		)
}

ReactDOM.render(
	<BookApp />,
	document.getElementById("root")

)
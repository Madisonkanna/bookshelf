import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

//Create a searchbar component

//TO DO: Bookshelf component which will contains Book components and map the books I retrieve with the `getAll()`

//  console.log(BooksAPI.search('Make'));
// Above, this is how you search and return your array of objects with 'make' in the subject line :)

class AddBooks extends Component {

	//static propTypes = {
	//	books: PropTypes.array.isRequired
	//}

	state = {
		term: ''
	}

	handleChange = (event) => {
		this.setState({term: event.target.value})
	}

	//searchBook = (term) => {
	//	this.setState(BooksAPI.search);
	//}


	render() {

		return (
			
			//(BooksAPI.search('Make'));
			<div>
					<input 
						value={this.state.term}
						onChange={this.handleChange} />
						Value of input: {this.state.term}




			</div>

			);
	}

}

export default AddBooks


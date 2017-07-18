import React, { Component } from 'react'

//Create a searchbar component
class SearchBar extends Component {
	//Initialize state
	constructor(props) {
		super(props);
		//Current state of search term is an empty string. 
		this.state = { term: '' };
	}

	handleChange = (event) => {
		this.setState({term: event.target.value})
	}

	render() {
		return (
			<div>
			
					<input 
						value={this.state.term}
						onChange={this.handleChange} />
						Value of input: {this.state.term}

			</div>

			);
	}

}

export default SearchBar;

//
import React, { Component } from 'react'

//Create a searchbar

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: ''};
	}


	render() {
		return <input onChange={event => console.log(event.target.value)} />;
	}

	onInputChange(event) { 
		console.log(event);
	}
}

export default SearchBar;

//
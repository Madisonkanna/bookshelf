import React, { Component } from 'react'

//Create a searchbar

class SearchBar extends Component {
	render() {
		return <input onChange={this.onInputChange} />;
	}

	onInputChange() {
		console.log('Change');
	}


}







export default SearchBar;

//
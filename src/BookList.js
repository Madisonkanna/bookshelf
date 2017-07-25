import React from 'react'
import Book from './Book.js'

const BookList = (props) => {
	//Use map iterator
	const bookItems = props.books.map((book) => {
		return <Book key={book.id} book={book} />

	});

	return (
		//list of components is bookItems!
	<ul className="bookshelf">
		{bookItems}

	</ul>

	);


}

export default BookList

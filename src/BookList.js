import React from 'react';

const BookList = (props) => {
	
	return (
	<ul className="bookshelf">
		{props.books.length}

	</ul>

	);


}

export default BookList

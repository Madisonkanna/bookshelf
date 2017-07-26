import React from 'react'

const Book = ({book}) => {
	const imageUrl = book.imageLinks.smallThumbnail;
	const bookTitle = book.title;
	const bookAuthor = book.authors;


	return (
			<div className="bookshelf-books">
				<div className="books-grid">
					<li className="book">
						<div className="book-top">

							<div className="book-shelf-changer">
				                <select onChange>
				                	<option value="none" disabled>Move to...</option>
				                    <option value="currentlyReading">Currently Reading</option>
				                        <option value="wantToRead">Want to Read</option>
				                        <option value="read">Read</option>
				                        <option value="none">None</option>
				                </select>
							</div>	
							
							<img className="book-cover" src={imageUrl} />
							<div className="book-title">{bookTitle}</div>
							<div className="book-authors">{bookAuthor}</div>
						</div>

						<div></div>
					</li>


				</div>
			</div>

		);
};

export default Book;
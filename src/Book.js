import React from "react";

const Book = (props) => {
	const book = props.book,
		//this is a function switchShelf that
		switchShelf = (event) => {
			const updateShelf = event.target.value;
			if (updateShelf !==book.shelf) {
				props.switchShelf(book, updateShelf);
			}
		},
		updateAuthors = () => {
			if (book.authors) {
				return book.authors.map(bookAuthor =>
					<div className="book-authors" key={bookAuthor}>
						{bookAuthor}
					</div>
				);
			}
		};

	return (
		<div className="book">
			<div />
			<div className="book-top">
				<div className="book-shelf-changer">
					<select onChange={switchShelf} value={book.shelf}>
						<option value="none" disabled>
							Move to...
						</option>
						<option value="currentlyReading">
							Currently Reading
						</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
				</div>

				<img
					className="book-cover"
					src={book.imageLinks.smallThumbnail}
				/>
				<div className="book-title">
					{book.title}
				</div>
				<div className="book-authors">
					{updateAuthors()}
				</div>
			</div>
			<div />
		</div>
	);
};

export default Book;

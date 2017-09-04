import React from "react";
import Book from "./Book.js";

const BookList = props => {
    //Use map iterator
    //const bookItems = props.books.map((book) => {
    //  return <Book key={book.id} book={book} />

    //});

    return (
        //list of components is bookItems!
        <div className="bookshelf">
            <h2 className="bookshelf-title">
                {props.bookListName}
            </h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map(book =>
                        <li key={book.id}>
                            <Book book={book} switchShelf={props.switchShelf} />
                        </li>
                    )}
                </ol>
            </div>
        </div>
    );
};

export default BookList;

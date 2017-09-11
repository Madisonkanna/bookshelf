import React from "react";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import sortBy from "sort-by";
import * as BooksAPI from "./BooksAPI";
import BookList from "./BookList";

class Search extends React.Component {
    state = {
        searchResults: [],
        books: []
    };
    isBookShelfed = bookId => {
        return this.state.books.filter(book => book.id === bookId);
    };

    handleChange = searchTerm => {
        if (searchTerm.length) {
            BooksAPI.search(searchTerm, 1).then(searchResults => {
                if (searchResults.length) {
                    this.setState({
                        searchResults: searchResults.map(book => {
                            const isBookShelfed = this.isBookShelfed(book.id);
                            if (isBookShelfed.length) {
                                book.shelf = isBookShelfed[0].shelf;
                            } else {
                                book.shelf = "none";
                            }
                            return book;
                        })
                    });
                } else {
                    this.setState({
                        searchResults: []
                    });
                }
            });
        } else if (this.state.searchResults.length) {
            this.setState({
                searchResults: []
            });
        }
    };

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ books });
        });
    }

    putBookToShelf = (book, updateShelf) => {
        const bookId = book.id;
        BooksAPI.update(book, updateShelf).then(() => {
            this.setState(oldState => {
                return {
                    books: oldState.searchResults.map(book => {
                        if (book.id === bookId) {
                            book.shelf = updateShelf;
                        }
                        return book;
                    })
                };
            });
        });
    };

    render() {
        const handleChangingDebounced = debounce(this.handleChange, 200);
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">
                        Close
                    </Link>a
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            autoFocus
                            placeholder="Search by title or author"
                            onChange={event =>
                                handleChangingDebounced(
                                    event.target.value.trim()
                                )}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookList
                        bookShelfTitle="Search Results"
                        books={this.state.searchResults.sort(sortBy("title"))}
                        changeShelf={this.putBookToShelf}
                    />
                </div>
            </div>
        );
    }
}

export default Search;
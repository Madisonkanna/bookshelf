import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import BookList from "./BookList.js";
import sortBy from "sort-by";
import Book from "./Book.js";
import Search from "./Search.js";

import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    books: []
  }

    switchShelf = (book, updateShelf) => {
        const bookId = book.id;
        BooksAPI.update(book, updateShelf).then(() => {
            this.setState(oldState => {
                return {
                    books: oldState.books.map(book => {
                        if (book.id === bookId) {
                            book.shelf = updateShelf;
                        }
                        return book;
                    })
                };
            });
        });
    };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      //Set the BooksApp state to the array of books
      this.setState({ books });
    });
  }

  //WRite a function that switches my shelf from currently reading to something else--hooks up to my onChange!

  removeBook = book => {
    this.setState(state => ({
      books: book.books.filter(b => b.id !== book.id)
    }));

    BooksAPI.remove(book);
  };

  render() {
    //Create a var that easily replicates this.state.books
    const books = this.state.books;
    console.log(books);

    const wantToRead = this.state.books.filter(
      book => book.shelf === "wantToRead"
    );
    const currentlyReading = this.state.books.filter(
      book => book.shelf === "currentlyReading"
    );
    const read = this.state.books.filter(book => book.shelf === "read");

    return (
      <Route
        exact
        path="/"
        render={() =>
          <div>
            <h1>Madison's bookshelf</h1>
            <BookList
              switchShelf={this.switchShelf}
              bookListName="Currently Reading"
              books={currentlyReading.sort(sortBy("title"))}
            />

            <div className="want-to-read">
              <BookList
                switchShelf={this.switchShelf}
                bookListName="Want To Read"
                books={wantToRead.sort(sortBy("title"))}
              />
            </div>

            <div className="Read">
              <BookList
                switchShelf={this.switchShelf}
                bookListName="Read"
                books={read.sort(sortBy("title"))}
              />
            </div>

            <Link to="/search" className="open-search">
              Add a book
            </Link>
          </div>}
      />
    );
  }
}

export default Home;

import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks.js'
import BookList from './BookList.js'
//import BookshelfChanger from './BookshelfChanger.js'
 

class BooksApp extends Component {
  state = { //use URL in browser's address bar
  //Array of my books to display
   books: [],
    showSearchPage: true

 }
    componentDidMount() {
      BooksAPI.getAll().then((books) => {
        //Set the BooksApp state to the array of books
       this.setState({ books })
      })
    }
    

  render() {
    //Create a var that easily replicates this.state.books
  const books = this.state.books
 console.log(books);

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
              <ListBooks />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>Madison's Bookshelf</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <BookList books={this.state.books} />
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <div className="book">

                        </div>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <div className="book">
                     
                        </div>
                      </li>
                      <li>
                        <div className="book">

                        </div>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <div className="book">
                          

                        </div>
                      </li>
                      <li>
                        <div className="book">
                          
                        </div>
                      </li>
                      <li>
                        <div className="book">
                        </div>

                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>


            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp

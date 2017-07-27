import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import AddBooks from './AddBooks.js'
import BookList from './BookList.js'
import Book from './Book.js'

import { Link } from 'react-router-dom'
 

class BooksApp extends Component {
  state = { //use URL in browser's address bar
  //Array of my books to display
   books: [],


 }
    componentDidMount() {
      BooksAPI.getAll().then((books) => {
        //Set the BooksApp state to the array of books
       this.setState({ books })
      })
    }
    
    removeBook = (book) => {
      this.setState((state) => ({
        books: book.books.filter((b) => b.id !== book.id)
      }))


      BooksAPI.remove(book);
    }




  render() {
    //Create a var that easily replicates this.state.books
  const books = this.state.books
 console.log(books);


    return (


        <Route exact path="/" render={() => (
          <div>
            <h1>Madison's bookshelf</h1>
            <div value={this.state.books} className="currentlyReading"> 
              <h2>Currently reading</h2>

            </div>
          </div>


 



          )}/>



    )
  }
}

export default BooksApp

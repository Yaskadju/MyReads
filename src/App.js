/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'

BooksAPI.getAll();

class BooksApp extends React.Component {
  state = {
    
    books: [],

    showSearchPage: false,
    shelfChange: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  }

  onShelfChange() {
    this.setState( {shelfChange: true })
  }

  render() {

    const { books } = this.state;
    let currentBooks = books.filter( book => book.shelf === "currentlyReading")
    let wantToBooks = books.filter( book => book.shelf === "wantToRead")
    let readBooks = books.filter(book => book.shelf === "read")


    return (
      <div className="app">
       <Route path="/search" render={({ history }) => (
         <div className="search-books">
            <div className="search-books-bar">
                <a className="close-search" onClick={() =>
                  this.setState({ showSearchPage: false })}> Close </a>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author"/>
                </div>
            </div>
            <div className="search-books-results">
                  <ol className="books-grid"></ol>
            </div>
         </div>
          
        )} />
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

              <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <BookList books = { currentBooks }
                    shelfChange = {this.state.shelfChange}
                    notifyShelfChange = {() =>
                    this.onShelfChange() } 
                    />
                    </div>
                  </div>

                  <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <BookList books = { wantToBooks }
                    shelfChange = {this.state.shelfChange}
                    notifyShelfChange = {() =>
                    this.onShelfChange() } />
                    </div>
                  </div>

                  <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <BookList 
                    books = { readBooks }
                    shelfChange = {this.state.shelfChange}
                    notifyShelfChange={() => this.onShelfChange()} />
                  </div>
                </div>
              </div>
            </div>

            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp

import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'

BooksAPI.getAll();

class BooksApp extends React.Component {
  state = {
    
    books: [],

    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  }

  render() {

    let { books } = this.state;
    let currentBooks = books.filter( book => book.shelf === "currentlyReading")
    let wantToBooks = books.filter( book => book.shelf === "wantToRead")
    let readBooks = books.filter(book => book.shelf === "read")


    return (
      <div className="app">
        {this.state.showSearchPage ? (
         
          // End of "if" clause
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

              <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <BookList books = { currentBooks } />
                    </div>
                  </div>

                  <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <BookList books = { wantToBooks } />
                    </div>
                  </div>

                  <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <BookList books = { readBooks } />
                  </div>
                </div>

              </div>
            </div>

            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
        {/* End of "else" clause  */}
      </div>
    )
  }
}

export default BooksApp

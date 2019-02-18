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
    return (
      <div className="app">
        {this.state.showSearchPage ? (
         
          // End of "if" clause
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Reads</h1>
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

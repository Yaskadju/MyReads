import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BookList extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired
    }

render() {


    return (
        <ol className="books-grid">
            {this.props.books.map((book) => (
                <Book book={book} />
            ))}
        </ol>
        )
    }
}

export default BookList
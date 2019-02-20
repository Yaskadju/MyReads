import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BookList extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired
    }

render() {

    const { books } = this.props

    return (
        <ol className="books-grid">
            {books.map((book) => (
                <Book book={book} key={ book.id } />
            ))}
        </ol>
        )
    }
}

export default BookList
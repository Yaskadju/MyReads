import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BookList extends Component {

static propTypes = {
    books: PropTypes.array.isRequired,
    shelfChange: PropTypes.bool.isRequired,
    notifyShelfChange: PropTypes.func.isRequired
}

state = { shelfChange: false }

onShelfChange() {
    this.setState({ shelfChange: true })
    this.props.notifyShelfChange();
}

render() {

    const { books } = this.props

    return (
        <ol className="books-grid">
            {books.map((book) => (
                <Book 
                book={ book } 
                key={ book.id }
                shelfChange={this.state.shelfChange}
                notifyShelfChange={() => this.onShelfChange()} />
            ))}
        </ol>
        )
    }
}

export default BookList

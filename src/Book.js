import React from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger'

class Book extends React.Component {

static propTypes = {
    book: PropTypes.object.isRequired,
    shelfChange: PropTypes.bool.isRequired,
    notifyShelfChange: PropTypes.func.isRequired
}

state = { shelfChange: false }

onShelfChange() {
    console.log(this.props)
    this.setState({ selfChange: true })
    this.props.notifyShelfChange();
}

render() {

    const { book } = this.props;

    return (
        <li>
            <div className="book">

                <div>Did you change ? {this.state.selfChange ? book.shelf : 'no'} </div>

                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` 
            }}>
            </div>
                
                <ShelfChanger 
                    book = {book}
                    shelfChange = {this.state.shelfChange}
                    notifyShelfChange={() => this.onShelfChange()
                    } />

                </div>

                <div className="book-title">{book.title}</div>

                {book.authors.map((author, index) => (
                    <div className="book-authors" key={index} >{author}</div>
                ))}
                
                </div>
            </li>
        )
    }
}

export default Book;
import React from 'react';
import PropTypes from 'prop-types'

class ShelfChanger extends React.Component {

static propTypes = {
    book: PropTypes.object.isRequired
}

state = { shelfChange: this.props.shelfChange }

changeShelf = (event) => {
    this.props.book.shelf = event.target.value
    this.props.notifyShelfChange();
}

render() {

    const { book } = this.props;

    return (
        <div className="book-shelf-changer">
            <select onChange={this.changeShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
        )
    }
}

export default ShelfChanger
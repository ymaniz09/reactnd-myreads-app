import React from "react";

class BookshelfChanger extends React.Component {

  state = {
    shelfSelection: this.props.book.shelf || "none"
  }

  componentWillReceiveProps = () => {
    this.setState({shelfSelection: this.props.book.shelf});
  }

  onChangeShelf = (book, shelf) => {
    this.setState({shelfSelection: shelf});
    this.props.onChangeShelf(book, shelf);
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.state.shelfSelection}
          onChange={(e) => this.onChangeShelf(this.props.book, e.target.value)}>
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

export default BookshelfChanger
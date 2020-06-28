import React from 'react';
import BookShelf from "./BookShelf";
import {Link} from "react-router-dom";

class ListBooks extends React.Component {
  render() {
    const {allBooks, onChangeShelf} = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">

          <BookShelf
            bookshelfTitle='Currently Reading'
            books={allBooks.filter(book => book.shelf === "currentlyReading")}
            onChangeShelf={onChangeShelf}
          />

          <BookShelf
            bookshelfTitle='Want to Read'
            books={allBooks.filter(book => book.shelf === "wantToRead")}
          />

          <BookShelf
            bookshelfTitle='Read'
            books={allBooks.filter(book => book.shelf === "read")}
          />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
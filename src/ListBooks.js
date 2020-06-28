import React from 'react';
import BookShelf from "./BookShelf";
import {Link} from "react-router-dom";

class ListBooks extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">

          <BookShelf
            bookshelfTitle='Currently Reading'
          />

          <BookShelf
            bookshelfTitle='Want to Read'
          />

          <BookShelf
            bookshelfTitle='Read'
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
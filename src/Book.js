import React from "react";
import BookshelfChanger from "./BookshelfChanger";

class Book extends React.Component {
  render() {

    const book = this.props.book

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`
          }}/>
          <BookshelfChanger
            book={book}
            onChangeShelf={this.props.onChangeShelf}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(', ')}</div>
      </div>
    )
  }
}

export default Book
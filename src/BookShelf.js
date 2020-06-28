import React from 'react';
import BookshelfChanger from "./BookshelfChanger";
import Book from "./Book";

class BookShelf extends React.Component {
  render() {
    const {bookshelfTitle, books} = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                />
              </li>
            ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
import React from 'react';
import BookshelfChanger from "./BookshelfChanger";

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
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}/>
                    <BookshelfChanger/>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors.join(', ')}</div>
                </div>
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
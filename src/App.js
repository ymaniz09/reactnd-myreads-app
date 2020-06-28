import React from 'react'
import './App.css'
import {Route} from "react-router-dom";
import ListBooks from "./ListBooks";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(allBooks => {
        console.log(allBooks)
        this.setState({
          books: allBooks
        })
      })
  }

  handleChangeShelf = (book, shelf) => {
    console.log('on handle shelf change')
  };
  
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            allBooks={this.state.books}
            onChangeShelf={this.handleChangeShelf}
          />
        )}/>

        <Route path='/search' render={() => (
          <Search>

          </Search>
        )}/>
      </div>
    )
  }
}

export default BooksApp

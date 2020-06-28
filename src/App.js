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
  
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks>

          </ListBooks>
        )}/>

        <Route path='/search' render={({}) => (
          <Search>

          </Search>
        )}/>
      </div>
    )
  }
}

export default BooksApp

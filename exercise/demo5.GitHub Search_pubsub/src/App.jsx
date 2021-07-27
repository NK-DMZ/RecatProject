import React, { Component } from 'react'
import Search from './components/search/index'
import List from './components/list/index'

export default class App extends Component {

  render() {
    return (
      <div>
        <Search></Search>
        <List></List>
      </div>
    )
  }
}


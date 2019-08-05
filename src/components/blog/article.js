import React, { Component } from 'react'
import Header from './header'

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='article'>
        <Header />
        <h2>title</h2>
        <p>author</p>
        <p>date</p>
        <p>content</p>
      </div>
    )
  }
}

export default Article
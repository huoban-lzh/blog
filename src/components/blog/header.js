import React, { Component } from 'react'

import Nav from './nav'
import UserInfo from './userInfo'

class Header extends Component {

  render() {
    const { onCategoryChange, category } = this.props

    return (
      <div className='header'>
        <Nav onCategoryChange={onCategoryChange} category={category} />
        <UserInfo />
      </div>
    )
  }
}

export default Header
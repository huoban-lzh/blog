import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Nav from './nav'
import UserInfo from './userInfo'

class Header extends Component {

  static propTypes = {
    category: PropTypes.string.isRequired
  }

  static defaultProps = {
    category: ''
  }

  render() {
    const { category } = this.props

    return (
      <div className='header'>
        <Nav category={category} />
        <UserInfo />
      </div>
    )
  }
}

export default Header

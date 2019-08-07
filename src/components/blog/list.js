import React, { Component } from 'react'
import _ from 'lodash'
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'

import Item from './item'

class List extends Component {
  static propTypes = {
    messages: PropTypes.array,
    category: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired
  }

  static defaultProps = {
    category: '',
    page: '1'
  }

  getItem = () => {
    const { messages, category, page } = this.props
    let res = []

    _.forEach(messages, (message, index) => {
      res.push(
        <Item key={message.id} message={message} index={index} category={category} page={page} />
      )
    })
    return res
  }

  toAdd = () => {
    const username = localStorage.getItem('username')

    if (username) {
      browserHistory.push('/blog/add')
    } else {
      browserHistory.push('/user/login')
    }
  }

  render() {
    return (
      <div className='list'>
        <input type='button' value='添加' onClick={this.toAdd} />
        {this.getItem()}
      </div>
    )
  }
}

export default List

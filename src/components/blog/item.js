import React, { Component } from 'react'
import _ from 'lodash'
import moment from 'moment'
import { browserHistory } from 'react-router'
import CATEGORIES from '../../util/constants'
import PropTypes from 'prop-types'

class Item extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired
  }

  static defaultProps = {
    message: {},
    category: '',
    page: '1'
  }

  toArticle = (e) => {
    let data = {
      category: this.props.category,
      page: this.props.page,
      index: this.props.index
    }
    let path = {
      pathname: '/blog/article',
      query: data
    }

    browserHistory.push(path)
  }

  render() {
    const { message, index } = this.props
    const date = moment.unix(message.created_on).format('YYYY年MM月DD日 HH:mm')
    let intro = _.truncate(message.content, {
      'length': 23
    })
    let category = _.find(CATEGORIES, { id: message.category })

    return (
      <div className='item' onClick={this.toArticle}>
        <h4>{index + 1}.{message.title}({category.name})</h4>
        <p>创建人：{message.user.username}</p>
        <p>创建时间：{date}</p>
        <p>简介：{intro}</p>
      </div>
    )
  }
}

export default Item

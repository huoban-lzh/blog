import React, { Component } from 'react'
import Header from './header'
import _ from 'lodash'
import moment from 'moment'
import { browserHistory } from 'react-router'
import Func from '../../util/func'
import CATEGORIES from '../../util/constants'

import BlogActions from '../../actions/blog'

import loading from '../../images/loading.gif'

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: {},
      isLoading: true
    }
  }

  componentDidMount() {
    let query = Func.getQuery()
    let params = {
      category: query.category,
      page: query.page,
      perPage: 6
    }

    BlogActions.getMessages(params).then((resp) => {
      this.setState({ message: resp.messages[query.index] })
    }).finally(() => {
      this.setState({ isLoading: false })
    })
  }

  toIndex = () => {
    browserHistory.push('/')
  }

  render() {
    const { message, isLoading } = this.state
    const date = moment.unix(message.created_on).format('YYYY年MM月DD日 HH:mm')
    let category = _.find(CATEGORIES, { id: message.category })

    if (isLoading) {
      return (
        <img src={loading} alt='' />
      )
    } else {
      return (
        <div>
          <Header />
          <div className='article'>
            <h2>{message.title}({category.name})</h2>
            <p>创建人：{message.user.username}</p>
            <p>创建时间：{date}</p><br />
            <p>正文：{message.content}</p>
            <input type='button' value='返回' onClick={this.toIndex} />
          </div>
        </div>
      )
    }
  }
}

export default Article

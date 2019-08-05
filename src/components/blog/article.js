import React, { Component } from 'react'
import Header from './header'
import _ from 'lodash'
import moment from 'moment'
import { browserHistory } from 'react-router'

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

  getQuery = () => {
    let url = location.search
    let val = ''
    let vals = []
    let theRequest = {}

    if (url.indexOf('?') !== -1) {
      val = url.substr(1)
      vals = _.split(val, '&')
      for (let i = 0; i < vals.length; i++) {
        theRequest[vals[i].split('=')[0]] = decodeURI(vals[i].split('=')[1]);
      }
    }

    return theRequest
  }

  componentDidMount() {
    let query = this.getQuery()
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
    let category = ''

    if (message.category === 'sort1') {
      category = '分类1'
    } else if (message.category === 'sort2') {
      category = '分类2'
    } else if (message.category === 'sort3') {
      category = '分类3'
    }

    if (isLoading) {
      return (
        <img src={loading} alt='' />
      )
    } else {
      return (
        <div>
          <Header />
          <div className='article'>
            <h2>{message.title}({category})</h2>
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

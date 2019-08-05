import React, { Component } from 'react'
import _ from 'lodash'

import Header from './header'
import List from './list'
import Pager from './pager'
import loading from '../../images/loading.gif'

import BlogActions from '../../actions/blog'
import BlogStore from '../../stores/blog'

const PER_PAGE = 6

class Index extends Component {
  constructor(props) {
    super(props)
    let data = BlogStore.get()
    this.state = {
      username: localStorage.getItem('username'),
      messages: data.messages,
      total: data.total,
      category: '',
      page: 1,
      pageNum: 1,
      isLoading: true
    }

    BlogStore.listen(this.handleMessageChange)
  }

  handleMessageChange = (data) => {
    const { messages, total } = data
    let pageNum = _.ceil(total / PER_PAGE)

    this.setState({ messages, pageNum })
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
        theRequest[vals[i].split("=")[0]] = decodeURI(vals[i].split("=")[1]);
      }
    }

    return theRequest
  }

  componentDidMount() {
    this.handleRequest()
  }

  handleRequest = () => {
    const { category, page } = this.getQuery()
    const params = { category, page, perPage: PER_PAGE }

    BlogActions.getMessages(params).then((resp) => {

    }).finally(() => {
      this.setState({ isLoading: false })
    })
  }

  handleCategoryChange = () => {
    this.setState({ category: this.getQuery().category }, this.handleRequest())
  }

  handlePageChange = () => {
    this.setState({ page: this.getQuery().page }, this.handleRequest())
  }

  render() {
    const { messages, isLoading, pageNum, category, page } = this.state

    if (isLoading) {
      return (
        <div>
          <img src={loading} alt="loading" />
        </div>
      )
    } else {
      return (
        <div>
          <Header category={category} getQuery={this.getQuery} onCategoryChange={this.handleCategoryChange} />
          <List messages={messages} />
          <Pager pageNum={pageNum} page={page} getQuery={this.getQuery} onPageChange={this.handlePageChange} />
        </div>
      )
    }
  }
}

export default Index

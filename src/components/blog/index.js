import React, { Component } from 'react'
import _ from 'lodash'
import Func from '../../util/func'

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
      page: '1',
      pageNum: 1,
      isLoading: true
    }

    this.unsubscribe = BlogStore.listen(this.handleMessageChange)
  }

  handleMessageChange = (data) => {
    const { messages, total } = data
    let pageNum = _.ceil(total / PER_PAGE)

    this.setState({ messages, pageNum })
  }

  componentDidMount() {
    this.handleRequest()
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  componentWillReceiveProps() {
    this.handleRequest()
  }

  handleRequest = () => {
    const { category, page } = Func.getQuery()
    const params = { category, page, perPage: PER_PAGE }

    if (page) {
      this.setState({ isLoading: true, category, page })
    } else {
      this.setState({ isLoading: true, category })
    }
    BlogActions.getMessages(params).finally(() => {
      this.setState({ isLoading: false })
    })
  }

  render() {
    const { messages, isLoading, pageNum, category, page } = this.state

    if (isLoading) {
      return (
        <div>
          <img src={loading} alt='loading' />
        </div>
      )
    } else {
      return (
        <div>
          <Header category={category} />
          <List messages={messages} category={category} page={page} />
          <Pager pageNum={pageNum} page={page} />
        </div>
      )
    }
  }
}

export default Index

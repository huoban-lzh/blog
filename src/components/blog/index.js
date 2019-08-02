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
    this.state = {
      username: localStorage.getItem('username'),
      messages: [],
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

  componentDidMount() {
    const { category, page } = this.state
    const params = { category, page, perPage: PER_PAGE }

    BlogActions.getMessages(params).then((resp) => {
      this.setState({ messages: resp.messages, isLoading: false })
    })
  }

  render() {
    const { messages, isLoading } = this.state

    if (isLoading) {
      return (
        <div>
          <img src={loading} alt="loading" />
        </div>
      )
    } else {
      return (
        <div>
          <Header />
          <List messages={messages} />
          <Pager />
        </div>
      )
    }
  }
}

export default Index

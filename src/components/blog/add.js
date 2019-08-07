import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import Header from './header'

import BlogActions from '../../actions/blog'

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      category: 'sort1',
      content: '',
      userId: ''
    }

    if (!localStorage.getItem('user_id')) {
      browserHistory.push('/')
    }
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value })
  }

  handleContentChange = (e) => {
    this.setState({ content: e.target.value })
  }

  handleSubmit = () => {
    const { title, content, category } = this.state
    const params = { title, content, category }

    if (title === '' || content === '') {
      alert('标题和内容不能为空')
      return
    }
    BlogActions.addMessage(params).then(() => {
      browserHistory.push('/')
    })

  }

  toIndex = () => {
    browserHistory.push('/')
  }

  render() {
    const { title, category, content } = this.state

    return (
      <div>
        <Header />
        <div className='inputBoard'>
          <h2>添加</h2>
          <div>
            <p>标题：</p>
            <input type='text' value={title} onChange={this.handleTitleChange} />
          </div>
          <div>
            <p>分类：</p>
            <select value={category} onChange={this.handleCategoryChange}>
              <option value='sort1'>分类1</option>
              <option value='sort2'>分类2</option>
              <option value='sort3'>分类3</option>
            </select>
          </div>
          <div>
            <p>内容：</p>
            <textarea cols='30' rows='10' value={content} onChange={this.handleContentChange} />
          </div>
          <div>
            <input type='button' value='提交' onClick={this.handleSubmit} />
            <input type='button' value='返回' onClick={this.toIndex} />
          </div>
        </div>
      </div>
    )
  }
}

export default Add

import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: localStorage.getItem('username')
    }
  }

  toLogin = () => {
    browserHistory.push('/user/login')
  }

  toRegister = () => {
    browserHistory.push('/user/register')
  }

  handleExit = () => {
    localStorage.removeItem('username')
    localStorage.removeItem('user_id')
    this.setState({ username: localStorage.getItem('username') })
  }

  render() {
    const { username } = this.state

    if (!username) {
      return (
        <div className='userInfo'>
          <input type='button' value='登录' onClick={this.toLogin} />
          <input type='button' value='注册' onClick={this.toRegister} />
        </div>
      )
    } else {
      return (
        <div className='userInfo'>
          <p>用户名：{username}</p>
          <input type='button' value='退出' onClick={this.handleExit} />
        </div>
      )
    }
  }
}

export default UserInfo

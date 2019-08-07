import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import loading from '../../images/loading.gif'
import Func from '../../util/func'

import UserActions from '../../actions/user'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '15701039130',
      password: '1',
      isSubmitting: false
    }
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value })
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  checkUserInfo = () => {
    const { username, password } = this.state

    if (username === '') {
      alert('请输入用户名！')
      return false
    }
    if (!Func.isMobile(username) && !Func.isEmail(username)) {
      alert('用户名必须为伙伴邮箱或者手机号！')
      return false
    }
    if (password === '') {
      alert('请输入密码！')
      return false
    }
    return true
  }

  handleLogin = () => {
    const { username, password } = this.state
    const params = { username, password }

    if (this.checkUserInfo()) {
      this.setState({ isSubmitting: true })
      UserActions.login(params).then((resp) => {
        localStorage.setItem('username', resp.username)
        localStorage.setItem('user_id', resp.user_id)
        browserHistory.push('/')
      }).catch((err) => {
        this.setState({ username: '', password: '', isSubmitting: false })
        alert(err.error)
      })
    }
  }

  getButton = () => {
    const { isSubmitting } = this.state

    if (isSubmitting) {
      return (
        <div className='button'>
          <img src={loading} alt='loading...' />
        </div>
      )
    } else {
      return (
        <div className='button'>
          <input type='button' value='登录' onClick={this.handleLogin} />
          <Link to='/user/register'>立即注册</Link>
        </div>
      )
    }
  }

  render() {
    const { username, password } = this.state

    return (
      <div className='inputBoard'>
        <h2>登录</h2>
        <div>
          <p>用户名：</p><input type='text' value={username} onChange={this.handleUsernameChange} />
        </div>
        <div>
          <p>密码：</p><input type='password' value={password} onChange={this.handlePasswordChange} />
        </div>
        {this.getButton()}
      </div>
    )
  }
}

export default Login

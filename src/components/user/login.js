import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import loading from '../../images/loading.gif'

import UserActions from '../../actions/userActions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '15701039130',
      password: '1',
      isSubmit: false
    }
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value})
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  checkUserInfo = (username, password) => {
    const mobile = /^1[3456789]\d{9}$/
    const email = /^[a-zA-Z0-9_-]@(huoban)(\.com)$/
    const mobileReg = new RegExp(mobile)
    const emailReg = new RegExp(email)

    if (username === '') {
      alert('请输入用户名！')
    } else if (!mobileReg.test(username) && !emailReg.test(username)) {
      alert('用户名必须为伙伴邮箱或者手机号！')
    } else if (password === '') {
      alert('请输入密码！')
    } else {
      this.setState({isSubmit: true})
    }
  }

  handleLogin = () => {
    const {username, password} = this.state
    const params = {username, password}

    this.checkUserInfo(username, password)
    UserActions.login(params).then((resp) => {
      browserHistory.push('/')
    }).catch((err) => {
      this.setState({username: '', password: '', isSubmit: false})
      alert(err.error)
    })
  }

  setButton = () => {
    const {isSubmit} = this.state

    if (isSubmit) {
      return (
        <div className='button'>
          <img src={loading} alt="loading..."/>
        </div>
      )
    } else {
      return (
        <div className='button'>
          <input type="button" value='登录' onClick={this.handleLogin} />
          <Link to='/user/register'><input type="button" value='立即注册' /></Link>
        </div>
      )
    }
  }

  render() {
    const {username, password} = this.state

    return (
      <div className='user'>
        <h2>登录</h2>
        <div>
          <p>用户名：</p><input type="text" value={username} onChange={this.handleUsernameChange} />
        </div>
        <div>
          <p>密码：</p><input type="password"  value={password} onChange={this.handlePasswordChange} />
        </div>
        {this.setButton()}
      </div>
    )
  }
}

export default Login

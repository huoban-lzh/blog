import React, { Component } from 'react'
import { Link } from 'react-router'

import UserActions from '../../actions/userActions'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value})
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleConfirmPasswordChange = (e) => {
    this.setState({confirmPassword: e.target.value})
  }

  checkUserInfo = (username, password, confirmPassword) => {
    if (username === '') {
      alert('用户名不能为空！')
    } else if(password === '') {
      alert('密码不能为空！')
    } else if(password !== confirmPassword) {
      alert('两次输入密码不一致！')
    }
  }

  checkUserInfo = (username, password, confirmPassword) => {
    let mobile = /^1[3456789]\d{9}$/
    let email = /^[a-zA-Z0-9_-]@(huoban)(\.com)$/
    let mobileReg = new RegExp(mobile)
    let emailReg = new RegExp(email)
    if(username === '') {
      alert('请输入用户名！')
    } else if(!mobileReg.test(username) && !emailReg.test(username)) {
      alert('用户名必须为伙伴邮箱或者手机号！')
    } else if(password === '') {
      alert('请输入密码！')
    } else if(password !== confirmPassword) {
      alert('两次输入密码不一致！')
    }
  }

  handleRegister = () => {
    const {username, password, confirmPassword} = this.state
    // let params = {}

    this.checkUserInfo(username, password, confirmPassword)
    // UserActions.register(params)
  }

  render() {
    const {username, password, confirmPassword} = this.state

    return (
      <div>
        <h3>注册</h3>
        <p>用户名：</p>
        <input type="text" value={username} onChange={this.handleUsernameChange} />
        <p>密码：</p>
        <input type="password" value={password} onChange={this.handlePasswordChange} />
        <p>确认密码：</p>
        <input type="password" value={confirmPassword} onChange={this.handleConfirmPasswordChange} />
        <input type="button" value='注册' onClick={this.handleRegister} />
        <Link to='/user/login'><input type="button" value='立即登录' /></Link>
      </div>
    )
  }
}

export default Register

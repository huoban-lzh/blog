import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        <h3>登录</h3>
        <p>用户名：</p><input type="text" />
        <p>密码：</p><input type="password" />
        <input type="button" value='登录' />
        <input type="button" value='立即注册' />
      </div>
    )
  }
}

export default Login

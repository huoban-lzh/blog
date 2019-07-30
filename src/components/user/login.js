import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value})
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleLogin = () => {
    const {username, password} = this.state
    console.log({username, password})
  }

  render() {
    const {username, password} = this.state
    return (
      <div>
        <h3>登录</h3>
        <p>用户名：</p><input type="text" value={username} onChange={this.handleUsernameChange} />
        <p>密码：</p><input type="password"  value={password} onChange={this.handlePasswordChange} />
        <input type="button" value='登录' onClick={this.handleLogin} />
        <input type="button" value='立即注册' />
      </div>
    )
  }
}

export default Login

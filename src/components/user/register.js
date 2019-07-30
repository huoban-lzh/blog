import React, { Component } from 'react'

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

  handleRegister = () => {
    const {username, password, confirmPassword} = this.state
    console.log({username, password, confirmPassword})
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
        <input type="button" value='立即登录' />
      </div>
    )
  }
}

export default Register

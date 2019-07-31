import React, { Component } from 'react'
import { Link } from 'react-router'

// import UserActions from '../../actions/userActions'

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

  checkUserInfo = (username, password) => {
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
    }
  }

  handleLogin = () => {
    const {username, password} = this.state
    // let params = {}

    this.checkUserInfo(username, password)
    // UserActions.login(params)
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
        <div className='button'>
          <input type="button" value='登录' onClick={this.handleLogin} />
          <Link to='/user/register'><input type="button" value='立即注册' /></Link>
        </div>
      </div>
    )
  }
}

export default Login

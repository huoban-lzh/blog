import React, { Component } from 'react'
import { Link } from 'react-router'
import loading from '../../images/loading.gif'

import UserActions from '../../actions/userActions'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '15701039130',
      password: '1',
      password2: '1',
      isSubmit: false
    }
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value})
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  handlepassword2Change = (e) => {
    this.setState({password2: e.target.value})
  }

  checkUserInfo = (username, password, password2) => {
    if (username === '') {
      alert('用户名不能为空！')
    } else if(password === '') {
      alert('密码不能为空！')
    } else if(password !== password2) {
      alert('两次输入密码不一致！')
    }
  }

  checkUserInfo = (username, password, password2) => {
    let mobile = /^1[3456789]\d{9}$/
    let email = /^[a-zA-Z0-9_-]@(huoban)(\.com)$/
    let mobileReg = new RegExp(mobile)
    let emailReg = new RegExp(email)

    if (username === '') {
      alert('请输入用户名！')
    } else if (!mobileReg.test(username) && !emailReg.test(username)) {
      alert('用户名必须为伙伴邮箱或者手机号！')
    } else if (password === '') {
      alert('请输入密码！')
    } else if (password !== password2) {
      alert('两次输入密码不一致！')
    } else {
      this.setState({isSubmit: true})
    }
  }

  handleRegister = () => {
    const {username, password, password2} = this.state
    let params = {username, password, password2}

    this.checkUserInfo(username, password, password2)
    UserActions.register(params).then((resp) => {
      alert('用户 ' + username + ' 注册成功')
    }).catch((err) => {
      alert(err.error)
    }).finally(() => {
      this.setState({username: '', password: '', password2: '', isSubmit: false})
    })
  }

  setButton = () => {
    const {isSubmit} = this.state

    if (isSubmit) {
      return (
        <div className='button'>
          <img src={loading} alt='loading...' />
        </div>
      )
    } else {
      return (
        <div className='button'>
          <input type="button" value='注册' onClick={this.handleRegister} />
          <Link to='/user/login'><input type="button" value='立即登录' /></Link>
        </div>
      )
    }
  }

  render() {
    const {username, password, password2} = this.state

    return (
      <div className='user'>
        <h2>注册</h2>
        <div>
          <p>用户名：</p>
          <input type="text" value={username} onChange={this.handleUsernameChange} />
        </div>
        <div>
          <p>密码：</p>
          <input type="password" value={password} onChange={this.handlePasswordChange} />
        </div>
        <div>
          <p>确认密码：</p>
          <input type="password" value={password2} onChange={this.handlepassword2Change} />
        </div>
        {this.setButton()}
      </div>
    )
  }
}

export default Register

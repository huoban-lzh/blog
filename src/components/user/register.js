import React, { Components } from 'react'

class Register extends Components {
  render() {
    return (
      <div>
        <h3>注册</h3>
        <p>用户名：</p>
        <input type="text" />
        <p></p>
        <input type="text" />
        <p></p>
        <input type="password"/>
        <input type="button"/>
        <input type="button"/>
      </div>
    )
  }
}

export default Register

import request from 'superagent'

const loginApi = (params) => {
  return new Promise((resolve, reject) => {
    request.post('http://devteam.huoban.com/testapi/user_login.php').send(params).end((err, resp) => {
      if(!err) {
        resolve(JSON.parse(resp.text))
      } else {
        reject(JSON.parse(resp.text))
      }
    })
  })
}

const registerApi = (params) => {
  return new Promise((resolve, reject) => {
    request.post('http://devteam.huoban.com/testapi/user_reg.php').send(params).end((err, resp) => {
      if(!err) {
        resolve(JSON.parse(resp.text))
      } else {
        reject(JSON.parse(resp.text))
      }
    })
  })
}

export default {loginApi, registerApi}

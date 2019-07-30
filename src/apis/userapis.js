import request from 'superagent'

const loginApi = (params) => {
  return new Promise((resolve, reject) => {
    request.get('').query(params).end((err, resp) => {
      if(!err) {
        resolve(resp)
      } else {
        reject(err)
      }
    })
  })
}

const registerApi = (params) => {
  return new Promise((resolve, reject) => {
    request.post('').send(params).end((err, resp) => {
      if(!err) {
        resolve(resp)
      } else {
        reject(err)
      }
    })
  })
}

export default {loginApi, registerApi}

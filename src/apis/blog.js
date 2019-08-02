import request from 'superagent'

const getMessagesApi = (params) => {
  return new Promise((resolve, reject) => {
    request.get('http://devteam.huoban.com/testapi/list.php').query(params).end((err, resp) => {
      if (!err) {
        resolve(JSON.parse(resp.text))
      } else {
        reject(JSON.parse(resp.text))
      }
    })
  })
}

const addMessageApi = (params) => {
  return new Promise((resolve, reject) => {
    request.post('http://devteam.huoban.com/testapi/add.php').set('Authorization', 'Bearer ' + params.user_id).send({ title: params.title, content: params.content, category: params.category }).end((err) => {
      if (!err) {
        resolve()
      } else {
        reject()
      }
    })
  })
}

export default { getMessagesApi, addMessageApi }

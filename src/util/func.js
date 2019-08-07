import _ from 'lodash'

const getQuery = () => {
  let url = location.search
  let val = ''
  let vals = []
  let theRequest = {}

  if (url.indexOf('?') !== -1) {
    val = url.substr(1)
    vals = _.split(val, '&')
    for (let i = 0; i < vals.length; i++) {
      let queryItem = vals[i].split('=')
      theRequest[queryItem[0]] = decodeURI(queryItem[1]);
    }
  }

  return theRequest
}

const isMobile = (str) => {
  const mobile = /^1[3456789]\d{9}$/
  let mobileReg = new RegExp(mobile)

  return mobileReg.test(str)
}

const isEmail = (str) => {
  const email = /^[a-zA-Z0-9_-]+@huoban\.com$/
  let emailReg = new RegExp(email)

  return emailReg.test(str)
}

export default { getQuery, isMobile, isEmail }

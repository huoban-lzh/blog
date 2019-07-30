import Reflux from 'reflux'
import RefluxPromise from 'reflux-promise'
import bluebird from 'bluebird'
import Api from '../apis/userApis'

Reflux.use(RefluxPromise(bluebird))

const UserActions = Reflux.createActions({
  'login': {
    asyncResult: true
  },
  'register': {
    asyncResult: true
  }
})

UserActions.login.listenAndPromise(Api.loginApi)
UserActions.register(Api.registerApi)

export default UserActions

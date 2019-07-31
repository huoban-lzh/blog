import Reflux from 'reflux'
import RefluxPromise from 'reflux-promise'
import bluebird from 'bluebird'
import Api from '../apis/user'

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
UserActions.register.listenAndPromise(Api.registerApi)

export default UserActions

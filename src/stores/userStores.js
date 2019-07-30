import Reflux from 'reflux'
import UserActions from '../actions/userActions'
import { deflate } from 'zlib';

const userStore = Reflux.createStore({

  listenables: UserActions,
  init: function() {
    this.username = ''
  },

  get() {
    return this.username
  },

  onLoginCompleted(resp) {

  },

  onLoginFailed(err) {

  },

  onRegisterCompleted(resp) {

  },

  onRegisterFailed(err) {

  }

})

export default userStore

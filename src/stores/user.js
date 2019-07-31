import Reflux from 'reflux'
import UserActions from '../actions/user'

const userStore = Reflux.createStore({

  listenables: UserActions,
  init: function () {
    this.data = {
      username: '',
      user_id: ''
    }
  },

  get() {
    return this.data
  },

  onLoginCompleted(resp) {
    this.data.username = resp.username
    this.data.user_id = resp.user_id
    // this.trigger(this.data)
  },

  onLoginFailed(err) {

  },

})

export default userStore

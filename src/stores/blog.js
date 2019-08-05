import Reflux from 'reflux'
import BlogActions from '../actions/blog'

const BlogStore = Reflux.createStore({

  listenables: BlogActions,
  init: function () {
    this.data = {
      messages: [],
      total: 0,
    }
  },

  get() {
    return this.data
  },

  onGetMessagesCompleted(resp) {
    this.data = resp
    this.trigger(this.data)
  },

})

export default BlogStore

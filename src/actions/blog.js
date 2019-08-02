import Reflux from 'reflux'
import RefluxPromise from 'reflux-promise'
import bluebird from 'bluebird'
import Api from '../apis/blog'

Reflux.use(RefluxPromise(bluebird))

const BlogActions = Reflux.createActions({
  'getMessages': {
    asyncResult: true
  },
  'addMessage': {
    asyncResult: true
  }
})

BlogActions.getMessages.listenAndPromise(Api.getMessagesApi)
BlogActions.addMessage.listenAndPromise(Api.addMessageApi)

export default BlogActions

import './index.css'
import './App.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Index from './pages/index'
import Add from './pages/add'
import Login from './pages/login'
import Register from './pages/register'
import Article from './pages/article'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' components={Index} />
    <Route path='/blog/add' components={Add} />
    <Route path='/user/login' components={Login} />
    <Route path='/user/register' components={Register} />
    <Route path='/blog/article' components={Article} />
  </Router>,
  document.getElementById('root')
)


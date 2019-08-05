import React, { Component } from 'react'
import _ from 'lodash'
import { browserHistory } from 'react-router'

class Nav extends Component {

  onChooseCategory = (sort) => {
    const data = { category: sort, page: 1 }
    const path = {
      pathname: '/',
      query: data
    }

    browserHistory.push(path)
    this.props.onCategoryChange()
  }

  render() {
    return (
      <div className='nav'>
        <input type="button" value='首页' onClick={_.partial(this.onChooseCategory, '')} />
        <input type="button" value='分类1' onClick={_.partial(this.onChooseCategory, 'sort1')} />
        <input type="button" value='分类2' onClick={_.partial(this.onChooseCategory, 'sort2')} />
        <input type="button" value='分类3' onClick={_.partial(this.onChooseCategory, 'sort3')} />
      </div>
    )
  }
}

export default Nav

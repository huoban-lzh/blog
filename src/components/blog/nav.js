import React, { Component } from 'react'
import _ from 'lodash'
import { browserHistory } from 'react-router'
import CATEGORIES from '../../util/constants'
import PropTypes from 'prop-types'

class Nav extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired
  }

  static defaultProps = {
    category: ''
  }

  onChooseCategory = (sort) => {
    const data = { category: sort, page: 1 }
    const path = {
      pathname: '/',
      query: data
    }

    browserHistory.push(path)
  }

  getNav = () => {
    const { category } = this.props
    let res = []

    res.push(<input key={0} type='button' className={category === '' ? 'current' : ''} value='首页' onClick={_.partial(this.onChooseCategory, '')} />)

    _.forEach(CATEGORIES, (CATEGORY, index) => {
      let className = ''
      if (CATEGORY.id === category) {
        className = 'current'
      }
      res.push(<input key={CATEGORY.id} type='button' className={className} value={CATEGORY.name} onClick={_.partial(this.onChooseCategory, CATEGORY.id)} />)
    })

    return res
  }

  render() {
    return (
      <div className='nav'>
        {this.getNav()}
      </div>
    )
  }
}

export default Nav

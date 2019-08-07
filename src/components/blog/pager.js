import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import _ from 'lodash'
import Func from '../../util/func'
import PropTypes from 'prop-types'

class Pager extends Component {
  static propTypes = {
    pageNum: PropTypes.number.isRequired,
    page: PropTypes.string.isRequired
  }

  static defaultProps = {
    pageNum: 1,
    page: '1'
  }

  handlePageChange = (e) => {
    let data = Func.getQuery()
    data.page = e.target.value
    const path = {
      pathname: '/',
      query: data
    }

    browserHistory.push(path)
  }

  render() {
    const { pageNum, page } = this.props
    let res = []
    let className = ''

    for (let i = 1; i <= pageNum; i++) {
      if (i === _.parseInt(page)) {
        className = 'current'
      } else {
        className = ''
      }
      res.push(
        <input key={i} className={className} type='button' value={i} onClick={this.handlePageChange} />
      )
    }

    return (
      <div className='pager'>
        {res}
      </div>
    )
  }
}

export default Pager

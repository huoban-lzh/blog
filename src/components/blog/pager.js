import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import _ from 'lodash'

class Pager extends Component {

  onChangePage = (e) => {
    let data = this.props.getQuery()
    data.page = e.target.value
    const path = {
      pathname: '/',
      query: data
    }

    browserHistory.push(path)
    this.props.onPageChange()
  }

  render() {
    const { pageNum } = this.props
    let res = []
    let className = ''

    for (let i = 1; i <= pageNum; i++) {
      if (i === _.parseInt(this.props.page, 10)) {
        className = 'current'
      } else {
        className = ''
      }
      res.push(
        <input key={i} className={className} type='button' value={i} onClick={this.onChangePage} />
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

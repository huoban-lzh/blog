import React, { Component } from 'react'
import _ from 'lodash'
import moment from 'moment'
import { browserHistory } from 'react-router'

class Item extends Component {

  toDetail = () => {
    browserHistory.push('/blog/article')
  }

  render() {
    const { message, index } = this.props
    // const create_time = message.created_on
    const date = moment.unix(message.created_on).format('YYYY年MM月DD日 HH:mm')
    let category = ''
    let intro = _.truncate(message.content, {
      'length': 23
    })

    if (message.category === 'sort1') {
      category = '分类1'
    } else if (message.category === 'sort2') {
      category = '分类2'
    } else if (message.category === 'sort3') {
      category = '分类3'
    }

    return (
      <div className='item' onClick={this.toDetail}>
        <h4>{index + 1}.{message.title}({category})</h4>
        <p>创建人：{message.user.username}</p>
        <p>创建时间：{date}</p>
        <p>简介：{intro}</p>
      </div>
    )
  }
}

export default Item

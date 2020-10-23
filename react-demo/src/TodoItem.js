import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{

  static defaultProps = {
    test: 'hello world'
  }

  constructor(props) {
    super(props)
    this.handlerClick = this.handlerClick.bind(this)
  }

  render() {
    const { content, test } = this.props
    return (
      <div
      onClick={this.handlerClick}>
        {test} - {content}
      </div>
    )
  }
  handlerClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

export default TodoItem
import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import './style.css'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [1,2,3,4]
    }
    this.handlerInputChange = this.handlerInputChange.bind(this)
    this.handlerInputClick = this.handlerInputClick.bind(this)
    this.handlerItemDelete = this.handlerItemDelete.bind(this)
  }
  render() {
    return (
      <Fragment>
        {/* 下面是一个input框 */}
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            onChange={this.handlerInputChange}
            value={this.state.inputValue} />
          <button onClick={this.handlerInputClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handlerItemDelete}
        />
      )
    })
  }

  handlerInputChange(e) {
    const inputValue = e.target.value
    this.setState(() => ({
      inputValue
    }))
    // this.setState({
    //   inputValue: e.target.value
    // })
  }

  handlerInputClick() {
    // prevState === this.state
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handlerItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }
}

export default TodoList;

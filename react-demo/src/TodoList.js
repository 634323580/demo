import React, { Component } from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import store from './store/index'
import { getInputChangeAction, getBtnClickAction, getItemDeleteAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUI'


class TodoList extends Component {

  constructor(props) {
    super(props)
    // 获取storeState
    this.state = store.getState()
    this.handlerInputChange = this.handlerInputChange.bind(this)
    this.handlerStoreChange = this.handlerStoreChange.bind(this)
    this.handlerBtnClick = this.handlerBtnClick.bind(this)
    this.handlerItemDelete = this.handlerItemDelete.bind(this)
    // 监听store改变
    store.subscribe(this.handlerStoreChange)
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handlerInputChange={this.handlerInputChange}
        handlerBtnClick={this.handlerBtnClick}
        handlerItemDelete={this.handlerItemDelete}
      />
    )
  }
  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
  }
  // 输入框改变
  handlerInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  // 点击按钮
  handlerBtnClick() {
    const action = getBtnClickAction()
    store.dispatch(action)
  }
  // 删除
  handlerItemDelete(index) {
    const action = getItemDeleteAction(index)
    store.dispatch(action)
  }
  // store改变处理函数
  handlerStoreChange() {
    this.setState(store.getState())
  }
}

export default TodoList
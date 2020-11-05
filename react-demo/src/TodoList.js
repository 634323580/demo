import React, { Component } from 'react'
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import store from './store/index'
import { getInputChangeAction, getBtnClickAction, getItemDeleteAction } from './store/actionCreators'


class TodoList extends Component {

  constructor(props) {
    super(props)
    // 获取storeState
    this.state = store.getState()
    this.handlerInputChange = this.handlerInputChange.bind(this)
    this.handlerStoreChange = this.handlerStoreChange.bind(this)
    this.handlerBtnClick = this.handlerBtnClick.bind(this)
    // 监听store改变
    store.subscribe(this.handlerStoreChange)
  }

  render() {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder="todo info"
            style={{width: '300px', marginRight: '10px'}}
            onChange={this.handlerInputChange}/>
          <Button
            onClick={this.handlerBtnClick}
            type="primary">提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handlerItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
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
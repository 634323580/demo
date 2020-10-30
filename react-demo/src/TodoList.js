import React, { Component } from 'react'
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import store from './store/index'


class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handlerInputChange = this.handlerInputChange.bind(this)
    this.handlerStoreChange = this.handlerStoreChange.bind(this)
    this.handlerBtnClick = this.handlerBtnClick.bind(this)
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
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
  handlerInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }
  handlerBtnClick() {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }
  handlerStoreChange() {
    this.setState(store.getState())
  }
}

export default TodoList
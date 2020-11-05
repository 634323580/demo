import React, { Component } from 'react'
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import store from './store/index'
import { getInputChangeAction, getBtnClickAction, getItemDeleteAction } from './store/actionCreators'


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
          renderItem={(item, index) => (
            <List.Item onClick={this.handlerItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
  handlerInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handlerBtnClick() {
    const action = getBtnClickAction()
    store.dispatch(action)
  }
  handlerItemDelete(index) {
    const action = getItemDeleteAction(index)
    store.dispatch(action)
  }
  handlerStoreChange() {
    this.setState(store.getState())
  }
}

export default TodoList
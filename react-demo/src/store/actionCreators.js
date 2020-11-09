import axios from 'axios'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionType'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getBtnClickAction = () => ({
  type: ADD_TODO_ITEM,
})

export const getItemDeleteAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://easy-mock.com/mock/5fa8efeb234c9b0d8babe960/react/getToDoList')
    .then(res => {
      const action = initListAction(res.data)
      dispatch(action)
    })
  }
}
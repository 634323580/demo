import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionType'
import { initListAction } from './actionCreators'

function getList() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1,2,3])
    }, 1500)
  })
}

function* getInitList() {
  const res = yield getList()
  const action = initListAction(res)
  yield put(action)
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
import reducer from './reducer'
// redux-saga
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // applyMiddleware(thunk),
);
const store = createStore(
  reducer,
  enhancer
);
// then run the saga
sagaMiddleware.run(todoSagas)

export default store
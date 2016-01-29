import {createStore, applyMiddleware} from 'redux'
import createHistory from 'history/lib/createHashHistory'
import {syncHistory} from 'redux-simple-router'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

export const history = createHistory()

//添加中间件
export const reduxRouterMiddleware = syncHistory(history)
const createStoreWithMiddleware = applyMiddleware(
  reduxRouterMiddleware,
  createLogger()
)(createStore)

// 初始化仓库，并合并了reducer具体操作
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers')
        store.replaceReducer(nextRootReducer)
      })
    }
    return store
}
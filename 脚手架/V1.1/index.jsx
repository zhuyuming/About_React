/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import './stubs/COURSES'
import {createStore, combineReducers, compose} from 'redux'
import {Provider} from 'react-redux'

import configureStore, {history, reduxRouterMiddleware} from './redux/store'

console.log('COURSES',COURSES,global)

// //创建仓库，并把 redux 和 react-router 合起来
const store = configureStore();
reduxRouterMiddleware.listenForReplays(store)

const rootRoute = {
    path: '/',
    component: require('./containers/App'),
    childRoutes: [
        require('./modules/Calendar'),
        require('./modules/Course'),
        require('./modules/Grades'),
        require('./modules/Messages'),
        require('./modules/Profile')
    ]
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={rootRoute} />
  </Provider>,
  document.getElementById('root')
);




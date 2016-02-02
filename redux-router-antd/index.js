import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';

import configureStore, {history, reduxRouterMiddleware} from './redux/store/configureStore'

import {getRoutes} from './routers';

//创建仓库，并把 redux 和 react-router 合起来
const store = configureStore();
reduxRouterMiddleware.listenForReplays(store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {getRoutes()}
    </Router>
  </Provider>,
  document.getElementById('root')
);

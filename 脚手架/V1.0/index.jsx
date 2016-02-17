import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import {createStore, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';


import configureStore, {history, reduxRouterMiddleware} from './redux/store/configureStore'

import {getRoutes} from './routers';
import App from './containers/App';

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





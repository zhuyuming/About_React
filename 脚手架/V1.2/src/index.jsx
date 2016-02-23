/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import './common/js/event'   

//存放项目的所有状态
window.STORE = {
    list:[{
        name:'zhongxia'
    }]
};

//错误路由
const errorRoute = {
    path: '*',
    getComponent(location, cb) {
        console.log('*', location)
        require.ensure([], (require) => {
            cb(null, require('./modules/error'))
        })
    }
}

const rootRoute = {
    path: '/',
    component: require('./containers/App'),
    childRoutes: [
        require('./modules/Calendar'),
        //TODO：有其他模块，请在这里添加路由
        errorRoute
    ]
}

render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('root')
);




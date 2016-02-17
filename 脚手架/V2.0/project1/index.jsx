/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import './src/stubs/COURSES'
//有问题，待研究
import '../../base/css/antd.min.css'
import '../../base/css/layout.css'

//存放项目的所有状态
window.STORE = {
    list:[{
        name:'zhongxia'
    }]
};

const rootRoute = {
    path: '/',
    component: require('./src/containers/App'),
    childRoutes: [
        require('./src/modules/Calendar'),
        require('./src/modules/Course'),
        require('./src/modules/Grades'),
        require('./src/modules/Messages'),
        require('./src/modules/Profile')
    ]
}

render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('root')
);




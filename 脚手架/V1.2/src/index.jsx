/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import './common/js/event'   
import './stubs/COURSES'


//存放项目的所有状态
window.STORE = {
    list:[{
        name:'zhongxia'
    }]
};

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
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('root')
);




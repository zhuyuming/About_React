/*
	理论上，应该把组织组件的代码，放到APP中，并且路由也是放在App中，而不是放到入口文件过来
	这里主要是用来把 react 和 redux 组合在一起
 */

/*third lib*/
import 'babel-core/polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Router from 'react-router';

//redux
import configureStore from './redux/store/configureStore'
import todos from './redux/actions/index'

//container
import App from './containers/App_redux'

//compents
import {Main,Table,Main1,Welcome,Main_redux} from './components'

// css
import './assets/css/antd.min.css'
import './assets/css/demo.css'
// import 'todomvc-app-css/index.css'


// import createBrowserHistory from 'history/lib/createBrowserHistory';
// import {syncReduxAndRouter} from 'redux-simple-router';

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~TEST~~~~~~~~~~~~~~~~~~~~~~~~*/
// redux store
const store = configureStore()
// const history = createBrowserHistory()
// console.log(syncReduxAndRouter)
// //这句代码就可以让 redux 和router 集合在一起使用,但是存在一个问题，那就是路由慢了一步，
// //点击跳到 test3 -->test2    点击test2的时候，才跳到test3
// syncReduxAndRouter(history, store);

//路由控制
let routes = ( 
    <Route name = "app" path = "/" handler = {App} >
        <DefaultRoute   handler = {Welcome}/> 
        <Route  path = "/test2" handler = {Main_redux}/> 
        <Route  path = "/test3" handler = {Table}/> 
    </Route>
);

// 路由执行
Router.run(routes, function(Handler) {
  console.debug('path:',store.getState().routing.path)
  render(
    <Provider store={store}>
        <Handler/>
    </Provider> ,
    document.getElementById('root')
  )
});






/*// 打印初始状态
console.log(store.getState().todos)

// 监听 state 更新时，打印日志
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// 发起一系列 action
store.dispatch(todos.addTodo('Learn about actions1'))
store.dispatch(todos.addTodo('Learn about actions2'))
store.dispatch(todos.addTodo('Learn about actions3'))
store.dispatch(todos.deleteTodo(0))
store.dispatch(todos.editTodo(1, 'zhongxia'))
store.dispatch(todos.completeTodo(1))
store.dispatch(todos.completeAll())
store.dispatch(todos.clearCompleted())

// 停止监听 state 更新
unsubscribe()*/



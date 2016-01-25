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
import App from './containers/App'

//compents
import main from './components/main'
import main1 from './components/main1'
import welcome from './components/welcome'
import table from './components/table'

// css
import './assets/css/antd.min.css'
import './assets/css/demo.css'
// import 'todomvc-app-css/index.css'



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~TEST~~~~~~~~~~~~~~~~~~~~~~~~*/
// redux store
const store = configureStore()
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


//路由控制
let routes = ( 
    <Route name = "app" path = "/" handler = {App} >
        <Route name = "main" path = "/test2" handler = {main}/> 
        <Route name = "main1" path = "/test3" handler = {table}/> 
        <DefaultRoute name="welcome" handler={welcome}/>
    </Route>
);

// 路由执行
Router.run(routes, function(Handler) {
	console.log(Handler)
	render(
		<Provider store={store}>
			<Handler/>
		</Provider>	,
		document.getElementById('root')
	)
});


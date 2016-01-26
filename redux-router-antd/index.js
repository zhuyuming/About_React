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
import {Header,Footer,Main,Table,Main1,Welcome} from './components'

// css
import './assets/css/antd.min.css'
import './assets/css/demo.css'


//路由控制
let routes = ( 
    <Route name = "app" path = "/" handler = {App} >
        <Route name = "main" path = "/test2" handler = {Main}/> 
        <Route name = "main1" path = "/test3" handler = {Table}/> 
        <DefaultRoute name="welcome" handler={Welcome}/>
    </Route>
);

// 路由执行
Router.run(routes, function(Handler) {
	console.log('~~~~~~~~~~~~~~~~')
	render(
		<div >
			<Handler/>
		</div>	,
		document.getElementById('root')
	)
});


import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import {
    DefaultRoute, Link, Route, RouteHandler
}
from 'react-router';

import HelloHandler from './hello.js';
import {Datepicker}  from 'antd';

console.log(Datepicker);
// 构建APP
let App = React.createClass({
    render() {
        return ( 
            < div className = "nav" >
                < Link to = "app" className = "homelink" > Home < /Link> 
                < Link to = "hello" className = "hellolink" > Say Hello < /Link> 
                < Link to = "antd-design" className = "antd-design-link" > antd design< /Link> 
            { /* this is the importTant part */ } < RouteHandler / >
            < /div>
        );
    }
});

//路由控制
let routes = ( 
    < Route name = "app" path = "/" handler = {App} >
        < Route name = "hello" path = "/hello" handler = {HelloHandler}/> 
        < Route name = "antd-design" path = "/antd-design" handler = {Datepicker}/> 
    < /Route>
);

// 路由执行
Router.run(routes, function(Handler) {
    ReactDOM.render( < Handler / > , document.getElementById('react'));
});




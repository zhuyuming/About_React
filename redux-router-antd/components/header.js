import React from 'react'
import { Menu  } from 'antd';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

const Header = React.createClass({
	render() {
		return (
			<div className="ant-layout-header">
        <div className="ant-layout-wrapper">
          <div className="ant-layout-logo"></div>
          <Menu theme="dark" mode="horizontal"
            defaultSelectedKeys={['2']} style={{lineHeight: '50px'}}>
            <Menu.Item key="1"><Link to="/">Welcome</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/test2">Tab/Time/Form</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/test3">Table</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/test4">Error</Link></Menu.Item>
          </Menu>
        </div>
      </div>
		);
	}
});

export default Header
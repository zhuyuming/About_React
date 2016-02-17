import React from 'react'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

// components
import { Menu, Breadcrumb, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

const Layout = React.createClass({
  render() {
    return (
      <div className="ant-layout-topaside">
        <div className="ant-layout-header">
          <div className="ant-layout-wrapper">
            <div className="ant-layout-logo"></div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{lineHeight: '50px'}}>
              <Menu.Item key="1"><Link to="/police">策略管理</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/user">用户管理</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/resource">资源管理</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/authority">查看权限</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/audit">用户审计</Link></Menu.Item>
            </Menu>
          </div>
        </div>
        
        <div className="ant-layout-wrapper">
          <div className="ant-layout-container">
            <aside className="ant-layout-sider">
              <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
                  <Menu.Item key="1"><Link to="/">Welcome</Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/test2">Tab、Time、Form</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/test3">Table</Link></Menu.Item>
                  <Menu.Item key="4"><Link to="/test4">Error</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
                  <Menu.Item key="5"><Link to="/test5">Test5</Link></Menu.Item>
                  <Menu.Item key="6">选项6</Menu.Item>
                  <Menu.Item key="7">选项7</Menu.Item>
                  <Menu.Item key="8">选项8</Menu.Item>
                </SubMenu>
              </Menu>
            </aside>
            
            <div className="ant-layout-content">
              <div style={{ height: 500 }}>
                <div style={{clear: 'both'}}>
                  {this.props.content}
                </div>
              </div>
            </div>
          </div>

          <div className="ant-layout-footer">
          Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
          </div>
        </div>
      </div>
    );
  }
});

export default Layout
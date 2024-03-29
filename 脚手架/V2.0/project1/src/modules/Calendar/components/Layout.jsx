import React from 'react'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

// components
import { Menu, Breadcrumb, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class Layout extends React.Component {
    render() {
        console.log('layout==>',this.props)
        return (
        <div className="ant-layout-topaside">
            <div className="ant-layout-wrapper">
            <div className="ant-layout-container">
                <aside className="ant-layout-sider">
                <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                    <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
                    <Menu.Item key="1"><Link to="/calendar/">Welcome</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/calendar/test1">Tab、Time、Form</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/calendar/test2">Table</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/calendar/test3">Error</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
                    <Menu.Item key="5"><Link to="/calendar/test5">Test5</Link></Menu.Item>
                    <Menu.Item key="6">选项6</Menu.Item>
                    <Menu.Item key="7">选项7</Menu.Item>
                    <Menu.Item key="8">选项8</Menu.Item>
                    </SubMenu>
                </Menu>
                </aside>
                
                <div className="ant-layout-content">
                <div style={{ height: 490 }}>
                    <div style={{clear: 'both'}}>
                    {this.props.children || <h2>当前属于该模块的根目录下，可以设置默认展示的内容，直接替换这里即可</h2> }
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
}

module.exports = Layout
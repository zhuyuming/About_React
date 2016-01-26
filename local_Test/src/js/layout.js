import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Breadcrumb } from 'antd';

// ES6语法
class Layout extends React.Component{
   render(){
       return ( <div>
    <div className="ant-layout-top">
      <div className="ant-layout-header">
        <div className="ant-layout-wrapper">
          <div className="ant-layout-logo"></div>
          <Menu theme="dark" mode="horizontal"
            defaultSelectedKeys={['2']} style={{lineHeight: '64px'}}>
            <Menu.Item key="1">导航一</Menu.Item>
            <Menu.Item key="2">导航二</Menu.Item>
            <Menu.Item key="3">导航三</Menu.Item>
          </Menu>
        </div>
      </div>
     
      <div className="ant-layout-footer">
      Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
      </div>
    </div>
  </div>);
   }
}
export default Layout;

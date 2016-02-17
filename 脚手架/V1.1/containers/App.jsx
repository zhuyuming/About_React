 /*globals COURSES:true */
import React from 'react'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'

//自定义的方法，把redux 的actions 和 state 绑定到 组件的属性上
import bind2Prop from '../redux/bind2Prop'

import  '../common/css/antd.min.css'
import  '../common/css/layout.css'

//引用项目外的通用模块
import '../../base'

console.log('BDOS',BDOS,bind2Prop)

class App extends React.Component {
  render() {
    console.log('App_render:',this.props)
    return (
      <div>
        <GlobalNav />
        <div style={{ padding: 20 }}>
          {this.props.children || <Dashboard courses={COURSES} />}
        </div>
      </div>
    )
  }
}

module.exports = bind2Prop(App)

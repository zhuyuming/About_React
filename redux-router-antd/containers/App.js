import React,{Component} from 'react'
// components
import {Header,Footer} from '../components'
import css from '../assets/css/antd.min.css'

//自定义的方法，把redux 的actions 和 state 绑定到 组件的属性上
import bind2Prop from '../redux/bind2Prop'

const App = React.createClass({
  render() {
    console.log('App:',this.props)
    return ( 
    <div>
      <Header/>
      {this.props.children}
      <Footer/>
    </div> );
  }
});

//用来关联redux
export default bind2Prop(App);


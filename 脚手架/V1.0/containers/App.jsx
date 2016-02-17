import React,{Component} from 'react'
// components
import {Layout} from '../modules'
import {Main1} from '../modules'
import  '../common/css/antd.min.css'
import  '../common/css/layout.css'

//自定义的方法，把redux 的actions 和 state 绑定到 组件的属性上
import bind2Prop from '../redux/bind2Prop'

// T型布局
const App = React.createClass({
  render() {
    console.log(Main1);
    let Layout1 = Main1.Layout;
    console.log('App:',this.props) 
    return ( 
    <div>
      <Layout1 content={this.props.children}/>
    </div> );
  }
});

//用来关联redux
export default bind2Prop(App);


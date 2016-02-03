import React,{Component} from 'react'
// components
import {Header,Footer,Layout} from '../components'
import css from '../assets/css/antd.min.css'

//自定义的方法，把redux 的actions 和 state 绑定到 组件的属性上
import bind2Prop from '../redux/bind2Prop'

// T型布局
const App = React.createClass({
  render() {
    console.log('App:',this.props) 
    return ( 
    <div>
      <Layout content={this.props.children}/>
    </div> );
  }
});

// 上下布局
// const App = React.createClass({
//   render() {
//     console.log('App:',this.props)
//     return ( 
//     <div>
//       <Header/>
//       {this.props.children}
//       <Footer/>
//     </div> );
//   }
// });

//用来关联redux
export default bind2Prop(App);


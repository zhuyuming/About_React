/*
	每一个文件夹，都要有默认一个index.js 这个是模块对外的一个接口，可以直接访问该接口来获取具体内容
	返回的组件名，要为大写，才能用
 */
//自定义的方法，把redux 的actions 和 state 绑定到 组件的属性上
import bind2Prop from '../redux/bind2Prop'

// 导出组件(记得绑定上state 和 actions 到 props 上)
import pre_Header from './header';
import pre_Footer from './footer';
import pre_Main from './main';
import pre_Welcome from './welcome';
import pre_Table from './table';
import pre_FormDemo from './form';
import pre_ErrorPage from './error';

// 导出组件(记得绑定上state 和 actions 到 props 上)
export const Header = bind2Prop(pre_Header) 
export const Footer = bind2Prop(pre_Footer) 
export const Main = bind2Prop(pre_Main) 
export const Welcome = bind2Prop(pre_Welcome) 
export const Table = bind2Prop(pre_Table) 
export const FormDemo = bind2Prop(pre_FormDemo) 
export const ErrorPage = bind2Prop(pre_ErrorPage) 

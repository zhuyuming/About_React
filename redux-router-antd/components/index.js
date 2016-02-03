/*
	每一个文件夹，都要有默认一个index.js 这个是模块对外的一个接口，可以直接访问该接口来获取具体内容
	返回的组件名，要为大写，才能用
 */
//自定义的方法，把redux 的actions 和 state 绑定到 组件的属性上
import bind2Prop from '../redux/bind2Prop'

// 导出组件(记得绑定上state 和 actions 到 props 上)
import pre_Header from './layout_hmf/header';
import pre_Footer from './layout_hmf/footer';
import pre_Main from './layout_hmf/main';
import pre_Welcome from './layout_hmf/welcome';
import pre_Table from './layout_hmf/table';
import pre_FormDemo from './layout_hmf/form';
import pre_ErrorPage from './error';
import pre_Layout from './layout_hlrf/Layout'; 

// 导出组件(记得绑定上state 和 actions 到 props 上)
export const Header = bind2Prop(pre_Header) 
export const Footer = bind2Prop(pre_Footer) 
export const Main = bind2Prop(pre_Main) 
export const Welcome = bind2Prop(pre_Welcome) 
export const Table = bind2Prop(pre_Table) 
export const FormDemo = bind2Prop(pre_FormDemo) 
export const ErrorPage = bind2Prop(pre_ErrorPage) 
export const Layout = bind2Prop(pre_Layout) 

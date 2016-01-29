/*
	每一个文件夹，都要有默认一个index.js 这个是模块对外的一个接口，可以直接访问该接口来获取具体内容
	返回的组件名，要为大写，才能用
 */
//自定义的方法，把redux 的actions 和 state 绑定到 组件的属性上
import bind2Prop from '../redux/bind2Prop'

// 导出组件(记得绑定上state 和 actions 到 props 上)
export {default as bind2Prop(Header)} from './header';
export {default as bind2Prop(Footer)} from './footer';
export {default as bind2Prop(Main)} from './main';
export {default as bind2Prop(Welcome)} from './welcome';
export {default as bind2Prop(Table)} from './table';
export {default as bind2Prop(FormDemo)} from './form';
export {default as bind2Prop(ErrorPage)} from './error';
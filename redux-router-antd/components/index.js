/*
	每一个文件夹，都要有默认一个index.js 这个是模块对外的一个接口，可以直接访问该接口来获取具体内容
	返回的组件名，要为大写，才能用
 */
export {default as Header} from './header';
export {default as Footer} from './footer';
export {default as Main} from './main';
export {default as Main_redux} from './main_redux';
export {default as Main1} from './main1';
export {default as Welcome} from './welcome';
export {default as Table} from './table';
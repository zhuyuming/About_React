/**
 * 时间：2016年2月14号
 * 这个是对外的接口，访问该模块，需要对方开放的东西，优先写在这里
 * 写在这里的好处是，访问这个模块，只需要指定到该模块的文件夹名称，这样就可以访问到
 **/
 

//==========================导出组件=====================================-=
 
 // 1. 自定义的方法，把redux 的actions 和 state 绑定到 组件的属性上
import bind2Prop from '../../redux/bind2Prop'

// 2. 导出组件(记得绑定上state 和 actions 到 props 上)
import pre_Layout from './components/Layout'; 
import pre_Add from './components/Add1'; 

// 3. 导出组件(记得绑定上state 和 actions 到 props 上)
export const Layout = bind2Prop(pre_Layout) 
export const Add = bind2Prop(pre_Add) 

// =========================导出redux=======================================
import redux from './redux'; 
export  {redux};


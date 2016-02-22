### 改进
1. 去掉了redux ，单独使用 react + react-router
2. 模块之间可以把通用的值，或者其他数据，挂在全局window上
3. 去掉了很多不必要的插件
4. 代码放在 src 中，除了 index.html

### 组件通讯说明
- ``EventEmitter.subscribe('event_name',{name:'zhongxia'});``
- ``EventEmitter.dispatch('event_name',function(data){  /*具体操作*/  });``

- 注册监听事件规范：
 1. 注册的事件名规则   模块名_事件名  module1_add  / module1_delete  
 2. 注册事件，统一在组件的  getInitialState  方法里面注册【该方法只在实例化的时候，调用一次】
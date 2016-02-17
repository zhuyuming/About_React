### 如何运行
1. ``git clone https://github.com/zhongxia245/About_React.git``
2. ``cd redux-router-antd && npm install``
3. ``npm start``
4. ``localhost:3000`` 访问

### 如何打版发布
1. ``npm run build`` 
2. 直接点击 index.html 就可以运行

### 简单说明一下这个版本更新了什么内容
1. 集成进来了 react-router 最新的版本，实现了页面的路由
2. redux 并没有完美的和 react-router 集成在一起，因为 router返回的是 ``this.props.children`` 这样的一个组件 ，使用方式是  ``{this.props.children}`` 这种方式，不知道如何赋值属性，这个是目前遇到的问题
3. ``{this.props.children}`` 这种方式，如果直接修改 `this.props.children.props` 就报错了，显示``props`` 是不可修改的
4. 目前 redux 是在每一个组件的文件中，去通用 ``connect`` 去把 `state` 和 `actions` 绑定到组件的 `props`中【可以在组件的 `index.js` 文件进行统一的绑定，这样维护起来就比较容易】==》 目前的解决方案

---
### 更新内容
    20160216 15:25
1. 增加了热部署，去掉了Redux，单独使用react 和 react-router
2. 每个模块单独在一个文件夹里面，modules 文件夹表示模块的集合，里面每一个文件夹都是一个模块快
3. 模块可以存在子模块
4. App是部分加载的，不是刚开始就全部加在，而是当前在什么页面，就加载什么内容


    20160130 00:46
1. 增加了统一绑定action和state到组件的prop上
2. 发布的时候，去掉了热部署，修改 .babelrc文件
3. 抽取第三方类库出来，把第三方和自己编写的脚本分开打包（common.js 表示第三方类库，app.bundle.js 表示自己写的脚本）

---

## 说明【早期】
1. ~~在server.js 里面修改 webpack.config 或者 webpack.config_redux 来切换是否 React-router 的demo 和 Redux的DEMO~~

---
### 目前纠结的是 Redux 和 Router 如何连接起来
~~目前一直尝试，但是还是没有连接起来，理由未知，找github上面的例子，但是还是不行，react-redux-router 这个类库，但是还是不行，不知道哪里出现了问题~~

---
1. ~~React-Router 和 Redux 已经连接上了，但是整体的效果目前还不是很满意，重新刷新的时候，居然没有返回正确的路径，这个是不可取的~~

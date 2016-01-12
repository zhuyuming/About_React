#ant-design + ES6 + webpack 的集成解决方案
####对 ant-design 和 webpack 还不是很了解，因此该项目中，还缺少很多东西，只是完成了最基本的 集成 ant-design 进来，可以单独使用
使用步骤：
  1. 下载代码 ```git clone https://github.com/zhongxia245/About_React.git ```
  2. ```npm install```   或者 ```cnpm install```
  3. 演示demo，用到了 bootstrap。 因此   ``` npm install bootstrap --save ```
  4. 运行```npm start```
  5. 打开网址： ``` http://localhost:8080/webpack-dev-server/ ``` 就可以看到想过了

---
  #####开发环境使用 热部署的方式，那么发布的时候，如何直接引用JS就可以访问页面效果呢？修改 webpack.config.js 里面的 入口，注释掉 热部署的那一句代码即可

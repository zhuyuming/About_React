#webpack + ES6 + React + ant-design 的环境
####使用技巧
  1. 下载代码  `git clone https://github.com/zhongxia245/About_React.git`
  2. 进入 local_test 目录  `cd local_test` 
  3. 安装依赖包  `npm install`
  4. 压缩打包代码 'webpack -p ' 或者 `npm run build` 
  5. 打包发布的版本 `webpack --config webpack.config.release.js`  或者 `npm run release` 
  6. 本地运行测试 `npm start`
  
####功能说明
  1. 目前只是简单的环境
    1. babel 编译 ES6
    2. 压缩混淆代码
    3. 自动抽取公共的代码【多页面】，webpack 内部黑科技，自动判断依赖
  2.  还未完成的功能
    1. ~~对图片进行压缩，或者合并~~
    

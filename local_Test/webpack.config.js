/**********************************说明 START*******************************************
@aurhor zhongxia
@createtime   2016/01/14
@changetime 

发布版本的时候，注释掉 热部署，然后再编译下,否则html 直接引用 js 会报错

//入口是数组的格式
entry:[
    'webpack/hot/only-dev-server',   //如果需要发布的时候，去掉这段热部署，然后再打包一下，便可以直接引用JS看效果
    "./js/app.js"
],

//入口是对象的形式
entry: {
        app: ["webpack/hot/only-dev-server","./js/app.js"],
        b: ["webpack/hot/only-dev-server","./js/b.js"],
},

//加上版本号， [hash]   [id]  [name]  [file] 都是可以获取到值得
output: {
        path: "assets/[hash]/",
        publicPath: "assets/[hash]/",
        filename: "bundle.js"
}

生成 文件 map，这样就算压缩了之后，调试仍然可以定位到代码
devtool: 'source-map',
**********************************说明 END*******************************************/

var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('lib.js'); //抽离公共的部分,自动判断公共部分

module.exports = {
    entry: {
        app: ["webpack/hot/only-dev-server", "./src/js/app.js"],
        b: ["webpack/hot/only-dev-server", "./src/js/b.js"],
    },
    output: {
        path: './build',
        publicPath: "/build/",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.json']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        commonsPlugin
    ]
};

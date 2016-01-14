/*
    开发版本的打包工具
 */

var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('lib.js'); //抽离公共的部分,自动判断公共部分
//压缩混淆代码
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    },
    mangle: {
        except: ['$'] //不混淆的变量
    }
}); 

module.exports = {
    entry: {
        app: ["webpack/hot/only-dev-server", "./src/js/app.js"],
        b: ["webpack/hot/only-dev-server", "./src/js/b.js"],
    },
    output: {
        path: './release',
        publicPath: "/release/",
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
    //devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.json']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        uglifyJsPlugin,
        commonsPlugin
    ]
};

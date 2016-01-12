var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack/hot/only-dev-server',   //如果需要发布的时候，去掉这段热部署，然后再打包一下，便可以直接引用JS看效果
        "./js/app.js"
    ],
    output: {
        path: './build',
        filename: "bundle.js",
        publicPath:"/build/"
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
        }]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};

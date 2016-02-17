'use strict';
var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        app: path.join(__dirname, 'index'),
        common: path.join(__dirname, 'common')
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: '[name].bundle.js',
        chunkFilename: 'chunk/[chunkhash:8].chunk.min.js',
        publicPath:  '/static/'
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
                test: /\.css?$/,
                loaders: ['css-loader'],
            }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}


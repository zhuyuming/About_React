'use strict';
var path = require('path')
var webpack = require('webpack')

module.exports = {
  //devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './index'
    ],
    common:'./common'
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

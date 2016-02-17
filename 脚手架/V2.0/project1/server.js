var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var PORT = 3000;

var server = new WebpackDevServer(webpack(config), {
    //contentBase: __dirname,   //指定静态目录
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false,
    https: false,
    historyApiFallback: true,
    stats: { colors: true }
})

server.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.info("==>   Listening on port %s. Open up http://localhost:%s/ in your browser.", PORT, PORT)
});



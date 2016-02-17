// var webpack = require('webpack')
// var webpackDevMiddleware = require('webpack-dev-middleware')
// var webpackHotMiddleware = require('webpack-hot-middleware')
// var config = require('./webpack.config')

// var app = new (require('express'))()
// var port = 3000

// var compiler = webpack(config)
// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
// app.use(webpackHotMiddleware(compiler))

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + '/index.html')
// })

// app.listen(port, function(error) {
//   if (error) {
//     console.error(error)
//   } else {
//     console.info("==>   Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
//   }
// })

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var PORT = 3000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: false,
    https: false,
    historyApiFallback: true
}).listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.info("==>   Listening on port %s. Open up http://localhost:%s/ in your browser.", PORT, PORT)
});
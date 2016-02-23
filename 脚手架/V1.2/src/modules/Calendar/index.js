module.exports = {
    path: 'calendar',
    //默认路由
    getIndexRoute(location, cb) {
        require.ensure([], function (require) {
            cb(null, require('./components/Error'))
        })
    },
  
    //子路由
    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/test1'),
                require('./routes/error')
            ])
        })
    },
  
    //当前路由返回的控件
    getComponent(location, cb) {
        require.ensure([], (require) => {  
            cb(null, require('./components/Layout'))
        })
    }
}

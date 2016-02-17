module.exports = {
  path: 'test3',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Index'))
    })
  }
}

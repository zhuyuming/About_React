module.exports = {
  path: 'test2',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Index'))
    })
  }
}

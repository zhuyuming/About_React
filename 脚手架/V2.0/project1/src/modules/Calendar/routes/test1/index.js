module.exports = {
  path: 'test1',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Index'))
    })
  }
}

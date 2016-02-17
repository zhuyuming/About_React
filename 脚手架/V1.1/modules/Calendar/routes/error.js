module.exports = {
  path: '*',
  getComponent(location, cb) {
    console.log('*',location)
    require.ensure([], (require) => {
      cb(null, require('../components/Error'))
    })
  }
}
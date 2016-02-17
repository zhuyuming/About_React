module.exports = {
  path: 'grades',
  getComponent(location, cb) {
    require.ensure([], (require) => {
    //   cb(null, require('./components/Grades'))
      cb(null, require('./components/main'))
    })
  }
}

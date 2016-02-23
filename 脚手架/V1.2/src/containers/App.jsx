 /*globals COURSES:true */
import React from 'react'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'

class App extends React.Component {
  render() {
    //console.log('App_render:',this.props)
    return (
      <div>
        <GlobalNav />
        <div style={{ padding: 0 }}>
          {this.props.children || <Dashboard/>}
        </div>
      </div>
    )
  }
}

module.exports = App

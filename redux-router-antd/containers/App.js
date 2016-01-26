import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteHandler } from 'react-router'
// action
import TodoActions from '../redux/actions/index'
// components
import {Header,Footer,Main} from '../components'


const App = React.createClass({
  render() {
   console.log('APP Render...')
    return ( 
    <div>
      <Header/>
      <RouteHandler/>
      <Footer/>
    </div> );
  }
});
export default App;


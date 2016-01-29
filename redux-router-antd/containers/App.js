import React,{Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { routeActions } from 'redux-simple-router'
import * as R from 'react-router'
// action
import TodoActions from '../redux/actions/index'
// components
import {Header,Footer} from '../components'

const App = React.createClass({
  render() {
    console.log('App:',this.props,R)
    return ( 
    <div>
      <Header/>
      {this.props.children}
      <Footer/>
    </div> );
  }
});

//用来关联redux
function mapState(state) {
  return {
    todos: state.todos
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(App);


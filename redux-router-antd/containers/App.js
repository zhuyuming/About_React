import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Router from 'react-router';
// redux actions
import TodoActions from '../redux/actions/index'

// components
import Header from '../components/header'
import Footer from '../components/footer'

// css
import '../assets/css/antd.min.css'
import '../assets/css/demo.css'

const App = React.createClass({
  render() {
  	console.log('APP==>:',this.props)
    return ( 
    <div>
    	<Header/>
    	<RouteHandler todos={this.props.todos} actions={this.props.actions}/>
    	<Footer/>
    </div> );
  }
});


function mapState(state) {
	console.log('mapState==>:',state)
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

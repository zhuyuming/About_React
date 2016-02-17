'use strict';
// 绑定状态和action到组件的props 上， redux  和 组件合在一起用
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../redux/actions'

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

/**
 * [bind2Prop 把redux的状态和方法绑定到组件的porps上]
 * @param  {[type]} component [组件]
 * @return {[type]}           [返回组件，但是带状态]
 */
export default function bind2Prop(component){
	return connect(mapState, mapDispatch)(component);
}

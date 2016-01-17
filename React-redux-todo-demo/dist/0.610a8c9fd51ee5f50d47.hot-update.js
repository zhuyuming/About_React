webpackHotUpdate(0,{

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(16), ReactMount = __webpack_require__(6), React = __webpack_require__(5); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(60);

	var _reactRedux = __webpack_require__(67);

	var _reduxActions = __webpack_require__(126);

	var actions = _interopRequireWildcard(_reduxActions);

	var _componentsTodoInput = __webpack_require__(123);

	var _componentsTodoInput2 = _interopRequireDefault(_componentsTodoInput);

	var _componentsTodoList = __webpack_require__(125);

	var _componentsTodoList2 = _interopRequireDefault(_componentsTodoList);

	var App = _react2['default'].createClass({
	  displayName: 'App',

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        null,
	        'TODO DEMO - zhongxia'
	      ),
	      _react2['default'].createElement(_componentsTodoInput2['default'], { addTodo: this.props.actions.addTodo }),
	      _react2['default'].createElement(_componentsTodoList2['default'], { todos: this.props.todos, actions: this.props.actions })
	    );
	  }
	});

	var mapStateToProps = function mapStateToProps(state) {
	  return state;
	};

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(actions, dispatch)
	  };
	};
	module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(5))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }

})
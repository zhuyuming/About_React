webpackHotUpdate(0,{

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(16), ReactMount = __webpack_require__(6), React = __webpack_require__(5); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var TodoItem = (function (_React$Component) {
	  _inherits(TodoItem, _React$Component);

	  function TodoItem() {
	    _classCallCheck(this, TodoItem);

	    _get(Object.getPrototypeOf(TodoItem.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(TodoItem, [{
	    key: 'handlerCompleted',
	    value: function handlerCompleted() {
	      this.props.completeTodo(this.props.todo.id);
	    }
	  }, {
	    key: 'handlerDelete',
	    value: function handlerDelete() {
	      this.props.deleteTodo(this.props.todo.id);
	    }

	    /*
	      返回样式
	    */
	  }, {
	    key: 'renderStyle',
	    value: function renderStyle() {
	      return {
	        color: this.props.todo.completed ? 'lightgrey' : 'black',
	        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { style: this.renderStyle() },
	        _react2['default'].createElement(
	          'div',
	          null,
	          this.props.todo.text
	        ),
	        _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(
	            'button',
	            { onClick: this.handlerCompleted.bind(this) },
	            'Completed'
	          ),
	          _react2['default'].createElement(
	            'button',
	            { onClick: this.handlerDelete.bind(this) },
	            'Delete'
	          )
	        )
	      );
	    }
	  }]);

	  return TodoItem;
	})(_react2['default'].Component);

	exports['default'] = TodoItem;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(5))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "TodoItem.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }

})
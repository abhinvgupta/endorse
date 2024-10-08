/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(3);

var _cors2 = _interopRequireDefault(_cors);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(5);

var _serializeJavascript = __webpack_require__(6);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _App = __webpack_require__(7);

var _App2 = _interopRequireDefault(_App);

var _styleMap = __webpack_require__(10);

var _styleMap2 = _interopRequireDefault(_styleMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subdomain = __webpack_require__(11);
var allowedDomains = ['isha', 'drishti'];
var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.static("public"));

var getSubdomain = function getSubdomain(subdomains) {
  if (subdomains.length == 0) {
    return null;
  } else if (subdomains.length == 1) {
    if (allowedDomains.includes(subdomains[0])) {
      return subdomains[0];
    } else {
      return 'invalid';
    }
  } else {
    return 'invalid';
  }
};

app.get("*", function (req, res, next) {
  var domain = getSubdomain(req.subdomains);
  if (domain == 'invalid') {
    res.send('Invalid domain');
  }
  domain = domain ? domain : 'root';
  var styleObject = _styleMap2.default[domain];
  var domainStyle = _styleMap2.default[domain];
  var markup = (0, _server.renderToString)(_react2.default.createElement(_App2.default, { style: styleObject }));

  res.send("\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>" + domainStyle.title + "</title>\n        <meta name=" + domainStyle.meta.name + " content=" + domainStyle.meta.content + ">\n        <script src=\"/bundle.js\" defer></script>\n        <script>window.subdomain = \"" + domain + "\"</script>\n      </head>\n\n      <body>\n        <div id=\"app\" >" + markup + "</div>\n      </body>\n    </html>\n  ");
});

app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Counter = __webpack_require__(8);

var _Counter2 = _interopRequireDefault(_Counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var color = 'black';

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    color = props.style.counterColor;
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(_Counter2.default, { colour: color })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ButtonComp = __webpack_require__(9);

var _ButtonComp2 = _interopRequireDefault(_ButtonComp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_Component) {
  _inherits(Counter, _Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = { count: _this.props.start || 0
      // the following bindings are necessary to make `this` work in the callback
    };_this.inc = _this.inc.bind(_this);
    _this.dec = _this.dec.bind(_this);
    return _this;
  }

  _createClass(Counter, [{
    key: 'inc',
    value: function inc() {
      this.setState({
        count: this.state.count + 1
      });
    }
  }, {
    key: 'dec',
    value: function dec() {
      this.setState({
        count: this.state.count - 1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          { id: 'counter', style: { color: this.props.colour } },
          this.state.count
        ),
        _react2.default.createElement(_ButtonComp2.default, { onClick: this.inc, text: '+' }),
        _react2.default.createElement(_ButtonComp2.default, { onClick: this.dec, text: '-' })
      );
    }
  }]);

  return Counter;
}(_react.Component);

exports.default = Counter;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonComp(props) {
  return _react2.default.createElement(
    'button',
    { id: 'butt', onClick: props.onClick },
    props.text
  );
}

exports.default = ButtonComp;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	root: { title: 'Lets Endorse', meta: { name: 'community', content: 'make a change' }, counterColor: 'red' },
	isha: { title: 'Isha', meta: { name: 'education', content: 'educate all' }, counterColor: 'blue' },
	drishti: { title: 'Drishti', meta: { name: 'children', content: 'enable all' }, counterColor: 'green' }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express-subdomain");

/***/ })
/******/ ]);
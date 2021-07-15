"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _reactDom = require("react-dom");

var _App = _interopRequireDefault(require("./App"));

var _jsxFileName = "/Users/thomas.moore/dev/react-ssg/src/index.js",
    _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Html = function Html(props) {
  var html = {
    __html: props.children
  };
  return /*#__PURE__*/_react["default"].createElement("html", {
    lang: "en",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement("head", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "App 2"), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "stylesheet",
    href: "/app.css",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })), /*#__PURE__*/_react["default"].createElement("body", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "app",
    dangerouslySetInnerHTML: html,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), /*#__PURE__*/_react["default"].createElement("script", {
    src: "/app.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })));
};

var doc = '<!doctype html>' + _server["default"].renderToStaticMarkup( /*#__PURE__*/_react["default"].createElement(Html, {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }
}, _server["default"].renderToString( /*#__PURE__*/_react["default"].createElement(_App["default"], {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 30
  }
}))));

if (typeof document === 'undefined') {
  var fs = require(
  /* webpackIgnore: true */
  'fs');

  fs.writeFileSync('./dist/index.html', doc);
} else {
  (0, _reactDom.hydrate)( /*#__PURE__*/_react["default"].createElement(_App["default"], {
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }), document.getElementById('app'));
}

console.log("File written: ".concat(process.cwd(), "/index.html"));
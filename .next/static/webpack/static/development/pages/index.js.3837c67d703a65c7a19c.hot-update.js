webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layouts_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../layouts/base */ "./layouts/base.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "C:\\Users\\edgardo.ainol\\Desktop\\Ignac10Chaska\\nextjs-test\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, [{
    key: "render",
    value: function render() {
      return __jsx(_layouts_base__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "App Movies")), this.props.movies.map(function (mov) {
        return __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, mov.Title);
      }), this.renderPagination());
    }
  }, {
    key: "renderPagination",
    value: function renderPagination() {
      var previous = this.props.page > 1 ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/?page=".concat(this.props.page - 1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Previous")) : null;
      return __jsx("div", {
        className: "jsx-885350348" + " " + "control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, previous, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/?page=".concat(this.props.page + 1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("a", {
        className: "jsx-885350348",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Next")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "885350348",
        __self: this
      }, ".control.jsx-885350348{text-align:center;}.control.jsx-885350348 a.jsx-885350348{padding:0 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZWRnYXJkby5haW5vbFxcRGVza3RvcFxcSWduYWMxMENoYXNrYVxcbmV4dGpzLXRlc3RcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQzRCLEFBSW9CLEFBRW9CLGVBQ25CLEdBSEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxlZGdhcmRvLmFpbm9sXFxEZXNrdG9wXFxJZ25hYzEwQ2hhc2thXFxuZXh0anMtdGVzdFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi8uLi9sYXlvdXRzL2Jhc2UnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgICAgICBjb25zdCBwYWdlID0gcXVlcnkucGFnZSA/IE51bWJlcihxdWVyeS5wYWdlKSA6IDE7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2k9dHQzODk2MTk4JmFwaWtleT1iNDA3ZWFkNCZzPWJhdG1hbiZwYWdlPSR7cGFnZX1gKTtcclxuICAgICAgICBjb25zdCBtb3ZpZXMgPSByZXNwb25zZS5kYXRhLlNlYXJjaDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgbW92aWVzLCBwYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCYXNlPlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkFwcCBNb3ZpZXM8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubW92aWVzLm1hcCgobW92ID0+IDxoMT57bW92LlRpdGxlfTwvaDE+KSl9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQYWdpbmF0aW9uKCl9XHJcbiAgICAgICAgICAgIDwvQmFzZT5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUGFnaW5hdGlvbigpIHtcclxuICAgICAgICBjb25zdCBwcmV2aW91cyA9IHRoaXMucHJvcHMucGFnZSA+IDEgP1xyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgLz9wYWdlPSR7dGhpcy5wcm9wcy5wYWdlIC0gMX1gfT48YT5QcmV2aW91czwvYT48L0xpbms+IDogbnVsbDtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAge3ByZXZpb3VzfVxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8/cGFnZT0ke3RoaXMucHJvcHMucGFnZSArIDF9YH0+PGE+TmV4dDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRyb2x7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250cm9sIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\edgardo.ainol\\\\Desktop\\\\Ignac10Chaska\\\\nextjs-test\\\\pages\\\\index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var query, page, response, movies;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _ref.query;
              page = query.page ? Number(query.page) : 1;
              _context.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("http://www.omdbapi.com/?i=tt3896198&apikey=b407ead4&s=batman&page=".concat(page)));

            case 4:
              response = _context.sent;
              movies = response.data.Search;
              return _context.abrupt("return", {
                movies: movies,
                page: page
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.3837c67d703a65c7a19c.hot-update.js.map
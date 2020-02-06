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
      }, "Previous") : null;
      return __jsx("div", {
        className: "jsx-3197201476" + " " + "control",
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
      }, "Next"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3197201476",
        __self: this
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZWRnYXJkby5haW5vbFxcRGVza3RvcFxcSWduYWMxMENoYXNrYVxcbmV4dGpzLXRlc3RcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQzRCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZWRnYXJkby5haW5vbFxcRGVza3RvcFxcSWduYWMxMENoYXNrYVxcbmV4dGpzLXRlc3RcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vLi4vbGF5b3V0cy9iYXNlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IHF1ZXJ5LnBhZ2UgPyBOdW1iZXIocXVlcnkucGFnZSkgOiAxO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9pPXR0Mzg5NjE5OCZhcGlrZXk9YjQwN2VhZDQmcz1iYXRtYW4mcGFnZT0ke3BhZ2V9YCk7XHJcbiAgICAgICAgY29uc3QgbW92aWVzID0gcmVzcG9uc2UuZGF0YS5TZWFyY2g7XHJcblxyXG4gICAgICAgIHJldHVybiB7IG1vdmllcywgcGFnZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QmFzZT5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5BcHAgTW92aWVzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1vdmllcy5tYXAoKG1vdiA9PiA8aDE+e21vdi5UaXRsZX08L2gxPikpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUGFnaW5hdGlvbigpfVxyXG4gICAgICAgICAgICA8L0Jhc2U+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBhZ2luYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLnByb3BzLnBhZ2UgPiAxID9cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC8/cGFnZT0ke3RoaXMucHJvcHMucGFnZSAtIDF9YH0+UHJldmlvdXM8L0xpbms+IDogbnVsbDtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAge3ByZXZpb3VzfVxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8/cGFnZT0ke3RoaXMucHJvcHMucGFnZSArIDF9YH0+TmV4dDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\edgardo.ainol\\\\Desktop\\\\Ignac10Chaska\\\\nextjs-test\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=index.js.c677f4bcbaa8f7f908e4.hot-update.js.map
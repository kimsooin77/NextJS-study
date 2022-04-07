webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject,
    _this = undefined,
    _jsxFileName = "C:\\Users\\kimsooin\\Desktop\\\uACF5\uBD80\uAE30\uB85D\\\uACF5\uBD80\uAE30\uB85D\\22.04 \uACF5\uBD80\uAE30\uB85D\\next-study\\front\\components\\AppLayout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







 // 최적화를 위해 styled-component로 스타일 정의

var SearchInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search)(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nvertical-align : middle;\n"]))); // eslint-disable-next-line react/prop-types

_c = SearchInput;

var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoggedIn = _useState[0],
      setIsLoggedIn = _useState[1];

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    mode: "horizontal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 36
    }
  }, "\uB178\uB4DC\uBC84\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 43
    }
  }, "\uD504\uB85C\uD544"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(SearchInput, {
    enterButton: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 42
    }
  }, "\uD68C\uC6D0\uAC00\uC785")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, isLoggedIn ? __jsx(_components_UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setIsLoggedIn: setIsLoggedIn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 35
    }
  }) : __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setIsLoggedIn: setIsLoggedIn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 83
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.naver.com",
    target: "_blank",
    rel: "noreferrer noopener",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, "Mede by Kimsooin"))));
};

_s(AppLayout, "g0MSgNVZk+vKiEFnDJ9VPEfswFA=");

_c2 = AppLayout;
AppLayout.prototype = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout); // useCallback은 함수를 캐싱하고 useMemo는 값을 캐싱한다.
// _blank 사용시 보안을 확실하게 하기 위해 noreferrer와 noopener를 꼭 명시해주어야 한다.

var _c, _c2;

$RefreshReg$(_c, "SearchInput");
$RefreshReg$(_c2, "AppLayout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiU2VhcmNoSW5wdXQiLCJzdHlsZWQiLCJJbnB1dCIsIlNlYXJjaCIsIkFwcExheW91dCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsInByb3RvdHlwZSIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLFdBQVcsR0FBR0MsaUVBQU0sQ0FBQ0MsMENBQUssQ0FBQ0MsTUFBUCxDQUFULDJLQUFqQixDLENBSUE7O0tBSk1ILFc7O0FBS04sSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBb0I7QUFBQTs7QUFBQSxNQUFoQkMsUUFBZ0IsUUFBaEJBLFFBQWdCOztBQUNsQyxrQkFBb0NDLHNEQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5Q0FBRDtBQUFNLFFBQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFmLENBREosQ0FESixFQUlJLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUF0QixDQURKLENBSkosRUFPSSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxXQUFEO0FBQWEsZUFBVyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FQSixFQVVJLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFyQixDQURKLENBVkosQ0FESixFQWVJLE1BQUMsd0NBQUQ7QUFBSyxVQUFNLEVBQUUsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0QsVUFBVSxHQUFHLE1BQUMsK0RBQUQ7QUFBYSxpQkFBYSxFQUFFQyxhQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBbUQsTUFBQyw2REFBRDtBQUFXLGlCQUFhLEVBQUVBLGFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEbEUsQ0FESixFQUlJLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tILFFBREwsQ0FKSixFQU9JLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxRQUFJLEVBQUMsdUJBQVI7QUFBZ0MsVUFBTSxFQUFDLFFBQXZDO0FBQWdELE9BQUcsRUFBQyxxQkFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixDQVBKLENBZkosQ0FESjtBQTZCSCxDQS9CRDs7R0FBTUQsUzs7TUFBQUEsUztBQWlDTkEsU0FBUyxDQUFDSyxTQUFWLEdBQXNCO0FBQ2xCSixVQUFRLEVBQUdLLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEUixDQUF0QjtBQUllUix3RUFBZixFLENBRUE7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMTIyMDgyMmNjOWExMTc4NjVjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IElucHV0LCBNZW51LCBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUnO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG4vLyDstZzsoIHtmZTrpbwg7JyE7ZW0IHN0eWxlZC1jb21wb25lbnTroZwg7Iqk7YOA7J28IOygleydmFxyXG5jb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZChJbnB1dC5TZWFyY2gpYFxyXG52ZXJ0aWNhbC1hbGlnbiA6IG1pZGRsZTtcclxuYDtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbmNvbnN0IEFwcExheW91dCA9ICggeyBjaGlsZHJlbiB9ICkgPT4ge1xyXG4gICAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+64W465Oc67KE65OcPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj48YT7tlITroZztlYQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dCBlbnRlckJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PGE+7ZqM7JuQ6rCA7J6FPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXs4fT5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzTG9nZ2VkSW4gPyA8VXNlclByb2ZpbGUgc2V0SXNMb2dnZWRJbj17c2V0SXNMb2dnZWRJbn0gLz4gOiA8TG9naW5Gb3JtIHNldElzTG9nZ2VkSW49e3NldElzTG9nZ2VkSW59IC8+fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5hdmVyLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5NZWRlIGJ5IEtpbXNvb2luPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5BcHBMYXlvdXQucHJvdG90eXBlID0ge1xyXG4gICAgY2hpbGRyZW4gOiBwcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0XHJcblxyXG4vLyB1c2VDYWxsYmFja+ydgCDtlajsiJjrpbwg7LqQ7Iux7ZWY6rOgIHVzZU1lbW/ripQg6rCS7J2EIOy6kOyLse2VnOuLpC5cclxuLy8gX2JsYW5rIOyCrOyaqeyLnCDrs7TslYjsnYQg7ZmV7Iuk7ZWY6rKMIO2VmOq4sCDsnITtlbQgbm9yZWZlcnJlcuyZgCBub29wZW5lcuulvCDqvK0g66qF7Iuc7ZW07KO87Ja07JW8IO2VnOuLpC4iXSwic291cmNlUm9vdCI6IiJ9
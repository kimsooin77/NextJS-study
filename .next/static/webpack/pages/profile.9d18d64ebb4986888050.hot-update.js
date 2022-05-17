webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\kimsooin\\Desktop\\\uACF5\uBD80\uAE30\uB85D\\\uACF5\uBD80\uAE30\uB85D\\22.04 \uACF5\uBD80\uAE30\uB85D\\next-study\\front\\pages\\profile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Profile = function Profile() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOAD_FOLLOWERS_REQUEST"]
    });
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOAD_FOLLOWINGS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
    }
  }, [me && me.id]);

  if (!me) {
    return null;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "\uB0B4 \uD504\uB85C\uD544 ! Profile")), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    header: "\uD314\uB85C\uC789",
    data: me.Followings,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    header: "\uD314\uB85C\uC6CC",
    data: me.Followers,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  })));
};

_s(Profile, "6JQH4gyrtTxFm+X0oMPqKZSIfJs=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = Profile;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiaWQiLCJSb3V0ZXIiLCJwdXNoIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNFLHFCQUFhQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUF4QjtBQUFBLE1BQU9DLEVBQVAsZ0JBQU9BLEVBQVA7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUVkTixZQUFRLENBQUM7QUFDUE8sVUFBSSxFQUFHQyxxRUFBc0JBO0FBRHRCLEtBQUQsQ0FBUjtBQUdBUixZQUFRLENBQUM7QUFDUE8sVUFBSSxFQUFHRSxzRUFBdUJBO0FBRHZCLEtBQUQsQ0FBUjtBQUdELEdBUlEsRUFRUCxFQVJPLENBQVQ7QUFVQUgseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBRyxFQUFFRCxFQUFFLElBQUlBLEVBQUUsQ0FBQ0ssRUFBWCxDQUFILEVBQW1CO0FBQ2pCQyx3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsR0FKUSxFQUlQLENBQUNQLEVBQUUsSUFBSUEsRUFBRSxDQUFDSyxFQUFWLENBSk8sQ0FBVDs7QUFNQSxNQUFHLENBQUNMLEVBQUosRUFBUTtBQUNOLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FERixDQURGLEVBSUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDhEQUFEO0FBQVksVUFBTSxFQUFDLG9CQUFuQjtBQUF5QixRQUFJLEVBQUVBLEVBQUUsQ0FBQ1EsVUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyw4REFBRDtBQUFZLFVBQU0sRUFBQyxvQkFBbkI7QUFBeUIsUUFBSSxFQUFFUixFQUFFLENBQUNTLFNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQUpGLENBREY7QUFZSCxDQW5DRDs7R0FBTWYsTztVQUNhRSx1RCxFQUNGQyx1RDs7O0tBRlhILE87O0FBcURTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjlkMThkNjRlYmI0OTg2ODg4MDUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBOaWNrbmFtZUVkaXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybSc7XHJcbmltcG9ydCBGb2xsb3dMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRm9sbG93TGlzdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcbmltcG9ydCB7IExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIExPQURfRk9MTE9XSU5HU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuIFxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHttZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZSA6IExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZSA6IExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxyXG4gICAgICB9KVxyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYoIShtZSAmJiBtZS5pZCkpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9LFttZSAmJiBtZS5pZF0pO1xyXG5cclxuICAgIGlmKCFtZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT7rgrQg7ZSE66Gc7ZWEICEgUHJvZmlsZTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICA8Tmlja25hbWVFZGl0Rm9ybSAvPlxyXG4gICAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7J6JXCIgZGF0YT17bWUuRm9sbG93aW5nc30vPlxyXG4gICAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7JuMXCIgZGF0YT17bWUuRm9sbG93ZXJzfSAvPlxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcygoc3RvcmUpID0+IGFzeW5jICh7IHJlcSB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2dldFNlcnZlclNpZGVQcm9wcyBzdGFydCcpO1xyXG4gIGNvbnNvbGUubG9nKHJlcS5oZWFkZXJzKTtcclxuICBjb25zdCBjb29raWUgPSByZXEgPyByZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gIGlmIChyZXEgJiYgY29va2llKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICB9XHJcbiAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgfSk7XHJcbiAgc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBjb25zb2xlLmxvZygnZ2V0U2VydmVyU2lkZVByb3BzIGVuZCcpO1xyXG4gIGF3YWl0IHN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==
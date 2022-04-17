webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = {
  isLoggedIn: false,
  isLogginIn: false,
  // 로그인 시도중
  isLogginOut: false,
  // 로그아웃 시도중
  me: null,
  signUpDate: {},
  loginData: {}
};
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: 'LOG_IN_REQUEST',
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction(data) {
  return {
    type: 'LOG_OUT_REQUEST'
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLogginIn: true
      });

    case 'LOG_IN_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLogginIn: false,
        isLoggedIn: true,
        me: _objectSpread(_objectSpread({}, action.data), {}, {
          nickname: 'sooinkim'
        })
      });

    case 'LOG_IN_FAILURE':
      return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        isLoggedIn: false
      }, "isLoggedIn", false));

    case 'LOG_OUT_REQUEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLogginOut: true
      });

    case 'LOG_OUT_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLogginOut: false,
        isLoggedIn: false,
        me: null
      });

    case 'LOG_OUT_FAILURE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLogginOut: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2dlZEluIiwiaXNMb2dnaW5JbiIsImlzTG9nZ2luT3V0IiwibWUiLCJzaWduVXBEYXRlIiwibG9naW5EYXRhIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwibmlja25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztBQUN4QkMsWUFBVSxFQUFHLEtBRFc7QUFFeEJDLFlBQVUsRUFBRyxLQUZXO0FBRUo7QUFDcEJDLGFBQVcsRUFBRyxLQUhVO0FBR0g7QUFDckJDLElBQUUsRUFBRyxJQUptQjtBQUt4QkMsWUFBVSxFQUFHLEVBTFc7QUFNeEJDLFdBQVMsRUFBRztBQU5ZLENBQXJCO0FBU0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFELEVBQVU7QUFDeEMsU0FBTztBQUNIQyxRQUFJLEVBQUcsZ0JBREo7QUFFSEQsUUFBSSxFQUFKQTtBQUZHLEdBQVA7QUFJSCxDQUxNO0FBT0EsSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDRixJQUFELEVBQVU7QUFDekMsU0FBTztBQUNIQyxRQUFJLEVBQUc7QUFESixHQUFQO0FBR0gsQ0FKTTs7QUFNUCxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJaLFlBQXlCO0FBQUEsTUFBWGEsTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0ksU0FBSyxnQkFBTDtBQUNJLDZDQUNPRyxLQURQO0FBRUlWLGtCQUFVLEVBQUc7QUFGakI7O0FBSUosU0FBSyxnQkFBTDtBQUNJLDZDQUNPVSxLQURQO0FBRUlWLGtCQUFVLEVBQUcsS0FGakI7QUFHSUQsa0JBQVUsRUFBRyxJQUhqQjtBQUlJRyxVQUFFLGtDQUFPUyxNQUFNLENBQUNMLElBQWQ7QUFBb0JNLGtCQUFRLEVBQUc7QUFBL0I7QUFKTjs7QUFPSixTQUFLLGdCQUFMO0FBQ0ksNkNBQ09GLEtBRFA7QUFFSVgsa0JBQVUsRUFBRztBQUZqQix1QkFHaUIsS0FIakI7O0FBS0osU0FBSyxpQkFBTDtBQUNJLDZDQUNPVyxLQURQO0FBRUlULG1CQUFXLEVBQUc7QUFGbEI7O0FBSUosU0FBSyxpQkFBTDtBQUNJLDZDQUNPUyxLQURQO0FBRUlULG1CQUFXLEVBQUcsS0FGbEI7QUFHSUYsa0JBQVUsRUFBRyxLQUhqQjtBQUlJRyxVQUFFLEVBQUc7QUFKVDs7QUFNSixTQUFLLGlCQUFMO0FBQ0ksNkNBQ09RLEtBRFA7QUFFSVQsbUJBQVcsRUFBRztBQUZsQjs7QUFJSjtBQUNBLGFBQU9TLEtBQVA7QUF0Q0o7QUEwQ0gsQ0EzQ0Q7O0FBNkNlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjMyZTRlZGQwOTYzYzIyNDM5ODY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgaXNMb2dnZWRJbiA6IGZhbHNlLFxyXG4gICAgaXNMb2dnaW5JbiA6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBpc0xvZ2dpbk91dCA6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBtZSA6IG51bGwsXHJcbiAgICBzaWduVXBEYXRlIDoge30sXHJcbiAgICBsb2dpbkRhdGEgOiB7fSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiAnTE9HX0lOX1JFUVVFU1QnLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6ICdMT0dfT1VUX1JFUVVFU1QnLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdMT0dfSU5fUkVRVUVTVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luSW4gOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0xPR19JTl9TVUNDRVNTJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5JbiA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbiA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZSA6IHsuLi5hY3Rpb24uZGF0YSwgbmlja25hbWUgOiAnc29vaW5raW0nfSxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0xPR19JTl9GQUlMVVJFJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbiA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbiA6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0xPR19PVVRfUkVRVUVTVCcgOiBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5PdXQgOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVF9TVUNDRVNTJyA6IFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbk91dCA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbiA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWUgOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVF9GQUlMVVJFJyA6IFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbk91dCA6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=
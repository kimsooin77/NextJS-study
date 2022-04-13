webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");





var configureStore = function configureStore() {
  var middlewares = [];
  var enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, middlewares));
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], enhancer);
  return store;
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper); // action을 만들면 history(기록)으로 남는다.
// history가 쌓이면 메모리도 많이 잡아먹고 중앙데이터들이 어떻게 변하는지 보이기때문에
// 보안에도 취약할 수가 있다. 따라 첫번째는 배포용(devtools 연결X) 두번째는 개발용(devtools 연결O)
// compose(applyMiddleware([]))
// composeWithDevTools(applyMiddleware([]))
// 개발자 도구에서 redux를 들어가보면 로그인 로그아웃 기록이 history에 저장되어 확인가능하다.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekIsTUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFFBQ2ZDLFNBRGUsR0FFZkMsb0ZBQW1CLENBQUNDLHFEQUFlLE1BQWYsU0FBbUJKLFdBQW5CLENBQUQsQ0FGckI7QUFHQSxNQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGlEQUFELEVBQVVOLFFBQVYsQ0FBekI7QUFDQSxTQUFPSSxLQUFQO0FBQ0gsQ0FQRDs7QUFTQSxJQUFNRyxPQUFPLEdBQUdDLHdFQUFhLENBQUNWLGNBQUQsRUFBaUI7QUFDMUNXLE9BQUs7QUFEcUMsQ0FBakIsQ0FBN0I7QUFJZUYsc0VBQWYsRSxDQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjIzZGNiNzE1MjRiZGU5NWVmNzMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW107XHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgICBkZWJ1ZyA6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcblxyXG4vLyBhY3Rpb27snYQg66eM65Ok66m0IGhpc3Rvcnko6riw66GdKeycvOuhnCDrgqjripTri6QuXHJcblxyXG4vLyBoaXN0b3J56rCAIOyMk+ydtOuptCDrqZTrqqjrpqzrj4Qg66eO7J20IOyeoeyVhOuoueqzoCDspJHslZnrjbDsnbTthLDrk6TsnbQg7Ja065a76rKMIOuzgO2VmOuKlOyngCDrs7TsnbTquLDrlYzrrLjsl5BcclxuLy8g67O07JWI7JeQ64+EIOy3qOyVve2VoCDsiJjqsIAg7J6I64ukLiDrlLDrnbwg7LKr67KI7Ke464qUIOuwsO2PrOyaqShkZXZ0b29scyDsl7DqsrBYKSDrkZDrsojsp7jripQg6rCc67Cc7JqpKGRldnRvb2xzIOyXsOqysE8pXHJcbi8vIGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKFtdKSlcclxuLy8gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoW10pKVxyXG5cclxuLy8g6rCc67Cc7J6QIOuPhOq1rOyXkOyEnCByZWR1eOulvCDrk6TslrTqsIDrs7TrqbQg66Gc6re47J24IOuhnOq3uOyVhOybgyDquLDroZ3snbQgaGlzdG9yeeyXkCDsoIDsnqXrkJjslrQg7ZmV7J246rCA64ql7ZWY64ukLiJdLCJzb3VyY2VSb290IjoiIn0=
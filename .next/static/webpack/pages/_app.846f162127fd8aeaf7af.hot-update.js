webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);




function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
; // all은 배열 안에 있는 것을 모두 실행
// put은 dispatch와 같은 역할
// fork와 call의 차이점 : fork는 비동기 함수 호출이고 call은 동기 함수 호출
// 즉 fork로 호출하면 결과값이 다 받아와지지 않았음에도 불구하고 action을 실행하고
// call로 호출하면 결과값이 다 받아와진 이후에 action 실행(await 같은 역할)
// call(logInAPI, action.data) 오른쪽 코드와 같음 logInAPI(action.data)
// 간단하게 코드 대체가 가능한데 call과 yield와 같은 effect, 제너레이터를  사용하는 이유
// 에러가 났을 때 코드 한줄한줄 테스트해 볼 수 있기 때문에
// yield와 take는 딱 한번만 실행됨 따라서 while이나 takeEvery라는 effect을 써서 무한 반복되게 함
// while take는 동기적으로 동작하지만 takeEvery는 비동기로 동작한다는 차이가 있다.
// 보통 while은 직관적이지도 않고 코드상으로 보기도 좋지 않아 takeEvery를 주로 씀
// takeLatest란 실수로 로그인 버튼을 연속으로 누르거나 포스팅 버튼을 연속으로 누르거나와 같은 연속적인
// 액션이 일어날때 같은 로딩상태이면(이미 완료된 건 취소X) 앞의 액션은 무시되고 마지막 액션만 실행되게 하는 effect
// 이때 주의점은 프론트가 백엔드에 요청을 두번 했을 때 응답이 한번만 되는 것이지 요청이 한번만 들어오게 하는 것은 아니다.
// 결론 서버에는 데이터가 두 번 저장되는 것
// 따라서 위와 같이 요청이 두 번 서버에 저장되는걸 막기 위해 throttle을 사용한다.
// 예를 들어 throttle ("ADD_POST_REQUEST", addPost, 2000) 이면 2초 안에는 액션이 1번만 보내지도록 제한을 두는 것
// 보통 throttle은 특수한 경우에만 쓰고 takeLastest를 사용하고 백엔드에서 액션을 점검하는 편

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FLeUJBLFE7O0FBTHpCO0FBRUE7QUFDQTtBQUVlLFNBQVVBLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1gsaUJBQU1DLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ0MsNkNBQUQsQ0FERSxFQUVORCwrREFBSSxDQUFDRSw2Q0FBRCxDQUZFLENBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtkLEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44NDZmMTYyMTI3ZmQ4YWVhZjdhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthbGwsIGZvcmt9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgXSk7XHJcbn07XHJcblxyXG4vLyBhbGzsnYAg67Cw7Je0IOyViOyXkCDsnojripQg6rKD7J2EIOuqqOuRkCDsi6TtlolcclxuLy8gcHV07J2AIGRpc3BhdGNo7JmAIOqwmeydgCDsl63tlaBcclxuLy8gZm9ya+yZgCBjYWxs7J2YIOywqOydtOygkCA6IGZvcmvripQg67mE64+Z6riwIO2VqOyImCDtmLjstpzsnbTqs6AgY2FsbOydgCDrj5nquLAg7ZWo7IiYIO2YuOy2nFxyXG4vLyDspokgZm9ya+uhnCDtmLjstpztlZjrqbQg6rKw6rO86rCS7J20IOuLpCDrsJvslYTsmYDsp4Dsp4Ag7JWK7JWY7J2M7JeQ64+EIOu2iOq1rO2VmOqzoCBhY3Rpb27snYQg7Iuk7ZaJ7ZWY6rOgXHJcbi8vIGNhbGzroZwg7Zi47Lac7ZWY66m0IOqysOqzvOqwkuydtCDri6Qg67Cb7JWE7JmA7KeEIOydtO2bhOyXkCBhY3Rpb24g7Iuk7ZaJKGF3YWl0IOqwmeydgCDsl63tlaApXHJcbi8vIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKSDsmKTrpbjsqr0g7L2U65Oc7JmAIOqwmeydjCBsb2dJbkFQSShhY3Rpb24uZGF0YSlcclxuXHJcbi8vIOqwhOuLqO2VmOqyjCDsvZTrk5wg64yA7LK06rCAIOqwgOuKpe2VnOuNsCBjYWxs6rO8IHlpZWxk7JmAIOqwmeydgCBlZmZlY3QsIOygnOuEiOugiOydtO2EsOulvCAg7IKs7Jqp7ZWY64qUIOydtOycoFxyXG4vLyDsl5Drn6zqsIAg64Ks7J2EIOuVjCDsvZTrk5wg7ZWc7KSE7ZWc7KSEIO2FjOyKpO2KuO2VtCDrs7wg7IiYIOyeiOq4sCDrlYzrrLjsl5BcclxuXHJcbi8vIHlpZWxk7JmAIHRha2XripQg65SxIO2VnOuyiOunjCDsi6TtlonrkKgg65Sw65287IScIHdoaWxl7J2064KYIHRha2VFdmVyeeudvOuKlCBlZmZlY3TsnYQg7I2o7IScIOustO2VnCDrsJjrs7XrkJjqsowg7ZWoXHJcbi8vIHdoaWxlIHRha2XripQg64+Z6riw7KCB7Jy866GcIOuPmeyeke2VmOyngOunjCB0YWtlRXZlcnnripQg67mE64+Z6riw66GcIOuPmeyeke2VnOuLpOuKlCDssKjsnbTqsIAg7J6I64ukLlxyXG4vLyDrs7TthrUgd2hpbGXsnYAg7KeB6rSA7KCB7J207KeA64+EIOyViuqzoCDsvZTrk5zsg4HsnLzroZwg67O06riw64+EIOyii+yngCDslYrslYQgdGFrZUV2ZXJ566W8IOyjvOuhnCDslIBcclxuXHJcbi8vIHRha2VMYXRlc3TrnoAg7Iuk7IiY66GcIOuhnOq3uOyduCDrsoTtirzsnYQg7Jew7IaN7Jy866GcIOuIhOultOqxsOuCmCDtj6zsiqTtjIUg67KE7Yq87J2EIOyXsOyGjeycvOuhnCDriITrpbTqsbDrgpjsmYAg6rCZ7J2AIOyXsOyGjeyggeyduFxyXG4vLyDslaHshZjsnbQg7J287Ja064Kg65WMIOqwmeydgCDroZzrlKnsg4Htg5zsnbTrqbQo7J2066+4IOyZhOujjOuQnCDqsbQg7Leo7IaMWCkg7JWe7J2YIOyVoeyFmOydgCDrrLTsi5zrkJjqs6Ag66eI7KeA66eJIOyVoeyFmOunjCDsi6TtlonrkJjqsowg7ZWY64qUIGVmZmVjdFxyXG4vLyDsnbTrlYwg7KO87J2Y7KCQ7J2AIO2UhOuhoO2KuOqwgCDrsLHsl5Trk5zsl5Ag7JqU7LKt7J2EIOuRkOuyiCDtlojsnYQg65WMIOydkeuLteydtCDtlZzrsojrp4wg65CY64qUIOqyg+ydtOyngCDsmpTssq3snbQg7ZWc67KI66eMIOuTpOyWtOyYpOqyjCDtlZjripQg6rKD7J2AIOyVhOuLiOuLpC5cclxuLy8g6rKw66GgIOyEnOuyhOyXkOuKlCDrjbDsnbTthLDqsIAg65GQIOuyiCDsoIDsnqXrkJjripQg6rKDXHJcblxyXG4vLyDrlLDrnbzshJwg7JyE7JmAIOqwmeydtCDsmpTssq3snbQg65GQIOuyiCDshJzrsoTsl5Ag7KCA7J6l65CY64qU6rG4IOunieq4sCDsnITtlbQgdGhyb3R0bGXsnYQg7IKs7Jqp7ZWc64ukLlxyXG4vLyDsmIjrpbwg65Ok7Ja0IHRocm90dGxlIChcIkFERF9QT1NUX1JFUVVFU1RcIiwgYWRkUG9zdCwgMjAwMCkg7J2066m0IDLstIgg7JWI7JeQ64qUIOyVoeyFmOydtCAx67KI66eMIOuztOuCtOyngOuPhOuhnSDsoJztlZzsnYQg65GQ64qUIOqyg1xyXG4vLyDrs7TthrUgdGhyb3R0bGXsnYAg7Yq57IiY7ZWcIOqyveyasOyXkOunjCDsk7Dqs6AgdGFrZUxhc3Rlc3Trpbwg7IKs7Jqp7ZWY6rOgIOuwseyXlOuTnOyXkOyEnCDslaHshZjsnYQg7KCQ6rKA7ZWY64qUIO2OuCJdLCJzb3VyY2VSb290IjoiIn0=
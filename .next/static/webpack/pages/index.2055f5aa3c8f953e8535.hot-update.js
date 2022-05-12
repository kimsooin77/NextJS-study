webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\kimsooin\\Desktop\\\uACF5\uBD80\uAE30\uB85D\\\uACF5\uBD80\uAE30\uB85D\\22.04 \uACF5\uBD80\uAE30\uB85D\\next-study\\front\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePost = _useSelector2.hasMorePost,
      loadPostsLoading = _useSelector2.loadPostsLoading,
      retweetError = _useSelector2.retweetError;

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"])(),
      _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (inView && hasMorePost && !loadPostsLoading) {
      var _mainPosts;

      var lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_POSTS_REQUEST"],
        lastId: lastId
      });
    }
  }, [inView, hasMorePost, loadPostsLoading, mainPosts]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, me && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 20
    }
  }), mainPosts.map(function (post) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 38
      }
    });
  }), __jsx("div", {
    ref: hasMorePost && !loadPostsLoading ? ref : undefined,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }));
};

_s(Home, "Zl34ssldpaYPVKNbo50+3V+2huo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"]];
});

_c = Home;
// 서버사이드렌더링을 위한 준비 (Home보다 먼저 실행된다.)
// 서버사이드렌더링은 처음 렌더링 시 백엔드까지 한번에 갔다가 응답을 받아와 브라우저에서 요청을 두번 하지 않아도돼
// 초기 로딩 속도가 빨라지는 장점이 있다.
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RzTG9hZGluZyIsInJldHdlZXRFcnJvciIsInVzZUluVmlldyIsInJlZiIsImluVmlldyIsInVzZUVmZmVjdCIsImxhc3RJZCIsImxlbmd0aCIsImlkIiwidHlwZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsImFsZXJ0IiwibWFwIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUMsRUFBUixnQkFBUUEsRUFBUjs7QUFDQSxzQkFBbUVILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBQTlFO0FBQUEsTUFBUUMsU0FBUixpQkFBUUEsU0FBUjtBQUFBLE1BQW1CQyxXQUFuQixpQkFBbUJBLFdBQW5CO0FBQUEsTUFBZ0NDLGdCQUFoQyxpQkFBZ0NBLGdCQUFoQztBQUFBLE1BQWtEQyxZQUFsRCxpQkFBa0RBLFlBQWxEOztBQUNBLG1CQUFxQkMsNkVBQVMsRUFBOUI7QUFBQTtBQUFBLE1BQU9DLEdBQVA7QUFBQSxNQUFXQyxNQUFYOztBQUVBQyx5REFBUyxDQUNMLFlBQU07QUFDSixRQUFJRCxNQUFNLElBQUlMLFdBQVYsSUFBeUIsQ0FBQ0MsZ0JBQTlCLEVBQWdEO0FBQUE7O0FBQzlDLFVBQU1NLE1BQU0saUJBQUdSLFNBQVMsQ0FBQ0EsU0FBUyxDQUFDUyxNQUFWLEdBQW1CLENBQXBCLENBQVosK0NBQUcsV0FBaUNDLEVBQWhEO0FBQ0FqQixjQUFRLENBQUM7QUFDUGtCLFlBQUksRUFBRUMsaUVBREM7QUFFUEosY0FBTSxFQUFOQTtBQUZPLE9BQUQsQ0FBUjtBQUlEO0FBQ0YsR0FUSSxFQVNILENBQUNGLE1BQUQsRUFBU0wsV0FBVCxFQUFzQkMsZ0JBQXRCLEVBQXdDRixTQUF4QyxDQVRHLENBQVQ7QUFXQU8seURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR0osWUFBSCxFQUFpQjtBQUNiVSxXQUFLLENBQUNWLFlBQUQsQ0FBTDtBQUNIO0FBQ0osR0FKUSxFQUlQLENBQUNBLFlBQUQsQ0FKTyxDQUFUO0FBTUEsU0FDSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0wsRUFBRSxJQUFJLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURYLEVBRUtFLFNBQVMsQ0FBQ2MsR0FBVixDQUFjLFVBQUNmLElBQUQ7QUFBQSxXQUFVLE1BQUMsNERBQUQ7QUFBVSxTQUFHLEVBQUVBLElBQUksQ0FBQ1csRUFBcEI7QUFBd0IsVUFBSSxFQUFFWCxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVY7QUFBQSxHQUFkLENBRkwsRUFHSTtBQUFLLE9BQUcsRUFBRUUsV0FBVyxJQUFJLENBQUNDLGdCQUFoQixHQUFtQ0csR0FBbkMsR0FBeUNVLFNBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKO0FBT0gsQ0E5QkQ7O0dBQU12QixJO1VBQ2VFLHVELEVBQ0ZDLHVELEVBQ29EQSx1RCxFQUM5Q1MscUU7OztLQUpuQlosSTtBQW1ETjtBQUNBO0FBQ0E7O0FBRWVBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIwNTVmNWFhM2M4Zjk1M2U4NTM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEZvcm1cIjtcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpOyBcclxuICAgIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdCwgbG9hZFBvc3RzTG9hZGluZywgcmV0d2VldEVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpOyBcclxuICAgIGNvbnN0IFtyZWYsaW5WaWV3XSA9IHVzZUluVmlldygpO1xyXG5cclxuICAgIHVzZUVmZmVjdChcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaW5WaWV3ICYmIGhhc01vcmVQb3N0ICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0/LmlkO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgICAgIGxhc3RJZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxbaW5WaWV3LCBoYXNNb3JlUG9zdCwgbG9hZFBvc3RzTG9hZGluZywgbWFpblBvc3RzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihyZXR3ZWV0RXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQocmV0d2VldEVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtyZXR3ZWV0RXJyb3JdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICB7bWUgJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pfVxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17aGFzTW9yZVBvc3QgJiYgIWxvYWRQb3N0c0xvYWRpbmcgPyByZWYgOiB1bmRlZmluZWR9IC8+XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyggKHN0b3JlKSA9PiBhc3luYyAoe3JlcX0pID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZSA9IHJlcSA/IHJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnOyAvLyDsv6DtgqQg7KCV67O066W8IOuzgOyImOyXkCDsoIDsnqVcclxuICAgIGNvbnNvbGUubG9nKGNvb2tpZSk7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gICAgaWYocmVxICYmIGNvb2tpZSkge1xyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgfVxyXG4gICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGUgOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGUgOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKEVORCk7IC8vIOuUlOyKpO2MqOy5mOqwgCDshLHqs7XtlZjquLDquYzsp4Ag7Iuc6rCE7J2EIOuyjOyWtOyjvOq4sCDsnITtlbQg7KCB7JqpXHJcbiAgICBhd2FpdCBzdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuXHJcbn0pOyBcclxuXHJcbi8vIOyEnOuyhOyCrOydtOuTnOugjOuNlOungeydhCDsnITtlZwg7KSA67mEIChIb21l67O064ukIOuovOyggCDsi6TtlonrkJzri6QuKVxyXG4vLyDshJzrsoTsgqzsnbTrk5zroIzrjZTrp4HsnYAg7LKY7J2MIOugjOuNlOungSDsi5wg67Cx7JeU65Oc6rmM7KeAIO2VnOuyiOyXkCDqsJTri6TqsIAg7J2R64u17J2EIOuwm+yVhOyZgCDruIzrnbzsmrDsoIDsl5DshJwg7JqU7LKt7J2EIOuRkOuyiCDtlZjsp4Ag7JWK7JWE64+E64+8XHJcbi8vIOy0iOq4sCDroZzrlKkg7IaN64+E6rCAIOu5qOudvOyngOuKlCDsnqXsoJDsnbQg7J6I64ukLlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9
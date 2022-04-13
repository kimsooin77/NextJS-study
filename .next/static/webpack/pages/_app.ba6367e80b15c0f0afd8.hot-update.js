webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPosts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPosts", function() { return addPosts; });
var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      ninckname: "sooinkim"
    },
    content: "첫 번째 게시글 #next.js #coding",
    Images: [{
      src: "https://www.pinterest.co.kr/pin/453385887498683277/"
    }, {
      src: "https://www.pinterest.co.kr/pin/9288742973239063/"
    }, {
      src: "https://www.pinterest.co.kr/pin/658440408031578921/"
    }],
    Comments: [{
      User: {
        nickname: "fashion"
      },
      content: "첫번째 룩이 가장 마음에 들어요!"
    }, {
      User: {
        nickname: "strawberry"
      },
      content: "색감이 예쁘네요~"
    }]
  }],
  ImagePaths: [],
  postAdded: false
};
var ADD_POST = "ADD_POST";
var addPosts = {
  type: ADD_POST
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaW5ja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJuaWNrbmFtZSIsIkltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3RzIiwidHlwZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFlBQVksR0FBRztBQUN4QkMsV0FBUyxFQUFHLENBQUM7QUFDVEMsTUFBRSxFQUFHLENBREk7QUFFVEMsUUFBSSxFQUFHO0FBQ0hELFFBQUUsRUFBRyxDQURGO0FBRUhFLGVBQVMsRUFBRztBQUZULEtBRkU7QUFNVEMsV0FBTyxFQUFHLDJCQU5EO0FBT1RDLFVBQU0sRUFBRyxDQUFDO0FBQ05DLFNBQUcsRUFBRztBQURBLEtBQUQsRUFFTjtBQUNDQSxTQUFHLEVBQUc7QUFEUCxLQUZNLEVBSU47QUFDQ0EsU0FBRyxFQUFHO0FBRFAsS0FKTSxDQVBBO0FBY1RDLFlBQVEsRUFBRyxDQUFDO0FBQ1JMLFVBQUksRUFBRztBQUNITSxnQkFBUSxFQUFHO0FBRFIsT0FEQztBQUlSSixhQUFPLEVBQUc7QUFKRixLQUFELEVBS1I7QUFDQ0YsVUFBSSxFQUFHO0FBQ0hNLGdCQUFRLEVBQUc7QUFEUixPQURSO0FBSUNKLGFBQU8sRUFBRztBQUpYLEtBTFE7QUFkRixHQUFELENBRFk7QUEyQnhCSyxZQUFVLEVBQUcsRUEzQlc7QUE0QnhCQyxXQUFTLEVBQUc7QUE1QlksQ0FBckI7QUErQlAsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBRU8sSUFBTUMsUUFBUSxHQUFHO0FBQ3BCQyxNQUFJLEVBQUdGO0FBRGEsQ0FBakI7O0FBSVAsSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCaEIsWUFBeUI7QUFBQSxNQUFYaUIsTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDSCxJQUFmO0FBQ0k7QUFDQSxhQUFPRSxLQUFQO0FBRko7QUFLSCxDQU5EOztBQVFlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmJhNjM2N2U4MGIxNWMwZjBhZmQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzIDogW3tcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgVXNlciA6IHtcclxuICAgICAgICAgICAgaWQgOiAxLFxyXG4gICAgICAgICAgICBuaW5ja25hbWUgOiBcInNvb2lua2ltXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50IDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAjbmV4dC5qcyAjY29kaW5nXCIsXHJcbiAgICAgICAgSW1hZ2VzIDogW3tcclxuICAgICAgICAgICAgc3JjIDogXCJodHRwczovL3d3dy5waW50ZXJlc3QuY28ua3IvcGluLzQ1MzM4NTg4NzQ5ODY4MzI3Ny9cIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjIDogXCJodHRwczovL3d3dy5waW50ZXJlc3QuY28ua3IvcGluLzkyODg3NDI5NzMyMzkwNjMvXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYyA6IFwiaHR0cHM6Ly93d3cucGludGVyZXN0LmNvLmtyL3Bpbi82NTg0NDA0MDgwMzE1Nzg5MjEvXCJcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50cyA6IFt7XHJcbiAgICAgICAgICAgIFVzZXIgOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA6IFwiZmFzaGlvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50IDogXCLssqvrsojsp7gg66Op7J20IOqwgOyepSDrp4jsnYzsl5Ag65Ok7Ja07JqUIVwiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBVc2VyIDoge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWUgOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50IDogXCLsg4nqsJDsnbQg7JiI7IGY64Sk7JqUflwiXHJcbiAgICAgICAgfV1cclxuICAgIH1dLFxyXG4gICAgSW1hZ2VQYXRocyA6IFtdLFxyXG4gICAgcG9zdEFkZGVkIDogZmFsc2UsXHJcbn1cclxuXHJcbmNvbnN0IEFERF9QT1NUID0gXCJBRERfUE9TVFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RzID0ge1xyXG4gICAgdHlwZSA6IEFERF9QT1NUXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==
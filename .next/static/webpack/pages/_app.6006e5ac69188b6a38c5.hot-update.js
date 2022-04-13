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
var dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "kimsooin"
  },
  Images: [],
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaW5ja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJuaWNrbmFtZSIsIkltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3RzIiwidHlwZSIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFlBQVksR0FBRztBQUN4QkMsV0FBUyxFQUFHLENBQUM7QUFDVEMsTUFBRSxFQUFHLENBREk7QUFFVEMsUUFBSSxFQUFHO0FBQ0hELFFBQUUsRUFBRyxDQURGO0FBRUhFLGVBQVMsRUFBRztBQUZULEtBRkU7QUFNVEMsV0FBTyxFQUFHLDJCQU5EO0FBT1RDLFVBQU0sRUFBRyxDQUFDO0FBQ05DLFNBQUcsRUFBRztBQURBLEtBQUQsRUFFTjtBQUNDQSxTQUFHLEVBQUc7QUFEUCxLQUZNLEVBSU47QUFDQ0EsU0FBRyxFQUFHO0FBRFAsS0FKTSxDQVBBO0FBY1RDLFlBQVEsRUFBRyxDQUFDO0FBQ1JMLFVBQUksRUFBRztBQUNITSxnQkFBUSxFQUFHO0FBRFIsT0FEQztBQUlSSixhQUFPLEVBQUc7QUFKRixLQUFELEVBS1I7QUFDQ0YsVUFBSSxFQUFHO0FBQ0hNLGdCQUFRLEVBQUc7QUFEUixPQURSO0FBSUNKLGFBQU8sRUFBRztBQUpYLEtBTFE7QUFkRixHQUFELENBRFk7QUEyQnhCSyxZQUFVLEVBQUcsRUEzQlc7QUE0QnhCQyxXQUFTLEVBQUc7QUE1QlksQ0FBckI7QUErQlAsSUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBRU8sSUFBTUMsUUFBUSxHQUFHO0FBQ3BCQyxNQUFJLEVBQUdGO0FBRGEsQ0FBakI7QUFJUCxJQUFNRyxTQUFTLEdBQUc7QUFDZGIsSUFBRSxFQUFHLENBRFM7QUFFZEcsU0FBTyxFQUFHLFdBRkk7QUFHZEYsTUFBSSxFQUFHO0FBQ0hELE1BQUUsRUFBRyxDQURGO0FBRUhPLFlBQVEsRUFBRztBQUZSLEdBSE87QUFPZEgsUUFBTSxFQUFHLEVBUEs7QUFRZEUsVUFBUSxFQUFHO0FBUkcsQ0FBbEI7O0FBV0EsSUFBTVEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCakIsWUFBeUI7QUFBQSxNQUFYa0IsTUFBVzs7QUFDOUMsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0ksU0FBS0YsUUFBTDtBQUNBO0FBQ0EsYUFBT0ssS0FBUDtBQUhKO0FBTUgsQ0FQRDs7QUFTZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42MDA2ZTVhYzY5MTg4YjZhMzhjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0cyA6IFt7XHJcbiAgICAgICAgaWQgOiAxLFxyXG4gICAgICAgIFVzZXIgOiB7XHJcbiAgICAgICAgICAgIGlkIDogMSxcclxuICAgICAgICAgICAgbmluY2tuYW1lIDogXCJzb29pbmtpbVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudCA6IFwi7LKrIOuyiOynuCDqsozsi5zquIAgI25leHQuanMgI2NvZGluZ1wiLFxyXG4gICAgICAgIEltYWdlcyA6IFt7XHJcbiAgICAgICAgICAgIHNyYyA6IFwiaHR0cHM6Ly93d3cucGludGVyZXN0LmNvLmtyL3Bpbi80NTMzODU4ODc0OTg2ODMyNzcvXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYyA6IFwiaHR0cHM6Ly93d3cucGludGVyZXN0LmNvLmtyL3Bpbi85Mjg4NzQyOTczMjM5MDYzL1wiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzcmMgOiBcImh0dHBzOi8vd3d3LnBpbnRlcmVzdC5jby5rci9waW4vNjU4NDQwNDA4MDMxNTc4OTIxL1wiXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHMgOiBbe1xyXG4gICAgICAgICAgICBVc2VyIDoge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWUgOiBcImZhc2hpb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudCA6IFwi7LKr67KI7Ke4IOujqeydtCDqsIDsnqUg66eI7J2M7JeQIOuTpOyWtOyalCFcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgVXNlciA6IHtcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lIDogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudCA6IFwi7IOJ6rCQ7J20IOyYiOyBmOuEpOyalH5cIlxyXG4gICAgICAgIH1dXHJcbiAgICB9XSxcclxuICAgIEltYWdlUGF0aHMgOiBbXSxcclxuICAgIHBvc3RBZGRlZCA6IGZhbHNlLFxyXG59XHJcblxyXG5jb25zdCBBRERfUE9TVCA9IFwiQUREX1BPU1RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0cyA9IHtcclxuICAgIHR5cGUgOiBBRERfUE9TVCxcclxufVxyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0ge1xyXG4gICAgaWQgOiAyLFxyXG4gICAgY29udGVudCA6IFwi642U66+4642w7J207YSw7J6F64uI64ukLlwiLFxyXG4gICAgVXNlciA6IHtcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgbmlja25hbWUgOiBcImtpbXNvb2luXCJcclxuICAgIH0sXHJcbiAgICBJbWFnZXMgOiBbXSxcclxuICAgIENvbW1lbnRzIDogW10sXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1QgOlxyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPosts, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPosts", function() { return addPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "sooinkim"
    },
    content: "첫 번째 게시글 #next.js #coding",
    Images: [{
      src: 'https://i.pinimg.com/564x/09/43/f1/0943f1f3a3badf9b03b19e01f84e6810.jpg'
    }, {
      src: 'https://i.pinimg.com/236x/08/fb/db/08fbdbb51fdf1148ce6a67d2fe6c22f2.jpg'
    }, {
      src: 'https://i.pinimg.com/236x/00/8e/35/008e3564d0892d94a5e34a980b25ef9b.jpg'
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
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null
};
var ADD_POST_REQUEST = "ADD_POST_REQUEST";
var ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
var ADD_POST_FALURE = "ADD_POST_FALURE";
var ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
var ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
var ADD_COMMENT_FALURE = "ADD_COMMENT_FALURE";
var addPosts = function addPosts(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
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
    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        // dummyPost를 앞에 추가해야지 게시글이 위로 쌓임
        addPostDone: true
      });

    case ADD_POST_FALURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostDone: false,
        addPostError: action.error
      });

    case ADD_COMMENT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });

    case ADD_COMMENT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentDone: true
      });

    case ADD_COMMENT_FALURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentDone: false,
        addCommentError: action.error
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBTFVSRSIsImFkZFBvc3RzIiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztBQUN4QkMsV0FBUyxFQUFHLENBQUM7QUFDVEMsTUFBRSxFQUFHLENBREk7QUFFVEMsUUFBSSxFQUFHO0FBQ0hELFFBQUUsRUFBRyxDQURGO0FBRUhFLGNBQVEsRUFBRztBQUZSLEtBRkU7QUFNVEMsV0FBTyxFQUFHLDJCQU5EO0FBT1RDLFVBQU0sRUFBRyxDQUFDO0FBQ05DLFNBQUcsRUFBRztBQURBLEtBQUQsRUFFTjtBQUNDQSxTQUFHLEVBQUc7QUFEUCxLQUZNLEVBSU47QUFDQ0EsU0FBRyxFQUFHO0FBRFAsS0FKTSxDQVBBO0FBY1RDLFlBQVEsRUFBRyxDQUFFO0FBQ1RMLFVBQUksRUFBRztBQUNIQyxnQkFBUSxFQUFHO0FBRFIsT0FERTtBQUlUQyxhQUFPLEVBQUc7QUFKRCxLQUFGLEVBS1I7QUFDQ0YsVUFBSSxFQUFHO0FBQ0hDLGdCQUFRLEVBQUc7QUFEUixPQURSO0FBSUNDLGFBQU8sRUFBRztBQUpYLEtBTFE7QUFkRixHQUFELENBRFk7QUEyQnhCSSxZQUFVLEVBQUcsRUEzQlc7QUE0QnhCQyxnQkFBYyxFQUFHLEtBNUJPO0FBNkJ4QkMsYUFBVyxFQUFHLEtBN0JVO0FBOEJ4QkMsY0FBWSxFQUFHO0FBOUJTLENBQXJCO0FBaUNQLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFFTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUEsU0FBVTtBQUM5QkMsUUFBSSxFQUFHUixnQkFEdUI7QUFFOUJPLFFBQUksRUFBSkE7QUFGOEIsR0FBVjtBQUFBLENBQWpCO0FBS0EsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0YsSUFBRDtBQUFBLFNBQVU7QUFDaENDLFFBQUksRUFBR0wsbUJBRHlCO0FBRWhDSSxRQUFJLEVBQUpBO0FBRmdDLEdBQVY7QUFBQSxDQUFuQjtBQUtQLElBQU1HLFNBQVMsR0FBRztBQUNkckIsSUFBRSxFQUFHLENBRFM7QUFFZEcsU0FBTyxFQUFHLFdBRkk7QUFHZEYsTUFBSSxFQUFHO0FBQ0hELE1BQUUsRUFBRyxDQURGO0FBRUhFLFlBQVEsRUFBRztBQUZSLEdBSE87QUFPZEUsUUFBTSxFQUFHLEVBUEs7QUFRZEUsVUFBUSxFQUFHO0FBUkcsQ0FBbEI7O0FBV0EsSUFBTWdCLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QnpCLFlBQXlCO0FBQUEsTUFBWDBCLE1BQVc7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0wsSUFBZjtBQUNJLFNBQUtQLGdCQUFMO0FBQ0ksNkNBQ09XLEtBRFA7QUFFSWYsc0JBQWMsRUFBRyxJQUZyQjtBQUdJQyxtQkFBVyxFQUFHLEtBSGxCO0FBSUlDLG9CQUFZLEVBQUc7QUFKbkI7O0FBTUosU0FBS0UsZ0JBQUw7QUFDSSw2Q0FDT1csS0FEUDtBQUVJZixzQkFBYyxFQUFHLEtBRnJCO0FBR0lULGlCQUFTLEdBQUlzQixTQUFKLHNHQUFrQkUsS0FBSyxDQUFDeEIsU0FBeEIsRUFIYjtBQUdpRDtBQUM3Q1UsbUJBQVcsRUFBRztBQUpsQjs7QUFNSixTQUFLSSxlQUFMO0FBQ0ksNkNBQ09VLEtBRFA7QUFFSWYsc0JBQWMsRUFBRyxLQUZyQjtBQUdJQyxtQkFBVyxFQUFHLEtBSGxCO0FBSUlDLG9CQUFZLEVBQUdjLE1BQU0sQ0FBQ0M7QUFKMUI7O0FBTUosU0FBS1YsbUJBQUw7QUFDSSw2Q0FDT1EsS0FEUDtBQUVJRyx5QkFBaUIsRUFBRyxJQUZ4QjtBQUdJQyxzQkFBYyxFQUFHLEtBSHJCO0FBSUlDLHVCQUFlLEVBQUc7QUFKdEI7O0FBTUosU0FBS2IsbUJBQUw7QUFDSSw2Q0FDT1EsS0FEUDtBQUVJRyx5QkFBaUIsRUFBRyxLQUZ4QjtBQUdJQyxzQkFBYyxFQUFHO0FBSHJCOztBQUtKLFNBQUtYLGtCQUFMO0FBQ0ksNkNBQ09PLEtBRFA7QUFFSUcseUJBQWlCLEVBQUcsS0FGeEI7QUFHSUMsc0JBQWMsRUFBRyxLQUhyQjtBQUlJQyx1QkFBZSxFQUFHSixNQUFNLENBQUNDO0FBSjdCOztBQU1KO0FBQ0EsYUFBT0YsS0FBUDtBQTNDSjtBQThDSCxDQS9DRDs7QUFpRGVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAxNjM0ODQ4MzU1NDM4ZjJkMjMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzIDogW3tcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgVXNlciA6IHtcclxuICAgICAgICAgICAgaWQgOiAxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZSA6IFwic29vaW5raW1cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQgOiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAICNuZXh0LmpzICNjb2RpbmdcIixcclxuICAgICAgICBJbWFnZXMgOiBbe1xyXG4gICAgICAgICAgICBzcmMgOiAnaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC8wOS80My9mMS8wOTQzZjFmM2EzYmFkZjliMDNiMTllMDFmODRlNjgxMC5qcGcnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzcmMgOiAnaHR0cHM6Ly9pLnBpbmltZy5jb20vMjM2eC8wOC9mYi9kYi8wOGZiZGJiNTFmZGYxMTQ4Y2U2YTY3ZDJmZTZjMjJmMi5qcGcnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzcmMgOiAnaHR0cHM6Ly9pLnBpbmltZy5jb20vMjM2eC8wMC84ZS8zNS8wMDhlMzU2NGQwODkyZDk0YTVlMzRhOTgwYjI1ZWY5Yi5qcGcnXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHMgOiBbIHtcclxuICAgICAgICAgICAgVXNlciA6IHtcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lIDogXCJmYXNoaW9uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIuyyq+uyiOynuCDro6nsnbQg6rCA7J6lIOuniOydjOyXkCDrk6TslrTsmpQhXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFVzZXIgOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIuyDieqwkOydtCDsmIjsgZjrhKTsmpR+XCJcclxuICAgICAgICB9XVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzIDogW10sXHJcbiAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvciA6IG51bGwsXHJcbn1cclxuXHJcbmNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5jb25zdCBBRERfUE9TVF9GQUxVUkUgPSBcIkFERF9QT1NUX0ZBTFVSRVwiO1xyXG5cclxuY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5jb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XHJcbmNvbnN0IEFERF9DT01NRU5UX0ZBTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdHMgPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZSA6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+KHtcclxuICAgIHR5cGUgOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSB7XHJcbiAgICBpZCA6IDIsXHJcbiAgICBjb250ZW50IDogXCLrjZTrr7jrjbDsnbTthLDsnoXri4jri6QuXCIsXHJcbiAgICBVc2VyIDoge1xyXG4gICAgICAgIGlkIDogMSxcclxuICAgICAgICBuaWNrbmFtZSA6IFwia2ltc29vaW5cIlxyXG4gICAgfSxcclxuICAgIEltYWdlcyA6IFtdLFxyXG4gICAgQ29tbWVudHMgOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUyA6IFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTIDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0cyA6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sIC8vIGR1bW15UG9zdOulvCDslZ7sl5Ag7LaU6rCA7ZW07JW87KeAIOqyjOyLnOq4gOydtCDsnITroZwg7IyT7J6EXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZSA6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX0ZBTFVSRSA6IFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvciA6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUyA6IFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZyA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudEVycm9yIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTIDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lIDogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFMVVJFIDogXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudEVycm9yIDogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9
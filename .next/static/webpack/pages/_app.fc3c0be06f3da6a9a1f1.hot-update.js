webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FALURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FALURE, addPosts, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FALURE", function() { return ADD_POST_FALURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FALURE", function() { return ADD_COMMENT_FALURE; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBTFVSRSIsImFkZFBvc3RzIiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztBQUN4QkMsV0FBUyxFQUFHLENBQUM7QUFDVEMsTUFBRSxFQUFHLENBREk7QUFFVEMsUUFBSSxFQUFHO0FBQ0hELFFBQUUsRUFBRyxDQURGO0FBRUhFLGNBQVEsRUFBRztBQUZSLEtBRkU7QUFNVEMsV0FBTyxFQUFHLDJCQU5EO0FBT1RDLFVBQU0sRUFBRyxDQUFDO0FBQ05DLFNBQUcsRUFBRztBQURBLEtBQUQsRUFFTjtBQUNDQSxTQUFHLEVBQUc7QUFEUCxLQUZNLEVBSU47QUFDQ0EsU0FBRyxFQUFHO0FBRFAsS0FKTSxDQVBBO0FBY1RDLFlBQVEsRUFBRyxDQUFFO0FBQ1RMLFVBQUksRUFBRztBQUNIQyxnQkFBUSxFQUFHO0FBRFIsT0FERTtBQUlUQyxhQUFPLEVBQUc7QUFKRCxLQUFGLEVBS1I7QUFDQ0YsVUFBSSxFQUFHO0FBQ0hDLGdCQUFRLEVBQUc7QUFEUixPQURSO0FBSUNDLGFBQU8sRUFBRztBQUpYLEtBTFE7QUFkRixHQUFELENBRFk7QUEyQnhCSSxZQUFVLEVBQUcsRUEzQlc7QUE0QnhCQyxnQkFBYyxFQUFHLEtBNUJPO0FBNkJ4QkMsYUFBVyxFQUFHLEtBN0JVO0FBOEJ4QkMsY0FBWSxFQUFHO0FBOUJTLENBQXJCO0FBaUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUEsU0FBVTtBQUM5QkMsUUFBSSxFQUFHUixnQkFEdUI7QUFFOUJPLFFBQUksRUFBSkE7QUFGOEIsR0FBVjtBQUFBLENBQWpCO0FBS0EsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0YsSUFBRDtBQUFBLFNBQVU7QUFDaENDLFFBQUksRUFBR0wsbUJBRHlCO0FBRWhDSSxRQUFJLEVBQUpBO0FBRmdDLEdBQVY7QUFBQSxDQUFuQjtBQUtQLElBQU1HLFNBQVMsR0FBRztBQUNkckIsSUFBRSxFQUFHLENBRFM7QUFFZEcsU0FBTyxFQUFHLFdBRkk7QUFHZEYsTUFBSSxFQUFHO0FBQ0hELE1BQUUsRUFBRyxDQURGO0FBRUhFLFlBQVEsRUFBRztBQUZSLEdBSE87QUFPZEUsUUFBTSxFQUFHLEVBUEs7QUFRZEUsVUFBUSxFQUFHO0FBUkcsQ0FBbEI7O0FBV0EsSUFBTWdCLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QnpCLFlBQXlCO0FBQUEsTUFBWDBCLE1BQVc7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0wsSUFBZjtBQUNJLFNBQUtQLGdCQUFMO0FBQ0ksNkNBQ09XLEtBRFA7QUFFSWYsc0JBQWMsRUFBRyxJQUZyQjtBQUdJQyxtQkFBVyxFQUFHLEtBSGxCO0FBSUlDLG9CQUFZLEVBQUc7QUFKbkI7O0FBTUosU0FBS0UsZ0JBQUw7QUFDSSw2Q0FDT1csS0FEUDtBQUVJZixzQkFBYyxFQUFHLEtBRnJCO0FBR0lULGlCQUFTLEdBQUlzQixTQUFKLHNHQUFrQkUsS0FBSyxDQUFDeEIsU0FBeEIsRUFIYjtBQUdpRDtBQUM3Q1UsbUJBQVcsRUFBRztBQUpsQjs7QUFNSixTQUFLSSxlQUFMO0FBQ0ksNkNBQ09VLEtBRFA7QUFFSWYsc0JBQWMsRUFBRyxLQUZyQjtBQUdJQyxtQkFBVyxFQUFHLEtBSGxCO0FBSUlDLG9CQUFZLEVBQUdjLE1BQU0sQ0FBQ0M7QUFKMUI7O0FBTUosU0FBS1YsbUJBQUw7QUFDSSw2Q0FDT1EsS0FEUDtBQUVJRyx5QkFBaUIsRUFBRyxJQUZ4QjtBQUdJQyxzQkFBYyxFQUFHLEtBSHJCO0FBSUlDLHVCQUFlLEVBQUc7QUFKdEI7O0FBTUosU0FBS2IsbUJBQUw7QUFDSSw2Q0FDT1EsS0FEUDtBQUVJRyx5QkFBaUIsRUFBRyxLQUZ4QjtBQUdJQyxzQkFBYyxFQUFHO0FBSHJCOztBQUtKLFNBQUtYLGtCQUFMO0FBQ0ksNkNBQ09PLEtBRFA7QUFFSUcseUJBQWlCLEVBQUcsS0FGeEI7QUFHSUMsc0JBQWMsRUFBRyxLQUhyQjtBQUlJQyx1QkFBZSxFQUFHSixNQUFNLENBQUNDO0FBSjdCOztBQU1KO0FBQ0EsYUFBT0YsS0FBUDtBQTNDSjtBQThDSCxDQS9DRDs7QUFpRGVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmMzYzBiZTA2ZjNkYTZhOWExZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHMgOiBbe1xyXG4gICAgICAgIGlkIDogMSxcclxuICAgICAgICBVc2VyIDoge1xyXG4gICAgICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lIDogXCJzb29pbmtpbVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudCA6IFwi7LKrIOuyiOynuCDqsozsi5zquIAgI25leHQuanMgI2NvZGluZ1wiLFxyXG4gICAgICAgIEltYWdlcyA6IFt7XHJcbiAgICAgICAgICAgIHNyYyA6ICdodHRwczovL2kucGluaW1nLmNvbS81NjR4LzA5LzQzL2YxLzA5NDNmMWYzYTNiYWRmOWIwM2IxOWUwMWY4NGU2ODEwLmpwZydcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYyA6ICdodHRwczovL2kucGluaW1nLmNvbS8yMzZ4LzA4L2ZiL2RiLzA4ZmJkYmI1MWZkZjExNDhjZTZhNjdkMmZlNmMyMmYyLmpwZydcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYyA6ICdodHRwczovL2kucGluaW1nLmNvbS8yMzZ4LzAwLzhlLzM1LzAwOGUzNTY0ZDA4OTJkOTRhNWUzNGE5ODBiMjVlZjliLmpwZydcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50cyA6IFsge1xyXG4gICAgICAgICAgICBVc2VyIDoge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWUgOiBcImZhc2hpb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudCA6IFwi7LKr67KI7Ke4IOujqeydtCDqsIDsnqUg66eI7J2M7JeQIOuTpOyWtOyalCFcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgVXNlciA6IHtcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lIDogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudCA6IFwi7IOJ6rCQ7J20IOyYiOyBmOuEpOyalH5cIlxyXG4gICAgICAgIH1dXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aHMgOiBbXSxcclxuICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yIDogbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBTFVSRSA9IFwiQUREX1BPU1RfRkFMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFMVVJFID0gXCJBRERfQ09NTUVOVF9GQUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0cyA9IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlIDogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZSA6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICAgIGlkIDogMixcclxuICAgIGNvbnRlbnQgOiBcIuuNlOuvuOuNsOydtO2EsOyeheuLiOuLpC5cIixcclxuICAgIFVzZXIgOiB7XHJcbiAgICAgICAgaWQgOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lIDogXCJraW1zb29pblwiXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzIDogW10sXHJcbiAgICBDb21tZW50cyA6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTIDogXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3IgOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1MgOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzIDogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSwgLy8gZHVtbXlQb3N066W8IOyVnuyXkCDstpTqsIDtlbTslbzsp4Ag6rKM7Iuc6riA7J20IOychOuhnCDsjJPsnoRcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lIDogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfRkFMVVJFIDogXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yIDogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTIDogXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3IgOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1MgOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmUgOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUxVUkUgOiBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3IgOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=
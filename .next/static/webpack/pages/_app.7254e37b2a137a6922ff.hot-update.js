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
  postAdded: false
};
var ADD_POST_REQUEST = "ADD_POST_REQUEST";
var ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
var ADD_POST_FALURE = "ADD_POST_FALURE";
var addPosts = function addPosts(data) {
  return {
    type: ADD_POST_REQUEST,
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
    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        // dummyPost를 앞에 추가해야지 게시글이 위로 쌓임
        postAdded: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBTFVSRSIsImFkZFBvc3RzIiwiZGF0YSIsInR5cGUiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRyxDQUFDO0FBQ1RDLE1BQUUsRUFBRyxDQURJO0FBRVRDLFFBQUksRUFBRztBQUNIRCxRQUFFLEVBQUcsQ0FERjtBQUVIRSxjQUFRLEVBQUc7QUFGUixLQUZFO0FBTVRDLFdBQU8sRUFBRywyQkFORDtBQU9UQyxVQUFNLEVBQUcsQ0FBQztBQUNOQyxTQUFHLEVBQUc7QUFEQSxLQUFELEVBRU47QUFDQ0EsU0FBRyxFQUFHO0FBRFAsS0FGTSxFQUlOO0FBQ0NBLFNBQUcsRUFBRztBQURQLEtBSk0sQ0FQQTtBQWNUQyxZQUFRLEVBQUcsQ0FBRTtBQUNUTCxVQUFJLEVBQUc7QUFDSEMsZ0JBQVEsRUFBRztBQURSLE9BREU7QUFJVEMsYUFBTyxFQUFHO0FBSkQsS0FBRixFQUtSO0FBQ0NGLFVBQUksRUFBRztBQUNIQyxnQkFBUSxFQUFHO0FBRFIsT0FEUjtBQUlDQyxhQUFPLEVBQUc7QUFKWCxLQUxRO0FBZEYsR0FBRCxDQURZO0FBMkJ4QkksWUFBVSxFQUFHLEVBM0JXO0FBNEJ4QkMsV0FBUyxFQUFHO0FBNUJZLENBQXJCO0FBK0JQLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUEsU0FBVTtBQUM5QkMsUUFBSSxFQUFHTCxnQkFEdUI7QUFFOUJJLFFBQUksRUFBSkE7QUFGOEIsR0FBVjtBQUFBLENBQWpCO0FBS1AsSUFBTUUsU0FBUyxHQUFHO0FBQ2RmLElBQUUsRUFBRyxDQURTO0FBRWRHLFNBQU8sRUFBRyxXQUZJO0FBR2RGLE1BQUksRUFBRztBQUNIRCxNQUFFLEVBQUcsQ0FERjtBQUVIRSxZQUFRLEVBQUc7QUFGUixHQUhPO0FBT2RFLFFBQU0sRUFBRyxFQVBLO0FBUWRFLFVBQVEsRUFBRztBQVJHLENBQWxCOztBQVdBLElBQU1VLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6Qm5CLFlBQXlCO0FBQUEsTUFBWG9CLE1BQVc7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0osSUFBZjtBQUNJLFNBQUtMLGdCQUFMO0FBQ0ksNkNBQ09RLEtBRFA7QUFFSWxCLGlCQUFTLEdBQUlnQixTQUFKLHNHQUFrQkUsS0FBSyxDQUFDbEIsU0FBeEIsRUFGYjtBQUVpRDtBQUM3Q1MsaUJBQVMsRUFBRztBQUhoQjs7QUFLSjtBQUNBLGFBQU9TLEtBQVA7QUFSSjtBQVdILENBWkQ7O0FBY2VELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzI1NGUzN2IyYTEzN2E2OTIyZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHMgOiBbe1xyXG4gICAgICAgIGlkIDogMSxcclxuICAgICAgICBVc2VyIDoge1xyXG4gICAgICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lIDogXCJzb29pbmtpbVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudCA6IFwi7LKrIOuyiOynuCDqsozsi5zquIAgI25leHQuanMgI2NvZGluZ1wiLFxyXG4gICAgICAgIEltYWdlcyA6IFt7XHJcbiAgICAgICAgICAgIHNyYyA6ICdodHRwczovL2kucGluaW1nLmNvbS81NjR4LzA5LzQzL2YxLzA5NDNmMWYzYTNiYWRmOWIwM2IxOWUwMWY4NGU2ODEwLmpwZydcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYyA6ICdodHRwczovL2kucGluaW1nLmNvbS8yMzZ4LzA4L2ZiL2RiLzA4ZmJkYmI1MWZkZjExNDhjZTZhNjdkMmZlNmMyMmYyLmpwZydcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYyA6ICdodHRwczovL2kucGluaW1nLmNvbS8yMzZ4LzAwLzhlLzM1LzAwOGUzNTY0ZDA4OTJkOTRhNWUzNGE5ODBiMjVlZjliLmpwZydcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50cyA6IFsge1xyXG4gICAgICAgICAgICBVc2VyIDoge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWUgOiBcImZhc2hpb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudCA6IFwi7LKr67KI7Ke4IOujqeydtCDqsIDsnqUg66eI7J2M7JeQIOuTpOyWtOyalCFcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgVXNlciA6IHtcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lIDogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudCA6IFwi7IOJ6rCQ7J20IOyYiOyBmOuEpOyalH5cIlxyXG4gICAgICAgIH1dXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aHMgOiBbXSxcclxuICAgIHBvc3RBZGRlZCA6IGZhbHNlLFxyXG59XHJcblxyXG5jb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuY29uc3QgQUREX1BPU1RfRkFMVVJFID0gXCJBRERfUE9TVF9GQUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0cyA9IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlIDogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0ge1xyXG4gICAgaWQgOiAyLFxyXG4gICAgY29udGVudCA6IFwi642U66+4642w7J207YSw7J6F64uI64ukLlwiLFxyXG4gICAgVXNlciA6IHtcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgbmlja25hbWUgOiBcImtpbXNvb2luXCJcclxuICAgIH0sXHJcbiAgICBJbWFnZXMgOiBbXSxcclxuICAgIENvbW1lbnRzIDogW10sXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1QgOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHMgOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLCAvLyBkdW1teVBvc3Trpbwg7JWe7JeQIOy2lOqwgO2VtOyVvOyngCDqsozsi5zquIDsnbQg7JyE66GcIOyMk+yehFxyXG4gICAgICAgICAgICAgICAgcG9zdEFkZGVkIDogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "sooinkim"
    },
    content: "첫 번째 게시글 #next.js #coding",
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://i.pinimg.com/564x/09/43/f1/0943f1f3a3badf9b03b19e01f84e6810.jpg'
    }, {
      src: 'https://i.pinimg.com/236x/08/fb/db/08fbdbb51fdf1148ce6a67d2fe6c22f2.jpg'
    }, {
      src: 'https://i.pinimg.com/236x/00/8e/35/008e3564d0892d94a5e34a980b25ef9b.jpg'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: "fashion"
      },
      content: "첫번째 룩이 가장 마음에 들어요!"
    }, {
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: "strawberry"
      },
      content: "색감이 예쁘네요~"
    }]
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null
};
initialState.mainPosts = initialState.mainPosts.concat(Array(20).fill().map(function () {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
    Images: [{
      src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
    }],
    Comments: [{
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
    }]
  };
}));
var ADD_POST_REQUEST = "ADD_POST_REQUEST";
var ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
var ADD_POST_FAILURE = "ADD_POST_FAILURE";
var ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
var ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
var ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
var REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
var REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
var REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
var addPost = function addPost(data) {
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

var dummyPost = function dummyPost(data) {
  return {
    id: data.id,
    content: data.content,
    User: {
      id: 1,
      nickname: "kimsooin"
    },
    Images: [],
    Comments: []
  };
};

var dummyComment = function dummyComment(data) {
  return {
    id: data.id,
    content: data.content,
    User: {
      id: 1,
      nickname: "kimsooin"
    }
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.mainPosts.unshift(dummyPost(action.data)); // dummyPost를 앞에 추가해야지 게시글이 위로 쌓임;

        draft.addPostDone = true;
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostDone = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        });
        draft.removePostDone = true;
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostDone = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.postId;
          });
          post.Comments.unshift(dummyComment(action.data.content));
          draft.addCommentLoading = false;
          draft.addcommentd = true;
          break; // 불변성을 지키기 위해 아래와 같이 작성했던 코드를 immer를 사용하면 위의 코드로 정리 가능
          // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
          // const post = {...state.mainPosts[postIndex]};
          // post.Comments = [dummyComment(action.data.content), ...post.Comments];
          // const mainPosts = [...state.mainPosts];
          // mainPosts[postIndex] = post;
          // return {
          //     ...state,
          //     mainPosts,
          //     addCommentLoading : false,
          //     addCommentDone : true,
          // };
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentDone = false;
        draft.addCommentError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer); // 불변성을 위해 immer 사용(알아서 불변성을 유지해줌)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJjb25jYXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImxvcmVtIiwicGFyYWdyYXBoIiwiaW1hZ2UiLCJzZW50ZW5jZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwicG9zdCIsImZpbmQiLCJwb3N0SWQiLCJhZGRjb21tZW50ZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUFDQWdDLGFBQUssQ0FBQy9CLGVBQU4sR0FBd0I2QixNQUFNLENBQUNJLEtBQS9CO0FBQ0E7O0FBQ0osV0FBS2xCLG1CQUFMO0FBQ0lnQixhQUFLLENBQUNwQyxpQkFBTixHQUEwQixJQUExQjtBQUNBb0MsYUFBSyxDQUFDbkMsY0FBTixHQUF1QixLQUF2QjtBQUNBbUMsYUFBSyxDQUFDbEMsZUFBTixHQUF3QixJQUF4QjtBQUNBOztBQUNKLFdBQUttQixtQkFBTDtBQUEyQjtBQUN2QixjQUFNb0IsSUFBSSxHQUFHTCxLQUFLLENBQUNsRCxTQUFOLENBQWdCd0QsSUFBaEIsQ0FBcUIsVUFBQ0YsQ0FBRDtBQUFBLG1CQUFPQSxDQUFDLENBQUNyRCxFQUFGLEtBQVMrQyxNQUFNLENBQUNQLElBQVAsQ0FBWWdCLE1BQTVCO0FBQUEsV0FBckIsQ0FBYjtBQUNBRixjQUFJLENBQUM5QyxRQUFMLENBQWMwQyxPQUFkLENBQXNCTixZQUFZLENBQUNHLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZckMsT0FBYixDQUFsQztBQUNBOEMsZUFBSyxDQUFDcEMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQW9DLGVBQUssQ0FBQ1EsV0FBTixHQUFvQixJQUFwQjtBQUNBLGdCQUx1QixDQU12QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFDRCxXQUFLdEIsbUJBQUw7QUFDSWMsYUFBSyxDQUFDcEMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQW9DLGFBQUssQ0FBQ25DLGNBQU4sR0FBdUIsS0FBdkI7QUFDQW1DLGFBQUssQ0FBQ2xDLGVBQU4sR0FBd0JnQyxNQUFNLENBQUNJLEtBQS9CO0FBQ0E7O0FBQ0o7QUFDSTtBQTdEUjtBQStESCxHQWhFYSxDQUFkO0FBbUVILENBcEVEOztBQXNFZU4sc0VBQWYsRSxDQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE0NTFkMTVkNzVkMTFiZGY3N2Q0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHMgOiBbe1xyXG4gICAgICAgIGlkIDogMSxcclxuICAgICAgICBVc2VyIDoge1xyXG4gICAgICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lIDogXCJzb29pbmtpbVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudCA6IFwi7LKrIOuyiOynuCDqsozsi5zquIAgI25leHQuanMgI2NvZGluZ1wiLFxyXG4gICAgICAgIEltYWdlcyA6IFt7XHJcbiAgICAgICAgICAgIGlkIDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmMgOiAnaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC8wOS80My9mMS8wOTQzZjFmM2EzYmFkZjliMDNiMTllMDFmODRlNjgxMC5qcGcnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzcmMgOiAnaHR0cHM6Ly9pLnBpbmltZy5jb20vMjM2eC8wOC9mYi9kYi8wOGZiZGJiNTFmZGYxMTQ4Y2U2YTY3ZDJmZTZjMjJmMi5qcGcnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzcmMgOiAnaHR0cHM6Ly9pLnBpbmltZy5jb20vMjM2eC8wMC84ZS8zNS8wMDhlMzU2NGQwODkyZDk0YTVlMzRhOTgwYjI1ZWY5Yi5qcGcnXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHMgOiBbIHtcclxuICAgICAgICAgICAgaWQgOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIFVzZXIgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lIDogXCJmYXNoaW9uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIuyyq+uyiOynuCDro6nsnbQg6rCA7J6lIOuniOydjOyXkCDrk6TslrTsmpQhXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFVzZXIgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lIDogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudCA6IFwi7IOJ6rCQ7J20IOyYiOyBmOuEpOyalH5cIlxyXG4gICAgICAgIH1dXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aHMgOiBbXSxcclxuICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yIDogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yIDogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yIDogbnVsbCxcclxufVxyXG5cclxuaW5pdGlhbFN0YXRlLm1haW5Qb3N0cyA9IGluaXRpYWxTdGF0ZS5tYWluUG9zdHMuY29uY2F0KFxyXG4gICAgQXJyYXkoMjApLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICAgICAgICBpZCA6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBVc2VyIDoge1xyXG4gICAgICAgICAgICBpZCA6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWUgOiBmYWtlci5uYW1lLmZpbmROYW1lKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQgOiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgICAgICBJbWFnZXMgOiBbe1xyXG4gICAgICAgICAgICBzcmMgOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzIDogW3tcclxuICAgICAgICAgICAgVXNlciA6IHtcclxuICAgICAgICAgICAgICAgIGlkIDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWUgOiBmYWtlci5uYW1lLmZpbmROYW1lKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudCA6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICAgICAgfV0sXHJcbiAgICB9KSksXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlIDogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZSA6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoIHtcclxuICAgIGlkIDogZGF0YS5pZCxcclxuICAgIGNvbnRlbnQgOiBkYXRhLmNvbnRlbnQsXHJcbiAgICBVc2VyIDoge1xyXG4gICAgICAgIGlkIDogMSxcclxuICAgICAgICBuaWNrbmFtZSA6IFwia2ltc29vaW5cIlxyXG4gICAgfSxcclxuICAgIEltYWdlcyA6IFtdLFxyXG4gICAgQ29tbWVudHMgOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKCB7XHJcbiAgICBpZCA6IGRhdGEuaWQsXHJcbiAgICBjb250ZW50IDogZGF0YS5jb250ZW50LFxyXG4gICAgVXNlciA6IHtcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgbmlja25hbWUgOiBcImtpbXNvb2luXCJcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUyA6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7IC8vIGR1bW15UG9zdOulvCDslZ7sl5Ag7LaU6rCA7ZW07JW87KeAIOqyjOyLnOq4gOydtCDsnITroZwg7IyT7J6EO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1MgOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTIDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkY29tbWVudGQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyDrtojrs4DshLHsnYQg7KeA7YKk6riwIOychO2VtCDslYTrnpjsmYAg6rCZ7J20IOyekeyEse2WiOuNmCDsvZTrk5zrpbwgaW1tZXLrpbwg7IKs7Jqp7ZWY66m0IOychOydmCDsvZTrk5zroZwg7KCV66asIOqwgOuKpVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3QgPSB7Li4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF19O1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1haW5Qb3N0cyxcclxuICAgICAgICAgICAgICAgIC8vICAgICBhZGRDb21tZW50TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnREb25lIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG5cclxuLy8g67aI67OA7ISx7J2EIOychO2VtCBpbW1lciDsgqzsmqko7JWM7JWE7IScIOu2iOuzgOyEseydhCDsnKDsp4DtlbTspIwpIl0sInNvdXJjZVJvb3QiOiIifQ==
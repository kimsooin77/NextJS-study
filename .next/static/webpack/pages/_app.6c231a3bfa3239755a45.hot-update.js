webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
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
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
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
var generateDummyPost = function generateDummyPost(number) {
  return Array(number).fill().map(function () {
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
  });
};
var LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
var LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
var LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
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
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePost = draft.mainPosts.length < 50;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.mainPosts.unshift(action.data); // dummyPost를 앞에 추가해야지 게시글이 위로 쌓임;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0aWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImxlbmd0aCIsImVycm9yIiwidW5zaGlmdCIsImZpbHRlciIsInYiLCJwb3N0IiwiZmluZCIsInBvc3RJZCIsImFkZGNvbW1lbnRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRyxFQURZO0FBRXhCQyxZQUFVLEVBQUcsRUFGVztBQUd4QkMsYUFBVyxFQUFHLElBSFU7QUFJeEJDLGtCQUFnQixFQUFHLEtBSks7QUFLeEJDLGVBQWEsRUFBRyxLQUxRO0FBTXhCQyxnQkFBYyxFQUFHLElBTk87QUFPeEJDLGdCQUFjLEVBQUcsS0FQTztBQVF4QkMsYUFBVyxFQUFHLEtBUlU7QUFTeEJDLGNBQVksRUFBRyxJQVRTO0FBVXhCQyxtQkFBaUIsRUFBRyxLQVZJO0FBV3hCQyxnQkFBYyxFQUFHLEtBWE87QUFZeEJDLGlCQUFlLEVBQUcsSUFaTTtBQWF4QkMsbUJBQWlCLEVBQUcsS0FiSTtBQWN4QkMsZ0JBQWMsRUFBRyxLQWRPO0FBZXhCQyxpQkFBZSxFQUFHO0FBZk0sQ0FBckI7QUFrQkEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxNQUFEO0FBQUEsU0FBWUMsS0FBSyxDQUFDRCxNQUFELENBQUwsQ0FBY0UsSUFBZCxHQUFxQkMsR0FBckIsQ0FBeUI7QUFBQSxXQUFNO0FBQ3hFQyxRQUFFLEVBQUdDLDhDQUFPLENBQUNDLFFBQVIsRUFEbUU7QUFFeEVDLFVBQUksRUFBRztBQUNISCxVQUFFLEVBQUdDLDhDQUFPLENBQUNDLFFBQVIsRUFERjtBQUVIRSxnQkFBUSxFQUFHQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVg7QUFGUixPQUZpRTtBQU14RUMsYUFBTyxFQUFHSCw0Q0FBSyxDQUFDSSxLQUFOLENBQVlDLFNBQVosRUFOOEQ7QUFPeEVDLFlBQU0sRUFBRyxDQUFDO0FBQ05DLFdBQUcsRUFBR1AsNENBQUssQ0FBQ1EsS0FBTixDQUFZQSxLQUFaO0FBREEsT0FBRCxDQVArRDtBQVV4RUMsY0FBUSxFQUFHLENBQUM7QUFDUlgsWUFBSSxFQUFHO0FBQ0hILFlBQUUsRUFBR0MsOENBQU8sQ0FBQ0MsUUFBUixFQURGO0FBRUhFLGtCQUFRLEVBQUdDLDRDQUFLLENBQUNDLElBQU4sQ0FBV0MsUUFBWDtBQUZSLFNBREM7QUFLUkMsZUFBTyxFQUFHSCw0Q0FBSyxDQUFDSSxLQUFOLENBQVlNLFFBQVo7QUFMRixPQUFEO0FBVjZELEtBQU47QUFBQSxHQUF6QixDQUFaO0FBQUEsQ0FBMUI7QUFtQkEsSUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRDtBQUFBLFNBQVU7QUFDN0JDLFFBQUksRUFBR1gsZ0JBRHNCO0FBRTdCVSxRQUFJLEVBQUpBO0FBRjZCLEdBQVY7QUFBQSxDQUFoQjtBQUtBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNGLElBQUQ7QUFBQSxTQUFVO0FBQ2hDQyxRQUFJLEVBQUdSLG1CQUR5QjtBQUVoQ08sUUFBSSxFQUFKQTtBQUZnQyxHQUFWO0FBQUEsQ0FBbkI7O0FBS1AsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0gsSUFBRDtBQUFBLFNBQVk7QUFDMUI3QixNQUFFLEVBQUc2QixJQUFJLENBQUM3QixFQURnQjtBQUUxQlEsV0FBTyxFQUFHcUIsSUFBSSxDQUFDckIsT0FGVztBQUcxQkwsUUFBSSxFQUFHO0FBQ0hILFFBQUUsRUFBRyxDQURGO0FBRUhJLGNBQVEsRUFBRztBQUZSLEtBSG1CO0FBTzFCTyxVQUFNLEVBQUcsRUFQaUI7QUFRMUJHLFlBQVEsRUFBRztBQVJlLEdBQVo7QUFBQSxDQUFsQjs7QUFXQSxJQUFNbUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0osSUFBRDtBQUFBLFNBQVk7QUFDN0I3QixNQUFFLEVBQUc2QixJQUFJLENBQUM3QixFQURtQjtBQUU3QlEsV0FBTyxFQUFHcUIsSUFBSSxDQUFDckIsT0FGYztBQUc3QkwsUUFBSSxFQUFHO0FBQ0hILFFBQUUsRUFBRyxDQURGO0FBRUhJLGNBQVEsRUFBRztBQUZSO0FBSHNCLEdBQVo7QUFBQSxDQUFyQjs7QUFTQSxJQUFNOEIsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFDQyxLQUFELHVFQUFTeEQsWUFBVDtBQUFBLE1BQXVCeUQsTUFBdkI7QUFBQSxTQUFrQ0MscURBQU8sQ0FBQ0YsS0FBRCxFQUFRLFVBQUNHLEtBQUQsRUFBVztBQUNwRSxZQUFRRixNQUFNLENBQUNOLElBQWY7QUFDSSxXQUFLZCxrQkFBTDtBQUNJc0IsYUFBSyxDQUFDdkQsZ0JBQU4sR0FBeUIsSUFBekI7QUFDQXVELGFBQUssQ0FBQ3RELGFBQU4sR0FBc0IsS0FBdEI7QUFDQXNELGFBQUssQ0FBQ3JELGNBQU4sR0FBdUIsSUFBdkI7QUFDQTs7QUFDSixXQUFLZ0Msa0JBQUw7QUFDSXFCLGFBQUssQ0FBQ3ZELGdCQUFOLEdBQXlCLEtBQXpCO0FBQ0F1RCxhQUFLLENBQUN0RCxhQUFOLEdBQXNCLElBQXRCO0FBQ0FzRCxhQUFLLENBQUMxRCxTQUFOLEdBQWtCd0QsTUFBTSxDQUFDUCxJQUFQLENBQVlVLE1BQVosQ0FBbUJELEtBQUssQ0FBQzFELFNBQXpCLENBQWxCO0FBQ0EwRCxhQUFLLENBQUN4RCxXQUFOLEdBQW9Cd0QsS0FBSyxDQUFDMUQsU0FBTixDQUFnQjRELE1BQWhCLEdBQXlCLEVBQTdDO0FBQ0E7O0FBQ0osV0FBS3RCLGtCQUFMO0FBQ0lvQixhQUFLLENBQUN2RCxnQkFBTixHQUF5QixLQUF6QjtBQUNBdUQsYUFBSyxDQUFDckQsY0FBTixHQUF1Qm1ELE1BQU0sQ0FBQ0ssS0FBOUI7QUFDQTs7QUFDSixXQUFLdEIsZ0JBQUw7QUFDSW1CLGFBQUssQ0FBQ3BELGNBQU4sR0FBdUIsSUFBdkI7QUFDQW9ELGFBQUssQ0FBQ25ELFdBQU4sR0FBb0IsS0FBcEI7QUFDQW1ELGFBQUssQ0FBQ2xELFlBQU4sR0FBcUIsSUFBckI7QUFDQTs7QUFDSixXQUFLZ0MsZ0JBQUw7QUFDSWtCLGFBQUssQ0FBQ3BELGNBQU4sR0FBdUIsS0FBdkI7QUFDQW9ELGFBQUssQ0FBQzFELFNBQU4sQ0FBZ0I4RCxPQUFoQixDQUF3Qk4sTUFBTSxDQUFDUCxJQUEvQixFQUZKLENBRTBDOztBQUN0Q1MsYUFBSyxDQUFDbkQsV0FBTixHQUFvQixJQUFwQjtBQUNBOztBQUNKLFdBQUtrQyxnQkFBTDtBQUNJaUIsYUFBSyxDQUFDcEQsY0FBTixHQUF1QixLQUF2QjtBQUNBb0QsYUFBSyxDQUFDbkQsV0FBTixHQUFvQixLQUFwQjtBQUNBbUQsYUFBSyxDQUFDbEQsWUFBTixHQUFxQmdELE1BQU0sQ0FBQ0ssS0FBNUI7QUFDQTs7QUFDSixXQUFLaEIsbUJBQUw7QUFDSWEsYUFBSyxDQUFDOUMsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQThDLGFBQUssQ0FBQzdDLGNBQU4sR0FBdUIsS0FBdkI7QUFDQTZDLGFBQUssQ0FBQzVDLGVBQU4sR0FBd0IsSUFBeEI7QUFDQTs7QUFDSixXQUFLZ0MsbUJBQUw7QUFDSVksYUFBSyxDQUFDOUMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQThDLGFBQUssQ0FBQzFELFNBQU4sR0FBa0IwRCxLQUFLLENBQUMxRCxTQUFOLENBQWdCK0QsTUFBaEIsQ0FBdUIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUM1QyxFQUFGLEtBQVNvQyxNQUFNLENBQUNQLElBQXZCO0FBQUEsU0FBdkIsQ0FBbEI7QUFDQVMsYUFBSyxDQUFDN0MsY0FBTixHQUF1QixJQUF2QjtBQUNBOztBQUNKLFdBQUtrQyxtQkFBTDtBQUNJVyxhQUFLLENBQUM5QyxpQkFBTixHQUEwQixLQUExQjtBQUNBOEMsYUFBSyxDQUFDN0MsY0FBTixHQUF1QixLQUF2QjtBQUNBNkMsYUFBSyxDQUFDNUMsZUFBTixHQUF3QjBDLE1BQU0sQ0FBQ0ssS0FBL0I7QUFDQTs7QUFDSixXQUFLbkIsbUJBQUw7QUFDSWdCLGFBQUssQ0FBQ2pELGlCQUFOLEdBQTBCLElBQTFCO0FBQ0FpRCxhQUFLLENBQUNoRCxjQUFOLEdBQXVCLEtBQXZCO0FBQ0FnRCxhQUFLLENBQUMvQyxlQUFOLEdBQXdCLElBQXhCO0FBQ0E7O0FBQ0osV0FBS2dDLG1CQUFMO0FBQTJCO0FBQ3ZCLGNBQU1zQixJQUFJLEdBQUdQLEtBQUssQ0FBQzFELFNBQU4sQ0FBZ0JrRSxJQUFoQixDQUFxQixVQUFDRixDQUFEO0FBQUEsbUJBQU9BLENBQUMsQ0FBQzVDLEVBQUYsS0FBU29DLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZa0IsTUFBNUI7QUFBQSxXQUFyQixDQUFiO0FBQ0FGLGNBQUksQ0FBQy9CLFFBQUwsQ0FBYzRCLE9BQWQsQ0FBc0JULFlBQVksQ0FBQ0csTUFBTSxDQUFDUCxJQUFQLENBQVlyQixPQUFiLENBQWxDO0FBQ0E4QixlQUFLLENBQUNqRCxpQkFBTixHQUEwQixLQUExQjtBQUNBaUQsZUFBSyxDQUFDVSxXQUFOLEdBQW9CLElBQXBCO0FBQ0EsZ0JBTHVCLENBTXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUNELFdBQUt4QixtQkFBTDtBQUNJYyxhQUFLLENBQUNqRCxpQkFBTixHQUEwQixLQUExQjtBQUNBaUQsYUFBSyxDQUFDaEQsY0FBTixHQUF1QixLQUF2QjtBQUNBZ0QsYUFBSyxDQUFDL0MsZUFBTixHQUF3QjZDLE1BQU0sQ0FBQ0ssS0FBL0I7QUFDQTs7QUFDSjtBQUNJO0FBNUVSO0FBOEVQLEdBL0V3RCxDQUF6QztBQUFBLENBQWhCOztBQW1GZVAsc0VBQWYsRSxDQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNmMyMzFhM2JmYTMyMzk3NTVhNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydGlkIGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0cyA6IFtdLFxyXG4gICAgaW1hZ2VQYXRocyA6IFtdLFxyXG4gICAgaGFzTW9yZVBvc3QgOiB0cnVlLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZSA6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRXJyb3IgOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3IgOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lIDogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3IgOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4oe1xyXG4gICAgaWQgOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICBVc2VyIDoge1xyXG4gICAgICAgIGlkIDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lIDogZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICB9LFxyXG4gICAgY29udGVudCA6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgSW1hZ2VzIDogW3tcclxuICAgICAgICBzcmMgOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgfV0sXHJcbiAgICBDb21tZW50cyA6IFt7XHJcbiAgICAgICAgVXNlciA6IHtcclxuICAgICAgICAgICAgaWQgOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lIDogZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50IDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgIH1dLFxyXG59KSlcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfUE9TVFNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9QT1NUU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlIDogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZSA6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoIHtcclxuICAgIGlkIDogZGF0YS5pZCxcclxuICAgIGNvbnRlbnQgOiBkYXRhLmNvbnRlbnQsXHJcbiAgICBVc2VyIDoge1xyXG4gICAgICAgIGlkIDogMSxcclxuICAgICAgICBuaWNrbmFtZSA6IFwia2ltc29vaW5cIlxyXG4gICAgfSxcclxuICAgIEltYWdlcyA6IFtdLFxyXG4gICAgQ29tbWVudHMgOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKCB7XHJcbiAgICBpZCA6IGRhdGEuaWQsXHJcbiAgICBjb250ZW50IDogZGF0YS5jb250ZW50LFxyXG4gICAgVXNlciA6IHtcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgbmlja25hbWUgOiBcImtpbXNvb2luXCJcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUyA6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTIDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7IC8vIGR1bW15UG9zdOulvCDslZ7sl5Ag7LaU6rCA7ZW07JW87KeAIOqyjOyLnOq4gOydtCDsnITroZwg7IyT7J6EO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1MgOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTIDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkY29tbWVudGQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyDrtojrs4DshLHsnYQg7KeA7YKk6riwIOychO2VtCDslYTrnpjsmYAg6rCZ7J20IOyekeyEse2WiOuNmCDsvZTrk5zrpbwgaW1tZXLrpbwg7IKs7Jqp7ZWY66m0IOychOydmCDsvZTrk5zroZwg7KCV66asIOqwgOuKpVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3QgPSB7Li4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF19O1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1haW5Qb3N0cyxcclxuICAgICAgICAgICAgICAgIC8vICAgICBhZGRDb21tZW50TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnREb25lIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxufSk7XHJcbiAgICBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG5cclxuLy8g67aI67OA7ISx7J2EIOychO2VtCBpbW1lciDsgqzsmqko7JWM7JWE7IScIOu2iOuzgOyEseydhCDsnKDsp4DtlbTspIwpIl0sInNvdXJjZVJvb3QiOiIifQ==
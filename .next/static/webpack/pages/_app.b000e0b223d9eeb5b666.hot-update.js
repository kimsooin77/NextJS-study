webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null
};
var REMOVE_IMAGE = 'REMOVE_IMAGE';
var UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
var UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
var UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
var LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
var LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
var LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
var UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
var UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
var UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
var LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
var LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
var LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
var LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
var LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
var LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
var ADD_POST_REQUEST = "ADD_POST_REQUEST";
var ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
var ADD_POST_FAILURE = "ADD_POST_FAILURE";
var ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
var ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
var ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
var REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
var REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
var REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
var RETWEET_REQUEST = "RETWEET_REQUEST";
var RETWEET_SUCCESS = "RETWEET_SUCCESS";
var RETWEET_FAILURE = "REMOVE_POST_FAILURE";
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

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter(function (v, i) {
          return i !== action.data;
        });
        break;

      case RETWEET_REQUEST:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;

      case RETWEET_SUCCESS:
        {
          draft.retweetLoading = false;
          draft.retweetDone = true;
          draft.mainPosts.unshift(action.data);
          break;
        }

      case RETWEET_FAILURE:
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        {
          draft.imagePaths = draft.imagePaths.concat(action.data); // routes/post에서 res.json으로 받아온 이미지 주소

          draft.uploadImagesLoading = false;
          draft.uploadImagesDone = true;
          break;
        }

      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          }); // 메인포스트 중에서 전달받은 액션데이터의 포스트아이가 같은 걸 찾아서

          post.Likers.push({
            id: action.data.UserId
          }); // 포스트 Likers에 좋아요를 누른 사람(사용자아이디)의 아이디를 넣는다.

          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          var _post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post.Likers = _post.Likers.filter(function (v) {
            return v.id !== action.data.UserId;
          });
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;

      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePost = action.data.length === 10;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePosts = action.data;
        draft.hasMorePost = action.data.length === 10;
        break;

      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
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
        draft.imagePaths = [];
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
          return v.id !== action.data.postId;
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
          var _post2 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post2.Comments.unshift(action.data);

          draft.addCommentLoading = false;
          draft.addCommentDone = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyb3IiLCJSRU1PVkVfSU1BR0UiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJSRVRXRUVUX1JFUVVFU1QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZmlsdGVyIiwidiIsImkiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJjb25jYXQiLCJwb3N0IiwiZmluZCIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsImxlbmd0aCIsInNpbmdsZVBvc3RzIiwicG9zdElkIiwiQ29tbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUN4QkMsV0FBUyxFQUFHLEVBRFk7QUFFeEJDLFlBQVUsRUFBRyxFQUZXO0FBR3hCQyxhQUFXLEVBQUcsSUFIVTtBQUl4QkMsa0JBQWdCLEVBQUcsS0FKSztBQUt4QkMsZUFBYSxFQUFHLEtBTFE7QUFNeEJDLGdCQUFjLEVBQUcsSUFOTztBQU94QkMsaUJBQWUsRUFBRyxLQVBNO0FBUXhCQyxjQUFZLEVBQUcsS0FSUztBQVN4QkMsZUFBYSxF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QU0sQ0FBQ0wsSUFBUCxDQUFZaUIsTUFBNUI7QUFBQSxXQUFyQixDQUFiOztBQUNBSCxnQkFBSSxDQUFDVSxRQUFMLENBQWNiLE9BQWQsQ0FBc0JOLE1BQU0sQ0FBQ0wsSUFBN0I7O0FBQ0FPLGVBQUssQ0FBQ2hELGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FnRCxlQUFLLENBQUMvQyxjQUFOLEdBQXVCLElBQXZCO0FBQ0EsZ0JBTHVCLENBTXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUNELFdBQUtnQyxtQkFBTDtBQUNJZSxhQUFLLENBQUNoRCxpQkFBTixHQUEwQixLQUExQjtBQUNBZ0QsYUFBSyxDQUFDL0MsY0FBTixHQUF1QixLQUF2QjtBQUNBK0MsYUFBSyxDQUFDOUMsZUFBTixHQUF3QjRDLE1BQU0sQ0FBQ08sS0FBL0I7QUFDQTs7QUFDSjtBQUNJO0FBN0pSO0FBK0pQLEdBaEt3RCxDQUF6QztBQUFBLENBQWhCOztBQW9LZVQsc0VBQWYsRSxDQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjAwMGUwYjIyM2Q5ZWViNWI2NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0cyA6IFtdLFxyXG4gICAgaW1hZ2VQYXRocyA6IFtdLFxyXG4gICAgaGFzTW9yZVBvc3QgOiB0cnVlLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZSA6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRXJyb3IgOiBudWxsLFxyXG4gICAgbG9hZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBsb2FkUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgbGlrZVBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBsaWtlUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgdW5saWtlUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3REb25lIDogZmFsc2UsXHJcbiAgICB1bmxpa2VQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3IgOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lIDogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgdXBsb2FkSW1hZ2VzTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRG9uZSA6IGZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRXJyb3IgOiBudWxsLFxyXG4gICAgcmV0d2VldExvYWRpbmcgOiBmYWxzZSxcclxuICAgIHJldHdlZXREb25lIDogZmFsc2UsXHJcbiAgICByZXR3ZWV0RXJyb3IgOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gXCJVUExPQURfSU1BR0VTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwiVVBMT0FEX0lNQUdFU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSBcIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gXCJMSUtFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSBcIkxJS0VfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gXCJVTkxJS0VfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gXCJVTkxJS0VfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gXCJMT0FEX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSBcIkxPQURfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9IFwiTE9BRF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSBcIlJFTU9WRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSBcIlJFVFdFRVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gXCJSRVRXRUVUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZSA6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+KHtcclxuICAgIHR5cGUgOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFIDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUyA6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1MgOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5jb25jYXQoYWN0aW9uLmRhdGEpOyAvLyByb3V0ZXMvcG9zdOyXkOyEnCByZXMuanNvbuycvOuhnCDrsJvslYTsmKgg7J2066+47KeAIOyjvOyGjFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUyA6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTsgLy8g66mU7J247Y+s7Iqk7Yq4IOykkeyXkOyEnCDsoITri6zrsJvsnYAg7JWh7IWY642w7J207YSw7J2YIO2PrOyKpO2KuOyVhOydtOqwgCDqsJnsnYAg6rG4IOywvuyVhOyEnFxyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMucHVzaCh7aWQgOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTsgLy8g7Y+s7Iqk7Yq4IExpa2Vyc+yXkCDsoovslYTsmpTrpbwg64iE66W4IOyCrOuejCjsgqzsmqnsnpDslYTsnbTrlJQp7J2YIOyVhOydtOuUlOulvCDrhKPripTri6QuXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1MgOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTIDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1MgOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2luZ2xlUG9zdHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0ID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1MgOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTsgLy8gZHVtbXlQb3N066W8IOyVnuyXkCDstpTqsIDtlbTslbzsp4Ag6rKM7Iuc6riA7J20IOychOuhnCDsjJPsnoQ7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTIDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIOu2iOuzgOyEseydhCDsp4DtgqTquLAg7JyE7ZW0IOyVhOuemOyZgCDqsJnsnbQg7J6R7ISx7ZaI642YIOy9lOuTnOulvCBpbW1lcuulvCDsgqzsmqntlZjrqbQg7JyE7J2YIOy9lOuTnOuhnCDsoJXrpqwg6rCA64qlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcG9zdCA9IHsuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XX07XHJcbiAgICAgICAgICAgICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudERvbmUgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG59KTtcclxuICAgIFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcblxyXG4vLyDrtojrs4DshLHsnYQg7JyE7ZW0IGltbWVyIOyCrOyaqSjslYzslYTshJwg67aI67OA7ISx7J2EIOycoOyngO2VtOykjCkiXSwic291cmNlUm9vdCI6IiJ9
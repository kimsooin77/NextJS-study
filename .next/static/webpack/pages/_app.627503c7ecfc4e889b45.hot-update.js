webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, addPost, addComment, default */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyb3IiLCJSRU1PVkVfSU1BR0UiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJSRVRXRUVUX1JFUVVFU1QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZmlsdGVyIiwidiIsImkiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJjb25jYXQiLCJwb3N0IiwiZmluZCIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsImxlbmd0aCIsInBvc3RJZCIsIkNvbW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRyxFQURZO0FBRXhCQyxZQUFVLEVBQUcsRUFGVztBQUd4QkMsYUFBVyxFQUFHLElBSFU7QUFJeEJDLGtCQUFnQixFQUFHLEtBSks7QUFLeEJDLGVBQWEsRUFBRyxLQUxRO0FBTXhCQyxnQkFBYyxFQUFHLElBTk87QUFPeEJDLGlCQUFlLEVBQUcsS0FQTTtBQVF4QkMsY0FBWSxFQUFHLEtBUlM7QUFTeEJDLGVBQWEsRUFBRyxJQVRRO0FBVXhCQyxpQkFBZSxFQUFHLEtBVk07QUFXeEJDLGNBQVksRUFBRyxLQVhTO0FBWXhCQyxlQUFhLEVBQUcsSUFaUTtBQWF4QkMsbUJBQWlC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QUNKLFdBQUt0QixtQkFBTDtBQUNJaUIsYUFBSyxDQUFDN0MsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQTZDLGFBQUssQ0FBQzVDLGNBQU4sR0FBdUIsS0FBdkI7QUFDQTRDLGFBQUssQ0FBQzNDLGVBQU4sR0FBd0IsSUFBeEI7QUFDQTs7QUFDSixXQUFLMkIsbUJBQUw7QUFBMkI7QUFDdkIsY0FBTXVCLE1BQUksR0FBR1AsS0FBSyxDQUFDL0QsU0FBTixDQUFnQnVFLElBQWhCLENBQXFCLFVBQUNOLENBQUQ7QUFBQSxtQkFBT0EsQ0FBQyxDQUFDTyxFQUFGLEtBQVNYLE1BQU0sQ0FBQ0wsSUFBUCxDQUFZaUIsTUFBNUI7QUFBQSxXQUFyQixDQUFiOztBQUNBSCxnQkFBSSxDQUFDUyxRQUFMLENBQWNaLE9BQWQsQ0FBc0JOLE1BQU0sQ0FBQ0wsSUFBN0I7O0FBQ0FPLGVBQUssQ0FBQzdDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0E2QyxlQUFLLENBQUM1QyxjQUFOLEdBQXVCLElBQXZCO0FBQ0EsZ0JBTHVCLENBTXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUNELFdBQUs2QixtQkFBTDtBQUNJZSxhQUFLLENBQUM3QyxpQkFBTixHQUEwQixLQUExQjtBQUNBNkMsYUFBSyxDQUFDNUMsY0FBTixHQUF1QixLQUF2QjtBQUNBNEMsYUFBSyxDQUFDM0MsZUFBTixHQUF3QnlDLE1BQU0sQ0FBQ08sS0FBL0I7QUFDQTs7QUFDSjtBQUNJO0FBOUlSO0FBZ0pQLEdBakp3RCxDQUF6QztBQUFBLENBQWhCOztBQXFKZVQsc0VBQWYsRSxDQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjI3NTAzYzdlY2ZjNGU4ODliNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0cyA6IFtdLFxyXG4gICAgaW1hZ2VQYXRocyA6IFtdLFxyXG4gICAgaGFzTW9yZVBvc3QgOiB0cnVlLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZSA6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRXJyb3IgOiBudWxsLFxyXG4gICAgbG9hZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBsb2FkUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgbGlrZVBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBsaWtlUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgdW5saWtlUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3REb25lIDogZmFsc2UsXHJcbiAgICB1bmxpa2VQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3IgOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lIDogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3IgOiBudWxsLFxyXG4gICAgdXBsb2FkSW1hZ2VzTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRG9uZSA6IGZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRXJyb3IgOiBudWxsLFxyXG4gICAgcmV0d2VldExvYWRpbmcgOiBmYWxzZSxcclxuICAgIHJldHdlZXREb25lIDogZmFsc2UsXHJcbiAgICByZXR3ZWV0RXJyb3IgOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gXCJVUExPQURfSU1BR0VTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwiVVBMT0FEX0lNQUdFU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSBcIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gXCJMSUtFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSBcIkxJS0VfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gXCJVTkxJS0VfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gXCJVTkxJS0VfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9IFwiUkVUV0VFVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSBcIlJFVFdFRVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlIDogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZSA6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfSU1BR0UgOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTIDoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmNvbmNhdChhY3Rpb24uZGF0YSk7IC8vIHJvdXRlcy9wb3N07JeQ7IScIHJlcy5qc29u7Jy866GcIOuwm+yVhOyYqCDsnbTrr7jsp4Ag7KO87IaMXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTIDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpOyAvLyDrqZTsnbjtj6zsiqTtirgg7KSR7JeQ7IScIOyghOuLrOuwm+ydgCDslaHshZjrjbDsnbTthLDsnZgg7Y+s7Iqk7Yq47JWE7J206rCAIOqwmeydgCDqsbgg7LC+7JWE7IScXHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHtpZCA6IGFjdGlvbi5kYXRhLlVzZXJJZH0pOyAvLyDtj6zsiqTtirggTGlrZXJz7JeQIOyii+yVhOyalOulvCDriITrpbgg7IKs656MKOyCrOyaqeyekOyVhOydtOuUlCnsnZgg7JWE7J2065SU66W8IOuEo+uKlOuLpC5cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUyA6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1MgOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0ID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1MgOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTsgLy8gZHVtbXlQb3N066W8IOyVnuyXkCDstpTqsIDtlbTslbzsp4Ag6rKM7Iuc6riA7J20IOychOuhnCDsjJPsnoQ7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTIDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIOu2iOuzgOyEseydhCDsp4DtgqTquLAg7JyE7ZW0IOyVhOuemOyZgCDqsJnsnbQg7J6R7ISx7ZaI642YIOy9lOuTnOulvCBpbW1lcuulvCDsgqzsmqntlZjrqbQg7JyE7J2YIOy9lOuTnOuhnCDsoJXrpqwg6rCA64qlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcG9zdCA9IHsuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XX07XHJcbiAgICAgICAgICAgICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudERvbmUgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG59KTtcclxuICAgIFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcblxyXG4vLyDrtojrs4DshLHsnYQg7JyE7ZW0IGltbWVyIOyCrOyaqSjslYzslYTshJwg67aI67OA7ISx7J2EIOycoOyngO2VtOykjCkiXSwic291cmNlUm9vdCI6IiJ9
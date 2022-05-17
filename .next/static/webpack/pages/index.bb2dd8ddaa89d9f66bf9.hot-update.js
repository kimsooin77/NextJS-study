webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, addPost, addComment, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
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
  singlePost: null,
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
var LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
var LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
var LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";
var LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAGE_POSTS_REQUEST";
var LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAGE_POSTS_SUCCESS";
var LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAGE_POSTS_FAILURE";
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

      case LOAD_USER_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_USER_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePost = action.data.length === 10;
        break;

      case LOAD_USER_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
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
        draft.singlePost = action.data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJzaW5nbGVQb3N0IiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJyZXR3ZWV0TG9hZGluZyIsInJldHdlZXREb25lIiwicmV0d2VldEVycm9yIiwiUkVNT1ZFX0lNQUdFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImZpbHRlciIsInYiLCJpIiwidW5zaGlmdCIsImVycm9yIiwiY29uY2F0IiwicG9zdCIsImZpbmQiLCJpZCIsIlBvc3RJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJsZW5ndGgiLCJwb3N0SWQiLCJDb21tZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFH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QUNKO0FBQ0k7QUFuS1I7QUFxS1AsR0F0S3dELENBQXpDO0FBQUEsQ0FBaEI7O0FBMEtlVCxzRUFBZixFLENBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmIyZGQ4ZGRhYTg5ZDlmNjZiZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0cyA6IFtdLFxyXG4gICAgc2luZ2xlUG9zdCA6IG51bGwsXHJcbiAgICBpbWFnZVBhdGhzIDogW10sXHJcbiAgICBoYXNNb3JlUG9zdCA6IHRydWUsXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNEb25lIDogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvciA6IG51bGwsXHJcbiAgICBsb2FkUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RFcnJvciA6IG51bGwsXHJcbiAgICBsaWtlUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgbGlrZVBvc3RFcnJvciA6IG51bGwsXHJcbiAgICB1bmxpa2VQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3RFcnJvciA6IG51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvciA6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmUgOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvciA6IG51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvciA6IG51bGwsXHJcbiAgICB1cGxvYWRJbWFnZXNMb2FkaW5nIDogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNEb25lIDogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNFcnJvciA6IG51bGwsXHJcbiAgICByZXR3ZWV0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgcmV0d2VldERvbmUgOiBmYWxzZSxcclxuICAgIHJldHdlZXRFcnJvciA6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSBcIlVQTE9BRF9JTUFHRVNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gXCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9IFwiVVBMT0FEX0lNQUdFU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSBcIkxJS0VfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwiTElLRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gXCJMSUtFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSBcIlVOTElLRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSBcIlVOTElLRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSBcIlVOTElLRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfSEFTSFRBR0VfUE9TVFNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfSEFTSFRBR0VfUE9TVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfSEFTSFRBR0VfUE9TVFNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfUE9TVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1BPU1RTX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9IFwiTE9BRF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gXCJMT0FEX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSBcIkxPQURfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gXCJSRVRXRUVUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9IFwiUkVUV0VFVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+KHtcclxuICAgIHR5cGUgOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlIDogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9JTUFHRSA6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1MgOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTIDoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuY29uY2F0KGFjdGlvbi5kYXRhKTsgLy8gcm91dGVzL3Bvc3Tsl5DshJwgcmVzLmpzb27snLzroZwg67Cb7JWE7JioIOydtOuvuOyngCDso7zshoxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1MgOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7IC8vIOuplOyduO2PrOyKpO2KuCDspJHsl5DshJwg7KCE64us67Cb7J2AIOyVoeyFmOuNsOydtO2EsOydmCDtj6zsiqTtirjslYTsnbTqsIAg6rCZ7J2AIOqxuCDssL7slYTshJxcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzLnB1c2goe2lkIDogYWN0aW9uLmRhdGEuVXNlcklkfSk7IC8vIO2PrOyKpO2KuCBMaWtlcnPsl5Ag7KKL7JWE7JqU66W8IOuIhOuluCDsgqzrnowo7IKs7Jqp7J6Q7JWE7J2065SUKeydmCDslYTsnbTrlJTrpbwg64Sj64qU64ukLlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTIDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIDogXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19TVUNDRVNTIDpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA6IFxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUyA6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIDogXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTIDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0ID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1MgOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTsgLy8gZHVtbXlQb3N066W8IOyVnuyXkCDstpTqsIDtlbTslbzsp4Ag6rKM7Iuc6riA7J20IOychOuhnCDsjJPsnoQ7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTIDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIOu2iOuzgOyEseydhCDsp4DtgqTquLAg7JyE7ZW0IOyVhOuemOyZgCDqsJnsnbQg7J6R7ISx7ZaI642YIOy9lOuTnOulvCBpbW1lcuulvCDsgqzsmqntlZjrqbQg7JyE7J2YIOy9lOuTnOuhnCDsoJXrpqwg6rCA64qlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcG9zdCA9IHsuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XX07XHJcbiAgICAgICAgICAgICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudERvbmUgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG59KTtcclxuICAgIFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcblxyXG4vLyDrtojrs4DshLHsnYQg7JyE7ZW0IGltbWVyIOyCrOyaqSjslYzslYTshJwg67aI67OA7ISx7J2EIOycoOyngO2VtOykjCkiXSwic291cmNlUm9vdCI6IiJ9
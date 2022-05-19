module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: backUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backUrl", function() { return backUrl; });
const backUrl = false ? undefined : 'http://localhost:3065';

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: reportWebVitals, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportWebVitals", function() { return reportWebVitals; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\kimsooin\\Desktop\\\uACF5\uBD80\uAE30\uB85D\\\uACF5\uBD80\uAE30\uB85D\\22.04 \uACF5\uBD80\uAE30\uB85D\\next-study\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const App = ({
  Component
}) => {
  return __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  });
};

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
function reportWebVitals(metric) {
  console.log(metric);
}
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(App));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");



 // (이전상태, 액션) => 다음상태
// ssr을 위하여 index 리듀서 추가(HTDRATE)

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

const initialState = {
  mainPosts: [],
  singlePost: null,
  imagePaths: [],
  hasMorePost: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null
};
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";
const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const RETWEET_REQUEST = "RETWEET_REQUEST";
const RETWEET_SUCCESS = "RETWEET_SUCCESS";
const RETWEET_FAILURE = "REMOVE_POST_FAILURE";
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
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
        const post = draft.mainPosts.find(v => v.id === action.data.PostId); // 메인포스트 중에서 전달받은 액션데이터의 포스트아이가 같은 걸 찾아서

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
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false;
      draft.unlikePostError = action.error;
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
      break;

    case LOAD_POST_FAILURE:
      draft.loadPostLoading = false;
      draft.loadPostError = action.error;
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
      draft.addPostError = action.error;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.postId);
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
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
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

/* harmony default export */ __webpack_exports__["default"] = (reducer); // 불변성을 위해 immer 사용(알아서 불변성을 유지해줌)

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

const initialState = {
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  // 유저 정보 가져오기 시도중
  loadMyInfoError: null,
  loadUserLoading: false,
  loadUserDone: false,
  // 유저 정보 가져오기 시도중
  loadUserError: null,
  followLoading: false,
  followDone: false,
  // 팔로우 시도중
  followError: null,
  unfollowLoading: false,
  unfollowDone: false,
  // 언팔로우 시도중
  unfollowError: null,
  logInLoading: false,
  logInDone: false,
  // 로그인 시도중
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  loadFollowersLoading: false,
  // 팔로워 목록 가져오기 시도중
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  // 팔로잉 목록 가져오기 시도중
  loadFollowingsDone: false,
  loadFollowingsError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  // 팔로워 제거 시도중
  removeFollowerError: null,
  me: null,
  userInfo: null
};
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = data => {
  return {
    type: LOG_OUT_REQUEST
  };
};

const reducer = (state = initialState, action) => {
  return Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
    switch (action.type) {
      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersDone = false;
        draft.loadFollowersError = null;
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        draft.me.Followers = action.data;
        break;

      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;

      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsDone = false;
        draft.loadFollowingsError = null;
        break;

      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsDone = true;
        draft.me.Followings = action.data; // 내 팔로잉 목록에 액션으로 받은 데이터인 아이디를 넣어줌

        break;

      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        break;

      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data; // 내 팔로잉 목록에 액션으로 받은 데이터인 아이디를 넣어줌

        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        draft.loadUserError = null;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        draft.userInfo = action.data;
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followDone = false;
        draft.followError = null;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data.UserId
        }); // 내 팔로잉 목록에 액션으로 받은 데이터인 아이디를 넣어줌

        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowDone = false;
        draft.unfollowError = null;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true; // 아이디가 같지 않은 사람만 남겨둠(언팔로우 한 사람은 제외됨)

        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
        break;

      case REMOVE_FOLLOWER_FAILURE:
        draft.removeFollowerLoading = false;
        draft.removeFollowerDone = false;
        draft.removeFollowerError = action.error;
        break;

      case REMOVE_FOLLOWER_SUCCESS:
        draft.removeFollowerLoading = false;
        draft.removeFollowerDone = true;
        draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
        break;

      case REMOVE_FOLLOWER_FAILURE:
        draft.removeFollowerLoading = false;
        draft.removeFollowerDone = false;
        draft.removeFollowerError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.me = action.data;
        draft.logInDone = true;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;
      // immer 적용 전 작성한 코드
      // return {
      //     ...state,
      //     me : {
      //         ...state.me,
      //         Posts : [{id : action.data}, ...state.me.Posts],
      //     }
      // }

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
        break;
      // return {
      //     ...state,
      //     me : {
      //         ...state.me,
      //         Posts : state.me.Posts.filter((v) => v.id !== action.data),
      //     },
      // };

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./config/config.js");





axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = _config_config__WEBPACK_IMPORTED_MODULE_4__["backUrl"];
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
} // all은 배열 안에 있는 것을 모두 실행
// put은 dispatch와 같은 역할
// fork와 call의 차이점 : fork는 비동기 함수 호출이고 call은 동기 함수 호출
// 즉 fork로 호출하면 결과값이 다 받아와지지 않았음에도 불구하고 action을 실행하고
// call로 호출하면 결과값이 다 받아와진 이후에 action 실행(await 같은 역할)
// call(logInAPI, action.data) 오른쪽 코드와 같음 logInAPI(action.data)
// 간단하게 코드 대체가 가능한데 call과 yield와 같은 effect, 제너레이터를  사용하는 이유
// 에러가 났을 때 코드 한줄한줄 테스트해 볼 수 있기 때문에
// yield와 take는 딱 한번만 실행됨 따라서 while이나 takeEvery라는 effect을 써서 무한 반복되게 함
// while take는 동기적으로 동작하지만 takeEvery는 비동기로 동작한다는 차이가 있다.
// 보통 while은 직관적이지도 않고 코드상으로 보기도 좋지 않아 takeEvery를 주로 씀
// takeLatest란 실수로 로그인 버튼을 연속으로 누르거나 포스팅 버튼을 연속으로 누르거나와 같은 연속적인
// 액션이 일어날때 같은 로딩상태이면(이미 완료된 건 취소X) 앞의 액션은 무시되고 마지막 액션만 실행되게 하는 effect
// 이때 주의점은 프론트가 백엔드에 요청을 두번 했을 때 응답이 한번만 되는 것이지 요청이 한번만 들어오게 하는 것은 아니다.
// 결론 서버에는 데이터가 두 번 저장되는 것
// 따라서 위와 같이 요청이 두 번 서버에 저장되는걸 막기 위해 throttle을 사용한다.
// 예를 들어 throttle ("ADD_POST_REQUEST", addPost, 2000) 이면 2초 안에는 액션이 1번만 보내지도록 제한을 두는 것
// 보통 throttle은 특수한 경우에만 쓰고 takeLastest를 사용하고 백엔드에서 액션을 점검하는 편

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");






function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/post/${data}`); // get에서 data를 넣으려면 주소뒤에 ?키=값으로 쿼리스트링으로 전달
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`); // get에서 data를 넣으려면 주소뒤에 ?키=값으로 쿼리스트링으로 전달
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_HASHTAG_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`); // get에서 data를 넣으려면 주소뒤에 ?키=값으로 쿼리스트링으로 전달
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/posts?lastId=${lastId || 0}`); // get에서 data를 넣으려면 주소뒤에 ?키=값으로 쿼리스트링으로 전달
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post', data);
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}`); // delete의 데이터는 post.id
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data); // post 리듀서 조작

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
      data: result.data
    }); // user 리듀서 조작

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data.postId}/comment`, data); // POST /post/1/comment
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["RETWEET_REQUEST"], retweet);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_REQUEST"], loadPost);
}

function* watchLoadUserPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);
} // post saga에서 action 리듀서 호출
// 요청을 보낸 사람이 누군지 알기 위해서는 쿠키를 보내주어야 하기 때문에 front에서는 withCredentials : true,
// back에서는 cors에서 credentials  true를 해주어야함

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user/followers', data);
}

function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user/followings', data);
}

function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowingsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user');
}

function* loadMyInfo() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user/login', data); // 로그인 요청 보냄
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data); // 로그인 요청에 대한 결과값을 받아서 변수에 저장

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data // 로그인 성공시 결과값 안에 들어있는 data

    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data // 로그인 실패시 결과값 안에 들어있는 data

    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user/logout');
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user', data); // data는 email,password,nickname이 들어있는 객체이다.
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/user/${data}/follow`); // 로그인 요청 보냄
}

function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unfollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchChnageNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChnageNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper); // action을 만들면 history(기록)으로 남는다.
// history가 쌓이면 메모리도 많이 잡아먹고 중앙데이터들이 어떻게 변하는지 보이기때문에
// 보안에도 취약할 수가 있다. 따라 첫번째는 배포용(devtools 연결X) 두번째는 개발용(devtools 연결O)
// compose(applyMiddleware([]))
// composeWithDevTools(applyMiddleware([]))
// 개발자 도구에서 redux를 들어가보면 로그인 로그아웃 기록이 history에 저장되어 확인가능하다.

/***/ }),

/***/ "./util/produce.js":
/*!*************************!*\
  !*** ./util/produce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);


const produceExtended = (...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(...args);
};

/* harmony default export */ __webpack_exports__["default"] = (produceExtended);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9wcm9kdWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiXSwibmFtZXMiOlsiYmFja1VybCIsIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsInJlcG9ydFdlYlZpdGFscyIsIm1ldHJpYyIsImNvbnNvbGUiLCJsb2ciLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwic2luZ2xlUG9zdCIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdCIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsIlJFTU9WRV9JTUFHRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJmaWx0ZXIiLCJ2IiwiaSIsInVuc2hpZnQiLCJlcnJvciIsImNvbmNhdCIsImZpbmQiLCJpZCIsIlBvc3RJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJsZW5ndGgiLCJwb3N0SWQiLCJDb21tZW50cyIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRG9uZSIsImxvYWRGb2xsb3dlcnNFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwibWUiLCJ1c2VySW5mbyIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiRm9sbG93ZXJzIiwiRm9sbG93aW5ncyIsIm5pY2tuYW1lIiwiUG9zdHMiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJyZXR3ZWV0QVBJIiwicmV0d2VldCIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsInVwbG9hZEltYWdlc0FQSSIsInVwbG9hZEltYWdlcyIsInVubGlrZVBvc3RBUEkiLCJkZWxldGUiLCJ1bmxpa2VQb3N0IiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwibG9hZFBvc3RBUEkiLCJnZXQiLCJsb2FkUG9zdCIsImxvYWRIYXNodGFnUG9zdHNBUEkiLCJsYXN0SWQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2FkSGFzaHRhZ1Bvc3RzIiwibG9hZFVzZXJQb3N0c0FQSSIsImxvYWRVc2VyUG9zdHMiLCJsb2FkUG9zdHNBUEkiLCJsb2FkUG9zdHMiLCJhZGRQb3N0QVBJIiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwid2F0Y2hSZXR3ZWV0IiwidGFrZUxhdGVzdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hMb2FkUG9zdCIsIndhdGNoTG9hZFVzZXJQb3N0cyIsIndhdGNoTG9hZFBvc3RzIiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoTG9hZEhhc2h0YWdQb3N0cyIsIndhdGNoQWRkQ29tbWVudCIsInJlbW92ZUZvbGxvd2VyQVBJIiwicmVtb3ZlRm9sbG93ZXIiLCJsb2FkRm9sbG93ZXJzQVBJIiwibG9hZEZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzQVBJIiwibG9hZEZvbGxvd2luZ3MiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsImNoYW5nZU5pY2tuYW1lIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvYWRNeUluZm9BUEkiLCJsb2FkTXlJbmZvIiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoQ2huYWdlTmlja25hbWUiLCJ3YXRjaExvYWRNeUluZm8iLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJwcm9kdWNlRXh0ZW5kZWQiLCJhcmdzIiwiZW5hYmxlRVM1Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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Q0FGckI7QUFHQSxRQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUMvTCxpREFBRCxFQUFVMEwsUUFBVixDQUF6QjtBQUNBSSxPQUFLLENBQUNFLFFBQU4sR0FBaUJULGNBQWMsQ0FBQ1UsR0FBZixDQUFtQi9GLDhDQUFuQixDQUFqQjtBQUNBLFNBQU80RixLQUFQO0FBQ0gsQ0FURDs7QUFXQSxNQUFNL1EsT0FBTyxHQUFHbVIsd0VBQWEsQ0FBQ1osY0FBRCxFQUFpQjtBQUMxQ2EsT0FBSztBQURxQyxDQUFqQixDQUE3QjtBQUllcFIsc0VBQWYsRSxDQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSwyRDs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1xUixlQUFlLEdBQUcsQ0FBQyxHQUFHQyxJQUFKLEtBQWE7QUFDbkNDLHlEQUFTO0FBQ1QsU0FBT3JNLHFEQUFPLENBQUMsR0FBR29NLElBQUosQ0FBZDtBQUNELENBSEQ7O0FBSWVELDhFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBjb25zdCBiYWNrVXJsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwOi8vYXBpLm5vZGViaXJkLmNvbScgOiAnaHR0cDovL2xvY2FsaG9zdDozMDY1JzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnO1xyXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XHJcblxyXG5jb25zdCBBcHAgPSAoIHsgQ29tcG9uZW50IH0gKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgKVxyXG59XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50IDogcHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBvcnRXZWJWaXRhbHMobWV0cmljKSB7XHJcbiAgICBjb25zb2xlLmxvZyhtZXRyaWMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApOyIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuLy8gKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuLy8gc3Ny7J2EIOychO2VmOyXrCBpbmRleCDrpqzrk4DshJwg7LaU6rCAKEhURFJBVEUpXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEhZRFJBVEUgOiBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQgOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgICAgICAgICB1c2VyLFxyXG4gICAgICAgICAgICAgICAgcG9zdCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHMgOiBbXSxcclxuICAgIHNpbmdsZVBvc3QgOiBudWxsLFxyXG4gICAgaW1hZ2VQYXRocyA6IFtdLFxyXG4gICAgaGFzTW9yZVBvc3QgOiB0cnVlLFxyXG4gICAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgdXBsb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICAgIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG4gICAgcmV0d2VldExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmV0d2VldERvbmU6IGZhbHNlLFxyXG4gICAgcmV0d2VldEVycm9yOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gXCJVUExPQURfSU1BR0VTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwiVVBMT0FEX0lNQUdFU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSBcIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gXCJMSUtFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSBcIkxJS0VfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gXCJVTkxJS0VfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gXCJVTkxJS0VfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gXCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfUE9TVFNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9QT1NUU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSBcIkxPQURfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gXCJMT0FEX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9IFwiUkVUV0VFVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSBcIlJFVFdFRVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlIDogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZSA6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfSU1BR0UgOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTIDoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmNvbmNhdChhY3Rpb24uZGF0YSk7IC8vIHJvdXRlcy9wb3N07JeQ7IScIHJlcy5qc29u7Jy866GcIOuwm+yVhOyYqCDsnbTrr7jsp4Ag7KO87IaMXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTIDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpOyAvLyDrqZTsnbjtj6zsiqTtirgg7KSR7JeQ7IScIOyghOuLrOuwm+ydgCDslaHshZjrjbDsnbTthLDsnZgg7Y+s7Iqk7Yq47JWE7J206rCAIOqwmeydgCDqsbgg7LC+7JWE7IScXHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHtpZCA6IGFjdGlvbi5kYXRhLlVzZXJJZH0pOyAvLyDtj6zsiqTtirggTGlrZXJz7JeQIOyii+yVhOyalOulvCDriITrpbgg7IKs656MKOyCrOyaqeyekOyVhOydtOuUlCnsnZgg7JWE7J2065SU66W8IOuEo+uKlOuLpC5cclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUyA6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTIDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIDogXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTIDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUyA6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpOyAvLyBkdW1teVBvc3Trpbwg7JWe7JeQIOy2lOqwgO2VtOyVvOyngCDqsozsi5zquIDsnbQg7JyE66GcIOyMk+yehDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1MgOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUyA6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyDrtojrs4DshLHsnYQg7KeA7YKk6riwIOychO2VtCDslYTrnpjsmYAg6rCZ7J20IOyekeyEse2WiOuNmCDsvZTrk5zrpbwgaW1tZXLrpbwg7IKs7Jqp7ZWY66m0IOychOydmCDsvZTrk5zroZwg7KCV66asIOqwgOuKpVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3QgPSB7Li4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF19O1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1haW5Qb3N0cyxcclxuICAgICAgICAgICAgICAgIC8vICAgICBhZGRDb21tZW50TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnREb25lIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG59KTtcclxuICAgIFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcblxyXG4vLyDrtojrs4DshLHsnYQg7JyE7ZW0IGltbWVyIOyCrOyaqSjslYzslYTshJwg67aI67OA7ISx7J2EIOycoOyngO2VtOykjCkiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvYWRNeUluZm9Mb2FkaW5nIDogZmFsc2UsXHJcbiAgICBsb2FkTXlJbmZvRG9uZSA6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRNeUluZm9FcnJvciA6IG51bGwsXHJcbiAgICBsb2FkVXNlckxvYWRpbmcgOiBmYWxzZSxcclxuICAgIGxvYWRVc2VyRG9uZSA6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRVc2VyRXJyb3IgOiBudWxsLFxyXG4gICAgZm9sbG93TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgZm9sbG93RG9uZSA6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dFcnJvciA6IG51bGwsXHJcbiAgICB1bmZvbGxvd0xvYWRpbmcgOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RG9uZSA6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICB1bmZvbGxvd0Vycm9yIDogbnVsbCxcclxuICAgIGxvZ0luTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9nSW5Eb25lIDogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ0luRXJyb3IgOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZyA6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lIDogZmFsc2UsXHJcbiAgICBsb2dPdXRFcnJvciA6IG51bGwsXHJcbiAgICBzaWduVXBMb2FkaW5nIDogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmUgOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yIDogbnVsbCxcclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZyA6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lIDogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yIDogbnVsbCxcclxuICAgIGxvYWRGb2xsb3dlcnNMb2FkaW5nIDogZmFsc2UsIC8vIO2MlOuhnOybjCDrqqnroZ0g6rCA7KC47Jik6riwIOyLnOuPhOykkVxyXG4gICAgbG9hZEZvbGxvd2Vyc0RvbmUgOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dlcnNFcnJvciA6IG51bGwsXHJcbiAgICBsb2FkRm9sbG93aW5nc0xvYWRpbmcgOiBmYWxzZSwgLy8g7YyU66Gc7J6JIOuqqeuhnSDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkRm9sbG93aW5nc0RvbmUgOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dpbmdzRXJyb3IgOiBudWxsLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJMb2FkaW5nIDogZmFsc2UsXHJcbiAgICByZW1vdmVGb2xsb3dlckRvbmUgOiBmYWxzZSwgLy8g7YyU66Gc7JuMIOygnOqxsCDsi5zrj4TspJFcclxuICAgIHJlbW92ZUZvbGxvd2VyRXJyb3IgOiBudWxsLFxyXG4gICAgbWUgOiBudWxsLFxyXG4gICAgdXNlckluZm8gOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7IC8vIOuCtCDtjJTroZzsnokg66qp66Gd7JeQIOyVoeyFmOycvOuhnCDrsJvsnYAg642w7J207YSw7J24IOyVhOydtOuUlOulvCDrhKPslrTspIxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7IC8vIOuCtCDtjJTroZzsnokg66qp66Gd7JeQIOyVoeyFmOycvOuhnCDrsJvsnYAg642w7J207YSw7J24IOyVhOydtOuUlOulvCDrhKPslrTspIxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQgOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTsgLy8g64K0IO2MlOuhnOyeiSDrqqnroZ3sl5Ag7JWh7IWY7Jy866GcIOuwm+ydgCDrjbDsnbTthLDsnbgg7JWE7J2065SU66W8IOuEo+yWtOykjFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyDslYTsnbTrlJTqsIAg6rCZ7KeAIOyViuydgCDsgqzrnozrp4wg64Ko6rKo65GgKOyWuO2MlOuhnOyasCDtlZwg7IKs656M7J2AIOygnOyZuOuQqClcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1MgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7aWQgOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyBpbW1lciDsoIHsmqkg7KCEIOyekeyEse2VnCDsvZTrk5xcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWUgOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBQb3N0cyA6IFt7aWQgOiBhY3Rpb24uZGF0YX0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWUgOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBQb3N0cyA6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7YWxsLCBmb3JrfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQge2JhY2tVcmx9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGJhY2tVcmw7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgXSk7XHJcbn1cclxuXHJcbi8vIGFsbOydgCDrsLDsl7Qg7JWI7JeQIOyeiOuKlCDqsoPsnYQg66qo65GQIOyLpO2WiVxyXG4vLyBwdXTsnYAgZGlzcGF0Y2jsmYAg6rCZ7J2AIOyXre2VoFxyXG4vLyBmb3Jr7JmAIGNhbGzsnZgg7LCo7J207KCQIDogZm9ya+uKlCDruYTrj5nquLAg7ZWo7IiYIO2YuOy2nOydtOqzoCBjYWxs7J2AIOuPmeq4sCDtlajsiJgg7Zi47LacXHJcbi8vIOymiSBmb3Jr66GcIO2YuOy2nO2VmOuptCDqsrDqs7zqsJLsnbQg64ukIOuwm+yVhOyZgOyngOyngCDslYrslZjsnYzsl5Drj4Qg67aI6rWs7ZWY6rOgIGFjdGlvbuydhCDsi6TtlontlZjqs6BcclxuLy8gY2FsbOuhnCDtmLjstpztlZjrqbQg6rKw6rO86rCS7J20IOuLpCDrsJvslYTsmYDsp4Qg7J207ZuE7JeQIGFjdGlvbiDsi6TtlokoYXdhaXQg6rCZ7J2AIOyXre2VoClcclxuLy8gY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpIOyYpOuluOyqvSDsvZTrk5zsmYAg6rCZ7J2MIGxvZ0luQVBJKGFjdGlvbi5kYXRhKVxyXG5cclxuLy8g6rCE64uo7ZWY6rKMIOy9lOuTnCDrjIDssrTqsIAg6rCA64ql7ZWc642wIGNhbGzqs7wgeWllbGTsmYAg6rCZ7J2AIGVmZmVjdCwg7KCc64SI66CI7J207YSw66W8ICDsgqzsmqntlZjripQg7J207JygXHJcbi8vIOyXkOufrOqwgCDrgqzsnYQg65WMIOy9lOuTnCDtlZzspITtlZzspIQg7YWM7Iqk7Yq47ZW0IOuzvCDsiJgg7J6I6riwIOuVjOusuOyXkFxyXG5cclxuLy8geWllbGTsmYAgdGFrZeuKlCDrlLEg7ZWc67KI66eMIOyLpO2WieuQqCDrlLDrnbzshJwgd2hpbGXsnbTrgpggdGFrZUV2ZXJ5652864qUIGVmZmVjdOydhCDsjajshJwg66y07ZWcIOuwmOuzteuQmOqyjCDtlahcclxuLy8gd2hpbGUgdGFrZeuKlCDrj5nquLDsoIHsnLzroZwg64+Z7J6R7ZWY7KeA66eMIHRha2VFdmVyeeuKlCDruYTrj5nquLDroZwg64+Z7J6R7ZWc64uk64qUIOywqOydtOqwgCDsnojri6QuXHJcbi8vIOuztO2GtSB3aGlsZeydgCDsp4HqtIDsoIHsnbTsp4Drj4Qg7JWK6rOgIOy9lOuTnOyDgeycvOuhnCDrs7TquLDrj4Qg7KKL7KeAIOyViuyVhCB0YWtlRXZlcnnrpbwg7KO866GcIOyUgFxyXG5cclxuLy8gdGFrZUxhdGVzdOuegCDsi6TsiJjroZwg66Gc6re47J24IOuyhO2KvOydhCDsl7Dsho3snLzroZwg64iE66W06rGw64KYIO2PrOyKpO2MhSDrsoTtirzsnYQg7Jew7IaN7Jy866GcIOuIhOultOqxsOuCmOyZgCDqsJnsnYAg7Jew7IaN7KCB7J24XHJcbi8vIOyVoeyFmOydtCDsnbzslrTrgqDrlYwg6rCZ7J2AIOuhnOuUqeyDge2DnOydtOuptCjsnbTrr7gg7JmE66OM65CcIOqxtCDst6jshoxYKSDslZ7snZgg7JWh7IWY7J2AIOustOyLnOuQmOqzoCDrp4jsp4Drp4kg7JWh7IWY66eMIOyLpO2WieuQmOqyjCDtlZjripQgZWZmZWN0XHJcbi8vIOydtOuVjCDso7zsnZjsoJDsnYAg7ZSE66Gg7Yq46rCAIOuwseyXlOuTnOyXkCDsmpTssq3snYQg65GQ67KIIO2WiOydhCDrlYwg7J2R64u17J20IO2VnOuyiOunjCDrkJjripQg6rKD7J207KeAIOyalOyyreydtCDtlZzrsojrp4wg65Ok7Ja07Jik6rKMIO2VmOuKlCDqsoPsnYAg7JWE64uI64ukLlxyXG4vLyDqsrDroaAg7ISc67KE7JeQ64qUIOuNsOydtO2EsOqwgCDrkZAg67KIIOyggOyepeuQmOuKlCDqsoNcclxuXHJcbi8vIOuUsOudvOyEnCDsnITsmYAg6rCZ7J20IOyalOyyreydtCDrkZAg67KIIOyEnOuyhOyXkCDsoIDsnqXrkJjripTqsbgg66eJ6riwIOychO2VtCB0aHJvdHRsZeydhCDsgqzsmqntlZzri6QuXHJcbi8vIOyYiOulvCDrk6TslrQgdGhyb3R0bGUgKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LCAyMDAwKSDsnbTrqbQgMuy0iCDslYjsl5DripQg7JWh7IWY7J20IDHrsojrp4wg67O064K07KeA64+E66GdIOygnO2VnOydhCDrkZDripQg6rKDXHJcbi8vIOuztO2GtSB0aHJvdHRsZeydgCDtirnsiJjtlZwg6rK97Jqw7JeQ66eMIOyTsOqzoCB0YWtlTGFzdGVzdOulvCDsgqzsmqntlZjqs6Ag67Cx7JeU65Oc7JeQ7IScIOyVoeyFmOydhCDsoJDqsoDtlZjripQg7Y64IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHthbGwsIGZvcmssIHRha2VMYXRlc3QsIHB1dCwgdGhyb3R0bGUsIGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgeyBcclxuICAgIEFERF9QT1NUX1JFUVVFU1QsIEFERF9DT01NRU5UX1JFUVVFU1QsIFxyXG4gICAgQUREX1BPU1RfU1VDQ0VTUywgQUREX0NPTU1FTlRfU1VDQ0VTUywgXHJcbiAgICBBRERfUE9TVF9GQUlMVVJFLCBBRERfQ09NTUVOVF9GQUlMVVJFLCBcclxuICAgIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSAsIExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIExPQURfUE9TVFNfU1VDQ0VTUywgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgTElLRV9QT1NUX1JFUVVFU1QsIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgVU5MSUtFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfU1VDQ0VTUywgTElLRV9QT1NUX0ZBSUxVUkUsIFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUywgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgUkVUV0VFVF9SRVFVRVNULCBSRVRXRUVUX1NVQ0NFU1MsIFJFVFdFRVRfRkFJTFVSRSxcclxuICAgIExPQURfUE9TVF9SRVFVRVNULCBMT0FEX1BPU1RfU1VDQ0VTUywgTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsIExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gICAgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRVxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSAsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5cclxuZnVuY3Rpb24gcmV0d2VldEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCk7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKTtcclxufVxyXG4gIFxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKSBcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLCBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdC8ke2RhdGF9YCkgLy8gZ2V07JeQ7IScIGRhdGHrpbwg64Sj7Jy866Ck66m0IOyjvOyGjOuSpOyXkCA/7YKkPeqwkuycvOuhnCDsv7zrpqzsiqTtirjrp4HsnLzroZwg7KCE64usXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIYXNodGFnUG9zdHNBUEkoZGF0YSwgbGFzdElkKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvaGFzaHRhZy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0/bGFzdElkPSR7bGFzdElkIHx8IDB9YCkgLy8gZ2V07JeQ7IScIGRhdGHrpbwg64Sj7Jy866Ck66m0IOyjvOyGjOuSpOyXkCA/7YKkPeqwkuycvOuhnCDsv7zrpqzsiqTtirjrp4HsnLzroZwg7KCE64usXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyUG9zdHNBUEkoZGF0YSwgbGFzdElkKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9L3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApIC8vIGdldOyXkOyEnCBkYXRh66W8IOuEo+ycvOugpOuptCDso7zshozrkqTsl5AgP+2CpD3qsJLsnLzroZwg7L+866as7Iqk7Yq466eB7Jy866GcIOyghOuLrFxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXJQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKSAvLyBnZXTsl5DshJwgZGF0YeulvCDrhKPsnLzroKTrqbQg7KO87IaM65Kk7JeQID/tgqQ96rCS7Jy866GcIOy/vOumrOyKpO2KuOungeycvOuhnCDsoITri6xcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCAgZGF0YSkgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YS5pZCxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApIC8vIGRlbGV0ZeydmCDrjbDsnbTthLDripQgcG9zdC5pZFxyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgLy8gcG9zdCDrpqzrk4DshJwg7KGw7J6RXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB1c2VyIOumrOuTgOyEnCDsobDsnpFcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgICAgIGRhdGEgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7IC8vIFBPU1QgL3Bvc3QvMS9jb21tZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZXR3ZWV0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdCggUkVUV0VFVF9SRVFVRVNULCByZXR3ZWV0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdCggVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJQb3N0cygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIGxvYWRVc2VyUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoIExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoUmV0d2VldCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVubGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgXSlcclxufVxyXG5cclxuXHJcbi8vIHBvc3Qgc2FnYeyXkOyEnCBhY3Rpb24g66as65OA7IScIO2YuOy2nFxyXG5cclxuLy8g7JqU7LKt7J2EIOuztOuCuCDsgqzrnozsnbQg64iE6rWw7KeAIOyVjOq4sCDsnITtlbTshJzripQg7L+g7YKk66W8IOuztOuCtOyjvOyWtOyVvCDtlZjquLAg65WM66y47JeQIGZyb2507JeQ7ISc64qUIHdpdGhDcmVkZW50aWFscyA6IHRydWUsXHJcbi8vIGJhY2vsl5DshJzripQgY29yc+yXkOyEnCBjcmVkZW50aWFscyAgdHJ1ZeulvCDtlbTso7zslrTslbztlagiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBcclxuICAgIExPR19JTl9TVUNDRVNTLCBMT0dfT1VUX1NVQ0NFU1MsIFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIExPR19JTl9SRVFVRVNULCBMT0dfT1VUX1JFUVVFU1QsIFNJR05fVVBfUkVRVUVTVCxcclxuICAgIExPR19JTl9GQUlMVVJFLCBMT0dfT1VUX0ZBSUxVUkUsIFNJR05fVVBfRkFJTFVSRSxcclxuICAgIEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUywgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBVTkZPTExPV19SRVFVRVNULCBVTkZPTExPV19TVUNDRVNTLCBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIExPQURfTVlfSU5GT19TVUNDRVNTLCBMT0FEX01ZX0lORk9fRkFJTFVSRSwgXHJcbiAgICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUywgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUywgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsIFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgIExPQURfVVNFUl9SRVFVRVNULCBMT0FEX1VTRVJfU1VDQ0VTUywgTE9BRF9VU0VSX0ZBSUxVUkVcclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93ZXIvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlRm9sbG93ZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlRm9sbG93ZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2VycycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2VycyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dpbmdzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2luZ3MnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7bmlja25hbWUgOiBkYXRhfSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSwgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSwgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpOyAvLyDroZzqt7jsnbgg7JqU7LKtIOuztOuDhFxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTsgLy8g66Gc6re47J24IOyalOyyreyXkCDrjIDtlZwg6rKw6rO86rCS7J2EIOuwm+yVhOyEnCDrs4DsiJjsl5Ag7KCA7J6lXHJcbiAgICAgICAgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogcmVzdWx0LmRhdGEsIC8vIOuhnOq3uOyduCDshLHqs7Xsi5wg6rKw6rO86rCSIOyViOyXkCDrk6TslrTsnojripQgZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLCAvLyDroZzqt7jsnbgg7Iuk7Yyo7IucIOqysOqzvOqwkiDslYjsl5Ag65Ok7Ja07J6I64qUIGRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKSAvLyBkYXRh64qUIGVtYWlsLHBhc3N3b3JkLG5pY2tuYW1l7J20IOuTpOyWtOyeiOuKlCDqsJ3ssrTsnbTri6QuXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7IFxyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGEsIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTsgLy8g66Gc6re47J24IOyalOyyrSDrs7Trg4RcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIHJlbW92ZUZvbGxvd2VyKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93ZXJzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBsb2FkRm9sbG93ZXJzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRGb2xsb3dpbmdzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hDaG5hZ2VOaWNrbmFtZSgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQ2huYWdlTmlja25hbWUpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93aW5ncyksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoe2Rpc3BhdGNoLCBnZXRTdGF0ZX0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICAgIGRlYnVnIDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuXHJcbi8vIGFjdGlvbuydhCDrp4zrk6TrqbQgaGlzdG9yeSjquLDroZ0p7Jy866GcIOuCqOuKlOuLpC5cclxuXHJcbi8vIGhpc3RvcnnqsIAg7IyT7J2066m0IOuplOuqqOumrOuPhCDrp47snbQg7J6h7JWE66i56rOgIOykkeyVmeuNsOydtO2EsOuTpOydtCDslrTrlrvqsowg67OA7ZWY64qU7KeAIOuztOydtOq4sOuVjOusuOyXkFxyXG4vLyDrs7TslYjsl5Drj4Qg7Leo7JW97ZWgIOyImOqwgCDsnojri6QuIOuUsOudvCDssqvrsojsp7jripQg67Cw7Y+s7JqpKGRldnRvb2xzIOyXsOqysFgpIOuRkOuyiOynuOuKlCDqsJzrsJzsmqkoZGV2dG9vbHMg7Jew6rKwTylcclxuLy8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoW10pKVxyXG4vLyBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZShbXSkpXHJcblxyXG4vLyDqsJzrsJzsnpAg64+E6rWs7JeQ7IScIHJlZHV466W8IOuTpOyWtOqwgOuztOuptCDroZzqt7jsnbgg66Gc6re47JWE7JuDIOq4sOuhneydtCBoaXN0b3J57JeQIOyggOyepeuQmOyWtCDtmZXsnbjqsIDriqXtlZjri6QuIiwiaW1wb3J0IHsgZW5hYmxlRVM1LCBwcm9kdWNlIH0gZnJvbSAnaW1tZXInO1xyXG5cclxuY29uc3QgcHJvZHVjZUV4dGVuZGVkID0gKC4uLmFyZ3MpID0+IHtcclxuICBlbmFibGVFUzUoKTtcclxuICByZXR1cm4gcHJvZHVjZSguLi5hcmdzKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjZUV4dGVuZGVkOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
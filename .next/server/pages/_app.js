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

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\Users\\kimsooin\\Desktop\\\uACF5\uBD80\uAE30\uB85D\\\uACF5\uBD80\uAE30\uB85D\\22.04 \uACF5\uBD80\uAE30\uB85D\\next-study\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const App = ({
  Component
}) => {
  return __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  });
};

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
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
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // ssr을 위하여 index 리듀서 추가(HTDRATE)

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, addPost, addComment, default */
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
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
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
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

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
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
        draft.imagePaths = action.data; // routes/post에서 res.json으로 받아온 이미지 주소

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
/*! exports provided: initialState, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  // 유저 정보 가져오기 시도중
  loadMyInfoError: null,
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
  signUpDate: {},
  loginData: {}
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
    type: LOG_OUT_REQUEST,
    data
  };
};

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersDone = false;
        draft.loadFollowersError = null;
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        draft.me.FOLLOW_REQUEST = action.data; // 내 팔로잉 목록에 액션으로 받은 데이터인 아이디를 넣어줌

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
        draft.logInError = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInDone = false;
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




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
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
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["RETWEET_FAILURE"],
      error: err.reponse.data
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
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_FAILURE"],
      error: err.reponse.data
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
      error: err.reponse.data
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
      error: err.reponse.data
    });
  }
}

function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/posts', data);
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
      error: err.reponse.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post', data);
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);
    const id = shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate();
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
      error: err.reponse.data
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
      error: err.reponse.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data.postId}/comment`, data);
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
      error: err.reponse.data
    });
  }
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["RETWEET_REQUEST"], retweet);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);
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

function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user');
}

function* loadMyInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.reponse.data
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
      error: err.reponse.data
    });
  }
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/user/${data}/follow`, data); // 로그인 요청 보냄
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
      error: err.reponse.data
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

function logOutAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user/logout', data);
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user', data); // daata는 email,password,nickname이 들어있는 객체이다.
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChnageNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);
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
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux-saga/core */ "@redux-saga/core");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_3__);
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
  const sagaMiddleware = _redux_saga_core__WEBPACK_IMPORTED_MODULE_3___default()();
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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@redux-saga/core":
/*!***********************************!*\
  !*** external "@redux-saga/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eC1zYWdhL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdCIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJyZXR3ZWV0TG9hZGluZyIsInJldHdlZXREb25lIiwicmV0d2VldEVycm9yIiwiUkVNT1ZFX0lNQUdFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImZpbHRlciIsInYiLCJpIiwidW5zaGlmdCIsImVycm9yIiwiZmluZCIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsImNvbmNhdCIsImxlbmd0aCIsInBvc3RJZCIsIkNvbW1lbnRzIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsIm1lIiwic2lnblVwRGF0ZSIsImxvZ2luRGF0YSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsIm5pY2tuYW1lIiwiUG9zdHMiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJyZXR3ZWV0QVBJIiwicmV0d2VldCIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJlcnIiLCJyZXBvbnNlIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwidW5saWtlUG9zdEFQSSIsImRlbGV0ZSIsInVubGlrZVBvc3QiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJsb2FkUG9zdHNBUEkiLCJnZXQiLCJsb2FkUG9zdHMiLCJhZGRQb3N0QVBJIiwic2hvcnRpZCIsImdlbmVyYXRlIiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50QVBJIiwid2F0Y2hSZXR3ZWV0IiwidGFrZUxhdGVzdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoTG9hZFBvc3QiLCJ0aHJvdHRsZSIsIndhdGNoQWRkUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsInJlbW92ZUZvbGxvd2VyQVBJIiwicmVtb3ZlRm9sbG93ZXIiLCJyZXNwb25zZSIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJsb2dJbkFQSSIsImxvZ0luIiwibG9nT3V0QVBJIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwid2F0Y2hSZW1vdmVGb2xsb3dlciIsIndhdGNoTG9hZEZvbGxvd2VycyIsIndhdGNoTG9hZEZvbGxvd2luZ3MiLCJ3YXRjaENobmFnZU5pY2tuYW1lIiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUU7QUFBRUM7QUFBRixDQUFGLEtBQXFCO0FBQzdCLFNBQ0ksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESjtBQUdILENBSkQ7O0FBTUFELEdBQUcsQ0FBQ0UsU0FBSixHQUFnQjtBQUNaRCxXQUFTLEVBQUdDLGlEQUFTLENBQUND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Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBBcHAgPSAoIHsgQ29tcG9uZW50IH0gKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgKVxyXG59XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50IDogcHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7IiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuXHJcbi8vIHNzcuydhCDsnITtlZjsl6wgaW5kZXgg66as65OA7IScIOy2lOqwgChIVERSQVRFKVxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbmRleCA6ICAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEUgOiBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlcixcclxuICAgIHBvc3QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzIDogW10sXHJcbiAgICBpbWFnZVBhdGhzIDogW10sXHJcbiAgICBoYXNNb3JlUG9zdCA6IHRydWUsXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNEb25lIDogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvciA6IG51bGwsXHJcbiAgICBsaWtlUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgbGlrZVBvc3RFcnJvciA6IG51bGwsXHJcbiAgICB1bmxpa2VQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3RFcnJvciA6IG51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvciA6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmUgOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvciA6IG51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvciA6IG51bGwsXHJcbiAgICB1cGxvYWRJbWFnZXNMb2FkaW5nIDogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNEb25lIDogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNFcnJvciA6IG51bGwsXHJcbiAgICByZXR3ZWV0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgcmV0d2VldERvbmUgOiBmYWxzZSxcclxuICAgIHJldHdlZXRFcnJvciA6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSBcIlVQTE9BRF9JTUFHRVNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gXCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9IFwiVVBMT0FEX0lNQUdFU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSBcIkxJS0VfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwiTElLRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gXCJMSUtFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSBcIlVOTElLRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSBcIlVOTElLRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSBcIlVOTElLRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfUE9TVFNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9QT1NUU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gXCJSRVRXRUVUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9IFwiUkVUV0VFVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+KHtcclxuICAgIHR5cGUgOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlIDogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9JTUFHRSA6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1MgOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTIDoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhOyAvLyByb3V0ZXMvcG9zdOyXkOyEnCByZXMuanNvbuycvOuhnCDrsJvslYTsmKgg7J2066+47KeAIOyjvOyGjFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUyA6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTsgLy8g66mU7J247Y+s7Iqk7Yq4IOykkeyXkOyEnCDsoITri6zrsJvsnYAg7JWh7IWY642w7J207YSw7J2YIO2PrOyKpO2KuOyVhOydtOqwgCDqsJnsnYAg6rG4IOywvuyVhOyEnFxyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMucHVzaCh7aWQgOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTsgLy8g7Y+s7Iqk7Yq4IExpa2Vyc+yXkCDsoovslYTsmpTrpbwg64iE66W4IOyCrOuejCjsgqzsmqnsnpDslYTsnbTrlJQp7J2YIOyVhOydtOuUlOulvCDrhKPripTri6QuXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1MgOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTIDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1MgOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTsgLy8gZHVtbXlQb3N066W8IOyVnuyXkCDstpTqsIDtlbTslbzsp4Ag6rKM7Iuc6riA7J20IOychOuhnCDsjJPsnoQ7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTIDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIOu2iOuzgOyEseydhCDsp4DtgqTquLAg7JyE7ZW0IOyVhOuemOyZgCDqsJnsnbQg7J6R7ISx7ZaI642YIOy9lOuTnOulvCBpbW1lcuulvCDsgqzsmqntlZjrqbQg7JyE7J2YIOy9lOuTnOuhnCDsoJXrpqwg6rCA64qlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcG9zdCA9IHsuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XX07XHJcbiAgICAgICAgICAgICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudERvbmUgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG59KTtcclxuICAgIFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcblxyXG4vLyDrtojrs4DshLHsnYQg7JyE7ZW0IGltbWVyIOyCrOyaqSjslYzslYTshJwg67aI67OA7ISx7J2EIOycoOyngO2VtOykjCkiLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2FkTXlJbmZvTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0RvbmUgOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkTXlJbmZvRXJyb3IgOiBudWxsLFxyXG4gICAgZm9sbG93TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgZm9sbG93RG9uZSA6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dFcnJvciA6IG51bGwsXHJcbiAgICB1bmZvbGxvd0xvYWRpbmcgOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RG9uZSA6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICB1bmZvbGxvd0Vycm9yIDogbnVsbCxcclxuICAgIGxvZ0luTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9nSW5Eb25lIDogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ0luRXJyb3IgOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZyA6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lIDogZmFsc2UsXHJcbiAgICBsb2dPdXRFcnJvciA6IG51bGwsXHJcbiAgICBzaWduVXBMb2FkaW5nIDogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmUgOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yIDogbnVsbCxcclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZyA6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lIDogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yIDogbnVsbCxcclxuICAgIGxvYWRGb2xsb3dlcnNMb2FkaW5nIDogZmFsc2UsIC8vIO2MlOuhnOybjCDrqqnroZ0g6rCA7KC47Jik6riwIOyLnOuPhOykkVxyXG4gICAgbG9hZEZvbGxvd2Vyc0RvbmUgOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dlcnNFcnJvciA6IG51bGwsXHJcbiAgICBsb2FkRm9sbG93aW5nc0xvYWRpbmcgOiBmYWxzZSwgLy8g7YyU66Gc7J6JIOuqqeuhnSDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkRm9sbG93aW5nc0RvbmUgOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dpbmdzRXJyb3IgOiBudWxsLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJMb2FkaW5nIDogZmFsc2UsXHJcbiAgICByZW1vdmVGb2xsb3dlckRvbmUgOiBmYWxzZSwgLy8g7YyU66Gc7JuMIOygnOqxsCDsi5zrj4TspJFcclxuICAgIHJlbW92ZUZvbGxvd2VyRXJyb3IgOiBudWxsLFxyXG4gICAgbWUgOiBudWxsLFxyXG4gICAgc2lnblVwRGF0ZSA6IHt9LFxyXG4gICAgbG9naW5EYXRhIDoge30sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRk9MTE9XX1JFUVVFU1QgPSBhY3Rpb24uZGF0YTsgLy8g64K0IO2MlOuhnOyeiSDrqqnroZ3sl5Ag7JWh7IWY7Jy866GcIOuwm+ydgCDrjbDsnbTthLDsnbgg7JWE7J2065SU66W8IOuEo+yWtOykjFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7IC8vIOuCtCDtjJTroZzsnokg66qp66Gd7JeQIOyVoeyFmOycvOuhnCDrsJvsnYAg642w7J207YSw7J24IOyVhOydtOuUlOulvCDrhKPslrTspIxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7IC8vIOuCtCDtjJTroZzsnokg66qp66Gd7JeQIOyVoeyFmOycvOuhnCDrsJvsnYAg642w7J207YSw7J24IOyVhOydtOuUlOulvCDrhKPslrTspIxcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHtpZCA6IGFjdGlvbi5kYXRhLlVzZXJJZH0pOyAvLyDrgrQg7YyU66Gc7J6JIOuqqeuhneyXkCDslaHshZjsnLzroZwg67Cb7J2AIOuNsOydtO2EsOyduCDslYTsnbTrlJTrpbwg64Sj7Ja07KSMXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIOyVhOydtOuUlOqwgCDqsJnsp4Ag7JWK7J2AIOyCrOuejOunjCDrgqjqsqjrkaAo7Ja47YyU66Gc7JqwIO2VnCDsgqzrnozsnYAg7KCc7Jm465CoKVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1MgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUyA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHtpZCA6IGFjdGlvbi5kYXRhfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIGltbWVyIOyggeyaqSDsoIQg7J6R7ISx7ZWcIOy9lOuTnFxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBtZSA6IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIFBvc3RzIDogW3tpZCA6IGFjdGlvbi5kYXRhfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBtZSA6IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIFBvc3RzIDogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHthbGwsIGZvcmt9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NSc7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgXSk7XHJcbn1cclxuXHJcbi8vIGFsbOydgCDrsLDsl7Qg7JWI7JeQIOyeiOuKlCDqsoPsnYQg66qo65GQIOyLpO2WiVxyXG4vLyBwdXTsnYAgZGlzcGF0Y2jsmYAg6rCZ7J2AIOyXre2VoFxyXG4vLyBmb3Jr7JmAIGNhbGzsnZgg7LCo7J207KCQIDogZm9ya+uKlCDruYTrj5nquLAg7ZWo7IiYIO2YuOy2nOydtOqzoCBjYWxs7J2AIOuPmeq4sCDtlajsiJgg7Zi47LacXHJcbi8vIOymiSBmb3Jr66GcIO2YuOy2nO2VmOuptCDqsrDqs7zqsJLsnbQg64ukIOuwm+yVhOyZgOyngOyngCDslYrslZjsnYzsl5Drj4Qg67aI6rWs7ZWY6rOgIGFjdGlvbuydhCDsi6TtlontlZjqs6BcclxuLy8gY2FsbOuhnCDtmLjstpztlZjrqbQg6rKw6rO86rCS7J20IOuLpCDrsJvslYTsmYDsp4Qg7J207ZuE7JeQIGFjdGlvbiDsi6TtlokoYXdhaXQg6rCZ7J2AIOyXre2VoClcclxuLy8gY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpIOyYpOuluOyqvSDsvZTrk5zsmYAg6rCZ7J2MIGxvZ0luQVBJKGFjdGlvbi5kYXRhKVxyXG5cclxuLy8g6rCE64uo7ZWY6rKMIOy9lOuTnCDrjIDssrTqsIAg6rCA64ql7ZWc642wIGNhbGzqs7wgeWllbGTsmYAg6rCZ7J2AIGVmZmVjdCwg7KCc64SI66CI7J207YSw66W8ICDsgqzsmqntlZjripQg7J207JygXHJcbi8vIOyXkOufrOqwgCDrgqzsnYQg65WMIOy9lOuTnCDtlZzspITtlZzspIQg7YWM7Iqk7Yq47ZW0IOuzvCDsiJgg7J6I6riwIOuVjOusuOyXkFxyXG5cclxuLy8geWllbGTsmYAgdGFrZeuKlCDrlLEg7ZWc67KI66eMIOyLpO2WieuQqCDrlLDrnbzshJwgd2hpbGXsnbTrgpggdGFrZUV2ZXJ5652864qUIGVmZmVjdOydhCDsjajshJwg66y07ZWcIOuwmOuzteuQmOqyjCDtlahcclxuLy8gd2hpbGUgdGFrZeuKlCDrj5nquLDsoIHsnLzroZwg64+Z7J6R7ZWY7KeA66eMIHRha2VFdmVyeeuKlCDruYTrj5nquLDroZwg64+Z7J6R7ZWc64uk64qUIOywqOydtOqwgCDsnojri6QuXHJcbi8vIOuztO2GtSB3aGlsZeydgCDsp4HqtIDsoIHsnbTsp4Drj4Qg7JWK6rOgIOy9lOuTnOyDgeycvOuhnCDrs7TquLDrj4Qg7KKL7KeAIOyViuyVhCB0YWtlRXZlcnnrpbwg7KO866GcIOyUgFxyXG5cclxuLy8gdGFrZUxhdGVzdOuegCDsi6TsiJjroZwg66Gc6re47J24IOuyhO2KvOydhCDsl7Dsho3snLzroZwg64iE66W06rGw64KYIO2PrOyKpO2MhSDrsoTtirzsnYQg7Jew7IaN7Jy866GcIOuIhOultOqxsOuCmOyZgCDqsJnsnYAg7Jew7IaN7KCB7J24XHJcbi8vIOyVoeyFmOydtCDsnbzslrTrgqDrlYwg6rCZ7J2AIOuhnOuUqeyDge2DnOydtOuptCjsnbTrr7gg7JmE66OM65CcIOqxtCDst6jshoxYKSDslZ7snZgg7JWh7IWY7J2AIOustOyLnOuQmOqzoCDrp4jsp4Drp4kg7JWh7IWY66eMIOyLpO2WieuQmOqyjCDtlZjripQgZWZmZWN0XHJcbi8vIOydtOuVjCDso7zsnZjsoJDsnYAg7ZSE66Gg7Yq46rCAIOuwseyXlOuTnOyXkCDsmpTssq3snYQg65GQ67KIIO2WiOydhCDrlYwg7J2R64u17J20IO2VnOuyiOunjCDrkJjripQg6rKD7J207KeAIOyalOyyreydtCDtlZzrsojrp4wg65Ok7Ja07Jik6rKMIO2VmOuKlCDqsoPsnYAg7JWE64uI64ukLlxyXG4vLyDqsrDroaAg7ISc67KE7JeQ64qUIOuNsOydtO2EsOqwgCDrkZAg67KIIOyggOyepeuQmOuKlCDqsoNcclxuXHJcbi8vIOuUsOudvOyEnCDsnITsmYAg6rCZ7J20IOyalOyyreydtCDrkZAg67KIIOyEnOuyhOyXkCDsoIDsnqXrkJjripTqsbgg66eJ6riwIOychO2VtCB0aHJvdHRsZeydhCDsgqzsmqntlZzri6QuXHJcbi8vIOyYiOulvCDrk6TslrQgdGhyb3R0bGUgKFwiQUREX1BPU1RfUkVRVUVTVFwiLCBhZGRQb3N0LCAyMDAwKSDsnbTrqbQgMuy0iCDslYjsl5DripQg7JWh7IWY7J20IDHrsojrp4wg67O064K07KeA64+E66GdIOygnO2VnOydhCDrkZDripQg6rKDXHJcbi8vIOuztO2GtSB0aHJvdHRsZeydgCDtirnsiJjtlZwg6rK97Jqw7JeQ66eMIOyTsOqzoCB0YWtlTGFzdGVzdOulvCDsgqzsmqntlZjqs6Ag67Cx7JeU65Oc7JeQ7IScIOyVoeyFmOydhCDsoJDqsoDtlZjripQg7Y64IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHthbGwsIGZvcmssIGRlbGF5LCB0YWtlTGF0ZXN0LCBwdXQsIHRocm90dGxlLCBjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHsgXHJcbiAgICBBRERfUE9TVF9SRVFVRVNULCBBRERfQ09NTUVOVF9SRVFVRVNULCBcclxuICAgIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9DT01NRU5UX1NVQ0NFU1MsIFxyXG4gICAgQUREX1BPU1RfRkFJTFVSRSwgQUREX0NPTU1FTlRfRkFJTFVSRSwgXHJcbiAgICBSRU1PVkVfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9TVUNDRVNTLCBcclxuICAgIFJFTU9WRV9QT1NUX0ZBSUxVUkUgLCBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBMT0FEX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgIExJS0VfUE9TVF9SRVFVRVNULCBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1NVQ0NFU1MsIExJS0VfUE9TVF9GQUlMVVJFLCBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBVUExPQURfSU1BR0VTX1NVQ0NFU1MsIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICBSRVRXRUVUX1JFUVVFU1QsIFJFVFdFRVRfU1VDQ0VTUywgUkVUV0VFVF9GQUlMVVJFXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FICwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgKTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlcG9uc2UuZGF0YSBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGRhdGEpIFxyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVwb25zZS5kYXRhIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCkgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVwb25zZS5kYXRhIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXBvbnNlLmRhdGEgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3Bvc3RzJywgZGF0YSkgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXBvbnNlLmRhdGEgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsICBkYXRhKSBcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpOyBcclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YSA6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXBvbnNlLmRhdGEgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX1gKSAvLyBkZWxldGXsnZgg642w7J207YSw64qUIHBvc3QuaWRcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIC8vIHBvc3Qg66as65OA7IScIOyhsOyekVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdXNlciDrpqzrk4DshJwg7KGw7J6RXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhIDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlcG9uc2UuZGF0YSBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7IFxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlcG9uc2UuZGF0YSBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZXR3ZWV0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdCggUkVUV0VFVF9SRVFVRVNULCByZXR3ZWV0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdCggVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoIExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoUmV0d2VldCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVubGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIF0pXHJcbn1cclxuXHJcblxyXG4vLyBwb3N0IHNhZ2Hsl5DshJwgYWN0aW9uIOumrOuTgOyEnCDtmLjstpxcclxuXHJcbi8vIOyalOyyreydhCDrs7Trgrgg7IKs656M7J20IOuIhOq1sOyngCDslYzquLAg7JyE7ZW07ISc64qUIOy/oO2CpOulvCDrs7TrgrTso7zslrTslbwg7ZWY6riwIOuVjOusuOyXkCBmcm9udOyXkOyEnOuKlCB3aXRoQ3JlZGVudGlhbHMgOiB0cnVlLFxyXG4vLyBiYWNr7JeQ7ISc64qUIGNvcnPsl5DshJwgY3JlZGVudGlhbHMgIHRydWXrpbwg7ZW07KO87Ja07JW87ZWoIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHthbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgZGVsYXksIGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IFxyXG4gICAgTE9HX0lOX1NVQ0NFU1MsIExPR19PVVRfU1VDQ0VTUywgU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgTE9HX0lOX1JFUVVFU1QsIExPR19PVVRfUkVRVUVTVCwgU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgTE9HX0lOX0ZBSUxVUkUsIExPR19PVVRfRkFJTFVSRSwgU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsIEZPTExPV19TVUNDRVNTLCBGT0xMT1dfRkFJTFVSRSxcclxuICAgIFVORk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBMT0FEX01ZX0lORk9fUkVRVUVTVCwgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsIExPQURfTVlfSU5GT19GQUlMVVJFLCBcclxuICAgIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUywgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIExPQURfRk9MTE9XSU5HU19TVUNDRVNTLCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSwgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRVxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YClcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2VycycsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93ZXJzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dpbmdzJywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dpbmdzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywge25pY2tuYW1lIDogZGF0YX0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlcG9uc2UuZGF0YSwgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApOyBcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXBvbnNlLmRhdGEsIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgLCBkYXRhKTsgLy8g66Gc6re47J24IOyalOyyrSDrs7Trg4RcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvciA6IGVyci5yZXBvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTsgLy8g66Gc6re47J24IOyalOyyrSDrs7Trg4RcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7IC8vIOuhnOq3uOyduCDsmpTssq3sl5Ag64yA7ZWcIOqysOqzvOqwkuydhCDrsJvslYTshJwg67OA7IiY7JeQIOyggOyepVxyXG4gICAgICAgIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IHJlc3VsdC5kYXRhLCAvLyDroZzqt7jsnbgg7ISx6rO17IucIOqysOqzvOqwkiDslYjsl5Ag65Ok7Ja07J6I64qUIGRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSwgLy8g66Gc6re47J24IOyLpO2MqOyLnCDqsrDqs7zqsJIg7JWI7JeQIOuTpOyWtOyeiOuKlCBkYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcsIGRhdGEpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlIDogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSkgLy8gZGFhdGHripQgZW1haWwscGFzc3dvcmQsbmlja25hbWXsnbQg65Ok7Ja07J6I64qUIOqwneyytOydtOuLpC5cclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZSA6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVGb2xsb3dlcik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgbG9hZEZvbGxvd2Vycyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2luZ3MoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ2huYWdlTmlja25hbWUoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaENobmFnZU5pY2tuYW1lKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZUZvbGxvd2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcIkByZWR1eC1zYWdhL2NvcmVcIjtcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoe2Rpc3BhdGNoLCBnZXRTdGF0ZX0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufVxyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZV07XHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgICBkZWJ1ZyA6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcblxyXG4vLyBhY3Rpb27snYQg66eM65Ok66m0IGhpc3Rvcnko6riw66GdKeycvOuhnCDrgqjripTri6QuXHJcblxyXG4vLyBoaXN0b3J56rCAIOyMk+ydtOuptCDrqZTrqqjrpqzrj4Qg66eO7J20IOyeoeyVhOuoueqzoCDspJHslZnrjbDsnbTthLDrk6TsnbQg7Ja065a76rKMIOuzgO2VmOuKlOyngCDrs7TsnbTquLDrlYzrrLjsl5BcclxuLy8g67O07JWI7JeQ64+EIOy3qOyVve2VoCDsiJjqsIAg7J6I64ukLiDrlLDrnbwg7LKr67KI7Ke464qUIOuwsO2PrOyaqShkZXZ0b29scyDsl7DqsrBYKSDrkZDrsojsp7jripQg6rCc67Cc7JqpKGRldnRvb2xzIOyXsOqysE8pXHJcbi8vIGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKFtdKSlcclxuLy8gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoW10pKVxyXG5cclxuLy8g6rCc67Cc7J6QIOuPhOq1rOyXkOyEnCByZWR1eOulvCDrk6TslrTqsIDrs7TrqbQg66Gc6re47J24IOuhnOq3uOyVhOybgyDquLDroZ3snbQgaGlzdG9yeeyXkCDsoIDsnqXrkJjslrQg7ZmV7J246rCA64ql7ZWY64ukLiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eC1zYWdhL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
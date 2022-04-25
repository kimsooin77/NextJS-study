webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var initialState = {
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
  me: null,
  signUpDate: {},
  loginData: {}
};
var LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
var LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
var LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: 'sooinkim',
    id: 1,
    Posts: [{
      id: 1
    }],
    // 시퀄라이즈에서 합쳐주기 때문에 대문자
    Followings: [{
      nickname: "ksi"
    }, {
      nickname: "sooinkim"
    }, {
      nickname: "KSI"
    }],
    Followers: [{
      nickname: "ksi"
    }, {
      nickname: "sooinkim"
    }, {
      nickname: "KSI"
    }]
  });
};

var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction(data) {
  return {
    type: LOG_OUT_REQUEST,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
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
          id: action.data
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

        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowDone = false;
        draft.unfollowError = action.error;
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
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
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
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRlIiwibG9naW5EYXRhIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImR1bW15VXNlciIsImRhdGEiLCJuaWNrbmFtZSIsImlkIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJlcnJvciIsInB1c2giLCJmaWx0ZXIiLCJ2IiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLG1CQUFpQixFQUFHLEtBREk7QUFFeEJDLGdCQUFjLEVBQUcsS0FGTztBQUVBO0FBQ3hCQyxpQkFBZSxFQUFHLElBSE07QUFJeEJDLGVBQWEsRUFBRyxLQUpRO0FBS3hCQyxZQUFVLEVBQUcsS0FMVztBQUtKO0FBQ3BCQyxhQUFXLEVBQUcsSUFOVTtBQU94QkMsaUJBQWUsRUFBRyxLQVBNO0FBUXhCQyxjQUFZLEVBQUcsS0FSUztBQVFGO0FBQ3RCQyxlQUFhLEVBQUcsSUFUUTtBQVV4QkMsY0FBWSxFQUFHLEtBVlM7QUFXeEJDLFdBQVMsRUFBRyxLQVhZO0FBV0w7QUFDbkJDLFlBQVUsRUFBRyxJQVpXO0FBYXhCQyxlQUFhLEVBQUcsS0FiUTtBQWFEO0FBQ3ZCQyxZQUFVLEVBQUcsS0FkVztBQWV4QkMsYUFBVyxFQUFHLElBZlU7QUFnQnhCQyxlQUFhLEVBQUcsS0FoQlE7QUFnQkQ7QUFDdkJDLFlBQVUsRUFBRyxLQWpCVztBQWtCeEJDLGFBQVcsRUFBRyxJQWxCVTtBQW1CeEJDLHVCQUFxQixFQUFHLEtBbkJBO0FBbUJPO0FBQy9CQyxvQkFBa0IsRUFBRyxLQXBCRztBQXFCeEJDLHFCQUFtQixFQUFHLElBckJFO0FBc0J4QkMsSUFBRSxFQUFHLElBdEJtQjtBQXVCeEJDLFlBQVUsRUFBRyxFQXZCVztBQXdCeEJDLFdBQVMsRUFBRztBQXhCWSxDQUFyQjtBQTJCQSxJQUFN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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDSixXQUFLRixpQkFBTDtBQUNJZSxhQUFLLENBQUN4QyxFQUFOLENBQVM4QixLQUFULEdBQWlCVSxLQUFLLENBQUN4QyxFQUFOLENBQVM4QixLQUFULENBQWVhLE1BQWYsQ0FBc0IsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNmLEVBQUYsS0FBU1MsTUFBTSxDQUFDWCxJQUF2QjtBQUFBLFNBQXRCLENBQWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDSjtBQUNJO0FBM0hSO0FBOEhILEdBL0hhLENBQWQ7QUFpSUgsQ0FsSUQ7O0FBb0llUyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zODg2YjQxODE4MjBhZWI1MGI3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9hZE15SW5mb0xvYWRpbmcgOiBmYWxzZSxcclxuICAgIGxvYWRNeUluZm9Eb25lIDogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg6rCA7KC47Jik6riwIOyLnOuPhOykkVxyXG4gICAgbG9hZE15SW5mb0Vycm9yIDogbnVsbCxcclxuICAgIGZvbGxvd0xvYWRpbmcgOiBmYWxzZSxcclxuICAgIGZvbGxvd0RvbmUgOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgZm9sbG93RXJyb3IgOiBudWxsLFxyXG4gICAgdW5mb2xsb3dMb2FkaW5nIDogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0RvbmUgOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgdW5mb2xsb3dFcnJvciA6IG51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmcgOiBmYWxzZSxcclxuICAgIGxvZ0luRG9uZSA6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkVycm9yIDogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmcgOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gICAgbG9nT3V0RG9uZSA6IGZhbHNlLFxyXG4gICAgbG9nT3V0RXJyb3IgOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZyA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICBzaWduVXBEb25lIDogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvciA6IG51bGwsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmcgOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZSA6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvciA6IG51bGwsXHJcbiAgICBtZSA6IG51bGwsXHJcbiAgICBzaWduVXBEYXRlIDoge30sXHJcbiAgICBsb2dpbkRhdGEgOiB7fSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBuaWNrbmFtZSA6ICdzb29pbmtpbScsXHJcbiAgICBpZCA6IDEsXHJcbiAgICBQb3N0cyA6IFt7aWQgOiAxfV0sIC8vIOyLnO2AhOudvOydtOymiOyXkOyEnCDtlanss5Dso7zquLAg65WM66y47JeQIOuMgOusuOyekFxyXG4gICAgRm9sbG93aW5ncyA6IFt7bmlja25hbWUgOiBcImtzaVwifSwge25pY2tuYW1lIDogXCJzb29pbmtpbVwifSwge25pY2tuYW1lIDogXCJLU0lcIn1dLFxyXG4gICAgRm9sbG93ZXJzIDogW3sgbmlja25hbWUgOiBcImtzaVwifSwge25pY2tuYW1lIDogXCJzb29pbmtpbVwifSwge25pY2tuYW1lIDogXCJLU0lcIn1dLFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTsgLy8g64K0IO2MlOuhnOyeiSDrqqnroZ3sl5Ag7JWh7IWY7Jy866GcIOuwm+ydgCDrjbDsnbTthLDsnbgg7JWE7J2065SU66W8IOuEo+yWtOykjFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkIDogYWN0aW9uLmRhdGF9KTsgLy8g64K0IO2MlOuhnOyeiSDrqqnroZ3sl5Ag7JWh7IWY7Jy866GcIOuwm+ydgCDrjbDsnbTthLDsnbgg7JWE7J2065SU66W8IOuEo+yWtOykjFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyDslYTsnbTrlJTqsIAg6rCZ7KeAIOyViuydgCDsgqzrnozrp4wg64Ko6rKo65GgKOyWuO2MlOuhnOyasCDtlZwg7IKs656M7J2AIOygnOyZuOuQqClcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1MgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkIDogYWN0aW9uLmRhdGF9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gaW1tZXIg7KCB7JqpIOyghCDsnpHshLHtlZwg7L2U65OcXHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1lIDoge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgUG9zdHMgOiBbe2lkIDogYWN0aW9uLmRhdGF9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIG1lIDoge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgUG9zdHMgOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9
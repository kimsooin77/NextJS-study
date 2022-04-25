webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\kimsooin\\Desktop\\\uACF5\uBD80\uAE30\uB85D\\\uACF5\uBD80\uAE30\uB85D\\22.04 \uACF5\uBD80\uAE30\uB85D\\next-study\\front\\components\\FollowButton.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var FollowButton = function FollowButton(_ref) {
  _s();

  var post = _ref.post;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followLoading = _useSelector.followLoading,
      unfollowLoading = _useSelector.unfollowLoading;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); // 내가 팔로우한 사람의 아이디와 게시글 작성자의 아이디가 같은지에 따라 팔로잉 유무를 저장

  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {
    return v.id === post.User.id;
  });
  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]); // 포스트 작성자의 아이디와 내 아이디가 같을 때는 팔로우 버튼이 뜨지 않게 처리

  if (post.User.id === me.id) {
    return null;
  }

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, isFollowing ? '언팔로우' : '팔로우');
};

_s(FollowButton, "TEUCIBJoR/5K0JuZy8CVZzmvlQQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = FollowButton;
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImlzRm9sbG93aW5nIiwiRm9sbG93aW5ncyIsImZpbmQiLCJ2IiwiaWQiLCJVc2VyIiwib25DbGlja0J1dHRvbiIsInVzZUNhbGxiYWNrIiwidHlwZSIsIlVORk9MTE9XX1JFUVVFU1QiLCJkYXRhIiwiRk9MTE9XX1JFUVVFU1QiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQzdCLHFCQUE2Q0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBeEQ7QUFBQSxNQUFPQyxFQUFQLGdCQUFPQSxFQUFQO0FBQUEsTUFBV0MsYUFBWCxnQkFBV0EsYUFBWDtBQUFBLE1BQTBCQyxlQUExQixnQkFBMEJBLGVBQTFCOztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUIsQ0FGNkIsQ0FHN0I7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHTCxFQUFILGFBQUdBLEVBQUgsdUJBQUdBLEVBQUUsQ0FBRU0sVUFBSixDQUFlQyxJQUFmLENBQW9CLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBU2IsSUFBSSxDQUFDYyxJQUFMLENBQVVELEVBQTFCO0FBQUEsR0FBcEIsQ0FBcEI7QUFDQSxNQUFNRSxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNwQyxRQUFHUCxXQUFILEVBQWdCO0FBQ1pGLGNBQVEsQ0FBQztBQUNMVSxZQUFJLEVBQUdDLCtEQURGO0FBRUxDLFlBQUksRUFBR25CLElBQUksQ0FBQ2MsSUFBTCxDQUFVRDtBQUZaLE9BQUQsQ0FBUjtBQUlILEtBTEQsTUFLTTtBQUNGTixjQUFRLENBQUM7QUFDTFUsWUFBSSxFQUFHRyw2REFERjtBQUVMRCxZQUFJLEVBQUduQixJQUFJLENBQUNjLElBQUwsQ0FBVUQ7QUFGWixPQUFELENBQVI7QUFJSDtBQUNKLEdBWmdDLEVBWTlCLENBQUNKLFdBQUQsQ0FaOEIsQ0FBakMsQ0FMNkIsQ0FtQjdCOztBQUNBLE1BQUdULElBQUksQ0FBQ2MsSUFBTCxDQUFVRCxFQUFWLEtBQWlCVCxFQUFFLENBQUNTLEVBQXZCLEVBQTJCO0FBQ3ZCLFdBQU8sSUFBUDtBQUNIOztBQUNELFNBRUksTUFBQywyQ0FBRDtBQUFRLFdBQU8sRUFBRVIsYUFBYSxJQUFLQyxlQUFuQztBQUFvRCxXQUFPLEVBQUVTLGFBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS04sV0FBVyxHQUFHLE1BQUgsR0FBWSxLQUQ1QixDQUZKO0FBT0gsQ0E5QkQ7O0dBQU1WLFk7VUFDMkNFLHVELEVBQzVCTyx1RDs7O0tBRmZULFk7QUFnQ05BLFlBQVksQ0FBQ3NCLFNBQWIsR0FBeUI7QUFDckJyQixNQUFJLEVBQUdxQixpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURILENBQXpCO0FBSWV4QiwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMGY2NGRlODZmNDBiZDgyOTJmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEZPTExPV19SRVFVRVNULCBVTkZPTExPV19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBGb2xsb3dCdXR0b24gPSAoe3Bvc3R9KSA9PiB7XHJcbiAgICBjb25zdCB7bWUsIGZvbGxvd0xvYWRpbmcsIHVuZm9sbG93TG9hZGluZ30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgLy8g64K06rCAIO2MlOuhnOyasO2VnCDsgqzrnozsnZgg7JWE7J2065SU7JmAIOqyjOyLnOq4gCDsnpHshLHsnpDsnZgg7JWE7J2065SU6rCAIOqwmeydgOyngOyXkCDrlLDrnbwg7YyU66Gc7J6JIOycoOustOulvCDsoIDsnqVcclxuICAgIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gcG9zdC5Vc2VyLmlkKVxyXG4gICAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZihpc0ZvbGxvd2luZykge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlIDogVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGEgOiBwb3N0LlVzZXIuaWQsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlIDogRk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhIDogcG9zdC5Vc2VyLmlkLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc0ZvbGxvd2luZ10pO1xyXG5cclxuICAgIC8vIO2PrOyKpO2KuCDsnpHshLHsnpDsnZgg7JWE7J2065SU7JmAIOuCtCDslYTsnbTrlJTqsIAg6rCZ7J2EIOuVjOuKlCDtjJTroZzsmrAg67KE7Yq87J20IOucqOyngCDslYrqsowg7LKY66asXHJcbiAgICBpZihwb3N0LlVzZXIuaWQgPT09IG1lLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtmb2xsb3dMb2FkaW5nICB8fCB1bmZvbGxvd0xvYWRpbmd9IG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259PlxyXG4gICAgICAgICAgICB7aXNGb2xsb3dpbmcgPyAn7Ja47YyU66Gc7JqwJyA6ICftjJTroZzsmrAnfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59O1xyXG5cclxuRm9sbG93QnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3QgOiBwcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dCdXR0b247Il0sInNvdXJjZVJvb3QiOiIifQ==
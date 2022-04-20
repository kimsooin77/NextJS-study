webpackHotUpdate_N_E("pages/_app",{

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
      src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.imageUrl()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzaG9ydGlkIiwiZ2VuZXJhdGUiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJjb25jYXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImxvcmVtIiwicGFyYWdyYXBoIiwiaW1hZ2UiLCJpbWFnZVVybCIsInNlbnRlbmNlIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJlcnJvciIsImZpbHRlciIsInYiLCJwb3N0IiwiZmluZCIsInBvc3RJZCIsImFkZGNvbW1lbnRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUcsQ0FBQztBQUNUQyxNQUFFLEVBQUcsQ0FESTtBQUVUQyxRQUFJLEVBQUc7QUFDSEQsUUFBRSxFQUFHLENBREY7QUFFSEUsY0FBUSxFQUFHO0FBRlIsS0FGRTtBQU1UQyxXQUFPLEVBQUcsMkJBTkQ7QUFPVEMsVUFBTSxFQUFHLENBQUM7QUFDTkosUUFBRSxFQUFHSyw4Q0FBTyxDQUFDQyxRQUFSLEVBREM7QUFFTkMsU0FBRyxFQUFHO0FBRkEsS0FBRCxFQUdOO0FBQ0NBLFNBQUcsRUFBRztBQURQLEtBSE0sRUFLTjtBQUNDQSxTQUFHLEVBQUc7QUFEUCxLQUxNLENBUEE7QUFlVEMsWUFBUSxFQUFHLENBQUU7QUFDVFIsUUFBRSxFQUFHSyw4Q0FBTyxDQUFDQyxRQUFSLEVBREk7QUFFVEwsVUFBSSxFQUFHO0FBQ0hELFVBQUUsRUFBR0ssOENBQU8sQ0FBQ0MsUUFBUixFQURGO0FBRUhKLGdCQUFRLEVBQUc7QUFGUixPQUZFO0FBTVRDLGFBQU8sRUFBRztBQU5ELEtBQUYsRUFPUjtBQUNDRixVQUFJLEVBQUc7QUFDSEQsVUFBRSxFQUFHSyw4Q0FBTyxDQUFDQyxRQUFSLEVBREY7QUFFSEosZ0JBQVEsRUFBRztBQUZSLE9BRFI7QUFLQ0MsYUFBTyxFQUFHO0FBTFgsS0FQUTtBQWZGLEdBQUQsQ0FEWTtBQStCeEJNLFlBQVUsRUFBRyxFQS9CVztBQWdDeEJDLGdCQUFjLEVBQUcsS0FoQ087QUFpQ3hCQyxhQUFXLEVBQUcsS0FqQ1U7QUFrQ3hCQyxjQUFZLEVBQUcsSUFsQ1M7QUFtQ3hCQyxtQkFBaUIsRUFBRyxLQW5DSTtBQW9DeEJDLGdCQUFjLEVBQUcsS0FwQ087QUFxQ3hCQyxpQkFBZSxFQUFHLElBckNNO0FBc0N4QkMsbUJBQWlCLEVBQUcsS0F0Q0k7QUF1Q3hCQyxnQkFBYyxFQUFHLEtBdkNPO0FBd0N4QkMsaUJBQWUsRUFBRztBQXhDTSxDQUFyQjtBQTJDUHBCLFlBQVksQ0FBQ0MsU0FBYixHQUF5QkQsWUFBWSxDQUFDQyxTQUFiLENBQXVCb0IsTUFBdkIsQ0FDckJDLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixHQUFpQkMsR0FBakIsQ0FBcUI7QUFBQSxTQUFPO0FBQ3hCdEIsTUFBRSxFQUFHSyw4Q0FBTyxDQUFDQyxRQUFSLEVBRG1CO0FBRXhCTCxRQUFJLEVBQUc7QUFDSEQsUUFBRSxFQUFHSyw4Q0FBTyxDQUFDQyxRQUFSLEVBREY7QUFFSEosY0FBUSxFQUFHcUIsNENBQUssQ0FBQ0MsSUFBTixDQUFXQyxRQUFYO0FBRlIsS0FGaUI7QUFNeEJ0QixXQUFPLEVBQUdvQiw0Q0FBSyxDQUFDRyxLQUFOLENBQVlDLFNBQVosRUFOYztBQU94QnZCLFVBQU0sRUFBRyxDQUFDO0FBQ05HLFNBQUcsRUFBR2dCLDRDQUFLLENBQUNLLEtBQU4sQ0FBWUMsUUFBWjtBQURBLEtBQUQsQ0FQZTtBQVV4QnJCLFlBQVEsRUFBRyxDQUFDO0FBQ1JQLFVBQUksRUFBRztBQUNIRCxVQUFFLEVBQUdLLDhDQUFPLENBQUNDLFFBQVIsRUFERjtBQUVISixnQkFBUSxFQUFHcUIsNENBQUssQ0FBQ0MsSUFBTixDQUFXQyxRQUFYO0FBRlIsT0FEQztBQUtSdEIsYUFBTyxFQUFHb0IsNENBQUssQ0FBQ0csS0FBTixDQUFZSSxRQUFaO0FBTEYsS0FBRDtBQVZhLEdBQVA7QUFBQSxDQUFyQixDQURxQixDQUF6QjtBQXFCTyxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFEO0FBQUEsU0FBVTtBQUM3QkMsUUFBSSxFQUFHWCxnQkFEc0I7QUFFN0JVLFFBQUksRUFBSkE7QUFGNkIsR0FBVjtBQUFBLENBQWhCO0FBS0EsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0YsSUFBRDtBQUFBLFNBQVU7QUFDaENDLFFBQUksRUFBR1IsbUJBRHlCO0FBRWhDTyxRQUFJLEVBQUpBO0FBRmdDLEdBQVY7QUFBQSxDQUFuQjs7QUFLUCxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDSCxJQUFEO0FBQUEsU0FBWTtBQUMxQnpDLE1BQUUsRUFBR3lDLElBQUksQ0FBQ3pDLEVBRGdCO0FBRTFCRyxXQUFPLEVBQUdzQyxJQUFJLENBQUN0QyxPQUZXO0FBRzFCRixRQUFJLEVBQUc7QUFDSEQsUUFBRSxFQUFHLENBREY7QUFFSEUsY0FBUSxFQUFHO0FBRlIsS0FIbUI7QUFPMUJFLFVBQU0sRUFBRyxFQVBpQjtBQVExQkksWUFBUSxFQUFHO0FBUmUsR0FBWjtBQUFBLENBQWxCOztBQVdBLElBQU1xQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSixJQUFEO0FBQUEsU0FBWTtBQUM3QnpDLE1BQUUsRUFBR3lDLElBQUksQ0FBQ3pDLEVBRG1CO0FBRTdCRyxXQUFPLEVBQUdzQyxJQUFJLENBQUN0QyxPQUZjO0FBRzdCRixRQUFJLEVBQUc7QUFDSEQsUUFBRSxFQUFHLENBREY7QUFFSEUsY0FBUSxFQUFHO0FBRlI7QUFIc0IsR0FBWjtBQUFBLENBQXJCOztBQVNBLElBQU00QyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJqRCxZQUF5QjtBQUFBLE1BQVhrRCxNQUFXO0FBQzlDLFNBQU9DLHFEQUFPLENBQUNGLEtBQUQsRUFBUSxVQUFDRyxLQUFELEVBQVc7QUFDN0IsWUFBUUYsTUFBTSxDQUFDTixJQUFmO0FBQ0ksV0FBS1gsZ0JBQUw7QUFDSW1CLGFBQUssQ0FBQ3hDLGNBQU4sR0FBdUIsSUFBdkI7QUFDQXdDLGFBQUssQ0FBQ3ZDLFdBQU4sR0FBb0IsS0FBcEI7QUFDQXVDLGFBQUssQ0FBQ3RDLFlBQU4sR0FBcUIsSUFBckI7QUFDQTs7QUFDSixXQUFLb0IsZ0JBQUw7QUFDSWtCLGFBQUssQ0FBQ3hDLGNBQU4sR0FBdUIsS0FBdkI7QUFDQXdDLGFBQUssQ0FBQ25ELFNBQU4sQ0FBZ0JvRCxPQUFoQixDQUF3QlAsU0FBUyxDQUFDSSxNQUFNLENBQUNQLElBQVIsQ0FBakMsRUFGSixDQUVxRDs7QUFDakRTLGFBQUssQ0FBQ3ZDLFdBQU4sR0FBb0IsSUFBcEI7QUFDQTs7QUFDSixXQUFLc0IsZ0JBQUw7QUFDSWlCLGFBQUssQ0FBQ3hDLGNBQU4sR0FBdUIsS0FBdkI7QUFDQXdDLGFBQUssQ0FBQ3ZDLFdBQU4sR0FBb0IsS0FBcEI7QUFDQXVDLGFBQUssQ0FBQ3RDLFlBQU4sR0FBcUJvQyxNQUFNLENBQUNJLEtBQTVCO0FBQ0E7O0FBQ0osV0FBS2YsbUJBQUw7QUFDSWEsYUFBSyxDQUFDbEMsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQWtDLGFBQUssQ0FBQ2pDLGNBQU4sR0FBdUIsS0FBdkI7QUFDQWlDLGFBQUssQ0FBQ2hDLGVBQU4sR0FBd0IsSUFBeEI7QUFDQTs7QUFDSixXQUFLb0IsbUJBQUw7QUFDSVksYUFBSyxDQUFDbEMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQWtDLGFBQUssQ0FBQ25ELFNBQU4sR0FBa0JtRCxLQUFLLENBQUNuRCxTQUFOLENBQWdCc0QsTUFBaEIsQ0FBdUIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUN0RCxFQUFGLEtBQVNnRCxNQUFNLENBQUNQLElBQXZCO0FBQUEsU0FBdkIsQ0FBbEI7QUFDQVMsYUFBSyxDQUFDakMsY0FBTixHQUF1QixJQUF2QjtBQUNBOztBQUNKLFdBQUtzQixtQkFBTDtBQUNJVyxhQUFLLENBQUNsQyxpQkFBTixHQUEwQixLQUExQjtBQUNBa0MsYUFBSyxDQUFDakMsY0FBTixHQUF1QixLQUF2QjtBQUNBaUMsYUFBSyxDQUFDaEMsZUFBTixHQUF3QjhCLE1BQU0sQ0FBQ0ksS0FBL0I7QUFDQTs7QUFDSixXQUFLbEIsbUJBQUw7QUFDSWdCLGFBQUssQ0FBQ3JDLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0FxQyxhQUFLLENBQUNwQyxjQUFOLEdBQXVCLEtBQXZCO0FBQ0FvQyxhQUFLLENBQUNuQyxlQUFOLEdBQXdCLElBQXhCO0FBQ0E7O0FBQ0osV0FBS29CLG1CQUFMO0FBQTJCO0FBQ3ZCLGNBQU1vQixJQUFJLEdBQUdMLEtBQUssQ0FBQ25ELFNBQU4sQ0FBZ0J5RCxJQUFoQixDQUFxQixVQUFDRixDQUFEO0FBQUEsbUJBQU9BLENBQUMsQ0FBQ3RELEVBQUYsS0FBU2dELE1BQU0sQ0FBQ1AsSUFBUCxDQUFZZ0IsTUFBNUI7QUFBQSxXQUFyQixDQUFiO0FBQ0FGLGNBQUksQ0FBQy9DLFFBQUwsQ0FBYzJDLE9BQWQsQ0FBc0JOLFlBQVksQ0FBQ0csTUFBTSxDQUFDUCxJQUFQLENBQVl0QyxPQUFiLENBQWxDO0FBQ0ErQyxlQUFLLENBQUNyQyxpQkFBTixHQUEwQixLQUExQjtBQUNBcUMsZUFBSyxDQUFDUSxXQUFOLEdBQW9CLElBQXBCO0FBQ0EsZ0JBTHVCLENBTXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUNELFdBQUt0QixtQkFBTDtBQUNJYyxhQUFLLENBQUNyQyxpQkFBTixHQUEwQixLQUExQjtBQUNBcUMsYUFBSyxDQUFDcEMsY0FBTixHQUF1QixLQUF2QjtBQUNBb0MsYUFBSyxDQUFDbkMsZUFBTixHQUF3QmlDLE1BQU0sQ0FBQ0ksS0FBL0I7QUFDQTs7QUFDSjtBQUNJO0FBN0RSO0FBK0RILEdBaEVhLENBQWQ7QUFtRUgsQ0FwRUQ7O0FBc0VlTixzRUFBZixFLENBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wZTViOWQ0ZWUzMWUwMTk0YjJhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0aWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzIDogW3tcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgVXNlciA6IHtcclxuICAgICAgICAgICAgaWQgOiAxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZSA6IFwic29vaW5raW1cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQgOiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAICNuZXh0LmpzICNjb2RpbmdcIixcclxuICAgICAgICBJbWFnZXMgOiBbe1xyXG4gICAgICAgICAgICBpZCA6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgc3JjIDogJ2h0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvMDkvNDMvZjEvMDk0M2YxZjNhM2JhZGY5YjAzYjE5ZTAxZjg0ZTY4MTAuanBnJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjIDogJ2h0dHBzOi8vaS5waW5pbWcuY29tLzIzNngvMDgvZmIvZGIvMDhmYmRiYjUxZmRmMTE0OGNlNmE2N2QyZmU2YzIyZjIuanBnJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjIDogJ2h0dHBzOi8vaS5waW5pbWcuY29tLzIzNngvMDAvOGUvMzUvMDA4ZTM1NjRkMDg5MmQ5NGE1ZTM0YTk4MGIyNWVmOWIuanBnJ1xyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzIDogWyB7XHJcbiAgICAgICAgICAgIGlkIDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBVc2VyIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA6IFwiZmFzaGlvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50IDogXCLssqvrsojsp7gg66Op7J20IOqwgOyepSDrp4jsnYzsl5Ag65Ok7Ja07JqUIVwiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBVc2VyIDoge1xyXG4gICAgICAgICAgICAgICAgaWQgOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcIuyDieqwkOydtCDsmIjsgZjrhKTsmpR+XCJcclxuICAgICAgICB9XVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzIDogW10sXHJcbiAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvciA6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmUgOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvciA6IG51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvciA6IG51bGwsXHJcbn1cclxuXHJcbmluaXRpYWxTdGF0ZS5tYWluUG9zdHMgPSBpbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChcclxuICAgIEFycmF5KDIwKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgICAgICAgaWQgOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgVXNlciA6IHtcclxuICAgICAgICAgICAgaWQgOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lIDogZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50IDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICAgICAgSW1hZ2VzIDogW3tcclxuICAgICAgICAgICAgc3JjIDogZmFrZXIuaW1hZ2UuaW1hZ2VVcmwoKSxcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50cyA6IFt7XHJcbiAgICAgICAgICAgIFVzZXIgOiB7XHJcbiAgICAgICAgICAgICAgICBpZCA6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lIDogZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQgOiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgICAgIH1dLFxyXG4gICAgfSkpLFxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZSA6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+KHtcclxuICAgIHR5cGUgOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKCB7XHJcbiAgICBpZCA6IGRhdGEuaWQsXHJcbiAgICBjb250ZW50IDogZGF0YS5jb250ZW50LFxyXG4gICAgVXNlciA6IHtcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgbmlja25hbWUgOiBcImtpbXNvb2luXCJcclxuICAgIH0sXHJcbiAgICBJbWFnZXMgOiBbXSxcclxuICAgIENvbW1lbnRzIDogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICgge1xyXG4gICAgaWQgOiBkYXRhLmlkLFxyXG4gICAgY29udGVudCA6IGRhdGEuY29udGVudCxcclxuICAgIFVzZXIgOiB7XHJcbiAgICAgICAgaWQgOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lIDogXCJraW1zb29pblwiXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1MgOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpOyAvLyBkdW1teVBvc3Trpbwg7JWe7JeQIOy2lOqwgO2VtOyVvOyngCDqsozsi5zquIDsnbQg7JyE66GcIOyMk+yehDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkUgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVCA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTIDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFIDogXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1QgOiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUyA6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZGNvbW1lbnRkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8g67aI67OA7ISx7J2EIOyngO2CpOq4sCDsnITtlbQg7JWE656Y7JmAIOqwmeydtCDsnpHshLHtlojrjZgg7L2U65Oc66W8IGltbWVy66W8IOyCrOyaqe2VmOuptCDsnITsnZgg7L2U65Oc66GcIOygleumrCDqsIDriqVcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0ID0gey4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdfTtcclxuICAgICAgICAgICAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgICAgICAgICAgLy8gbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBtYWluUG9zdHMsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudExvYWRpbmcgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBhZGRDb21tZW50RG9uZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRSA6IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuXHJcbi8vIOu2iOuzgOyEseydhCDsnITtlbQgaW1tZXIg7IKs7JqpKOyVjOyVhOyEnCDrtojrs4DshLHsnYQg7Jyg7KeA7ZW07KSMKSJdLCJzb3VyY2VSb290IjoiIn0=
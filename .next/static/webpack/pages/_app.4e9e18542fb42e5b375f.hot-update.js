webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST, addPosts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST", function() { return ADD_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPosts", function() { return addPosts; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "sooinkim"
    },
    content: "첫 번째 게시글 #next.js #coding",
    Images: [{
      src: 'https://i.pinimg.com/564x/09/43/f1/0943f1f3a3badf9b03b19e01f84e6810.jpg'
    }, {
      src: 'https://i.pinimg.com/236x/08/fb/db/08fbdbb51fdf1148ce6a67d2fe6c22f2.jpg'
    }, {
      src: 'https://i.pinimg.com/236x/00/8e/35/008e3564d0892d94a5e34a980b25ef9b.jpg'
    }],
    Comments: [{
      User: {
        nickname: "fashion"
      },
      content: "첫번째 룩이 가장 마음에 들어요!"
    }, {
      User: {
        nickname: "strawberry"
      },
      content: "색감이 예쁘네요~"
    }]
  }],
  imagePaths: [],
  postAdded: false
};
var ADD_POST = "ADD_POST";
var addPosts = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "kimsooin"
  },
  Images: [],
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        // dummyPost를 앞에 추가해야지 게시글이 위로 쌓임
        postAdded: true
      });

    default:
      return state;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3RzIiwidHlwZSIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRyxDQUFDO0FBQ1RDLE1BQUUsRUFBRyxDQURJO0FBRVRDLFFBQUksRUFBRztBQUNIRCxRQUFFLEVBQUcsQ0FERjtBQUVIRSxjQUFRLEVBQUc7QUFGUixLQUZFO0FBTVRDLFdBQU8sRUFBRywyQkFORDtBQU9UQyxVQUFNLEVBQUcsQ0FBQztBQUNOQyxTQUFHLEVBQUc7QUFEQSxLQUFELEVBRU47QUFDQ0EsU0FBRyxFQUFHO0FBRFAsS0FGTSxFQUlOO0FBQ0NBLFNBQUcsRUFBRztBQURQLEtBSk0sQ0FQQTtBQWNUQyxZQUFRLEVBQUcsQ0FBRTtBQUNUTCxVQUFJLEVBQUc7QUFDSEMsZ0JBQVEsRUFBRztBQURSLE9BREU7QUFJVEMsYUFBTyxFQUFHO0FBSkQsS0FBRixFQUtSO0FBQ0NGLFVBQUksRUFBRztBQUNIQyxnQkFBUSxFQUFHO0FBRFIsT0FEUjtBQUlDQyxhQUFPLEVBQUc7QUFKWCxLQUxRO0FBZEYsR0FBRCxDQURZO0FBMkJ4QkksWUFBVSxFQUFHLEVBM0JXO0FBNEJ4QkMsV0FBUyxFQUFHO0FBNUJZLENBQXJCO0FBK0JBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUVBLElBQU1DLFFBQVEsR0FBRztBQUNwQkMsTUFBSSxFQUFHRjtBQURhLENBQWpCO0FBSVAsSUFBTUcsU0FBUyxHQUFHO0FBQ2RaLElBQUUsRUFBRyxDQURTO0FBRWRHLFNBQU8sRUFBRyxXQUZJO0FBR2RGLE1BQUksRUFBRztBQUNIRCxNQUFFLEVBQUcsQ0FERjtBQUVIRSxZQUFRLEVBQUc7QUFGUixHQUhPO0FBT2RFLFFBQU0sRUFBRyxFQVBLO0FBUWRFLFVBQVEsRUFBRztBQVJHLENBQWxCOztBQVdBLElBQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QmhCLFlBQXlCO0FBQUEsTUFBWGlCLE1BQVc7O0FBQzlDLFVBQVFBLE1BQU0sQ0FBQ0osSUFBZjtBQUNJLFNBQUtGLFFBQUw7QUFDSSw2Q0FDT0ssS0FEUDtBQUVJZixpQkFBUyxHQUFJYSxTQUFKLHNHQUFrQkUsS0FBSyxDQUFDZixTQUF4QixFQUZiO0FBRWlEO0FBQzdDUyxpQkFBUyxFQUFHO0FBSGhCOztBQUtKO0FBQ0EsYUFBT00sS0FBUDtBQVJKO0FBV0gsQ0FaRDs7QUFjZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40ZTllMTg1NDJmYjQyZTViMzc1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0cyA6IFt7XHJcbiAgICAgICAgaWQgOiAxLFxyXG4gICAgICAgIFVzZXIgOiB7XHJcbiAgICAgICAgICAgIGlkIDogMSxcclxuICAgICAgICAgICAgbmlja25hbWUgOiBcInNvb2lua2ltXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50IDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAjbmV4dC5qcyAjY29kaW5nXCIsXHJcbiAgICAgICAgSW1hZ2VzIDogW3tcclxuICAgICAgICAgICAgc3JjIDogJ2h0dHBzOi8vaS5waW5pbWcuY29tLzU2NHgvMDkvNDMvZjEvMDk0M2YxZjNhM2JhZGY5YjAzYjE5ZTAxZjg0ZTY4MTAuanBnJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjIDogJ2h0dHBzOi8vaS5waW5pbWcuY29tLzIzNngvMDgvZmIvZGIvMDhmYmRiYjUxZmRmMTE0OGNlNmE2N2QyZmU2YzIyZjIuanBnJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjIDogJ2h0dHBzOi8vaS5waW5pbWcuY29tLzIzNngvMDAvOGUvMzUvMDA4ZTM1NjRkMDg5MmQ5NGE1ZTM0YTk4MGIyNWVmOWIuanBnJ1xyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzIDogWyB7XHJcbiAgICAgICAgICAgIFVzZXIgOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA6IFwiZmFzaGlvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50IDogXCLssqvrsojsp7gg66Op7J20IOqwgOyepSDrp4jsnYzsl5Ag65Ok7Ja07JqUIVwiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBVc2VyIDoge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWUgOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50IDogXCLsg4nqsJDsnbQg7JiI7IGY64Sk7JqUflwiXHJcbiAgICAgICAgfV1cclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRocyA6IFtdLFxyXG4gICAgcG9zdEFkZGVkIDogZmFsc2UsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVCA9IFwiQUREX1BPU1RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0cyA9IHtcclxuICAgIHR5cGUgOiBBRERfUE9TVCxcclxufVxyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0ge1xyXG4gICAgaWQgOiAyLFxyXG4gICAgY29udGVudCA6IFwi642U66+4642w7J207YSw7J6F64uI64ukLlwiLFxyXG4gICAgVXNlciA6IHtcclxuICAgICAgICBpZCA6IDEsXHJcbiAgICAgICAgbmlja25hbWUgOiBcImtpbXNvb2luXCJcclxuICAgIH0sXHJcbiAgICBJbWFnZXMgOiBbXSxcclxuICAgIENvbW1lbnRzIDogW10sXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QT1NUIDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzIDogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSwgLy8gZHVtbXlQb3N066W8IOyVnuyXkCDstpTqsIDtlbTslbzsp4Ag6rKM7Iuc6riA7J20IOychOuhnCDsjJPsnoRcclxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZCA6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=
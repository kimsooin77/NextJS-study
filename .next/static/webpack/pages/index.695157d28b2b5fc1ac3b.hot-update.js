webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useinput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useinput */ "./hooks/useinput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\kimsooin\\Desktop\\\uACF5\uBD80\uAE30\uB85D\\\uACF5\uBD80\uAE30\uB85D\\22.04 \uACF5\uBD80\uAE30\uB85D\\next-study\\front\\components\\PostForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var PostForm = function PostForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths,
      addPostDone = _useSelector.addPostDone;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useinput = Object(_hooks_useinput__WEBPACK_IMPORTED_MODULE_4__["default"])(''),
      _useinput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useinput, 3),
      text = _useinput2[0],
      onChangeText = _useinput2[1],
      setText = _useinput2[2];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);
  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    console.log('images', e.target.files); // 선택했던 이미지들에 대한 정보들 확인

    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (f) {
      // 유사배열 객체를 돌면서 이미지를 넣어줌
      imageFormData.append('image', f); // router/post에 배열도는 'image'와 일치해야함
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  });
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }

    var formData = new FormData();
    imagePaths.forEach(function (p) {
      formData.append('image', p);
    });
    formData.append('content', text);
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_POST_REQUEST"],
      data: formData
    });
  }, [text, imagePaths]);
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    imageInput.current.input.click();
  }, [imageInput.current]);
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (index) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["REMOVE_IMAGE"],
        data: index
      });
    };
  });
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      margin: '10px 0 20px'
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    value: text,
    onChange: onChangeText,
    maxLength: 140,
    placeholder: "\uC5B4\uB5A4 \uB8E9\uC774 \uC81C\uC77C \uB9C8\uC74C\uC5D0 \uB4DC\uC2DC\uB098\uC694?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "file",
    name: "image",
    multiple: true,
    hidden: true,
    ref: imageInput,
    onChange: onChangeImages,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: {
      "float": "right"
    },
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "\uC9F9\uC9F9")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, imagePaths.map(function (v, i) {
    return __jsx("div", {
      key: v,
      style: {
        display: "inline-block"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "http://localhost:3065/".concat(v),
      style: {
        width: "200px"
      },
      alt: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onRemoveImage(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }, "\uC81C\uAC70")));
  })));
};

_s(PostForm, "fCHvNvk0u1Ob+/iap+CWbcPc/70=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsImFkZFBvc3REb25lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJ1c2VpbnB1dCIsInRleHQiLCJvbkNoYW5nZVRleHQiLCJzZXRUZXh0IiwidXNlRWZmZWN0Iiwib25DaGFuZ2VJbWFnZXMiLCJ1c2VDYWxsYmFjayIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZmlsZXMiLCJpbWFnZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiY2FsbCIsImYiLCJhcHBlbmQiLCJ0eXBlIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiZGF0YSIsIm9uU3VibWl0IiwidHJpbSIsImFsZXJ0IiwiZm9ybURhdGEiLCJwIiwiQUREX1BPU1RfUkVRVUVTVCIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJpbnB1dCIsImNsaWNrIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwibWFyZ2luIiwibWFwIiwidiIsImkiLCJkaXNwbGF5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDbkIscUJBQWtDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUE3QztBQUFBLE1BQU9DLFVBQVAsZ0JBQU9BLFVBQVA7QUFBQSxNQUFtQkMsV0FBbkIsZ0JBQW1CQSxXQUFuQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyxv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ZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42OTUxNTdkMjhiMmI1ZmMxYWMzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VpbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlaW5wdXRcIjtcclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCwgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBSRU1PVkVfSU1BR0UgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7aW1hZ2VQYXRocywgYWRkUG9zdERvbmV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFt0ZXh0LCBvbkNoYW5nZVRleHQsIHNldFRleHRdID0gdXNlaW5wdXQoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoYWRkUG9zdERvbmUpIHtcclxuICAgICAgICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlcycsIGUudGFyZ2V0LmZpbGVzKTsgLy8g7ISg7YOd7ZaI642YIOydtOuvuOyngOuTpOyXkCDrjIDtlZwg7KCV67O065OkIO2ZleyduFxyXG4gICAgICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKSA9PiB7IC8vIOycoOyCrOuwsOyXtCDqsJ3ssrTrpbwg64+M66m07IScIOydtOuvuOyngOulvCDrhKPslrTspIxcclxuICAgICAgICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZik7IC8vIHJvdXRlci9wb3N07JeQIOuwsOyXtOuPhOuKlCAnaW1hZ2Un7JmAIOydvOy5mO2VtOyVvO2VqFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZSA6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YSA6IGltYWdlRm9ybURhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmKCF0ZXh0IHx8ICF0ZXh0LnRyaW0oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+qyjOyLnOq4gOydhCDsnpHshLHtlZjshLjsmpQuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBpbWFnZVBhdGhzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIHApOyBcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCB0ZXh0KVxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGUgOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhIDogZm9ybURhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0sW3RleHQsIGltYWdlUGF0aHNdKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmlucHV0LmNsaWNrKCk7XHJcbiAgICB9LFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuXHJcbiAgICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlIDogUkVNT1ZFX0lNQUdFLFxyXG4gICAgICAgICAgICBkYXRhIDogaW5kZXgsXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBzdHlsZT17e21hcmdpbiA6ICcxMHB4IDAgMjBweCd9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYSBcclxuICAgICAgICAgICAgdmFsdWU9e3RleHR9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fSBcclxuICAgICAgICAgICAgbWF4TGVuZ3RoPXsxNDB9IFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyWtOuWpCDro6nsnbQg7KCc7J28IOuniOydjOyXkCDrk5zsi5zrgpjsmpQ/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3tmbG9hdCA6IFwicmlnaHRcIn19IGh0bWxUeXBlPVwic3VibWl0XCI+7Ke57Ke5PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7ZGlzcGxheSA6IFwiaW5saW5lLWJsb2NrXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHt2fWB9IHN0eWxlPXt7d2lkdGggOiBcIjIwMHB4XCJ9fSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlSW1hZ2UoaSl9PuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=
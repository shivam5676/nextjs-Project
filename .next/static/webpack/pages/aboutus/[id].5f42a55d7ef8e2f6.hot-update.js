"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/aboutus/[id]",{

/***/ "./pages/aboutus/[id].js":
/*!*******************************!*\
  !*** ./pages/aboutus/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DetailsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction DetailsPage() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var userId = router.query.id;\n    var details = [\n        {\n            id: 1,\n            name: \"Yash\",\n            role: \"Senior Developer\"\n        },\n        {\n            id: 2,\n            name: \"Vaibhav\",\n            role: \"Backend Developer\"\n        },\n        {\n            id: 3,\n            name: \"Suresh\",\n            role: \"Frontend Developer\"\n        }\n    ];\n    var result = details.findIndex(function(current) {\n        current.id == userId;\n    });\n    console.log(result);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"User Detail Page\"\n    }, void 0, false, {\n        fileName: \"C:\\\\nextjs Project\\\\nextjs-course\\\\pages\\\\aboutus\\\\[id].js\",\n        lineNumber: 14,\n        columnNumber: 10\n    }, this);\n}\n_s(DetailsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = DetailsPage;\nvar _c;\n$RefreshReg$(_c, \"DetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dHVzL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFFekIsU0FBU0MsV0FBVyxHQUFHOztJQUNsQyxJQUFNQyxNQUFNLEdBQUNGLHNEQUFTLEVBQUU7SUFDeEIsSUFBTUcsTUFBTSxHQUFDRCxNQUFNLENBQUNFLEtBQUssQ0FBQ0MsRUFBRTtJQUM5QixJQUFNQyxPQUFPLEdBQUc7UUFDVjtZQUFFRCxFQUFFLEVBQUcsQ0FBQztZQUFFRSxJQUFJLEVBQUUsTUFBTTtZQUFFQyxJQUFJLEVBQUUsa0JBQWtCO1NBQUM7UUFDakQ7WUFBRUgsRUFBRSxFQUFHLENBQUM7WUFBRUUsSUFBSSxFQUFFLFNBQVM7WUFBRUMsSUFBSSxFQUFFLG1CQUFtQjtTQUFDO1FBQ3JEO1lBQUVILEVBQUUsRUFBRyxDQUFDO1lBQUVFLElBQUksRUFBRSxRQUFRO1lBQUVDLElBQUksRUFBRSxvQkFBb0I7U0FBQztLQUNwRDtJQUVELElBQU1DLE1BQU0sR0FBQ0gsT0FBTyxDQUFDSSxTQUFTLENBQUMsU0FBQ0MsT0FBTyxFQUFHO1FBQUNBLE9BQU8sQ0FBQ04sRUFBRSxJQUFFRixNQUFNO0lBQUEsQ0FBQyxDQUFDO0lBQy9EUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osTUFBTSxDQUFDO0lBQ3pCLHFCQUFPLDhEQUFDSyxJQUFFO2tCQUFDLGtCQUFnQjs7Ozs7WUFBSyxDQUFDO0FBQ25DLENBQUM7R0FadUJiLFdBQVc7O1FBQ2xCRCxrREFBUzs7O0FBREZDLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy9baWRdLmpzPzQ1MzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxzUGFnZSgpIHtcclxuICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHVzZXJJZD1yb3V0ZXIucXVlcnkuaWRcclxuICBjb25zdCBkZXRhaWxzID0gW1xyXG4gICAgICAgIHsgaWQgOiAxLCBuYW1lOiAnWWFzaCcsIHJvbGU6ICdTZW5pb3IgRGV2ZWxvcGVyJ30sXHJcbiAgICAgICAgeyBpZCA6IDIsIG5hbWU6ICdWYWliaGF2Jywgcm9sZTogJ0JhY2tlbmQgRGV2ZWxvcGVyJ30sXHJcbiAgICAgICAgeyBpZCA6IDMsIG5hbWU6ICdTdXJlc2gnLCByb2xlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyJ31cclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdD1kZXRhaWxzLmZpbmRJbmRleCgoY3VycmVudCk9PntjdXJyZW50LmlkPT11c2VySWR9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICByZXR1cm4gPGgyPlVzZXIgRGV0YWlsIFBhZ2U8L2gyPjtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiRGV0YWlsc1BhZ2UiLCJyb3V0ZXIiLCJ1c2VySWQiLCJxdWVyeSIsImlkIiwiZGV0YWlscyIsIm5hbWUiLCJyb2xlIiwicmVzdWx0IiwiZmluZEluZGV4IiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/aboutus/[id].js\n"));

/***/ })

});
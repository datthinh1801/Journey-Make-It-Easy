webpackHotUpdate("app",{

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].observable({\n  //authenticated state\n  authenticated: false,\n  authenticate: function authenticate(username, password) {\n    var response = axios.post('https://reqres.in/api/login', {\n      username: username,\n      password: password // }).then(res => {\n      //     return res.data;\n\n    });\n    console.log(response);\n  },\n  //username\n  username: null,\n  getUsername: function getUsername() {\n    return this.username;\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUuanM/MDdhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcblxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG5leHBvcnQgZGVmYXVsdCBWdWUub2JzZXJ2YWJsZSh7XG4gICAgLy9hdXRoZW50aWNhdGVkIHN0YXRlXG4gICAgYXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgYXV0aGVudGljYXRlKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBheGlvcy5wb3N0KCdodHRwczovL3JlcXJlcy5pbi9hcGkvbG9naW4nLCB7XG4gICAgICAgICAgICB1c2VybmFtZSwgcGFzc3dvcmRcbiAgICAgICAgICAgIC8vIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9LFxuXG4gICAgLy91c2VybmFtZVxuICAgIHVzZXJuYW1lOiBudWxsLFxuICAgIGdldFVzZXJuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VybmFtZTtcbiAgICB9XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ })

})
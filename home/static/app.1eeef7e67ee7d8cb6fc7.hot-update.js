webpackHotUpdate("app",{

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].observable({\n  //authenticated state\n  authenticated: false,\n  authenticate: function authenticate(username, password) {\n    var response;\n    axios.post('https://reqres.in/api/login', {\n      username: username,\n      password: password\n    }).then(function (res) {\n      response = res.data;\n    }).catch(function (err) {\n      console.log(err);\n    });\n    console.log(response);\n  },\n  //username\n  username: null,\n  getUsername: function getUsername() {\n    return this.username;\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUuanM/MDdhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcblxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG5leHBvcnQgZGVmYXVsdCBWdWUub2JzZXJ2YWJsZSh7XG4gICAgLy9hdXRoZW50aWNhdGVkIHN0YXRlXG4gICAgYXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgYXV0aGVudGljYXRlKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHBzOi8vcmVxcmVzLmluL2FwaS9sb2dpbicsIHtcbiAgICAgICAgICAgIHVzZXJuYW1lLCBwYXNzd29yZFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcy5kYXRhO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0sXG5cbiAgICAvL3VzZXJuYW1lXG4gICAgdXNlcm5hbWU6IG51bGwsXG4gICAgZ2V0VXNlcm5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJuYW1lO1xuICAgIH1cbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ })

})
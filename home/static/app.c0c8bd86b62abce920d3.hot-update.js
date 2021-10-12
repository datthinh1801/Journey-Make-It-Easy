webpackHotUpdate("app",{

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _external_Journey_Make_It_Easy_home_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router */ \"./src/router/index.js\");\n\n\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"].observable({\n  //authenticated state\n  authenticated: false,\n  authenticate: function authenticate(username, password) {\n    var _this = this;\n\n    return Object(_external_Journey_Make_It_Easy_home_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var response;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios.post('https://reqres.in/api/login', {\n                username: username,\n                password: password\n              }).then(function (res) {\n                return res.data;\n              });\n\n            case 2:\n              response = _context.sent;\n              _this.authenticated = response.token; // this.authenticated = true;\n\n              _router__WEBPACK_IMPORTED_MODULE_3__[\"default\"].push({\n                path: '/'\n              });\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  },\n  //username\n  username: null,\n  getUsername: function getUsername() {\n    return this.username;\n  },\n  // attraction\n  attractions: [],\n  getAttraction: function getAttraction() {\n    var _this2 = this;\n\n    return Object(_external_Journey_Make_It_Easy_home_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.t0 = _this2.attractions;\n              _context2.next = 3;\n              return axios.get('https://my-json-server.typicode.com/datthinh1801/mock-api/attractionList').then(function (res) {\n                return res.data[0];\n              });\n\n            case 3:\n              _context2.t1 = _context2.sent;\n\n              _context2.t0.push.call(_context2.t0, _context2.t1);\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }))();\n  },\n  // restaurants\n  restaurants: [],\n  getRestaurant: function getRestaurant() {\n    var _this3 = this;\n\n    return Object(_external_Journey_Make_It_Easy_home_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.t0 = _this3.restaurants;\n              _context3.next = 3;\n              return axios.get('https://my-json-server.typicode.com/datthinh1801/mock-api/restaurantList').then(function (res) {\n                return res.data[0];\n              });\n\n            case 3:\n              _context3.t1 = _context3.sent;\n\n              _context3.t0.push.call(_context3.t0, _context3.t1);\n\n            case 5:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }))();\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUuanM/MDdhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4uL3JvdXRlclwiO1xuXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5vYnNlcnZhYmxlKHtcbiAgICAvL2F1dGhlbnRpY2F0ZWQgc3RhdGVcbiAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICBhc3luYyBhdXRoZW50aWNhdGUodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHBzOi8vcmVxcmVzLmluL2FwaS9sb2dpbicsIHtcbiAgICAgICAgICAgIHVzZXJuYW1lLCBwYXNzd29yZFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHJlc3BvbnNlLnRva2VuO1xuICAgICAgICAvLyB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgICByb3V0ZXIucHVzaCh7cGF0aDogJy8nfSk7XG4gICAgfSxcblxuICAgIC8vdXNlcm5hbWVcbiAgICB1c2VybmFtZTogbnVsbCxcbiAgICBnZXRVc2VybmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlcm5hbWU7XG4gICAgfSxcblxuICAgIC8vIGF0dHJhY3Rpb25cbiAgICBhdHRyYWN0aW9uczogW10sXG4gICAgYXN5bmMgZ2V0QXR0cmFjdGlvbigpIHtcbiAgICAgICAgdGhpcy5hdHRyYWN0aW9ucy5wdXNoKGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vZGF0dGhpbmgxODAxL21vY2stYXBpL2F0dHJhY3Rpb25MaXN0JykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhWzBdO1xuICAgICAgICB9KSk7XG4gICAgfSxcblxuICAgIC8vIHJlc3RhdXJhbnRzXG4gICAgcmVzdGF1cmFudHM6IFtdLFxuICAgIGFzeW5jIGdldFJlc3RhdXJhbnQoKSB7XG4gICAgICAgIHRoaXMucmVzdGF1cmFudHMucHVzaChhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL2RhdHRoaW5oMTgwMS9tb2NrLWFwaS9yZXN0YXVyYW50TGlzdCcpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXMuZGF0YVswXTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn0pOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBbkNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ })

})
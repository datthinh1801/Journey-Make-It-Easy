webpackHotUpdate("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _external_Journey_Make_It_Easy_home_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _external_Journey_Make_It_Easy_home_frontend_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _external_Journey_Make_It_Easy_home_frontend_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_external_Journey_Make_It_Easy_home_frontend_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _external_Journey_Make_It_Easy_home_frontend_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _external_Journey_Make_It_Easy_home_frontend_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_external_Journey_Make_It_Easy_home_frontend_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _external_Journey_Make_It_Easy_home_frontend_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _external_Journey_Make_It_Easy_home_frontend_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_external_Journey_Make_It_Easy_home_frontend_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _external_Journey_Make_It_Easy_home_frontend_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _external_Journey_Make_It_Easy_home_frontend_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_external_Journey_Make_It_Easy_home_frontend_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ \"./node_modules/@fortawesome/vue-fontawesome/index.es.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__[\"library\"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faUserSecret\"]);\nvue__WEBPACK_IMPORTED_MODULE_6__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_6__[\"default\"].component('font-awesome-icon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_11__[\"FontAwesomeIcon\"]);\nvue__WEBPACK_IMPORTED_MODULE_6__[\"default\"].config.productionTip = false;\nvar store = new vuex__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Store({\n  state: {\n    // GENERIC STATE\n    currentURL: '/',\n    place: null,\n    // STATE for AUTHENTICATION\n    authenticated: false,\n    username: null,\n    // STATE for EXPLORE page\n    attractionArr: [],\n    restaurantArr: [],\n    hotelArr: [],\n    maxHorizontalItems: 3\n  },\n  mutations: {\n    signIn: function signIn(state, credential) {\n      return Object(_external_Journey_Make_It_Easy_home_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var username, password, response;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                username = credential.username, password = credential.password;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.post('https://reqres.in/api/login', {\n                  username: username,\n                  password: password\n                });\n\n              case 3:\n                response = _context.sent;\n                state.authenticated = response.data.token;\n                _context.next = 7;\n                return _router__WEBPACK_IMPORTED_MODULE_12__[\"default\"].push({\n                  path: '/'\n                });\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    signUp: function signUp(state, payload) {\n      return Object(_external_Journey_Make_It_Easy_home_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var username, password, rePassword, response;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                username = payload.username, password = payload.password, rePassword = payload.rePassword;\n                _context2.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.post('https://reqres.in/api/users', {\n                  username: username,\n                  password: password,\n                  rePassword: rePassword\n                });\n\n              case 3:\n                response = _context2.sent;\n                console.log(response.data);\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    getAttraction: function getAttraction(state) {\n      return Object(_external_Journey_Make_It_Easy_home_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.t0 = state.attractionArr;\n                _context3.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get('https://my-json-server.typicode.com/datthinh1801/mock-api/attractionList').then(function (res) {\n                  return res.data[0];\n                });\n\n              case 3:\n                _context3.t1 = _context3.sent;\n\n                _context3.t0.push.call(_context3.t0, _context3.t1);\n\n              case 5:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    },\n    getRestaurant: function getRestaurant(state) {\n      return Object(_external_Journey_Make_It_Easy_home_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n        return regeneratorRuntime.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.t0 = state.restaurantArr;\n                _context4.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get('https://my-json-server.typicode.com/datthinh1801/mock-api/attractionList').then(function (res) {\n                  return res.data[0];\n                });\n\n              case 3:\n                _context4.t1 = _context4.sent;\n\n                _context4.t0.push.call(_context4.t0, _context4.t1);\n\n              case 5:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }))();\n    },\n    getHotel: function getHotel(state) {\n      return Object(_external_Journey_Make_It_Easy_home_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {\n        return regeneratorRuntime.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                _context5.t0 = state.hotelArr;\n                _context5.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get('https://my-json-server.typicode.com/datthinh1801/mock-api/attractionList').then(function (res) {\n                  return res.data[0];\n                });\n\n              case 3:\n                _context5.t1 = _context5.sent;\n\n                _context5.t0.push.call(_context5.t0, _context5.t1);\n\n              case 5:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5);\n      }))();\n    }\n  },\n  getters: {\n    attractions: function attractions(state) {\n      return state.attractionArr;\n    },\n    restaurants: function restaurants(state) {\n      return state.restaurantArr;\n    },\n    hotels: function hotels(state) {\n      return state.hotelArr;\n    }\n  }\n});\nnew vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n  router: _router__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  store: store,\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n  }\n}).$mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5pbXBvcnQge2xpYnJhcnl9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcbmltcG9ydCB7ZmFVc2VyU2VjcmV0fSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSAnQGZvcnRhd2Vzb21lL3Z1ZS1mb250YXdlc29tZSdcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmxpYnJhcnkuYWRkKGZhVXNlclNlY3JldCk7XG5WdWUudXNlKFZ1ZXgpO1xuVnVlLmNvbXBvbmVudCgnZm9udC1hd2Vzb21lLWljb24nLCBGb250QXdlc29tZUljb24pO1xuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2U7XG5cbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xuICAgIHN0YXRlOiB7XG4gICAgICAgIC8vIEdFTkVSSUMgU1RBVEVcbiAgICAgICAgY3VycmVudFVSTDogJy8nLFxuICAgICAgICBwbGFjZTogbnVsbCxcblxuICAgICAgICAvLyBTVEFURSBmb3IgQVVUSEVOVElDQVRJT05cbiAgICAgICAgYXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICAgIHVzZXJuYW1lOiBudWxsLFxuXG4gICAgICAgIC8vIFNUQVRFIGZvciBFWFBMT1JFIHBhZ2VcbiAgICAgICAgYXR0cmFjdGlvbkFycjogW10sXG4gICAgICAgIHJlc3RhdXJhbnRBcnI6IFtdLFxuICAgICAgICBob3RlbEFycjogW10sXG4gICAgICAgIG1heEhvcml6b250YWxJdGVtczogMyxcbiAgICB9LFxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBhc3luYyBzaWduSW4oc3RhdGUsIGNyZWRlbnRpYWwpIHtcbiAgICAgICAgICAgIGxldCB7dXNlcm5hbWUsIHBhc3N3b3JkfSA9IGNyZWRlbnRpYWw7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwczovL3JlcXJlcy5pbi9hcGkvbG9naW4nLCB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsIHBhc3N3b3JkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc3RhdGUuYXV0aGVudGljYXRlZCA9IHJlc3BvbnNlLmRhdGEudG9rZW47XG4gICAgICAgICAgICBhd2FpdCByb3V0ZXIucHVzaCh7cGF0aDogJy8nfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHNpZ25VcChzdGF0ZSwgcGF5bG9hZCkge1xuICAgICAgICAgICAgbGV0IHt1c2VybmFtZSwgcGFzc3dvcmQsIHJlUGFzc3dvcmR9ID0gcGF5bG9hZDtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHBzOi8vcmVxcmVzLmluL2FwaS91c2VycycsIHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSwgcGFzc3dvcmQsIHJlUGFzc3dvcmRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGdldEF0dHJhY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLmF0dHJhY3Rpb25BcnIucHVzaChcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL2RhdHRoaW5oMTgwMS9tb2NrLWFwaS9hdHRyYWN0aW9uTGlzdCcpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhWzBdO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZ2V0UmVzdGF1cmFudChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzdGF1cmFudEFyci5wdXNoKFxuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9teS1qc29uLXNlcnZlci50eXBpY29kZS5jb20vZGF0dGhpbmgxODAxL21vY2stYXBpL2F0dHJhY3Rpb25MaXN0JykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBnZXRIb3RlbChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuaG90ZWxBcnIucHVzaChcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL2RhdHRoaW5oMTgwMS9tb2NrLWFwaS9hdHRyYWN0aW9uTGlzdCcpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5kYXRhWzBdO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGdldHRlcnM6IHtcbiAgICAgICAgYXR0cmFjdGlvbnM6IHN0YXRlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5hdHRyYWN0aW9uQXJyO1xuICAgICAgICB9LFxuICAgICAgICByZXN0YXVyYW50czogc3RhdGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnJlc3RhdXJhbnRBcnI7XG4gICAgICAgIH0sXG4gICAgICAgIGhvdGVsczogc3RhdGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmhvdGVsQXJyO1xuICAgICAgICB9XG4gICAgfVxufSlcblxubmV3IFZ1ZSh7XG4gICAgcm91dGVyLFxuICAgIHN0b3JlLFxuICAgIHJlbmRlcjogaCA9PiBoKEFwcClcbn0pLiRtb3VudCgnI2FwcCcpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQURBO0FBQ0E7QUFIQTtBQUVBO0FBSUE7QUFOQTtBQUFBO0FBT0E7QUFBQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUhBO0FBRUE7QUFHQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQWxDQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBcERBO0FBaUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

})
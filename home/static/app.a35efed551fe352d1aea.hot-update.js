webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Restaurants.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Restaurants.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_HeaderAndNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/HeaderAndNav */ \"./src/components/HeaderAndNav.vue\");\n/* harmony import */ var _components_FilterPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FilterPanel */ \"./src/components/FilterPanel.vue\");\n/* harmony import */ var _components_HorizontalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HorizontalItem */ \"./src/components/HorizontalItem.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Restaurants',\n  components: {\n    HeaderAndNav: _components_HeaderAndNav__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    FilterPanel: _components_FilterPanel__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    HorizontalItem: _components_HorizontalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  computed: {\n    place: function place() {\n      // return this.$store.state.place.toUpperCase();\n      return 'Da Lat'.toUpperCase();\n    },\n    items: function items() {\n      return this.$store.state.restaurantArr;\n    }\n  },\n  methods: {\n    getItem: function getItem(n) {\n      for (var i = 0; i < n; ++i) {\n        this.$store.dispatch('getRestaurant');\n      }\n    }\n  },\n  mounted: function mounted() {\n    this.$store.commit('changePath', '/restaurants');\n    this.getItem(9);\n  },\n  beforeDestroy: function beforeDestroy() {\n    this.$store.commit('clearAllRestaurants');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL1Jlc3RhdXJhbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vUmVzdGF1cmFudHMudnVlPzYxMTMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxIZWFkZXJBbmROYXYvPlxuICAgIDxoMSA6Y2xhc3M9XCIkc3R5bGUuaGVhZFwiPlJlc3RhdXJhbnRzIGluIHt7IHBsYWNlIH19PC9oMT5cbiAgICA8ZGl2IDpjbGFzcz1cIiRzdHlsZVsnY29udGVudC1saXN0J11cIj5cbiAgICAgIDxGaWx0ZXJQYW5lbCA6aWQ9XCIkc3R5bGVbJ2ZpbHRlci1wYW5lbCddXCIvPlxuICAgICAgPGRpdiA6aWQ9XCIkc3R5bGVbJ2l0ZW0tbGlzdC1zZWN0aW9uJ11cIj5cbiAgICAgICAgPEhvcml6b250YWxJdGVtIHYtZm9yPVwiKGl0ZW0sIGkpIGluIGl0ZW1zXCIgOmtleT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW0tbmFtZT1cIml0ZW0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aW1nLXNyYz1cImltYWdlcy9wbGFjZWhvbGRlcl9pbWcucG5nXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSGVhZGVyQW5kTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlckFuZE5hdlwiO1xuaW1wb3J0IEZpbHRlclBhbmVsIGZyb20gXCIuLi9jb21wb25lbnRzL0ZpbHRlclBhbmVsXCI7XG5pbXBvcnQgSG9yaXpvbnRhbEl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9yaXpvbnRhbEl0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUmVzdGF1cmFudHMnLFxuICBjb21wb25lbnRzOiB7SGVhZGVyQW5kTmF2LCBGaWx0ZXJQYW5lbCwgSG9yaXpvbnRhbEl0ZW19LFxuICBjb21wdXRlZDoge1xuICAgIHBsYWNlKCkge1xuICAgICAgLy8gcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnBsYWNlLnRvVXBwZXJDYXNlKCk7XG4gICAgICByZXR1cm4gJ0RhIExhdCcudG9VcHBlckNhc2UoKTtcbiAgICB9LFxuICAgIGl0ZW1zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnJlc3RhdXJhbnRBcnI7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0SXRlbShuKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0UmVzdGF1cmFudCcpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2NoYW5nZVBhdGgnLCAnL3Jlc3RhdXJhbnRzJyk7XG4gICAgdGhpcy5nZXRJdGVtKDkpO1xuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2xlYXJBbGxSZXN0YXVyYW50cycpO1xuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIG1vZHVsZT5cbmgxLmhlYWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2ZpbHRlci1wYW5lbCB7XG5cbn1cblxuI2l0ZW0tbGlzdC1zZWN0aW9uIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Restaurants.vue?vue&type=script&lang=js&\n");

/***/ })

})
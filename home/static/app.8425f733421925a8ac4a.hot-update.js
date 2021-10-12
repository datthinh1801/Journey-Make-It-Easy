webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/RecommendationGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RecommendationGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ \"./node_modules/core-js/modules/es.array.splice.js\");\n/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _VerticalItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VerticalItem */ \"./src/components/VerticalItem.vue\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.js\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__[\"library\"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__[\"faChevronLeft\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__[\"faChevronRight\"]);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'RecommendationGroup',\n  components: {\n    VerticalItem: _VerticalItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  props: ['title', 'description'],\n  data: function data() {\n    return {\n      currentIndex: 0,\n      maxIndex: 5\n    };\n  },\n  computed: {\n    items: function items() {\n      // if (this.title === 'Do') {\n      //   return store.attractions;\n      // } else if (this.title === 'Eat') {\n      //   return store.restaurants;\n      // } else {\n      //   return store.restaurants;\n      // }\n      while (this.currentIndex + 3 < _store_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"].attractions.length && this.maxIndex >= _store_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"].attractions.length) {}\n\n      if (this.currentIndex + 3 < _store_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"].attractions.length) {\n        return _store_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"].attractions.splice(this.currentIndex, 3);\n      }\n    }\n  },\n  methods: {\n    getAttraction: function getAttraction(num) {\n      // for (let i = 0; i < num; ++i) {\n      // TODO: I commented this to remove duplicate items while testing\n      console.log(num);\n      _store_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getAttraction(); // }\n    },\n    getRestaurant: function getRestaurant(num) {\n      for (var i = 0; i < num; ++i) {\n        _store_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getRestaurant();\n      }\n    },\n    moveLeft: function moveLeft() {},\n    moveRight: function moveRight() {}\n  },\n  mounted: function mounted() {\n    this.getAttraction(3);\n    this.getRestaurant(3);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUmVjb21tZW5kYXRpb25Hcm91cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1JlY29tbWVuZGF0aW9uR3JvdXAudnVlPzgxMTMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IDpjbGFzcz1cIiRzdHlsZS5ncmlkQ29udGFpbmVyXCI+XG4gICAgPGRpdiA6Y2xhc3M9XCIkc3R5bGUuaW5mb1wiPlxuICAgICAgPGgzPnt7IHRpdGxlIH19PC9oMz5cbiAgICAgIDxwPnt7IGRlc2NyaXB0aW9uIH19PC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiA6Y2xhc3M9XCIkc3R5bGUuaXRlbUNvbnRhaW5lclwiPlxuICAgICAgPGJ1dHRvbiA6Y2xhc3M9XCIkc3R5bGUubGVmdEJ1dHRvblwiIEBjbGljaz1cIm1vdmVMZWZ0XCI+XG4gICAgICAgIDxmb250LWF3ZXNvbWUtaWNvbiBpY29uPVwiY2hldnJvbi1sZWZ0XCIvPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxWZXJ0aWNhbEl0ZW0gdi1mb3I9XCIoaXRlbSwgaSkgaW4gaXRlbXNcIiA6a2V5PVwiaVwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIiRzdHlsZS5yZWNvbW1lbmRlZEl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICA6aW1nU3JjPVwiaXRlbS5pbWFnZXNbMF1cIlxuICAgICAgICAgICAgICAgICAgICA6aXRlbU5hbWU9XCJpdGVtLm5hbWVcIi8+XG5cbiAgICAgIDxidXR0b24gOmNsYXNzPVwiJHN0eWxlLnJpZ2h0QnV0dG9uXCIgQGNsaWNrPVwibW92ZVJpZ2h0XCI+XG4gICAgICAgIDxmb250LWF3ZXNvbWUtaWNvbiBpY29uPVwiY2hldnJvbi1yaWdodFwiLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQge2xpYnJhcnl9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIjtcbmltcG9ydCB7ZmFDaGV2cm9uTGVmdH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHtmYUNoZXZyb25SaWdodH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5saWJyYXJ5LmFkZChmYUNoZXZyb25MZWZ0LCBmYUNoZXZyb25SaWdodCk7XG5cbmltcG9ydCBWZXJ0aWNhbEl0ZW0gZnJvbSBcIi4vVmVydGljYWxJdGVtXCI7XG5cbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc3RvcmUvc3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUmVjb21tZW5kYXRpb25Hcm91cCcsXG4gIGNvbXBvbmVudHM6IHtWZXJ0aWNhbEl0ZW0sfSxcbiAgcHJvcHM6IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudEluZGV4OiAwLFxuICAgICAgbWF4SW5kZXg6IDUsXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGl0ZW1zKCkge1xuICAgICAgLy8gaWYgKHRoaXMudGl0bGUgPT09ICdEbycpIHtcbiAgICAgIC8vICAgcmV0dXJuIHN0b3JlLmF0dHJhY3Rpb25zO1xuICAgICAgLy8gfSBlbHNlIGlmICh0aGlzLnRpdGxlID09PSAnRWF0Jykge1xuICAgICAgLy8gICByZXR1cm4gc3RvcmUucmVzdGF1cmFudHM7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICByZXR1cm4gc3RvcmUucmVzdGF1cmFudHM7XG4gICAgICAvLyB9XG4gICAgICB3aGlsZSAodGhpcy5jdXJyZW50SW5kZXggKyAzIDwgc3RvcmUuYXR0cmFjdGlvbnMubGVuZ3RoICYmIHRoaXMubWF4SW5kZXggPj0gc3RvcmUuYXR0cmFjdGlvbnMubGVuZ3RoKXtcblxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ICsgMyA8IHN0b3JlLmF0dHJhY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gc3RvcmUuYXR0cmFjdGlvbnMuc3BsaWNlKHRoaXMuY3VycmVudEluZGV4LCAzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRBdHRyYWN0aW9uKG51bSkge1xuICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBudW07ICsraSkge1xuICAgICAgLy8gVE9ETzogSSBjb21tZW50ZWQgdGhpcyB0byByZW1vdmUgZHVwbGljYXRlIGl0ZW1zIHdoaWxlIHRlc3RpbmdcbiAgICAgIGNvbnNvbGUubG9nKG51bSk7XG4gICAgICBzdG9yZS5nZXRBdHRyYWN0aW9uKCk7XG4gICAgICAvLyB9XG4gICAgfSxcbiAgICBnZXRSZXN0YXVyYW50KG51bSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07ICsraSkge1xuICAgICAgICBzdG9yZS5nZXRSZXN0YXVyYW50KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBtb3ZlTGVmdCgpIHtcblxuICAgIH0sXG4gICAgbW92ZVJpZ2h0KCkge1xuXG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZ2V0QXR0cmFjdGlvbigzKTtcbiAgICB0aGlzLmdldFJlc3RhdXJhbnQoMyk7XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbW9kdWxlPlxuQGltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5cbi5ncmlkQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG59XG5cbi5yZWNvbW1lbmRlZEl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXgtaGVpZ2h0OiA5NSU7XG59XG5cbi5pdGVtQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBncmlkLWNvbHVtbjogMi81O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5sZWZ0QnV0dG9uLFxuLnJpZ2h0QnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGhlaWdodDogMzNweDtcbiAgd2lkdGg6IDMzcHg7XG4gIHRvcDogMzMlO1xuXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgei1pbmRleDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGVmdEJ1dHRvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbn1cblxuLnJpZ2h0QnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5cbi5sZWZ0QnV0dG9uOmhvdmVyLFxuLnJpZ2h0QnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJpZ2h0QnV0dG9uIHtcbiAgcmlnaHQ6IDA7XG59XG5cbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBaEJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBbERBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/RecommendationGroup.vue?vue&type=script&lang=js&\n");

/***/ })

})
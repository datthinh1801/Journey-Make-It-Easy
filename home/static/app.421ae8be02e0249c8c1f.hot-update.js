webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/RecommendationGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RecommendationGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _VerticalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalItem */ \"./src/components/VerticalItem.vue\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[\"library\"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__[\"faChevronLeft\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__[\"faChevronRight\"]);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'RecommendationGroup',\n  components: {\n    VerticalItem: _VerticalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  props: ['title', 'description'],\n  data: function data() {\n    return {};\n  },\n  computed: {\n    items: function items() {\n      if (this.title === 'Do') {\n        return _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].attractions;\n      } else if (this.title === 'Eat') {\n        return _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].restaurants;\n      } else {\n        return _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].restaurants;\n      }\n    }\n  },\n  methods: {\n    getAttraction: function getAttraction(num) {\n      for (var i = 0; i < num; ++i) {\n        _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getAttraction();\n      }\n    },\n    getRestaurant: function getRestaurant(num) {\n      for (var i = 0; i < num; ++i) {\n        _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getRestaurant();\n      }\n    }\n  },\n  mounted: function mounted() {\n    this.getAttraction(3);\n    this.getRestaurant(3);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUmVjb21tZW5kYXRpb25Hcm91cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1JlY29tbWVuZGF0aW9uR3JvdXAudnVlPzgxMTMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IDpjbGFzcz1cIiRzdHlsZS5ncmlkQ29udGFpbmVyXCI+XG4gICAgPGRpdiA6Y2xhc3M9XCIkc3R5bGUuaW5mb1wiPlxuICAgICAgPGgzPnt7IHRpdGxlIH19PC9oMz5cbiAgICAgIDxwPnt7IGRlc2NyaXB0aW9uIH19PC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiA6Y2xhc3M9XCIkc3R5bGUuaXRlbUNvbnRhaW5lclwiPlxuICAgICAgPGJ1dHRvbiA6Y2xhc3M9XCIkc3R5bGUubGVmdEJ1dHRvblwiPlxuICAgICAgICA8Zm9udC1hd2Vzb21lLWljb24gaWNvbj1cImNoZXZyb24tbGVmdFwiLz5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8VmVydGljYWxJdGVtIHYtZm9yPVwiKGl0ZW0sIGkpIGluIGl0ZW1zXCIgOmtleT1cImlcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCIkc3R5bGUucmVjb21tZW5kZWRJdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgOmltZ1NyYz1cIml0ZW0uaW1hZ2VzWzBdXCJcbiAgICAgICAgICAgICAgICAgICAgOml0ZW1OYW1lPVwiaXRlbS5uYW1lXCIvPlxuXG4gICAgICA8YnV0dG9uIDpjbGFzcz1cIiRzdHlsZS5yaWdodEJ1dHRvblwiPlxuICAgICAgICA8Zm9udC1hd2Vzb21lLWljb24gaWNvbj1cImNoZXZyb24tcmlnaHRcIi8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCI7XG5pbXBvcnQge2ZhQ2hldnJvbkxlZnR9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7ZmFDaGV2cm9uUmlnaHR9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxubGlicmFyeS5hZGQoZmFDaGV2cm9uTGVmdCwgZmFDaGV2cm9uUmlnaHQpO1xuXG5pbXBvcnQgVmVydGljYWxJdGVtIGZyb20gXCIuL1ZlcnRpY2FsSXRlbVwiO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0b3JlL3N0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1JlY29tbWVuZGF0aW9uR3JvdXAnLFxuICBjb21wb25lbnRzOiB7VmVydGljYWxJdGVtLH0sXG4gIHByb3BzOiBbJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJ10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaXRlbXMoKSB7XG4gICAgICBpZiAodGhpcy50aXRsZSA9PT0gJ0RvJykge1xuICAgICAgICByZXR1cm4gc3RvcmUuYXR0cmFjdGlvbnM7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGl0bGUgPT09ICdFYXQnKSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5yZXN0YXVyYW50cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5yZXN0YXVyYW50cztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRBdHRyYWN0aW9uKG51bSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07ICsraSkge1xuICAgICAgICBzdG9yZS5nZXRBdHRyYWN0aW9uKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRSZXN0YXVyYW50KG51bSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07ICsraSkge1xuICAgICAgICBzdG9yZS5nZXRSZXN0YXVyYW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZ2V0QXR0cmFjdGlvbigzKTtcbiAgICB0aGlzLmdldFJlc3RhdXJhbnQoMyk7XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbW9kdWxlPlxuQGltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5cbi5ncmlkQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG59XG5cbi5yZWNvbW1lbmRlZEl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXgtaGVpZ2h0OiA5NSU7XG59XG5cbi5pdGVtQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBncmlkLWNvbHVtbjogMi81O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5sZWZ0QnV0dG9uLFxuLnJpZ2h0QnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGhlaWdodDogMzNweDtcbiAgd2lkdGg6IDMzcHg7XG4gIHRvcDogMzMlO1xuXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgei1pbmRleDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGVmdEJ1dHRvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbn1cblxuLnJpZ2h0QnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5cbi5sZWZ0QnV0dG9uOmhvdmVyLFxuLnJpZ2h0QnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJpZ2h0QnV0dG9uIHtcbiAgcmlnaHQ6IDA7XG59XG5cbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFqQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/RecommendationGroup.vue?vue&type=script&lang=js&\n");

/***/ })

})
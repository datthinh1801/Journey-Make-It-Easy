webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TopAttractionsSection.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TopAttractionsSection.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VerticalItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalItem */ \"./src/components/VerticalItem.vue\");\n/* harmony import */ var _LoadMoreButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadMoreButton */ \"./src/components/LoadMoreButton.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TopAttractionsSection',\n  components: {\n    LoadMoreButton: _LoadMoreButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    VerticalItem: _VerticalItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  computed: {\n    place: function place() {\n      // return this.$store.state.place.toUpperCase();\n      return 'Da Lat'.toUpperCase();\n    },\n    items: function items() {\n      return this.$store.state.attractionArr;\n    }\n  },\n  methods: {\n    getAttraction: function getAttraction(n) {\n      for (var i = 0; i < n; ++i) {\n        this.$store.dispatch('getAttraction');\n      }\n    },\n    loadMore: function loadMore() {\n      this.getAttraction(9);\n    }\n  },\n  beforeMount: function beforeMount() {\n    this.getAttraction(9);\n  },\n  beforeDestroy: function beforeDestroy() {\n    this.$store.commit('clearAllAttractions');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvVG9wQXR0cmFjdGlvbnNTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vVG9wQXR0cmFjdGlvbnNTZWN0aW9uLnZ1ZT9iZTUxIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8aDEgOmNsYXNzPVwiJHN0eWxlLmhlYWRlclwiPlRvcCBBdHRyYWN0aW9ucyBpbiB7eyBwbGFjZSB9fTwvaDE+XG4gICAgPGRpdiA6Y2xhc3M9XCIkc3R5bGVbJ2NvbnRlbnQtY29udGFpbmVyJ11cIiBjbGFzcz1cIndpZHRoLWNvbnRyb2xcIj5cbiAgICAgIDxWZXJ0aWNhbEl0ZW0gdi1mb3I9XCIoaXRlbSwgaSkgaW4gaXRlbXNcIiA6a2V5PVwiaVwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIiRzdHlsZVsnZ3JpZC1pdGVtJ11cIlxuICAgICAgICAgICAgICAgICAgICA6aW1nU3JjPVwiaXRlbS5pbWFnZXNbNF1cIlxuICAgICAgICAgICAgICAgICAgICA6aXRlbU5hbWU9XCJpdGVtLm5hbWVcIi8+XG4gICAgPC9kaXY+XG4gICAgPCEtLSAgICA8YnV0dG9uIDpjbGFzcz1cIiRzdHlsZVsnbG9hZC1tb3JlLWJ0biddXCIgQGNsaWNrPVwibG9hZE1vcmVcIj5MT0FEIE1PUkU8L2J1dHRvbj4tLT5cbiAgICA8TG9hZE1vcmVCdXR0b24gQGxvYWRNb3JlPVwibG9hZE1vcmVcIi8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWZXJ0aWNhbEl0ZW0gZnJvbSBcIi4vVmVydGljYWxJdGVtXCI7XG5pbXBvcnQgTG9hZE1vcmVCdXR0b24gZnJvbSBcIi4vTG9hZE1vcmVCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVG9wQXR0cmFjdGlvbnNTZWN0aW9uJyxcbiAgY29tcG9uZW50czoge0xvYWRNb3JlQnV0dG9uLCBWZXJ0aWNhbEl0ZW19LFxuICBjb21wdXRlZDoge1xuICAgIHBsYWNlKCkge1xuICAgICAgLy8gcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnBsYWNlLnRvVXBwZXJDYXNlKCk7XG4gICAgICByZXR1cm4gJ0RhIExhdCcudG9VcHBlckNhc2UoKTtcbiAgICB9LFxuICAgIGl0ZW1zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmF0dHJhY3Rpb25BcnI7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0QXR0cmFjdGlvbihuKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0QXR0cmFjdGlvbicpO1xuICAgICAgfVxuICAgIH0sXG4gICAgbG9hZE1vcmUoKSB7XG4gICAgICB0aGlzLmdldEF0dHJhY3Rpb24oOSk7XG4gICAgfVxuICB9LFxuICBiZWZvcmVNb3VudCgpIHtcbiAgICB0aGlzLmdldEF0dHJhY3Rpb24oOSk7XG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgdGhpcy4kc3RvcmUuY29tbWl0KCdjbGVhckFsbEF0dHJhY3Rpb25zJyk7XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbW9kdWxlPlxuaDEuaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLWdhcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmdyaWQtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJ1dHRvbi5sb2FkLW1vcmUtYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbmJ1dHRvbi5sb2FkLW1vcmUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TopAttractionsSection.vue?vue&type=script&lang=js&\n");

/***/ })

})
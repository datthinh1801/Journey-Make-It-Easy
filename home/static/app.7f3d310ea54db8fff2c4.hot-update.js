webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TopAttractionsSection.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TopAttractionsSection.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VerticalItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalItem */ \"./src/components/VerticalItem.vue\");\n/* harmony import */ var _LoadMoreButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadMoreButton */ \"./src/components/LoadMoreButton.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TopAttractionsSection',\n  components: {\n    LoadMoreButton: _LoadMoreButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    VerticalItem: _VerticalItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  computed: {\n    place: function place() {\n      // return this.$store.state.place.upper();\n      return 'Da Lat';\n    },\n    items: function items() {\n      return this.$store.state.attractionArr;\n    }\n  },\n  methods: {\n    getAttraction: function getAttraction(n) {\n      for (var i = 0; i < n; ++i) {\n        this.$store.dispatch('getAttraction');\n      }\n    },\n    loadMore: function loadMore() {\n      this.getAttraction(9);\n    }\n  },\n  beforeMount: function beforeMount() {\n    this.getAttraction(9);\n  },\n  beforeDestroy: function beforeDestroy() {\n    this.$store.commit('clearAllAttractions');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvVG9wQXR0cmFjdGlvbnNTZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vVG9wQXR0cmFjdGlvbnNTZWN0aW9uLnZ1ZT9iZTUxIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8aDEgOmNsYXNzPVwiJHN0eWxlLmhlYWRlclwiPlRvcCBBdHRyYWN0aW9ucyBpbiB7eyBwbGFjZSB9fTwvaDE+XG4gICAgPGRpdiA6Y2xhc3M9XCIkc3R5bGVbJ2NvbnRlbnQtY29udGFpbmVyJ11cIiBjbGFzcz1cIndpZHRoLWNvbnRyb2xcIj5cbiAgICAgIDxWZXJ0aWNhbEl0ZW0gdi1mb3I9XCIoaXRlbSwgaSkgaW4gaXRlbXNcIiA6a2V5PVwiaVwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIiRzdHlsZVsnZ3JpZC1pdGVtJ11cIlxuICAgICAgICAgICAgICAgICAgICA6aW1nU3JjPVwiaXRlbS5pbWFnZXNbNF1cIlxuICAgICAgICAgICAgICAgICAgICA6aXRlbU5hbWU9XCJpdGVtLm5hbWVcIi8+XG4gICAgPC9kaXY+XG4gICAgPExvYWRNb3JlQnV0dG9uIDpjbGFzcz1cIiRzdHlsZVsnbG9hZC1tb3JlLWJ0biddXCIgQGNsaWNrPVwibG9hZE1vcmVcIi8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWZXJ0aWNhbEl0ZW0gZnJvbSBcIi4vVmVydGljYWxJdGVtXCI7XG5pbXBvcnQgTG9hZE1vcmVCdXR0b24gZnJvbSBcIi4vTG9hZE1vcmVCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVG9wQXR0cmFjdGlvbnNTZWN0aW9uJyxcbiAgY29tcG9uZW50czoge0xvYWRNb3JlQnV0dG9uLCBWZXJ0aWNhbEl0ZW19LFxuICBjb21wdXRlZDoge1xuICAgIHBsYWNlKCkge1xuICAgICAgLy8gcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnBsYWNlLnVwcGVyKCk7XG4gICAgICByZXR1cm4gJ0RhIExhdCc7XG4gICAgfSxcbiAgICBpdGVtcygpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5hdHRyYWN0aW9uQXJyO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldEF0dHJhY3Rpb24obikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldEF0dHJhY3Rpb24nKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvYWRNb3JlKCkge1xuICAgICAgdGhpcy5nZXRBdHRyYWN0aW9uKDkpO1xuICAgIH1cbiAgfSxcbiAgYmVmb3JlTW91bnQoKSB7XG4gICAgdGhpcy5nZXRBdHRyYWN0aW9uKDkpO1xuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnY2xlYXJBbGxBdHRyYWN0aW9ucycpO1xuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIG1vZHVsZT5cbmgxLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5ncmlkLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5idXR0b24ubG9hZC1tb3JlLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TopAttractionsSection.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"06f14dd9-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TopAttractionsSection.vue?vue&type=template&id=24f19e8e&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"06f14dd9-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TopAttractionsSection.vue?vue&type=template&id=24f19e8e& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"h1\", { class: _vm.$style.header }, [\n        _vm._v(\"Top Attractions in \" + _vm._s(_vm.place))\n      ]),\n      _c(\n        \"div\",\n        {\n          staticClass: \"width-control\",\n          class: _vm.$style[\"content-container\"]\n        },\n        _vm._l(_vm.items, function(item, i) {\n          return _c(\"VerticalItem\", {\n            key: i,\n            class: _vm.$style[\"grid-item\"],\n            attrs: { imgSrc: item.images[4], itemName: item.name }\n          })\n        }),\n        1\n      ),\n      _c(\"LoadMoreButton\", {\n        class: _vm.$style[\"load-more-btn\"],\n        on: { click: _vm.loadMore }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiMDZmMTRkZDktdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL1RvcEF0dHJhY3Rpb25zU2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjRmMTllOGUmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVG9wQXR0cmFjdGlvbnNTZWN0aW9uLnZ1ZT8wMDc1Il0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImgxXCIsIHsgY2xhc3M6IF92bS4kc3R5bGUuaGVhZGVyIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiVG9wIEF0dHJhY3Rpb25zIGluIFwiICsgX3ZtLl9zKF92bS5wbGFjZSkpXG4gICAgICBdKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2lkdGgtY29udHJvbFwiLFxuICAgICAgICAgIGNsYXNzOiBfdm0uJHN0eWxlW1wiY29udGVudC1jb250YWluZXJcIl1cbiAgICAgICAgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5pdGVtcywgZnVuY3Rpb24oaXRlbSwgaSkge1xuICAgICAgICAgIHJldHVybiBfYyhcIlZlcnRpY2FsSXRlbVwiLCB7XG4gICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICBjbGFzczogX3ZtLiRzdHlsZVtcImdyaWQtaXRlbVwiXSxcbiAgICAgICAgICAgIGF0dHJzOiB7IGltZ1NyYzogaXRlbS5pbWFnZXNbNF0sIGl0ZW1OYW1lOiBpdGVtLm5hbWUgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXCJMb2FkTW9yZUJ1dHRvblwiLCB7XG4gICAgICAgIGNsYXNzOiBfdm0uJHN0eWxlW1wibG9hZC1tb3JlLWJ0blwiXSxcbiAgICAgICAgb246IHsgY2xpY2s6IF92bS5sb2FkTW9yZSB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"06f14dd9-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TopAttractionsSection.vue?vue&type=template&id=24f19e8e&\n");

/***/ })

})
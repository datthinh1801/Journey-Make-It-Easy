webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/RecommendationGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RecommendationGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _VerticalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalItem */ \"./src/components/VerticalItem.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[\"library\"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__[\"faChevronLeft\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__[\"faChevronRight\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'RecommendationGroup',\n  components: {\n    VerticalItem: _VerticalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  props: ['title', 'description'],\n  data: function data() {\n    return {\n      currentItem: 0\n    };\n  },\n  computed: {\n    items: function items() {\n      if (this.title === 'Do') {\n        return this.$store.getters.attractions;\n      } else if (this.title === 'Stay') {\n        return this.$store.getters.hotels;\n      } else {\n        return this.$store.getters.restaurants;\n      }\n    },\n    showPrev: function showPrev() {\n      return this.currentItem > 0;\n    },\n    showNext: function showNext() {\n      // TODO: Define the maximum number of items to shwo\n      return true;\n    }\n  },\n  methods: {\n    getAttraction: function getAttraction() {\n      this.$store.commit('getAttraction');\n    },\n    getRestaurant: function getRestaurant() {\n      this.$store.commit('getRestaurant');\n    },\n    getHotel: function getHotel() {\n      this.$store.commit('getHotel');\n    },\n    getItem: function getItem() {\n      if (this.title === 'Do') {\n        this.getAttraction();\n      } else if (this.title === 'Eat') {\n        this.getRestaurant();\n      } else {\n        this.getHotel();\n      }\n    },\n    moveLeft: function moveLeft() {\n      this.currentItem = Math.min(this.currentItem - 1, 0);\n    },\n    moveRight: function moveRight() {\n      this.getItem();\n      ++this.currentItem;\n    }\n  },\n  mounted: function mounted() {\n    for (var i = 0; i < this.$store.state.maxHorizontalItems; ++i) {\n      this.getItem();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUmVjb21tZW5kYXRpb25Hcm91cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1JlY29tbWVuZGF0aW9uR3JvdXAudnVlPzgxMTMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IDpjbGFzcz1cIiRzdHlsZS5ncmlkQ29udGFpbmVyXCI+XG4gICAgPGRpdiA6Y2xhc3M9XCIkc3R5bGUuaW5mb1wiPlxuICAgICAgPGgzPnt7IHRpdGxlIH19PC9oMz5cbiAgICAgIDxwPnt7IGRlc2NyaXB0aW9uIH19PC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiA6Y2xhc3M9XCIkc3R5bGUuaXRlbUNvbnRhaW5lclwiPlxuICAgICAgPGJ1dHRvbiA6Y2xhc3M9XCIkc3R5bGUubGVmdEJ1dHRvblwiIEBjbGljaz1cIm1vdmVMZWZ0XCIgdi1zaG93PVwic2hvd1ByZXZcIj5cbiAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIGljb249XCJjaGV2cm9uLWxlZnRcIi8+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPFZlcnRpY2FsSXRlbSB2LWZvcj1cIihpdGVtLCBpKSBpbiBpdGVtc1wiIDprZXk9XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiJHN0eWxlLnJlY29tbWVuZGVkSXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIDppbWdTcmM9XCJpdGVtLmltYWdlc1swXVwiXG4gICAgICAgICAgICAgICAgICAgIDppdGVtTmFtZT1cIml0ZW0ubmFtZVwiLz5cblxuICAgICAgPGJ1dHRvbiA6Y2xhc3M9XCIkc3R5bGUucmlnaHRCdXR0b25cIiBAY2xpY2s9XCJtb3ZlUmlnaHRcIiB2LXNob3c9XCJzaG93TmV4dFwiPlxuICAgICAgICA8Zm9udC1hd2Vzb21lLWljb24gaWNvbj1cImNoZXZyb24tcmlnaHRcIi8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCI7XG5pbXBvcnQge2ZhQ2hldnJvbkxlZnR9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7ZmFDaGV2cm9uUmlnaHR9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxubGlicmFyeS5hZGQoZmFDaGV2cm9uTGVmdCwgZmFDaGV2cm9uUmlnaHQpO1xuXG5pbXBvcnQgVmVydGljYWxJdGVtIGZyb20gXCIuL1ZlcnRpY2FsSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdSZWNvbW1lbmRhdGlvbkdyb3VwJyxcbiAgY29tcG9uZW50czoge1ZlcnRpY2FsSXRlbSx9LFxuICBwcm9wczogWyd0aXRsZScsICdkZXNjcmlwdGlvbiddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50SXRlbTogMCxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgaXRlbXMoKSB7XG4gICAgICBpZiAodGhpcy50aXRsZSA9PT0gJ0RvJykge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5hdHRyYWN0aW9ucztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50aXRsZSA9PT0gJ1N0YXknKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmhvdGVscztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLnJlc3RhdXJhbnRzXG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93UHJldigpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRJdGVtID4gMDtcbiAgICB9LFxuICAgIHNob3dOZXh0KCkge1xuICAgICAgLy8gVE9ETzogRGVmaW5lIHRoZSBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyB0byBzaHdvXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRBdHRyYWN0aW9uKCkge1xuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdnZXRBdHRyYWN0aW9uJyk7XG4gICAgfSxcbiAgICBnZXRSZXN0YXVyYW50KCkge1xuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdnZXRSZXN0YXVyYW50Jyk7XG4gICAgfSxcbiAgICBnZXRIb3RlbCgpIHtcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZ2V0SG90ZWwnKTtcbiAgICB9LFxuICAgIGdldEl0ZW0oKSB7XG4gICAgICBpZiAodGhpcy50aXRsZSA9PT0gJ0RvJykge1xuICAgICAgICB0aGlzLmdldEF0dHJhY3Rpb24oKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50aXRsZSA9PT0gJ0VhdCcpIHtcbiAgICAgICAgdGhpcy5nZXRSZXN0YXVyYW50KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdldEhvdGVsKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBtb3ZlTGVmdCgpIHtcbiAgICAgIHRoaXMuY3VycmVudEl0ZW0gPSBNYXRoLm1pbih0aGlzLmN1cnJlbnRJdGVtIC0gMSwgMCk7XG4gICAgfSxcbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICB0aGlzLmdldEl0ZW0oKVxuICAgICAgKyt0aGlzLmN1cnJlbnRJdGVtO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuJHN0b3JlLnN0YXRlLm1heEhvcml6b250YWxJdGVtczsgKytpKSB7XG4gICAgICB0aGlzLmdldEl0ZW0oKTtcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbW9kdWxlPlxuQGltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5cbi5ncmlkQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG59XG5cbi5yZWNvbW1lbmRlZEl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXgtaGVpZ2h0OiA5NSU7XG59XG5cbi5pdGVtQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBncmlkLWNvbHVtbjogMi81O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ubGVmdEJ1dHRvbixcbi5yaWdodEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBoZWlnaHQ6IDMzcHg7XG4gIHdpZHRoOiAzM3B4O1xuICB0b3A6IDMzJTtcblxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblxuICBmb250LXNpemU6IDIycHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxlZnRCdXR0b24ge1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG59XG5cbi5yaWdodEJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xufVxuXG4ubGVmdEJ1dHRvbjpob3Zlcixcbi5yaWdodEJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yaWdodEJ1dHRvbiB7XG4gIHJpZ2h0OiAwO1xufVxuXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpCQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/RecommendationGroup.vue?vue&type=script&lang=js&\n");

/***/ })

})
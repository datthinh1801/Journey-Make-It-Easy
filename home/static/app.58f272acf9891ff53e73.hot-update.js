webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/RecommendationGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RecommendationGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _VerticalItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VerticalItem */ \"./src/components/VerticalItem.vue\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__[\"library\"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__[\"faChevronLeft\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__[\"faChevronRight\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'RecommendationGroup',\n  components: {\n    VerticalItem: _VerticalItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  props: ['title', 'description'],\n  data: function data() {\n    return {\n      currentItem: 0,\n      itemToShow: 3\n    };\n  },\n  computed: {\n    items: function items() {\n      var itemArr = [];\n\n      if (this.title === 'Do') {\n        itemArr = this.$store.state.attractionArr;\n      } else if (this.title === 'Stay') {\n        itemArr = this.$store.state.hotelArr;\n      } else {\n        itemArr = this.$store.state.restaurantArr;\n      }\n\n      return itemArr.slice(this.currentItem, this.itemToShow);\n    },\n    showPrev: function showPrev() {\n      return this.currentItem > 0;\n    },\n    showNext: function showNext() {\n      // TODO: Define the maximum number of items to shwo\n      return true;\n    }\n  },\n  methods: {\n    getAttraction: function getAttraction() {\n      this.$store.dispatch('getAttraction');\n    },\n    getRestaurant: function getRestaurant() {\n      this.$store.commit('getRestaurant');\n    },\n    getHotel: function getHotel() {\n      this.$store.commit('getHotel');\n    },\n    getItem: function getItem() {\n      if (this.title === 'Do') {\n        this.getAttraction();\n      } else if (this.title === 'Eat') {\n        this.getRestaurant();\n      } else {\n        this.getHotel();\n      }\n    },\n    moveLeft: function moveLeft() {\n      //https://css-tricks.com/css-only-carousel/\n      this.currentItem = Math.min(this.currentItem - 1, 0);\n    },\n    moveRight: function moveRight() {\n      this.getItem();\n      ++this.currentItem;\n    }\n  },\n  mounted: function mounted() {\n    for (var i = 0; i < this.itemToShow; ++i) {\n      this.getItem();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUmVjb21tZW5kYXRpb25Hcm91cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1JlY29tbWVuZGF0aW9uR3JvdXAudnVlPzgxMTMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IDpjbGFzcz1cIiRzdHlsZS5ncmlkQ29udGFpbmVyXCI+XG4gICAgPGRpdiA6Y2xhc3M9XCIkc3R5bGUuaW5mb1wiPlxuICAgICAgPGgzPnt7IHRpdGxlIH19PC9oMz5cbiAgICAgIDxwPnt7IGRlc2NyaXB0aW9uIH19PC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiA6Y2xhc3M9XCIkc3R5bGUuaXRlbUNvbnRhaW5lclwiPlxuICAgICAgPGJ1dHRvbiA6Y2xhc3M9XCIkc3R5bGUubGVmdEJ1dHRvblwiIEBjbGljaz1cIm1vdmVMZWZ0XCIgdi1zaG93PVwic2hvd1ByZXZcIj5cbiAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIGljb249XCJjaGV2cm9uLWxlZnRcIi8+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPFZlcnRpY2FsSXRlbSB2LWZvcj1cIihpdGVtLCBpKSBpbiBpdGVtc1wiIHYtYmluZDprZXk9XCJpdGVtLm5hbWUgKyBpXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiJHN0eWxlLnJlY29tbWVuZGVkSXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIDppbWdTcmM9XCJpdGVtLmltYWdlc1swXVwiXG4gICAgICAgICAgICAgICAgICAgIDppdGVtTmFtZT1cIml0ZW0ubmFtZSArIGlcIi8+XG5cbiAgICAgIDxidXR0b24gOmNsYXNzPVwiJHN0eWxlLnJpZ2h0QnV0dG9uXCIgQGNsaWNrPVwibW92ZVJpZ2h0XCIgdi1zaG93PVwic2hvd05leHRcIj5cbiAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIGljb249XCJjaGV2cm9uLXJpZ2h0XCIvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7bGlicmFyeX0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xuaW1wb3J0IHtmYUNoZXZyb25MZWZ0fSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQge2ZhQ2hldnJvblJpZ2h0fSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmxpYnJhcnkuYWRkKGZhQ2hldnJvbkxlZnQsIGZhQ2hldnJvblJpZ2h0KTtcblxuaW1wb3J0IFZlcnRpY2FsSXRlbSBmcm9tIFwiLi9WZXJ0aWNhbEl0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUmVjb21tZW5kYXRpb25Hcm91cCcsXG4gIGNvbXBvbmVudHM6IHtWZXJ0aWNhbEl0ZW0sfSxcbiAgcHJvcHM6IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudEl0ZW06IDAsXG4gICAgICBpdGVtVG9TaG93OiAzLFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpdGVtcygpIHtcbiAgICAgIGxldCBpdGVtQXJyID0gW107XG4gICAgICBpZiAodGhpcy50aXRsZSA9PT0gJ0RvJykge1xuICAgICAgICBpdGVtQXJyID0gdGhpcy4kc3RvcmUuc3RhdGUuYXR0cmFjdGlvbkFycjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50aXRsZSA9PT0gJ1N0YXknKSB7XG4gICAgICAgIGl0ZW1BcnIgPSB0aGlzLiRzdG9yZS5zdGF0ZS5ob3RlbEFycjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW1BcnIgPSB0aGlzLiRzdG9yZS5zdGF0ZS5yZXN0YXVyYW50QXJyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW1BcnIuc2xpY2UodGhpcy5jdXJyZW50SXRlbSwgdGhpcy5pdGVtVG9TaG93KTtcbiAgICB9LFxuICAgIHNob3dQcmV2KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEl0ZW0gPiAwO1xuICAgIH0sXG4gICAgc2hvd05leHQoKSB7XG4gICAgICAvLyBUT0RPOiBEZWZpbmUgdGhlIG1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHRvIHNod29cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldEF0dHJhY3Rpb24oKSB7XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0QXR0cmFjdGlvbicpO1xuICAgIH0sXG4gICAgZ2V0UmVzdGF1cmFudCgpIHtcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZ2V0UmVzdGF1cmFudCcpO1xuICAgIH0sXG4gICAgZ2V0SG90ZWwoKSB7XG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2dldEhvdGVsJyk7XG4gICAgfSxcbiAgICBnZXRJdGVtKCkge1xuICAgICAgaWYgKHRoaXMudGl0bGUgPT09ICdEbycpIHtcbiAgICAgICAgdGhpcy5nZXRBdHRyYWN0aW9uKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGl0bGUgPT09ICdFYXQnKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVzdGF1cmFudCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRIb3RlbCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAvL2h0dHBzOi8vY3NzLXRyaWNrcy5jb20vY3NzLW9ubHktY2Fyb3VzZWwvXG4gICAgICB0aGlzLmN1cnJlbnRJdGVtID0gTWF0aC5taW4odGhpcy5jdXJyZW50SXRlbSAtIDEsIDApO1xuICAgIH0sXG4gICAgbW92ZVJpZ2h0KCkge1xuICAgICAgdGhpcy5nZXRJdGVtKCk7XG4gICAgICArK3RoaXMuY3VycmVudEl0ZW07XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtVG9TaG93OyArK2kpIHtcbiAgICAgIHRoaXMuZ2V0SXRlbSgpO1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBtb2R1bGU+XG5AaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcblxuLmdyaWRDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbn1cblxuLnJlY29tbWVuZGVkSXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWF4LXdpZHRoOiA5NSU7XG4gIG1heC1oZWlnaHQ6IDk1JTtcbn1cblxuLml0ZW1Db250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGdyaWQtY29sdW1uOiAyLzU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5sZWZ0QnV0dG9uLFxuLnJpZ2h0QnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGhlaWdodDogMzNweDtcbiAgd2lkdGg6IDMzcHg7XG4gIHRvcDogMzMlO1xuXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgei1pbmRleDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGVmdEJ1dHRvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbn1cblxuLnJpZ2h0QnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5cbi5sZWZ0QnV0dG9uOmhvdmVyLFxuLnJpZ2h0QnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJpZ2h0QnV0dG9uIHtcbiAgcmlnaHQ6IDA7XG59XG5cbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5REEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/RecommendationGroup.vue?vue&type=script&lang=js&\n");

/***/ })

})
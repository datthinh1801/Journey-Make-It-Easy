webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/RecommendationGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RecommendationGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _VerticalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalItem */ \"./src/components/VerticalItem.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[\"library\"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__[\"faChevronLeft\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__[\"faChevronRight\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'RecommendationGroup',\n  components: {\n    VerticalItem: _VerticalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  props: ['title', 'description'],\n  data: function data() {\n    return {\n      currentItem: 0,\n      itemToShow: 3\n    };\n  },\n  computed: {\n    items: function items() {\n      var itemArr = [];\n\n      if (this.title === 'Do') {\n        itemArr = this.$store.state.attractionArr;\n      } else if (this.title === 'Stay') {\n        itemArr = this.$store.state.hotelArr;\n      } else {\n        itemArr = this.$store.state.restaurantArr;\n      } // return itemArr.slice(this.currentItem, this.itemToShow);\n\n\n      return itemArr;\n    },\n    showPrev: function showPrev() {\n      return this.currentItem > 0;\n    },\n    showNext: function showNext() {\n      // TODO: Define the maximum number of items to shwo\n      return true;\n    }\n  },\n  methods: {\n    getAttraction: function getAttraction() {\n      this.$store.dispatch('getAttraction');\n    },\n    getRestaurant: function getRestaurant() {\n      this.$store.commit('getRestaurant');\n    },\n    getHotel: function getHotel() {\n      this.$store.commit('getHotel');\n    },\n    getItem: function getItem() {\n      if (this.title === 'Do') {\n        this.getAttraction();\n      } else if (this.title === 'Eat') {\n        this.getRestaurant();\n      } else {\n        this.getHotel();\n      }\n    },\n    moveLeft: function moveLeft() {\n      //https://css-tricks.com/css-only-carousel/\n      this.currentItem = Math.max(this.currentItem - 1, 0);\n    },\n    moveRight: function moveRight() {\n      this.getItem();\n      ++this.currentItem;\n    }\n  },\n  mounted: function mounted() {\n    for (var i = 0; i < this.itemToShow; ++i) {\n      this.getItem();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUmVjb21tZW5kYXRpb25Hcm91cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1JlY29tbWVuZGF0aW9uR3JvdXAudnVlPzgxMTMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IDpjbGFzcz1cIiRzdHlsZS5ncmlkQ29udGFpbmVyXCI+XG4gICAgPGRpdiA6Y2xhc3M9XCIkc3R5bGUuaW5mb1wiPlxuICAgICAgPGgzPnt7IHRpdGxlIH19PC9oMz5cbiAgICAgIDxwPnt7IGRlc2NyaXB0aW9uIH19PC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiA6Y2xhc3M9XCIkc3R5bGUuaXRlbUNvbnRhaW5lclwiPlxuICAgICAgPGJ1dHRvbiA6Y2xhc3M9XCIkc3R5bGUubGVmdEJ1dHRvblwiIEBjbGljaz1cIm1vdmVMZWZ0XCIgdi1zaG93PVwic2hvd1ByZXZcIj5cbiAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIGljb249XCJjaGV2cm9uLWxlZnRcIi8+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPFZlcnRpY2FsSXRlbSB2LWZvcj1cIihpdGVtLCBpKSBpbiBpdGVtc1wiIHYtYmluZDprZXk9XCJpdGVtLm5hbWUgKyBpXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiJHN0eWxlLnJlY29tbWVuZGVkSXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIDppbWdTcmM9XCJpdGVtLmltYWdlc1swXVwiXG4gICAgICAgICAgICAgICAgICAgIDppdGVtTmFtZT1cIml0ZW0ubmFtZSArIGlcIi8+XG5cbiAgICAgIDxidXR0b24gOmNsYXNzPVwiJHN0eWxlLnJpZ2h0QnV0dG9uXCIgQGNsaWNrPVwibW92ZVJpZ2h0XCIgdi1zaG93PVwic2hvd05leHRcIj5cbiAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIGljb249XCJjaGV2cm9uLXJpZ2h0XCIvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7bGlicmFyeX0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xuaW1wb3J0IHtmYUNoZXZyb25MZWZ0fSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQge2ZhQ2hldnJvblJpZ2h0fSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmxpYnJhcnkuYWRkKGZhQ2hldnJvbkxlZnQsIGZhQ2hldnJvblJpZ2h0KTtcblxuaW1wb3J0IFZlcnRpY2FsSXRlbSBmcm9tIFwiLi9WZXJ0aWNhbEl0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUmVjb21tZW5kYXRpb25Hcm91cCcsXG4gIGNvbXBvbmVudHM6IHtWZXJ0aWNhbEl0ZW0sfSxcbiAgcHJvcHM6IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudEl0ZW06IDAsXG4gICAgICBpdGVtVG9TaG93OiAzLFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpdGVtcygpIHtcbiAgICAgIGxldCBpdGVtQXJyID0gW107XG4gICAgICBpZiAodGhpcy50aXRsZSA9PT0gJ0RvJykge1xuICAgICAgICBpdGVtQXJyID0gdGhpcy4kc3RvcmUuc3RhdGUuYXR0cmFjdGlvbkFycjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50aXRsZSA9PT0gJ1N0YXknKSB7XG4gICAgICAgIGl0ZW1BcnIgPSB0aGlzLiRzdG9yZS5zdGF0ZS5ob3RlbEFycjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW1BcnIgPSB0aGlzLiRzdG9yZS5zdGF0ZS5yZXN0YXVyYW50QXJyO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIGl0ZW1BcnIuc2xpY2UodGhpcy5jdXJyZW50SXRlbSwgdGhpcy5pdGVtVG9TaG93KTtcbiAgICAgIHJldHVybiBpdGVtQXJyO1xuICAgIH0sXG4gICAgc2hvd1ByZXYoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50SXRlbSA+IDA7XG4gICAgfSxcbiAgICBzaG93TmV4dCgpIHtcbiAgICAgIC8vIFRPRE86IERlZmluZSB0aGUgbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgdG8gc2h3b1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZ2V0QXR0cmFjdGlvbigpIHtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRBdHRyYWN0aW9uJyk7XG4gICAgfSxcbiAgICBnZXRSZXN0YXVyYW50KCkge1xuICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdnZXRSZXN0YXVyYW50Jyk7XG4gICAgfSxcbiAgICBnZXRIb3RlbCgpIHtcbiAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnZ2V0SG90ZWwnKTtcbiAgICB9LFxuICAgIGdldEl0ZW0oKSB7XG4gICAgICBpZiAodGhpcy50aXRsZSA9PT0gJ0RvJykge1xuICAgICAgICB0aGlzLmdldEF0dHJhY3Rpb24oKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50aXRsZSA9PT0gJ0VhdCcpIHtcbiAgICAgICAgdGhpcy5nZXRSZXN0YXVyYW50KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdldEhvdGVsKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBtb3ZlTGVmdCgpIHtcbiAgICAgIC8vaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9jc3Mtb25seS1jYXJvdXNlbC9cbiAgICAgIHRoaXMuY3VycmVudEl0ZW0gPSBNYXRoLm1heCh0aGlzLmN1cnJlbnRJdGVtIC0gMSwgMCk7XG4gICAgfSxcbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICB0aGlzLmdldEl0ZW0oKTtcbiAgICAgICsrdGhpcy5jdXJyZW50SXRlbTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1Ub1Nob3c7ICsraSkge1xuICAgICAgdGhpcy5nZXRJdGVtKCk7XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIG1vZHVsZT5cbkBpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuXG4uZ3JpZENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xufVxuXG4ucmVjb21tZW5kZWRJdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgbWF4LWhlaWdodDogOTUlO1xufVxuXG4uaXRlbUNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZ3JpZC1jb2x1bW46IDIvNTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmxlZnRCdXR0b24sXG4ucmlnaHRCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgaGVpZ2h0OiAzM3B4O1xuICB3aWR0aDogMzNweDtcbiAgdG9wOiAzMyU7XG5cbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG5cbiAgZm9udC1zaXplOiAyMnB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICB6LWluZGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sZWZ0QnV0dG9uIHtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xufVxuXG4ucmlnaHRCdXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cblxuLmxlZnRCdXR0b246aG92ZXIsXG4ucmlnaHRCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmlnaHRCdXR0b24ge1xuICByaWdodDogMDtcbn1cblxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0RBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/RecommendationGroup.vue?vue&type=script&lang=js&\n");

/***/ })

})
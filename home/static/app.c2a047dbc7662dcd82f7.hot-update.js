webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/RecommendationGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RecommendationGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _VerticalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalItem */ \"./src/components/VerticalItem.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__[\"library\"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__[\"faChevronLeft\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__[\"faChevronRight\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'RecommendationGroup',\n  components: {\n    VerticalItem: _VerticalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  props: ['title', 'description'],\n  data: function data() {\n    return {\n      currentIndex: 0,\n      itemsToShow: 3,\n      maxItems: 5\n    };\n  },\n  computed: {\n    items: function items() {\n      if (this.title === 'Do') {\n        return store.attractions;\n      } else if (this.title === 'Eat') {\n        return store.restaurants;\n      } else {\n        return store.hotels;\n      }\n    },\n    showNext: function showNext() {\n      return this.currentIndex + this.itemsToShow !== this.maxItems;\n    },\n    showPrev: function showPrev() {\n      return this.currentIndex !== 0;\n    }\n  },\n  methods: {\n    getAttraction: function getAttraction(num) {\n      for (var i = 0; i < num; ++i) {\n        store.getAttraction();\n      }\n    },\n    getRestaurant: function getRestaurant(num) {\n      for (var i = 0; i < num; ++i) {\n        store.getRestaurant();\n      }\n    },\n    getHotels: function getHotels(num) {\n      for (var i = 0; i < num; ++i) {\n        store.getHotels();\n      }\n    },\n    moveLeft: function moveLeft() {},\n    moveRight: function moveRight() {}\n  },\n  mounted: function mounted() {\n    this.getAttraction(3);\n    this.getRestaurant(3);\n    this.getHotels(3);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUmVjb21tZW5kYXRpb25Hcm91cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1JlY29tbWVuZGF0aW9uR3JvdXAudnVlPzgxMTMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IDpjbGFzcz1cIiRzdHlsZS5ncmlkQ29udGFpbmVyXCI+XG4gICAgPGRpdiA6Y2xhc3M9XCIkc3R5bGUuaW5mb1wiPlxuICAgICAgPGgzPnt7IHRpdGxlIH19PC9oMz5cbiAgICAgIDxwPnt7IGRlc2NyaXB0aW9uIH19PC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiA6Y2xhc3M9XCIkc3R5bGUuaXRlbUNvbnRhaW5lclwiPlxuICAgICAgPGJ1dHRvbiA6Y2xhc3M9XCIkc3R5bGUubGVmdEJ1dHRvblwiIEBjbGljaz1cIm1vdmVMZWZ0XCIgdi1zaG93PVwic2hvd1ByZXZcIj5cbiAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIGljb249XCJjaGV2cm9uLWxlZnRcIi8+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPFZlcnRpY2FsSXRlbSB2LWZvcj1cIihpdGVtLCBpKSBpbiBpdGVtc1wiIDprZXk9XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiJHN0eWxlLnJlY29tbWVuZGVkSXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIDppbWdTcmM9XCJpdGVtLmltYWdlc1swXVwiXG4gICAgICAgICAgICAgICAgICAgIDppdGVtTmFtZT1cIml0ZW0ubmFtZVwiLz5cblxuICAgICAgPGJ1dHRvbiA6Y2xhc3M9XCIkc3R5bGUucmlnaHRCdXR0b25cIiBAY2xpY2s9XCJtb3ZlUmlnaHRcIiB2LXNob3c9XCJzaG93TmV4dFwiPlxuICAgICAgICA8Zm9udC1hd2Vzb21lLWljb24gaWNvbj1cImNoZXZyb24tcmlnaHRcIi8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCI7XG5pbXBvcnQge2ZhQ2hldnJvbkxlZnR9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7ZmFDaGV2cm9uUmlnaHR9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxubGlicmFyeS5hZGQoZmFDaGV2cm9uTGVmdCwgZmFDaGV2cm9uUmlnaHQpO1xuXG5pbXBvcnQgVmVydGljYWxJdGVtIGZyb20gXCIuL1ZlcnRpY2FsSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdSZWNvbW1lbmRhdGlvbkdyb3VwJyxcbiAgY29tcG9uZW50czoge1ZlcnRpY2FsSXRlbSx9LFxuICBwcm9wczogWyd0aXRsZScsICdkZXNjcmlwdGlvbiddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgICBpdGVtc1RvU2hvdzogMyxcbiAgICAgIG1heEl0ZW1zOiA1LFxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBpdGVtcygpIHtcbiAgICAgIGlmICh0aGlzLnRpdGxlID09PSAnRG8nKSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5hdHRyYWN0aW9ucztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50aXRsZSA9PT0gJ0VhdCcpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLnJlc3RhdXJhbnRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmhvdGVscztcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dOZXh0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEluZGV4ICsgdGhpcy5pdGVtc1RvU2hvdyAhPT0gdGhpcy5tYXhJdGVtcztcbiAgICB9LFxuICAgIHNob3dQcmV2KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEluZGV4ICE9PSAwO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldEF0dHJhY3Rpb24obnVtKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgKytpKSB7XG4gICAgICAgIHN0b3JlLmdldEF0dHJhY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldFJlc3RhdXJhbnQobnVtKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgKytpKSB7XG4gICAgICAgIHN0b3JlLmdldFJlc3RhdXJhbnQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldEhvdGVscyhudW0pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyArK2kpIHtcbiAgICAgICAgc3RvcmUuZ2V0SG90ZWxzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBtb3ZlTGVmdCgpIHtcblxuICAgIH0sXG4gICAgbW92ZVJpZ2h0KCkge1xuXG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZ2V0QXR0cmFjdGlvbigzKTtcbiAgICB0aGlzLmdldFJlc3RhdXJhbnQoMyk7XG4gICAgdGhpcy5nZXRIb3RlbHMoMyk7XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbW9kdWxlPlxuQGltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5cbi5ncmlkQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG59XG5cbi5yZWNvbW1lbmRlZEl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXgtaGVpZ2h0OiA5NSU7XG59XG5cbi5pdGVtQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBncmlkLWNvbHVtbjogMi81O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5sZWZ0QnV0dG9uLFxuLnJpZ2h0QnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGhlaWdodDogMzNweDtcbiAgd2lkdGg6IDMzcHg7XG4gIHRvcDogMzMlO1xuXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgei1pbmRleDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGVmdEJ1dHRvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbn1cblxuLnJpZ2h0QnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5cbi5sZWZ0QnV0dG9uOmhvdmVyLFxuLnJpZ2h0QnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJpZ2h0QnV0dG9uIHtcbiAgcmlnaHQ6IDA7XG59XG5cbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBbkJBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2REEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/RecommendationGroup.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./src/store/store.js":
false

})
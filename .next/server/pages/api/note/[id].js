module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/note/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/note/[id].js":
/*!********************************!*\
  !*** ./pages/api/note/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/data */ \"./src/data/data.js\");\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_data_data__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// pages/api/note/[id].js\n\n\n\nconst getNote = id => _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.find(n => n.id === parseInt(id));\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()().get((req, res) => {\n  const note = getNote(req.query.id);\n\n  if (!note) {\n    res.status(404);\n    res.end();\n    return;\n  }\n\n  res.json({\n    data: note\n  });\n}).patch((req, res) => {\n  const note = getNote(req.query.id);\n\n  if (!note) {\n    res.status(404);\n    res.end();\n    return;\n  }\n\n  const i = _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(n => n.id === parseInt(req.query.id));\n\n  const updated = _objectSpread(_objectSpread({}, note), req.body);\n\n  _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a[i] = updated;\n  res.json({\n    data: updated\n  });\n}).delete((req, res) => {\n  const note = getNote(req.query.id);\n\n  if (!note) {\n    res.status(404);\n    res.end();\n    return;\n  }\n\n  const i = _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(n => n.id === parseInt(req.query.id));\n  _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.splice(i, 1);\n  res.json({\n    data: req.query.id\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbm90ZS8uanM/OGExYiJdLCJuYW1lcyI6WyJnZXROb3RlIiwiaWQiLCJub3RlcyIsImZpbmQiLCJuIiwicGFyc2VJbnQiLCJoYW5kbGVyIiwibmMiLCJnZXQiLCJyZXEiLCJyZXMiLCJub3RlIiwicXVlcnkiLCJzdGF0dXMiLCJlbmQiLCJqc29uIiwiZGF0YSIsInBhdGNoIiwiaSIsImZpbmRJbmRleCIsInVwZGF0ZWQiLCJib2R5IiwiZGVsZXRlIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLEVBQUUsSUFBSUMscURBQUssQ0FBQ0MsSUFBTixDQUFXQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0gsRUFBRixLQUFTSSxRQUFRLENBQUNKLEVBQUQsQ0FBakMsQ0FBdEI7O0FBRUEsTUFBTUssT0FBTyxHQUFHQyxtREFBRSxHQUNmQyxHQURhLENBQ1QsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7RUFFakIsTUFBTUMsSUFBSSxHQUFHWCxPQUFPLENBQUNTLEdBQUcsQ0FBQ0csS0FBSixDQUFVWCxFQUFYLENBQXBCOztFQUVBLElBQUksQ0FBQ1UsSUFBTCxFQUFXO0lBQ1RELEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVg7SUFDQUgsR0FBRyxDQUFDSSxHQUFKO0lBQ0E7RUFDRDs7RUFFREosR0FBRyxDQUFDSyxJQUFKLENBQVM7SUFBQ0MsSUFBSSxFQUFFTDtFQUFQLENBQVQ7QUFDRCxDQVphLEVBYWJNLEtBYmEsQ0FhUCxDQUFDUixHQUFELEVBQU1DLEdBQU4sS0FBYztFQUNuQixNQUFNQyxJQUFJLEdBQUdYLE9BQU8sQ0FBQ1MsR0FBRyxDQUFDRyxLQUFKLENBQVVYLEVBQVgsQ0FBcEI7O0VBRUEsSUFBSSxDQUFDVSxJQUFMLEVBQVc7SUFDVEQsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWDtJQUNBSCxHQUFHLENBQUNJLEdBQUo7SUFDQTtFQUNEOztFQUVELE1BQU1JLENBQUMsR0FBR2hCLHFEQUFLLENBQUNpQixTQUFOLENBQWdCZixDQUFDLElBQUlBLENBQUMsQ0FBQ0gsRUFBRixLQUFTSSxRQUFRLENBQUNJLEdBQUcsQ0FBQ0csS0FBSixDQUFVWCxFQUFYLENBQXRDLENBQVY7O0VBQ0EsTUFBTW1CLE9BQU8sbUNBQU9ULElBQVAsR0FBZ0JGLEdBQUcsQ0FBQ1ksSUFBcEIsQ0FBYjs7RUFFQW5CLHFEQUFLLENBQUNnQixDQUFELENBQUwsR0FBV0UsT0FBWDtFQUNBVixHQUFHLENBQUNLLElBQUosQ0FBUztJQUFDQyxJQUFJLEVBQUVJO0VBQVAsQ0FBVDtBQUNELENBM0JhLEVBNEJiRSxNQTVCYSxDQTRCTixDQUFDYixHQUFELEVBQU1DLEdBQU4sS0FBYztFQUNwQixNQUFNQyxJQUFJLEdBQUdYLE9BQU8sQ0FBQ1MsR0FBRyxDQUFDRyxLQUFKLENBQVVYLEVBQVgsQ0FBcEI7O0VBRUEsSUFBSSxDQUFDVSxJQUFMLEVBQVc7SUFDVEQsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWDtJQUNBSCxHQUFHLENBQUNJLEdBQUo7SUFDQTtFQUNEOztFQUNELE1BQU1JLENBQUMsR0FBR2hCLHFEQUFLLENBQUNpQixTQUFOLENBQWdCZixDQUFDLElBQUlBLENBQUMsQ0FBQ0gsRUFBRixLQUFTSSxRQUFRLENBQUNJLEdBQUcsQ0FBQ0csS0FBSixDQUFVWCxFQUFYLENBQXRDLENBQVY7RUFFQUMscURBQUssQ0FBQ3FCLE1BQU4sQ0FBYUwsQ0FBYixFQUFnQixDQUFoQjtFQUVBUixHQUFHLENBQUNLLElBQUosQ0FBUztJQUFDQyxJQUFJLEVBQUVQLEdBQUcsQ0FBQ0csS0FBSixDQUFVWDtFQUFqQixDQUFUO0FBQ0QsQ0F6Q2EsQ0FBaEI7QUE0Q2VLLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL25vdGUvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9ub3RlL1tpZF0uanNcbmltcG9ydCBuYyBmcm9tICduZXh0LWNvbm5lY3QnXG5pbXBvcnQgbm90ZXMgZnJvbSAnLi4vLi4vLi4vc3JjL2RhdGEvZGF0YSdcblxuY29uc3QgZ2V0Tm90ZSA9IGlkID0+IG5vdGVzLmZpbmQobiA9PiBuLmlkID09PSBwYXJzZUludChpZCkpXG5cbmNvbnN0IGhhbmRsZXIgPSBuYygpXG4gIC5nZXQoKHJlcSwgcmVzKSA9PiB7XG4gICAgXG4gICAgY29uc3Qgbm90ZSA9IGdldE5vdGUocmVxLnF1ZXJ5LmlkKVxuXG4gICAgaWYgKCFub3RlKSB7XG4gICAgICByZXMuc3RhdHVzKDQwNClcbiAgICAgIHJlcy5lbmQoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmVzLmpzb24oe2RhdGE6IG5vdGV9KVxuICB9KVxuICAucGF0Y2goKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3Qgbm90ZSA9IGdldE5vdGUocmVxLnF1ZXJ5LmlkKVxuXG4gICAgaWYgKCFub3RlKSB7XG4gICAgICByZXMuc3RhdHVzKDQwNClcbiAgICAgIHJlcy5lbmQoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGkgPSBub3Rlcy5maW5kSW5kZXgobiA9PiBuLmlkID09PSBwYXJzZUludChyZXEucXVlcnkuaWQpKVxuICAgIGNvbnN0IHVwZGF0ZWQgPSB7Li4ubm90ZSwgLi4ucmVxLmJvZHl9XG5cbiAgICBub3Rlc1tpXSA9IHVwZGF0ZWRcbiAgICByZXMuanNvbih7ZGF0YTogdXBkYXRlZH0pXG4gIH0pXG4gIC5kZWxldGUoKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3Qgbm90ZSA9IGdldE5vdGUocmVxLnF1ZXJ5LmlkKVxuXG4gICAgaWYgKCFub3RlKSB7XG4gICAgICByZXMuc3RhdHVzKDQwNClcbiAgICAgIHJlcy5lbmQoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGkgPSBub3Rlcy5maW5kSW5kZXgobiA9PiBuLmlkID09PSBwYXJzZUludChyZXEucXVlcnkuaWQpKVxuICAgIFxuICAgIG5vdGVzLnNwbGljZShpLCAxKVxuXG4gICAgcmVzLmpzb24oe2RhdGE6IHJlcS5xdWVyeS5pZH0pXG4gIH0pXG4gIFxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/note/[id].js\n");

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// src/data/data.js\nconst notes = new Array(15).fill(1).map((_, i) => ({\n  id: i,\n  title: `Note: ${i}`\n}));\nmodule.exports = notes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9kYXRhLmpzP2Q1YzciXSwibmFtZXMiOlsibm90ZXMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidGl0bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE1BQU1BLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsRUFBVixFQUNXQyxJQURYLENBQ2dCLENBRGhCLEVBRVdDLEdBRlgsQ0FFZSxDQUFDQyxDQUFELEVBQUlDLENBQUosTUFBVztFQUNkQyxFQUFFLEVBQUVELENBRFU7RUFFZEUsS0FBSyxFQUFHLFNBQVFGLENBQUU7QUFGSixDQUFYLENBRmYsQ0FBZDtBQU9BRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJULEtBQWpCIiwiZmlsZSI6Ii4vc3JjL2RhdGEvZGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9kYXRhL2RhdGEuanNcblxuY29uc3Qgbm90ZXMgPSBuZXcgQXJyYXkoMTUpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsbCgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogYE5vdGU6ICR7aX1gXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSlcblxubW9kdWxlLmV4cG9ydHMgPSBub3RlczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data/data.js\n");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-connect\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIj9lYTQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtY29ubmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-connect\n");

/***/ })

/******/ });
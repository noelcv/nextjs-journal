module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/note/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/note/index.js":
/*!*********************************!*\
  !*** ./pages/api/note/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/data */ \"./src/data/data.js\");\n/* harmony import */ var _src_data_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_data_data__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n //replace with db\n\n //middleware example to protect api\n// const checkAuth = (req, res, next) => {\n//   if(req.headers.auth) {\n//     return next()\n//   }\n//   res.status(401);\n// }\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()() // .use(checkAuth()) //we can also pass middleware\n.post((req, res) => {\n  const note = _objectSpread(_objectSpread({}, req.body), {}, {\n    id: Date.now()\n  });\n\n  _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a.push(note);\n  res.json({\n    data: note\n  });\n}).get((req, res) => {\n  res.json({\n    data: _src_data_data__WEBPACK_IMPORTED_MODULE_1___default.a\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbm90ZS9pbmRleC5qcz9mOTBiIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJuYyIsInBvc3QiLCJyZXEiLCJyZXMiLCJub3RlIiwiYm9keSIsImlkIiwiRGF0ZSIsIm5vdyIsIm5vdGVzIiwicHVzaCIsImpzb24iLCJkYXRhIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztDQUNBOztDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBR0MsbURBQUUsR0FDZDtBQURjLENBRWJDLElBRlcsQ0FFTixDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztFQUNsQixNQUFNQyxJQUFJLG1DQUFPRixHQUFHLENBQUNHLElBQVg7SUFDVkMsRUFBRSxFQUFFQyxJQUFJLENBQUNDLEdBQUw7RUFETSxFQUFWOztFQUdBQyxxREFBSyxDQUFDQyxJQUFOLENBQVdOLElBQVg7RUFDQUQsR0FBRyxDQUFDUSxJQUFKLENBQVM7SUFBQ0MsSUFBSSxFQUFFUjtFQUFQLENBQVQ7QUFDRCxDQVJXLEVBU1hTLEdBVFcsQ0FTUCxDQUFDWCxHQUFELEVBQU1DLEdBQU4sS0FBYztFQUNqQkEsR0FBRyxDQUFDUSxJQUFKLENBQVM7SUFBQ0MsSUFBSSxFQUFFSCxxREFBS0E7RUFBWixDQUFUO0FBQ0QsQ0FYVyxDQUFoQjtBQWNlVixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9ub3RlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5jIGZyb20gJ25leHQtY29ubmVjdCdcbi8vcmVwbGFjZSB3aXRoIGRiXG5pbXBvcnQgbm90ZXMgZnJvbSAnLi4vLi4vLi4vc3JjL2RhdGEvZGF0YSdcblxuLy9taWRkbGV3YXJlIGV4YW1wbGUgdG8gcHJvdGVjdCBhcGlcbi8vIGNvbnN0IGNoZWNrQXV0aCA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuLy8gICBpZihyZXEuaGVhZGVycy5hdXRoKSB7XG4vLyAgICAgcmV0dXJuIG5leHQoKVxuLy8gICB9XG4vLyAgIHJlcy5zdGF0dXMoNDAxKTtcbi8vIH1cblxuY29uc3QgaGFuZGxlciA9IG5jKClcbiAgICAvLyAudXNlKGNoZWNrQXV0aCgpKSAvL3dlIGNhbiBhbHNvIHBhc3MgbWlkZGxld2FyZVxuICAgIC5wb3N0KChyZXEsIHJlcykgPT4ge1xuICAgICAgY29uc3Qgbm90ZSA9IHsuLi5yZXEuYm9keSwgXG4gICAgICBpZDogRGF0ZS5ub3coKVxuICAgICAgfVxuICAgICAgbm90ZXMucHVzaChub3RlKVxuICAgICAgcmVzLmpzb24oe2RhdGE6IG5vdGV9KVxuICAgIH0pXG4gICAgLmdldCgocmVxLCByZXMpID0+IHtcbiAgICAgIHJlcy5qc29uKHtkYXRhOiBub3Rlc30pXG4gICAgfSlcbiAgICBcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/note/index.js\n");

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
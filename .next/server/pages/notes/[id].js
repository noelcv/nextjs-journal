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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/notes/[id].jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/notes/[id].jsx":
/*!******************************!*\
  !*** ./pages/notes/[id].jsx ***!
  \******************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/noel/Desktop/cw_post/nextjs-journal/pages/notes/[id].jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\nconst Note = ({\n  note\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])(); //this id will be matching the [id] from the file name\n  //params will be an array /notes/1/2/3\n  // const { id } = router.query;\n  //for programmatic routing use the router.push method\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", {\n    sx: {\n      variant: 'containers.page'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"button\", {\n    onClick: () => router.push('/'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, \"Go Home\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"button\", {\n    onClick: () => router.push('/notes'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, \"Go to Notes Index\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, \"Note: \", note.title, \" \"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Note);\nasync function getServerSideProps({\n  params,\n  req,\n  res\n}) {\n  const response = await fetch(`http://localhost:3000/api/note/${params.id}`);\n\n  if (!response.ok) {\n    res.writeHead(302, {\n      Location: '/notes'\n    });\n    res.end();\n    return {\n      props: {}\n    };\n  }\n\n  const {\n    data\n  } = await response.json();\n  return {\n    props: {\n      note: data\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ub3Rlcy8uanN4P2Y1M2IiXSwibmFtZXMiOlsiTm90ZSIsIm5vdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ2YXJpYW50IiwicHVzaCIsInRpdGxlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicGFyYW1zIiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImlkIiwib2siLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsInByb3BzIiwiZGF0YSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztFQUFDQztBQUFELENBQUQsS0FBWTtFQUN2QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRHVCLENBRXZCO0VBQ0E7RUFDQTtFQUVBOztFQUVBLE9BQ0U7SUFBSyxFQUFFLEVBQUU7TUFBQ0MsT0FBTyxFQUFFO0lBQVYsQ0FBVDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBUSxPQUFPLEVBQUUsTUFBTUYsTUFBTSxDQUFDRyxJQUFQLENBQVksR0FBWixDQUF2QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGFBREYsRUFFRTtJQUFRLE9BQU8sRUFBRSxNQUFNSCxNQUFNLENBQUNHLElBQVAsQ0FBWSxRQUFaLENBQXZCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsdUJBRkYsRUFHRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGFBQVdKLElBQUksQ0FBQ0ssS0FBaEIsTUFIRixDQURGO0FBT0QsQ0FmRDs7QUFpQmVOLG1FQUFmO0FBR08sZUFBZU8sa0JBQWYsQ0FBa0M7RUFBQ0MsTUFBRDtFQUFTQyxHQUFUO0VBQWNDO0FBQWQsQ0FBbEMsRUFBc0Q7RUFDM0QsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxrQ0FBaUNKLE1BQU0sQ0FBQ0ssRUFBRyxFQUE3QyxDQUE1Qjs7RUFFQSxJQUFHLENBQUNGLFFBQVEsQ0FBQ0csRUFBYixFQUFpQjtJQUNmSixHQUFHLENBQUNLLFNBQUosQ0FBYyxHQUFkLEVBQW1CO01BQ2pCQyxRQUFRLEVBQUU7SUFETyxDQUFuQjtJQUdBTixHQUFHLENBQUNPLEdBQUo7SUFFQSxPQUFPO01BQ0xDLEtBQUssRUFBRTtJQURGLENBQVA7RUFHRDs7RUFFRCxNQUFNO0lBQUVDO0VBQUYsSUFBVyxNQUFNUixRQUFRLENBQUNTLElBQVQsRUFBdkI7RUFFQSxPQUFPO0lBQ0xGLEtBQUssRUFBRTtNQUNMakIsSUFBSSxFQUFFa0I7SUFERDtFQURGLENBQVA7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL25vdGVzL1tpZF0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBOb3RlID0gKHtub3RlfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgLy90aGlzIGlkIHdpbGwgYmUgbWF0Y2hpbmcgdGhlIFtpZF0gZnJvbSB0aGUgZmlsZSBuYW1lXG4gIC8vcGFyYW1zIHdpbGwgYmUgYW4gYXJyYXkgL25vdGVzLzEvMi8zXG4gIC8vIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgXG4gIC8vZm9yIHByb2dyYW1tYXRpYyByb3V0aW5nIHVzZSB0aGUgcm91dGVyLnB1c2ggbWV0aG9kXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgc3g9e3t2YXJpYW50OiAnY29udGFpbmVycy5wYWdlJ319PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfT5HbyBIb21lPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvbm90ZXMnKX0+R28gdG8gTm90ZXMgSW5kZXg8L2J1dHRvbj4gIFxuICAgICAgPGgxPk5vdGU6IHtub3RlLnRpdGxlfSA8L2gxPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGU7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cGFyYW1zLCByZXEsIHJlc30pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ub3RlLyR7cGFyYW1zLmlkfWApXG4gIFxuICBpZighcmVzcG9uc2Uub2spIHtcbiAgICByZXMud3JpdGVIZWFkKDMwMiwge1xuICAgICAgTG9jYXRpb246ICcvbm90ZXMnXG4gICAgfSlcbiAgICByZXMuZW5kKClcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHt9XG4gICAgfVxuICB9XG4gIFxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG5vdGU6IGRhdGEsXG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/notes/[id].jsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"theme-ui\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aGVtZS11aVwiP2I0NGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoidGhlbWUtdWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///theme-ui\n");

/***/ })

/******/ });
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/skuilder/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "02d5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_style_index_0_id_33410ea9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4a8a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_style_index_0_id_33410ea9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_style_index_0_id_33410ea9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageInput_vue_vue_type_style_index_0_id_33410ea9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "06c0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "08e0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentRegistration_vue_vue_type_style_index_0_id_75fd832c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("06c0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentRegistration_vue_vue_type_style_index_0_id_75fd832c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentRegistration_vue_vue_type_style_index_0_id_75fd832c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentRegistration_vue_vue_type_style_index_0_id_75fd832c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0d64":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cd49");


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1d3b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1e10":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataShapeTableHeader_vue_vue_type_style_index_0_id_4a6b5af4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f82c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataShapeTableHeader_vue_vue_type_style_index_0_id_4a6b5af4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataShapeTableHeader_vue_vue_type_style_index_0_id_4a6b5af4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataShapeTableHeader_vue_vue_type_style_index_0_id_4a6b5af4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "29f1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2a4c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2c95":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInputString_vue_vue_type_style_index_0_id_4c0a43fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d2ea");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInputString_vue_vue_type_style_index_0_id_4c0a43fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInputString_vue_vue_type_style_index_0_id_4c0a43fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInputString_vue_vue_type_style_index_0_id_4c0a43fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2d2e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardViewer_vue_vue_type_style_index_0_id_10713b4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("647e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardViewer_vue_vue_type_style_index_0_id_10713b4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardViewer_vue_vue_type_style_index_0_id_10713b4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardViewer_vue_vue_type_style_index_0_id_10713b4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "36cb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3e8b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataShapeTable_vue_vue_type_style_index_0_id_230a3638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("29f1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataShapeTable_vue_vue_type_style_index_0_id_230a3638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataShapeTable_vue_vue_type_style_index_0_id_230a3638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataShapeTable_vue_vue_type_style_index_0_id_230a3638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4678":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "2bfb",
	"./af.js": "2bfb",
	"./ar": "8e73",
	"./ar-dz": "a356",
	"./ar-dz.js": "a356",
	"./ar-kw": "423e",
	"./ar-kw.js": "423e",
	"./ar-ly": "1cfd",
	"./ar-ly.js": "1cfd",
	"./ar-ma": "0a84",
	"./ar-ma.js": "0a84",
	"./ar-sa": "8230",
	"./ar-sa.js": "8230",
	"./ar-tn": "6d83",
	"./ar-tn.js": "6d83",
	"./ar.js": "8e73",
	"./az": "485c",
	"./az.js": "485c",
	"./be": "1fc1",
	"./be.js": "1fc1",
	"./bg": "84aa",
	"./bg.js": "84aa",
	"./bm": "a7fa",
	"./bm.js": "a7fa",
	"./bn": "9043",
	"./bn.js": "9043",
	"./bo": "d26a",
	"./bo.js": "d26a",
	"./br": "6887",
	"./br.js": "6887",
	"./bs": "2554",
	"./bs.js": "2554",
	"./ca": "d716",
	"./ca.js": "d716",
	"./cs": "3c0d",
	"./cs.js": "3c0d",
	"./cv": "03ec",
	"./cv.js": "03ec",
	"./cy": "9797",
	"./cy.js": "9797",
	"./da": "0f14",
	"./da.js": "0f14",
	"./de": "b469",
	"./de-at": "b3eb",
	"./de-at.js": "b3eb",
	"./de-ch": "bb71",
	"./de-ch.js": "bb71",
	"./de.js": "b469",
	"./dv": "598a",
	"./dv.js": "598a",
	"./el": "8d47",
	"./el.js": "8d47",
	"./en-au": "0e6b",
	"./en-au.js": "0e6b",
	"./en-ca": "3886",
	"./en-ca.js": "3886",
	"./en-gb": "39a6",
	"./en-gb.js": "39a6",
	"./en-ie": "e1d3",
	"./en-ie.js": "e1d3",
	"./en-il": "73332",
	"./en-il.js": "73332",
	"./en-nz": "6f50",
	"./en-nz.js": "6f50",
	"./eo": "65db",
	"./eo.js": "65db",
	"./es": "898b",
	"./es-do": "0a3c",
	"./es-do.js": "0a3c",
	"./es-us": "55c9",
	"./es-us.js": "55c9",
	"./es.js": "898b",
	"./et": "ec18",
	"./et.js": "ec18",
	"./eu": "0ff2",
	"./eu.js": "0ff2",
	"./fa": "8df4",
	"./fa.js": "8df4",
	"./fi": "81e9",
	"./fi.js": "81e9",
	"./fo": "0721",
	"./fo.js": "0721",
	"./fr": "9f26",
	"./fr-ca": "d9f8",
	"./fr-ca.js": "d9f8",
	"./fr-ch": "0e49",
	"./fr-ch.js": "0e49",
	"./fr.js": "9f26",
	"./fy": "7118",
	"./fy.js": "7118",
	"./gd": "f6b4",
	"./gd.js": "f6b4",
	"./gl": "8840",
	"./gl.js": "8840",
	"./gom-latn": "0caa",
	"./gom-latn.js": "0caa",
	"./gu": "e0c5",
	"./gu.js": "e0c5",
	"./he": "c7aa",
	"./he.js": "c7aa",
	"./hi": "dc4d",
	"./hi.js": "dc4d",
	"./hr": "4ba9",
	"./hr.js": "4ba9",
	"./hu": "5b14",
	"./hu.js": "5b14",
	"./hy-am": "d6b6",
	"./hy-am.js": "d6b6",
	"./id": "5038",
	"./id.js": "5038",
	"./is": "0558",
	"./is.js": "0558",
	"./it": "6e98",
	"./it.js": "6e98",
	"./ja": "079e",
	"./ja.js": "079e",
	"./jv": "b540",
	"./jv.js": "b540",
	"./ka": "201b",
	"./ka.js": "201b",
	"./kk": "6d79",
	"./kk.js": "6d79",
	"./km": "e81d",
	"./km.js": "e81d",
	"./kn": "3e92",
	"./kn.js": "3e92",
	"./ko": "22f8",
	"./ko.js": "22f8",
	"./ky": "9609",
	"./ky.js": "9609",
	"./lb": "440c",
	"./lb.js": "440c",
	"./lo": "b29d",
	"./lo.js": "b29d",
	"./lt": "26f9",
	"./lt.js": "26f9",
	"./lv": "b97c",
	"./lv.js": "b97c",
	"./me": "293c",
	"./me.js": "293c",
	"./mi": "688b",
	"./mi.js": "688b",
	"./mk": "6909",
	"./mk.js": "6909",
	"./ml": "02fb",
	"./ml.js": "02fb",
	"./mn": "958b",
	"./mn.js": "958b",
	"./mr": "39bd",
	"./mr.js": "39bd",
	"./ms": "ebe4",
	"./ms-my": "6403",
	"./ms-my.js": "6403",
	"./ms.js": "ebe4",
	"./mt": "1b45",
	"./mt.js": "1b45",
	"./my": "8689",
	"./my.js": "8689",
	"./nb": "6ce3",
	"./nb.js": "6ce3",
	"./ne": "3a39",
	"./ne.js": "3a39",
	"./nl": "facd",
	"./nl-be": "db29",
	"./nl-be.js": "db29",
	"./nl.js": "facd",
	"./nn": "b84c",
	"./nn.js": "b84c",
	"./pa-in": "f3ff",
	"./pa-in.js": "f3ff",
	"./pl": "8d57",
	"./pl.js": "8d57",
	"./pt": "f260",
	"./pt-br": "d2d4",
	"./pt-br.js": "d2d4",
	"./pt.js": "f260",
	"./ro": "972c",
	"./ro.js": "972c",
	"./ru": "957c",
	"./ru.js": "957c",
	"./sd": "6784",
	"./sd.js": "6784",
	"./se": "ffff",
	"./se.js": "ffff",
	"./si": "eda5",
	"./si.js": "eda5",
	"./sk": "7be6",
	"./sk.js": "7be6",
	"./sl": "8155",
	"./sl.js": "8155",
	"./sq": "c8f3",
	"./sq.js": "c8f3",
	"./sr": "cf1e",
	"./sr-cyrl": "13e9",
	"./sr-cyrl.js": "13e9",
	"./sr.js": "cf1e",
	"./ss": "52bd",
	"./ss.js": "52bd",
	"./sv": "5fbd",
	"./sv.js": "5fbd",
	"./sw": "74dc",
	"./sw.js": "74dc",
	"./ta": "3de5",
	"./ta.js": "3de5",
	"./te": "5cbb",
	"./te.js": "5cbb",
	"./tet": "576c",
	"./tet.js": "576c",
	"./tg": "3b1b",
	"./tg.js": "3b1b",
	"./th": "10e8",
	"./th.js": "10e8",
	"./tl-ph": "0f38",
	"./tl-ph.js": "0f38",
	"./tlh": "cf75",
	"./tlh.js": "cf75",
	"./tr": "0e81",
	"./tr.js": "0e81",
	"./tzl": "cf51",
	"./tzl.js": "cf51",
	"./tzm": "c109",
	"./tzm-latn": "b53d",
	"./tzm-latn.js": "b53d",
	"./tzm.js": "c109",
	"./ug-cn": "6117",
	"./ug-cn.js": "6117",
	"./uk": "ada2",
	"./uk.js": "ada2",
	"./ur": "5294",
	"./ur.js": "5294",
	"./uz": "2e8c",
	"./uz-latn": "010e",
	"./uz-latn.js": "010e",
	"./uz.js": "2e8c",
	"./vi": "2921",
	"./vi.js": "2921",
	"./x-pseudo": "fd7e",
	"./x-pseudo.js": "fd7e",
	"./yo": "7f33",
	"./yo.js": "7f33",
	"./zh-cn": "5c3a",
	"./zh-cn.js": "5c3a",
	"./zh-hk": "49ab",
	"./zh-hk.js": "49ab",
	"./zh-tw": "90ea",
	"./zh-tw.js": "90ea"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "4678";

/***/ }),

/***/ "4a8a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "51c3":
/***/ (function(module, exports) {



/***/ }),

/***/ "583c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEditor_vue_vue_type_style_index_0_id_6ed6b6ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0d64");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEditor_vue_vue_type_style_index_0_id_6ed6b6ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEditor_vue_vue_type_style_index_0_id_6ed6b6ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEditor_vue_vue_type_style_index_0_id_6ed6b6ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5c0b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "647e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6649":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceOption_vue_vue_type_style_index_0_id_adfa571e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c2e5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceOption_vue_vue_type_style_index_0_id_adfa571e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceOption_vue_vue_type_style_index_0_id_adfa571e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleChoiceOption_vue_vue_type_style_index_0_id_adfa571e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "72c6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInputNumber_vue_vue_type_style_index_0_id_1c1d9a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eeaf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInputNumber_vue_vue_type_style_index_0_id_1c1d9a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInputNumber_vue_vue_type_style_index_0_id_1c1d9a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInputNumber_vue_vue_type_style_index_0_id_1c1d9a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "76c9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataShapeTableRow_vue_vue_type_style_index_0_id_137b6f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d4ef");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataShapeTableRow_vue_vue_type_style_index_0_id_137b6f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataShapeTableRow_vue_vue_type_style_index_0_id_137b6f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataShapeTableRow_vue_vue_type_style_index_0_id_137b6f58_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "802b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_6dd0edb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2a4c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_6dd0edb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_6dd0edb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_6dd0edb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "860c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8a23":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarkdownInput_vue_vue_type_style_index_0_id_27ac2cee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("860c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarkdownInput_vue_vue_type_style_index_0_id_27ac2cee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarkdownInput_vue_vue_type_style_index_0_id_27ac2cee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarkdownInput_vue_vue_type_style_index_0_id_27ac2cee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c2e5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cd49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.copy-within.js
var es6_array_copy_within = __webpack_require__("744f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("6c7b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("20d6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("1c4c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.of.js
var es6_array_of = __webpack_require__("e804");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("55dd");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.species.js
var es6_array_species = __webpack_require__("d04f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.to-primitive.js
var es6_date_to_primitive = __webpack_require__("c8ce");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.has-instance.js
var es6_function_has_instance = __webpack_require__("217b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.map.js
var es6_map = __webpack_require__("f400");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.acosh.js
var es6_math_acosh = __webpack_require__("7f25");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.asinh.js
var es6_math_asinh = __webpack_require__("536b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.atanh.js
var es6_math_atanh = __webpack_require__("d9ab");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.cbrt.js
var es6_math_cbrt = __webpack_require__("f9ab");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.clz32.js
var es6_math_clz32 = __webpack_require__("32d7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.cosh.js
var es6_math_cosh = __webpack_require__("25c9");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.expm1.js
var es6_math_expm1 = __webpack_require__("9f3c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.fround.js
var es6_math_fround = __webpack_require__("042e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.hypot.js
var es6_math_hypot = __webpack_require__("c7c6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.imul.js
var es6_math_imul = __webpack_require__("f4ff");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.log1p.js
var es6_math_log1p = __webpack_require__("049f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.log10.js
var es6_math_log10 = __webpack_require__("7872");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.log2.js
var es6_math_log2 = __webpack_require__("a69f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.sign.js
var es6_math_sign = __webpack_require__("0b21");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.sinh.js
var es6_math_sinh = __webpack_require__("6c1a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.tanh.js
var es6_math_tanh = __webpack_require__("c7c62");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.trunc.js
var es6_math_trunc = __webpack_require__("84b4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.epsilon.js
var es6_number_epsilon = __webpack_require__("2e37");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.is-finite.js
var es6_number_is_finite = __webpack_require__("fca0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.is-integer.js
var es6_number_is_integer = __webpack_require__("7cdf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.is-nan.js
var es6_number_is_nan = __webpack_require__("ee1d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.is-safe-integer.js
var es6_number_is_safe_integer = __webpack_require__("b1b1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.max-safe-integer.js
var es6_number_max_safe_integer = __webpack_require__("87f3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.min-safe-integer.js
var es6_number_min_safe_integer = __webpack_require__("9278");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.parse-float.js
var es6_number_parse_float = __webpack_require__("5df2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.parse-int.js
var es6_number_parse_int = __webpack_require__("04ff");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.define-getter.js
var es7_object_define_getter = __webpack_require__("4504");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.define-setter.js
var es7_object_define_setter = __webpack_require__("fee7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.entries.js
var es7_object_entries = __webpack_require__("ffc1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.freeze.js
var es6_object_freeze = __webpack_require__("0d6d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js
var es6_object_get_own_property_descriptor = __webpack_require__("9986");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.get-own-property-names.js
var es6_object_get_own_property_names = __webpack_require__("25db");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.get-prototype-of.js
var es6_object_get_prototype_of = __webpack_require__("e4f7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.lookup-getter.js
var es7_object_lookup_getter = __webpack_require__("b9a1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.lookup-setter.js
var es7_object_lookup_setter = __webpack_require__("64d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.prevent-extensions.js
var es6_object_prevent_extensions = __webpack_require__("9aea");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.is.js
var es6_object_is = __webpack_require__("db97");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.is-frozen.js
var es6_object_is_frozen = __webpack_require__("66c8");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.is-sealed.js
var es6_object_is_sealed = __webpack_require__("57f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.is-extensible.js
var es6_object_is_extensible = __webpack_require__("165b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.seal.js
var es6_object_seal = __webpack_require__("cf6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.set-prototype-of.js
var es6_object_set_prototype_of = __webpack_require__("fd24");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("8615");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.promise.finally.js
var es7_promise_finally = __webpack_require__("097d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.apply.js
var es6_reflect_apply = __webpack_require__("df1b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.construct.js
var es6_reflect_construct = __webpack_require__("2397");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.define-property.js
var es6_reflect_define_property = __webpack_require__("88ca");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.delete-property.js
var es6_reflect_delete_property = __webpack_require__("ba16");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.get.js
var es6_reflect_get = __webpack_require__("d185");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js
var es6_reflect_get_own_property_descriptor = __webpack_require__("ebde");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js
var es6_reflect_get_prototype_of = __webpack_require__("2d34");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.has.js
var es6_reflect_has = __webpack_require__("f6b3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.is-extensible.js
var es6_reflect_is_extensible = __webpack_require__("2251");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.own-keys.js
var es6_reflect_own_keys = __webpack_require__("c698");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js
var es6_reflect_prevent_extensions = __webpack_require__("a19f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.set.js
var es6_reflect_set = __webpack_require__("9253");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js
var es6_reflect_set_prototype_of = __webpack_require__("9275");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("3b2b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.flags.js
var es6_regexp_flags = __webpack_require__("3846");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__("386d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.set.js
var es6_set = __webpack_require__("4f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("ac4d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.anchor.js
var es6_string_anchor = __webpack_require__("8449");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.big.js
var es6_string_big = __webpack_require__("9c86");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.blink.js
var es6_string_blink = __webpack_require__("fa83");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.bold.js
var es6_string_bold = __webpack_require__("48c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.code-point-at.js
var es6_string_code_point_at = __webpack_require__("a032");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.ends-with.js
var es6_string_ends_with = __webpack_require__("aef6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.fixed.js
var es6_string_fixed = __webpack_require__("d263");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.fontcolor.js
var es6_string_fontcolor = __webpack_require__("6c37");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.fontsize.js
var es6_string_fontsize = __webpack_require__("9ec8");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.from-code-point.js
var es6_string_from_code_point = __webpack_require__("5695");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.italics.js
var es6_string_italics = __webpack_require__("d0b0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.link.js
var es6_string_link = __webpack_require__("b54a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.string.pad-start.js
var es7_string_pad_start = __webpack_require__("f576");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.string.pad-end.js
var es7_string_pad_end = __webpack_require__("ed50");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.raw.js
var es6_string_raw = __webpack_require__("788d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.repeat.js
var es6_string_repeat = __webpack_require__("14b9");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.small.js
var es6_string_small = __webpack_require__("f386");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("f559");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.strike.js
var es6_string_strike = __webpack_require__("1448");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.sub.js
var es6_string_sub = __webpack_require__("673e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.sup.js
var es6_string_sup = __webpack_require__("242a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.array-buffer.js
var es6_typed_array_buffer = __webpack_require__("c66f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.int8-array.js
var es6_typed_int8_array = __webpack_require__("b05c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.uint8-array.js
var es6_typed_uint8_array = __webpack_require__("34ef");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js
var es6_typed_uint8_clamped_array = __webpack_require__("6aa2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.int16-array.js
var es6_typed_int16_array = __webpack_require__("15ac");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.uint16-array.js
var es6_typed_uint16_array = __webpack_require__("af56");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.int32-array.js
var es6_typed_int32_array = __webpack_require__("b6e4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.uint32-array.js
var es6_typed_uint32_array = __webpack_require__("9c29");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.float32-array.js
var es6_typed_float32_array = __webpack_require__("63d9");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.float64-array.js
var es6_typed_float64_array = __webpack_require__("4dda");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.weak-map.js
var es6_weak_map = __webpack_require__("10ad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.weak-set.js
var es6_weak_set = __webpack_require__("c02b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__("4795");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.immediate.js
var web_immediate = __webpack_require__("130f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/material-design-icons-iconfont/dist/material-design-icons.css
var material_design_icons = __webpack_require__("d1e7");

// EXTERNAL MODULE: ./node_modules/roboto-fontface/css/roboto/roboto-fontface.css
var roboto_fontface = __webpack_require__("d5e8");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=fd900db0&
var Appvue_type_template_id_fd900db0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('v-navigation-drawer',{attrs:{"persistent":"","mini-variant":_vm.miniVariant,"clipped":_vm.clipped,"enable-resize-watcher":"","fixed":"","app":""},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('v-list',_vm._l((_vm.items),function(item,i){return _c('v-list-tile',{key:i,attrs:{"value":"true","to":{path: '/' + item.title.toLowerCase()}}},[_c('v-list-tile-action',[_c('v-icon',{domProps:{"innerHTML":_vm._s(item.icon)}})],1),_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"textContent":_vm._s(item.title)}})],1)],1)}))],1),_c('v-toolbar',{attrs:{"app":"","clipped-left":_vm.clipped}},[_c('v-toolbar-side-icon',{on:{"click":function($event){$event.stopPropagation();_vm.drawer = !_vm.drawer}}}),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.miniVariant = !_vm.miniVariant}}},[_c('v-icon',{domProps:{"innerHTML":_vm._s(_vm.miniVariant ? 'chevron_right' : 'chevron_left')}})],1),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.clipped = !_vm.clipped}}},[_c('v-icon',[_vm._v("web")])],1),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.fixed = !_vm.fixed}}},[_c('v-icon',[_vm._v("remove")])],1),_c('v-toolbar-title',{staticClass:"text-uppercase"},[_c('span',{staticClass:"font-weight-thin grey--text text--darken-1"},[_vm._v("edu")]),_c('span',{staticClass:"grey--text text--darken-2"},[_vm._v("Quilted")])]),_c('v-spacer'),_c('user-login-and-registration-container'),_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){$event.stopPropagation();_vm.rightDrawer = !_vm.rightDrawer}}},[_c('v-icon',[_vm._v("menu")])],1)],1),_c('v-content',[_c('v-container',{attrs:{"fluid":""}},[_c('v-slide-y-transition',{attrs:{"mode":"out-in"}},[_c('v-layout',{attrs:{"column":"","align-center":""}},[_c('router-view')],1)],1)],1)],1),_c('v-navigation-drawer',{attrs:{"temporary":"","right":_vm.right,"fixed":"","app":""},model:{value:(_vm.rightDrawer),callback:function ($$v) {_vm.rightDrawer=$$v},expression:"rightDrawer"}},[_c('v-list',[_c('v-list-tile',{on:{"click":function($event){_vm.right = !_vm.right}}},[_c('v-list-tile-action',[_c('v-icon',[_vm._v("compare_arrows")])],1),_c('v-list-tile-title',[_vm._v("Switch drawer (click me)")])],1)],1)],1),_c('v-footer',{attrs:{"fixed":_vm.fixed,"app":""}},[_c('span',[_vm._v("© 2017")])]),_c('snackbar-service',{attrs:{"id":"SnackbarService"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=fd900db0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UserLoginAndRegistrationContainer.vue?vue&type=template&id=78ca1878&scoped=true&
var UserLoginAndRegistrationContainervue_type_template_id_78ca1878_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"component-fade","mode":"out-in"}},[(_vm.$store.state.user !== '')?_c('div',[(_vm.$store.state.user === _vm.GuestUsername)?_c('div',[_c('v-dialog',{attrs:{"width":"500px","lazy":""},model:{value:(_vm.regDialog),callback:function ($$v) {_vm.regDialog=$$v},expression:"regDialog"}},[_c('v-btn',{attrs:{"slot":"activator","small":"","color":"success"},slot:"activator"},[_vm._v("\n                    Sign Up\n                ")]),_c('UserRegistration',{on:{"toggle":_vm.toggle}})],1),_c('v-dialog',{attrs:{"lazy":"","width":"500px"},model:{value:(_vm.loginDialog),callback:function ($$v) {_vm.loginDialog=$$v},expression:"loginDialog"}},[_c('v-btn',{attrs:{"slot":"activator","small":"","color":"success"},slot:"activator"},[_vm._v("\n                    Log In\n                ")]),_c('UserLogin',{on:{"toggle":_vm.toggle}})],1)],1):_c('user-chip')],1):_vm._e()])}
var UserLoginAndRegistrationContainervue_type_template_id_78ca1878_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/UserLoginAndRegistrationContainer.vue?vue&type=template&id=78ca1878&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/classCallCheck.js
var classCallCheck = __webpack_require__("c665");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/inherits.js + 1 modules
var inherits = __webpack_require__("dc0a");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/createClass.js
var createClass = __webpack_require__("aa9a");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__("d328");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("11d9");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("9ab4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UserLogin.vue?vue&type=template&id=799928ec&
var UserLoginvue_type_template_id_799928ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[_vm._v("\n        Log In\n    ")]),_c('v-card-text',[_c('v-form',{attrs:{"onsubmit":"return false;"}},[_c('v-text-field',{attrs:{"autofocus":"","name":"name","label":"Username","id":"","prepend-icon":"account_circle"},model:{value:(_vm.username),callback:function ($$v) {_vm.username=$$v},expression:"username"}}),_c('v-text-field',{attrs:{"prepend-icon":"lock","name":"name","hover":"Show password input","label":"Enter your password","hint":"","min":"0","append-icon":_vm.passwordVisible ? 'visibility_off' : 'visibility',"append-icon-cb":function () { return (_vm.passwordVisible = !_vm.passwordVisible); },"type":_vm.passwordVisible ? 'text' : 'password'},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}}),_c('v-btn',{attrs:{"type":"submit","loading":_vm.awaitingResponse,"color":_vm.buttonStatus.color},on:{"click":_vm.login}},[_c('v-icon',{attrs:{"left":"","dark":""}},[_vm._v("lock_open")]),_vm._v("\n            Log In\n        ")],1),_c('v-btn',{attrs:{"flat":""},on:{"click":_vm.toggle}},[_vm._v("\n            Create New Account\n        ")])],1)],1)],1)}
var UserLoginvue_type_template_id_799928ec_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/UserLogin.vue?vue&type=template&id=799928ec&

// EXTERNAL MODULE: ./node_modules/vue-class-component/dist/vue-class-component.common.js
var vue_class_component_common = __webpack_require__("65d9");
var vue_class_component_common_default = /*#__PURE__*/__webpack_require__.n(vue_class_component_common);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SnackbarService.vue?vue&type=template&id=3f7b59dc&
var SnackbarServicevue_type_template_id_3f7b59dc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.snacks),function(snack){return _c('v-snackbar',{key:_vm.snacks.indexOf(snack),attrs:{"timeout":snack.timeout,"bottom":"","right":"","color":_vm.getColor(snack)},model:{value:(_vm.show[_vm.snacks.indexOf(snack)]),callback:function ($$v) {_vm.$set(_vm.show, _vm.snacks.indexOf(snack), $$v)},expression:"show[snacks.indexOf(snack)]"}},[_vm._v("\n    "+_vm._s(snack.text)+"\n    "),_c('v-btn',{attrs:{"icon":"","flat":""},on:{"click":function($event){_vm.close()}}},[_c('v-icon',[_vm._v("close")])],1)],1)}))}
var SnackbarServicevue_type_template_id_3f7b59dc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SnackbarService.vue?vue&type=template&id=3f7b59dc&

// CONCATENATED MODULE: ./src/enums/Status.ts
var Status;

(function (Status) {
  Status["awaitingResponse"] = "awaiting";
  Status["ok"] = "ok";
  Status["warning"] = "warning";
  Status["error"] = "error";
})(Status || (Status = {}));
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SnackbarService.vue?vue&type=script&lang=ts&









function alertUser(msg) {
  var snackBarService = document.getElementById('SnackbarService').__vue__;

  msg = {
    text: msg.text,
    status: msg.status,
    timeout: msg.timeout !== undefined ? msg.timeout : 5000 // 5000 ms default

  };
  snackBarService.addSnack(msg);
}

var SnackbarServicevue_type_script_lang_ts_SnackbarService =
/*#__PURE__*/
function (_Vue) {
  function SnackbarService() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SnackbarService);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(SnackbarService).apply(this, arguments));
    /**
     * A history of snacks served in this session.
     *
     * Possible future work: write these to localstorage/pouchdb
     * for persistance
     */

    _this.snacks = [];
    _this.show = [];
    return _this;
  }

  Object(createClass["a" /* default */])(SnackbarService, [{
    key: "addSnack",
    value: function addSnack(snack) {
      this.snacks.push(snack);
      this.show.push(true);
    }
  }, {
    key: "close",
    value: function close() {
      this.show.pop();
      this.show.push(false);
    }
  }, {
    key: "getColor",
    value: function getColor(snack) {
      if (snack.status === Status.ok) {
        return 'success';
      } else if (snack.status === Status.error) {
        return 'error';
      } else if (snack.status === Status.warning) {
        return 'yellow';
      }
    }
  }]);

  Object(inherits["a" /* default */])(SnackbarService, _Vue);

  return SnackbarService;
}(vue_runtime_esm["default"]);

SnackbarServicevue_type_script_lang_ts_SnackbarService = tslib_es6["a" /* __decorate */]([vue_class_component_common_default.a], SnackbarServicevue_type_script_lang_ts_SnackbarService);
/* harmony default export */ var SnackbarServicevue_type_script_lang_ts_ = (SnackbarServicevue_type_script_lang_ts_SnackbarService);
// CONCATENATED MODULE: ./src/components/SnackbarService.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_SnackbarServicevue_type_script_lang_ts_ = (SnackbarServicevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/SnackbarService.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SnackbarServicevue_type_script_lang_ts_,
  SnackbarServicevue_type_template_id_3f7b59dc_render,
  SnackbarServicevue_type_template_id_3f7b59dc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "SnackbarService.vue"
/* harmony default export */ var components_SnackbarService = (component.exports);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("a34a");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("c93e");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("3040");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/base-course/CardTypes/BasicCard.vue?vue&type=template&id=5badb3dd&
var BasicCardvue_type_template_id_5badb3dd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n    "+_vm._s(_vm.card.Front)+"\n    "),_c('hr'),_vm._v("\n    "+_vm._s(_vm.card.Back)+"\n")])}
var BasicCardvue_type_template_id_5badb3dd_staticRenderFns = []


// CONCATENATED MODULE: ./src/base-course/CardTypes/BasicCard.vue?vue&type=template&id=5badb3dd&

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
var vue_property_decorator = __webpack_require__("60a3");

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("c1df");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./node_modules/mousetrap/mousetrap.js
var mousetrap = __webpack_require__("8a60");
var mousetrap_default = /*#__PURE__*/__webpack_require__.n(mousetrap);

// EXTERNAL MODULE: ./node_modules/util/util.js
var util = __webpack_require__("3022");

// CONCATENATED MODULE: ./src/base-course/Viewable.ts









 // @Component

var Viewable_Viewable =
/*#__PURE__*/
function (_Vue) {
  function Viewable() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Viewable);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Viewable).apply(this, arguments));
    _this.startTime = moment_default()();
    _this.MouseTrap = new mousetrap_default.a(_this.$el);
    return _this;
  }
  /**
   * Returns the time in milliseconds since the element was created
   */


  Object(createClass["a" /* default */])(Viewable, [{
    key: "getURL",

    /**
     * Returns a URL for accessing Blob data. Eg: if the Nth dataShape
     * of a view has an image field named 'wordImage', then this image
     * can be displayed in a template as:
     *
     * <img :src="getURL('wordImage', N)" />
     * @param item The name of the item
     * @param dataShapeIndex The index of the viewData that contains the item.
     */
    value: function getURL(item) {
      var dataShapeIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this.data[dataShapeIndex][item]) {
        return URL.createObjectURL(this.data[dataShapeIndex][item]);
      } else {
        return '';
      }
    }
    /**
     * Called when a user is finished with a card, and triggers
     * the display of new content.
     */

  }, {
    key: "emitResponse",
    value: function emitResponse(r) {
      this.$emit('emitResponse', r);
    }
  }, {
    key: "timeSpent",
    get: function get() {
      return Math.abs(moment_default()().diff(this.startTime, 'milliseconds'));
    }
  }]);

  Object(inherits["a" /* default */])(Viewable, _Vue);

  return Viewable;
}(vue_property_decorator["d" /* Vue */]);



tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", Array)], Viewable_Viewable.prototype, "data", void 0); // tslint:disable-next-line:max-classes-per-file


var Viewable_QuestionView =
/*#__PURE__*/
function (_Viewable) {
  function QuestionView() {
    var _this2;

    Object(classCallCheck["a" /* default */])(this, QuestionView);

    _this2 = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(QuestionView).apply(this, arguments));
    _this2.priorAttempts = 0; // starts at the 1st attempt

    return _this2;
  }

  Object(createClass["a" /* default */])(QuestionView, [{
    key: "submitAnswer",
    value: function submitAnswer(answer) {
      Object(util["log"])('QuestionView.submitAnswer called...');
      var record = {
        priorAttemps: this.priorAttempts,
        cardID: '',
        isCorrect: this.question.isCorrect(answer),
        timeSpent: this.timeSpent,
        timeStamp: this.startTime,
        userAnswer: answer
      };
      this.emitResponse(record);
    }
  }]);

  Object(inherits["a" /* default */])(QuestionView, _Viewable);

  return QuestionView;
}(Viewable_Viewable); // tslint:disable-next-line:max-classes-per-file

var Viewable_InformationView =
/*#__PURE__*/
function (_Viewable2) {
  function InformationView() {
    Object(classCallCheck["a" /* default */])(this, InformationView);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(InformationView).apply(this, arguments));
  }

  Object(inherits["a" /* default */])(InformationView, _Viewable2);

  return InformationView;
}(Viewable_Viewable);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/base-course/Components/UserInput/UserInputNumber.vue?vue&type=template&id=1c1d9a3e&scoped=true&
var UserInputNumbervue_type_template_id_1c1d9a3e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.answer),expression:"answer"}],staticClass:"userInput",attrs:{"type":"number"},domProps:{"value":(_vm.answer)},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.submitAnswer(_vm.strToNumber(_vm.answer))},"input":function($event){if($event.target.composing){ return; }_vm.answer=$event.target.value}}})}
var UserInputNumbervue_type_template_id_1c1d9a3e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/base-course/Components/UserInput/UserInputNumber.vue?vue&type=template&id=1c1d9a3e&scoped=true&

// CONCATENATED MODULE: ./src/base-course/Components/UserInput/UserInput.ts








var UserInput_UserInput =
/*#__PURE__*/
function (_Vue) {
  function UserInput() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, UserInput);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UserInput).apply(this, arguments));
    /**
     * This is the .submitAnswer from the parent
     */

    _this.submitAnswer = _this.submit;
    _this.answer = '';
    return _this;
  }

  Object(createClass["a" /* default */])(UserInput, [{
    key: "isQuestionView",
    value: function isQuestionView(a) {
      return a.submitAnswer !== undefined;
    }
  }, {
    key: "submit",
    value: function submit(answer) {
      return this.getQuestionViewAncestor().submitAnswer(answer);
    }
  }, {
    key: "getQuestionViewAncestor",
    value: function getQuestionViewAncestor() {
      var ancestor = this.$parent;
      var count = 0;

      while (!this.isQuestionView(ancestor)) {
        ancestor = ancestor.$parent;
        count++;

        if (count > 100) {
          var err = "\nUserInput.submit() has failed.\nThe input element has no QuestionView ancestor element.";
          Object(util["log"])(err);
          throw new Error(err);
        }
      }

      return ancestor;
    }
  }]);

  Object(inherits["a" /* default */])(UserInput, _Vue);

  return UserInput;
}(vue_property_decorator["d" /* Vue */]);


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/base-course/Components/UserInput/UserInputNumber.vue?vue&type=script&lang=ts&









var UserInputNumbervue_type_script_lang_ts_UserInputNumber =
/*#__PURE__*/
function (_UserInput) {
  function UserInputNumber() {
    Object(classCallCheck["a" /* default */])(this, UserInputNumber);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UserInputNumber).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(UserInputNumber, [{
    key: "mounted",
    value: function mounted() {
      this.$el.focus();
    }
  }, {
    key: "strToNumber",
    value: function strToNumber(num) {
      return Number.parseFloat(num);
    }
  }]);

  Object(inherits["a" /* default */])(UserInputNumber, _UserInput);

  return UserInputNumber;
}(UserInput_UserInput);

UserInputNumbervue_type_script_lang_ts_UserInputNumber = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({})], UserInputNumbervue_type_script_lang_ts_UserInputNumber);
/* harmony default export */ var UserInputNumbervue_type_script_lang_ts_ = (UserInputNumbervue_type_script_lang_ts_UserInputNumber);
// CONCATENATED MODULE: ./src/base-course/Components/UserInput/UserInputNumber.vue?vue&type=script&lang=ts&
 /* harmony default export */ var UserInput_UserInputNumbervue_type_script_lang_ts_ = (UserInputNumbervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/base-course/Components/UserInput/UserInputNumber.vue?vue&type=style&index=0&id=1c1d9a3e&scoped=true&lang=css&
var UserInputNumbervue_type_style_index_0_id_1c1d9a3e_scoped_true_lang_css_ = __webpack_require__("72c6");

// CONCATENATED MODULE: ./src/base-course/Components/UserInput/UserInputNumber.vue






/* normalize component */

var UserInputNumber_component = Object(componentNormalizer["a" /* default */])(
  UserInput_UserInputNumbervue_type_script_lang_ts_,
  UserInputNumbervue_type_template_id_1c1d9a3e_scoped_true_render,
  UserInputNumbervue_type_template_id_1c1d9a3e_scoped_true_staticRenderFns,
  false,
  null,
  "1c1d9a3e",
  null
  
)

UserInputNumber_component.options.__file = "UserInputNumber.vue"
/* harmony default export */ var UserInput_UserInputNumber = (UserInputNumber_component.exports);
// CONCATENATED MODULE: ./src/base-course/Displayable.ts




var Displayable_Answer = function Answer() {
  Object(classCallCheck["a" /* default */])(this, Answer);
}; // tslint:disable-next-line:max-classes-per-file

var Displayable_Displayable =
/**
 *
 */
function Displayable(viewData) {
  Object(classCallCheck["a" /* default */])(this, Displayable);

  if (viewData.length === 0) {
    throw new Error("\nDisplayable Constructor was called with no view Data.\n            ");
  }

  validateData(this.dataShapes(), viewData);
};

function validateData(shape, data) {
  var _loop = function _loop(i) {
    shape[i].fields.forEach(function (field) {
      if (data[i][field.name] === undefined) {
        throw new Error("field validation failed: ".concat(field.name));
      }
    });
  };

  for (var i = 0; i < shape.length; i++) {
    _loop(i);
  }
} // tslint:disable-next-line:max-classes-per-file


var Displayable_Question =
/*#__PURE__*/
function (_Displayable) {
  function Question() {
    Object(classCallCheck["a" /* default */])(this, Question);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Question).apply(this, arguments));
  }

  Object(inherits["a" /* default */])(Question, _Displayable);

  return Question;
}(Displayable_Displayable);
// CONCATENATED MODULE: ./src/enums/FieldType.ts
var FieldType;

(function (FieldType) {
  FieldType["STRING"] = "string";
  FieldType["NUMBER"] = "number";
  FieldType["INT"] = "int";
  FieldType["IMAGE"] = "image";
  FieldType["MARKDOWN"] = "markdown";
  FieldType["AUDIO"] = "audio";
})(FieldType || (FieldType = {}));

var stringConverter = function stringConverter(value) {
  return value;
};

var numberConverter = function numberConverter(value) {
  return parseFloat(value);
};

var intConverter = function intConverter(value) {
  return parseInt(value, 10);
};

var fieldConverters = {
  string: {
    databaseConverter: function databaseConverter(value) {
      return value;
    },
    previewConverter: function previewConverter(value) {
      return value;
    }
  },
  number: {
    databaseConverter: numberConverter,
    previewConverter: numberConverter
  },
  int: {
    databaseConverter: intConverter,
    previewConverter: intConverter
  },
  image: {
    databaseConverter: function databaseConverter(value) {
      return value;
    },
    previewConverter: function previewConverter(value) {
      if (value) {
        return value.data;
      } else {
        return new Blob();
      }
    }
  }
};
// CONCATENATED MODULE: ./src/enums/DataShapeNames.ts
var DataShapeName;

(function (DataShapeName) {
  DataShapeName["BLANK"] = ""; // Basic types

  DataShapeName["Basic"] = "Basic"; // Math

  DataShapeName["MATH_SingleDigitAddition"] = "SingleDigitAddition";
  DataShapeName["MATH_SingleDigitSubtraction"] = "SingleDigitSubtraction";
  DataShapeName["MATH_SingleDigitDivision"] = "SingleDigitDivision";
  DataShapeName["MATH_SingleDigitMultiplication"] = "SingleDigitMultiplication";
  DataShapeName["MATH_EqualityTest"] = "EqualityTest"; // French

  DataShapeName["FRENCH_AudioParse"] = "AudioParse";
  DataShapeName["FRENCH_Vocab"] = "Vocab";
})(DataShapeName || (DataShapeName = {}));
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/base-course/CardTypes/BasicCard.vue?vue&type=script&lang=ts&













var BasicCardvue_type_script_lang_ts_BasicCard =
/*#__PURE__*/
function (_Displayable) {
  function BasicCard() {
    Object(classCallCheck["a" /* default */])(this, BasicCard);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BasicCard).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(BasicCard, [{
    key: "dataShapes",
    value: function dataShapes() {
      return BasicCard.dataShapes;
    }
  }, {
    key: "views",
    value: function views() {
      return [BasicCardvue_type_script_lang_ts_BasicView];
    }
  }]);

  Object(inherits["a" /* default */])(BasicCard, _Displayable);

  return BasicCard;
}(Displayable_Displayable);

BasicCardvue_type_script_lang_ts_BasicCard.dataShapes = [{
  name: DataShapeName.Basic,
  fields: [{
    name: 'Front',
    type: FieldType.STRING
  }, {
    name: 'Back',
    type: FieldType.STRING
  }]
}]; // tslint:disable-next-line:max-classes-per-file

var BasicCardvue_type_script_lang_ts_BasicView =
/*#__PURE__*/
function (_InformationView) {
  // tslint:disable-next-line:max-classes-per-file
  function BasicView() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BasicView);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(BasicView).apply(this, arguments));
    _this.answer = '';
    return _this;
  }

  Object(createClass["a" /* default */])(BasicView, [{
    key: "submit",
    value: function submit() {}
  }, {
    key: "displayable",
    get: function get() {
      return new BasicCardvue_type_script_lang_ts_BasicCard(this.data);
    }
  }]);

  Object(inherits["a" /* default */])(BasicView, _InformationView);

  return BasicView;
}(Viewable_InformationView);

BasicCardvue_type_script_lang_ts_BasicView = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    UserInputNumber: UserInput_UserInputNumber
  }
})], BasicCardvue_type_script_lang_ts_BasicView);
/* harmony default export */ var BasicCardvue_type_script_lang_ts_ = (BasicCardvue_type_script_lang_ts_BasicView);
// CONCATENATED MODULE: ./src/base-course/CardTypes/BasicCard.vue?vue&type=script&lang=ts&
 /* harmony default export */ var CardTypes_BasicCardvue_type_script_lang_ts_ = (BasicCardvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/base-course/CardTypes/BasicCard.vue





/* normalize component */

var BasicCard_component = Object(componentNormalizer["a" /* default */])(
  CardTypes_BasicCardvue_type_script_lang_ts_,
  BasicCardvue_type_template_id_5badb3dd_render,
  BasicCardvue_type_template_id_5badb3dd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

BasicCard_component.options.__file = "BasicCard.vue"
/* harmony default export */ var CardTypes_BasicCard = (BasicCard_component.exports);
// CONCATENATED MODULE: ./src/base-course/Course.ts


 // tslint:disable-next-line:max-classes-per-file

var Course_Course =
/*#__PURE__*/
function () {
  Object(createClass["a" /* default */])(Course, [{
    key: "questions",
    get: function get() {
      return this.questionList;
    }
  }, {
    key: "allViews",
    get: function get() {
      var ret = new Array();
      this.questionList.forEach(function (question) {
        question.views.forEach(function (view) {
          ret.push(view);
        });
      });
      return ret;
    }
    /**
     * This function returns the map {[index:string]: string} of display
     * components needed by the CardViewer component
     */

  }, {
    key: "allViewsMap",
    get: function get() {
      var ret = {};
      this.allViews.forEach(function (view) {
        ret[view.name] = view;
      });
      return ret;
    }
  }]);

  function Course(name, questionList) {
    Object(classCallCheck["a" /* default */])(this, Course);

    this.name = name;
    this.questionList = questionList;
    this.questionList.concat(this.getBaseQTypes());
  }

  Object(createClass["a" /* default */])(Course, [{
    key: "getQuestion",
    value: function getQuestion(name) {
      return this.questionList.find(function (question) {
        return question.name === name;
      });
    }
  }, {
    key: "getBaseQTypes",
    value: function getBaseQTypes() {
      return [CardTypes_BasicCard];
    }
  }]);

  return Course;
}();
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/french/questions/audioparse/view.vue?vue&type=template&id=206a9b97&
var viewvue_type_template_id_206a9b97_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('AudioAutoPlayer',{attrs:{"src":_vm.getURL('audio')}}),_c('br'),_c('br'),_vm._v("\n    "+_vm._s(_vm.question.text)+"\n")],1)}
var viewvue_type_template_id_206a9b97_staticRenderFns = []


// CONCATENATED MODULE: ./src/courses/french/questions/audioparse/view.vue?vue&type=template&id=206a9b97&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/base-course/Components/AudioAutoPlayer.vue?vue&type=template&id=9a0fc8a4&
var AudioAutoPlayervue_type_template_id_9a0fc8a4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-btn',{attrs:{"large":"","raised":"","icon":"","color":"primary"},on:{"click":_vm.play}},[_c('v-icon',[_vm._v("play_arrow")])],1)}
var AudioAutoPlayervue_type_template_id_9a0fc8a4_staticRenderFns = []


// CONCATENATED MODULE: ./src/base-course/Components/AudioAutoPlayer.vue?vue&type=template&id=9a0fc8a4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/base-course/Components/AudioAutoPlayer.vue?vue&type=script&lang=ts&










var AudioAutoPlayervue_type_script_lang_ts_AudioAutoPlayer =
/*#__PURE__*/
function (_Vue) {
  function AudioAutoPlayer() {
    Object(classCallCheck["a" /* default */])(this, AudioAutoPlayer);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AudioAutoPlayer).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(AudioAutoPlayer, [{
    key: "created",
    value: function created() {
      var _this = this;

      this.audioPlayer = new Audio(this.src);
      this.audioPlayer.autoplay = true;
      mousetrap["bind"]('up', function () {
        _this.play();
      });
    }
  }, {
    key: "play",
    value: function play() {
      this.audioPlayer.play();
    }
  }]);

  Object(inherits["a" /* default */])(AudioAutoPlayer, _Vue);

  return AudioAutoPlayer;
}(vue_runtime_esm["default"]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])({
  required: true
}), tslib_es6["b" /* __metadata */]("design:type", String)], AudioAutoPlayervue_type_script_lang_ts_AudioAutoPlayer.prototype, "src", void 0);

AudioAutoPlayervue_type_script_lang_ts_AudioAutoPlayer = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({})], AudioAutoPlayervue_type_script_lang_ts_AudioAutoPlayer);
/* harmony default export */ var AudioAutoPlayervue_type_script_lang_ts_ = (AudioAutoPlayervue_type_script_lang_ts_AudioAutoPlayer);
// CONCATENATED MODULE: ./src/base-course/Components/AudioAutoPlayer.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_AudioAutoPlayervue_type_script_lang_ts_ = (AudioAutoPlayervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/base-course/Components/AudioAutoPlayer.vue





/* normalize component */

var AudioAutoPlayer_component = Object(componentNormalizer["a" /* default */])(
  Components_AudioAutoPlayervue_type_script_lang_ts_,
  AudioAutoPlayervue_type_template_id_9a0fc8a4_render,
  AudioAutoPlayervue_type_template_id_9a0fc8a4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

AudioAutoPlayer_component.options.__file = "AudioAutoPlayer.vue"
/* harmony default export */ var Components_AudioAutoPlayer = (AudioAutoPlayer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/french/questions/audioparse/view.vue?vue&type=script&lang=ts&











var viewvue_type_script_lang_ts_AudioParseView =
/*#__PURE__*/
function (_QuestionView) {
  function AudioParseView() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AudioParseView);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AudioParseView).apply(this, arguments));
    _this.answer = '';
    return _this;
  }

  Object(createClass["a" /* default */])(AudioParseView, [{
    key: "submit",
    value: function submit() {// alert(this.question.isCorrect(parseInt(this.answer, 10)));
    }
  }, {
    key: "question",
    get: function get() {
      return new audioparse_AudioParsingQuestion(this.data);
    }
  }]);

  Object(inherits["a" /* default */])(AudioParseView, _QuestionView);

  return AudioParseView;
}(Viewable_QuestionView);

viewvue_type_script_lang_ts_AudioParseView = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    AudioAutoPlayer: Components_AudioAutoPlayer
  }
})], viewvue_type_script_lang_ts_AudioParseView);
/* harmony default export */ var viewvue_type_script_lang_ts_ = (viewvue_type_script_lang_ts_AudioParseView);
// CONCATENATED MODULE: ./src/courses/french/questions/audioparse/view.vue?vue&type=script&lang=ts&
 /* harmony default export */ var audioparse_viewvue_type_script_lang_ts_ = (viewvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/courses/french/questions/audioparse/view.vue





/* normalize component */

var view_component = Object(componentNormalizer["a" /* default */])(
  audioparse_viewvue_type_script_lang_ts_,
  viewvue_type_template_id_206a9b97_render,
  viewvue_type_template_id_206a9b97_staticRenderFns,
  false,
  null,
  null,
  null
  
)

view_component.options.__file = "view.vue"
/* harmony default export */ var audioparse_view = (view_component.exports);
// CONCATENATED MODULE: ./src/courses/french/questions/audioparse/index.ts










var audioparse_AudioParsingQuestion =
/*#__PURE__*/
function (_Question) {
  function AudioParsingQuestion(data) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AudioParsingQuestion);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AudioParsingQuestion).call(this, data));
    _this.audio = data[0].audio;
    _this.text = data[0].text;
    return _this;
  }

  Object(createClass["a" /* default */])(AudioParsingQuestion, [{
    key: "isCorrect",
    value: function isCorrect(answer) {
      return true;
    }
  }, {
    key: "dataShapes",
    value: function dataShapes() {
      return AudioParsingQuestion.dataShapes;
    }
  }, {
    key: "views",
    value: function views() {
      return AudioParsingQuestion.views;
    }
  }]);

  Object(inherits["a" /* default */])(AudioParsingQuestion, _Question);

  return AudioParsingQuestion;
}(Displayable_Question);
audioparse_AudioParsingQuestion.dataShapes = [{
  name: DataShapeName.FRENCH_AudioParse,
  fields: [{
    name: 'audio',
    type: FieldType.IMAGE
  }, {
    name: 'text',
    type: FieldType.STRING,
    validator: {
      test: function test(value) {
        var good = value.length < 45;
        return {
          msg: good ? '' : 'It\'s too long!',
          status: good ? Status.ok : Status.error
        };
      }
    }
  }]
}];
audioparse_AudioParsingQuestion.views = [audioparse_view];
// CONCATENATED MODULE: ./src/base-course/Validators/index.ts

var NonEmptyString = {
  instructions: '',
  test: function test(input) {
    if (input.length !== 0) {
      return {
        status: Status.ok,
        msg: ''
      };
    } else {
      return {
        status: Status.error,
        msg: 'Input cannot be empty'
      };
    }
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/french/questions/vocab/identify.vue?vue&type=template&id=339d40c1&
var identifyvue_type_template_id_339d40c1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n  This is a vocabulary question.\n  \n")])}
var identifyvue_type_template_id_339d40c1_staticRenderFns = []


// CONCATENATED MODULE: ./src/courses/french/questions/vocab/identify.vue?vue&type=template&id=339d40c1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/base-course/Components/UserInput/UserInputString.vue?vue&type=template&id=4c0a43fa&scoped=true&
var UserInputStringvue_type_template_id_4c0a43fa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.answer),expression:"answer"}],staticClass:"userInput",domProps:{"value":(_vm.answer)},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.submitAnswer(_vm.answer)},"input":function($event){if($event.target.composing){ return; }_vm.answer=$event.target.value}}})}
var UserInputStringvue_type_template_id_4c0a43fa_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/base-course/Components/UserInput/UserInputString.vue?vue&type=template&id=4c0a43fa&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/base-course/Components/UserInput/UserInputString.vue?vue&type=script&lang=ts&









var UserInputStringvue_type_script_lang_ts_UserInputString =
/*#__PURE__*/
function (_UserInput) {
  function UserInputString() {
    Object(classCallCheck["a" /* default */])(this, UserInputString);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UserInputString).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(UserInputString, [{
    key: "mounted",
    value: function mounted() {
      this.$el.focus();
    }
  }]);

  Object(inherits["a" /* default */])(UserInputString, _UserInput);

  return UserInputString;
}(UserInput_UserInput);

UserInputStringvue_type_script_lang_ts_UserInputString = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({})], UserInputStringvue_type_script_lang_ts_UserInputString);
/* harmony default export */ var UserInputStringvue_type_script_lang_ts_ = (UserInputStringvue_type_script_lang_ts_UserInputString);
// CONCATENATED MODULE: ./src/base-course/Components/UserInput/UserInputString.vue?vue&type=script&lang=ts&
 /* harmony default export */ var UserInput_UserInputStringvue_type_script_lang_ts_ = (UserInputStringvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/base-course/Components/UserInput/UserInputString.vue?vue&type=style&index=0&id=4c0a43fa&scoped=true&lang=css&
var UserInputStringvue_type_style_index_0_id_4c0a43fa_scoped_true_lang_css_ = __webpack_require__("2c95");

// CONCATENATED MODULE: ./src/base-course/Components/UserInput/UserInputString.vue






/* normalize component */

var UserInputString_component = Object(componentNormalizer["a" /* default */])(
  UserInput_UserInputStringvue_type_script_lang_ts_,
  UserInputStringvue_type_template_id_4c0a43fa_scoped_true_render,
  UserInputStringvue_type_template_id_4c0a43fa_scoped_true_staticRenderFns,
  false,
  null,
  "4c0a43fa",
  null
  
)

UserInputString_component.options.__file = "UserInputString.vue"
/* harmony default export */ var UserInput_UserInputString = (UserInputString_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/french/questions/vocab/identify.vue?vue&type=script&lang=ts&












var identifyvue_type_script_lang_ts_IdentifyVocab =
/*#__PURE__*/
function (_QuestionView) {
  function IdentifyVocab() {
    Object(classCallCheck["a" /* default */])(this, IdentifyVocab);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(IdentifyVocab).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(IdentifyVocab, [{
    key: "question",
    get: function get() {
      return new vocab_VocabQuestion(this.data);
    }
  }]);

  Object(inherits["a" /* default */])(IdentifyVocab, _QuestionView);

  return IdentifyVocab;
}(Viewable_QuestionView);

identifyvue_type_script_lang_ts_IdentifyVocab = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    AudioAutoPlayer: Components_AudioAutoPlayer,
    UserInputString: UserInput_UserInputString
  }
})], identifyvue_type_script_lang_ts_IdentifyVocab);
/* harmony default export */ var identifyvue_type_script_lang_ts_ = (identifyvue_type_script_lang_ts_IdentifyVocab);
// CONCATENATED MODULE: ./src/courses/french/questions/vocab/identify.vue?vue&type=script&lang=ts&
 /* harmony default export */ var vocab_identifyvue_type_script_lang_ts_ = (identifyvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/courses/french/questions/vocab/identify.vue





/* normalize component */

var identify_component = Object(componentNormalizer["a" /* default */])(
  vocab_identifyvue_type_script_lang_ts_,
  identifyvue_type_template_id_339d40c1_render,
  identifyvue_type_template_id_339d40c1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

identify_component.options.__file = "identify.vue"
/* harmony default export */ var identify = (identify_component.exports);
// CONCATENATED MODULE: ./src/courses/french/questions/vocab/index.ts










var fields = [{
  name: 'word',
  type: FieldType.STRING,
  validator: NonEmptyString
}, {
  name: 'image',
  type: FieldType.IMAGE
}, {
  name: 'audio',
  type: FieldType.AUDIO
}];
var vocab_VocabQuestion =
/*#__PURE__*/
function (_Question) {
  function VocabQuestion() {
    Object(classCallCheck["a" /* default */])(this, VocabQuestion);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(VocabQuestion).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(VocabQuestion, [{
    key: "isCorrect",
    value: function isCorrect(answer) {
      throw new Error('Method not implemented.');
    }
  }, {
    key: "dataShapes",
    value: function dataShapes() {
      return VocabQuestion.dataShapes;
    }
  }, {
    key: "views",
    value: function views() {
      return VocabQuestion.views;
    }
  }]);

  Object(inherits["a" /* default */])(VocabQuestion, _Question);

  return VocabQuestion;
}(Displayable_Question);
vocab_VocabQuestion.dataShapes = [{
  fields: fields,
  name: DataShapeName.FRENCH_Vocab
}];
vocab_VocabQuestion.views = [identify];
// CONCATENATED MODULE: ./src/courses/french/index.ts



var french = new Course_Course('french', [audioparse_AudioParsingQuestion, vocab_VocabQuestion]);
/* harmony default export */ var courses_french = (french);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/math/questions/addition/horizontal.vue?vue&type=template&id=62815155&
var horizontalvue_type_template_id_62815155_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n    "+_vm._s(_vm.question.a)+" + "+_vm._s(_vm.question.b)+" = \n     "),_c('UserInputNumber')],1)}
var horizontalvue_type_template_id_62815155_staticRenderFns = []


// CONCATENATED MODULE: ./src/courses/math/questions/addition/horizontal.vue?vue&type=template&id=62815155&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/math/questions/addition/horizontal.vue?vue&type=script&lang=ts&











var horizontalvue_type_script_lang_ts_AdditionHorizontal =
/*#__PURE__*/
function (_QuestionView) {
  function AdditionHorizontal() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, AdditionHorizontal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AdditionHorizontal).apply(this, arguments));
    _this.answer = '';
    return _this;
  }

  Object(createClass["a" /* default */])(AdditionHorizontal, [{
    key: "submit",
    value: function submit() {
      // alert(this.answer);
      alert(this.question.isCorrect(parseInt(this.answer, 10)));
    }
  }, {
    key: "question",
    get: function get() {
      return new addition_SingleDigitAdditionQuestion(this.data);
    }
  }]);

  Object(inherits["a" /* default */])(AdditionHorizontal, _QuestionView);

  return AdditionHorizontal;
}(Viewable_QuestionView);

horizontalvue_type_script_lang_ts_AdditionHorizontal = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    UserInputNumber: UserInput_UserInputNumber
  }
})], horizontalvue_type_script_lang_ts_AdditionHorizontal);
/* harmony default export */ var horizontalvue_type_script_lang_ts_ = (horizontalvue_type_script_lang_ts_AdditionHorizontal);
// CONCATENATED MODULE: ./src/courses/math/questions/addition/horizontal.vue?vue&type=script&lang=ts&
 /* harmony default export */ var addition_horizontalvue_type_script_lang_ts_ = (horizontalvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/courses/math/questions/addition/horizontal.vue





/* normalize component */

var horizontal_component = Object(componentNormalizer["a" /* default */])(
  addition_horizontalvue_type_script_lang_ts_,
  horizontalvue_type_template_id_62815155_render,
  horizontalvue_type_template_id_62815155_staticRenderFns,
  false,
  null,
  null,
  null
  
)

horizontal_component.options.__file = "horizontal.vue"
/* harmony default export */ var horizontal = (horizontal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/math/questions/addition/verbal.vue?vue&type=template&id=5d3706fa&
var verbalvue_type_template_id_5d3706fa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n    "+_vm._s(_vm.question.a)+" plus "+_vm._s(_vm.question.b)+" is \n    "),_c('UserInputNumber')],1)}
var verbalvue_type_template_id_5d3706fa_staticRenderFns = []


// CONCATENATED MODULE: ./src/courses/math/questions/addition/verbal.vue?vue&type=template&id=5d3706fa&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/math/questions/addition/verbal.vue?vue&type=script&lang=ts&











var verbalvue_type_script_lang_ts_VerbalAddition =
/*#__PURE__*/
function (_QuestionView) {
  function VerbalAddition() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VerbalAddition);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(VerbalAddition).apply(this, arguments));
    _this.answer = '';
    return _this;
  }

  Object(createClass["a" /* default */])(VerbalAddition, [{
    key: "submit",
    value: function submit() {
      alert(this.question.isCorrect(parseInt(this.answer, 10)));
    }
  }, {
    key: "question",
    get: function get() {
      return new addition_SingleDigitAdditionQuestion(this.data);
    }
  }]);

  Object(inherits["a" /* default */])(VerbalAddition, _QuestionView);

  return VerbalAddition;
}(Viewable_QuestionView);

verbalvue_type_script_lang_ts_VerbalAddition = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    UserInputNumber: UserInput_UserInputNumber
  }
})], verbalvue_type_script_lang_ts_VerbalAddition);
/* harmony default export */ var verbalvue_type_script_lang_ts_ = (verbalvue_type_script_lang_ts_VerbalAddition);
// CONCATENATED MODULE: ./src/courses/math/questions/addition/verbal.vue?vue&type=script&lang=ts&
 /* harmony default export */ var addition_verbalvue_type_script_lang_ts_ = (verbalvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/courses/math/questions/addition/verbal.vue





/* normalize component */

var verbal_component = Object(componentNormalizer["a" /* default */])(
  addition_verbalvue_type_script_lang_ts_,
  verbalvue_type_template_id_5d3706fa_render,
  verbalvue_type_template_id_5d3706fa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

verbal_component.options.__file = "verbal.vue"
/* harmony default export */ var verbal = (verbal_component.exports);
// CONCATENATED MODULE: ./src/courses/math/questions/addition/index.ts










var addition_fields = [{
  name: 'a',
  type: FieldType.INT
}, {
  name: 'b',
  type: FieldType.INT
}];
var addition_SingleDigitAdditionQuestion =
/*#__PURE__*/
function (_Question) {
  function SingleDigitAdditionQuestion(data) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SingleDigitAdditionQuestion);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(SingleDigitAdditionQuestion).call(this, data));
    _this.a = data[0].a;
    _this.b = data[0].b;
    return _this;
  }

  Object(createClass["a" /* default */])(SingleDigitAdditionQuestion, [{
    key: "isCorrect",
    value: function isCorrect(answer) {
      return 1 * this.a + this.b === answer;
    }
  }, {
    key: "dataShapes",
    value: function dataShapes() {
      return SingleDigitAdditionQuestion.dataShapes;
    }
  }, {
    key: "views",
    value: function views() {
      return SingleDigitAdditionQuestion.views;
    }
  }]);

  Object(inherits["a" /* default */])(SingleDigitAdditionQuestion, _Question);

  return SingleDigitAdditionQuestion;
}(Displayable_Question);
addition_SingleDigitAdditionQuestion.dataShapes = [{
  name: DataShapeName.MATH_SingleDigitAddition,
  fields: addition_fields
}];
addition_SingleDigitAdditionQuestion.views = [horizontal, verbal];
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/math/questions/division/horizontal.vue?vue&type=template&id=70470d77&
var horizontalvue_type_template_id_70470d77_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n    "+_vm._s(_vm.question.a * _vm.question.b)+" ÷ "+_vm._s(_vm.question.b)+" = \n     "),_c('UserInputNumber')],1)}
var horizontalvue_type_template_id_70470d77_staticRenderFns = []


// CONCATENATED MODULE: ./src/courses/math/questions/division/horizontal.vue?vue&type=template&id=70470d77&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/math/questions/division/horizontal.vue?vue&type=script&lang=ts&











var horizontalvue_type_script_lang_ts_DivisionHorizontal =
/*#__PURE__*/
function (_QuestionView) {
  function DivisionHorizontal() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DivisionHorizontal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DivisionHorizontal).apply(this, arguments));
    _this.answer = '';
    return _this;
  }

  Object(createClass["a" /* default */])(DivisionHorizontal, [{
    key: "submit",
    value: function submit() {
      alert(this.question.isCorrect(parseInt(this.answer, 10)));
    }
  }, {
    key: "question",
    get: function get() {
      return new division_SingleDigitDivisionQuestion(this.data);
    }
  }]);

  Object(inherits["a" /* default */])(DivisionHorizontal, _QuestionView);

  return DivisionHorizontal;
}(Viewable_QuestionView);

horizontalvue_type_script_lang_ts_DivisionHorizontal = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    UserInputNumber: UserInput_UserInputNumber
  }
})], horizontalvue_type_script_lang_ts_DivisionHorizontal);
/* harmony default export */ var division_horizontalvue_type_script_lang_ts_ = (horizontalvue_type_script_lang_ts_DivisionHorizontal);
// CONCATENATED MODULE: ./src/courses/math/questions/division/horizontal.vue?vue&type=script&lang=ts&
 /* harmony default export */ var questions_division_horizontalvue_type_script_lang_ts_ = (division_horizontalvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/courses/math/questions/division/horizontal.vue





/* normalize component */

var division_horizontal_component = Object(componentNormalizer["a" /* default */])(
  questions_division_horizontalvue_type_script_lang_ts_,
  horizontalvue_type_template_id_70470d77_render,
  horizontalvue_type_template_id_70470d77_staticRenderFns,
  false,
  null,
  null,
  null
  
)

division_horizontal_component.options.__file = "horizontal.vue"
/* harmony default export */ var division_horizontal = (division_horizontal_component.exports);
// CONCATENATED MODULE: ./src/courses/math/questions/division/index.ts










var division_fields = [{
  name: 'a',
  type: FieldType.INT
}, {
  name: 'b',
  type: FieldType.INT,
  validator: {
    instructions: 'An integer between 1 and 10, inclusive.',
    test: function test(value) {
      var input = parseInt(value, 10);

      if (0 < input && input < 11) {
        return {
          status: Status.ok,
          msg: ''
        };
      } else if (input === 0) {
        return {
          status: Status.error,
          msg: 'Thou shalt not divide by zero.'
        };
      } else {
        return {
          status: Status.error,
          msg: 'Single digit division problem divisors must be between 1 and 10, inclusive.'
        };
      }
    }
  }
}];
var division_SingleDigitDivisionQuestion =
/*#__PURE__*/
function (_Question) {
  /**
   * @param data a and b are seed props that will pop a question of
   * the form [(a*b) / b = ___]. So, b must be non-zero.
   */
  function SingleDigitDivisionQuestion(data) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SingleDigitDivisionQuestion);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(SingleDigitDivisionQuestion).call(this, data));
    _this.a = data[0].a;
    _this.b = data[0].b;
    return _this;
  }

  Object(createClass["a" /* default */])(SingleDigitDivisionQuestion, [{
    key: "isCorrect",
    value: function isCorrect(answer) {
      return this.a * this.b === answer;
    }
  }, {
    key: "dataShapes",
    value: function dataShapes() {
      return SingleDigitDivisionQuestion.dataShapes;
    }
  }, {
    key: "views",
    value: function views() {
      return SingleDigitDivisionQuestion.views;
    }
  }]);

  Object(inherits["a" /* default */])(SingleDigitDivisionQuestion, _Question);

  return SingleDigitDivisionQuestion;
}(Displayable_Question);
division_SingleDigitDivisionQuestion.dataShapes = [{
  name: DataShapeName.MATH_SingleDigitDivision,
  fields: division_fields
}];
division_SingleDigitDivisionQuestion.views = [division_horizontal];
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/math/questions/multiplication/blorizontal.vue?vue&type=template&id=4672f137&
var blorizontalvue_type_template_id_4672f137_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n    "+_vm._s(_vm.question.a)+" × "+_vm._s(_vm.question.b)+" = \n     "),_c('UserInputNumber')],1)}
var blorizontalvue_type_template_id_4672f137_staticRenderFns = []


// CONCATENATED MODULE: ./src/courses/math/questions/multiplication/blorizontal.vue?vue&type=template&id=4672f137&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/math/questions/multiplication/blorizontal.vue?vue&type=script&lang=ts&











var blorizontalvue_type_script_lang_ts_MultiplicationHorizontal =
/*#__PURE__*/
function (_QuestionView) {
  function MultiplicationHorizontal() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, MultiplicationHorizontal);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MultiplicationHorizontal).apply(this, arguments));
    _this.answer = '';
    return _this;
  }

  Object(createClass["a" /* default */])(MultiplicationHorizontal, [{
    key: "submit",
    value: function submit() {
      alert(this.question.isCorrect(parseInt(this.answer, 10)));
    }
  }, {
    key: "question",
    get: function get() {
      return new multiplication_SingleDigitMultiplicationQuestion(this.data);
    }
  }]);

  Object(inherits["a" /* default */])(MultiplicationHorizontal, _QuestionView);

  return MultiplicationHorizontal;
}(Viewable_QuestionView);

blorizontalvue_type_script_lang_ts_MultiplicationHorizontal = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    UserInputNumber: UserInput_UserInputNumber
  }
})], blorizontalvue_type_script_lang_ts_MultiplicationHorizontal);
/* harmony default export */ var blorizontalvue_type_script_lang_ts_ = (blorizontalvue_type_script_lang_ts_MultiplicationHorizontal);
// CONCATENATED MODULE: ./src/courses/math/questions/multiplication/blorizontal.vue?vue&type=script&lang=ts&
 /* harmony default export */ var multiplication_blorizontalvue_type_script_lang_ts_ = (blorizontalvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/courses/math/questions/multiplication/blorizontal.vue





/* normalize component */

var blorizontal_component = Object(componentNormalizer["a" /* default */])(
  multiplication_blorizontalvue_type_script_lang_ts_,
  blorizontalvue_type_template_id_4672f137_render,
  blorizontalvue_type_template_id_4672f137_staticRenderFns,
  false,
  null,
  null,
  null
  
)

blorizontal_component.options.__file = "blorizontal.vue"
/* harmony default export */ var blorizontal = (blorizontal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/math/questions/multiplication/verbal.vue?vue&type=template&id=5dfbff73&
var verbalvue_type_template_id_5dfbff73_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n    "+_vm._s(_vm.question.a)+" times "+_vm._s(_vm.question.b)+" is \n    "),_c('UserInputNumber')],1)}
var verbalvue_type_template_id_5dfbff73_staticRenderFns = []


// CONCATENATED MODULE: ./src/courses/math/questions/multiplication/verbal.vue?vue&type=template&id=5dfbff73&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/math/questions/multiplication/verbal.vue?vue&type=script&lang=ts&











var verbalvue_type_script_lang_ts_VerbalMultiplication =
/*#__PURE__*/
function (_QuestionView) {
  function VerbalMultiplication() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, VerbalMultiplication);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(VerbalMultiplication).apply(this, arguments));
    _this.answer = '';
    return _this;
  }

  Object(createClass["a" /* default */])(VerbalMultiplication, [{
    key: "submit",
    value: function submit() {
      alert(this.question.isCorrect(parseInt(this.answer, 10)));
    }
  }, {
    key: "question",
    get: function get() {
      return new multiplication_SingleDigitMultiplicationQuestion(this.data);
    }
  }]);

  Object(inherits["a" /* default */])(VerbalMultiplication, _QuestionView);

  return VerbalMultiplication;
}(Viewable_QuestionView);

verbalvue_type_script_lang_ts_VerbalMultiplication = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    UserInputNumber: UserInput_UserInputNumber
  }
})], verbalvue_type_script_lang_ts_VerbalMultiplication);
/* harmony default export */ var multiplication_verbalvue_type_script_lang_ts_ = (verbalvue_type_script_lang_ts_VerbalMultiplication);
// CONCATENATED MODULE: ./src/courses/math/questions/multiplication/verbal.vue?vue&type=script&lang=ts&
 /* harmony default export */ var questions_multiplication_verbalvue_type_script_lang_ts_ = (multiplication_verbalvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/courses/math/questions/multiplication/verbal.vue





/* normalize component */

var multiplication_verbal_component = Object(componentNormalizer["a" /* default */])(
  questions_multiplication_verbalvue_type_script_lang_ts_,
  verbalvue_type_template_id_5dfbff73_render,
  verbalvue_type_template_id_5dfbff73_staticRenderFns,
  false,
  null,
  null,
  null
  
)

multiplication_verbal_component.options.__file = "verbal.vue"
/* harmony default export */ var multiplication_verbal = (multiplication_verbal_component.exports);
// CONCATENATED MODULE: ./src/courses/math/questions/multiplication/index.ts











var validator = {
  instructions: 'An integer between 0 and 10, inclusive.',
  test: function test(value) {
    var input = parseInt(value, 10);

    if (0 <= input && input <= 10) {
      return {
        status: Status.ok,
        msg: ''
      };
    } else {
      return {
        status: Status.error,
        msg: 'Single digit multiplication problem inputs must be between 0 and 10, inclusive.'
      };
    }
  }
};
var multiplication_fields = [{
  name: 'a',
  type: FieldType.INT,
  validator: validator
}, {
  name: 'b',
  type: FieldType.INT,
  validator: validator
}];
var multiplication_SingleDigitMultiplicationQuestion =
/*#__PURE__*/
function (_Question) {
  function SingleDigitMultiplicationQuestion(data) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SingleDigitMultiplicationQuestion);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(SingleDigitMultiplicationQuestion).call(this, data));
    _this.a = data[0].a;
    _this.b = data[0].b;
    return _this;
  }

  Object(createClass["a" /* default */])(SingleDigitMultiplicationQuestion, [{
    key: "isCorrect",
    value: function isCorrect(answer) {
      return this.a * this.b === answer;
    }
  }, {
    key: "dataShapes",
    value: function dataShapes() {
      return SingleDigitMultiplicationQuestion.dataShapes;
    }
  }, {
    key: "views",
    value: function views() {
      return SingleDigitMultiplicationQuestion.views;
    }
  }]);

  Object(inherits["a" /* default */])(SingleDigitMultiplicationQuestion, _Question);

  return SingleDigitMultiplicationQuestion;
}(Displayable_Question);
multiplication_SingleDigitMultiplicationQuestion.dataShapes = [{
  name: DataShapeName.MATH_SingleDigitMultiplication,
  fields: multiplication_fields
}];
multiplication_SingleDigitMultiplicationQuestion.views = [multiplication_verbal, blorizontal];
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/math/questions/equalityTest/trueFalse.vue?vue&type=template&id=2dac2bf7&
var trueFalsevue_type_template_id_2dac2bf7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n    "+_vm._s(_vm.question.a)+" = "+_vm._s(_vm.question.b)+" \n\n    "),_c('TFSelect',{attrs:{"MouseTrap":_vm.MouseTrap,"submit":_vm.submit}})],1)}
var trueFalsevue_type_template_id_2dac2bf7_staticRenderFns = []


// CONCATENATED MODULE: ./src/courses/math/questions/equalityTest/trueFalse.vue?vue&type=template&id=2dac2bf7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/base-course/Components/TrueFalse.vue?vue&type=template&id=2c28c5d5&
var TrueFalsevue_type_template_id_2c28c5d5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('RadioSelect',{attrs:{"choiceList":['True', 'False'],"MouseTrap":_vm.MouseTrap,"submit":_vm.submit}})],1)}
var TrueFalsevue_type_template_id_2c28c5d5_staticRenderFns = []


// CONCATENATED MODULE: ./src/base-course/Components/TrueFalse.vue?vue&type=template&id=2c28c5d5&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/base-course/Components/RadioMultipleChoice.vue?vue&type=template&id=49f2dcf0&
var RadioMultipleChoicevue_type_template_id_49f2dcf0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"multipleChoice"},_vm._l((_vm.choiceList),function(choice){return _c('MultipleChoiceOption',{key:_vm.choiceList.indexOf(choice),attrs:{"content":choice,"selected":_vm.choiceList.indexOf(choice) === _vm.currentSelection,"number":_vm.choiceList.indexOf(choice),"setSelection":_vm.setSelection,"submit":_vm.forwardSelection}})}))}
var RadioMultipleChoicevue_type_template_id_49f2dcf0_staticRenderFns = []


// CONCATENATED MODULE: ./src/base-course/Components/RadioMultipleChoice.vue?vue&type=template&id=49f2dcf0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/base-course/Components/MultipleChoiceOption.vue?vue&type=template&id=adfa571e&scoped=true&
var MultipleChoiceOptionvue_type_template_id_adfa571e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,on:{"mouseover":_vm.select,"click":_vm.submitThisOption}},[_vm._v("\n    "+_vm._s(_vm.content)+"\n")])}
var MultipleChoiceOptionvue_type_template_id_adfa571e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/base-course/Components/MultipleChoiceOption.vue?vue&type=template&id=adfa571e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/base-course/Components/MultipleChoiceOption.vue?vue&type=script&lang=ts&









var MultipleChoiceOptionvue_type_script_lang_ts_MultipleChoiceOption =
/*#__PURE__*/
function (_Vue) {
  function MultipleChoiceOption() {
    Object(classCallCheck["a" /* default */])(this, MultipleChoiceOption);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MultipleChoiceOption).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(MultipleChoiceOption, [{
    key: "select",
    value: function select() {
      this.setSelection(this.number);
    }
  }, {
    key: "submitThisOption",
    value: function submitThisOption() {
      this.select();
      this.submit();
    }
  }, {
    key: "className",
    get: function get() {
      if (this.selected) {
        return 'choice selected';
      } else {
        return 'choice';
      }
    }
  }]);

  Object(inherits["a" /* default */])(MultipleChoiceOption, _Vue);

  return MultipleChoiceOption;
}(vue_runtime_esm["default"]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", String)], MultipleChoiceOptionvue_type_script_lang_ts_MultipleChoiceOption.prototype, "content", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", Boolean)], MultipleChoiceOptionvue_type_script_lang_ts_MultipleChoiceOption.prototype, "selected", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", Number)], MultipleChoiceOptionvue_type_script_lang_ts_MultipleChoiceOption.prototype, "number", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", Function)], MultipleChoiceOptionvue_type_script_lang_ts_MultipleChoiceOption.prototype, "setSelection", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", Function)], MultipleChoiceOptionvue_type_script_lang_ts_MultipleChoiceOption.prototype, "submit", void 0);

MultipleChoiceOptionvue_type_script_lang_ts_MultipleChoiceOption = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({})], MultipleChoiceOptionvue_type_script_lang_ts_MultipleChoiceOption);
/* harmony default export */ var MultipleChoiceOptionvue_type_script_lang_ts_ = (MultipleChoiceOptionvue_type_script_lang_ts_MultipleChoiceOption);
// CONCATENATED MODULE: ./src/base-course/Components/MultipleChoiceOption.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_MultipleChoiceOptionvue_type_script_lang_ts_ = (MultipleChoiceOptionvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/base-course/Components/MultipleChoiceOption.vue?vue&type=style&index=0&id=adfa571e&scoped=true&lang=css&
var MultipleChoiceOptionvue_type_style_index_0_id_adfa571e_scoped_true_lang_css_ = __webpack_require__("6649");

// CONCATENATED MODULE: ./src/base-course/Components/MultipleChoiceOption.vue






/* normalize component */

var MultipleChoiceOption_component = Object(componentNormalizer["a" /* default */])(
  Components_MultipleChoiceOptionvue_type_script_lang_ts_,
  MultipleChoiceOptionvue_type_template_id_adfa571e_scoped_true_render,
  MultipleChoiceOptionvue_type_template_id_adfa571e_scoped_true_staticRenderFns,
  false,
  null,
  "adfa571e",
  null
  
)

MultipleChoiceOption_component.options.__file = "MultipleChoiceOption.vue"
/* harmony default export */ var Components_MultipleChoiceOption = (MultipleChoiceOption_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/base-course/Components/RadioMultipleChoice.vue?vue&type=script&lang=ts&







var _a;





var RadioMultipleChoicevue_type_script_lang_ts_RadioSelect =
/*#__PURE__*/
function (_UserInput) {
  function RadioSelect() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, RadioSelect);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(RadioSelect).apply(this, arguments)); // @Prop() public submit: (selection: number) => void;

    _this.currentSelection = -1;
    return _this;
  }

  Object(createClass["a" /* default */])(RadioSelect, [{
    key: "mounted",
    value: function mounted() {
      this.$el.focus();
    }
  }, {
    key: "created",
    value: function created() {
      this.MouseTrap.bind('left', this.decrementSelection);
      this.MouseTrap.bind('right', this.incrementSelection);
      this.MouseTrap.bind('enter', this.forwardSelection);

      for (var i = 0; i < this.choiceList.length; i++) {
        this.bindNumberKey(i + 1);
      }
    }
  }, {
    key: "forwardSelection",
    value: function forwardSelection() {
      if (this.currentSelection !== -1) {
        this.submitAnswer({
          options: this.choiceList,
          selection: this.currentSelection
        });
      }
    }
  }, {
    key: "setSelection",
    value: function setSelection(selection) {
      if (selection < this.choiceList.length) {
        this.currentSelection = selection;
      }
    }
  }, {
    key: "incrementSelection",
    value: function incrementSelection() {
      // alert('increment');
      if (this.currentSelection === -1) {
        this.currentSelection = Math.ceil(this.choiceList.length / 2);
      } else {
        this.currentSelection = Math.min(this.choiceList.length - 1, this.currentSelection + 1);
      }
    }
  }, {
    key: "decrementSelection",
    value: function decrementSelection() {
      // alert('dencrement');
      if (this.currentSelection === -1) {
        this.currentSelection = Math.floor(this.choiceList.length / 2 - 1);
      } else {
        this.currentSelection = Math.max(0, this.currentSelection - 1);
      }
    }
  }, {
    key: "bindNumberKey",
    value: function bindNumberKey(n) {
      var _this2 = this;

      this.MouseTrap.bind(n.toString(), function () {
        _this2.currentSelection = n - 1;
      });
    }
  }]);

  Object(inherits["a" /* default */])(RadioSelect, _UserInput);

  return RadioSelect;
}(UserInput_UserInput);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", Array)], RadioMultipleChoicevue_type_script_lang_ts_RadioSelect.prototype, "choiceList", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", typeof (_a = typeof MousetrapInstance !== "undefined" && MousetrapInstance) === "function" ? _a : Object)], RadioMultipleChoicevue_type_script_lang_ts_RadioSelect.prototype, "MouseTrap", void 0);

RadioMultipleChoicevue_type_script_lang_ts_RadioSelect = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    MultipleChoiceOption: Components_MultipleChoiceOption
  }
})], RadioMultipleChoicevue_type_script_lang_ts_RadioSelect);
/* harmony default export */ var RadioMultipleChoicevue_type_script_lang_ts_ = (RadioMultipleChoicevue_type_script_lang_ts_RadioSelect);
// CONCATENATED MODULE: ./src/base-course/Components/RadioMultipleChoice.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_RadioMultipleChoicevue_type_script_lang_ts_ = (RadioMultipleChoicevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/base-course/Components/RadioMultipleChoice.vue





/* normalize component */

var RadioMultipleChoice_component = Object(componentNormalizer["a" /* default */])(
  Components_RadioMultipleChoicevue_type_script_lang_ts_,
  RadioMultipleChoicevue_type_template_id_49f2dcf0_render,
  RadioMultipleChoicevue_type_template_id_49f2dcf0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

RadioMultipleChoice_component.options.__file = "RadioMultipleChoice.vue"
/* harmony default export */ var RadioMultipleChoice = (RadioMultipleChoice_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/base-course/Components/TrueFalse.vue?vue&type=script&lang=ts&






var TrueFalsevue_type_script_lang_ts_a;





var TrueFalsevue_type_script_lang_ts_TrueFalse =
/*#__PURE__*/
function (_Vue) {
  function TrueFalse() {
    Object(classCallCheck["a" /* default */])(this, TrueFalse);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(TrueFalse).apply(this, arguments));
  }

  Object(inherits["a" /* default */])(TrueFalse, _Vue);

  return TrueFalse;
}(vue_runtime_esm["default"]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", typeof (TrueFalsevue_type_script_lang_ts_a = typeof MousetrapInstance !== "undefined" && MousetrapInstance) === "function" ? TrueFalsevue_type_script_lang_ts_a : Object)], TrueFalsevue_type_script_lang_ts_TrueFalse.prototype, "MouseTrap", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", Function)], TrueFalsevue_type_script_lang_ts_TrueFalse.prototype, "submit", void 0);

TrueFalsevue_type_script_lang_ts_TrueFalse = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    RadioSelect: RadioMultipleChoice
  }
})], TrueFalsevue_type_script_lang_ts_TrueFalse);
/* harmony default export */ var TrueFalsevue_type_script_lang_ts_ = (TrueFalsevue_type_script_lang_ts_TrueFalse);
// CONCATENATED MODULE: ./src/base-course/Components/TrueFalse.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_TrueFalsevue_type_script_lang_ts_ = (TrueFalsevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/base-course/Components/TrueFalse.vue





/* normalize component */

var TrueFalse_component = Object(componentNormalizer["a" /* default */])(
  Components_TrueFalsevue_type_script_lang_ts_,
  TrueFalsevue_type_template_id_2c28c5d5_render,
  TrueFalsevue_type_template_id_2c28c5d5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

TrueFalse_component.options.__file = "TrueFalse.vue"
/* harmony default export */ var Components_TrueFalse = (TrueFalse_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/courses/math/questions/equalityTest/trueFalse.vue?vue&type=script&lang=ts&











var trueFalsevue_type_script_lang_ts_TrueFalse =
/*#__PURE__*/
function (_QuestionView) {
  function TrueFalse() {
    Object(classCallCheck["a" /* default */])(this, TrueFalse);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(TrueFalse).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(TrueFalse, [{
    key: "submit",
    value: function submit(selection) {
      alert(this.question.isCorrect(selection === 0));
    }
  }, {
    key: "question",
    get: function get() {
      // alert(`this.Mousetrap == ${Object.keys(this.MouseTrap)}`);
      return new equalityTest_EqualityTest(this.data);
    }
  }]);

  Object(inherits["a" /* default */])(TrueFalse, _QuestionView);

  return TrueFalse;
}(Viewable_QuestionView);

trueFalsevue_type_script_lang_ts_TrueFalse = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    TFSelect: Components_TrueFalse
  }
})], trueFalsevue_type_script_lang_ts_TrueFalse);
/* harmony default export */ var trueFalsevue_type_script_lang_ts_ = (trueFalsevue_type_script_lang_ts_TrueFalse);
// CONCATENATED MODULE: ./src/courses/math/questions/equalityTest/trueFalse.vue?vue&type=script&lang=ts&
 /* harmony default export */ var equalityTest_trueFalsevue_type_script_lang_ts_ = (trueFalsevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/courses/math/questions/equalityTest/trueFalse.vue





/* normalize component */

var trueFalse_component = Object(componentNormalizer["a" /* default */])(
  equalityTest_trueFalsevue_type_script_lang_ts_,
  trueFalsevue_type_template_id_2dac2bf7_render,
  trueFalsevue_type_template_id_2dac2bf7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

trueFalse_component.options.__file = "trueFalse.vue"
/* harmony default export */ var trueFalse = (trueFalse_component.exports);
// CONCATENATED MODULE: ./src/courses/math/questions/equalityTest/index.ts









var equalityTest_fields = [{
  name: 'a',
  type: FieldType.STRING
}, {
  name: 'b',
  type: FieldType.STRING
}];
var equalityTest_EqualityTest =
/*#__PURE__*/
function (_Question) {
  /**
   * @param data a and b are seed props that will pop a question of
   * the form [(a*b) / b = ___]. So, b must be non-zero.
   */
  function EqualityTest(data) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, EqualityTest);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(EqualityTest).call(this, data));
    _this.a = data[0].a;
    _this.b = data[0].b;
    return _this;
  }

  Object(createClass["a" /* default */])(EqualityTest, [{
    key: "isCorrect",
    value: function isCorrect(answer) {
      return this.a === this.b === answer;
    }
  }, {
    key: "dataShapes",
    value: function dataShapes() {
      return EqualityTest.dataShapes;
    }
  }, {
    key: "views",
    value: function views() {
      return EqualityTest.views;
    }
  }]);

  Object(inherits["a" /* default */])(EqualityTest, _Question);

  return EqualityTest;
}(Displayable_Question);
equalityTest_EqualityTest.dataShapes = [{
  name: DataShapeName.MATH_EqualityTest,
  fields: equalityTest_fields
}];
equalityTest_EqualityTest.views = [trueFalse];
// CONCATENATED MODULE: ./src/courses/math/index.ts





var math = new Course_Course('math', [division_SingleDigitDivisionQuestion, multiplication_SingleDigitMultiplicationQuestion, addition_SingleDigitAdditionQuestion, equalityTest_EqualityTest]);
/* harmony default export */ var courses_math = (math);
// CONCATENATED MODULE: ./src/courses/word-work/index.ts

var wordWork = new Course_Course('wordWork', []);
/* harmony default export */ var word_work = (wordWork);
// CONCATENATED MODULE: ./src/courses/index.ts





var courses_CourseList =
/*#__PURE__*/
function () {
  Object(createClass["a" /* default */])(CourseList, [{
    key: "courses",
    get: function get() {
      return this.courseList;
    }
  }]);

  function CourseList(courses) {
    Object(classCallCheck["a" /* default */])(this, CourseList);

    this.courseList = courses;
  }

  Object(createClass["a" /* default */])(CourseList, [{
    key: "getCourse",
    value: function getCourse(name) {
      return this.courseList.find(function (course) {
        return course.name === name;
      });
    }
    /**
     * allViews supplies the CardViewer component with the required
     * Vue components it needs at run-time.
     */

  }, {
    key: "allViews",
    value: function allViews() {
      var ret = {};
      this.courseList.forEach(function (course) {
        Object.assign(ret, course.allViewsMap);
      });
      return ret;
    }
  }, {
    key: "getView",
    value: function getView(viewDescription) {
      var description;

      if (typeof viewDescription === 'string') {
        description = courses_NameSpacer.getViewDescriptor(viewDescription);
      } else {
        description = viewDescription;
      }

      var course = this.getCourse(description.course);

      if (course) {
        var question = course.getQuestion(description.questionType);

        if (question) {
          var ret = question.views.find(function (view) {
            return view.name === description.view;
          });

          if (ret) {
            return ret;
          } else {
            throw new Error("view ".concat(description.view, " does not exist."));
          }
        } else {
          throw new Error("question ".concat(description.questionType, " does not exist."));
        }
      } else {
        throw new Error("course ".concat(description.course, " does not exist."));
      }
    }
  }, {
    key: "allDataShapes",
    value: function allDataShapes() {
      var ret = [];
      this.courseList.forEach(function (course) {
        course.questions.forEach(function (question) {
          question.dataShapes.forEach(function (shape) {
            if (ret.findIndex(function (testShape) {
              return testShape.course === course.name && testShape.dataShape === shape.name;
            }) === -1) {
              ret.push({
                course: course.name,
                dataShape: shape.name
              });
            }
          });
        });
      });
      return ret;
    }
  }, {
    key: "getDataShape",
    value: function getDataShape(description) {
      var ret;
      this.getCourse(description.course).questions.forEach(function (question) {
        question.dataShapes.forEach(function (shape) {
          if (shape.name === description.dataShape) {
            ret = shape;
          }
        });
      });

      if (ret) {
        return ret;
      } else {
        throw new Error("DataShape ".concat(courses_NameSpacer.getDataShapeString(description), " not found"));
      }
    }
  }]);

  return CourseList;
}(); // tslint:disable-next-line:max-classes-per-file

var courses_NameSpacer =
/*#__PURE__*/
function () {
  function NameSpacer() {
    Object(classCallCheck["a" /* default */])(this, NameSpacer);
  }

  Object(createClass["a" /* default */])(NameSpacer, null, [{
    key: "getDataShapeDescriptor",
    value: function getDataShapeDescriptor(shapeStr) {
      var splitArray = shapeStr.split('.');

      if (splitArray.length !== 3) {
        throw new Error('shapeStr not valid');
      } else {
        return {
          course: splitArray[0],
          dataShape: splitArray[2]
        };
      }
    }
  }, {
    key: "getDataShapeString",
    value: function getDataShapeString(shapeDescription) {
      return "".concat(shapeDescription.course, ".datashape.").concat(shapeDescription.dataShape);
    }
  }, {
    key: "getViewDescriptor",
    value: function getViewDescriptor(viewStr) {
      var splitArray = viewStr.split('.');

      if (splitArray.length !== 4) {
        throw new Error('viewStr not valid');
      } else {
        return {
          course: splitArray[0],
          questionType: splitArray[2],
          view: splitArray[3]
        };
      }
    }
  }, {
    key: "getViewString",
    value: function getViewString(viewDescription) {
      return "".concat(viewDescription.course, ".question.") + "".concat(viewDescription.questionType, ".").concat(viewDescription.view);
    }
  }, {
    key: "getQuestionDescriptor",
    value: function getQuestionDescriptor(questionStr) {
      var splitArray = questionStr.split('.');

      if (splitArray.length !== 3) {
        throw new Error('questionStr not valid');
      } else {
        return {
          course: splitArray[0],
          questionType: splitArray[2]
        };
      }
    }
  }, {
    key: "getQuestionString",
    value: function getQuestionString(questionDescription) {
      return "".concat(questionDescription.course, ".question.").concat(questionDescription.questionType);
    }
  }]);

  return NameSpacer;
}();
var courseList = new courses_CourseList([courses_math, word_work, courses_french]);
/* harmony default export */ var src_courses = (courseList);
// CONCATENATED MODULE: ./src/db/types.ts
var DocType;

(function (DocType) {
  DocType["DISPLAYABLE_DATA"] = "DISPLAYABLE_DATA";
  DocType["CARD"] = "CARD";
  DocType["DATASHAPE"] = "DATASHAPE";
  DocType["QUESTIONTYPE"] = "QUESTION";
  DocType["VIEW"] = "VIEW";
  DocType["PEDAGOGY"] = "PEDAGOGY";
  DocType["CARDRECORD"] = "CARDRECORD";
  DocType["SCHEDULED_CARD"] = "SCHEDULED_CARD";
})(DocType || (DocType = {}));

function isQuestionRecord(c) {
  return c.userAnswer !== undefined;
}
// CONCATENATED MODULE: ./src/ENVIRONMENT_VARS.ts
var ENV = {
  COUCHDB_SERVER_URL: '',
  EXPRESS_SERVER_URL: '',
  DEBUG: false
};
ENV.COUCHDB_SERVER_URL = "http://159.203.60.117:5984/";
ENV.EXPRESS_SERVER_URL = "http://159.203.60.117:3000/";

if ("false" !== undefined) {
  ENV.DEBUG = "false" === 'true';
}

/* harmony default export */ var ENVIRONMENT_VARS = (ENV);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./src/store.ts



vue_runtime_esm["default"].use(vuex_esm["a" /* default */]);
var GuestUsername = 'Guest';
var Store = new vuex_esm["a" /* default */].Store({
  state: {
    user: '',
    userLoginAndRegistrationContainer: {
      loggedIn: false,
      regDialogOpen: false,
      loginDialogOpen: false
    }
  },
  mutations: {},
  actions: {}
});
/* harmony default export */ var store = (Store);
checkAuthCookie();

function checkAuthCookie() {
  var authXML = new XMLHttpRequest();
  authXML.withCredentials = true;
  authXML.addEventListener('load', function () {
    // todo add link to couchdb doc of this json shape
    var resp = JSON.parse(this.responseText);

    if (resp.userCtx.name !== undefined && resp.userCtx.name !== '' && resp.userCtx.name !== null) {
      Store.state.user = resp.userCtx.name;
    } else {
      Store.state.user = GuestUsername;
    }
  });
  authXML.open('GET', ENVIRONMENT_VARS.COUCHDB_SERVER_URL + '_session');
  authXML.send();
}
// EXTERNAL MODULE: ./node_modules/pouchdb-authentication/lib/index.es.js + 9 modules
var index_es = __webpack_require__("fcd3");

// EXTERNAL MODULE: ./node_modules/pouchdb-browser/lib/index.es.js
var lib_index_es = __webpack_require__("d6e1");

// EXTERNAL MODULE: ./node_modules/pouchdb-find/lib/index-browser.es.js + 9 modules
var index_browser_es = __webpack_require__("5d16");

// EXTERNAL MODULE: ./node_modules/node-libs-browser/mock/process.js
var process = __webpack_require__("4362");
var process_default = /*#__PURE__*/__webpack_require__.n(process);

// CONCATENATED MODULE: ./src/db/index.ts














window.process = process_default.a; // required as a fix for pouchdb - see #18

lib_index_es["a" /* default */].plugin(index_es["a" /* default */]);
lib_index_es["a" /* default */].plugin(index_browser_es["a" /* default */]);

if (ENVIRONMENT_VARS.DEBUG) {// pouch.debug.enable('pouchdb:find');
}

var expiryDocID = 'GuestAccountExpirationDate';
var dbUUID = 'dbUUID';
var remote = new lib_index_es["a" /* default */](ENVIRONMENT_VARS.COUCHDB_SERVER_URL + 'skuilder', {
  skip_setup: true
});
var localUserDB = new lib_index_es["a" /* default */]('skuilder');

function hexEncode(str) {
  var hex;
  var returnStr = '';

  for (var i = 0; i < str.length; i++) {
    hex = str.charCodeAt(i).toString(16);
    returnStr += ('000' + hex).slice(3);
  }

  return returnStr;
}

function getUserDB(username) {
  var guestAccount = false;

  if (username === GuestUsername || username === '') {
    username = accomodateGuest();
    guestAccount = true;
  }

  var hexName = hexEncode(username);
  var dbName = "userdb-".concat(hexName);
  Object(util["log"])("Fetching user database: ".concat(dbName, " (").concat(username, ")")); // odd construction here the result of a bug in the
  // interaction between pouch, pouch-auth.
  // see: https://github.com/pouchdb-community/pouchdb-authentication/issues/239

  var ret = new lib_index_es["a" /* default */](ENVIRONMENT_VARS.COUCHDB_SERVER_URL + dbName, {
    fetch: function fetch(url, opts) {
      opts.credentials = 'include';
      return lib_index_es["a" /* default */].fetch(url, opts);
    }
  });

  if (guestAccount) {
    updateGuestAccountExpirationDate(ret);
  }

  lib_index_es["a" /* default */].replicate(ret, localUserDB);
  return ret;
}
/**
 * Checks the remote couchdb to see if a given username is available
 * @param username The username to be checked
 */

function usernameIsAvailable(_x) {
  return _usernameIsAvailable.apply(this, arguments);
}

function _usernameIsAvailable() {
  _usernameIsAvailable = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(username) {
    var req, url;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Object(util["log"])("Checking availability of ".concat(username));
            req = new XMLHttpRequest();
            url = ENVIRONMENT_VARS.COUCHDB_SERVER_URL + 'userdb-' + hexEncode(username);
            req.open('HEAD', url, false);
            req.send();
            return _context.abrupt("return", req.status === 404);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _usernameIsAvailable.apply(this, arguments);
}

function updateGuestAccountExpirationDate(guestDB) {
  var currentTime = moment_default()();
  var expirationDate = currentTime.add(2, 'months').toISOString();
  guestDB.get(expiryDocID).then(function (doc) {
    guestDB.put({
      _id: expiryDocID,
      _rev: doc._rev,
      date: expirationDate
    });
  }).catch(function (err) {
    guestDB.put({
      _id: expiryDocID,
      date: expirationDate
    });
  });
}

function accomodateGuest() {
  var username;

  if (localStorage.getItem(dbUUID) !== null) {
    username = GuestUsername + localStorage.getItem(dbUUID);
    remoteDBLogin(username, localStorage.getItem(dbUUID));
  } else {
    var uuid = generateUUID();
    localStorage.setItem(dbUUID, uuid);
    username = GuestUsername + uuid;
    remoteDBSignup(username, uuid);
    remoteDBLogin(username, uuid);
  }

  return username; // pilfered from https://stackoverflow.com/a/8809472/1252649

  function generateUUID() {
    var d = new Date().getTime();

    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now(); // use high-precision timer if available
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      // tslint:disable-next-line:no-bitwise
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16); // tslint:disable-next-line:no-bitwise

      return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
  }
}

function remoteDBLogin(username, password) {
  return remote.logIn(username, password);
}
function remoteDBLogout() {
  return remote.logOut();
}
function remoteDBSignup(username, password, options) {
  var newDBRequest = remote.signUp(username, password);
  newDBRequest.then(function (resp) {
    if (resp.ok) {
      localUserDB.get(expiryDocID).then(function (doc) {
        return localUserDB.remove(doc._id, doc._rev);
      }).then(function () {
        localUserDB.replicate.to(getUserDB(username));
      }).catch(function () {
        localUserDB.replicate.to(getUserDB(username));
      });
    }
  });
  return newDBRequest;
}
function getDoc(id) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return remote.get(id, options);
}
function putQuestionType(_x2, _x3) {
  return _putQuestionType.apply(this, arguments);
}

function _putQuestionType() {
  _putQuestionType = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(course, question) {
    var questionID, viewList, dataShapeList;
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            questionID = courses_NameSpacer.getQuestionString({
              course: course,
              questionType: question.name
            });
            viewList = question.views.map(function (view) {
              return view.name;
            });
            dataShapeList = question.dataShapes.map(function (shape) {
              return courses_NameSpacer.getDataShapeString({
                course: course,
                dataShape: shape.name
              });
            });
            _context2.prev = 3;
            _context2.next = 6;
            return dataShapeList.forEach(function (id) {
              getDoc(id).then(function (doc) {
                doc.questionTypes.push(questionID);
                remote.put(doc);
              }).catch(function () {
                throw new Error("".concat(id, " is not registered in the database.\n                    Register dependant dataShapes before registering a question Type."));
              });
            });

          case 6:
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](3);
            throw _context2.t0;

          case 11:
            return _context2.abrupt("return", remote.put({
              _id: questionID,
              course: course,
              docType: DocType.QUESTIONTYPE,
              viewList: viewList,
              dataShapeList: dataShapeList
            }));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[3, 8]]);
  }));
  return _putQuestionType.apply(this, arguments);
}

function getQuestions(course) {
  return remote.find({
    selector: {
      docType: DocType.QUESTIONTYPE,
      course: course
    }
  });
}
function putDataShape(course, dataShape) {
  var dataShapeId = courses_NameSpacer.getDataShapeString({
    course: course,
    dataShape: dataShape.name
  });
  return remote.put({
    course: course,
    docType: DocType.DATASHAPE,
    _id: dataShapeId,
    questionTypes: []
  });
}
function putQuestionView(course, questionName, viewName) {
  var questionID = courses_NameSpacer.getQuestionString({
    course: course,
    questionType: questionName
  });
  getDoc(questionID).then(function (question) {
    if (question.viewList.indexOf(viewName) === -1) {
      question.viewList.push(viewName);
      remote.put(question);
    } else {
      throw new Error("putQuestionView failed: ".concat(course, ".").concat(questionName, " already contains a view named ").concat(viewName));
    }
  });
}
function doesUserExist(_x4) {
  return _doesUserExist.apply(this, arguments);
}

function _doesUserExist() {
  _doesUserExist = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee3(name) {
    var user;
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return remote.getUser(name);

          case 3:
            user = _context3.sent;
            Object(util["log"])("user: ".concat(user._id));
            return _context3.abrupt("return", true);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            Object(util["log"])("User error: ".concat(_context3.t0));
            return _context3.abrupt("return", false);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 8]]);
  }));
  return _doesUserExist.apply(this, arguments);
}

function addNote(_x5, _x6, _x7) {
  return _addNote.apply(this, arguments);
}

function _addNote() {
  _addNote = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee4(course, shape, data) {
    var dataShapeId, attachmentFields, attachments, payload, result;
    return regenerator_default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // todo: make less crappy - test for duplicate insertions - #15
            dataShapeId = courses_NameSpacer.getDataShapeString({
              course: course,
              dataShape: shape.name
            });
            attachmentFields = shape.fields.filter(function (field) {
              return field.type === FieldType.IMAGE;
            });
            attachments = {};
            payload = {
              course: course,
              data: [],
              docType: DocType.DISPLAYABLE_DATA,
              id_datashape: dataShapeId
            };

            if (attachmentFields.length !== 0) {
              attachmentFields.forEach(function (attField) {
                attachments[attField.name] = data[attField.name];
              });
              payload._attachments = attachments;
            }

            shape.fields.filter(function (field) {
              return field.type !== FieldType.IMAGE;
            }).forEach(function (field) {
              payload.data.push({
                name: field.name,
                data: data[field.name]
              });
            });
            _context4.next = 8;
            return remote.post(payload);

          case 8:
            result = _context4.sent;

            if (result.ok) {
              createCards(course, dataShapeId, result.id);
            }

            return _context4.abrupt("return", result);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _addNote.apply(this, arguments);
}

function getImplementingQuestions(_x8) {
  return _getImplementingQuestions.apply(this, arguments);
}

function _getImplementingQuestions() {
  _getImplementingQuestions = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee5(dataShape) {
    var shapeResult, questions;
    return regenerator_default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getDoc(dataShape);

          case 2:
            shapeResult = _context5.sent;
            questions = shapeResult.questionTypes;
            return _context5.abrupt("return", questions.map(function (question) {
              return getDoc(question);
            }));

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _getImplementingQuestions.apply(this, arguments);
}

function createCards(course, dataShapeId, noteId) {
  getImplementingQuestions(dataShapeId).then(function (qPromises) {
    qPromises.forEach(function (questionPromise) {
      questionPromise.then(function (question) {
        var qName = courses_NameSpacer.getQuestionDescriptor(question._id).questionType;
        question.viewList.forEach(function (view) {
          addCard(course, [noteId], courses_NameSpacer.getViewString({
            course: course,
            questionType: qName,
            view: view
          }));
        });
      });
    });
  });
}
/**
 * Returns a promise with doc stubs for all notes of the given dataShape
 * @param course The course name.
 * @param shape The datashape of the notes to be returned.
 */


function getNotes(course, shape) {
  return remote.find({
    selector: {
      course: course,
      docType: DocType.DISPLAYABLE_DATA,
      id_datashape: shape.name
    }
  });
}
/**
 * Returns a list of the registered dataShapes for the specified course,
 * or a list of all registered dataShapes if no course name is provided
 * @param course The name of the course to search
 */

function getDataShapes(course) {
  if (course) {
    return remote.find({
      selector: {
        course: course,
        docType: DocType.DATASHAPE
      }
    });
  } else {
    return remote.find({
      selector: {
        docType: DocType.DATASHAPE
      }
    });
  }
}
function getCards(course) {
  if (course) {
    return remote.find({
      selector: {
        course: course,
        docType: DocType.CARD
      }
    });
  } else {
    return remote.find({
      selector: {
        docType: DocType.CARD
      }
    });
  }
}
/**
 * Adds a card to the DB. This function is called
 * as a side effect of adding either a View or
 * DisplayableData item.
 * @param course The name of the course that the card belongs to
 * @param id_displayable_data C/PouchDB ID of the data used to hydrate the view
 * @param id_view C/PouchDB ID of the view used to display the card
 */

function addCard(course, id_displayable_data, id_view) {
  return remote.post({
    course: course,
    id_displayable_data: id_displayable_data,
    id_view: id_view,
    docType: DocType.CARD
  });
}

function putCardRecord(_x9, _x10) {
  return _putCardRecord.apply(this, arguments);
}

function _putCardRecord() {
  _putCardRecord = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee6(record, user) {
    var userDB, cardHistoryID, cardHistory, initCardHistory;
    return regenerator_default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            userDB = getUserDB(user);
            cardHistoryID = 'cardH-' + record.cardID;
            _context6.prev = 2;
            _context6.next = 5;
            return userDB.get(cardHistoryID);

          case 5:
            cardHistory = _context6.sent;
            cardHistory.records.push(record);
            userDB.put(cardHistory);
            momentifyCardHistory(cardHistory);
            return _context6.abrupt("return", cardHistory);

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](2);

            if (!(_context6.t0.status === 404)) {
              _context6.next = 21;
              break;
            }

            initCardHistory = {
              _id: cardHistoryID,
              cardID: record.cardID,
              records: [record]
            };
            momentifyCardHistory(initCardHistory);
            userDB.put(initCardHistory);
            return _context6.abrupt("return", initCardHistory);

          case 21:
            throw new Error("putCardRecord failed because of:\nname:".concat(_context6.t0.name, "\nerror: ").concat(_context6.t0.error, "\nid: ").concat(_context6.t0.id, "\nmessage: ").concat(_context6.t0.message));

          case 22:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this, [[2, 12]]);
  }));
  return _putCardRecord.apply(this, arguments);
}

function momentifyCardHistory(cardHistory) {
  cardHistory.records = cardHistory.records.map(function (record) {
    var ret = Object(objectSpread["a" /* default */])({}, record);

    ret.timeStamp = moment_default()(record.timeStamp);
    return ret;
  });
}

function scheduleCardReview(user, card_id, time) {
  // createClassroom("testClass"); // testing this function...
  var now = moment_default()();
  getUserDB(user).put({
    _id: 'card_review_' + time.format('YYYY-MM-DD-kk:mm:ss-SSS'),
    cardId: card_id,
    reviewTime: time,
    scheduledAt: now
  });
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UserLogin.vue?vue&type=script&lang=ts&














var UserLoginvue_type_script_lang_ts_UserLogin =
/*#__PURE__*/
function (_Vue) {
  function UserLogin() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, UserLogin);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UserLogin).apply(this, arguments));
    _this.username = '';
    _this.password = '';
    _this.retypedPassword = '';
    _this.passwordVisible = false;
    _this.awaitingResponse = false;
    _this.badLoginAttempt = false;
    _this.errorTimeout = 5000;
    return _this;
  }

  Object(createClass["a" /* default */])(UserLogin, [{
    key: "initBadLogin",
    value: function initBadLogin() {
      var _this2 = this;

      this.badLoginAttempt = true;
      alertUser({
        text: 'Username or password was incorrect.',
        status: Status.error,
        timeout: this.errorTimeout
      });
      setTimeout(function () {
        _this2.badLoginAttempt = false;
      }, this.errorTimeout);
    }
  }, {
    key: "login",
    value: function login() {
      var _this3 = this;

      this.awaitingResponse = true;
      remoteDBLogin(this.username, this.password).then(function (resp) {
        if (resp.ok) {
          _this3.$store.state.user = _this3.username;
        } else {
          _this3.initBadLogin();
        }

        Object(util["log"])('Logged in: ' + resp.ok);
      }).catch(function (err) {
        _this3.initBadLogin();
      });
      this.awaitingResponse = false;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      Object(util["log"])('Toggling registration / login forms.');
    }
  }, {
    key: "buttonStatus",
    get: function get() {
      return {
        color: this.badLoginAttempt ? 'error' : 'success',
        text: this.badLoginAttempt ? 'Try again' : 'Log In'
      };
    }
  }]);

  Object(inherits["a" /* default */])(UserLogin, _Vue);

  return UserLogin;
}(vue_runtime_esm["default"]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Emit */])() // tslint:disable-next-line:no-empty
, tslib_es6["b" /* __metadata */]("design:type", Function), tslib_es6["b" /* __metadata */]("design:paramtypes", []), tslib_es6["b" /* __metadata */]("design:returntype", void 0)], UserLoginvue_type_script_lang_ts_UserLogin.prototype, "toggle", null);

UserLoginvue_type_script_lang_ts_UserLogin = tslib_es6["a" /* __decorate */]([vue_class_component_common_default()({})], UserLoginvue_type_script_lang_ts_UserLogin);
/* harmony default export */ var UserLoginvue_type_script_lang_ts_ = (UserLoginvue_type_script_lang_ts_UserLogin);
// CONCATENATED MODULE: ./src/components/UserLogin.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_UserLoginvue_type_script_lang_ts_ = (UserLoginvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/UserLogin.vue





/* normalize component */

var UserLogin_component = Object(componentNormalizer["a" /* default */])(
  components_UserLoginvue_type_script_lang_ts_,
  UserLoginvue_type_template_id_799928ec_render,
  UserLoginvue_type_template_id_799928ec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

UserLogin_component.options.__file = "UserLogin.vue"
/* harmony default export */ var components_UserLogin = (UserLogin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UserRegistration.vue?vue&type=template&id=0a0cb423&
var UserRegistrationvue_type_template_id_0a0cb423_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[_vm._v("\n      Create Account\n    ")]),_c('v-card-text',[_c('v-form',{attrs:{"onsubmit":"return false;"}},[_c('v-text-field',{ref:"userNameTextField",attrs:{"autofocus":"","name":"name","label":"Username","id":"","prepend-icon":"account_circle"},on:{"blur":_vm.validateUsername},model:{value:(_vm.username),callback:function ($$v) {_vm.username=$$v},expression:"username"}}),_c('v-text-field',{attrs:{"prepend-icon":"lock","name":"name","hover":"Show password input","label":"Enter your password","hint":"","min":"4","append-icon":_vm.passwordVisible ? 'visibility_off' : 'visibility',"type":_vm.passwordVisible ? 'text' : 'password'},on:{"click:append":function () { return (_vm.passwordVisible = !_vm.passwordVisible); }},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}}),_c('v-text-field',{attrs:{"prepend-icon":"lock","name":"name","hover":"Show password input","label":"Retype your password","hint":"","min":"4","type":_vm.passwordVisible ? 'text' : 'password'},model:{value:(_vm.retypedPassword),callback:function ($$v) {_vm.retypedPassword=$$v},expression:"retypedPassword"}}),_c('v-snackbar',{attrs:{"bottom":"","right":"","timeout":5000},model:{value:(_vm.badLoginAttempt),callback:function ($$v) {_vm.badLoginAttempt=$$v},expression:"badLoginAttempt"}},[_vm._v("\n            Username or password was incorrect.\n            "),_c('v-btn',{attrs:{"color":"pink","flat":""},on:{"click":function($event){_vm.badLoginAttempt = false}}},[_vm._v("\n                Close\n            ")])],1),_c('v-btn',{attrs:{"type":"submit","loading":_vm.awaitingResponse,"color":_vm.buttonStatus.color},on:{"click":_vm.createUser}},[_c('v-icon',{attrs:{"left":"","dark":""}},[_vm._v("lock_open")]),_vm._v("\n            Create Account\n        ")],1),_c('v-btn',{attrs:{"flat":""},on:{"click":_vm.toggle}},[_vm._v("\n            Log In\n        ")])],1)],1)],1)}
var UserRegistrationvue_type_template_id_0a0cb423_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/UserRegistration.vue?vue&type=template&id=0a0cb423&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UserRegistration.vue?vue&type=script&lang=ts&












var UserRegistrationvue_type_script_lang_ts_UserRegistration =
/*#__PURE__*/
function (_Vue) {
  function UserRegistration() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, UserRegistration);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UserRegistration).apply(this, arguments));
    _this.username = '';
    _this.password = '';
    _this.retypedPassword = '';
    _this.passwordVisible = false;
    _this.usernameValidationInProgress = false;
    _this.awaitingResponse = false;
    _this.badLoginAttempt = false;
    _this.roles = ['Student', 'Teacher', 'Author'];
    _this.student = true;
    _this.teacher = false;
    _this.author = false;
    return _this;
  }

  Object(createClass["a" /* default */])(UserRegistration, [{
    key: "toggle",
    value: function toggle() {
      Object(util["log"])('Toggling registration / login forms.');
    }
  }, {
    key: "validateUsername",
    value: function validateUsername() {// try {
      //   getUserDB(this.username).allDocs();
      // } catch (e) {
      //   alert('no userdb!');
      // }
    }
  }, {
    key: "createUser",
    value: function createUser() {
      var _this2 = this;

      this.awaitingResponse = true;
      Object(util["log"])("\nUser creation\n-------------\n\nName: ".concat(this.username, "\nStudent: ").concat(this.student, "\nTeacher: ").concat(this.teacher, "\nAuthor: ").concat(this.author, "\n"));

      if (this.password === this.retypedPassword) {
        var options = {}; // couchdb objects at non-admin creation of 'roles'
        // will need a different approach here

        options.roles = [];

        if (this.student) {
          options.roles.push('student');
        }

        if (this.author) {
          options.roles.push('author');
        }

        if (this.teacher) {
          options.roles.push('teacher');
        }

        remoteDBSignup(this.username, this.password, options).then(function (resp) {
          if (resp.ok) {
            Object(util["log"])("User ".concat(_this2.username, " created"));
            _this2.$store.state.user = _this2.username;
          }
        }).catch(function (err) {
          Object(util["log"])("User ".concat(_this2.username, " NOT created"));
        });
      } else {
        alert('Passwords do not match');
      }

      this.awaitingResponse = false;
    }
  }, {
    key: "buttonStatus",
    get: function get() {
      return {
        color: this.badLoginAttempt ? 'error' : 'success',
        text: this.badLoginAttempt ? 'Try again' : 'Log In'
      };
    }
  }]);

  Object(inherits["a" /* default */])(UserRegistration, _Vue);

  return UserRegistration;
}(vue_runtime_esm["default"]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Emit */])() // tslint:disable-next-line:no-empty
, tslib_es6["b" /* __metadata */]("design:type", Function), tslib_es6["b" /* __metadata */]("design:paramtypes", []), tslib_es6["b" /* __metadata */]("design:returntype", void 0)], UserRegistrationvue_type_script_lang_ts_UserRegistration.prototype, "toggle", null);

UserRegistrationvue_type_script_lang_ts_UserRegistration = tslib_es6["a" /* __decorate */]([vue_class_component_common_default()({})], UserRegistrationvue_type_script_lang_ts_UserRegistration);
/* harmony default export */ var UserRegistrationvue_type_script_lang_ts_ = (UserRegistrationvue_type_script_lang_ts_UserRegistration);
// CONCATENATED MODULE: ./src/components/UserRegistration.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_UserRegistrationvue_type_script_lang_ts_ = (UserRegistrationvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/UserRegistration.vue





/* normalize component */

var UserRegistration_component = Object(componentNormalizer["a" /* default */])(
  components_UserRegistrationvue_type_script_lang_ts_,
  UserRegistrationvue_type_template_id_0a0cb423_render,
  UserRegistrationvue_type_template_id_0a0cb423_staticRenderFns,
  false,
  null,
  null,
  null
  
)

UserRegistration_component.options.__file = "UserRegistration.vue"
/* harmony default export */ var components_UserRegistration = (UserRegistration_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UserChip.vue?vue&type=template&id=49b76984&
var UserChipvue_type_template_id_49b76984_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-badge',{attrs:{"overlap":"","color":"accent"},model:{value:(_vm.hasNewItems),callback:function ($$v) {_vm.hasNewItems=$$v},expression:"hasNewItems"}},[_c('span',{attrs:{"slot":"badge","dark":"","small":""},slot:"badge"},[_vm._v(_vm._s(_vm.items.length))]),_c('v-menu',{attrs:{"offset-y":"","transition":"scale-transition"}},[_c('v-chip',{attrs:{"slot":"activator"},slot:"activator"},[_c('v-avatar',{staticClass:"primary"},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("school")])],1),_vm._v("\n              "+_vm._s(_vm.$store.state.user)+"\n      ")],1),_c('v-list',[_vm._l((_vm.items),function(item){return _c('v-list-tile',{key:item.key,on:{"click":function($event){_vm.dismiss(item)}}},[_c('v-list-tile-title',[_vm._v(_vm._s(item))])],1)}),_c('v-divider'),_c('v-list-tile',{on:{"click":_vm.logout}},[_c('v-list-tile-title',[_vm._v("Log out")])],1)],2)],1)],1)}
var UserChipvue_type_template_id_49b76984_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/UserChip.vue?vue&type=template&id=49b76984&

// EXTERNAL MODULE: ./node_modules/timers-browserify/main.js
var main = __webpack_require__("5118");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UserChip.vue?vue&type=script&lang=ts&













var UserChipvue_type_script_lang_ts_UserChip =
/*#__PURE__*/
function (_Vue) {
  function UserChip() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, UserChip);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UserChip).apply(this, arguments));
    _this.items = ['sample1', 'sample2', 'sample3', 'sample4'];
    _this.checked = false;
    return _this;
  }

  Object(createClass["a" /* default */])(UserChip, [{
    key: "dismiss",
    value: function dismiss(item) {
      var index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
  }, {
    key: "logout",
    value: function logout() {
      var _this2 = this;

      remoteDBLogout().then(function (res) {
        if (res.ok) {
          Object(util["log"])("Logged out: ".concat(res));
          _this2.$store.state.user = '';
          _this2.$store.state.userLoginAndRegistrationContainer = {
            loggedIn: false,
            regDialogOpen: false,
            loginDialogOpen: false
          };
          Object(main["setTimeout"])(function () {
            _this2.$store.state.user = GuestUsername;
          }, 1000);
        }
      });
    }
  }, {
    key: "hasNewItems",
    get: function get() {
      return this.items.length > 0;
    }
  }]);

  Object(inherits["a" /* default */])(UserChip, _Vue);

  return UserChip;
}(vue_runtime_esm["default"]);

UserChipvue_type_script_lang_ts_UserChip = tslib_es6["a" /* __decorate */]([vue_class_component_common_default()({})], UserChipvue_type_script_lang_ts_UserChip);
/* harmony default export */ var UserChipvue_type_script_lang_ts_ = (UserChipvue_type_script_lang_ts_UserChip);
// CONCATENATED MODULE: ./src/components/UserChip.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_UserChipvue_type_script_lang_ts_ = (UserChipvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/UserChip.vue





/* normalize component */

var UserChip_component = Object(componentNormalizer["a" /* default */])(
  components_UserChipvue_type_script_lang_ts_,
  UserChipvue_type_template_id_49b76984_render,
  UserChipvue_type_template_id_49b76984_staticRenderFns,
  false,
  null,
  null,
  null
  
)

UserChip_component.options.__file = "UserChip.vue"
/* harmony default export */ var components_UserChip = (UserChip_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UserLoginAndRegistrationContainer.vue?vue&type=script&lang=ts&













var UserLoginAndRegistrationContainervue_type_script_lang_ts_UserLoginAndRegistrationContainer =
/*#__PURE__*/
function (_Vue) {
  function UserLoginAndRegistrationContainer() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, UserLoginAndRegistrationContainer);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UserLoginAndRegistrationContainer).apply(this, arguments));
    _this.GuestUsername = GuestUsername;
    return _this;
  }

  Object(createClass["a" /* default */])(UserLoginAndRegistrationContainer, [{
    key: "toggle",
    value: function toggle() {
      if (this.regDialog && this.loginDialog) {
        throw new Error("\nRegistration / Login dialogs both activated.\n");
      } else if (this.regDialog === this.loginDialog) {
        throw new Error("\nRegistration / Login dialogs toggled while both were dormant.\n");
      } else {
        this.regDialog = !this.regDialog;
        this.loginDialog = !this.loginDialog;
      }
    }
  }, {
    key: "regDialog",
    get: function get() {
      return this.$store.state.userLoginAndRegistrationContainer.regDialogOpen;
    },
    set: function set(value) {
      this.$store.state.userLoginAndRegistrationContainer.regDialogOpen = value;
    }
  }, {
    key: "loginDialog",
    get: function get() {
      return this.$store.state.userLoginAndRegistrationContainer.loginDialogOpen;
    },
    set: function set(value) {
      this.$store.state.userLoginAndRegistrationContainer.loginDialogOpen = value;
    }
  }]);

  Object(inherits["a" /* default */])(UserLoginAndRegistrationContainer, _Vue);

  return UserLoginAndRegistrationContainer;
}(vue_runtime_esm["default"]);

UserLoginAndRegistrationContainervue_type_script_lang_ts_UserLoginAndRegistrationContainer = tslib_es6["a" /* __decorate */]([vue_class_component_common_default()({
  components: {
    UserLogin: components_UserLogin,
    UserRegistration: components_UserRegistration,
    UserChip: components_UserChip
  }
})], UserLoginAndRegistrationContainervue_type_script_lang_ts_UserLoginAndRegistrationContainer);
/* harmony default export */ var UserLoginAndRegistrationContainervue_type_script_lang_ts_ = (UserLoginAndRegistrationContainervue_type_script_lang_ts_UserLoginAndRegistrationContainer);
// CONCATENATED MODULE: ./src/components/UserLoginAndRegistrationContainer.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_UserLoginAndRegistrationContainervue_type_script_lang_ts_ = (UserLoginAndRegistrationContainervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/UserLoginAndRegistrationContainer.vue?vue&type=style&index=0&id=78ca1878&scoped=true&lang=css&
var UserLoginAndRegistrationContainervue_type_style_index_0_id_78ca1878_scoped_true_lang_css_ = __webpack_require__("cf93");

// CONCATENATED MODULE: ./src/components/UserLoginAndRegistrationContainer.vue






/* normalize component */

var UserLoginAndRegistrationContainer_component = Object(componentNormalizer["a" /* default */])(
  components_UserLoginAndRegistrationContainervue_type_script_lang_ts_,
  UserLoginAndRegistrationContainervue_type_template_id_78ca1878_scoped_true_render,
  UserLoginAndRegistrationContainervue_type_template_id_78ca1878_scoped_true_staticRenderFns,
  false,
  null,
  "78ca1878",
  null
  
)

UserLoginAndRegistrationContainer_component.options.__file = "UserLoginAndRegistrationContainer.vue"
/* harmony default export */ var components_UserLoginAndRegistrationContainer = (UserLoginAndRegistrationContainer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=ts&


/* harmony default export */ var Appvue_type_script_lang_ts_ = ({
  name: 'App',
  components: {
    UserLoginAndRegistrationContainer: components_UserLoginAndRegistrationContainer,
    SnackbarService: components_SnackbarService
  },
  data: function data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'home',
        title: 'Home'
      }, {
        icon: 'school',
        title: 'Study'
      }, {
        icon: 'add_to_queue',
        title: 'Edit'
      }, {
        icon: 'group',
        title: 'Classrooms'
      }, {
        icon: 'book',
        title: 'Courses'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Skuilder'
    };
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_Appvue_type_script_lang_ts_ = (Appvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_ts_,
  Appvue_type_template_id_fd900db0_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

App_component.options.__file = "App.vue"
/* harmony default export */ var App = (App_component.exports);
// EXTERNAL MODULE: ./node_modules/vuetify/dist/vuetify.js
var vuetify = __webpack_require__("ce5b");
var vuetify_default = /*#__PURE__*/__webpack_require__.n(vuetify);

// EXTERNAL MODULE: ./node_modules/vuetify/dist/vuetify.min.css
var vuetify_min = __webpack_require__("bf40");

// CONCATENATED MODULE: ./src/plugins/vuetify.ts



vue_runtime_esm["default"].use(vuetify_default.a, {
  iconfont: 'md'
});
// EXTERNAL MODULE: ./node_modules/register-service-worker/index.js
var register_service_worker = __webpack_require__("9483");

// CONCATENATED MODULE: ./src/registerServiceWorker.ts
/* tslint:disable:no-console */


if (true) {
  Object(register_service_worker["a" /* register */])("".concat("/skuilder/", "service-worker.js"), {
    ready: function ready() {
      console.log('App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB');
    },
    cached: function cached() {
      console.log('Content has been cached for offline use.');
    },
    updated: function updated() {
      console.log('New content is available; please refresh.');
    },
    offline: function offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error: function error(_error) {
      console.error('Error during service worker registration:', _error);
    }
  });
}
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=template&id=44af5612&
var Homevue_type_template_id_44af5612_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('HelloWorld',{attrs:{"msg":"Welcome to Your Vue.js App"}})],1)}
var Homevue_type_template_id_44af5612_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=template&id=44af5612&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloWorld.vue?vue&type=template&id=6dd0edb4&scoped=true&
var HelloWorldvue_type_template_id_6dd0edb4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-slide-y-transition',{attrs:{"mode":"out-in"}},[_c('v-layout',{attrs:{"column":"","align-center":""}},[_c('img',{staticClass:"mb-5",attrs:{"src":__webpack_require__("cf05"),"alt":"Vuetify.js"}}),_c('blockquote',[_vm._v("\n        “First, solve the problem. Then, write the code.”\n        "),_c('footer',[_c('small',[_c('em',[_vm._v("—John Johnson")])])])]),_c('h1',[_vm._v("Hi")])])],1)],1)}
var HelloWorldvue_type_template_id_6dd0edb4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=template&id=6dd0edb4&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloWorld.vue?vue&type=script&lang=ts&

/* harmony default export */ var HelloWorldvue_type_script_lang_ts_ = ({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    UserLogin: components_UserLogin
  }
});
// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_HelloWorldvue_type_script_lang_ts_ = (HelloWorldvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/HelloWorld.vue?vue&type=style&index=0&id=6dd0edb4&scoped=true&lang=css&
var HelloWorldvue_type_style_index_0_id_6dd0edb4_scoped_true_lang_css_ = __webpack_require__("802b");

// CONCATENATED MODULE: ./src/components/HelloWorld.vue






/* normalize component */

var HelloWorld_component = Object(componentNormalizer["a" /* default */])(
  components_HelloWorldvue_type_script_lang_ts_,
  HelloWorldvue_type_template_id_6dd0edb4_scoped_true_render,
  HelloWorldvue_type_template_id_6dd0edb4_scoped_true_staticRenderFns,
  false,
  null,
  "6dd0edb4",
  null
  
)

HelloWorld_component.options.__file = "HelloWorld.vue"
/* harmony default export */ var HelloWorld = (HelloWorld_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=ts&






 // @ is an alias to /src

var Homevue_type_script_lang_ts_Home =
/*#__PURE__*/
function (_Vue) {
  function Home() {
    Object(classCallCheck["a" /* default */])(this, Home);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Home).apply(this, arguments));
  }

  Object(inherits["a" /* default */])(Home, _Vue);

  return Home;
}(vue_property_decorator["d" /* Vue */]);

Homevue_type_script_lang_ts_Home = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    HelloWorld: HelloWorld
  }
})], Homevue_type_script_lang_ts_Home);
/* harmony default export */ var Homevue_type_script_lang_ts_ = (Homevue_type_script_lang_ts_Home);
// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=script&lang=ts&
 /* harmony default export */ var views_Homevue_type_script_lang_ts_ = (Homevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/views/Home.vue





/* normalize component */

var Home_component = Object(componentNormalizer["a" /* default */])(
  views_Homevue_type_script_lang_ts_,
  Homevue_type_template_id_44af5612_render,
  Homevue_type_template_id_44af5612_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Home_component.options.__file = "Home.vue"
/* harmony default export */ var views_Home = (Home_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/About.vue?vue&type=template&id=090bd350&
var Aboutvue_type_template_id_090bd350_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Aboutvue_type_template_id_090bd350_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about"},[_c('h1',[_vm._v("This is an about page")])])}]


// CONCATENATED MODULE: ./src/views/About.vue?vue&type=template&id=090bd350&

// CONCATENATED MODULE: ./src/courses/math/utility/index.ts

/**
 * Returns an integer between (inclusive) the two inputs
 * @param min The smallest possible return value
 * @param max The largest possible return value
 */

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function intValidator(min, max) {
  return {
    instructions: "This input must be an integer between ".concat(min, " and ").concat(max, ", inclusive."),
    test: function test(value) {
      return {
        status: Status.ok,
        msg: ''
      };
    }
  };
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/About.vue?vue&type=script&lang=ts&


/* harmony default export */ var Aboutvue_type_script_lang_ts_ = ({
  // problem: SingleDigitMultiplicationQuestion = new SingleDigitMultiplicationQuestion();
  data: function data() {
    return {
      type: 'Viewable',
      problem: new multiplication_SingleDigitMultiplicationQuestion([{
        a: randomInt(0, 10),
        b: randomInt(0, 10)
      }])
    };
  },
  components: {}
});
// CONCATENATED MODULE: ./src/views/About.vue?vue&type=script&lang=ts&
 /* harmony default export */ var views_Aboutvue_type_script_lang_ts_ = (Aboutvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/views/About.vue





/* normalize component */

var About_component = Object(componentNormalizer["a" /* default */])(
  views_Aboutvue_type_script_lang_ts_,
  Aboutvue_type_template_id_090bd350_render,
  Aboutvue_type_template_id_090bd350_staticRenderFns,
  false,
  null,
  null,
  null
  
)

About_component.options.__file = "About.vue"
/* harmony default export */ var About = (About_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Edit.vue?vue&type=template&id=5f49e5e8&
var Editvue_type_template_id_5f49e5e8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',{staticClass:"headline"},[_vm._v("Editing Course Data")]),_c('v-select',{attrs:{"items":_vm.courseList,"label":"Select a course to contribute to:"},model:{value:(_vm.selectedCourse),callback:function ($$v) {_vm.selectedCourse=$$v},expression:"selectedCourse"}}),(_vm.selectedCourse)?_c('course-editor',{attrs:{"course":_vm.selectedCourse}}):_vm._e()],1)}
var Editvue_type_template_id_5f49e5e8_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Edit.vue?vue&type=template&id=5f49e5e8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/CourseEditor.vue?vue&type=template&id=6ed6b6ec&scoped=true&
var CourseEditorvue_type_template_id_6ed6b6ec_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.course)?_c('div',{staticClass:"courseEditor"},[(_vm.loading)?_c('div',[_c('v-progress-circular',{attrs:{"indeterminate":"","color":"secondary"}})],1):_c('div',[_c('v-btn',{attrs:{"color":"success"},on:{"click":_vm.toggleComponent}},[_vm._v("Content Editing / Component Registration")]),(_vm.editingMode)?_c('div',[_c('div',[_vm._v("\n        "+_vm._s(("There " + (_vm.registeredDataShapes.length !== 1 ? 'are' : 'is') + " " + (_vm.registeredDataShapes.length) + " registered data shape" + (_vm.registeredDataShapes.length === 1 ? '' : 's') + " in the course."))+"\n      ")]),_c('v-select',{attrs:{"label":"Which data type are you adding?","items":_vm.registeredDataShapes.map( function (shape) { return shape.name; } )},model:{value:(_vm.selectedShape),callback:function ($$v) {_vm.selectedShape=$$v},expression:"selectedShape"}}),(_vm.selectedShape !== '')?_c('data-input-form',{attrs:{"dataShape":_vm.getDataShape(_vm.selectedShape),"course":_vm.course}}):_vm._e()],1):_c('component-registration',{attrs:{"course":_vm.course}})],1)]):_vm._e()}
var CourseEditorvue_type_template_id_6ed6b6ec_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Edit/CourseEditor.vue?vue&type=template&id=6ed6b6ec&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ViewableDataInputForm/DataInputForm.vue?vue&type=template&id=639c9189&
var DataInputFormvue_type_template_id_639c9189_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-form',{attrs:{"autocomplete":"off"}},[_vm._l((_vm.dataShape.fields),function(field){return _c('div',{key:_vm.dataShape.fields.indexOf(field),ref:"fieldInputWraps",refInFor:true},[(field.type === _vm.str)?_c('string-input',{attrs:{"store":_vm.store,"field":field}}):(field.type === _vm.num)?_c('number-input',{attrs:{"store":_vm.store,"field":field}}):(field.type === _vm.int)?_c('integer-input',{attrs:{"store":_vm.store,"field":field}}):(field.type === _vm.img)?_c('image-input',{attrs:{"store":_vm.store,"field":field}}):(field.type === _vm.mkd)?_c('markdown-input',{attrs:{"store":_vm.store,"field":field}}):(field.type === _vm.audio)?_c('audio-input',{attrs:{"store":_vm.store,"field":field}}):_vm._e()],1)}),_c('v-btn',{attrs:{"type":"submit","color":"primary","loading":_vm.uploading,"disabled":!_vm.userInputIsValid},nativeOn:{"click":function($event){$event.preventDefault();return _vm.submit($event)}}},[_vm._v("\n        Add data\n        "),_c('v-icon',{attrs:{"right":"","dark":""}},[_vm._v("add_circle")])],1)],2),(_vm.userInputIsValid)?_c('card-browser',{attrs:{"views":_vm.shapeViews,"data":[_vm.previewInput]}}):_vm._e(),_c('data-shape-table',{attrs:{"dataShape":_vm.dataShape,"data":_vm.existingData}})],1)}
var DataInputFormvue_type_template_id_639c9189_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/DataInputForm.vue?vue&type=template&id=639c9189&

// EXTERNAL MODULE: ./src/base-course/Interfaces/DataShape.ts
var DataShape = __webpack_require__("51c3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ViewableDataInputForm/FieldInputs/NumberInput.vue?vue&type=template&id=5ee51a72&
var NumberInputvue_type_template_id_5ee51a72_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-text-field',{ref:"inputField",attrs:{"box":"","type":"number","name":_vm.field.name,"label":_vm.field.name,"rules":_vm.vuetifyRules()},on:{"input":_vm.validate},model:{value:(_vm.store[_vm.field.name]),callback:function ($$v) {_vm.$set(_vm.store, _vm.field.name, $$v)},expression:"store[field.name]"}})}
var NumberInputvue_type_template_id_5ee51a72_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/NumberInput.vue?vue&type=template&id=5ee51a72&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/get.js + 1 modules
var es6_get = __webpack_require__("b8d7");

// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/typeValidators.ts

var okResult = {
  status: Status.ok,
  msg: ''
};
function numberValidator(value) {
  var errorResult = {
    status: Status.error,
    msg: 'This input must be a number'
  };

  if (isNumeric(value)) {
    return okResult;
  } else {
    return errorResult;
  }
}
function integerValidator(value) {
  var errorResult = {
    status: Status.error,
    msg: 'This input must be an integer (..., -2, -1, 0, 1, 2, ...).'
  };

  if (numberValidator(value).status === Status.error) {
    return numberValidator(value);
  }

  if (isInteger(value)) {
    return okResult;
  } else {
    return errorResult;
  }
}

function isNumeric(value) {
  // pilfered from Angular and assumed to be correctish:
  // https://github.com/angular/angular/blob/4.3.x/packages/common/src/pipes/number_pipe.ts#L172
  return !isNaN(value - parseFloat(value));
}

function isInteger(value) {
  return /^[\+,\-]?\s?\d+$/.test(value);
}
// CONCATENATED MODULE: ./src/base-course/Interfaces/ValidatingFunction.ts

function validationFunctionToVuetifyRule(f) {
  return function (value) {
    var result = f(value);

    if (result.status === Status.ok) {
      return true;
    } else {
      return result.msg;
    }
  };
}
// EXTERNAL MODULE: ./src/base-course/Interfaces/FieldDefinition.ts
var FieldDefinition = __webpack_require__("e6b6");

// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInput.ts







var FieldInput_a;






var FieldInput_FieldInput =
/*#__PURE__*/
function (_Vue) {
  function FieldInput() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, FieldInput);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(FieldInput).apply(this, arguments));
    _this.validationStatus = {
      status: Status.ok,
      msg: ''
    };

    _this.userInput = function () {
      return _this.store[_this.field.name];
    };

    _this.validate = function () {
      // 'this' is null if
      // public validate() {...} used instead
      // ...
      var ret = {
        status: Status.ok,
        msg: ''
      };
      var validators = _this.validators;
      var index = 0;

      while (ret.status === Status.ok && index < validators.length) {
        ret = validators[index](_this.userInput());
        index++;
      } // the below works (eg, vue reactivity), but
      // this.validationStatus = ret does NOT


      _this.validationStatus.status = ret.status;
      _this.validationStatus.msg = ret.msg;
      var validationResult = ret.status === Status.ok; // tslint:disable-next-line:no-string-literal

      vue_runtime_esm["default"].set(_this.store['validation'], _this.field.name, validationResult);

      if (!validationResult) {
        // removing from the store object triggers vue reactivity on
        // the DataInputForm. This is a brutal hack, to be replaced
        // if / when I learn about Vuex, and implement better state
        // management on this form
        delete _this.store[_this.field.name];
      }

      return ret;
    };

    return _this;
  }

  Object(createClass["a" /* default */])(FieldInput, [{
    key: "focus",
    value: function focus() {
      this.$refs.inputField.focus();
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.store[this.field.name] = data;
    }
  }, {
    key: "clearData",
    value: function clearData() {
      this.store[this.field.name] = '';
    }
  }, {
    key: "vuetifyRules",
    value: function vuetifyRules() {
      if (this.field.validator) {
        return this.validators.map(function (f) {
          return validationFunctionToVuetifyRule(f);
        });
      } else {
        return [];
      }
    }
  }, {
    key: "validators",
    get: function get() {
      var ret = [];

      if (this.field.validator) {
        ret.push(this.field.validator.test);
      }

      return ret;
    }
  }]);

  Object(inherits["a" /* default */])(FieldInput, _Vue);

  return FieldInput;
}(vue_runtime_esm["default"]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", typeof (FieldInput_a = typeof FieldDefinition["FieldDefinition"] !== "undefined" && FieldDefinition["FieldDefinition"]) === "function" ? FieldInput_a : Object)], FieldInput_FieldInput.prototype, "field", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", Object)], FieldInput_FieldInput.prototype, "store", void 0);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ViewableDataInputForm/FieldInputs/NumberInput.vue?vue&type=script&lang=ts&











var NumberInputvue_type_script_lang_ts_NumberInput =
/*#__PURE__*/
function (_FieldInput) {
  function NumberInput() {
    Object(classCallCheck["a" /* default */])(this, NumberInput);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NumberInput).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(NumberInput, [{
    key: "validators",
    get: function get() {
      var ret = Object(es6_get["a" /* default */])(Object(getPrototypeOf["a" /* default */])(NumberInput.prototype), "validators", this);

      ret.unshift(numberValidator);
      return ret;
    }
  }]);

  Object(inherits["a" /* default */])(NumberInput, _FieldInput);

  return NumberInput;
}(FieldInput_FieldInput);

NumberInputvue_type_script_lang_ts_NumberInput = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({})], NumberInputvue_type_script_lang_ts_NumberInput);
/* harmony default export */ var NumberInputvue_type_script_lang_ts_ = (NumberInputvue_type_script_lang_ts_NumberInput);
// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/NumberInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var FieldInputs_NumberInputvue_type_script_lang_ts_ = (NumberInputvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/NumberInput.vue





/* normalize component */

var NumberInput_component = Object(componentNormalizer["a" /* default */])(
  FieldInputs_NumberInputvue_type_script_lang_ts_,
  NumberInputvue_type_template_id_5ee51a72_render,
  NumberInputvue_type_template_id_5ee51a72_staticRenderFns,
  false,
  null,
  null,
  null
  
)

NumberInput_component.options.__file = "NumberInput.vue"
/* harmony default export */ var FieldInputs_NumberInput = (NumberInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ViewableDataInputForm/FieldInputs/StringInput.vue?vue&type=template&id=85832218&
var StringInputvue_type_template_id_85832218_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-text-field',{ref:"inputField",attrs:{"box":"","name":_vm.field.name,"label":_vm.field.name,"rules":_vm.vuetifyRules()},on:{"input":_vm.validate},model:{value:(_vm.store[_vm.field.name]),callback:function ($$v) {_vm.$set(_vm.store, _vm.field.name, $$v)},expression:"store[field.name]"}})}
var StringInputvue_type_template_id_85832218_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/StringInput.vue?vue&type=template&id=85832218&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ViewableDataInputForm/FieldInputs/StringInput.vue?vue&type=script&lang=ts&








var StringInputvue_type_script_lang_ts_StringInput =
/*#__PURE__*/
function (_FieldInput) {
  function StringInput() {
    Object(classCallCheck["a" /* default */])(this, StringInput);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(StringInput).apply(this, arguments));
  }

  Object(inherits["a" /* default */])(StringInput, _FieldInput);

  return StringInput;
}(FieldInput_FieldInput);

StringInputvue_type_script_lang_ts_StringInput = tslib_es6["a" /* __decorate */]([vue_property_decorator["a" /* Component */]], StringInputvue_type_script_lang_ts_StringInput);
/* harmony default export */ var StringInputvue_type_script_lang_ts_ = (StringInputvue_type_script_lang_ts_StringInput);
// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/StringInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var FieldInputs_StringInputvue_type_script_lang_ts_ = (StringInputvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/StringInput.vue





/* normalize component */

var StringInput_component = Object(componentNormalizer["a" /* default */])(
  FieldInputs_StringInputvue_type_script_lang_ts_,
  StringInputvue_type_template_id_85832218_render,
  StringInputvue_type_template_id_85832218_staticRenderFns,
  false,
  null,
  null,
  null
  
)

StringInput_component.options.__file = "StringInput.vue"
/* harmony default export */ var FieldInputs_StringInput = (StringInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ViewableDataInputForm/FieldInputs/IntegerInput.vue?vue&type=template&id=5aba4582&
var IntegerInputvue_type_template_id_5aba4582_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-text-field',{ref:"inputField",attrs:{"box":"","type":"number","name":_vm.field.name,"label":_vm.field.name,"rules":_vm.vuetifyRules()},on:{"input":_vm.validate},model:{value:(_vm.store[_vm.field.name]),callback:function ($$v) {_vm.$set(_vm.store, _vm.field.name, $$v)},expression:"store[field.name]"}})}
var IntegerInputvue_type_template_id_5aba4582_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/IntegerInput.vue?vue&type=template&id=5aba4582&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ViewableDataInputForm/FieldInputs/IntegerInput.vue?vue&type=script&lang=ts&












var IntegerInputvue_type_script_lang_ts_IntegerInput =
/*#__PURE__*/
function (_FieldInput) {
  function IntegerInput() {
    Object(classCallCheck["a" /* default */])(this, IntegerInput);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(IntegerInput).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(IntegerInput, [{
    key: "validators",
    get: function get() {
      var ret = Object(es6_get["a" /* default */])(Object(getPrototypeOf["a" /* default */])(IntegerInput.prototype), "validators", this);

      ret.unshift(integerValidator);
      Object(util["log"])("validators for ".concat(this.field.name, " has ").concat(ret.length, " entries"));
      return ret;
    }
  }]);

  Object(inherits["a" /* default */])(IntegerInput, _FieldInput);

  return IntegerInput;
}(FieldInput_FieldInput);

IntegerInputvue_type_script_lang_ts_IntegerInput = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({})], IntegerInputvue_type_script_lang_ts_IntegerInput);
/* harmony default export */ var IntegerInputvue_type_script_lang_ts_ = (IntegerInputvue_type_script_lang_ts_IntegerInput);
// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/IntegerInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var FieldInputs_IntegerInputvue_type_script_lang_ts_ = (IntegerInputvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/IntegerInput.vue





/* normalize component */

var IntegerInput_component = Object(componentNormalizer["a" /* default */])(
  FieldInputs_IntegerInputvue_type_script_lang_ts_,
  IntegerInputvue_type_template_id_5aba4582_render,
  IntegerInputvue_type_template_id_5aba4582_staticRenderFns,
  false,
  null,
  null,
  null
  
)

IntegerInput_component.options.__file = "IntegerInput.vue"
/* harmony default export */ var FieldInputs_IntegerInput = (IntegerInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ViewableDataInputForm/FieldInputs/ImageInput.vue?vue&type=template&id=33410ea9&scoped=true&
var ImageInputvue_type_template_id_33410ea9_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{attrs:{"for":_vm.field.name}},[_vm._v(_vm._s(_vm.field.name)+": ")]),_c('div',{on:{"drop":_vm.dropHandler,"dragover":_vm.dragHandler,"click":_vm.dragHandler}},[_vm._v("\n        Drop a file here...\n      "),_c('input',{ref:"inputField",class:_vm.validationStatus.status,attrs:{"id":_vm.blobInputID,"name":_vm.field.name,"type":"file"},on:{"change":_vm.processInput}})])])}
var ImageInputvue_type_template_id_33410ea9_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/ImageInput.vue?vue&type=template&id=33410ea9&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ViewableDataInputForm/FieldInputs/ImageInput.vue?vue&type=script&lang=ts&












var ImageInputvue_type_script_lang_ts_ImageInput =
/*#__PURE__*/
function (_FieldInput) {
  function ImageInput() {
    Object(classCallCheck["a" /* default */])(this, ImageInput);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ImageInput).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(ImageInput, [{
    key: "dropHandler",
    value: function dropHandler(ev) {
      if (ev) {
        ev.preventDefault(); // const item = ev.dataTransfer.items[0];
        // const img = item.getAsFile()!;
        // this.setData({
        //   content_type: img.type,
        //   data: img.slice()
        // });
        // this.validate();

        var imgURL = ev.dataTransfer.getData('text');
        this.fetchImg(imgURL);
        Object(util["log"])("Dropped: ".concat(imgURL)); //   this.removeDragData(ev as DragEvent);
      } else {
        Object(util["log"])('no event');
      }
    }
  }, {
    key: "dragHandler",
    value: function dragHandler(ev) {
      if (ev) {
        ev.preventDefault();
        Object(util["log"])("Dragging... ".concat(JSON.stringify(ev)));
      } else {
        Object(util["log"])('no event');
      }
    }
  }, {
    key: "getValidators",
    value: function getValidators() {
      if (this.field.validator) {
        return [this.field.validator.test];
      } else {
        return [];
      }
    }
  }, {
    key: "removeDragData",
    value: function removeDragData(ev) {
      if (ev.dataTransfer.items) {
        ev.dataTransfer.items.clear();
      } else {
        ev.dataTransfer.clearData();
      }
    }
  }, {
    key: "fetchImg",
    value: function () {
      var _fetchImg = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(url) {
        var img, blob, file;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(url, {
                  'mode': 'no-cors',
                  'content-type': 'image'
                });

              case 2:
                img = _context.sent;
                _context.next = 5;
                return img.body.blob();

              case 5:
                blob = _context.sent;
                file = new File(blob, '');
                this.setData({
                  content_type: file.type,
                  data: file.slice()
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function fetchImg(_x) {
        return _fetchImg.apply(this, arguments);
      };
    }()
  }, {
    key: "processInput",
    value: function () {
      var _processInput = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2() {
        var file;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.blobInputElement.files) {
                  file = this.blobInputElement.files[0];
                  Object(util["log"])("\nProcessing input file:\n\nFilename: ".concat(file.name, "\nFile size: ").concat(file.size, "\nFile type: ").concat(file.type, "\n"));
                  this.setData({
                    content_type: file.type,
                    data: file.slice()
                  });
                  this.validate();
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function processInput() {
        return _processInput.apply(this, arguments);
      };
    }()
  }, {
    key: "blobHandler",
    value: function blobHandler(blob) {
      if (blob === null) {
        alert('nullBlob');
      } else {
        this.store[this.field.name] = {
          content_type: 'image/png',
          data: blob
        };
        this.validate();
      }
    }
  }, {
    key: "blobInputID",
    get: function get() {
      return 'blobInput' + this.field.name;
    }
  }, {
    key: "blobInputElement",
    get: function get() {
      return document.getElementById(this.blobInputID);
    }
  }]);

  Object(inherits["a" /* default */])(ImageInput, _FieldInput);

  return ImageInput;
}(FieldInput_FieldInput);

ImageInputvue_type_script_lang_ts_ImageInput = tslib_es6["a" /* __decorate */]([vue_property_decorator["a" /* Component */]], ImageInputvue_type_script_lang_ts_ImageInput);
/* harmony default export */ var ImageInputvue_type_script_lang_ts_ = (ImageInputvue_type_script_lang_ts_ImageInput);
// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/ImageInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var FieldInputs_ImageInputvue_type_script_lang_ts_ = (ImageInputvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/ImageInput.vue?vue&type=style&index=0&id=33410ea9&scoped=true&lang=css&
var ImageInputvue_type_style_index_0_id_33410ea9_scoped_true_lang_css_ = __webpack_require__("02d5");

// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/ImageInput.vue






/* normalize component */

var ImageInput_component = Object(componentNormalizer["a" /* default */])(
  FieldInputs_ImageInputvue_type_script_lang_ts_,
  ImageInputvue_type_template_id_33410ea9_scoped_true_render,
  ImageInputvue_type_template_id_33410ea9_scoped_true_staticRenderFns,
  false,
  null,
  "33410ea9",
  null
  
)

ImageInput_component.options.__file = "ImageInput.vue"
/* harmony default export */ var FieldInputs_ImageInput = (ImageInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ViewableDataInputForm/FieldInputs/AudioInput.vue?vue&type=template&id=38feaa1e&scoped=true&
var AudioInputvue_type_template_id_38feaa1e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{attrs:{"for":_vm.field.name}},[_vm._v(_vm._s(_vm.field.name)+": ")]),_c('div',[_c('input',{ref:"inputField",class:_vm.validationStatus.status,attrs:{"id":_vm.blobInputID,"name":_vm.field.name,"type":"file"},on:{"change":_vm.processInput}}),_vm._v("\n      (todo)"),_c('v-icon',[_vm._v("mic")]),_c('v-icon',[_vm._v("play_arrow")])],1)])}
var AudioInputvue_type_template_id_38feaa1e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/AudioInput.vue?vue&type=template&id=38feaa1e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ViewableDataInputForm/FieldInputs/AudioInput.vue?vue&type=script&lang=ts&












var AudioInputvue_type_script_lang_ts_AudioInput =
/*#__PURE__*/
function (_FieldInput) {
  function AudioInput() {
    Object(classCallCheck["a" /* default */])(this, AudioInput);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AudioInput).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(AudioInput, [{
    key: "getValidators",
    value: function getValidators() {
      if (this.field.validator) {
        return [this.field.validator.test];
      } else {
        return [];
      }
    }
  }, {
    key: "processInput",
    value: function () {
      var _processInput = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var file;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.blobInputElement.files) {
                  file = this.blobInputElement.files[0];
                  Object(util["log"])("\nProcessing input file:\nFilename: ".concat(file.name, "\nFile size: ").concat(file.size, "\nFile type: ").concat(file.type, "\n"));
                  this.setData({
                    content_type: file.type,
                    data: file.slice()
                  });
                  this.validate();
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function processInput() {
        return _processInput.apply(this, arguments);
      };
    }()
  }, {
    key: "blobHandler",
    value: function blobHandler(blob) {
      if (blob === null) {
        alert('nullBlob');
      } else {
        this.store[this.field.name] = {
          content_type: 'image/png',
          data: blob
        };
        this.validate();
      }
    }
  }, {
    key: "blobInputID",
    get: function get() {
      return 'blobInput' + this.field.name;
    }
  }, {
    key: "blobInputElement",
    get: function get() {
      return document.getElementById(this.blobInputID);
    }
  }]);

  Object(inherits["a" /* default */])(AudioInput, _FieldInput);

  return AudioInput;
}(FieldInput_FieldInput);

AudioInputvue_type_script_lang_ts_AudioInput = tslib_es6["a" /* __decorate */]([vue_property_decorator["a" /* Component */]], AudioInputvue_type_script_lang_ts_AudioInput);
/* harmony default export */ var AudioInputvue_type_script_lang_ts_ = (AudioInputvue_type_script_lang_ts_AudioInput);
// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/AudioInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var FieldInputs_AudioInputvue_type_script_lang_ts_ = (AudioInputvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/AudioInput.vue?vue&type=style&index=0&id=38feaa1e&scoped=true&lang=css&
var AudioInputvue_type_style_index_0_id_38feaa1e_scoped_true_lang_css_ = __webpack_require__("e135");

// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/AudioInput.vue






/* normalize component */

var AudioInput_component = Object(componentNormalizer["a" /* default */])(
  FieldInputs_AudioInputvue_type_script_lang_ts_,
  AudioInputvue_type_template_id_38feaa1e_scoped_true_render,
  AudioInputvue_type_template_id_38feaa1e_scoped_true_staticRenderFns,
  false,
  null,
  "38feaa1e",
  null
  
)

AudioInput_component.options.__file = "AudioInput.vue"
/* harmony default export */ var FieldInputs_AudioInput = (AudioInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ViewableDataInputForm/FieldInputs/MarkdownInput.vue?vue&type=template&id=27ac2cee&scoped=true&
var MarkdownInputvue_type_template_id_27ac2cee_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.store[_vm.field.name]),expression:"store[field.name]"}],ref:"inputField",attrs:{"name":_vm.field.name,"label":_vm.field.name,"rules":_vm.vuetifyRules()},domProps:{"value":(_vm.store[_vm.field.name])},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.store, _vm.field.name, $event.target.value)},_vm.validate]}})}
var MarkdownInputvue_type_template_id_27ac2cee_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/MarkdownInput.vue?vue&type=template&id=27ac2cee&scoped=true&

// EXTERNAL MODULE: ./node_modules/simplemde/src/js/simplemde.js
var simplemde = __webpack_require__("ebfb");
var simplemde_default = /*#__PURE__*/__webpack_require__.n(simplemde);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ViewableDataInputForm/FieldInputs/MarkdownInput.vue?vue&type=script&lang=ts&











var MarkdownInputvue_type_script_lang_ts_MarkdownInput =
/*#__PURE__*/
function (_FieldInput) {
  function MarkdownInput() {
    Object(classCallCheck["a" /* default */])(this, MarkdownInput);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MarkdownInput).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(MarkdownInput, [{
    key: "mounted",
    value: function mounted() {
      var editor = new simplemde_default.a({
        element: this.$refs.inputField,
        status: false,
        placeholder: this.field.name
      });
      this.$refs.inputField.onkeydown = this.validate;
    }
  }, {
    key: "validators",
    get: function get() {
      var ret = Object(es6_get["a" /* default */])(Object(getPrototypeOf["a" /* default */])(MarkdownInput.prototype), "validators", this);

      return ret;
    }
  }]);

  Object(inherits["a" /* default */])(MarkdownInput, _FieldInput);

  return MarkdownInput;
}(FieldInput_FieldInput);

MarkdownInputvue_type_script_lang_ts_MarkdownInput = tslib_es6["a" /* __decorate */]([vue_property_decorator["a" /* Component */]], MarkdownInputvue_type_script_lang_ts_MarkdownInput);
/* harmony default export */ var MarkdownInputvue_type_script_lang_ts_ = (MarkdownInputvue_type_script_lang_ts_MarkdownInput);
// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/MarkdownInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var FieldInputs_MarkdownInputvue_type_script_lang_ts_ = (MarkdownInputvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/MarkdownInput.vue?vue&type=style&index=0&id=27ac2cee&scoped=true&lang=css&
var MarkdownInputvue_type_style_index_0_id_27ac2cee_scoped_true_lang_css_ = __webpack_require__("8a23");

// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/FieldInputs/MarkdownInput.vue






/* normalize component */

var MarkdownInput_component = Object(componentNormalizer["a" /* default */])(
  FieldInputs_MarkdownInputvue_type_script_lang_ts_,
  MarkdownInputvue_type_template_id_27ac2cee_scoped_true_render,
  MarkdownInputvue_type_template_id_27ac2cee_scoped_true_staticRenderFns,
  false,
  null,
  "27ac2cee",
  null
  
)

MarkdownInput_component.options.__file = "MarkdownInput.vue"
/* harmony default export */ var FieldInputs_MarkdownInput = (MarkdownInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/CardBrowser.vue?vue&type=template&id=376cbc01&
var CardBrowservue_type_template_id_376cbc01_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"column":"","wrap":"","align-center":"","justify-center":""}},[_c('div',[_c('v-btn',{attrs:{"icon":"","color":"accent"},on:{"click":_vm.decrementView}},[_c('v-icon',[_vm._v("chevron_left")])],1),_vm._v("\n        "+_vm._s(_vm.views[_vm.viewIndex].name)+"\n        "),_c('v-btn',{attrs:{"icon":"","color":"accent"},on:{"click":_vm.incrementView}},[_c('v-icon',[_vm._v("chevron_right")])],1)],1),_c('br'),_c('br'),_c('CardViewer',{attrs:{"view":_vm.views[_vm.viewIndex],"data":_vm.data}})],1)}
var CardBrowservue_type_template_id_376cbc01_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Edit/CardBrowser.vue?vue&type=template&id=376cbc01&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Study/CardViewer.vue?vue&type=template&id=10713b4e&scoped=true&
var CardViewervue_type_template_id_10713b4e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"elevation-12"},[_c('transition',{attrs:{"name":"component-fade","mode":"out-in"}},[_c(_vm.view,{key:_vm.card_id + '-' + _vm.sessionOrder,tag:"component",staticClass:"cardView",attrs:{"data":_vm.data},on:{"emitResponse":function($event){_vm.processResponse($event)}}})],1)],1)}
var CardViewervue_type_template_id_10713b4e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Study/CardViewer.vue?vue&type=template&id=10713b4e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Study/CardViewer.vue?vue&type=script&lang=ts&







var CardViewervue_type_script_lang_ts_a, _b, _c, _d;







var CardViewervue_type_script_lang_ts_CardViewer =
/*#__PURE__*/
function (_Vue) {
  function CardViewer() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, CardViewer);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(CardViewer).apply(this, arguments));
    _this.sessionOrder = 0;
    _this.card_id = '';
    return _this;
  }

  Object(createClass["a" /* default */])(CardViewer, [{
    key: "processResponse",
    value: function processResponse(r) {
      Object(util["log"])("\n        Card was displayed at ".concat(r.timeStamp, "\n        User spent ").concat(r.timeSpent, " milliseconds with the card.\n        "));
    }
  }]);

  Object(inherits["a" /* default */])(CardViewer, _Vue);

  return CardViewer;
}(vue_runtime_esm["default"]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])({
  required: false
}), tslib_es6["b" /* __metadata */]("design:type", Number)], CardViewervue_type_script_lang_ts_CardViewer.prototype, "sessionOrder", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])({
  required: false
}), tslib_es6["b" /* __metadata */]("design:type", typeof (_b = typeof PouchDB !== "undefined" && (CardViewervue_type_script_lang_ts_a = PouchDB.Core) !== void 0 && CardViewervue_type_script_lang_ts_a.DocumentId) === "function" ? _b : Object)], CardViewervue_type_script_lang_ts_CardViewer.prototype, "card_id", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", typeof (_c = typeof vue_runtime_esm["VueConstructor"] !== "undefined" && vue_runtime_esm["VueConstructor"]) === "function" ? _c : Object)], CardViewervue_type_script_lang_ts_CardViewer.prototype, "view", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", Array)], CardViewervue_type_script_lang_ts_CardViewer.prototype, "data", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["b" /* Emit */])('emitResponse'), tslib_es6["b" /* __metadata */]("design:type", Function), tslib_es6["b" /* __metadata */]("design:paramtypes", [typeof (_d = typeof /* Cannot get final name for export "CardRecord" in "./src/db/types.ts" (known exports: DocType isQuestionRecord, known reexports: ) */ undefined !== "undefined" && /* Cannot get final name for export "CardRecord" in "./src/db/types.ts" (known exports: DocType isQuestionRecord, known reexports: ) */ undefined) === "function" ? _d : Object]), tslib_es6["b" /* __metadata */]("design:returntype", void 0)], CardViewervue_type_script_lang_ts_CardViewer.prototype, "processResponse", null);

CardViewervue_type_script_lang_ts_CardViewer = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: src_courses.allViews()
})], CardViewervue_type_script_lang_ts_CardViewer);
/* harmony default export */ var CardViewervue_type_script_lang_ts_ = (CardViewervue_type_script_lang_ts_CardViewer);
// CONCATENATED MODULE: ./src/components/Study/CardViewer.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Study_CardViewervue_type_script_lang_ts_ = (CardViewervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Study/CardViewer.vue?vue&type=style&index=0&id=10713b4e&scoped=true&lang=css&
var CardViewervue_type_style_index_0_id_10713b4e_scoped_true_lang_css_ = __webpack_require__("2d2e");

// CONCATENATED MODULE: ./src/components/Study/CardViewer.vue






/* normalize component */

var CardViewer_component = Object(componentNormalizer["a" /* default */])(
  Study_CardViewervue_type_script_lang_ts_,
  CardViewervue_type_template_id_10713b4e_scoped_true_render,
  CardViewervue_type_template_id_10713b4e_scoped_true_staticRenderFns,
  false,
  null,
  "10713b4e",
  null
  
)

CardViewer_component.options.__file = "CardViewer.vue"
/* harmony default export */ var Study_CardViewer = (CardViewer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/CardBrowser.vue?vue&type=script&lang=ts&







var CardBrowservue_type_script_lang_ts_a;





var CardBrowservue_type_script_lang_ts_CardBrowser =
/*#__PURE__*/
function (_Vue) {
  function CardBrowser() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, CardBrowser);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(CardBrowser).apply(this, arguments));
    _this.viewIndex = 0;
    return _this;
  }

  Object(createClass["a" /* default */])(CardBrowser, [{
    key: "incrementView",
    value: function incrementView() {
      this.viewIndex++;
      this.viewIndex = (this.viewIndex + this.views.length) % this.views.length;
    }
  }, {
    key: "decrementView",
    value: function decrementView() {
      this.viewIndex--;
      this.viewIndex = (this.viewIndex + this.views.length) % this.views.length;
    }
  }]);

  Object(inherits["a" /* default */])(CardBrowser, _Vue);

  return CardBrowser;
}(vue_runtime_esm["default"]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", typeof (CardBrowservue_type_script_lang_ts_a = typeof Array !== "undefined" && Array) === "function" ? CardBrowservue_type_script_lang_ts_a : Object)], CardBrowservue_type_script_lang_ts_CardBrowser.prototype, "views", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", Array)], CardBrowservue_type_script_lang_ts_CardBrowser.prototype, "data", void 0);

CardBrowservue_type_script_lang_ts_CardBrowser = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    CardViewer: Study_CardViewer
  }
})], CardBrowservue_type_script_lang_ts_CardBrowser);
/* harmony default export */ var CardBrowservue_type_script_lang_ts_ = (CardBrowservue_type_script_lang_ts_CardBrowser);
// CONCATENATED MODULE: ./src/components/Edit/CardBrowser.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Edit_CardBrowservue_type_script_lang_ts_ = (CardBrowservue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/Edit/CardBrowser.vue





/* normalize component */

var CardBrowser_component = Object(componentNormalizer["a" /* default */])(
  Edit_CardBrowservue_type_script_lang_ts_,
  CardBrowservue_type_template_id_376cbc01_render,
  CardBrowservue_type_template_id_376cbc01_staticRenderFns,
  false,
  null,
  null,
  null
  
)

CardBrowser_component.options.__file = "CardBrowser.vue"
/* harmony default export */ var Edit_CardBrowser = (CardBrowser_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/DataTable/DataShapeTable.vue?vue&type=template&id=230a3638&scoped=true&
var DataShapeTablevue_type_template_id_230a3638_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',[_c('DataShapeTableHeader',{attrs:{"dataShape":_vm.dataShape}}),_vm._l((_vm.data),function(row){return _c('DataShapeTableRow',{key:_vm.data.indexOf(row),attrs:{"data":row,"dataShape":_vm.dataShape}})})],2)}
var DataShapeTablevue_type_template_id_230a3638_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Edit/DataTable/DataShapeTable.vue?vue&type=template&id=230a3638&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/DataTable/DataShapeTableHeader.vue?vue&type=template&id=4a6b5af4&scoped=true&
var DataShapeTableHeadervue_type_template_id_4a6b5af4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',_vm._l((_vm.dataShape.fields),function(field){return _c('th',{key:_vm.dataShape.fields.indexOf(field)},[_vm._v("\n        "+_vm._s(field.name)+"\n    ")])}))}
var DataShapeTableHeadervue_type_template_id_4a6b5af4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Edit/DataTable/DataShapeTableHeader.vue?vue&type=template&id=4a6b5af4&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/DataTable/DataShapeTableHeader.vue?vue&type=script&lang=ts&






var DataShapeTableHeadervue_type_script_lang_ts_a;



 // import Courses from '@/courses';
// import { getDataShapes } from '@/db';
// import DataInputForm from './ViewableDataInputForm/DataInputForm.vue';

var DataShapeTableHeadervue_type_script_lang_ts_DataShapeTableHeader =
/*#__PURE__*/
function (_Vue) {
  function DataShapeTableHeader() {
    Object(classCallCheck["a" /* default */])(this, DataShapeTableHeader);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DataShapeTableHeader).apply(this, arguments));
  }

  Object(inherits["a" /* default */])(DataShapeTableHeader, _Vue);

  return DataShapeTableHeader;
}(vue_runtime_esm["default"]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", typeof (DataShapeTableHeadervue_type_script_lang_ts_a = typeof DataShape["DataShape"] !== "undefined" && DataShape["DataShape"]) === "function" ? DataShapeTableHeadervue_type_script_lang_ts_a : Object)], DataShapeTableHeadervue_type_script_lang_ts_DataShapeTableHeader.prototype, "dataShape", void 0);

DataShapeTableHeadervue_type_script_lang_ts_DataShapeTableHeader = tslib_es6["a" /* __decorate */]([vue_property_decorator["a" /* Component */]], DataShapeTableHeadervue_type_script_lang_ts_DataShapeTableHeader);
/* harmony default export */ var DataShapeTableHeadervue_type_script_lang_ts_ = (DataShapeTableHeadervue_type_script_lang_ts_DataShapeTableHeader);
// CONCATENATED MODULE: ./src/components/Edit/DataTable/DataShapeTableHeader.vue?vue&type=script&lang=ts&
 /* harmony default export */ var DataTable_DataShapeTableHeadervue_type_script_lang_ts_ = (DataShapeTableHeadervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Edit/DataTable/DataShapeTableHeader.vue?vue&type=style&index=0&id=4a6b5af4&scoped=true&lang=css&
var DataShapeTableHeadervue_type_style_index_0_id_4a6b5af4_scoped_true_lang_css_ = __webpack_require__("1e10");

// CONCATENATED MODULE: ./src/components/Edit/DataTable/DataShapeTableHeader.vue






/* normalize component */

var DataShapeTableHeader_component = Object(componentNormalizer["a" /* default */])(
  DataTable_DataShapeTableHeadervue_type_script_lang_ts_,
  DataShapeTableHeadervue_type_template_id_4a6b5af4_scoped_true_render,
  DataShapeTableHeadervue_type_template_id_4a6b5af4_scoped_true_staticRenderFns,
  false,
  null,
  "4a6b5af4",
  null
  
)

DataShapeTableHeader_component.options.__file = "DataShapeTableHeader.vue"
/* harmony default export */ var DataTable_DataShapeTableHeader = (DataShapeTableHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/DataTable/DataShapeTableRow.vue?vue&type=template&id=137b6f58&scoped=true&
var DataShapeTableRowvue_type_template_id_137b6f58_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',_vm._l((_vm.dataShape.fields),function(field){return _c('td',{key:_vm.dataShape.fields.indexOf(field)},[_vm._v("\n      "+_vm._s(_vm.data[field.name])+"\n    ")])}))}
var DataShapeTableRowvue_type_template_id_137b6f58_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Edit/DataTable/DataShapeTableRow.vue?vue&type=template&id=137b6f58&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/DataTable/DataShapeTableRow.vue?vue&type=script&lang=ts&






var DataShapeTableRowvue_type_script_lang_ts_a;





var DataShapeTableRowvue_type_script_lang_ts_DataShapeTableRows =
/*#__PURE__*/
function (_Vue) {
  function DataShapeTableRows() {
    Object(classCallCheck["a" /* default */])(this, DataShapeTableRows);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DataShapeTableRows).apply(this, arguments));
  }

  Object(inherits["a" /* default */])(DataShapeTableRows, _Vue);

  return DataShapeTableRows;
}(vue_runtime_esm["default"]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", typeof (DataShapeTableRowvue_type_script_lang_ts_a = typeof DataShape["DataShape"] !== "undefined" && DataShape["DataShape"]) === "function" ? DataShapeTableRowvue_type_script_lang_ts_a : Object)], DataShapeTableRowvue_type_script_lang_ts_DataShapeTableRows.prototype, "dataShape", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", Object)], DataShapeTableRowvue_type_script_lang_ts_DataShapeTableRows.prototype, "data", void 0);

DataShapeTableRowvue_type_script_lang_ts_DataShapeTableRows = tslib_es6["a" /* __decorate */]([vue_property_decorator["a" /* Component */]], DataShapeTableRowvue_type_script_lang_ts_DataShapeTableRows);
/* harmony default export */ var DataShapeTableRowvue_type_script_lang_ts_ = (DataShapeTableRowvue_type_script_lang_ts_DataShapeTableRows);
// CONCATENATED MODULE: ./src/components/Edit/DataTable/DataShapeTableRow.vue?vue&type=script&lang=ts&
 /* harmony default export */ var DataTable_DataShapeTableRowvue_type_script_lang_ts_ = (DataShapeTableRowvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Edit/DataTable/DataShapeTableRow.vue?vue&type=style&index=0&id=137b6f58&scoped=true&lang=css&
var DataShapeTableRowvue_type_style_index_0_id_137b6f58_scoped_true_lang_css_ = __webpack_require__("76c9");

// CONCATENATED MODULE: ./src/components/Edit/DataTable/DataShapeTableRow.vue






/* normalize component */

var DataShapeTableRow_component = Object(componentNormalizer["a" /* default */])(
  DataTable_DataShapeTableRowvue_type_script_lang_ts_,
  DataShapeTableRowvue_type_template_id_137b6f58_scoped_true_render,
  DataShapeTableRowvue_type_template_id_137b6f58_scoped_true_staticRenderFns,
  false,
  null,
  "137b6f58",
  null
  
)

DataShapeTableRow_component.options.__file = "DataShapeTableRow.vue"
/* harmony default export */ var DataShapeTableRow = (DataShapeTableRow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/DataTable/DataShapeTable.vue?vue&type=script&lang=ts&






var DataShapeTablevue_type_script_lang_ts_a;







var DataShapeTablevue_type_script_lang_ts_DataShapeTable =
/*#__PURE__*/
function (_Vue) {
  function DataShapeTable() {
    Object(classCallCheck["a" /* default */])(this, DataShapeTable);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DataShapeTable).apply(this, arguments));
  }

  Object(inherits["a" /* default */])(DataShapeTable, _Vue);

  return DataShapeTable;
}(vue_runtime_esm["default"]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", typeof (DataShapeTablevue_type_script_lang_ts_a = typeof DataShape["DataShape"] !== "undefined" && DataShape["DataShape"]) === "function" ? DataShapeTablevue_type_script_lang_ts_a : Object)], DataShapeTablevue_type_script_lang_ts_DataShapeTable.prototype, "dataShape", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", Array)], DataShapeTablevue_type_script_lang_ts_DataShapeTable.prototype, "data", void 0);

DataShapeTablevue_type_script_lang_ts_DataShapeTable = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    DataShapeTableHeader: DataTable_DataShapeTableHeader,
    DataShapeTableRow: DataShapeTableRow
  }
})], DataShapeTablevue_type_script_lang_ts_DataShapeTable);
/* harmony default export */ var DataShapeTablevue_type_script_lang_ts_ = (DataShapeTablevue_type_script_lang_ts_DataShapeTable);
// CONCATENATED MODULE: ./src/components/Edit/DataTable/DataShapeTable.vue?vue&type=script&lang=ts&
 /* harmony default export */ var DataTable_DataShapeTablevue_type_script_lang_ts_ = (DataShapeTablevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Edit/DataTable/DataShapeTable.vue?vue&type=style&index=0&id=230a3638&scoped=true&lang=css&
var DataShapeTablevue_type_style_index_0_id_230a3638_scoped_true_lang_css_ = __webpack_require__("3e8b");

// CONCATENATED MODULE: ./src/components/Edit/DataTable/DataShapeTable.vue






/* normalize component */

var DataShapeTable_component = Object(componentNormalizer["a" /* default */])(
  DataTable_DataShapeTablevue_type_script_lang_ts_,
  DataShapeTablevue_type_template_id_230a3638_scoped_true_render,
  DataShapeTablevue_type_template_id_230a3638_scoped_true_staticRenderFns,
  false,
  null,
  "230a3638",
  null
  
)

DataShapeTable_component.options.__file = "DataShapeTable.vue"
/* harmony default export */ var DataTable_DataShapeTable = (DataShapeTable_component.exports);
// CONCATENATED MODULE: ./src/base-course/Interfaces/ViewData.ts
function displayableDataToViewData(data) {
  var ret = {};
  data.data.forEach(function (field) {
    ret[field.name] = field.data;
  });

  if (data._attachments) {
    Object.getOwnPropertyNames(data._attachments).forEach(function (attachment) {
      // this 2nd check shouldn't be necessary, but TS is insisting
      if (data._attachments) {
        ret[attachment] = data._attachments[attachment].data;
      }
    });
  }

  return ret;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ViewableDataInputForm/DataInputForm.vue?vue&type=script&lang=ts&







var DataInputFormvue_type_script_lang_ts_a, DataInputFormvue_type_script_lang_ts_b, DataInputFormvue_type_script_lang_ts_c;



















var DataInputFormvue_type_script_lang_ts_DataInputForm =
/*#__PURE__*/
function (_Vue) {
  function DataInputForm() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, DataInputForm);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(DataInputForm).apply(this, arguments));
    _this.existingData = [];
    _this.fields = [];
    _this.store = {
      validation: {},
      convertedInput: {},
      previewInput: {}
    }; // todo: see about typing this

    _this.uploading = false;
    _this.str = FieldType.STRING;
    _this.int = FieldType.INT;
    _this.num = FieldType.NUMBER;
    _this.img = FieldType.IMAGE;
    _this.mkd = FieldType.MARKDOWN;
    _this.audio = FieldType.AUDIO;
    return _this;
  }

  Object(createClass["a" /* default */])(DataInputForm, [{
    key: "onDataShapeChange",
    value: function onDataShapeChange(value, old) {
      // this.getExistingNotesFromDB();
      this.getImplementingViews();
    }
  }, {
    key: "storeChange",
    value: function storeChange(v, old) {
      this.convertInput();
    }
  }, {
    key: "created",
    value: function created() {
      this.onDataShapeChange();
    }
  }, {
    key: "convertInput",
    value: function convertInput() {
      var _this2 = this;

      this.dataShape.fields.forEach(function (fieldDef) {
        _this2.store.convertedInput[fieldDef.name] = fieldConverters[fieldDef.type].databaseConverter(_this2.store[fieldDef.name]);
        _this2.store.previewInput[fieldDef.name] = fieldConverters[fieldDef.type].previewConverter(_this2.store[fieldDef.name]);
      });

      if (this.store.convertedInput.toggle) {
        delete this.store.convertedInput.toggle;
      } else {
        this.store.convertedInput.toggle = true;
      }
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this3 = this;

      if (this.userInputIsValid) {
        this.uploading = true;
        addNote(this.course, this.dataShape, this.store.convertedInput).then(function (resp) {
          // this.uploading = false;
          _this3.reset();

          alertUser({
            text: 'Data uploaded',
            status: Status.ok
          }); // this.$refs.fieldInputs[0].focus();
        });
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.uploading = false;
      this.fieldInputs.forEach(function (input) {
        input.clearData(); // (input as any).value = '';
      });
      this.fieldInputs[0].focus();
    }
  }, {
    key: "getExistingNotesFromDB",
    value: function getExistingNotesFromDB() {
      var _this4 = this;

      this.existingData = [];
      getNotes(this.course, this.dataShape).then(function (results) {
        results.docs.forEach(function (doc) {
          getDoc(doc._id).then(function (fullDoc) {
            _this4.existingData.push(displayableDataToViewData(fullDoc));
          });
        });
      });
    }
  }, {
    key: "getImplementingViews",
    value: function getImplementingViews() {
      var _this5 = this;

      this.shapeViews = [];
      var dataShapeId = courses_NameSpacer.getDataShapeString({
        course: this.course,
        dataShape: this.dataShape.name
      });
      getDoc(dataShapeId).then(function (shape) {
        shape.questionTypes.forEach(function (questionId) {
          var questionName = courses_NameSpacer.getQuestionDescriptor(questionId).questionType;
          src_courses.getCourse(_this5.course).getQuestion(questionName).views.forEach(function (view) {
            _this5.shapeViews.push(view);
          });
        });
      });
    }
  }, {
    key: "isFieldInput",
    value: function isFieldInput(component) {
      return component.clearData !== undefined;
    }
  }, {
    key: "fieldInputs",
    get: function get() {
      var _this6 = this;

      return this.$refs.fieldInputWraps.map(function (div) {
        // if ((div.children[0] as any).__vue__.clearData !==)
        //     return (div.children[0] as any).__vue__ as FieldInput;
        var child = div.children[0].__vue__;

        if (_this6.isFieldInput(child)) {
          return child;
        } else {
          var parent = child.$parent;

          if (_this6.isFieldInput(parent)) {
            return parent;
          }
        }

        return new FieldInputs_IntegerInput({});
      });
    }
  }, {
    key: "userInputIsValid",
    get: function get() {
      var _this7 = this;

      var ret = Object.getOwnPropertyNames(this.store.validation).length === this.dataShape.fields.length + 1; // +1 here b/c of the validation key

      Object.getOwnPropertyNames(this.store.validation).forEach(function (fieldName) {
        if (_this7.store.validation[fieldName] === false) {
          ret = false;
        }
      });

      if (ret) {
        this.convertInput();
      } //   alert(ret);


      return ret;
    }
  }, {
    key: "previewInput",
    get: function get() {
      this.convertInput();
      return this.store.previewInput;
    }
  }, {
    key: "convertedInput",
    get: function get() {
      this.convertInput();
      return this.store.convertedInput;
    }
  }]);

  Object(inherits["a" /* default */])(DataInputForm, _Vue);

  return DataInputForm;
}(vue_runtime_esm["default"]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", typeof (DataInputFormvue_type_script_lang_ts_a = typeof DataShape["DataShape"] !== "undefined" && DataShape["DataShape"]) === "function" ? DataInputFormvue_type_script_lang_ts_a : Object)], DataInputFormvue_type_script_lang_ts_DataInputForm.prototype, "dataShape", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", String)], DataInputFormvue_type_script_lang_ts_DataInputForm.prototype, "course", void 0);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["e" /* Watch */])('dataShape'), tslib_es6["b" /* __metadata */]("design:type", Function), tslib_es6["b" /* __metadata */]("design:paramtypes", [typeof (DataInputFormvue_type_script_lang_ts_b = typeof DataShape["DataShape"] !== "undefined" && DataShape["DataShape"]) === "function" ? DataInputFormvue_type_script_lang_ts_b : Object, typeof (DataInputFormvue_type_script_lang_ts_c = typeof DataShape["DataShape"] !== "undefined" && DataShape["DataShape"]) === "function" ? DataInputFormvue_type_script_lang_ts_c : Object]), tslib_es6["b" /* __metadata */]("design:returntype", void 0)], DataInputFormvue_type_script_lang_ts_DataInputForm.prototype, "onDataShapeChange", null);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["e" /* Watch */])('store'), tslib_es6["b" /* __metadata */]("design:type", Function), tslib_es6["b" /* __metadata */]("design:paramtypes", [Object, Object]), tslib_es6["b" /* __metadata */]("design:returntype", void 0)], DataInputFormvue_type_script_lang_ts_DataInputForm.prototype, "storeChange", null);

DataInputFormvue_type_script_lang_ts_DataInputForm = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    AudioInput: FieldInputs_AudioInput,
    NumberInput: FieldInputs_NumberInput,
    StringInput: FieldInputs_StringInput,
    IntegerInput: FieldInputs_IntegerInput,
    ImageInput: FieldInputs_ImageInput,
    MarkdownInput: FieldInputs_MarkdownInput,
    CardBrowser: Edit_CardBrowser,
    DataShapeTable: DataTable_DataShapeTable
  }
})], DataInputFormvue_type_script_lang_ts_DataInputForm);
/* harmony default export */ var DataInputFormvue_type_script_lang_ts_ = (DataInputFormvue_type_script_lang_ts_DataInputForm);
// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/DataInputForm.vue?vue&type=script&lang=ts&
 /* harmony default export */ var ViewableDataInputForm_DataInputFormvue_type_script_lang_ts_ = (DataInputFormvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/Edit/ViewableDataInputForm/DataInputForm.vue





/* normalize component */

var DataInputForm_component = Object(componentNormalizer["a" /* default */])(
  ViewableDataInputForm_DataInputFormvue_type_script_lang_ts_,
  DataInputFormvue_type_template_id_639c9189_render,
  DataInputFormvue_type_template_id_639c9189_staticRenderFns,
  false,
  null,
  null,
  null
  
)

DataInputForm_component.options.__file = "DataInputForm.vue"
/* harmony default export */ var ViewableDataInputForm_DataInputForm = (DataInputForm_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ComponentRegistration/ComponentRegistration.vue?vue&type=template&id=75fd832c&scoped=true&
var ComponentRegistrationvue_type_template_id_75fd832c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h3',[_vm._v("DataShapes")]),_c('ul',_vm._l((_vm.dataShapes),function(dataShape){return _c('li',{key:dataShape.name},[_vm._v("\n     "+_vm._s(dataShape.name)+"\n      "),(!dataShape.registered)?_c('button',{on:{"click":function($event){_vm.registerShape(dataShape.name)}}},[_vm._v("\n        Register\n      ")]):_c('span',{staticClass:"inset"},[_vm._v("\n        (Registered)\n      ")]),_c('ul',_vm._l((dataShape.dataShape.views),function(view){return _c('div',{key:view.name},[(view)?_c('li',[_vm._v("\n          "+_vm._s(view.name)+"\n        ")]):_vm._e()])}))])})),_c('h3',[_vm._v("Questions")]),_c('ul',_vm._l((_vm.questions),function(question){return _c('li',{key:question.name},[_vm._v("\n      "+_vm._s(question.name)+"\n      "),(!question.registered)?_c('button',{on:{"click":function($event){_vm.registerQuestion(question.name)}}},[_vm._v("\n        Register\n      ")]):_c('span',{staticClass:"inset"},[_vm._v("\n        (Registered)\n      ")])])}))])}
var ComponentRegistrationvue_type_template_id_75fd832c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Edit/ComponentRegistration/ComponentRegistration.vue?vue&type=template&id=75fd832c&scoped=true&

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/ComponentRegistration/ComponentRegistration.vue?vue&type=script&lang=ts&












var ComponentRegistrationvue_type_script_lang_ts_ComponentRegistration =
/*#__PURE__*/
function (_Vue) {
  function ComponentRegistration() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ComponentRegistration);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ComponentRegistration).apply(this, arguments));
    _this.dataShapes = [];
    _this.questions = [];
    return _this;
  }

  Object(createClass["a" /* default */])(ComponentRegistration, [{
    key: "created",
    value: function created() {
      var _this2 = this;

      var dataShapeData = src_courses.allDataShapes().filter(function (shape) {
        return shape.course === _this2.course;
      });
      dataShapeData.forEach(function (shape) {
        getDoc(courses_NameSpacer.getDataShapeString(shape)).then(function (doc) {
          _this2.dataShapes.push({
            name: shape.dataShape,
            dataShape: src_courses.getDataShape(shape),
            registered: true
          });
        }).catch(function (err) {
          _this2.dataShapes.push({
            name: shape.dataShape,
            dataShape: src_courses.getDataShape(shape),
            registered: false
          });
        }).then(function () {
          _this2.dataShapes = lodash["sortBy"](_this2.dataShapes, ['registered', 'name']);
        });
      });
      var questionData = src_courses.getCourse(this.course).questions;
      questionData.forEach(function (question) {
        getDoc(courses_NameSpacer.getQuestionString({
          course: _this2.course,
          questionType: question.name
        })).then(function (doc) {
          _this2.questions.push({
            name: question.name,
            registered: true,
            question: question
          });
        }).catch(function (err) {
          _this2.questions.push({
            name: question.name,
            registered: false,
            question: question
          });
        }).then(function () {
          _this2.questions = lodash["sortBy"](_this2.questions, ['registered', 'name']);
        });
      });
    }
  }, {
    key: "registerShape",
    value: function registerShape(shapeName) {
      var shape = this.dataShapes.find(function (findShape) {
        return findShape.name === shapeName;
      });
      putDataShape(this.course, shape.dataShape).then(function (res) {
        if (res.ok) {
          shape.registered = true;
        }
      });
    }
  }, {
    key: "registerQuestion",
    value: function registerQuestion(questionName) {
      var question = this.questions.find(function (q) {
        return q.name === questionName;
      });

      try {
        putQuestionType(this.course, question.question).then(function (res) {
          if (res.ok) {
            question.registered = true;
          }
        });
      } catch (err) {
        alert(err);
      }
    }
  }]);

  Object(inherits["a" /* default */])(ComponentRegistration, _Vue);

  return ComponentRegistration;
}(vue_runtime_esm["default"]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", String)], ComponentRegistrationvue_type_script_lang_ts_ComponentRegistration.prototype, "course", void 0);

ComponentRegistrationvue_type_script_lang_ts_ComponentRegistration = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {}
})], ComponentRegistrationvue_type_script_lang_ts_ComponentRegistration);
/* harmony default export */ var ComponentRegistrationvue_type_script_lang_ts_ = (ComponentRegistrationvue_type_script_lang_ts_ComponentRegistration);
// CONCATENATED MODULE: ./src/components/Edit/ComponentRegistration/ComponentRegistration.vue?vue&type=script&lang=ts&
 /* harmony default export */ var ComponentRegistration_ComponentRegistrationvue_type_script_lang_ts_ = (ComponentRegistrationvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Edit/ComponentRegistration/ComponentRegistration.vue?vue&type=style&index=0&id=75fd832c&scoped=true&lang=css&
var ComponentRegistrationvue_type_style_index_0_id_75fd832c_scoped_true_lang_css_ = __webpack_require__("08e0");

// CONCATENATED MODULE: ./src/components/Edit/ComponentRegistration/ComponentRegistration.vue






/* normalize component */

var ComponentRegistration_component = Object(componentNormalizer["a" /* default */])(
  ComponentRegistration_ComponentRegistrationvue_type_script_lang_ts_,
  ComponentRegistrationvue_type_template_id_75fd832c_scoped_true_render,
  ComponentRegistrationvue_type_template_id_75fd832c_scoped_true_staticRenderFns,
  false,
  null,
  "75fd832c",
  null
  
)

ComponentRegistration_component.options.__file = "ComponentRegistration.vue"
/* harmony default export */ var ComponentRegistration_ComponentRegistration = (ComponentRegistration_component.exports);
// CONCATENATED MODULE: ./src/base-course/CardTypes/index.ts



/* harmony default export */ var CardTypes = ({
  dataShapes: [{
    name: DataShapeName.Basic,
    fields: [{
      name: 'Front',
      type: FieldType.MARKDOWN
    }, {
      name: 'Back',
      type: FieldType.MARKDOWN
    }]
  }],
  views: CardTypes_BasicCard.views
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Edit/CourseEditor.vue?vue&type=script&lang=ts&














var CourseEditorvue_type_script_lang_ts_CourseEditor =
/*#__PURE__*/
function (_Vue) {
  function CourseEditor() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, CourseEditor);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(CourseEditor).apply(this, arguments));
    _this.registeredDataShapes = [];
    _this.dataShapes = [];
    _this.selectedShape = '';
    _this.loading = true; // datashapes are loading on init

    _this.editingMode = true;
    return _this;
  }

  Object(createClass["a" /* default */])(CourseEditor, [{
    key: "created",
    value: function created() {
      var _this2 = this;

      // this.dataShapes = BaseCards.dataShapes;
      // this.registeredDataShapes = BaseCards.dataShapes;
      CardTypes.dataShapes.forEach(function (shape) {
        _this2.dataShapes.push(shape);

        _this2.registeredDataShapes.push(shape);
      });
      src_courses.getCourse(this.course).questions.forEach(function (question) {
        question.dataShapes.forEach(function (dataShape) {
          _this2.dataShapes.push(dataShape);
        });
      });
      getDataShapes(this.course).then(function (results) {
        results.docs.forEach(function (doc) {
          getDoc(doc._id).then(function (dataShapeDoc) {
            _this2.registeredDataShapes.push(_this2.dataShapes.find(function (shape) {
              return shape.name === courses_NameSpacer.getDataShapeDescriptor(dataShapeDoc._id).dataShape;
            })); // alert(_.difference(this.dataShapes, this.registeredDataShapes));

          });
        });
      }).then(function () {
        _this2.loading = false;
      });
    }
  }, {
    key: "getDataShape",
    value: function getDataShape(shapeName) {
      return this.dataShapes.find(function (shape) {
        return shape.name === shapeName;
      });
    }
  }, {
    key: "toggleComponent",
    value: function toggleComponent() {
      this.editingMode = !this.editingMode;
    }
  }]);

  Object(inherits["a" /* default */])(CourseEditor, _Vue);

  return CourseEditor;
}(vue_runtime_esm["default"]);

tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["c" /* Prop */])(), tslib_es6["b" /* __metadata */]("design:type", String)], CourseEditorvue_type_script_lang_ts_CourseEditor.prototype, "course", void 0);

CourseEditorvue_type_script_lang_ts_CourseEditor = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    DataInputForm: ViewableDataInputForm_DataInputForm,
    ComponentRegistration: ComponentRegistration_ComponentRegistration
  }
})], CourseEditorvue_type_script_lang_ts_CourseEditor);
/* harmony default export */ var CourseEditorvue_type_script_lang_ts_ = (CourseEditorvue_type_script_lang_ts_CourseEditor);
// CONCATENATED MODULE: ./src/components/Edit/CourseEditor.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Edit_CourseEditorvue_type_script_lang_ts_ = (CourseEditorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/Edit/CourseEditor.vue?vue&type=style&index=0&id=6ed6b6ec&scoped=true&lang=css&
var CourseEditorvue_type_style_index_0_id_6ed6b6ec_scoped_true_lang_css_ = __webpack_require__("583c");

// CONCATENATED MODULE: ./src/components/Edit/CourseEditor.vue






/* normalize component */

var CourseEditor_component = Object(componentNormalizer["a" /* default */])(
  Edit_CourseEditorvue_type_script_lang_ts_,
  CourseEditorvue_type_template_id_6ed6b6ec_scoped_true_render,
  CourseEditorvue_type_template_id_6ed6b6ec_scoped_true_staticRenderFns,
  false,
  null,
  "6ed6b6ec",
  null
  
)

CourseEditor_component.options.__file = "CourseEditor.vue"
/* harmony default export */ var Edit_CourseEditor = (CourseEditor_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Edit.vue?vue&type=script&lang=ts&











var Editvue_type_script_lang_ts_Edit =
/*#__PURE__*/
function (_Vue) {
  function Edit() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Edit);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Edit).apply(this, arguments));
    _this.courseList = [];
    _this.selectedCourse = '';
    return _this;
  }

  Object(createClass["a" /* default */])(Edit, [{
    key: "created",
    value: function created() {
      this.courseList = src_courses.courses.map(function (course) {
        return course.name;
      });
    }
  }]);

  Object(inherits["a" /* default */])(Edit, _Vue);

  return Edit;
}(vue_runtime_esm["default"]);

Editvue_type_script_lang_ts_Edit = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    CourseEditor: Edit_CourseEditor
  }
})], Editvue_type_script_lang_ts_Edit);
/* harmony default export */ var Editvue_type_script_lang_ts_ = (Editvue_type_script_lang_ts_Edit);
// CONCATENATED MODULE: ./src/views/Edit.vue?vue&type=script&lang=ts&
 /* harmony default export */ var views_Editvue_type_script_lang_ts_ = (Editvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/views/Edit.vue





/* normalize component */

var Edit_component = Object(componentNormalizer["a" /* default */])(
  views_Editvue_type_script_lang_ts_,
  Editvue_type_template_id_5f49e5e8_render,
  Editvue_type_template_id_5f49e5e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Edit_component.options.__file = "Edit.vue"
/* harmony default export */ var views_Edit = (Edit_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Study.vue?vue&type=template&id=264a654e&scoped=true&
var Studyvue_type_template_id_264a654e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Study"},[_c('h1',[_vm._v("Study:")]),_c('br'),_c('div',{ref:"shadowWrapper"},[_c('card-viewer',{attrs:{"view":_vm.view,"data":_vm.data,"card_id":_vm.cardID,"sessionOrder":_vm.cardCount},on:{"emitResponse":function($event){_vm.processResponse($event)}}})],1),_c('v-btn',{attrs:{"fab":"","fixed":"","bottom":"","right":"","title":"Discuss this card"}},[_c('v-icon',[_vm._v("chat_bubble_outline")])],1)],1)}
var Studyvue_type_template_id_264a654e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Study.vue?vue&type=template&id=264a654e&scoped=true&

// CONCATENATED MODULE: ./src/db/SpacedRepetition.ts



/**
 * Returns the number of seconds that should pass before a
 * card is redisplayed for review / practice.
 *
 * @param cardHistory The user's history working with the given card
 */

function newInterval(cardHistory) {
  if (isQuestionRecord(cardHistory[0])) {
    return newQuestionInterval(cardHistory);
  } else {
    return 10000; // random - replace
  }
}

function newQuestionInterval(cardHistory) {
  var currentAttempt = cardHistory[cardHistory.length - 1];
  var lastInterval = lastSuccessfulInterval(cardHistory);

  if (currentAttempt.isCorrect) {
    var skill = demonstratedSkill(currentAttempt);
    Object(util["log"])("Demontrated skill: \t".concat(skill));
    return lastInterval * (0.5 + skill);
  } else {
    return 0;
  }
}
/**
 * Returns the amount of time, in seconds, of the most recent successful
 * interval for this card. An interval is successful if the user answers
 * a question correctly on the first attempt.
 *
 * @param cardHistory The record of user attempts with the question
 */


function lastSuccessfulInterval(cardHistory) {
  for (var i = cardHistory.length - 1; i >= 1; i++) {
    if (cardHistory[i].priorAttemps === 0 && cardHistory[i].isCorrect) {
      return secondsBetween(cardHistory[i - 1].timeStamp, cardHistory[i].timeStamp);
    }
  }

  return getInitialInterval(cardHistory); // used as a magic number here - indicates no prior intervals
}

function getInitialInterval(cardHistory) {
  // todo make this a data-driven service, relying on:
  //  - global experience w/ the card (ie, what interval
  //      seems to be working well across the population)
  //  - the individual user (how do they respond in general
  //      when compared to the population)
  return 60 * 60 * 24 * 3; // 3 days
}
/**
 * Returns a number from (0, 1) representing the user's perceived skill
 * in answering the question. 0 representing beginner skill and 1 representing
 * expert skill.
 *
 * @param response the record of the user's interaction with the card
 */


function demonstratedSkill(response) {
  // this function will be dependant on external factors including:
  // - typical response times to the card type / individual card among the community
  // - the student's general responsiveness (eg, students with observed
  //   processing speed deficits can be given an amout of 'buffering' time)
  // - the context in which the question was asked: eg, 7*4 is easier to answer
  //   if the previous question was 6*4. It's easier still as a member of the
  //   chain of questions 2*4, 3*4, 4*4, 5*4, 6*4, ...
  // experts should answer this question in <= 5 secnods (5000 ms)
  // this value will be dynamic, populated from a service and based on
  // observed interations with the card
  var expertSpeed = 5000;
  var userSpeed = Math.min(response.timeSpent, 10 * expertSpeed); // if userResponse is > 10 x expertSpeed, discount as probably afk / distracted ?

  var speedPenalty = userSpeed / expertSpeed;
  var speedPenaltyMultiplier = userSpeed > expertSpeed ? Math.pow(0.8, speedPenalty) : 1;
  var ret = response.isCorrect ? 1 : 0;
  ret = ret * speedPenaltyMultiplier;
  return Math.min(ret, 1);
}
/**
 * Returns a list of prior viewing intervals in seconds.
 * @param cardHistory
 */


function getPreviousIntervals(cardHistory) {
  var ret = [];
  cardHistory.forEach(function (card, index) {
    if (index > 0) {
      ret.push(secondsBetween(cardHistory[index - 1].timeStamp, cardHistory[index].timeStamp));
    }
  });
  return ret;
}
/**
 * Returns the time in seconds between two Moment objects
 * @param start The first time
 * @param end The second time
 */


function secondsBetween(start, end) {
  var ret = Object(moment["duration"])(end.diff(start)).asSeconds(); // log(`From start: ${start} to finish: ${end} is ${ret} seconds`);

  return ret;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Study.vue?vue&type=script&lang=ts&



















function randInt(n) {
  return Math.floor(Math.random() * n);
}

var Studyvue_type_script_lang_ts_Study =
/*#__PURE__*/
function (_Vue) {
  function Study() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Study);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Study).apply(this, arguments));
    _this.data = [];
    _this.cardID = '';
    _this.cardCount = 1;
    return _this;
  }

  Object(createClass["a" /* default */])(Study, [{
    key: "created",
    value: function created() {
      this.loadRandomCard();
    }
  }, {
    key: "processResponse",
    value: function processResponse(r) {
      var _this2 = this;

      r.cardID = this.cardID;
      Object(util["log"])("Study.processResponse is running...");
      this.logCardRecordAndScheduleReview(r);

      if (isQuestionRecord(r)) {
        Object(util["log"])("Question is ".concat(r.isCorrect ? '' : 'in', "correct"));

        if (r.isCorrect) {
          this.$refs.shadowWrapper.classList.add('correct');
          this.loadRandomCard();
        } else {
          this.$refs.shadowWrapper.classList.add('incorrect'); // clear user input?
        }
      } else {
        this.loadRandomCard();
      }

      setTimeout(function () {
        _this2.$refs.shadowWrapper.classList.remove('correct', 'incorrect');
      }, 1250);
    }
  }, {
    key: "logCardRecordAndScheduleReview",
    value: function () {
      var _logCardRecordAndScheduleReview = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(r) {
        var history, nextInterval, nextReviewTime;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return putCardRecord(r, this.$store.state.user);

              case 2:
                history = _context.sent;
                nextInterval = newInterval(history.records);
                nextReviewTime = moment_default()().add(nextInterval, 'seconds');
                scheduleCardReview(this.$store.state.user, r.cardID, nextReviewTime);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function logCardRecordAndScheduleReview(_x) {
        return _logCardRecordAndScheduleReview.apply(this, arguments);
      };
    }()
  }, {
    key: "loadRandomCard",
    value: function loadRandomCard() {
      var _this3 = this;

      getCards().then(function (results) {
        return results.docs[randInt(results.docs.length)];
      }).then(function (doc) {
        Object(util["log"])("\nDocID ".concat(doc._id, " has been picked...\n            "));
        _this3.cardID = doc._id;
        _this3.cardCount++;
        return getDoc(doc._id);
      }).then(function (cardData) {
        _this3.view = src_courses.getView(cardData.id_view);
        return cardData.id_displayable_data;
      }).then(function (displayableData) {
        return displayableData.map(function (id) {
          return getDoc(id, {
            attachments: true,
            binary: true
          });
        });
      }).then(function (displayDocs) {
        displayDocs.forEach(function (promiseDoc) {
          promiseDoc.then(function (doc) {
            _this3.data.unshift(displayableDataToViewData(doc));

            _this3.data = _this3.data.slice(0, displayDocs.length);
          });
        });
      });
    }
  }]);

  Object(inherits["a" /* default */])(Study, _Vue);

  return Study;
}(vue_runtime_esm["default"]);

Studyvue_type_script_lang_ts_Study = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    CardViewer: Study_CardViewer
  }
})], Studyvue_type_script_lang_ts_Study);
/* harmony default export */ var Studyvue_type_script_lang_ts_ = (Studyvue_type_script_lang_ts_Study);
// CONCATENATED MODULE: ./src/views/Study.vue?vue&type=script&lang=ts&
 /* harmony default export */ var views_Studyvue_type_script_lang_ts_ = (Studyvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/views/Study.vue?vue&type=style&index=0&id=264a654e&scoped=true&lang=css&
var Studyvue_type_style_index_0_id_264a654e_scoped_true_lang_css_ = __webpack_require__("dfb6");

// CONCATENATED MODULE: ./src/views/Study.vue






/* normalize component */

var Study_component = Object(componentNormalizer["a" /* default */])(
  views_Studyvue_type_script_lang_ts_,
  Studyvue_type_template_id_264a654e_scoped_true_render,
  Studyvue_type_template_id_264a654e_scoped_true_staticRenderFns,
  false,
  null,
  "264a654e",
  null
  
)

Study_component.options.__file = "Study.vue"
/* harmony default export */ var views_Study = (Study_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Classrooms.vue?vue&type=template&id=5ea9fb39&
var Classroomsvue_type_template_id_5ea9fb39_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-btn',{on:{"click":_vm.createClass}},[_vm._v("Create a classroom")])],1)}
var Classroomsvue_type_template_id_5ea9fb39_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Classrooms.vue?vue&type=template&id=5ea9fb39&

// CONCATENATED MODULE: ./src/SkldrVue.ts






var SkldrVue_SkldrVue =
/*#__PURE__*/
function (_Vue) {
  function SkldrVue() {
    Object(classCallCheck["a" /* default */])(this, SkldrVue);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(SkldrVue).apply(this, arguments));
  }

  Object(inherits["a" /* default */])(SkldrVue, _Vue);

  return SkldrVue;
}(vue_runtime_esm["default"]);


// CONCATENATED MODULE: ./src/server/index.ts



var SERVER = ENVIRONMENT_VARS.EXPRESS_SERVER_URL;
function serverRequest(_x) {
  return _serverRequest.apply(this, arguments);
}

function _serverRequest() {
  _serverRequest = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(requestData) {
    var xml;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            xml = new XMLHttpRequest();
            xml.withCredentials = true;
            xml.open('POST', SERVER, false);
            xml.setRequestHeader('Content-Type', 'application/json');
            xml.send(JSON.stringify(requestData));
            requestData.response = xml.response;
            return _context.abrupt("return", requestData);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _serverRequest.apply(this, arguments);
}
// CONCATENATED MODULE: ./src/server/types.ts
var ServerRequestType;

(function (ServerRequestType) {
  ServerRequestType["CREATE_CLASSROOM"] = "CREATE_CLASSROOM";
  ServerRequestType["DELETE_CLASSROOM"] = "DELETE_CLASSROOM";
})(ServerRequestType || (ServerRequestType = {}));
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Classrooms.vue?vue&type=script&lang=ts&















var Classroomsvue_type_script_lang_ts_Classroom =
/*#__PURE__*/
function (_SkldrVue) {
  function Classroom() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Classroom);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Classroom).apply(this, arguments));
    _this.classes = [];
    return _this;
  }

  Object(createClass["a" /* default */])(Classroom, [{
    key: "beforeRouteEnter",
    value: function beforeRouteEnter(to, from, next) {// todo ?
      // See https://router.vuejs.org/guide/advanced/data-fetching.html#fetching-before-navigation
    }
  }, {
    key: "deleteClass",
    value: function () {
      var _deleteClass = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(classId) {
        var result;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return serverRequest({
                  type: ServerRequestType.DELETE_CLASSROOM,
                  user: this.$store.state.user,
                  classID: classId,
                  response: null
                });

              case 2:
                result = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function deleteClass(_x) {
        return _deleteClass.apply(this, arguments);
      };
    }()
  }, {
    key: "createClass",
    value: function () {
      var _createClass2 = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2() {
        var status;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return serverRequest({
                  type: ServerRequestType.CREATE_CLASSROOM,
                  className: 'hi',
                  user: this.$store.state.user,
                  response: null
                });

              case 2:
                status = _context2.sent;
                alertUser({
                  text: "Class ".concat(JSON.stringify(status), " Created"),
                  status: Status.ok
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function createClass() {
        return _createClass2.apply(this, arguments);
      };
    }()
  }]);

  Object(inherits["a" /* default */])(Classroom, _SkldrVue);

  return Classroom;
}(SkldrVue_SkldrVue);

Classroomsvue_type_script_lang_ts_Classroom = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {}
})], Classroomsvue_type_script_lang_ts_Classroom);
/* harmony default export */ var Classroomsvue_type_script_lang_ts_ = (Classroomsvue_type_script_lang_ts_Classroom);
// CONCATENATED MODULE: ./src/views/Classrooms.vue?vue&type=script&lang=ts&
 /* harmony default export */ var views_Classroomsvue_type_script_lang_ts_ = (Classroomsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/views/Classrooms.vue





/* normalize component */

var Classrooms_component = Object(componentNormalizer["a" /* default */])(
  views_Classroomsvue_type_script_lang_ts_,
  Classroomsvue_type_template_id_5ea9fb39_render,
  Classroomsvue_type_template_id_5ea9fb39_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Classrooms_component.options.__file = "Classrooms.vue"
/* harmony default export */ var Classrooms = (Classrooms_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"74b63fee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Courses.vue?vue&type=template&id=598c72ce&
var Coursesvue_type_template_id_598c72ce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"md4":"","sm12":"","xs12":""}},[_c('v-card',[_c('v-toolbar',[_c('v-toolbar-title',[_vm._v("My Registered Courses")])],1),_c('v-list',[_vm._l((_vm.registeredCourses),function(course){return [_c('v-list-tile',{key:course,attrs:{"avatar":""},on:{"click":function($event){_vm.log('asof')}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"innerHTML":_vm._s(course)}})],1),_c('v-list-tile-action',[_c('v-btn',{attrs:{"small":"","color":"secondary"},on:{"click":function($event){_vm.dropCourse(course)}}},[_vm._v("\n                Drop\n              ")])],1)],1)]})],2)],1)],1),_c('v-flex',{attrs:{"md4":"","sm12":"","xs12":""}},[_c('v-card',[_c('v-toolbar',[_c('v-toolbar-title',[_vm._v("Available Courses")])],1),_c('v-list',[_vm._l((_vm.availableCourses),function(course){return [_c('v-list-tile',{key:course,attrs:{"avatar":""}},[_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"innerHTML":_vm._s(course)}})],1),_c('v-list-tile-action',[_c('v-btn',{attrs:{"small":"","color":"primary"},on:{"click":function($event){_vm.addCourse(course)}}},[_vm._v("\n                Register\n              ")])],1)],1)]})],2)],1)],1)],1)],1)}
var Coursesvue_type_template_id_598c72ce_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Courses.vue?vue&type=template&id=598c72ce&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("8afe");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Courses.vue?vue&type=script&lang=ts&














var Coursesvue_type_script_lang_ts_Courses =
/*#__PURE__*/
function (_Vue) {
  function Courses() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Courses);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Courses).apply(this, arguments));
    _this.existingCourses = [];
    _this.registeredCourses = ['sample', 'course', 'data', 'math'];
    return _this;
  }

  Object(createClass["a" /* default */])(Courses, [{
    key: "created",
    value: function created() {
      this.existingCourses = src_courses.courses.map(function (course) {
        return course.name;
      });
    }
  }, {
    key: "addCourse",
    value: function addCourse(course) {
      Object(util["log"])("Attempting to register for ".concat(course, "."));
    }
  }, {
    key: "dropCourse",
    value: function dropCourse(course) {
      Object(util["log"])("Attempting to drop ".concat(course, "."));
    }
  }, {
    key: "availableCourses",
    get: function get() {
      return lodash_default.a.without.apply(lodash_default.a, [this.existingCourses].concat(Object(toConsumableArray["a" /* default */])(this.registeredCourses)));
    }
  }]);

  Object(inherits["a" /* default */])(Courses, _Vue);

  return Courses;
}(vue_runtime_esm["default"]);

Coursesvue_type_script_lang_ts_Courses = tslib_es6["a" /* __decorate */]([Object(vue_property_decorator["a" /* Component */])({
  components: {
    CourseEditor: Edit_CourseEditor
  }
})], Coursesvue_type_script_lang_ts_Courses);
/* harmony default export */ var Coursesvue_type_script_lang_ts_ = (Coursesvue_type_script_lang_ts_Courses);
// CONCATENATED MODULE: ./src/views/Courses.vue?vue&type=script&lang=ts&
 /* harmony default export */ var views_Coursesvue_type_script_lang_ts_ = (Coursesvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/views/Courses.vue





/* normalize component */

var Courses_component = Object(componentNormalizer["a" /* default */])(
  views_Coursesvue_type_script_lang_ts_,
  Coursesvue_type_template_id_598c72ce_render,
  Coursesvue_type_template_id_598c72ce_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Courses_component.options.__file = "Courses.vue"
/* harmony default export */ var views_Courses = (Courses_component.exports);
// CONCATENATED MODULE: ./src/router.ts








vue_runtime_esm["default"].use(vue_router_esm["a" /* default */]);
/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  routes: [{
    path: '/',
    alias: ['/home'],
    name: 'home',
    component: views_Home
  }, {
    path: '/about',
    name: 'about',
    component: About
  }, {
    path: '/edit',
    name: 'edit',
    component: views_Edit
  }, {
    path: '/study',
    name: 'study',
    component: views_Study
  }, {
    path: '/classrooms',
    name: 'classrooms',
    component: Classrooms
  }, {
    path: '/courses',
    name: 'courses',
    component: views_Courses
  }]
}));
// CONCATENATED MODULE: ./src/main.ts




































































































































vue_runtime_esm["default"].config.productionTip = false;
new vue_runtime_esm["default"]({
  router: router,
  store: store,
  render: function render(h) {
    return h(App);
  }
}).$mount('#app');

/***/ }),

/***/ "cf05":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.978a7dfc.png";

/***/ }),

/***/ "cf93":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginAndRegistrationContainer_vue_vue_type_style_index_0_id_78ca1878_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5c0b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginAndRegistrationContainer_vue_vue_type_style_index_0_id_78ca1878_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginAndRegistrationContainer_vue_vue_type_style_index_0_id_78ca1878_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginAndRegistrationContainer_vue_vue_type_style_index_0_id_78ca1878_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d2ea":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d4ef":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dfb6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Study_vue_vue_type_style_index_0_id_264a654e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("36cb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Study_vue_vue_type_style_index_0_id_264a654e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Study_vue_vue_type_style_index_0_id_264a654e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Study_vue_vue_type_style_index_0_id_264a654e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e135":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioInput_vue_vue_type_style_index_0_id_38feaa1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1d3b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioInput_vue_vue_type_style_index_0_id_38feaa1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioInput_vue_vue_type_style_index_0_id_38feaa1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioInput_vue_vue_type_style_index_0_id_38feaa1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e6b6":
/***/ (function(module, exports) {



/***/ }),

/***/ "eeaf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f82c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.3643bcf2.js.map
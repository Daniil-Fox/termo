/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/select.js */ "./src/js/components/select.js");
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tabs.js */ "./src/js/components/tabs.js");



/***/ }),

/***/ "./src/js/components/select.js":
/*!*************************************!*\
  !*** ./src/js/components/select.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const select = document.querySelectorAll(".select");
select.forEach(s => {
  const rSelect = s.querySelector("select");
  const selectHeader = s.querySelector(".select__header");
  const selectInfo = selectHeader.querySelector(".select__info");
  const selectBody = s.querySelector(".select__body");
  const selectItems = selectBody.querySelectorAll(".select__item");
  selectHeader?.addEventListener("click", e => {
    e.preventDefault();
    let isActive = s.classList.toggle("active");
    selectBody.style.maxHeight = isActive ? selectBody.scrollHeight + "px" : null;
  });
  selectItems?.forEach((item, index) => {
    item.addEventListener("click", e => {
      selectInfo.innerHTML = item.innerHTML;
      s.classList.remove("active");
      selectBody.style.maxHeight = null;
      rSelect.selectedIndex = index;
    });
  });
});

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// const tabs = document.querySelectorAll('.types__tab')

// tabs.forEach(el => {
//   el.addEventListener('mouseenter', e => {
//     const activeTab = document.querySelector('.types__tab.active')
//     const activeTabWidth = activeTab.clientWidth

//     const tabLine = document.createElement('div')
//     tabLine.classList.add('tabs__line')
//   })
// })

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

/******/ })()
;
//# sourceMappingURL=main.js.map
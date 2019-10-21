/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\n\n\nconst clockElement = document.getElementById('clock');\n\n\nclass Clock {\n\n\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n  \n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    this.printTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    \n    let timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n    let len = timeString.length;\n    if (this.seconds < 10) {\n      let newTimeString = timeString.split(\"\");\n      newTimeString.splice(len-1,0,'0');\n      Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(newTimeString.join(''), clockElement);\n    } else {\n      Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(timeString,clockElement);\n    }\n    // Use console.log to print it.\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\n\nconst clock = new Clock();\n\n\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\n\n\nfunction dogLinkCreator(){\n  const dogLinks = [];\n \n  for(let key in dogs){\n    let dog = document.createElement('a');    \n    dog.innerHTML = key;\n    dog.href = dogs[key];\n    let list = document.createElement('li');\n    list.classList.add(\"dog-link\");\n    list.appendChild(dog);\n    dogLinks.push(list);\n  }\n\n  return dogLinks;\n\n}\n\nfunction attachDogLinks(){\n  let dogLinks = dogLinkCreator();\n  const dropDownDog = document.getElementsByClassName(\"drop-down-dog-list\");\n  for(let i in dogLinks){\n    dropDownDog[0].appendChild(dogLinks[i]);\n  }\n};\n\nattachDogLinks();\n\nconst mouseTarget = document.getElementsByClassName(\"drop-down-dog-nav\");\n\nmouseTarget[0].addEventListener('mouseenter', (e)=>{\n  const item = document.getElementsByClassName(\"drop-down-dog-list\")\n  item[0].removeAttribute(\"attribute\");\n\n});\n\nmouseTarget[0].addEventListener('mouseleave', (e) => {\n  const item = document.getElementsByClassName(\"drop-down-dog-list\");\n  let att =document.createAttribute('attribute');\n  att.value= 'hidden';\n  item[0].setAttributeNode(att);\n\n});\n\nmodule.exports = \"attachDogLinks\";\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst addTodos = document.querySelector('.add-todo-form');\nconst todoList = document.querySelector('.todos');\nconst todos = JSON.parse(localStorage.getItem('todos')) || [];\n\nconst addTodo = (e) => {\n  e.preventDefault();\n  // grab onto the input with the correct name\n  const text = document.querySelector('[name=add-todo]').value;\n  const todo = {\n    text,\n    done: false\n  };\n\n  todos.push(todo);\n  populateList(todos, todoList);\n\n  // Now we just need to set the todos in localStorage - make sure to stringify because \n  // localStorage only accepts strings!\n  localStorage.setItem('todos', JSON.stringify(todos));\n\n  // The reset will empty the form after submission\n  e.currentTarget.reset();\n};\n\n// This function is in charge of rendering the list,\n// we hand it the todos array we previously created and the element to \n// append onto. \nconst populateList = (todos = [], todoList) => {\n\n  // go over our todos and append to the item handed in\n  todoList.innerHTML = todos.map((todo, i) => {\n    return `\n        <li>\n          <input type=\"checkbox\" data-index=${i} ${todo.done ? 'checked' : ''} />\n          <label for=\"item${i}\">${todo.text}</label>\n        </li>\n      `;\n  }).join('');\n};\n\n// we have to iterate through our todos to know if they are done or not. \nfunction toggleDone(e) {\n  if (!e.target.matches('input')) return; // skip this unless it's an input\n  const el = e.target;\n  // we can get the element in question\n  const index = el.dataset.index;\n  // flip done status\n  todos[index].done = !todos[index].done;\n  // set up our new todos in storage and display on the page\n  localStorage.setItem('todos', JSON.stringify(todos));\n  populateList(todos, todoList);\n}\n\n// we are listing for the submit event here to know when the todo form is submitted\naddTodos.addEventListener('submit', addTodo);\n\n// we add our listener to the list because it will always be on the page regardless \n// of whether there are todos\ntodoList.addEventListener('click', toggleDone);\n\npopulateList(todos, todoList);\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  let el = document.createElement('p');\n  el.textContent = string;\n  if (htmlElement.hasChildNodes()){\n    let children = Array.from(htmlElement.children);\n    children.forEach(function(child){\n      htmlElement.removeChild(child);\n    });\n  }\n  htmlElement.appendChild(el);\n\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });
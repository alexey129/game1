/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mathLib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathLib.js */ \"./src/mathLib.js\");\n/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw.js */ \"./src/draw.js\");\n/* harmony import */ var _interface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface.js */ \"./src/interface.js\");\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model.js */ \"./src/model.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view.js */ \"./src/view.js\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller.js */ \"./src/controller.js\");\n\n\n\n\n\n\n\n\nvar timer1 = 0;\nvar modelGame = new _model_js__WEBPACK_IMPORTED_MODULE_3__.ModelGame();\nvar draw = new _draw_js__WEBPACK_IMPORTED_MODULE_1__.Draw(modelGame.ctx);\nvar interfaceGame = new _interface_js__WEBPACK_IMPORTED_MODULE_2__.InterfaceGame();\nvar viewGame = new _view_js__WEBPACK_IMPORTED_MODULE_4__.ViewGame();\nvar controllerGame = new _controller_js__WEBPACK_IMPORTED_MODULE_5__.ControllerGame(); //обработчики каждого отдельного сообщения\n\nfunction obrInitialisation() {\n  setTimeout(function () {\n    draw.addQueue('worldMap', 0, 0, 1000, 500);\n    draw.addQueue('pointTarget', 100, 100, 50, 50);\n    draw.addQueue('pointTarget', 200, 300, 50, 50);\n    draw.addQueue('pointTarget', 600, 100, 50, 50);\n    draw.addQueue('pointTarget', 450, 200, 50, 50);\n    draw.addQueue('pointTarget', 800, 350, 50, 50);\n    draw.paint();\n  }, 1000);\n  modelGame.textMessage.innerHTML = 'Инициализация прошла успешно<br>';\n  modelGame.textMessage.innerHTML = modelGame.textMessage.innerHTML + 'Выберите страну с которой начнется заражение<br>';\n  modelGame.message = selectCountry;\n  modelGame.eventIsEnable = false;\n}\n\n;\n\nfunction obrSelectCountry() {\n  if (modelGame.mouseLeftPress == false) {\n    modelGame.message = selectCountry;\n  } else {\n    //вот тут надо проверить в правильном ли месте было нажатие\n    if ((0,_mathLib_js__WEBPACK_IMPORTED_MODULE_0__.isInCircle)(modelGame.xmouse, modelGame.ymouse, 100, 100, 50)) {\n      modelGame.startPoint = 0;\n      modelGame.startPointX = 100;\n      modelGame.startPointY = 100;\n    }\n\n    if ((0,_mathLib_js__WEBPACK_IMPORTED_MODULE_0__.isInCircle)(modelGame.xmouse, modelGame.ymouse, 200, 300, 50)) {\n      modelGame.startPoint = 1;\n      modelGame.startPointX = 200;\n      modelGame.startPointY = 300;\n    }\n\n    ;\n\n    if ((0,_mathLib_js__WEBPACK_IMPORTED_MODULE_0__.isInCircle)(modelGame.xmouse, modelGame.ymouse, 600, 100, 50)) {\n      modelGame.startPoint = 2;\n      modelGame.startPointX = 600;\n      modelGame.startPointY = 100;\n    }\n\n    ;\n\n    if ((0,_mathLib_js__WEBPACK_IMPORTED_MODULE_0__.isInCircle)(modelGame.xmouse, modelGame.ymouse, 450, 200, 50)) {\n      modelGame.startPoint = 3;\n      modelGame.startPointX = 450;\n      modelGame.startPointY = 200;\n    }\n\n    ;\n\n    if ((0,_mathLib_js__WEBPACK_IMPORTED_MODULE_0__.isInCircle)(modelGame.xmouse, modelGame.ymouse, 800, 350, 50)) {\n      modelGame.startPoint = 4;\n      modelGame.startPointX = 800;\n      modelGame.startPointY = 350;\n    }\n\n    ;\n\n    if (modelGame.startPoint != undefined) {\n      modelGame.textMessage.innerHTML = modelGame.textMessage.innerHTML + 'выбрана точка - ' + modelGame.startPoint + '<br>';\n      modelGame.message = infect;\n      draw.clearQueue();\n      draw.addQueue('worldMap', 0, 0, 1000, 500);\n      draw.paint();\n      viewGame.canvasCircleDraw(modelGame.ctx, modelGame.startPointX, modelGame.startPointY, 40);\n      modelGame.countryesInfected[modelGame.startPoint] = 1;\n      modelGame.textMessage.innerHTML = modelGame.textMessage.innerHTML + 'Заражение началось' + '<br>';\n    } else {\n      modelGame.message = selectCountry;\n    }\n  }\n\n  modelGame.eventIsEnable = false;\n}\n\n;\n\nfunction obrInfect() {\n  //проверяем все ли 5 континентов полностью вымерли\n  var a = 0;\n\n  for (var i = 0; i < 5; i++) {\n    if (modelGame.countryCountDeadPeople[i] >= 200) {\n      a++;\n    }\n  }\n\n  ;\n\n  for (var _i = 0; _i < modelGame.countryesInfected.length; _i++) {\n    if (modelGame.countryesInfected[_i] == 1) {\n      var num = Math.round(Math.random() * 100);\n      var limit1 = 50 - modelGame.countryMedicalPower[_i];\n      var limit2 = 90 - modelGame.countryMedicalPower[_i];\n\n      if (num <= limit1 && modelGame.countryCountInfectPeople[_i] < 200) {\n        modelGame.countryCountInfectPeople[_i]++;\n      }\n\n      if (num > limit1 && num < limit2) {\n        if (modelGame.countryCountInfectPeople[_i] > 20) {\n          if (modelGame.countryCountDeadPeople[_i] < 200) {\n            modelGame.countryCountDeadPeople[_i]++;\n\n            if (modelGame.countryMedicalPower[_i] > 0) {\n              modelGame.countryMedicalPower[_i]--;\n            }\n          }\n        }\n      }\n\n      if (num >= limit2 && modelGame.countryCountDeadPeople[_i] < 200) {\n        if (modelGame.countryCountInfectPeople[_i] > 0) {\n          modelGame.countryCountInfectPeople[_i]--;\n        }\n      }\n    }\n  } //если не заражены то:\n\n\n  if (a != 5) {\n    timer1++;\n\n    if (timer1 > 100) {\n      timer1 = 0;\n      var aaa = [0, 0, 0, 0, 0]; //массив в котором указываем какие страны заражены\n\n      for (var _i2 = 0; _i2 < modelGame.countryesInfected.length; _i2++) {\n        if (modelGame.countryesInfected[_i2] == 1) {\n          for (var j = 0; j < 5; j++) {\n            if (modelGame.graph[_i2][j] == 1) {\n              aaa[j] = 1;\n            }\n          }\n        }\n      }\n\n      modelGame.countryesInfected = aaa; //заменяем countryesInfected на новый список зараженных стран\n\n      if (modelGame.countryesInfected[0] == 1) {\n        viewGame.canvasCircleDraw(modelGame.ctx, 100, 100, 40);\n      }\n\n      if (modelGame.countryesInfected[1] == 1) {\n        viewGame.canvasCircleDraw(modelGame.ctx, 200, 300, 40);\n      }\n\n      if (modelGame.countryesInfected[2] == 1) {\n        viewGame.canvasCircleDraw(modelGame.ctx, 600, 100, 40);\n      }\n\n      if (modelGame.countryesInfected[3] == 1) {\n        viewGame.canvasCircleDraw(modelGame.ctx, 450, 200, 40);\n      }\n\n      if (modelGame.countryesInfected[4] == 1) {\n        viewGame.canvasCircleDraw(modelGame.ctx, 800, 350, 40);\n      }\n    }\n\n    modelGame.message = infect;\n  } else {\n    modelGame.textMessage.innerHTML = modelGame.textMessage.innerHTML + 'Мир полностью заражен' + '<br>';\n    modelGame.message = exitGame;\n    modelGame.textMessage.innerHTML = modelGame.textMessage.innerHTML + 'Игра окончена' + '<br>';\n  }\n\n  modelGame.eventIsEnable = false;\n}\n\n;\n\nfunction obrExitGame() {\n  modelGame.eventIsEnable = false;\n}\n\n;\n/*создаем объекты событий и навешиваем на них обработчики\nпо сути перечисляем для какого сообщения какое действие делать\n*/\n\nvar initialisation = new Event('initialisation');\nmodelGame.Elem.addEventListener('initialisation', obrInitialisation);\nvar selectCountry = new Event('selectCountry');\nmodelGame.Elem.addEventListener('selectCountry', obrSelectCountry);\nvar infect = new Event('infect');\nmodelGame.Elem.addEventListener('infect', obrInfect);\nvar exitGame = new Event('exitGame');\nmodelGame.Elem.addEventListener('exitGame', obrExitGame); //иницианилизируем первое вступительное сообщение\n\nmodelGame.message = initialisation;\nmodelGame.eventIsEnable = false;\n\nmodelGame.Elem.onmousedown = function (event) {\n  modelGame.xmouse = event.pageX;\n  modelGame.ymouse = event.pageY;\n  modelGame.mouseLeftPress = true;\n};\n\nmodelGame.Elem.onmouseup = function (event) {\n  setTimeout(function () {\n    modelGame.mouseLeftPress = false;\n  }, 100);\n}; //цикл в котором запускаются события\n\n\nfunction cycle() {\n  if (modelGame.eventIsEnable == false) {\n    modelGame.eventIsEnable = true;\n    modelGame.Elem.dispatchEvent(modelGame.message);\n  }\n}\n\nmodelGame.Elem.dispatchEvent(modelGame.message); //загрузка ресурсов до начала игры\n\nvar countLoad = 0; //считает сколько ресурсов уже загрузилось\n\nvar img1 = new Image();\nimg1.src = './image/world-map.jpg';\n\nimg1.onload = function () {\n  var pic = new _draw_js__WEBPACK_IMPORTED_MODULE_1__.Picture();\n  pic.img = img1;\n  pic.name = 'worldMap';\n  draw.addStore(pic);\n  countLoad++;\n};\n\nvar img2 = new Image();\nimg2.src = './image/attackSelect.png';\n\nimg2.onload = function () {\n  var pic = new _draw_js__WEBPACK_IMPORTED_MODULE_1__.Picture();\n  pic.img = img2;\n  pic.name = 'pointTarget';\n  draw.addStore(pic);\n  countLoad++;\n};\n\nvar interval1 = setInterval(function () {\n  if (countLoad == 2) {\n    //когда все ресурсы загрузятся можно продолжать дальше\n    clearInterval(interval1);\n    setInterval(cycle, 10);\n  }\n}, 100);\n\n//# sourceURL=webpack://react-app1/./src/app.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ControllerGame\": () => (/* binding */ ControllerGame)\n/* harmony export */ });\nfunction ControllerGame() {}\n\n//# sourceURL=webpack://react-app1/./src/controller.js?");

/***/ }),

/***/ "./src/draw.js":
/*!*********************!*\
  !*** ./src/draw.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Picture\": () => (/* binding */ Picture),\n/* harmony export */   \"Draw\": () => (/* binding */ Draw)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction Picture() {\n  this.img = undefined;\n  this.name = undefined;\n  this.xcoord = undefined;\n  this.ycoord = undefined;\n  this.width = undefined;\n  this.height = undefined;\n}\nfunction Draw(ctx) {\n  var _this = this;\n\n  this.imgStore = [];\n  this.imgQueue = [];\n\n  this.addStore = function (image) {\n    _this.imgStore.push(image);\n  };\n\n  this.addQueue = function (name, x, y, width, height) {\n    var _iterator = _createForOfIteratorHelper(_this.imgStore),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var item = _step.value;\n\n        if (item.name == name) {\n          var temp = new Picture();\n          temp.img = item.img;\n          temp.xcoord = x;\n          temp.ycoord = y;\n          temp.width = width;\n          temp.height = height;\n\n          _this.imgQueue.push(temp);\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  this.removeQueue = function () {};\n\n  this.clearQueue = function () {\n    while (_this.imgQueue.length > 0) {\n      _this.imgQueue.pop();\n    }\n  };\n\n  this.paint = function () {\n    ctx.clearRect(0, 0, 1000, 500);\n\n    var _iterator2 = _createForOfIteratorHelper(_this.imgQueue),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var item = _step2.value;\n        ctx.drawImage(item.img, item.xcoord, item.ycoord, item.width, item.height);\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  };\n}\n\n//# sourceURL=webpack://react-app1/./src/draw.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InterfaceGame\": () => (/* binding */ InterfaceGame)\n/* harmony export */ });\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\nfunction InterfaceGame() {\n  this.button1 = document.querySelector('.interface__button1');\n  this.button2 = document.querySelector('.interface__button2');\n  this.count = document.querySelector('.interface__count');\n}\n\n//# sourceURL=webpack://react-app1/./src/interface.js?");

/***/ }),

/***/ "./src/mathLib.js":
/*!************************!*\
  !*** ./src/mathLib.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isInCircle\": () => (/* binding */ isInCircle)\n/* harmony export */ });\nfunction isInCircle(ax, ay, bx, by, radius) {\n  //a - точка нажатия\n  //b - центр круга\n  //radius - радиус круга\n  var x = ax - bx;\n  var y = ay - by;\n\n  if (Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(radius, 2)) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\n//# sourceURL=webpack://react-app1/./src/mathLib.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModelGame\": () => (/* binding */ ModelGame)\n/* harmony export */ });\nfunction ModelGame() {\n  this.canvasWidth = 1000;\n  this.canvasHeight = 500;\n  this.canvasCoordX = 0;\n  this.canvasCoordY = 0;\n  this.Elem = document.querySelector('.main-canvas');\n  this.textMessage = document.querySelector('.text');\n  this.ctx = this.Elem.getContext('2d');\n  this.message; //переменная в которой будет лежать \"сообщения\".\n\n  this.eventIsEnable; //если равно true, то обработчик сообщений не будет запускаться\n\n  this.mouseLeftPress = false; //нажата ли левая кнопка мыши\n\n  this.xmouse = 0; //координата x последнего нажатия мыши\n\n  this.ymouse = 0; //координата y последнего нажатия мыши\n\n  this.startPoint = undefined;\n  this.startPointX = 0;\n  this.startPointY = 0; //граф на котором показаны пути из одного места в другое\n\n  this.graph = [[0, 1, 1, 1, 0], //сев. америка 1\n  [1, 0, 0, 1, 0], //юж. америка 2\n  [1, 0, 0, 1, 1], //евразия 3\n  [1, 1, 1, 0, 1], //африка 4\n  [0, 0, 1, 1, 0] //австралия 5\n  ];\n  this.countryesInfected = [0, 0, 0, 0, 0]; //страны в которых сейчас происходит заражение\n\n  this.countryCountInfectPeople = [0, 0, 0, 0, 0]; //кол-во зараженных в каждой стране\n\n  this.countryCountDeadPeople = [0, 0, 0, 0, 0]; //кол-во умерших в каждой стране\n\n  this.countryMedicalPower = [18, 15, 13, 10, 5]; //противодействие болезни в каждой стране.\n  //должно быть меньше 20, иначе заражение будет длиться до бесконечности\n}\n\n//# sourceURL=webpack://react-app1/./src/model.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ViewGame\": () => (/* binding */ ViewGame)\n/* harmony export */ });\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\nfunction ViewGame() {\n  this.canvasCircleDraw = function (ctx, x, y, radius) {\n    x += radius / 2;\n    y += radius / 2;\n    ctx.beginPath();\n    ctx.fillStyle = \"rgb(0, 0, 0)\";\n    ctx.arc(x, y, radius, 0, 2 * Math.PI, true);\n    ctx.fill();\n  };\n}\n\n//# sourceURL=webpack://react-app1/./src/view.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body, canvas {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.interface {\\n  width: 500px;\\n  height: 40px;\\n  background-color: #496;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 0 10px;\\n}\\n.interface > * {\\n  border: 1px solid #000;\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://react-app1/./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://react-app1/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://react-app1/./src/scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://react-app1/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
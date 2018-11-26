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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Pokemon = __webpack_require__(/*! ./models/pokemon */ \"./src/models/pokemon.js\")\nconst PokemonListView = __webpack_require__(/*! ./views/pokemon_list_view */ \"./src/views/pokemon_list_view.js\")\nconst FilterView = __webpack_require__(/*! ./views/filter_view */ \"./src/views/filter_view.js\")\nconst PokemonInfoView = __webpack_require__(/*! ./views/pokemon_info_view */ \"./src/views/pokemon_info_view.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const displayFullPokeList = document.querySelector('#Poke-List')\n  const pokemonListView = new PokemonListView(displayFullPokeList);\n  pokemonListView.bindEvents();\n\n  const displaySelected = document.querySelector('#Poke-List')\n  const pokemonInfoView = new PokemonInfoView(displaySelected);\n  pokemonInfoView.bindEvents();\n\n  const selectDropDown = document.querySelector('#Poke-DropDown')\n  const filterView = new FilterView(selectDropDown);\n  filterView.bindEvents();\n\n\n  const pokemon = new Pokemon();\n  pokemon.bindEvents();\n\n  const clearButton = document.querySelector('#clear-filter-list-views')\n  clearButton.addEventListener('click', (event) => {\n    event.preventDefault();\n    console.log('clicked')\n  })\n  // Button is not working the way I expect it to.\n\n\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function (url) {\n  this.url = url;\n}\n\nRequest.prototype.get = function () {\n  // fetch(this.url) returns a promise.\n  //.then(response => response.json()) also returns a promise\n  return fetch(this.url)\n  .then(response => response.json()) // fetch is built into Javascript\n  .catch(err => alert(err));\n}\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request.js?");

/***/ }),

/***/ "./src/models/pokemon.js":
/*!*******************************!*\
  !*** ./src/models/pokemon.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\")\nconst Request = __webpack_require__(/*! ../helpers/request */ \"./src/helpers/request.js\")\n\nconst Pokemon = function(data){\n  this.data = []; // Stores full list of pokemons and urls\n}\n\nPokemon.prototype.bindEvents = function(){\n  this.getData();\n  this.getTypes();\n  PubSub.subscribe('PokemonListView:PokeIndex', (event) => {\n    const pokemonIndex = event.detail;\n    this.findPokemonInfo(pokemonIndex)\n  });\n  PubSub.subscribe('FilterView:TypeIndex', (event) => {\n    const typeIndex = event.detail;\n    this.findSelectedTypes(typeIndex)\n  });\n}\n\nPokemon.prototype.getData = function(){\n  url = `https://pokeapi.co/api/v2/pokemon/`;\n  const request = new Request(url);\n  request.get().then((data) => {\n    this.data = data.results\n    PubSub.publish('Pokemon:All-Data-Ready', this.data)\n  });\n}\n\nPokemon.prototype.findPokemonInfo = function(index){\n  url =  `https://pokeapi.co/api/v2/pokemon/${index}/`\n  const request = new Request(url)\n  request.get().then((data) => {\n    PubSub.publish('Pokemon:Selected-Pokemon', data)\n  });\n}\n\nPokemon.prototype.getTypes = function(){\n  url = `https://pokeapi.co/api/v2/type/`\n  const request = new Request(url)\n  request.get().then((data) => {\n    PubSub.publish('Pokemon:Filtered-Types', data.results)\n  });\n}\n\nPokemon.prototype.findSelectedTypes = function(index){\n  url = `https://pokeapi.co/api/v2/type/${index}/`\n  const request = new Request(url)\n  request.get().then((data) => {\n    PubSub.publish('Pokemon:Selected-Type', data)\n  });\n}\n\n\n\nmodule.exports = Pokemon;\n\n\n//# sourceURL=webpack:///./src/models/pokemon.js?");

/***/ }),

/***/ "./src/views/filter_view.js":
/*!**********************************!*\
  !*** ./src/views/filter_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\")\n\nconst FilterView = function(dropElement){\n  this.dropElement = dropElement;\n}\n\nFilterView.prototype.bindEvents = function(){\n  PubSub.subscribe('Pokemon:Filtered-Types', (event) => {\n    const uniqueTypes = event.detail;\n    this.addType(uniqueTypes)\n  });\n\n  this.dropElement.addEventListener('change', handleChangeType)\n}\n\nFilterView.prototype.addType = function(uniqueTypes){\n  uniqueTypes.forEach((type, index) => {\n    const option = document.createElement('option');\n    option.textContent = type.name;\n    option.value = index + 1;\n    this.dropElement.appendChild(option);\n  });\n}\n\nconst handleChangeType = function(event){\n  const typeIndex = event.target.value\n  PubSub.publish('FilterView:TypeIndex', typeIndex)\n}\nmodule.exports = FilterView;\n\n\n//# sourceURL=webpack:///./src/views/filter_view.js?");

/***/ }),

/***/ "./src/views/pokemon_info_view.js":
/*!****************************************!*\
  !*** ./src/views/pokemon_info_view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\")\n\nconst PokemonInfoView = function(listDiv){\n  this.listDiv = listDiv;\n}\n\nPokemonInfoView.prototype.bindEvents = function(){\n  PubSub.subscribe('Pokemon:Selected-Pokemon', (event) => {\n    const pokeInfo = event.detail;\n    this.showInfo(pokeInfo)\n  });\n}\n\nPokemonInfoView.prototype.showInfo = function(pokeInfo){\n  this.listDiv.innerHTML = \"\";\n  this.getImage();\n  console.log(pokeInfo.sprites.front_default);\n}\n\nPokemonInfoView.prototype.getImage = function(){\n  const img = document.createElement('img')\n  img.src = event.detail.sprites.front_default;\n  img.alt = event.detail.name;\n  img.classList.add(\"profileImg\")\n  this.listDiv.appendChild(img);\n}\n\nmodule.exports = PokemonInfoView;\n\n\n//# sourceURL=webpack:///./src/views/pokemon_info_view.js?");

/***/ }),

/***/ "./src/views/pokemon_list_view.js":
/*!****************************************!*\
  !*** ./src/views/pokemon_list_view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\")\n\nconst PokemonListView = function(listDiv){\n  this.listDiv = listDiv;\n}\n\nPokemonListView.prototype.bindEvents = function(){\n  PubSub.subscribe('Pokemon:All-Data-Ready', (event) => {\n    const allPokemons = event.detail;\n    this.renderList(allPokemons)\n  });\n  PubSub.subscribe('Pokemon:Selected-Type', (event) => {\n    const selectedTypeInfo = event.detail\n    this.renderTypes(selectedTypeInfo);\n  });\n}\n\nPokemonListView.prototype.renderList = function(allPokemons){\n  const headingType = document.createElement('h2');\n  headingType.textContent = `All ${allPokemons.length} Pokemons!`\n  this.listDiv.appendChild(headingType)\n  const listOfPokemons = document.createElement('ul');\n  this.populateList(allPokemons, listOfPokemons)\n  this.listDiv.appendChild(listOfPokemons);\n}\n\nPokemonListView.prototype.populateList = function(allPokemons, list){\n  allPokemons.forEach((pokemon, index) => {\n    const singlePokemon = document.createElement('li');\n    singlePokemon.textContent = pokemon.name;\n    singlePokemon.value = index + 1; // JSON file route counter starts at 1\n    singlePokemon.addEventListener('click', handleItemClick)\n    list.appendChild(singlePokemon);\n  });\n}\n\nconst handleItemClick = function (event){\n  const selectedPokemon = event.target.value;\n  PubSub.publish('PokemonListView:PokeIndex', selectedPokemon)\n}\n\nPokemonListView.prototype.renderTypes = function(selectedTypeInfo){\n  this.listDiv.innerHTML = \"\";\n  const headingType = document.createElement('h2')\n  headingType.textContent = `${selectedTypeInfo.pokemon.length} ${selectedTypeInfo.name} Pokemons`;\n  this.listDiv.appendChild(headingType)\n  this.listTypes(selectedTypeInfo.pokemon)\n}\n\nPokemonListView.prototype.listTypes = function(pokemons){\n  const listOfPokemons = document.createElement('ul')\n  this.listTypesWithIndex(pokemons, listOfPokemons);\n  this.listDiv.appendChild(listOfPokemons)\n}\n\nPokemonListView.prototype.listTypesWithIndex = function(pokemons, list){\n  pokemons.forEach((poke) => {\n    const singlePokemon = document.createElement('li')\n    singlePokemon.textContent = poke.pokemon.name\n    singlePokemon.value = this.getIndexFromURL(poke.pokemon.url)\n    singlePokemon.addEventListener('click', handleItemClick)\n    list.appendChild(singlePokemon);\n  });\n}\n\nPokemonListView.prototype.getIndexFromURL = function(url){\n  splitChar = url.split('/')\n  return splitChar[6] // returns the index of the pokemon index\n}\n\n\nmodule.exports = PokemonListView;\n\n\n//# sourceURL=webpack:///./src/views/pokemon_list_view.js?");

/***/ })

/******/ });
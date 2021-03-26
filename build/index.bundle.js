/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Goods/Item/item.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Goods/Item/item.scss ***!
  \**************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".item {\n  border: 1px, solid, black;\n}\n\n.item.isSoldOut {\n  border: 1px, solid, red;\n}\n\n.item.isAbleToBuy {\n  border: 1px, solid, green;\n}", "",{"version":3,"sources":["webpack://./src/components/Goods/Item/item.scss"],"names":[],"mappings":"AAAA;EACE,yBAAA;AACF;;AAEA;EACE,uBAAA;AACF;;AAEA;EACE,yBAAA;AACF","sourcesContent":[".item {\n  border: 1px, solid, black;\n}\n\n.item.isSoldOut {\n  border: 1px, solid, red;\n}\n\n.item.isAbleToBuy {\n  border: 1px, solid, green;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/Goods/Item/item.scss":
/*!*********************************************!*\
  !*** ./src/components/Goods/Item/item.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_item_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./item.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Goods/Item/item.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_item_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_item_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Wallet_WalletContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Wallet/WalletContainer.js */ "./src/components/Wallet/WalletContainer.js");
/* harmony import */ var _components_Goods_GoodsContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Goods/GoodsContainer.js */ "./src/components/Goods/GoodsContainer.js");
/* harmony import */ var _components_process_processContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/process/processContainer.js */ "./src/components/process/processContainer.js");
/* harmony import */ var _util_store_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/store/root.js */ "./src/util/store/root.js");
/* harmony import */ var _util_store_useStore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/store/useStore.js */ "./src/util/store/useStore.js");
/* harmony import */ var _util_objects_goods_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/objects/goods.js */ "./src/util/objects/goods.js");
/* harmony import */ var _util_actions_goods_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/actions/goods.js */ "./src/util/actions/goods.js");
/* harmony import */ var _util_actions_wallet_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/actions/wallet.js */ "./src/util/actions/wallet.js");











class App {
  constructor({ $target }) {
    this.$target = $target;

    // components
    this.wallet = null;
    this.goods = null;
    this.process = null;

    this.store = _util_store_root_js__WEBPACK_IMPORTED_MODULE_3__.default;
    (0,_util_store_useStore_js__WEBPACK_IMPORTED_MODULE_4__.useStore)(_util_store_root_js__WEBPACK_IMPORTED_MODULE_3__.default); // store initialize

    this.state = { process: {} } // 향후 모델로 옮겨집니다.
    this.init()

    this.setState({});
  }
  init() {

    let dispatch = (0,_util_store_useStore_js__WEBPACK_IMPORTED_MODULE_4__.useDispatch)("goods");
    const goodsState = (0,_util_store_useStore_js__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state) => state.goods);

    // goods 추가 과정
    const beverages = [_util_objects_goods_js__WEBPACK_IMPORTED_MODULE_5__.Coke, _util_objects_goods_js__WEBPACK_IMPORTED_MODULE_5__.Cider, _util_objects_goods_js__WEBPACK_IMPORTED_MODULE_5__.PineappleFanta, _util_objects_goods_js__WEBPACK_IMPORTED_MODULE_5__.GrapeFanta, _util_objects_goods_js__WEBPACK_IMPORTED_MODULE_5__.LemonAde, _util_objects_goods_js__WEBPACK_IMPORTED_MODULE_5__.BonBon, _util_objects_goods_js__WEBPACK_IMPORTED_MODULE_5__.CocoaJuice, _util_objects_goods_js__WEBPACK_IMPORTED_MODULE_5__.CokeZero, _util_objects_goods_js__WEBPACK_IMPORTED_MODULE_5__.PowerAde, _util_objects_goods_js__WEBPACK_IMPORTED_MODULE_5__.ChocoMilk1, _util_objects_goods_js__WEBPACK_IMPORTED_MODULE_5__.ChocoMilk2, _util_objects_goods_js__WEBPACK_IMPORTED_MODULE_5__.ChocoMilk3];
    beverages.forEach((item) => {
      [...Array(10).keys()].forEach((_) => {
        const beverage = new item();
        const payload = { [beverage.name]: beverage }
        dispatch((0,_util_actions_goods_js__WEBPACK_IMPORTED_MODULE_6__.addItem)(payload));
      })
    })

    // wallet 추가 과정
    dispatch = (0,_util_store_useStore_js__WEBPACK_IMPORTED_MODULE_4__.useDispatch)("wallet");
    const moneys = [10, 50, 100, 500, 1000, 5000, 10000];
    moneys.forEach((item) => {
      [...Array(10).keys()].forEach((_) => {
        const payload = { [item]: item }
        dispatch((0,_util_actions_wallet_js__WEBPACK_IMPORTED_MODULE_7__.addMoney)(payload));
      })
    })
    const walletState = (0,_util_store_useStore_js__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state) => state.wallet);
  }

  setState() {
    this.render();
  }

  handleChangeWallet({ method, value }) {

    const state = {
      type: "wallet",
      method: method,
      value: value
    };
    this.setState(state);
  }

  render() {

    this.wallet = new _components_Wallet_WalletContainer_js__WEBPACK_IMPORTED_MODULE_0__.default({
      $target: this.$target,
      handleChangeWallet: this.handleChangeWallet.bind(this),
    });

    this.goods = new _components_Goods_GoodsContainer_js__WEBPACK_IMPORTED_MODULE_1__.default({ $target: this.$target });

    this.process = new _components_process_processContainer_js__WEBPACK_IMPORTED_MODULE_2__.default({
      $target: this.$target,
      state: this.state.process
    })
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/Goods/GoodsContainer.js":
/*!************************************************!*\
  !*** ./src/components/Goods/GoodsContainer.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item_ItemContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item/ItemContainer.js */ "./src/components/Goods/Item/ItemContainer.js");
/* harmony import */ var _util_store_useStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/store/useStore.js */ "./src/util/store/useStore.js");
/* harmony import */ var _util_actions_goods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/actions/goods.js */ "./src/util/actions/goods.js");
/* harmony import */ var _util_enums_action_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/enums/action.js */ "./src/util/enums/action.js");






class GoodsContainer {
  constructor({$target}) {
    this.$target = $target;
    this.subscribe = (0,_util_store_useStore_js__WEBPACK_IMPORTED_MODULE_1__.useSubscribe)("goods");
    this.dispatch = (0,_util_store_useStore_js__WEBPACK_IMPORTED_MODULE_1__.useDispatch)("goods");
    
    // components
    this.items = [];

    // state
    this.goods = (0,_util_store_useStore_js__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state) => state.goods.getState());
    this.setState({});
    
    this.subscribe( _util_enums_action_js__WEBPACK_IMPORTED_MODULE_3__.OUT_ITEM, (name) => {
      this.setState({type: "amount", name});
    });
    
  }

  setState({ type, name }) {
    switch (type) {
      case "amount":
        this.items.map((item) => {
          if (item.name === name) {
            item.setState({type, value: this.goods[name].length})
          }
        });
      return;
    }
    this.render();
  }
  
  handleChangeGoods(name) {
    this.dispatch( (0,_util_actions_goods_js__WEBPACK_IMPORTED_MODULE_2__.outItem)(name) );
  }

  render() {
    const $goods = document.createElement("ul");
    $goods.className = "goods"

    for (const name in this.goods) {
      const $good = document.createElement("li");
      const item = new _Item_ItemContainer_js__WEBPACK_IMPORTED_MODULE_0__.default({
        $target: $good,
        name: name, 
        korean: this.goods[name][0].korean,
        amount: this.goods[name].length,
        handleChangeGoods: this.handleChangeGoods.bind(this)
      });

      this.items.push(item);
      $goods.append($good);
    }

    this.$target.append($goods);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoodsContainer);

/***/ }),

/***/ "./src/components/Goods/Item/ItemContainer.js":
/*!****************************************************!*\
  !*** ./src/components/Goods/Item/ItemContainer.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ItemPresentational_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemPresentational.js */ "./src/components/Goods/Item/ItemPresentational.js");
/* harmony import */ var _util_enums_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/enums/item.js */ "./src/util/enums/item.js");
/* harmony import */ var _item_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.scss */ "./src/components/Goods/Item/item.scss");



// import { useDispatch, useSubscribe, useSelector } from "../../../util/store/useStore.js";
// import { outItem } from "../../../util/actions/goods.js";
// import * as ACTION from "../../../util/enums/action.js";



// const STATUS = ["default", "isAbleToBuy", "isSoldOut"];

class ItemContainer {
  constructor({ $target, name, korean, amount, handleChangeGoods }) {
    this.$target = $target;
    this.presentational = null;

    // state
    this.amount = null;
    this.name = name;
    this.korean = korean;
    this.status = _util_enums_item_js__WEBPACK_IMPORTED_MODULE_1__.STATUS.default;
    
    this.onChangeGoods = handleChangeGoods;
    
    this.setState({ type: "amount", value: amount });

  }

  setState({type, value}) {
    switch(type) {
      case "amount":
        this.amount = value;
        if (value === 0) this.status = _util_enums_item_js__WEBPACK_IMPORTED_MODULE_1__.STATUS.isSoldOut;
        break;
      case "status":
        this.status = value;
        break;
      default:
        console.error(type, value);
        break;
    }
    this.render();
  }
  
  isAbleToBuy() {
    this.setState({ type: "status", value: _util_enums_item_js__WEBPACK_IMPORTED_MODULE_1__.STATUS.isAbleToBuy });
  }


  isSelected(value) {
    this.onChangeGoods(value)
  }

  render() {
    this.$target.innerHTML = "";
    
    this.presentational = new _ItemPresentational_js__WEBPACK_IMPORTED_MODULE_0__.default({
      $target: this.$target, 
      name: this.name,
      korean: this.korean,
      status: this.status,
      amount: this.amount,
      isSelected: this.isSelected.bind(this)
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemContainer);

/***/ }),

/***/ "./src/components/Goods/Item/ItemPresentational.js":
/*!*********************************************************!*\
  !*** ./src/components/Goods/Item/ItemPresentational.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_enums_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/enums/item.js */ "./src/util/enums/item.js");


class ItemPresentational {
  constructor({ $target, korean, name, status, amount, isSelected }) {
    this.render($target, korean, name, status, amount, isSelected);
  }

  render($target, korean, name, status, amount, isSelected) {
    $target.innerHTML = ""; // 초기화

    const $item = document.createElement("div");
    $item.className = "item";

    let $itemContents;
    switch (status) {
      case _util_enums_item_js__WEBPACK_IMPORTED_MODULE_0__.STATUS.default:
        $itemContents = /* html */ `
          <span> ${korean}, ${amount} </span>
        `;
        break;
      case _util_enums_item_js__WEBPACK_IMPORTED_MODULE_0__.STATUS.isAbleToBuy:
        $item.className += " isAbleToBuy"
        $itemContents = /* html */ `
          <span> ${korean} 구매가능 </span>
        `;
        break;
      case _util_enums_item_js__WEBPACK_IMPORTED_MODULE_0__.STATUS.isSoldOut:
        $item.className += " isSoldOut"
        $itemContents = /* html */ `
          <span> ${korean} 품절 </span>
        `;
        break;
    }
    $item.insertAdjacentHTML("beforeend", $itemContents);

    $item.addEventListener("click", (e) => {
      console.log(e.target.innerText, e.target);
      isSelected(name)
    })

    $target.append($item);

  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemPresentational);

/***/ }),

/***/ "./src/components/Wallet/WalletContainer.js":
/*!**************************************************!*\
  !*** ./src/components/Wallet/WalletContainer.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class WalletContainer {
  constructor({ $target, }) {
    
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletContainer);

/***/ }),

/***/ "./src/components/process/currentMoneyDisplay/currentMoneyPresentational.js":
/*!**********************************************************************************!*\
  !*** ./src/components/process/currentMoneyDisplay/currentMoneyPresentational.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class CurrentMoneyPresentational {
	constructor({ $target, currentMoney }) {
		this.render($target, currentMoney)
	}

	render($target, currentMoney) {

		const $currentMoney_section = document.createElement("section");
		$currentMoney_section.className = "current-money-section";

		$target.appendChild($currentMoney_section)

		const $currentMoney = `
            <span class="current-money">${currentMoney} 원</span>
        `;

		$currentMoney_section.insertAdjacentHTML("beforeend", $currentMoney)
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentMoneyPresentational);

/***/ }),

/***/ "./src/components/process/messages/messagesPresentational.js":
/*!*******************************************************************!*\
  !*** ./src/components/process/messages/messagesPresentational.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MessagesPresentational {
	constructor({ $target, messages }) {
		this.render($target, messages);
	}

	render($target, messages) {
		const $messages_section = document.createElement("section");
		$messages_section.className = "messages-section";

		$target.appendChild($messages_section)

		messages.forEach((message) => {
			const $message = `
            <div class="message">${message}</div>
            `;
			$messages_section.insertAdjacentHTML("beforeend", $message)
		})
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessagesPresentational);

/***/ }),

/***/ "./src/components/process/processContainer.js":
/*!****************************************************!*\
  !*** ./src/components/process/processContainer.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _processPresentational_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processPresentational.js */ "./src/components/process/processPresentational.js");
/* harmony import */ var _util_store_useStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/store/useStore.js */ "./src/util/store/useStore.js");
/* harmony import */ var _util_enums_action_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/enums/action.js */ "./src/util/enums/action.js");




class ProcessContainer {
	constructor({ $target, state }) {

		this.moneyPocket = [];
		this.currentMoney = 0;
		this.messages = [];
		this.buttonStatus = false;

		this.presentationals = null;

		// this.setState(state);

		this.$process = document.createElement("section");
		this.$process.className = "process";
		$target.appendChild(this.$process);

		this.setState({}); // 렌더링 이니셜라이즈

		let subscribe = (0,_util_store_useStore_js__WEBPACK_IMPORTED_MODULE_1__.useSubscribe)("goods");

		subscribe(_util_enums_action_js__WEBPACK_IMPORTED_MODULE_2__.OUT_ITEM, (name) => {
			this.setState({
				type: "SELECT_GOODS",
				method: "select",
				item: { name: name, price: 700 }
			})
		})
		//subscribe(ACTION)
	}

	setState(state) {
		// 메시지 업데이트
		this.updateMessage(state);
		// 상태 변경 
		switch (state.type) {
			case "CHANGE_CASH":
				if (state.method === "put") {
					this.moneyPocket.push(state.item);
					this.currentMoney += state.item;
				}
				else if (state.method === "return") {
					this.currentMoney -= state.item;
				}

			case "SELECT_GOODS":
				if (state.method === "select") {
					this.currentMoney -= state.item.price;
					this.moneyPocket = this.changeMoney(this.currentMoney);
				}
				break;
			default:
				new Error(`${state.type} || ${state.method} is undefined`);
				break;
		}

		// currentMoney가 0일때 버튼 비활성화 시키기
		if (this.currentMoney === 0) {
			this.buttonStatus = true;
		} else {
			this.buttonStatus = false;
		}
		// 상태 변경 후 리렌더링
		this.render();
	}

	returnMoney() {
		const shiftedCoin = this.moneyPocket.shift();

		const state = {
			type: "CHANGE_CASH",
			method: "return",
			item: shiftedCoin
		};

		this.setState(state);

		if (this.moneyPocket.length > 0) {
			this.returnMoney();
		}
	}

	updateMessage(state) {
		this.messages.push(this.selectMessage(state));
	}

	selectMessage(state) {
		switch (state.type) {
			case "INIT":
				this.currentMoney = 0;
				return `자판기 시작`

			case "CHANGE_CASH":
				if (state.method === "put") {
					return `${state.item}원이 투입 되었습니다.`
				}
				else if (state.method === "return") {
					return `잔돈 ${state.item}원이 반환 되었습니다.`
				}
				break;

			case "SELECT_GOODS":
				if (state.method === "select") {
					return `${state.item.name} 선택 하셨습니다.`
				}
				break;

			default:
				new Error(`${state.type} || ${state.method} || ${state.item} is undefined`)
				break;
		}
	}

	changeMoney(currentMoney) {
		const currentMoneyArr = currentMoney.toString().split("").reverse();
		let zero = "";
		let change = [];

		for (let i = 0; i < currentMoneyArr.length; i++) {
			const share = parseInt(currentMoneyArr[i] / 5);
			const rest = parseInt(currentMoneyArr[i] % 5);

			const fiveMoney = (share + zero) * 5;
			const oneMoney = [];

			for (let j = 0; j < rest; j++) {
				if (rest === 0) break;
				oneMoney.push(Number(1 + zero))
			}

			change.push(fiveMoney);
			oneMoney.forEach(v => change.push(v));
			zero += "0";
		}
		change = change.filter(v => v !== 0)
		return change
	}

	render() {

		this.$process.innerHTML = "";

		this.presentationals = {
			process: new _processPresentational_js__WEBPACK_IMPORTED_MODULE_0__.default({
				$target: this.$process,
				currentMoney: this.currentMoney, // 머니 컴포넌트 상태
				messages: this.messages, // 메세지 컴포넌트 상태
				buttonStatus: this.buttonStatus, // 버튼 컴포넌트 상태
				reset: this.returnMoney.bind(this)
			})
		}
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProcessContainer);

/***/ }),

/***/ "./src/components/process/processPresentational.js":
/*!*********************************************************!*\
  !*** ./src/components/process/processPresentational.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _currentMoneyDisplay_currentMoneyPresentational_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentMoneyDisplay/currentMoneyPresentational.js */ "./src/components/process/currentMoneyDisplay/currentMoneyPresentational.js");
/* harmony import */ var _returnButton_returnButtonPresentational_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./returnButton/returnButtonPresentational.js */ "./src/components/process/returnButton/returnButtonPresentational.js");
/* harmony import */ var _messages_messagesPresentational_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/messagesPresentational.js */ "./src/components/process/messages/messagesPresentational.js");




class ProcessPresentational {
	constructor({ $target, currentMoney, reset, messages, buttonStatus }) {
		this.presentationals = null;

		this.render($target, currentMoney, reset, messages, buttonStatus)
	}

	render($target, currentMoney, reset, messages, buttonStatus) {
		console.log($target)

		const $wrap_process = document.createElement("section");
		$wrap_process.className = "wrap-process";

		$target.appendChild($wrap_process)

		this.presentationals = {
			currentMoney: new _currentMoneyDisplay_currentMoneyPresentational_js__WEBPACK_IMPORTED_MODULE_0__.default({
				$target: $wrap_process,
				currentMoney
			}),
			returnButton: new _returnButton_returnButtonPresentational_js__WEBPACK_IMPORTED_MODULE_1__.default({
				$target: $wrap_process,
				buttonStatus,
				reset
			}),
			messages: new _messages_messagesPresentational_js__WEBPACK_IMPORTED_MODULE_2__.default({
				$target: $wrap_process,
				messages
			})
		}
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProcessPresentational);

// handle[함수][상태]
// 컨테이너의 함수
/* const handleSubmitMoneyInput */
/* const handleClickReturnButton */

// 돔을 다루는 프레젠테이셔널 의 함수
/* const onClickReturnButton */
/* const onSubmitMoneyInput */

/***/ }),

/***/ "./src/components/process/returnButton/returnButtonPresentational.js":
/*!***************************************************************************!*\
  !*** ./src/components/process/returnButton/returnButtonPresentational.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ReturnButtonPresentational {
	constructor({ $target, buttonStatus, reset }) {
		this.render($target, buttonStatus, reset)
	}

	addEvent($target, reset) {
		$target.querySelector(".return-button").addEventListener("click", () => reset())
	}

	render($target, buttonStatus, reset) {
		const $returnButton_section = document.createElement("section");
		$returnButton_section.className = "return-button-section";

		$target.appendChild($returnButton_section)


		let $returnButton;
		if (buttonStatus) {
			$returnButton = `<button class="return-button" disabled>반환</button>`;
		} else {
			$returnButton = `<button class="return-button">반환</button>`;
		}
		$returnButton_section.insertAdjacentHTML("beforeend", $returnButton);
		this.addEvent($target, reset);
	}

	// 라이프 사이클
	// mount() {}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReturnButtonPresentational);

/***/ }),

/***/ "./src/util/actions/goods.js":
/*!***********************************!*\
  !*** ./src/util/actions/goods.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addItem": () => (/* binding */ addItem),
/* harmony export */   "outItem": () => (/* binding */ outItem)
/* harmony export */ });
/* harmony import */ var _enums_action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/action.js */ "./src/util/enums/action.js");


const addItem = (item) => {
  return { type: _enums_action_js__WEBPACK_IMPORTED_MODULE_0__.ADD_ITEM, payload: item }
}

const outItem = (item) => {
  return { type: _enums_action_js__WEBPACK_IMPORTED_MODULE_0__.OUT_ITEM, payload: item }
}



/***/ }),

/***/ "./src/util/actions/wallet.js":
/*!************************************!*\
  !*** ./src/util/actions/wallet.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMoney": () => (/* binding */ addMoney),
/* harmony export */   "outMoney": () => (/* binding */ outMoney)
/* harmony export */ });
/* harmony import */ var _enums_action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/action.js */ "./src/util/enums/action.js");


const addMoney = (item) => {
  return { type: _enums_action_js__WEBPACK_IMPORTED_MODULE_0__.ADD_MONEY, payload: item }
}

const outMoney = (item) => {
  return { type: _enums_action_js__WEBPACK_IMPORTED_MODULE_0__.OUT_MONEY, payload: item }
}



/***/ }),

/***/ "./src/util/enums/action.js":
/*!**********************************!*\
  !*** ./src/util/enums/action.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_ITEM": () => (/* binding */ ADD_ITEM),
/* harmony export */   "OUT_ITEM": () => (/* binding */ OUT_ITEM),
/* harmony export */   "ADD_MONEY": () => (/* binding */ ADD_MONEY),
/* harmony export */   "OUT_MONEY": () => (/* binding */ OUT_MONEY)
/* harmony export */ });
const ADD_ITEM = "goods/ADD_ITEM";
const OUT_ITEM = "goods/OUT_ITEM";

const ADD_MONEY = "wallet/ADD_MONEY";
const OUT_MONEY = "wallet/OUT_MONEY";



/***/ }),

/***/ "./src/util/enums/item.js":
/*!********************************!*\
  !*** ./src/util/enums/item.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATUS": () => (/* binding */ STATUS),
/* harmony export */   "ITEM": () => (/* binding */ ITEM)
/* harmony export */ });
const STATUS = {
  default: "default",
  isAbleToBuy: "isAbleToBuy",
  isSoldOut: "isSoldOut"
};

const ITEM = {
  COKE: {name: "coke", price: 500, korean:"콜라" },
  CIDER: {name: "cider", price: 1000, korean:"사이다" },
  PINEAPPLE_FANTA: {name: "pineappleFanta", price: 400, korean:"파인애플맛 환타" },
  GRAPE_FANTA: {name: "grapeFanta", price: 300, korean:"포도맛 환타" },
  LEMONADE: {name: "lemonAde", price: 900, korean:"레몬에이드" },
  BONBON: {name:"bonbon", price: 1200, korean:"봉봉" },
  COCOA_JUICE: {name:"cocoaJuice", price: 1000, korean:"코코아주스" },
  COKE_ZERO: {name:"cokeZero", price: 1000, korean:"제로 콜라" },
  POWERADE: {name:"powerAde", price: 1000, korean:"파워에이드" },
  CHOCO_MILK_1: {name:"chocoMilk_1", price: 1000, korean:"초코우유" },
  CHOCO_MILK_2: {name:"chocoMilk_2", price: 7000, korean: "초코우유 2" },
  CHOCO_MILK_3: {name:"chocoMilk_3", price: 600, korean: "초코우유 3" },
  STRAWBERRY_BANANA_JUICE: {name:"strawberryBananaJuice", price: 1000, korean: "딸바 주스" },

}

/***/ }),

/***/ "./src/util/objects/goods.js":
/*!***********************************!*\
  !*** ./src/util/objects/goods.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Coke": () => (/* binding */ Coke),
/* harmony export */   "Cider": () => (/* binding */ Cider),
/* harmony export */   "PineappleFanta": () => (/* binding */ PineappleFanta),
/* harmony export */   "GrapeFanta": () => (/* binding */ GrapeFanta),
/* harmony export */   "LemonAde": () => (/* binding */ LemonAde),
/* harmony export */   "BonBon": () => (/* binding */ BonBon),
/* harmony export */   "CocoaJuice": () => (/* binding */ CocoaJuice),
/* harmony export */   "CokeZero": () => (/* binding */ CokeZero),
/* harmony export */   "PowerAde": () => (/* binding */ PowerAde),
/* harmony export */   "ChocoMilk1": () => (/* binding */ ChocoMilk1),
/* harmony export */   "ChocoMilk2": () => (/* binding */ ChocoMilk2),
/* harmony export */   "ChocoMilk3": () => (/* binding */ ChocoMilk3)
/* harmony export */ });
/* harmony import */ var _enums_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/item.js */ "./src/util/enums/item.js");


class Good {
  constructor({name, price, korean}) {
    this.name = name;
    this.price = price;
    this.korean = korean;
  }
  isGoods() {
    return true;
  }
}

class Coke extends Good {
  constructor() { super(_enums_item_js__WEBPACK_IMPORTED_MODULE_0__.ITEM.COKE); }
}

class Cider extends Good {
  constructor() { super(_enums_item_js__WEBPACK_IMPORTED_MODULE_0__.ITEM.CIDER); }
}

class PineappleFanta extends Good {
  constructor() { super(_enums_item_js__WEBPACK_IMPORTED_MODULE_0__.ITEM.PINEAPPLE_FANTA); }
}

class GrapeFanta extends Good {
  constructor() { super(_enums_item_js__WEBPACK_IMPORTED_MODULE_0__.ITEM.GRAPE_FANTA); }
}

class LemonAde extends Good {
  constructor() { super(_enums_item_js__WEBPACK_IMPORTED_MODULE_0__.ITEM.LEMONADE); }
}

class BonBon extends Good {
  constructor() { super(_enums_item_js__WEBPACK_IMPORTED_MODULE_0__.ITEM.BONBON); }
}

class CocoaJuice extends Good {
  constructor() { super(_enums_item_js__WEBPACK_IMPORTED_MODULE_0__.ITEM.COCOA_JUICE); }
}

class CokeZero extends Good {
  constructor() { super(_enums_item_js__WEBPACK_IMPORTED_MODULE_0__.ITEM.COKE_ZERO); }
}

class PowerAde extends Good {
  constructor() { super(_enums_item_js__WEBPACK_IMPORTED_MODULE_0__.ITEM.POWERADE); }
}

class ChocoMilk1 extends Good {
  constructor() { super(_enums_item_js__WEBPACK_IMPORTED_MODULE_0__.ITEM.CHOCO_MILK_1); }
}
class ChocoMilk2 extends Good {
  constructor() { super(_enums_item_js__WEBPACK_IMPORTED_MODULE_0__.ITEM.CHOCO_MILK_2); }
}
class ChocoMilk3 extends Good {
  constructor() { super(_enums_item_js__WEBPACK_IMPORTED_MODULE_0__.ITEM.CHOCO_MILK_3); }
}

// 미완
/*
export class StrawberryBananaJuice extends Good {
  constructor() { super(ITEM.STRAWBERRY_BANANA_JUICE); }
}

class BananaMilk extends Good {
  constructor() { super(ITEM.PINEAPPLE_FANTA); }
}
class CoffeeMilk extends Good {
  constructor() { super(ITEM.PINEAPPLE_FANTA); }
}
class Aloe extends Good {
  constructor() { super(ITEM.PINEAPPLE_FANTA); }
}
class CornChip extends Good {
  constructor() { super(ITEM.PINEAPPLE_FANTA); }
}
class ShrimpKkang extends Good {
  constructor() { super(ITEM.PINEAPPLE_FANTA); }
}
class PotatoChip extends Good {
  constructor() { super(ITEM.PINEAPPLE_FANTA); }
}
class CanCho extends Good {
  constructor() { super(ITEM.PINEAPPLE_FANTA); }
}
*/

/***/ }),

/***/ "./src/util/reducers/goods.js":
/*!************************************!*\
  !*** ./src/util/reducers/goods.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/action.js */ "./src/util/enums/action.js");


const initialState = {
  goods: []
}

const goods = (state = initialState, { type, payload }) => {
  
  switch(type) {
    case _enums_action_js__WEBPACK_IMPORTED_MODULE_0__.ADD_ITEM:
      // 처음 들어올 때
      const name = Object.keys(payload)[0];
      const value = Object.values(payload)[0];
  
      if (!state.goods?.[name]) {
        return  { 
          goods: {
            ...state.goods,
            [name]: [value]
          } 
        }
      }
      // 처음 들어오는게 아닐 때
      return {
        goods: {
          ...state.goods,
          [name]: [...state.goods[name], value]   
        }
      }
    
    case _enums_action_js__WEBPACK_IMPORTED_MODULE_0__.OUT_ITEM:
      console.log(state.goods)
      console.log(payload)
      const returnItem = state.goods[payload].pop();
      return {
        goods: {
          ...state.goods,
          [payload]: state.goods[payload]
        }
      }
    default:
      console.log("error");
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (goods);

/***/ }),

/***/ "./src/util/reducers/wallet.js":
/*!*************************************!*\
  !*** ./src/util/reducers/wallet.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/action.js */ "./src/util/enums/action.js");


const initialState = {
  wallet: []
}

const wallet = (state = initialState, { type, payload }) => {
  const name = Object.keys(payload)[0];
  const value = Object.values(payload)[0];
  
  switch(type) {
    case _enums_action_js__WEBPACK_IMPORTED_MODULE_0__.ADD_MONEY:
      // 처음 들어올 때
      if (!state.wallet?.[name]) {
        return  { 
          wallet: {
            ...state.wallet,
            [name]: [value]
          } 
        }
      }
      // 처음 들어오는게 아닐 때
      return {
        wallet: {
          ...state.wallet,
          [name]: [...state.wallet[name], value]   
        }
      }
    
    case _enums_action_js__WEBPACK_IMPORTED_MODULE_0__.OUT_MONEY:
      const returnItem = state.wallet[name].pop();
      return {
        wallet: {
          ...state.wallet,
          [name]: state.wallet[name]
        }
      }
    default:
      console.log("error");
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wallet);

/***/ }),

/***/ "./src/util/store/createStore.js":
/*!***************************************!*\
  !*** ./src/util/store/createStore.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createStore = (reducer) => {
  
  let state = {};
  let listeners = [];

  const getState = () => {
    // return {...state};
    return state[Object.keys(state)[0]]
  }
  
  const dispatch = (action) => {
    state = reducer(state, action);
    notify(action);
  }
  
  const subscribe = (actionType, func) => {
    console.log(func)
    if (!listeners[actionType]) {
      listeners[actionType] = [func];
    } else {
      listeners[actionType].push(func);
    }
    
    // listeners.push({
    //   subscriber: func, 
    //   context
    // });
  }

  const unsubscribe = (observer) => {
    // listeners = listeners.filter((listener) => {
    //   return listener !== observer;
    // });
  }

  const notify = ({type, payload}) => {
    listeners[type]?.forEach((subscriber) => {
      // subscriber.call(context);
      subscriber(payload);
    });
  }
  
  return { getState, dispatch, subscribe, unsubscribe, notify }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStore);

/***/ }),

/***/ "./src/util/store/root.js":
/*!********************************!*\
  !*** ./src/util/store/root.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStore.js */ "./src/util/store/createStore.js");
/* harmony import */ var _reducers_goods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/goods.js */ "./src/util/reducers/goods.js");
/* harmony import */ var _reducers_wallet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/wallet.js */ "./src/util/reducers/wallet.js");





const reducers = {
  goods: _reducers_goods_js__WEBPACK_IMPORTED_MODULE_1__.default,
  wallet: _reducers_wallet_js__WEBPACK_IMPORTED_MODULE_2__.default
};

const store = {};

for (const reducer in reducers) {
  store[reducer] = (0,_createStore_js__WEBPACK_IMPORTED_MODULE_0__.default)(reducers[reducer]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/util/store/useStore.js":
/*!************************************!*\
  !*** ./src/util/store/useStore.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStore": () => (/* binding */ useStore),
/* harmony export */   "useDispatch": () => (/* binding */ useDispatch),
/* harmony export */   "useSelector": () => (/* binding */ useSelector),
/* harmony export */   "useSubscribe": () => (/* binding */ useSubscribe)
/* harmony export */ });
class useDispatchInit {
  constructor() {
    this.appStore = null;
  }
  init (appStore) {
    this.appStore = appStore;
  }
  useDispatch(storeName) {
    return this.appStore[storeName].dispatch;
  }
  useSelector(selectFunc) {
    return selectFunc(this.appStore);
  }
  
  useSubscribe(storeName) {
    return this.appStore[storeName].subscribe;
  }
}

const myStore = new useDispatchInit();

const useStore = myStore.init.bind(myStore);

const useDispatch = (storeName) => {
  return myStore.useDispatch(storeName);
}

const useSelector = (selectFunc) => {
  return myStore.useSelector(selectFunc)
}

const useSubscribe = (storeName) => {
  return myStore.useSubscribe(storeName);
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/public/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.js */ "./src/app.js");


const $app = document.querySelector("#app");
new _app_js__WEBPACK_IMPORTED_MODULE_0__.default({ $target: $app });
})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map
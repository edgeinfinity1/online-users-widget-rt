module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_registerWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/registerWidget */ "./src/common/registerWidget.ts");


flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('afrux/online-users-widget', function () {
  Object(_common_registerWidget__WEBPACK_IMPORTED_MODULE_1__["default"])(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a);
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.extensionData["for"]('afrux-online-users-widget').registerSetting({
    setting: 'afrux-online-users-widget.max_users',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('afrux-online-users-widget.admin.settings.max_users'),
    type: 'number'
  }).registerSetting({
    setting: 'afrux-online-users-widget.last_seen_interval',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('afrux-online-users-widget.admin.settings.last_seen_interval'),
    type: 'number'
  }).registerSetting({
    setting: 'afrux-online-users-widget.cache_ttl',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('afrux-online-users-widget.admin.settings.cache_ttl'),
    type: 'number'
  }).registerPermission({
    icon: 'fas fa-user-clock',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('afrux-online-users-widget.admin.permissions.view_online_users_widget'),
    permission: 'viewOnlineUsersWidget',
    allowGuest: true
  }, 'view');
});

/***/ }),

/***/ "./src/common/components/OnlineUsersWidget.tsx":
/*!*****************************************************!*\
  !*** ./src/common/components/OnlineUsersWidget.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnlineUsersWidget; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/extensions/afrux-forum-widgets-core/common/components/Widget */ "flarum/extensions/afrux-forum-widgets-core/common/components/Widget");
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_7__);








var OnlineUsersWidget = /*#__PURE__*/function (_Widget) {
  function OnlineUsersWidget() {
    return _Widget.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(OnlineUsersWidget, _Widget);
  var _proto = OnlineUsersWidget.prototype;
  _proto.oncreate = function oncreate(vnode) {
    this.attrs.state.users = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.onlineUsers() || [];
    this.attrs.state.total = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.totalOnlineUsers() || 0;
    this.attrs.state.max = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute("afrux-online-users-widget.maxUsers") || 15;
    console.log("max: " + flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute("afrux-online-users-widget.maxUsers"));
    if (!this.attrs.state.timerAdded) {
      console.log("onliner timer added");
      setInterval(this.load.bind(this), 120000);
      this.attrs.state.timerAdded = true;
    }
  };
  _proto.className = function className() {
    return 'Afrux-OnlineUsersWidget';
  };
  _proto.icon = function icon() {
    return 'fas fa-user-friends';
  };
  _proto.title = function title() {
    return flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('afrux-online-users-widget.forum.widget.title'));
  };
  _proto.content = function content() {
    if (this.attrs.state.isLoading) {
      return m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default.a, null);
    }
    this.attrs.state.users = this.attrs.state.users || flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.onlineUsers() || [];
    var users = this.attrs.state.users;
    this.attrs.state.total = this.attrs.state.total || flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.totalOnlineUsers() || 0;
    var total = this.attrs.state.total;
    return m("div", {
      className: "Afrux-OnlineUsersWidget-users"
    }, m("div", {
      className: "Afrux-OnlineUsersWidget-users-message"
    }, users.length === 0 ? flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('afrux-online-users-widget.forum.widget.empty') : null), m("div", {
      className: "Afrux-OnlineUsersWidget-users-list"
    }, users.map(function (user) {
      return m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('user', {
          username: user.slug()
        }),
        className: "Afrux-OnlineUsersWidget-users-item"
      }, m(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3___default.a, {
        text: user.displayName()
      }, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(user)));
    }), total > users.length ? m("span", {
      className: "Afrux-OnlineUsersWidget-users-item Afrux-OnlineUsersWidget-users-item--plus"
    }, m("span", {
      className: "Avatar"
    }, total < 50 ? "+" + (total - users.length) : "+" + (50 - users.length) + "...")) : null));
  };
  _proto.load = function load() {
    if (this.loadWithInitialResponse) {
      this.setResults(flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.onlineUsers());
      return;
    }
    this.attrs.state.isLoading = true;
    console.log("reloading widget");
    var response = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      method: 'GET',
      url: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/online-users'
    });
    setResults(response.data, response.meta);
  };
  _proto.setResults = function setResults(data, meta) {
    users = this.filterTimeUsers(users);
    this.attrs.state.users = data;
    this.attrs.state.total = meta == null ? void 0 : meta.totalCount;
    this.attrs.state.isLoading = false;
    this.attrs.state.hasLoaded = true;
    m.redraw();
    console.log("redrew");
  };
  return OnlineUsersWidget;
}(flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_7___default.a);


/***/ }),

/***/ "./src/common/registerWidget.ts":
/*!**************************************!*\
  !*** ./src/common/registerWidget.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets */ "flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets");
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_OnlineUsersWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/OnlineUsersWidget */ "./src/common/components/OnlineUsersWidget.tsx");


/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  new flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0___default.a().add({
    key: 'onlineUsers',
    component: _components_OnlineUsersWidget__WEBPACK_IMPORTED_MODULE_1__["default"],
    isDisabled: function isDisabled() {
      var onlineUsers = app.forum.onlineUsers();
      return Boolean(!app.forum.attribute('canViewOnlineUsersWidget') || !onlineUsers || !onlineUsers.length);
    },
    isUnique: true,
    placement: 'end',
    position: 1
  }).extend(app, 'afrux-online-users-widget');
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/extensions/afrux-forum-widgets-core/common/components/Widget":
/*!*****************************************************************************************************!*\
  !*** external "flarum.core.compat['extensions/afrux-forum-widgets-core/common/components/Widget']" ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extensions/afrux-forum-widgets-core/common/components/Widget'];

/***/ }),

/***/ "flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets":
/*!**************************************************************************************************!*\
  !*** external "flarum.core.compat['extensions/afrux-forum-widgets-core/common/extend/Widgets']" ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extensions/afrux-forum-widgets-core/common/extend/Widgets'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map
(this["webpackJsonpexercise-portfolio-web"] = this["webpackJsonpexercise-portfolio-web"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  display: flex;\n  flex-flow: column nowrap;\n  height: 100vh;\n}\n\n:root {\n  font-size: calc(1rem + ((1vw - 0.35rem) * 1.3889));\n  min-height: 0vw;\n}\n\n.App {\n  text-align: center;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background-color: #282c34;\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@media only screen \nand (max-device-width : 750px) {\n  :root {\n    font-size: calc(1rem + ((1vw - 0.20rem) * 1.3889));\n    min-height: 0vw;\n  }\n}\n\n/* @media only screen and (min-device-width: 751px) {\n  .App-header {\n    padding-top: 15vh;\n  }\n} */\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/style_sheets/Footer.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/style_sheets/Footer.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".footer {\n  position: fixed;\n  bottom: 0;\n  background-color: rgb(250, 215, 0);\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.footer-icon {\n  padding: 5px;\n  width: 35px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/style_sheets/Header.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/style_sheets/Header.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#navigation-bar {\n  background-color: rgb(250, 215, 0);\n  position: fixed;\n  top: 0px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n  box-shadow: 5px 7px 5px rgba(250, 210, 0, 0.30);\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  align-items: center;\n  padding: 0 10px;\n}\n\n.logo {\n  margin-bottom: -0.5em;\n}\n\n#navigation-bar a {\n  color: rgb(40,44,52);\n  text-decoration: none;\n  font-weight: 550;\n}\n\n#navigation-bar a.menu-item:hover{\n  color: rgb(40,44,52);\n  font-size: calc(1rem + ((1vw - 0.55rem) * 1.3889));\n  transition: 0.5s;\n}\n\n#navigation-bar #active-page {\n  color: rgb(180, 165, 0);\n}\n\n@media screen and (max-width: 750px) {\n  .toggle-menu {\n    order: 1;\n    width: 100%;\n    cursor: pointer;\n  }\n\n  .menu-item {\n    order: 2;\n    width: 100%;\n    display: none;\n  }\n\n  #navigation-bar.active {\n    height: 100vh;\n  }\n\n  #navigation-bar.active .menu-item {\n    display: block;\n  }\n}\n\n@media only screen and (min-width: 751px) {\n  #navigation-bar a {\n    font-size: calc(1rem + ((1vw - 0.60rem) * 1.3889));\n  }\n\n  #navigation-bar a:not(:nth-last-child(2)){\n    border-right: 1px solid black;\n    border-width: 1px 1px 0 0;\n    padding-right: 10vw;\n  }\n\n  .toggle-menu-container {\n    display: none;\n  }\n\n  .menu-item {\n    order: 0;\n    display: initial;\n  }\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* #navigation-bar {\n  background-color: rgb(250, 215, 0);\n  border-radius: 10px;\n  box-shadow: 5px 7px 5px rgba(250, 210, 0, 0.30);\n  position: absolute;\n  top: 15px;\n  left: 0;\n  right: 0;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 40%;\n  height: 2.5vh;\n  padding: 1em;\n  display: flex;\n  justify-content: space-around;\n}\n\n.icon {\n  display: none;\n}\n\n@media screen and (max-width: 600px) {\n  #navigation-bar a:not(:first-child) {display: none;}\n  #navigation-bar .icon {\n    float: right;\n    display: block;\n  }\n\n  #navigation-bar.responsive-menu {position: relative;}\n  #navigation-bar.responsive-menu .icon {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n  #navigation-bar.responsive-menu a {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n} */\n\n/* @media only screen \nand (min-width : 900px) {\n  #navigation-bar a {\n    color: rgb(40,44,52);\n    text-decoration: none;\n    font-weight: 550;\n    transition: 0.5s;\n  }\n  \n  #navigation-bar a:not(:last-child){\n    border-right: 1px solid black;\n    border-width: 1px 1px 0 0;\n    padding-right: 2.5vw;\n    height:100%;\n  }\n} */\n\n\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/style_sheets/Home.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/style_sheets/Home.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".profile-photo {\n  width: 70vw;\n  border-radius: 100%;\n}\n\n@media only screen and (min-device-width: 751px) {\n  .profile-photo {\n    width: 30vw;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/style_sheets/Projects.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/style_sheets/Projects.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".projects-grid {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n}\n\n.project-container {\n  border: 1px rgb(250, 215, 0) solid;\n  margin: 5px;\n  padding: 5px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages */ "./src/pages/index.js");
var _jsxFileName = "/home/leandro-parisi/Documents/6. Programa\xE7\xE3o/1. Portfolio/Portfolio_website/src/App.js";






function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/",
    component: _pages__WEBPACK_IMPORTED_MODULE_4__["Home"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/about",
    component: _pages__WEBPACK_IMPORTED_MODULE_4__["About"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/projects",
    component: _pages__WEBPACK_IMPORTED_MODULE_4__["Projects"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/contact",
    component: _pages__WEBPACK_IMPORTED_MODULE_4__["Contact"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_sheets_Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style_sheets/Footer.css */ "./src/components/style_sheets/Footer.css");
/* harmony import */ var _style_sheets_Footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_sheets_Footer_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_icons_linkedin_transparent_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icons/linkedin_transparent.png */ "./src/images/icons/linkedin_transparent.png");
/* harmony import */ var _images_icons_linkedin_transparent_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_icons_linkedin_transparent_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_icons_gitHub_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icons/gitHub.png */ "./src/images/icons/gitHub.png");
/* harmony import */ var _images_icons_gitHub_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_icons_gitHub_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/leandro-parisi/Documents/6. Programa\xE7\xE3o/1. Portfolio/Portfolio_website/src/components/Footer.js";





class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "footer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://github.com/LeandroParisi/",
      target: "_blank",
      rel: "noopener noreferrer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "footer-icon",
      src: _images_icons_gitHub_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "GitHub Icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 95
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, "|"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.linkedin.com/in/leandro-parisi/",
      target: "_blank",
      rel: "noopener noreferrer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "footer-icon",
      src: _images_icons_linkedin_transparent_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "Linkedin Icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 105
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _style_sheets_Header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style_sheets/Header.css */ "./src/components/style_sheets/Header.css");
/* harmony import */ var _style_sheets_Header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_sheets_Header_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _images_logo_logo_blue_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/logo/logo_blue.png */ "./src/images/logo/logo_blue.png");
/* harmony import */ var _images_logo_logo_blue_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_logo_logo_blue_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/leandro-parisi/Documents/6. Programa\xE7\xE3o/1. Portfolio/Portfolio_website/src/components/Header.js";







class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.changeMenuIcon = this.changeMenuIcon.bind(this);
    this.setActiveLink = this.setActiveLink.bind(this);
    this.state = {
      menuIcon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"]
    };
  }

  setActiveLink({
    target
  }) {
    const currentPage = "active-page";
    const lastPage = document.querySelector("#active-page");

    if (target.id !== currentPage) {
      target.id = currentPage;
      lastPage.id = "";
    }

    if (!target.parentNode.classList.contains("logo")) {
      this.toggleMenu();
      this.changeMenuIcon();
    }
  }

  changeMenuIcon() {
    const {
      menuIcon
    } = this.state;
    menuIcon === _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"] ? this.setState({
      menuIcon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"]
    }) : this.setState({
      menuIcon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"]
    });
  }

  toggleMenu() {
    const navigationBar = document.querySelector("#navigation-bar");

    if (navigationBar.classList.contains("active")) {
      navigationBar.classList.remove("active");
    } else {
      navigationBar.classList.add("active");
    }

    this.changeMenuIcon();
  }

  render() {
    const {
      menuIcon
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      id: "navigation-bar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      onClick: this.setActiveLink,
      className: "logo",
      id: "active-page",
      to: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_logo_logo_blue_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "Home link",
      width: "80vw",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 87
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      onClick: this.setActiveLink,
      className: "menu-item",
      to: "/about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      onClick: this.setActiveLink,
      className: "menu-item",
      to: "/projects",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      onClick: this.setActiveLink,
      className: "menu-item",
      to: "/contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      onClick: this.toggleMenu,
      className: "toggle-menu-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      className: "toggle-menu",
      icon: menuIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 74
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Footer, Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/components/style_sheets/Footer.css":
/*!************************************************!*\
  !*** ./src/components/style_sheets/Footer.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/style_sheets/Footer.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/style_sheets/Footer.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/style_sheets/Footer.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/style_sheets/Header.css":
/*!************************************************!*\
  !*** ./src/components/style_sheets/Header.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/style_sheets/Header.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/style_sheets/Header.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/style_sheets/Header.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/data/project_icons/getLoyal.png":
/*!*********************************************!*\
  !*** ./src/data/project_icons/getLoyal.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/getLoyal.845bd98d.png";

/***/ }),

/***/ "./src/data/project_icons/ollie.jpg":
/*!******************************************!*\
  !*** ./src/data/project_icons/ollie.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ollie.3ee66507.jpg";

/***/ }),

/***/ "./src/data/project_icons/pokedex.png":
/*!********************************************!*\
  !*** ./src/data/project_icons/pokedex.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pokedex.b95c0b68.png";

/***/ }),

/***/ "./src/data/projects_DB.js":
/*!*********************************!*\
  !*** ./src/data/projects_DB.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_icons_getLoyal_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_icons/getLoyal.png */ "./src/data/project_icons/getLoyal.png");
/* harmony import */ var _project_icons_getLoyal_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_icons_getLoyal_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _project_icons_pokedex_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project_icons/pokedex.png */ "./src/data/project_icons/pokedex.png");
/* harmony import */ var _project_icons_pokedex_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_project_icons_pokedex_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _project_icons_ollie_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project_icons/ollie.jpg */ "./src/data/project_icons/ollie.jpg");
/* harmony import */ var _project_icons_ollie_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_project_icons_ollie_jpg__WEBPACK_IMPORTED_MODULE_2__);



const projects = [{
  id: 1,
  name: "GetLoyal",
  image: _project_icons_getLoyal_png__WEBPACK_IMPORTED_MODULE_0___default.a
}, {
  id: 2,
  name: "Pokedex",
  image: _project_icons_pokedex_png__WEBPACK_IMPORTED_MODULE_1___default.a
}, {
  id: 3,
  name: "Ollie",
  image: _project_icons_ollie_jpg__WEBPACK_IMPORTED_MODULE_2___default.a
}];
/* harmony default export */ __webpack_exports__["default"] = (projects);

/***/ }),

/***/ "./src/images/icons/gitHub.png":
/*!*************************************!*\
  !*** ./src/images/icons/gitHub.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/icons/linkedin_transparent.png":
/*!***************************************************!*\
  !*** ./src/images/icons/linkedin_transparent.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAYFBMVEUAAADF2+u40OWmyOGNudl8rdJlos1CksUwisAnhr8oLDTK3Oe61OeFtdaty+KCstXC2erf7PRup89ancrR4/CUvdtLlsdMlsWavtioyuLS4OmgwNlzqM7h7vatxtz///+udbATAAAAAXRSTlMAQObYZgAAAAFiS0dEHwUNEL0AAAAHdElNRQfkCg8RDzt4pcdvAAAAAW9yTlQBz6J3mgAAB9tJREFUeNrlndli4joMhtkSkhZIAl0onc77P+Y5gbYhi2VJtiyF+e8T/GHHWizbi0UCLVfrTZZvi/LpprLY5tlmvVqm+HFZPa+z7ROsbbZ+1m4mT7u9j63Hud9pN5ikQ06A65QftBuO0rIqWXjfX2hl/Nvc8Tpv0JVmB2wdA+8bstaGGaupouHdVDXaSD0dish8rQo7E89GAO+mjTZaq+YoxtfqqD1Ym5MoX6uTJmMCPl3GNHxXRhW+2OYBVpWcb52Ur9U6Kd9LiO/JVfmSDjBT4GuVJeKrlfha1SkAZS28T0dxvhdVvlbCX6OcC4qXqLMqEULQVYjxLbXRfiWU6njV5rrTqwTgmzZVT+/xATW8GEhlZD59IzFWVLOh6ca4VccDTB9I4BQt3LAKGA3RkpUYKorVsOCouRXBhbPcg62Ce/GsTeDVOQzQ7iTT6SME8KDdepQC1jfsBBOw2KFGo91ytLhJce12E8QDtBZNQGJFGu/arSaJES9at/RDkS3/XKbRTtQJVbu9DNEAbaQNaSIlGffarWVpjwe0mJXBCJ+5obx1u9ld/n/ksttQahGFhAUkVG999h5UD7VyHCA+sTYOsLXWTn9Uxx2jl4mHd8qIGEB0N0w//qxLiFgIR8+jrhcoR83++RQbUbhTlfHKTDnyRhnYxAz0IlVCb5YY+54V8A7dWgbPZIMu5YJeojzZwM4b9i15lLcICWoautoQTsMq+2/A349PrsEbBrQ9G3fqDV8wCm9V0l7McZajEvKjcMpA3QN3dSKh5ncFEqoH0I5OpKS44ZlG16tp1QS3Cy681uZzTaekV0CAF20+R/toEyBkLtQ/w6fp1W/aG6DUnTbdVeNmUcM697LkH204R/vIOWAXoHYe41ujQUZfDXWNU220Hw0NBsOVnAyC7VTAVTH++bFnk3arEKwoH8+2bzTU/dGe+m3j+1nZ6pY2fT5bWzTOwwepdRmc4SNrF2WQWlb+6IP0fpjOrywBpy4TYcmKxVRn9OdU/URR+eifYfchfmg3REwHe7bitPmor2267NZV+E6r3NYg3Z7Hy+afgQsEIYQLpwa2B9i5e18d6FwxCkqgh7hs7nYPFtcAwi4WAZffA0KWXYA1RBPm/qaXlwUs9lLPzSLyhjqaEEgen++bAYq76Lq9Ps17Nh7h5wIj5sTaPvqlTIg9u4xn074W7NwRmhCowD4TAJkFEPWCXdAdiZCyg5CTJnll934kQtppJYwIoZ3JmQXPcQhJgJxJsWA9FY3w1WcHh/pktVORkC76gONv30ITvsUkpFv+hp2j0SGkn6C2ZJeDKhFeqO1csR13NGHkMzqoXvSZveiuRbgitnPPDky0CKlzf8ZO0qgREt3TnH2wDpoQOdP8fa2y6hOxxY6Yknhj71KL2ofnzuPMvSe009pZyBP6+3BgsHxbe2izacHO6Mfrw5ER92wkpM3+JTtZGo1wYhDBeyaIH6I8oWeUTo65mIXy2n3oSGWCc+qsCF2xwhZ6iDY5KhMW9NdT8zW6c6k7zwdliUnFj6UuodtlhCwGaa0mgcWHCFnvpwV8BXsHjzQhMJuSjnbaqsYWkO0GVjNIIWIuHx8C6xZ/gfcDUw3JqcnkY3yAEEp/HtE/AGsvn6fxrx9O6oT+AVhn+Vwbk/AN/QOwVvL5UiZhgf4BWEv5nLcyYSO/bqFMuPgXCKXXD3UJ29dIrwHrErbZAul1fF3Cdh1fuhZDl7Be6NfTyBK29TTSNVGIujZBwusDwnVtqoS3jJZ+baIc4S0GE64vVSX8ril7YMJFCkJUjbAwIcurmQXhz/hhBcGzIPzdsv6whL+PcPLe6Ab80SPs1iE5FnEOhF1GkpOrmQPhXd78QQnvnmHYC3QDgEJnYcJ7X4PhuM2AsLcN4CEJew/Rh6l9wr5DTB+m6AYAi0iyhIO9Kg9IOHiKvIxonnD4u+TlC/OEo0PpqKlv64Tj56khlHXCibPIpAiBQ28lCSeeI+6ZNk44eeOcECFwu50g4eSDNL/GNuF0YoFmMGwTOg6hJe2aMk3oWg0idaJpQudh0JROtEzoXtCjdCK6AcBlWlKEwFV6hE40TAgecvwQhBAgoVJRkdCT/PRcbIXvRLOCAWdxeSws7zkU2g0Mlf82y7neufYjxN1r2pdThAl1lIh2I4OEATR0nDNdNYrQ0hl8RCHvzpvxOMUCznY+xd9haeL+BroI95D+A3fJzvJTpAHO8PBk6p3Oj38vN+O8IlWd6IDzOiHaH1HMfbbhAbI3faVXwyScjQ9OnkY7zeOk7w8+4DzSNpQDQidk3ywyDGFf2vdR+rQJBbTei8E92MrWHUd9ncPxWtmdUYNm0XspX5fu1CEc7Uc2Y6kAQz+WRQeO7ao5ZC3SYEYTkMJvDImpuCfbfsuS7Y9iBseyM9/UMoALKx+jwCfYyUKqOIInCkk/4U9I3TPFumYimo7hAH5p5jaiujGAtO7aQ1y5E0uNxqRaxnbTYKUPN6JFSmilHaoJB+id0q1ssFYlYqhJw3hK+wEOGOUvcn7X5Lsyytam5Np8V8mFVcIuKEEHicqGImKiKYKa2MajMjE8+9rFm1lP+PvmUkPGmHZys3g3LasQn7Wsam0AlA68rsxtTS0+7faUc+C2e+ND06Xl+eizI8XxnCqsldPXcrXeZMe3orh9omVRvB2zzXq1/Erw6/8B9AMCSwPrCa0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTAtMTVUMTc6MTU6NTcrMDA6MDDemIihAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEwLTE1VDE3OjE1OjU3KzAwOjAwr8UwHQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/images/leandro_profile_photo.jpeg":
/*!***********************************************!*\
  !*** ./src/images/leandro_profile_photo.jpeg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/leandro_profile_photo.e56627e9.jpeg";

/***/ }),

/***/ "./src/images/logo/logo_blue.png":
/*!***************************************!*\
  !*** ./src/images/logo/logo_blue.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo_blue.2037b21d.png";

/***/ }),

/***/ "./src/images/rocket.svg":
/*!*******************************!*\
  !*** ./src/images/rocket.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/rocket.5ef2c372.svg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/leandro-parisi/Documents/6. Programa\xE7\xE3o/1. Portfolio/Portfolio_website/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/pages/About.jsx":
/*!*****************************!*\
  !*** ./src/pages/About.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/leandro-parisi/Documents/6. Programa\xE7\xE3o/1. Portfolio/Portfolio_website/src/pages/About.jsx";


class About extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    }, "About");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/pages/Contact.jsx":
/*!*******************************!*\
  !*** ./src/pages/Contact.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/leandro-parisi/Documents/6. Programa\xE7\xE3o/1. Portfolio/Portfolio_website/src/pages/Contact.jsx";


class Contact extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    }, "Contact");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/pages/Home.jsx":
/*!****************************!*\
  !*** ./src/pages/Home.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_rocket_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/rocket.svg */ "./src/images/rocket.svg");
/* harmony import */ var _images_rocket_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_rocket_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_leandro_profile_photo_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/leandro_profile_photo.jpeg */ "./src/images/leandro_profile_photo.jpeg");
/* harmony import */ var _images_leandro_profile_photo_jpeg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_leandro_profile_photo_jpeg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_sheets_Home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style_sheets/Home.css */ "./src/pages/style_sheets/Home.css");
/* harmony import */ var _style_sheets_Home_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_sheets_Home_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/leandro-parisi/Documents/6. Programa\xE7\xE3o/1. Portfolio/Portfolio_website/src/pages/Home.jsx";





class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "main-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_leandro_profile_photo_jpeg__WEBPACK_IMPORTED_MODULE_2___default.a,
      className: "profile-photo",
      alt: "Leandro Parisi Photo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, "Front-end Developer"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/Projects.jsx":
/*!********************************!*\
  !*** ./src/pages/Projects.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_projects_DB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/projects_DB */ "./src/data/projects_DB.js");
/* harmony import */ var _style_sheets_Projects_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style_sheets/Projects.css */ "./src/pages/style_sheets/Projects.css");
/* harmony import */ var _style_sheets_Projects_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_sheets_Projects_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/leandro-parisi/Documents/6. Programa\xE7\xE3o/1. Portfolio/Portfolio_website/src/pages/Projects.jsx";




class Projects extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "project-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "projects-grid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, _data_projects_DB__WEBPACK_IMPORTED_MODULE_1__["default"].map(project => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "project-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 38
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, project.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: project.image,
      alt: project.name,
      width: "300px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: About, Home, Contact, Projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About */ "./src/pages/About.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About", function() { return _About__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./src/pages/Home.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _Home__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact */ "./src/pages/Contact.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return _Contact__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects */ "./src/pages/Projects.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return _Projects__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/pages/style_sheets/Home.css":
/*!*****************************************!*\
  !*** ./src/pages/style_sheets/Home.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/style_sheets/Home.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/style_sheets/Home.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/style_sheets/Home.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/pages/style_sheets/Projects.css":
/*!*********************************************!*\
  !*** ./src/pages/style_sheets/Projects.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Projects.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/style_sheets/Projects.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Projects.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/style_sheets/Projects.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Projects.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/style_sheets/Projects.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/leandro-parisi/Documents/6. Programação/1. Portfolio/Portfolio_website/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/leandro-parisi/Documents/6. Programação/1. Portfolio/Portfolio_website/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/leandro-parisi/Documents/6. Programação/1. Portfolio/Portfolio_website/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map
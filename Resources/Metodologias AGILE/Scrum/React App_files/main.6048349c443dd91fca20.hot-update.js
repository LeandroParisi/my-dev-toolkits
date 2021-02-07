webpackHotUpdate("main",{

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _addCart_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addCart.svg */ "./src/addCart.svg");
/* harmony import */ var _addCart_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_addCart_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_home_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/home.css */ "./src/pages/style/home.css");
/* harmony import */ var _style_home_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_home_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api */ "./src/services/api.js");
/* harmony import */ var _components_SearchedItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchedItems */ "./src/components/SearchedItems.js");
/* harmony import */ var _components_SearchButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SearchButton */ "./src/components/SearchButton.js");
/* harmony import */ var _components_SearchInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SearchInput */ "./src/components/SearchInput.js");
/* harmony import */ var _components_CategoriesSideBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CategoriesSideBar */ "./src/components/CategoriesSideBar.js");
var _jsxFileName = "/home/leandro-parisi/Documents/0. Curso/projetos_trybe/sd-06-project-frontend-online-store/src/pages/Home.js";











class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.fetchSearchedItem = this.fetchSearchedItem.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.saveSelectedCategory = this.saveSelectedCategory.bind(this);
    this.state = {
      searchInput: '',
      spanMessage: 'Digite algum termo de pesquisa ou escolha uma categoria.',
      searchedItems: undefined,
      selectedCategory: ''
    };
  }

  onSearchTextChange({
    target
  }) {
    const {
      name,
      value
    } = target;
    this.setState({
      [name]: value
    });
  }

  saveSelectedCategory(id) {
    this.setState({
      selectedCategory: id
    }, () => {
      this.fetchSearchedItem();
    });
  }

  async fetchSearchedItem() {
    const {
      searchInput,
      selectedCategory: Id
    } = this.state;
    const searchResult = await _services_api__WEBPACK_IMPORTED_MODULE_5__["getProductsFromCategoryAndQuery"](Id, searchInput);
    console.log(searchResult);

    if (searchResult.results.length >= 1) {
      this.setState({
        searchedItems: searchResult.results,
        spanMessage: ''
      });
    } else {
      this.setState({
        searchedItems: undefined,
        spanMessage: 'Nenhum produto foi encontrado'
      });
    }
  }

  render() {
    const {
      searchedItems,
      spanMessage,
      searchInput
    } = this.state;
    const {
      addToCart
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "home-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CategoriesSideBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      saveSelectedCategory: this.saveSelectedCategory,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "items-display",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onSearchTextChange: this.onSearchTextChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      fetchSearchedItem: this.fetchSearchedItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }), "[,  ....]", searchedItems === undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "data-testid": "home-initial-message",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 15
      }
    }, spanMessage) : searchedItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchedItems__WEBPACK_IMPORTED_MODULE_6__["default"], {
      addTocart: addToCart,
      key: item.id,
      item: item,
      query: searchInput,
      freeShipping: item.shipping.free_shipping,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      "data-testid": "shopping-cart-button",
      to: {
        pathname: '/cart'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _addCart_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "button car shopping",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    }))));
  }

}

Home.propTypes = {
  addToCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=main.6048349c443dd91fca20.hot-update.js.map
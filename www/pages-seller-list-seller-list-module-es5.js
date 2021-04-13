(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seller-list-seller-list-module"], {
    /***/
    "3vZg":
    /*!*********************************************************!*\
      !*** ./src/app/pages/seller-list/seller-list.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function vZg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url(\"https://www.kolpaper.com/wp-content/uploads/2020/06/Iphone-Blueberries-Wallpaper.jpg\");\n}\n\n.seller__card {\n  height: 100px;\n  display: flex;\n}\n\n.seller__card--image {\n  width: 25%;\n}\n\n.seller__card--box {\n  padding: 0 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 75%;\n}\n\n.seller__card--box-left {\n  display: flex;\n  flex-direction: column;\n}\n\n.seller__card--box-left-header {\n  font-size: 1.2rem;\n  margin-bottom: 0.4rem;\n}\n\n.seller__card--box-left-price {\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlbGxlci1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlHQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQUVGOztBQURFO0VBQ0UsVUFBQTtBQUdKOztBQURFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQUdKOztBQUZJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBSU47O0FBSE07RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBS1I7O0FBSE07RUFDRSxpQkFBQTtBQUtSIiwiZmlsZSI6InNlbGxlci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly93d3cua29scGFwZXIuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA2L0lwaG9uZS1CbHVlYmVycmllcy1XYWxscGFwZXIuanBnJyk7XG59XG4uc2VsbGVyX19jYXJke1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAmLS1pbWFnZXtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gICYtLWJveHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogNzUlO1xuICAgICYtbGVmdHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgJi1oZWFkZXJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG4gICAgICB9XG4gICAgICAmLXByaWNle1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "H1Jy":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/seller-list/seller-list-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SellerListPageRoutingModule */

    /***/
    function H1Jy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerListPageRoutingModule", function () {
        return SellerListPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _seller_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./seller-list.page */
      "Wnca");

      var routes = [{
        path: '',
        component: _seller_list_page__WEBPACK_IMPORTED_MODULE_3__["SellerListPage"]
      }];

      var SellerListPageRoutingModule = function SellerListPageRoutingModule() {
        _classCallCheck(this, SellerListPageRoutingModule);
      };

      SellerListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SellerListPageRoutingModule);
      /***/
    },

    /***/
    "Wnca":
    /*!*******************************************************!*\
      !*** ./src/app/pages/seller-list/seller-list.page.ts ***!
      \*******************************************************/

    /*! exports provided: SellerListPage */

    /***/
    function Wnca(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerListPage", function () {
        return SellerListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_seller_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./seller-list.page.html */
      "wC/f");
      /* harmony import */


      var _seller_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./seller-list.page.scss */
      "3vZg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/product.service */
      "Gdn9");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var SellerListPage = /*#__PURE__*/function () {
        function SellerListPage(authService, productService, alertCtrl) {
          _classCallCheck(this, SellerListPage);

          this.authService = authService;
          this.productService = productService;
          this.alertCtrl = alertCtrl;
        }

        _createClass(SellerListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.productService.getSellerProduct();

                    case 2:
                      _context.sent.subscribe(function (data) {
                        _this.products = data;
                        console.log(_this.products);
                      });

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: 'Are you sure you want to delete this item?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel'
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            _this2.productService.deleteProduct(id);
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return this.authService.signOut();
          }
        }]);

        return SellerListPage;
      }();

      SellerListPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      SellerListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-list',
        template: _raw_loader_seller_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SellerListPage);
      /***/
    },

    /***/
    "duhN":
    /*!*********************************************************!*\
      !*** ./src/app/pages/seller-list/seller-list.module.ts ***!
      \*********************************************************/

    /*! exports provided: SellerListPageModule */

    /***/
    function duhN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerListPageModule", function () {
        return SellerListPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _seller_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./seller-list-routing.module */
      "H1Jy");
      /* harmony import */


      var _seller_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./seller-list.page */
      "Wnca");

      var SellerListPageModule = function SellerListPageModule() {
        _classCallCheck(this, SellerListPageModule);
      };

      SellerListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _seller_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerListPageRoutingModule"]],
        declarations: [_seller_list_page__WEBPACK_IMPORTED_MODULE_6__["SellerListPage"]]
      })], SellerListPageModule);
      /***/
    },

    /***/
    "wC/f":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seller-list/seller-list.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function wCF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"signOut()\">\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Sell products</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"seller__card\" *ngFor=\"let product of products\">\n        <img class=\"seller__card--image\"*ngIf=\"product.data.img\" [src]=\"product.data.img\" alt=\"\">\n          <div class=\"seller__card--box\">\n            <div class=\"seller__card--box-left\">\n              <span class=\"seller__card--box-left-header\">{{ product.data.name | uppercase}}</span>\n              <span class=\"seller__card--box-left-price\">{{ product.data.price | currency:'USD'}}</span>\n            </div>\n          <ion-button color=\"dark\" fill=\"clear\" (click)=\"delete(product.id)\">\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-button>\n        </div>\n    </ion-card>\n  <ion-fab  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"danger\" routerLink=\"new\">\n      <ion-icon name=\"add-circle\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-seller-list-seller-list-module-es5.js.map
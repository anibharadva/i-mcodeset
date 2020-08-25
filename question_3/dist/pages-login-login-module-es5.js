function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-center align-items-center w-100 h-100 login-container\">\n    <div class=\"col-xl-4 col-md-6 col-10\">\n        <div class=\"card border-0 box-shadow rounded-0\">\n            <div class=\"card-header d-flex justify-content-center align-items-center border-0 box-shadow\">\n                <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"card-body text-center pb-1\">\n                <h2>Member login</h2>\n                <a routerLink=\"/register\" class=\"transition\">Don't have an account? Sign up now!</a>\n\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"text-left mt-4\">\n                    <div class=\"form-group\">\n                        <input [formControl]=\"email\" class=\"form-control validation-field\" placeholder=\"Email\" type=\"text\">                      \n                        <small class=\"text-danger\" *ngIf=\"form.get('email').touched && form.get('email').hasError('required')\">Email is required</small>                              \n                        <small class=\"text-danger\" *ngIf=\"form.get('email').touched && form.get('email').hasError('email')\">Invalid email address</small>\n                    </div>\n                    <div class=\"form-group\">\n                        <input [formControl]=\"password\" class=\"form-control validation-field\" placeholder=\"Password\" type=\"password\">\n                        <small class=\"text-danger\" *ngIf=\"form.get('password').touched && form.get('password').hasError('required')\">Password is required</small>                              \n                        <small class=\"text-danger\" *ngIf=\"form.get('password').touched && form.get('password').hasError('minlength')\">Password isn't long enough, minimum of 6 characters</small>\n                    </div>\n                    <div class=\"form-group d-flex justify-content-between\">\n                        <div class=\"custom-control custom-checkbox\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"login-checkbox\">\n                            <label class=\"custom-control-label\" for=\"login-checkbox\">Keep me signed in.</label>\n                        </div>\n                        <a class=\"transition pull-right\" href=\"javascript:void(0);\">Forgot password?</a>                     \n                    </div>\n                    <div class=\"form-group\">\n                        <button [disabled]=\"!form.valid\" class=\"btn btn-block\" type=\"submit\">Sign in</button>\n                    </div>\n                </form>\n            </div>\n            <div class=\"card-footer text-center bg-transparent\">\n                <ul class=\"list-inline mb-0\">\n                    <li class=\"list-inline-item\">\n                        <span class=\"fa-stack fa-lg\">\n                            <i class=\"fa fa-square-o fa-stack-2x\"></i>\n                            <i class=\"fa fa-facebook fa-stack-1x\"></i>\n                        </span>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <span class=\"fa-stack fa-lg\">\n                            <i class=\"fa fa-square-o fa-stack-2x\"></i>\n                            <i class=\"fa fa-twitter fa-stack-1x\"></i>\n                        </span>\n                    </li>\n                    <li class=\"list-inline-item\">\n                        <span class=\"fa-stack fa-lg\">\n                            <i class=\"fa fa-square-o fa-stack-2x\"></i>\n                            <i class=\"fa fa-google fa-stack-1x\"></i>\n                        </span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n\n       ";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/login/login.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-container {\n  position: absolute;\n}\n.login-container .card .card-header {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n  margin-top: -40px;\n  border-radius: 50%;\n  font-size: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQTpcXGkmbV9jb2RlX3Rlc3RcXGNvZGVfdGVzdC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKO0FEQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAuY2FyZHtcbiAgICAgICAgLmNhcmQtaGVhZGVye1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5sb2dpbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubG9naW4tY29udGFpbmVyIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDM2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng2_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-validation */
    "./node_modules/ng2-validation/dist/index.js");
    /* harmony import */


    var ng2_validation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_4__);

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, fb) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.form = fb.group({
          'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, ng2_validation__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].email])],
          'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
      }

      _createClass(LoginComponent, [{
        key: "onSubmit",
        value: function onSubmit(values) {
          if (this.form.valid) {
            this.router.navigate(['/']);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          document.getElementById('preloader').classList.add('hide');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/login/login.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: routes, LoginModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/pages/login/login.component.ts");

    var routes = [{
      path: '',
      component: _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
      pathMatch: 'full'
    }];

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]]
    })], LoginModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/dashboard/dashboard.module": [
		"./src/app/pages/dashboard/dashboard.module.ts",
		"default~pages-dashboard-dashboard-module~pages-gameofthrone-gameofthrone-module",
		"pages-dashboard-dashboard-module"
	],
	"./pages/gameofthrone/gameofthrone.module": [
		"./src/app/pages/gameofthrone/gameofthrone.module.ts",
		"default~pages-dashboard-dashboard-module~pages-gameofthrone-gameofthrone-module",
		"default~pages-gameofthrone-gameofthrone-module~pages-login-login-module",
		"pages-gameofthrone-gameofthrone-module"
	],
	"./pages/login/login.module": [
		"./src/app/pages/login/login.module.ts",
		"default~pages-gameofthrone-gameofthrone-module~pages-login-login-module",
		"pages-login-login-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"app\" [ngClass]=\"{'combined': settings.theme.skin == 'combined',\n                            'light': settings.theme.skin == 'light',\n                            'dark': settings.theme.skin == 'dark',\n                            'blue': settings.theme.skin == 'blue',\n                            'green': settings.theme.skin == 'green',\n                            'navbar-fixed': settings.theme.navbarIsFixed,\n                            'sidebar-fixed': settings.theme.sidebarIsFixed, \n                            'horizontal-menu': settings.theme.menu == 'horizontal',                                      \n                            'compact': settings.theme.menuType == 'compact', \n                            'mini': settings.theme.menuType == 'mini',\n                            'menu-hide': !settings.theme.showMenu }\">\n    <div class=\"wrapper\">\n        <router-outlet></router-outlet>\n    </div> \n</div>-->\n\n<div class=\"app\"  [ngClass]=\"settings.theme.skin\" \n                  [class.navbar-fixed]=\"settings.theme.navbarIsFixed\"  \n                  [class.sidebar-fixed]=\"settings.theme.sidebarIsFixed\"  \n                  [class.horizontal-menu]=\"settings.theme.menu == 'horizontal'\" \n                  [class.compact]=\"settings.theme.menuType == 'compact'\" \n                  [class.mini]=\"settings.theme.menuType == 'mini'\" \n                  [class.menu-hide]=\"!settings.theme.showMenu\">\n    <div class=\"wrapper\">\n        <router-outlet></router-outlet>\n    </div> \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/not-found/not-found.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/not-found/not-found.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-center align-items-center w-100 h-100 error-container\">\n    <div class=\"col-xl-4 col-md-6 col-10\">\n        <div class=\"card border-0 box-shadow rounded-0\">\n            <div class=\"card-header d-flex justify-content-center align-items-center border-0 box-shadow\">\n                <i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"card-body text-center\">\n\n                <h1 class=\"display-1\">404</h1>\n                <h6 class=\"card-title\">Opps, it seems that this page does not exist.</h6>\n                <p class=\"card-text\"> If you are sure it should, search for it.</p>\n\n                <form method=\"get\">\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" placeholder=\"Enter search keyword...\" type=\"text\">\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn\" type=\"button\" (click)=\"searchResult()\"><i class=\"fa fa-search\"></i> Submit</button>\n                    </div>\n                </form>\n             \n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-inner\" [ngClass]=\"{ 'vertical-menu-tooltip-place': (settings.theme.menuType == 'mini' && settings.theme.menu == 'vertical'),\n                                        'horizontal-menu-tooltip-place': (settings.theme.menuType == 'mini' && settings.theme.menu == 'horizontal') }\">\n    \n    <app-header></app-header>\n\n    <div class=\"d-flex h-100\" [ngClass]=\"{'flex-row': settings.theme.menu == 'vertical', 'flex-column': settings.theme.menu != 'vertical'}\">\n        <app-sidebar *ngIf=\"settings.theme.menu == 'vertical'\"></app-sidebar> \n        <div class=\"main-content\"> \n            <app-side-chat></app-side-chat>           \n            <app-breadcrumb></app-breadcrumb>            \n            <router-outlet></router-outlet>              \n        </div>\n    </div>   \n\n</div>\n<app-footer></app-footer>\n<app-back-top position=\"200\"></app-back-top>\n\n<!--\n<div class=\"settings\" [ngClass]=\"{'show': showSetting}\">\n    <button class=\"btn btn-default toggle\" (click)=\"showSetting=!showSetting\"><i class=\"fa fa-spin fa-gear\"></i></button>\n    <div class=\"card\">\n        <div class=\"card-header text-center\">\n            Settings\n        </div>      \n        <div class=\"card-body mt-2\">\n            <h6>Choose menu</h6>  \n            <div class=\"form-group\">\n                <div *ngFor=\"let menu of menus; let i = index;\" class=\"custom-control custom-radio\">\n                    <input [attr.id]=\"'radio-'+i\" type=\"radio\" name=\"menus\" class=\"custom-control-input radio-dark-gray\"\n                        (change)=\"chooseMenu(menu)\" [checked]=\"menu === menuOption\" [value]=\"menu\">\n                    <label [attr.for]=\"'radio-'+i\" class=\"custom-control-label text-capitalize\">{{menu}}</label>\n                </div>\n            </div>\n        </div> \n        <div class=\"card-body\">\n            <h6>Choose menu type</h6>\n            <div class=\"form-group\">\n                <div *ngFor=\"let menuType of menuTypes; let i = index;\" class=\"custom-control custom-radio\">\n                    <input [attr.id]=\"'menuType-'+i\" type=\"radio\" name=\"menuTypes\" class=\"custom-control-input radio-dark-gray\"\n                        (change)=\"chooseMenuType(menuType)\" [checked]=\"menuType === menuTypeOption\" [value]=\"menuType\">\n                    <label [attr.for]=\"'menuType-'+i\" class=\"custom-control-label text-capitalize\">{{menuType}}</label>\n                </div>\n            </div> \n        </div> \n        <div class=\"card-body mb-3\">\n            <h6>Choose theme skin</h6>          \n            <div class=\"theme light\" (click)=\"changeTheme('light')\"></div>\n            <div class=\"theme dark\" (click)=\"changeTheme('dark')\"></div>\n            <div class=\"theme blue\" (click)=\"changeTheme('blue')\"></div>\n            <div class=\"theme green\" (click)=\"changeTheme('green')\"></div>\n            <div class=\"theme combined\" (click)=\"changeTheme('combined')\"></div>\n            <div class=\"theme purple\" (click)=\"changeTheme('purple')\"></div>\n            <div class=\"theme orange\" (click)=\"changeTheme('orange')\"></div>\n            <div class=\"theme brown\" (click)=\"changeTheme('brown')\"></div>\n            <div class=\"theme grey\" (click)=\"changeTheme('grey')\"></div>\n            <div class=\"theme pink\" (click)=\"changeTheme('pink')\"></div>\n        </div>  \n        <div class=\"card-body mb-2\">\n            <h6>Other theme options</h6> \n            <div class=\"custom-control custom-checkbox\">\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"navbarIsFixed\" [checked]=\"settings.theme.navbarIsFixed\" (change)=\"settings.theme.navbarIsFixed = !settings.theme.navbarIsFixed\">\n                <label class=\"custom-control-label\" for=\"navbarIsFixed\">Fixed header</label>\n            </div>\n            <div class=\"custom-control custom-checkbox\">\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"sidebarIsFixed\" [checked]=\"settings.theme.sidebarIsFixed\" (change)=\"settings.theme.sidebarIsFixed = !settings.theme.sidebarIsFixed\">\n                <label class=\"custom-control-label\" for=\"sidebarIsFixed\">Fixed sidebar</label>\n            </div>\n            <div class=\"custom-control custom-checkbox\">\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"footerIsFixed\" [checked]=\"settings.theme.footerIsFixed\" (change)=\"settings.theme.footerIsFixed = !settings.theme.footerIsFixed\">\n                <label class=\"custom-control-label\" for=\"footerIsFixed\">Fixed footer</label>\n            </div>\n        </div>\n    </div>\n</div>-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/applications/applications.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/applications/applications.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown d-inline-block\">\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"applications\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fa fa-th\" aria-hidden=\"true\"></i>\n    </a>\n\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 box-shadow\" aria-labelledby=\"applications\">\n        <div class=\"applications text-center pt-1\" perfectScrollbar>\n            <h5>Applications</h5>\n            <hr>\n            <div class=\"row\">\n                <div class=\"col-4 p-1 mb-3 item\">\n                    <a href=\"javascript:void(0);\">\n                        <i class=\"fa fa-user text-success\" aria-hidden=\"true\"></i>\n                        <span class=\"d-block\">My account</span>\n                    </a>\n                </div>\n                <div class=\"col-4 p-1 mb-3 item transition\">\n                    <a href=\"javascript:void(0);\">\n                        <i class=\"fa fa-search text-info\" aria-hidden=\"true\"></i>\n                        <span class=\"d-block\">Search</span>\n                    </a>\n                </div>\n                <div class=\"col-4 p-1 mb-3 item transition\">\n                    <a href=\"javascript:void(0);\">\n                        <i class=\"fa fa-youtube-play text-danger\" aria-hidden=\"true\"></i>\n                        <span class=\"d-block\">Youtube</span>\n                    </a>\n                </div>\n                <div class=\"col-4 p-1 mb-3 item transition\">\n                    <a href=\"javascript:void(0);\">\n                        <i class=\"fa fa-wrench text-primary\" aria-hidden=\"true\"></i>\n                        <span class=\"d-block\">Settings</span>\n                    </a>\n                </div>\n                <div class=\"col-4 p-1 mb-3 item transition\">\n                    <a href=\"javascript:void(0);\">\n                        <i class=\"fa fa-calendar text-warning\" aria-hidden=\"true\"></i>\n                        <span class=\"d-block\">Calendar</span>\n                    </a>\n                </div>\n                <div class=\"col-4 p-1 mb-3 item transition\">\n                    <a href=\"javascript:void(0);\">\n                        <i class=\"fa fa-picture-o text-success\" aria-hidden=\"true\"></i>\n                        <span class=\"d-block\">Gallery</span>\n                    </a>\n                </div>\n                <div class=\"col-4 p-1 item transition\">\n                    <a href=\"javascript:void(0);\">\n                        <i class=\"fa fa-file-text-o text-danger\" aria-hidden=\"true\"></i>\n                        <span class=\"d-block\">Documents</span>\n                    </a>\n                </div>\n                <div class=\"col-4 p-1 item transition\">\n                    <a href=\"javascript:void(0);\">\n                        <i class=\"fa fa-envelope-o text-info\" aria-hidden=\"true\"></i>\n                        <span class=\"d-block\">Mail</span>\n                    </a>\n                </div>\n                <div class=\"col-4 p-1 item transition\">\n                    <a href=\"javascript:void(0);\">\n                        <i class=\"fa fa-globe text-primary\" aria-hidden=\"true\"></i>\n                        <span class=\"d-block\">Maps</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/breadcrumb/breadcrumb.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/breadcrumb/breadcrumb.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb\" *ngIf=\"router.url != '/'\">  \n    <li *ngIf=\"router.url != '/'\" class=\"breadcrumb-item\">\n        <a routerLink=\"/\" (click)=\"closeSubMenus()\"><i class=\"fa fa-home mr-2\"></i>Home</a>\n    </li>\n    <li *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\">\n        <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>          \n        <span [hidden]=\"i != (breadcrumbs.length - 1)\"><i *ngIf=\"router.url == '/'\" class=\"fa fa-home mr-2\"></i><b>{{breadcrumb.name}}</b></span>\n    </li>\n</ol>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/favorites/favorites.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/favorites/favorites.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-start favorites-container ml-5\" [class.show-list]=\"toggle\">\n    <ul *ngIf=\"favorites.length == 0\" class=\"list-inline mb-0\">\n        <li class=\"list-inline-item\"><span class=\"fs-13 font-italic\">Choose favorites <i id=\"arrow\" class=\"fa fa-long-arrow-right\"></i></span></li>\n    </ul> \n    <ul *ngIf=\"favorites.length > 0\" class=\"list-inline mb-0\">\n        <li *ngFor=\"let favorite of favorites\" class=\"list-inline-item\" placement=\"bottom\" [ngbTooltip]=\"favorite.name\">\n            <a *ngIf=\"favorite.href\" href=\"{{favorite.href}}\" target=\"{{favorite.target}}\"><i class=\"fa fa-{{favorite.icon}}\"></i></a>\n            <a *ngIf=\"favorite.routerLink\" [routerLink]=\"favorite.routerLink\"><i class=\"fa fa-{{favorite.icon}}\"></i></a>\n        </li>\n    </ul>    \n    <ss-multiselect-dropdown id=\"favorites\" class=\"custom-multiselect\"\n        [options]=\"favoriteOptions\" \n        [texts]=\"favoriteTexts\" \n        [settings]=\"favoriteSettings\"\n        (dropdownOpened)=\"onDropdownOpened()\"\n        (dropdownClosed)=\"onDropdownClosed()\" \n        [(ngModel)]=\"favoriteModel\"\n        (ngModelChange)=\"onChange()\">\n    </ss-multiselect-dropdown>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/flags-menu/flags-menu.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/flags-menu/flags-menu.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown d-inline-block\">\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"flags-menu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"flag-icon flag-icon-gb\"></span>\n    </a>\n\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 p-0 box-shadow\" aria-labelledby=\"flags-menu\">\n        <div class=\"flags-menu\">          \n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-gb mr-2\"></span> English</a> \n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-de mr-2\"></span> German</a>        \n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-fr mr-2\"></span> French</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-ru mr-2\"></span> Russian</a>                \n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-tr mr-2\"></span> Turkish</a>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/footer/footer.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/footer/footer.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-footer d-flex align-items-center justify-content-between\" [class.fixed-bottom]=\"settings.theme.footerIsFixed\">\n    <span class=\"social-icons\">\n         <a href=\"https://www.facebook.com/exelientke\" target=\"_blank\"><i class=\"fa fa-facebook-square transition\" aria-hidden=\"true\"></i></a>\n         <a href=\"https://twitter.com/exelientke\" target=\"_blank\"><i class=\"fa fa-twitter-square transition\" aria-hidden=\"true\"></i></a>\n         <a href=\"https://www.instagram.com/exelientle\" target=\"_blank\"><i class=\"fa fa-instagram transition\" aria-hidden=\"true\"></i></a>\n    </span>\n    <span class=\"copyright\">Copyright © 2020 All Rights Reserved</span>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/header/header.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/header/header.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar box-shadow app-header\" [class.fixed-top]=\"settings.theme.navbarIsFixed\" [class.logo-visible]=\"showInfoContent\">\n    <div class=\"d-flex flex-column w-100\">\n        <div id=\"info-content\" class=\"panel-collapse collapse\">\n            <a class=\"close\" data-toggle=\"collapse\" href=\"#info-content\" (click)=\"showInfoContent = !showInfoContent\" [class.show]=\"showInfoContent\">\n                <span aria-hidden=\"true\">&times;</span>\n            </a>\n            <!-- <div class=\"row align-items-center\">\n                 <div class=\"col-md-5\">\n                     <div class=\"d-flex justify-content-center align-items-center pt-md-0 pt-3 info\">\n                         <img src=\"assets/img/users/user.jpg\" class=\"rounded-circle user-img\">\n                         <div class=\"d-flex flex-column pl-3\">\n                             <h5 class=\"mb-0\">Stanley Koech <i class=\"fa fa-check-circle fs-13 text-success ml-2\"></i></h5>\n                             <span>Project menecer</span>\n                             <div class=\"pt-3\">\n                                 <a routerLink=\"/profile\" class=\"btn btn-success mr-1\">Profile</a>\n                                 <a routerLink=\"/profile/user-info\" class=\"btn btn-gray\">Edit</a>\n                             </div>\n                         </div>\n                     </div>\n                 </div>\n                 <div class=\"col-md-7\">\n                     <div class=\"row py-4\">\n                         <div class=\"col-lg-7 col-sm-8 col-12 left-border\">\n                             <div class=\"info w-280p mx-auto text-center\">\n                                 <form>\n                                     <div class=\"form-group\">\n                                         <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Recipients\">\n                                     </div>\n                                     <div class=\"form-group\">\n                                         <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Subject\">\n                                     </div>\n                                     <div class=\"form-group\">\n                                         <textarea class=\"form-control form-control-sm\" placeholder=\"Message\" rows=\"3\"></textarea>\n                                     </div>\n                                     <button type=\"submit\" class=\"btn btn-sm btn-gray\"><i class=\"fa fa-paper-plane mr-2\"></i>Send</button>\n                                 </form>\n                             </div>\n                         </div>\n                         <div class=\"col-lg-5 col-sm-4 left-border d-none d-sm-block\">\n                             <div class=\"info w-100p mx-auto\">\n                                 <div class=\"custom-control custom-checkbox mb-1\">\n                                     <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxNotifications\" checked>\n                                     <label class=\"custom-control-label\" for=\"checkboxNotifications\">Notifications</label>\n                                 </div>\n                                 <div class=\"custom-control custom-checkbox mb-1\">\n                                     <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxTasks\" checked>\n                                     <label class=\"custom-control-label\" for=\"checkboxTasks\">Tasks</label>\n                                 </div>\n                                 <div class=\"custom-control custom-checkbox mb-1\">\n                                     <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxEvents\">\n                                     <label class=\"custom-control-label\" for=\"checkboxEvents\">Events</label>\n                                 </div>\n                                 <div class=\"custom-control custom-checkbox mb-1\">\n                                     <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxDownloads\" checked>\n                                     <label class=\"custom-control-label\" for=\"checkboxDownloads\">Downloads</label>\n                                 </div>\n                                 <div class=\"custom-control custom-checkbox mb-1\">\n                                     <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxMessages\" checked>\n                                     <label class=\"custom-control-label\" for=\"checkboxMessages\">Messages</label>\n                                 </div>\n                                 <div class=\"custom-control custom-checkbox mb-1\">\n                                     <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxUpdates\">\n                                     <label class=\"custom-control-label\" for=\"checkboxUpdates\">Updates</label>\n                                 </div>\n                                 <div class=\"custom-control custom-checkbox mb-1\">\n                                     <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxSettings\" checked>\n                                     <label class=\"custom-control-label\" for=\"checkboxSettings\">Settings</label>\n                                 </div>\n                             </div>\n                         </div>\n                     </div>\n                 </div>\n             </div>-->\n         </div>\n        <div class=\"d-flex justify-content-start align-items-center top-navbar\">                  \n            \n           <a class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">\n                <span class=\"start\">Game Of</span><span class=\"ng\">Thrones</span>\n            </a>\n\n           <span class=\"navbar-text menu-icon transition ml-3 mr-3\" [ngClass]=\"{'open': settings.theme.showMenu}\"\n                (click)=\"settings.theme.showMenu = !settings.theme.showMenu\">\n                <div class=\"line\"></div>\n                <div class=\"line\"></div>\n                <div class=\"line\"></div>\n                <div class=\"line\"></div>\n            </span>\n\n            <!--  <div class=\"ml-2 mr-2 d-none d-sm-block\">\n                 <a id=\"info-content-icon\" data-toggle=\"collapse\" href=\"#info-content\" (click)=\"showInfoContent = !showInfoContent\" class=\"d-flex\" [class.show]=\"showInfoContent\">\n                    <div [@showInfo]=\"showInfoContent\" class=\"triangle\"></div>\n                </a>\n            </div>\n\n            <form class=\"app-search d-none d-md-inline-block ml-3\">\n                <i class=\"fa fa-search\"></i>\n                <input type=\"text\" placeholder=\"Type to search...\" class=\"form-control\">\n            </form>\n\n            <app-favorites class=\"d-none d-lg-inline-block\"></app-favorites>-->\n\n            <div class=\"top-rigth-icons ml-auto\">\n            <!--    <span class=\"d-none d-sm-inline-block\">\n                    <app-flags-menu></app-flags-menu>\n                </span> \n                <span class=\"d-none d-sm-inline-block\">\n                    <app-fullscreen></app-fullscreen>\n                </span> \n                <span class=\"d-none d-sm-inline-block\">\n                    <app-applications></app-applications>                    \n                </span> \n                <span class=\"d-none d-sm-inline-block\">\n                    <app-messages></app-messages>\n                </span>               \n                <span class=\"d-none d-sm-inline-block pl-2 pr-2\" (click)=\"settings.theme.showSideChat = !settings.theme.showSideChat\">\n                    <i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i>\n                </span> -->\n                <span class=\"d-none d-sm-inline-block\">\n                    <app-user-menu></app-user-menu>\n                </span> \n                <span class=\"pl-2 pr-2\">\n                    <a routerLink=\"/login\">\n                        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n                    </a>                   \n                </span> \n            </div> \n\n        </div>\n\n        <div class=\"horizontal-menu-outer\" *ngIf=\"settings.theme.menu == 'horizontal'\">                   \n            <app-horizontal-menu *ngIf=\"showHorizontalMenu\"  [menuItems]=\"menuItems\"></app-horizontal-menu>        \n            <app-vertical-menu *ngIf=\"!showHorizontalMenu\"  [menuItems]=\"menuItems\"></app-vertical-menu>\n        </div>\n\n    </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"horizontal-menu\" class=\"menu-wrapper horizontal-menu-wrapper d-flex justify-content-start align-items-center\"></div>  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"vertical-menu\" class=\"menu-wrapper\" perfectScrollbar></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/messages/messages.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/messages/messages.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"messagesDropDown\" class=\"dropdown d-inline-block\">\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"messages\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fa fa-bell-o\" aria-hidden=\"true\"></i>\n    </a>\n\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 p-0 mt-3 box-shadow\" aria-labelledby=\"messages\">    \n        <div class=\"clearfix\">            \n            <ul id=\"messagesTabs\" class=\"nav nav-tabs nav-justified border-0\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active transition\" data-toggle=\"tab\" href=\"#comments\"><i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link transition\" data-toggle=\"tab\" href=\"#files\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link transition\" data-toggle=\"tab\" href=\"#meetings\"><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i></a>\n                </li>                                            \n            </ul>\n        </div>\n        <div class=\"tab-content\" perfectScrollbar>\n            <div class=\"tab-pane active\" id=\"comments\">\n                <div class=\"list\">\n                    <a *ngFor=\"let message of messages\" href=\"javascript:void(0);\" class=\"transition\">\n                        <img src=\"{{ ( message.image || (message.name | profilePicture)) }}\">                    \n                        <div class=\"list-content\">\n                            <h3>{{message.name}} <span class=\"pull-right\"><i class=\"fa fa-clock-o\"></i> {{message.time}}</span></h3>\n                            <p>{{message.text}}</p>\n                        </div>\n                    </a>\n                </div> \n            </div>\n            <div class=\"tab-pane\" id=\"files\">\n                <div class=\"list\">\n                    <a *ngFor=\"let file of files\" href class=\"transition\">\n                        <h3>{{file.text}} <span class=\"pull-right\">{{file.size}}</span></h3>\n                        <div class=\"progress progress-sm\">\n                            <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-{{file.class}}\" role=\"progressbar\" [style.width]=\"file.value\"  aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                    </a>\n                </div>\n            </div>\n            <div class=\"tab-pane\" id=\"meetings\">\n                <div class=\"list\">\n                    <a *ngFor=\"let meeting of meetings\" href=\"javascript:void(0);\" class=\"transition\">\n                        <div class=\"meeting-day bg-{{meeting.color}} pull-left\">\n                            <span>{{meeting.day}}</span>\n                            <span>{{meeting.month}}</span>\n                        </div>                   \n                        <div class=\"list-content\">\n                            <h2>{{meeting.title}}</h2>\n                            <p>{{meeting.text}}</p>\n                        </div>\n                    </a>\n                </div> \n            </div>\n        </div> \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/side-chat/side-chat.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/side-chat/side-chat.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-chat h-100 transition\" [class.hoverable]=\"settings.theme.sideChatIsHoverable\" [class.show]=\"settings.theme.showSideChat\" [class.show-chat-item]=\"showHoverableChatItem\" [class.show-chat-window]=\"showChatWindow\">\n    <div [hidden]=\"showChatWindow\" class=\"media p-1 rounded-left transition person-search-media align-items-center\" (mouseenter)=\"showHoverableChatItem = true\" (mouseleave)=\"showHoverableChatItem = false\">\n        <i class=\"fa fa-search mr-1\" aria-hidden=\"true\"></i>\n        <div class=\"media-body\">\n            <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control form-control-sm person-search\" placeholder=\"Search person...\">      \n        </div>\n    </div>      \n       \n    <div class=\"chat-list h-100\" [hidden]=\"showChatWindow\" perfectScrollbar>\n        <div *ngFor=\"let chat of chats | ChatPersonSearchPipe : searchText\" class=\"media p-1 rounded-left transition\" (mouseenter)=\"showHoverableChatItem = true\" (mouseleave)=\"showHoverableChatItem = false\" (click)=\"getChat(chat)\">\n            <img class=\"d-flex mr-3 rounded\" [src]=\"chat.image\">\n            <div class=\"media-body\">\n                <h6 class=\"mb-1 mt-1 text-white\">{{chat.author}}</h6>\n                <span [ngSwitch]=\"chat.authorStatus\">\n                    <i *ngSwitchCase=\"'Online'\" class=\"fa fa-check-circle text-success\" aria-hidden=\"true\"></i>\n                    <i *ngSwitchCase=\"'Offline'\" class=\"fa fa-times-circle text-danger\" aria-hidden=\"true\"></i> \n                    <i *ngSwitchCase=\"'Away'\" class=\"fa fa-clock-o text-info\" aria-hidden=\"true\"></i> \n                    <i *ngSwitchCase=\"'Do not disturb'\" class=\"fa fa-minus-circle text-warning\" aria-hidden=\"true\"></i>   \n                </span>              \n                <span class=\"status ml-1\">{{chat.authorStatus}}</span>\n            </div>\n        </div>\n    </div>      \n\n    <div class=\"chat-window\" [hidden]=\"!showChatWindow\">\n        <div class=\"d-flex justify-content-between align-items-center header\"> \n                <span class=\"pl-2 pr-2 back\" (click)=\"back()\"> \n                <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> \n            </span>               \n            <h6 class=\"text-white mb-0 mr-2\">{{interlocutor}}</h6>                \n        </div>\n\n        <div class=\"chat-talk-list pt-2\" perfectScrollbar>\n            <div *ngFor=\"let talk of talks\" class=\"media p-1 mb-1 border-0\"> \n                <img *ngIf=\"talk.side=='left'\" class=\"d-flex mr-3 rounded\" src=\"{{ talk.image }}\">        \n                <div class=\"media-body rounded pl-2 pr-2 {{talk.side}}\">\n                    <span class=\"d-block talk-text\">{{talk.text}}</span>\n                    <small class=\"mt-2 mb-1 pull-right\">{{talk.date | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</small>  \n                </div>\n                <img *ngIf=\"talk.side=='right'\" class=\"d-flex ml-3 rounded\" src=\"{{ talk.image }}\">\n            </div>\n        </div>        \n        \n        <div class=\"d-flex align-items-center pl-1 pr-1 footer\">\n            <div class=\"input-group\">                    \n                <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Enter your text...\"\n                (keyup)=\"addChatItem($event)\" [(ngModel)]=\"newChatText\">\n                <div class=\"input-group-append\" (click)=\"addChatItem($event)\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-paper-plane\"></i></span>\n                </div>\n            </div>\n        </div>\n    </div>     \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/sidebar/sidebar.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/sidebar/sidebar.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar-outer\">\n    <a class=\"logo d-flex align-items-center\" routerLink=\"/\" (click)=\"closeSubMenus()\" *ngIf=\"settings.theme.sidebarIsFixed\">\n        <span class=\"start\">Game Of</span><span class=\"ng\">Thrones</span>\n    </a>\n    <app-vertical-menu [menuItems]=\"menuItems\"></app-vertical-menu>    \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/user-menu/user-menu.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/user-menu/user-menu.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown d-inline-block\">\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"user-menu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\n    </a>\n\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 p-0 box-shadow\" aria-labelledby=\"user-menu\">\n        <div class=\"user-menu\">\n            <div class=\"user-info text-center p-3\">\n                <img src=\"assets/img/users/user.jpg\" alt=\"user-img\" class=\"user-img rounded-circle\">                    \n                <p class=\"mt-1 mb-0\"> \n                    Exelient Technologies\n                    <small>Member since Nov. 2019</small>\n                </p>\n            </div>\n            <a class=\"dropdown-item\" routerLink=\"/profile\"><i class=\"fa fa-user mr-2\"></i>Profile</a>\n            <a class=\"dropdown-item\" routerLink=\"/\"><i class=\"fa fa-cog mr-2\"></i>Settings</a>\n            <a class=\"dropdown-item\" routerLink=\"/\"><i class=\"fa fa-lock mr-2\"></i>Lock screen</a>\n            <a class=\"dropdown-item mb-1\" routerLink=\"/login\"><i class=\"fa fa-power-off mr-2\"></i>Log out</a>\n           \n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");




let AppComponent = class AppComponent {
    constructor(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-2-dropdown-multiselect */ "./node_modules/angular-2-dropdown-multiselect/fesm2015/angular-2-dropdown-multiselect.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme/pipes/pipes.module */ "./src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _theme_components_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./theme/components/header/header.component */ "./src/app/theme/components/header/header.component.ts");
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./theme/components/footer/footer.component */ "./src/app/theme/components/footer/footer.component.ts");
/* harmony import */ var _theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./theme/components/sidebar/sidebar.component */ "./src/app/theme/components/sidebar/sidebar.component.ts");
/* harmony import */ var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./theme/components/menu/vertical-menu/vertical-menu.component */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts");
/* harmony import */ var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./theme/components/menu/horizontal-menu/horizontal-menu.component */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts");
/* harmony import */ var _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./theme/components/breadcrumb/breadcrumb.component */ "./src/app/theme/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _theme_components_back_top_back_top_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./theme/components/back-top/back-top.component */ "./src/app/theme/components/back-top/back-top.component.ts");
/* harmony import */ var _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./theme/components/fullscreen/fullscreen.component */ "./src/app/theme/components/fullscreen/fullscreen.component.ts");
/* harmony import */ var _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./theme/components/applications/applications.component */ "./src/app/theme/components/applications/applications.component.ts");
/* harmony import */ var _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./theme/components/messages/messages.component */ "./src/app/theme/components/messages/messages.component.ts");
/* harmony import */ var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./theme/components/user-menu/user-menu.component */ "./src/app/theme/components/user-menu/user-menu.component.ts");
/* harmony import */ var _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./theme/components/flags-menu/flags-menu.component */ "./src/app/theme/components/flags-menu/flags-menu.component.ts");
/* harmony import */ var _theme_components_side_chat_side_chat_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./theme/components/side-chat/side-chat.component */ "./src/app/theme/components/side-chat/side-chat.component.ts");
/* harmony import */ var _theme_components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./theme/components/favorites/favorites.component */ "./src/app/theme/components/favorites/favorites.component.ts");
/* harmony import */ var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/errors/not-found/not-found.component */ "./src/app/pages/errors/not-found/not-found.component.ts");







const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_7__["MultiselectDropdownModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAir4tXhx3X-wcdZnhe8TLlo9J2m_AKx6w'
            }),
            angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__["adapterFactory"]
            }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
            _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_13__["routing"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
            _pages_pages_component__WEBPACK_IMPORTED_MODULE_16__["PagesComponent"],
            _theme_components_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
            _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
            _theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
            _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_20__["VerticalMenuComponent"],
            _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_21__["HorizontalMenuComponent"],
            _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_22__["BreadcrumbComponent"],
            _theme_components_back_top_back_top_component__WEBPACK_IMPORTED_MODULE_23__["BackTopComponent"],
            _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_24__["FullScreenComponent"],
            _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_25__["ApplicationsComponent"],
            _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_26__["MessagesComponent"],
            _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_27__["UserMenuComponent"],
            _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_28__["FlagsMenuComponent"],
            _theme_components_side_chat_side_chat_component__WEBPACK_IMPORTED_MODULE_29__["SideChatComponent"],
            _theme_components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_30__["FavoritesComponent"],
            _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__["NotFoundComponent"]
        ],
        providers: [
            _app_settings__WEBPACK_IMPORTED_MODULE_14__["AppSettings"],
            { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/errors/not-found/not-found.component */ "./src/app/pages/errors/not-found/not-found.component.ts");




const routes = [
    {
        path: '',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [
            { path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' } },
            { path: 'gameofthrone', loadChildren: './pages/gameofthrone/gameofthrone.module#GameofthroneModule', data: { breadcrumb: 'GameOfThrone' } },
        ]
    },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
    // { path: 'register', loadChildren: './pages/register/register.module#RegisterModule' },
    { path: '**', component: _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
});


/***/ }),

/***/ "./src/app/app.settings.model.ts":
/*!***************************************!*\
  !*** ./src/app/app.settings.model.ts ***!
  \***************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Settings {
    constructor(name, title, theme) {
        this.name = name;
        this.title = title;
        this.theme = theme;
    }
}


/***/ }),

/***/ "./src/app/app.settings.ts":
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_settings_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.settings.model */ "./src/app/app.settings.model.ts");



let AppSettings = class AppSettings {
    constructor() {
        this.settings = new _app_settings_model__WEBPACK_IMPORTED_MODULE_2__["Settings"]('Game Of Thrones', 'Game Of Thrones', {
            menu: 'vertical',
            menuType: 'default',
            showMenu: true,
            navbarIsFixed: true,
            footerIsFixed: false,
            sidebarIsFixed: true,
            showSideChat: false,
            sideChatIsHoverable: true,
            skin: 'combined' // light , dark, blue, green, combined, purple, orange, brown, grey, pink
        });
    }
};
AppSettings = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppSettings);



/***/ }),

/***/ "./src/app/pages/errors/not-found/not-found.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/errors/not-found/not-found.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-container {\n  position: absolute;\n}\n.error-container .card .card-header {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n  margin-top: -40px;\n  border-radius: 50%;\n  font-size: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXJyb3JzL25vdC1mb3VuZC9BOlxcaSZtX2NvZGVfdGVzdFxcY29kZV90ZXN0L3NyY1xcYXBwXFxwYWdlc1xcZXJyb3JzXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXJyb3JzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKO0FEQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXJyb3JzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAuY2FyZHtcbiAgICAgICAgLmNhcmQtaGVhZGVye1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5lcnJvci1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZXJyb3ItY29udGFpbmVyIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDM2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/errors/not-found/not-found.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/errors/not-found/not-found.component.ts ***!
  \***************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NotFoundComponent = class NotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    searchResult() {
        this.router.navigate(['/search']);
    }
    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }
};
NotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/not-found/not-found.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/errors/not-found/not-found.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NotFoundComponent);



/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**** General ****/\n.wrapper-inner {\n  min-height: 100%;\n  height: auto !important;\n  margin-bottom: -28px;\n  padding: 0 0 28px;\n}\n.main-content {\n  width: 100%;\n  padding: 25px;\n  -webkit-box-flex: 1;\n  min-height: calc(100vh - (46px + 28px));\n  overflow: hidden;\n}\n/*settings*/\n.settings {\n  position: fixed;\n  top: 80px;\n  right: -212px;\n  z-index: 995;\n  width: 210px;\n  transition: all 0.2s;\n}\n.settings.show {\n  right: -1px;\n}\n.settings .btn {\n  position: absolute;\n  left: -34px;\n  padding: 7px 12px 7px 10px;\n  z-index: 99;\n  background: #fff;\n  border-color: rgba(0, 0, 0, 0.125);\n  border-style: solid;\n  border-width: 1px 0px 1px 1px;\n  border-radius: 0;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n  cursor: pointer;\n}\n.settings .btn:focus {\n  box-shadow: none;\n}\n.settings .card {\n  border-top: none;\n  border-radius: 0;\n}\n.settings .card .card-header {\n  padding: 0.34rem 1.25rem;\n  background: #fff !important;\n  border-radius: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-weight: bold;\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n  border-bottom: 0;\n}\n.settings .card-body {\n  padding: 2px 20px;\n}\n.settings .card-body h6 {\n  border-bottom: 1px solid #eceeef;\n  padding-bottom: 2px;\n}\n.settings .theme {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 10px;\n  cursor: pointer;\n}\n.settings .theme.light {\n  background-color: #ececec;\n}\n.settings .theme.dark {\n  background-color: #262626;\n}\n.settings .theme.blue {\n  background-color: #1875D1;\n}\n.settings .theme.green {\n  background-color: #00786A;\n}\n.settings .theme.combined {\n  overflow: hidden;\n  background-color: #262626;\n}\n.settings .theme.combined:before {\n  content: \"\";\n  background-color: #f5f5f5;\n  width: 10px;\n  height: 20px;\n  display: inline-block;\n}\n.settings .theme.purple {\n  background-color: #7A1EA1;\n}\n.settings .theme.orange {\n  background-color: #F47B00;\n}\n.settings .theme.brown {\n  background-color: #5C3F36;\n}\n.settings .theme.grey {\n  background-color: #445963;\n}\n.settings .theme.pink {\n  background-color: #C1175A;\n}\n.settings .custom-control .custom-control-description {\n  margin-top: -1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQTpcXGkmbV9jb2RlX3Rlc3RcXGNvZGVfdGVzdC9zcmNcXGFwcFxcdGhlbWVcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9BOlxcaSZtX2NvZGVfdGVzdFxcY29kZV90ZXN0L3NyY1xcYXBwXFxwYWdlc1xccGFnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FDRUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0FKO0FESUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtBQ0RKO0FES0EsV0FBQTtBQUNBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxvQkFBQTtBQ0ZKO0FER0k7RUFDSSxXQUFBO0FDRFI7QURHSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQ0RSO0FERVE7RUFDSSxnQkFBQTtBQ0FaO0FER0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDRFI7QURFUTtFQUNJLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUNBWjtBREdJO0VBQ0ksaUJBQUE7QUNEUjtBREVRO0VBQ0ksZ0NBQUE7RUFDQSxtQkFBQTtBQ0FaO0FER0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNEUjtBREVRO0VBQ0kseUJBQUE7QUNBWjtBREVRO0VBQ0kseUJBQUE7QUNBWjtBREVRO0VBQ0kseUJBQUE7QUNBWjtBREVRO0VBQ0kseUJBQUE7QUNBWjtBREVRO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQ0FaO0FEQ1k7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDQ2hCO0FERVE7RUFDSSx5QkFBQTtBQ0FaO0FERVE7RUFDSSx5QkFBQTtBQ0FaO0FERVE7RUFDSSx5QkFBQTtBQ0FaO0FERVE7RUFDSSx5QkFBQTtBQ0FaO0FERVE7RUFDSSx5QkFBQTtBQ0FaO0FER0k7RUFDSSxnQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKiBHZW5lcmFsICoqKiovXG4vLyRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4kbG9nby1mb250OiAnTW9vbkhvdXNlJztcblxuJHRvcC1uYXZiYXItaGVpZ2h0OiA0NnB4OyBcblxuXG4kc2lkZWJhci13aWR0aDogMjUwcHg7XG4kc2lkZWJhci1jb21wYWN0LXdpZHRoOiAxNjBweDtcbiRzaWRlYmFyLW1pbmktd2lkdGg6IDcwcHg7XG5cbiRob3Jpem9udGFsLW1lbnUtaGVpZ2h0OiAzOHB4O1xuJGhvcml6b250YWwtY29tcGFjdC1tZW51LWhlaWdodDogNTJweDtcbiRob3Jpem9udGFsLW1pbmktbWVudS1oZWlnaHQ6IDQ2cHg7XG5cbiRjaGF0LXBlcnNvbi1zZWFyY2gtbWVkaWEtaGVpZ2h0OiAzMnB4O1xuJGNoYXQtd2luZG93LWhlYWRlci1oZWlnaHQ6IDMwcHg7XG4kY2hhdC13aW5kb3ctZm9vdGVyLWhlaWdodDogNDZweDtcblxuJGZvb3Rlci1oZWlnaHQ6IDI4cHg7XG5cbiIsIkBpbXBvcnQgXCIuLi90aGVtZS9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi53cmFwcGVyLWlubmVye1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLSRmb290ZXItaGVpZ2h0O1xuICAgIHBhZGRpbmc6IDAgMCAkZm9vdGVyLWhlaWdodDtcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWFpbi1jb250ZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTsgICAgIFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAoI3skdG9wLW5hdmJhci1oZWlnaHR9ICsgI3skZm9vdGVyLWhlaWdodH0pKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbi8qc2V0dGluZ3MqL1xuLnNldHRpbmdzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA4MHB4O1xuICAgIHJpZ2h0OiAtMjEycHg7XG4gICAgei1pbmRleDogOTk1O1xuICAgIHdpZHRoOiAyMTBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICAmLnNob3d7XG4gICAgICAgIHJpZ2h0OiAtMXB4O1xuICAgIH1cbiAgICAuYnRue1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IC0zNHB4O1xuICAgICAgICBwYWRkaW5nOiA3cHggMTJweCA3cHggMTBweDtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7ICAgICAgXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4IDBweCAxcHggMXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOmZvY3Vze1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZHtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgLmNhcmQtaGVhZGVye1xuICAgICAgICAgICAgcGFkZGluZzogMC4zNHJlbSAxLjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgfSAgIFxuICAgIC5jYXJkLWJvZHl7XG4gICAgICAgIHBhZGRpbmc6IDJweCAyMHB4O1xuICAgICAgICBoNntcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlZWVmO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGhlbWV7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgICAgICAgIFxuICAgICAgICAmLmxpZ2h0e1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICAgICAgfVxuICAgICAgICAmLmRhcmt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuICAgICAgICB9XG4gICAgICAgICYuYmx1ZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODc1RDE7XG4gICAgICAgIH1cbiAgICAgICAgJi5ncmVlbntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc4NkE7XG4gICAgICAgIH1cbiAgICAgICAgJi5jb21iaW5lZHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuICAgICAgICAgICAgJjpiZWZvcmV7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5wdXJwbGV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0ExRUExO1xuICAgICAgICB9XG4gICAgICAgICYub3Jhbmdle1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0N0IwMDtcbiAgICAgICAgfVxuICAgICAgICAmLmJyb3due1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVDM0YzNjtcbiAgICAgICAgfVxuICAgICAgICAmLmdyZXl7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ1OTYzO1xuICAgICAgICB9XG4gICAgICAgICYucGlua3tcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMTE3NUE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmN1c3RvbS1jb250cm9sIC5jdXN0b20tY29udHJvbC1kZXNjcmlwdGlvbntcbiAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICB9IFxufSIsIi8qKioqIEdlbmVyYWwgKioqKi9cbi53cmFwcGVyLWlubmVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IC0yOHB4O1xuICBwYWRkaW5nOiAwIDAgMjhweDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyNXB4O1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDQ2cHggKyAyOHB4KSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qc2V0dGluZ3MqL1xuLnNldHRpbmdzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDgwcHg7XG4gIHJpZ2h0OiAtMjEycHg7XG4gIHotaW5kZXg6IDk5NTtcbiAgd2lkdGg6IDIxMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5zZXR0aW5ncy5zaG93IHtcbiAgcmlnaHQ6IC0xcHg7XG59XG4uc2V0dGluZ3MgLmJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTM0cHg7XG4gIHBhZGRpbmc6IDdweCAxMnB4IDdweCAxMHB4O1xuICB6LWluZGV4OiA5OTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMHB4IDFweCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2V0dGluZ3MgLmJ0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uc2V0dGluZ3MgLmNhcmQge1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLnNldHRpbmdzIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDAuMzRyZW0gMS4yNXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuLnNldHRpbmdzIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAycHggMjBweDtcbn1cbi5zZXR0aW5ncyAuY2FyZC1ib2R5IGg2IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VlZWY7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4uc2V0dGluZ3MgLnRoZW1lIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNldHRpbmdzIC50aGVtZS5saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG59XG4uc2V0dGluZ3MgLnRoZW1lLmRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xufVxuLnNldHRpbmdzIC50aGVtZS5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NzVEMTtcbn1cbi5zZXR0aW5ncyAudGhlbWUuZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ODZBO1xufVxuLnNldHRpbmdzIC50aGVtZS5jb21iaW5lZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG59XG4uc2V0dGluZ3MgLnRoZW1lLmNvbWJpbmVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5zZXR0aW5ncyAudGhlbWUucHVycGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdBMUVBMTtcbn1cbi5zZXR0aW5ncyAudGhlbWUub3JhbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0N0IwMDtcbn1cbi5zZXR0aW5ncyAudGhlbWUuYnJvd24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUMzRjM2O1xufVxuLnNldHRpbmdzIC50aGVtZS5ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NTk2Mztcbn1cbi5zZXR0aW5ncyAudGhlbWUucGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDMTE3NUE7XG59XG4uc2V0dGluZ3MgLmN1c3RvbS1jb250cm9sIC5jdXN0b20tY29udHJvbC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.settings */ "./src/app/app.settings.ts");




let PagesComponent = class PagesComponent {
    constructor(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.showMenu = false;
        this.showSetting = false;
        this.menus = ['vertical', 'horizontal'];
        this.menuTypes = ['default', 'compact', 'mini'];
        this.settings = this.appSettings.settings;
        if (sessionStorage['skin']) {
            this.settings.theme.skin = sessionStorage['skin'];
        }
    }
    ngOnInit() {
        if (window.innerWidth <= 768) {
            this.settings.theme.showMenu = false;
            this.settings.theme.sideChatIsHoverable = false;
        }
        this.showMenu = this.settings.theme.showMenu;
        this.menuOption = this.settings.theme.menu;
        this.menuTypeOption = this.settings.theme.menuType;
    }
    chooseMenu(menu) {
        this.settings.theme.menu = menu;
        this.router.navigate(['/']);
    }
    chooseMenuType(menuType) {
        this.settings.theme.menuType = menuType;
        jQuery('.menu-item-link').tooltip({
            sanitize: false,
            sanitizeFn: function (content) {
                return null;
            }
        });
        if (menuType == 'mini') {
            jQuery('.menu-item-link').tooltip('enable');
        }
        else {
            jQuery('.menu-item-link').tooltip('disable');
        }
    }
    changeTheme(theme) {
        this.settings.theme.skin = theme;
        sessionStorage['skin'] = theme;
    }
    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }
    onWindowResize() {
        const showMenu = !this._showMenu();
        if (this.showMenu !== showMenu) {
            this.showMenuStateChange(showMenu);
        }
        this.showMenu = showMenu;
    }
    showMenuStateChange(showMenu) {
        this.settings.theme.showMenu = showMenu;
    }
    _showMenu() {
        return window.innerWidth <= 768;
    }
};
PagesComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], PagesComponent.prototype, "onWindowResize", null);
PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], PagesComponent);



/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-menu .applications {\n  height: 255px;\n  width: 270px;\n  padding: 0 22px;\n}\n.dropdown-menu .applications h5 {\n  color: #666;\n}\n.dropdown-menu .applications .item {\n  background: transparent;\n  border-radius: 5px;\n}\n.dropdown-menu .applications .item:hover {\n  background: #f5f5f5;\n}\n.dropdown-menu .applications .item i {\n  font-size: 28px;\n}\n.dropdown-menu .applications .item span {\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9hcHBsaWNhdGlvbnMvQTpcXGkmbV9jb2RlX3Rlc3RcXGNvZGVfdGVzdC9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXGFwcGxpY2F0aW9uc1xcYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2FwcGxpY2F0aW9ucy9hcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtBQ0VSO0FEQUk7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0FDRVI7QUREUTtFQUNJLG1CQUFBO0FDR1o7QUREUTtFQUNJLGVBQUE7QUNHWjtBRERRO0VBQ0ksV0FBQTtBQ0daIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9hcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLW1lbnUgLmFwcGxpY2F0aW9uc3tcbiAgICBoZWlnaHQ6IDI1NXB4O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBwYWRkaW5nOiAwIDIycHg7XG4gICAgaDV7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cbiAgICAuaXRlbXtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgIH1cbiAgICAgICAgaXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIH1cbiAgICB9ICAgXG59IiwiLmRyb3Bkb3duLW1lbnUgLmFwcGxpY2F0aW9ucyB7XG4gIGhlaWdodDogMjU1cHg7XG4gIHdpZHRoOiAyNzBweDtcbiAgcGFkZGluZzogMCAyMnB4O1xufVxuLmRyb3Bkb3duLW1lbnUgLmFwcGxpY2F0aW9ucyBoNSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuLmRyb3Bkb3duLW1lbnUgLmFwcGxpY2F0aW9ucyAuaXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZHJvcGRvd24tbWVudSAuYXBwbGljYXRpb25zIC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cbi5kcm9wZG93bi1tZW51IC5hcHBsaWNhdGlvbnMgLml0ZW0gaSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5kcm9wZG93bi1tZW51IC5hcHBsaWNhdGlvbnMgLml0ZW0gc3BhbiB7XG4gIGNvbG9yOiAjNjY2O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/theme/components/applications/applications.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.ts ***!
  \*************************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ApplicationsComponent = class ApplicationsComponent {
    ngOnInit() {
    }
};
ApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-applications',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./applications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/applications/applications.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./applications.component.scss */ "./src/app/theme/components/applications/applications.component.scss")).default]
    })
], ApplicationsComponent);



/***/ }),

/***/ "./src/app/theme/components/back-top/back-top.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/back-top/back-top.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  display: none;\n  text-decoration: none;\n  right: 40px;\n  bottom: 40px !important;\n  font-size: 28px;\n  text-align: center;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n  line-height: 34px;\n}\n.back-to-top:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9iYWNrLXRvcC9BOlxcaSZtX2NvZGVfdGVzdFxcY29kZV90ZXN0L3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcYmFjay10b3BcXGJhY2stdG9wLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2JhY2stdG9wL2JhY2stdG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBSks7RUFLTCxZQUxLO0VBTUwsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0RGO0FERUU7RUFDRSxVQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2JhY2stdG9wL2JhY2stdG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHNpemU6IDQwcHg7XG5cbi5iYWNrLXRvLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6ICRzaXplO1xuICBoZWlnaHQ6ICRzaXplO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICByaWdodDogNDBweDtcbiAgYm90dG9tOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjc1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIiwiLmJhY2stdG8tdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICByaWdodDogNDBweDtcbiAgYm90dG9tOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xufVxuLmJhY2stdG8tdG9wOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/theme/components/back-top/back-top.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/back-top/back-top.component.ts ***!
  \*****************************************************************/
/*! exports provided: BackTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackTopComponent", function() { return BackTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BackTopComponent = class BackTopComponent {
    constructor() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 700;
    }
    ngAfterViewInit() {
        this._onWindowScroll();
    }
    _onClick() {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    }
    _onWindowScroll() {
        let el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], BackTopComponent.prototype, "position", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], BackTopComponent.prototype, "showSpeed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], BackTopComponent.prototype, "moveSpeed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('backTop', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], BackTopComponent.prototype, "_selector", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Boolean)
], BackTopComponent.prototype, "_onClick", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], BackTopComponent.prototype, "_onWindowScroll", null);
BackTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-back-top',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        template: `
    <i #backTop class="fa fa-angle-up back-to-top transition" title="Back to Top"></i>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./back-top.component.scss */ "./src/app/theme/components/back-top/back-top.component.scss")).default]
    })
], BackTopComponent);



/***/ }),

/***/ "./src/app/theme/components/breadcrumb/breadcrumb.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.ts ***!
  \*********************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");





let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(appSettings, router, activatedRoute, title) {
        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.breadcrumbs = [];
                this.parseRoute(this.router.routerState.snapshot.root);
                this.pageTitle = '';
                this.breadcrumbs.forEach(breadcrumb => {
                    this.pageTitle += ' > ' + breadcrumb.name;
                });
                this.title.setTitle(this.settings.name + this.pageTitle);
            }
        });
    }
    parseRoute(node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                let urlSegments = [];
                node.pathFromRoot.forEach(routerState => {
                    urlSegments = urlSegments.concat(routerState.url);
                });
                const url = urlSegments.map(urlSegment => {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }
    closeSubMenus() {
        const menu = document.querySelector('#menu0');
        if (menu) {
            for (let i = 0; i < menu.children.length; i++) {
                const child = menu.children[i].children[1];
                if (child) {
                    if (child.classList.contains('show')) {
                        child.classList.remove('show');
                        menu.children[i].children[0].classList.add('collapsed');
                    }
                }
            }
        }
    }
};
BreadcrumbComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
];
BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-breadcrumb',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/breadcrumb/breadcrumb.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
], BreadcrumbComponent);

// import { Component, ViewEncapsulation } from '@angular/core';
// import { AppState } from "../../../app.state";
// @Component({
//     selector: 'az-breadcrumb',
//     encapsulation: ViewEncapsulation.None,
//     styleUrls: ['./breadcrumb.component.scss'],
//     templateUrl: './breadcrumb.component.html'
// })
// export class BreadcrumbComponent {
//     public activePageTitle:string = '';
//     constructor(private _state:AppState){
//         this._state.subscribe('menu.activeLink', (activeLink) => {
//             if (activeLink) {
//                 this.activePageTitle = activeLink;
//             }
//         });
//     }
//     public ngOnInit():void {
//         if (!this.activePageTitle) {
//             this.activePageTitle = 'dashboard';
//         }
//     }
// }


/***/ }),

/***/ "./src/app/theme/components/favorites/favorites.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/favorites/favorites.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.favorites-container {\n  position: relative;\n  padding: 0 20px 0 6px;\n}\n.favorites-container:after {\n  font-family: FontAwesome;\n  content: \"\";\n  color: #DD1B16;\n  position: absolute;\n  right: 4px;\n  top: 1px;\n  pointer-events: none;\n  cursor: pointer;\n}\n.favorites-container.show-list {\n  width: 242px;\n  border: none !important;\n}\n.favorites-container ul.list-inline {\n  white-space: nowrap;\n  overflow: hidden;\n}\n.favorites-container ul.list-inline .list-inline-item {\n  margin-right: 10px;\n}\n#favorites .dropdown {\n  position: absolute;\n  right: 0;\n  top: -6px;\n  width: 18px;\n  height: 22px;\n  overflow: hidden;\n}\n#favorites .dropdown .btn-block {\n  width: 242px;\n  opacity: 0;\n  box-shadow: none;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  border: 0;\n  padding-bottom: 13px;\n}\n#favorites .dropdown .dropdown-menu a {\n  color: #666;\n}\n#favorites .dropdown .dropdown-menu a i.fa-check {\n  color: #378D3B;\n}\n#favorites .dropdown.open {\n  overflow: visible;\n  width: auto;\n  height: auto;\n}\n#favorites .dropdown.open .btn-block {\n  opacity: 1;\n}\n#favorites .dropdown .dropdown-toggle::after {\n  content: none;\n}\n@-webkit-keyframes arrow-jump {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.7;\n    -webkit-transform: translateX(10px);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes arrow-jump {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.7;\n    transform: translateX(10px);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(0);\n  }\n}\n#arrow {\n  -webkit-animation: arrow-jump 2s infinite;\n  animation: arrow-jump 2s infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2Zhdm9yaXRlcy9BOlxcaSZtX2NvZGVfdGVzdFxcY29kZV90ZXN0L3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcZmF2b3JpdGVzXFxmYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBREVKO0FDREk7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBREdSO0FDREk7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QURHUjtBQ0RJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBREdSO0FDRlE7RUFDSSxrQkFBQTtBRElaO0FDQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBREVKO0FDREk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBREdSO0FDREk7RUFDSSxXQUFBO0FER1I7QUNGUTtFQUNJLGNBQUE7QURJWjtBQ0RJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBREdSO0FDRlE7RUFDSSxVQUFBO0FESVo7QUNESTtFQUNJLGFBQUE7QURHUjtBQ0VBO0VBQ0k7SUFDSSxVQUFBO0VEQ047RUNDRTtJQUNJLFlBQUE7SUFDQSxtQ0FBQTtFRENOO0VDQ0U7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7RURDTjtBQUNGO0FDMkJBO0VBQ0k7SUFDSSxVQUFBO0VEQ047RUNDRTtJQUNJLFlBQUE7SUFDQSwyQkFBQTtFRENOO0VDQ0U7SUFDSSxVQUFBO0lBQ0Esd0JBQUE7RURDTjtBQUNGO0FDQ0E7RUFDRSx5Q0FBQTtFQUdBLGlDQUFBO0FEQ0YiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZmF2b3JpdGVzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAyMHB4IDAgNnB4O1xufVxuLmZhdm9yaXRlcy1jb250YWluZXI6YWZ0ZXIge1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGNvbnRlbnQ6IFwi74CEXCI7XG4gIGNvbG9yOiAjREQxQjE2O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0cHg7XG4gIHRvcDogMXB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZhdm9yaXRlcy1jb250YWluZXIuc2hvdy1saXN0IHtcbiAgd2lkdGg6IDI0MnB4O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5mYXZvcml0ZXMtY29udGFpbmVyIHVsLmxpc3QtaW5saW5lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mYXZvcml0ZXMtY29udGFpbmVyIHVsLmxpc3QtaW5saW5lIC5saXN0LWlubGluZS1pdGVtIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4jZmF2b3JpdGVzIC5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTZweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMjJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNmYXZvcml0ZXMgLmRyb3Bkb3duIC5idG4tYmxvY2sge1xuICB3aWR0aDogMjQycHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xufVxuI2Zhdm9yaXRlcyAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgYSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuI2Zhdm9yaXRlcyAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgYSBpLmZhLWNoZWNrIHtcbiAgY29sb3I6ICMzNzhEM0I7XG59XG4jZmF2b3JpdGVzIC5kcm9wZG93bi5vcGVuIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG4jZmF2b3JpdGVzIC5kcm9wZG93bi5vcGVuIC5idG4tYmxvY2sge1xuICBvcGFjaXR5OiAxO1xufVxuI2Zhdm9yaXRlcyAuZHJvcGRvd24gLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBub25lO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYXJyb3ctanVtcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBhcnJvdy1qdW1wIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBhcnJvdy1qdW1wIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFycm93LWp1bXAge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cbiNhcnJvdyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhcnJvdy1qdW1wIDJzIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogYXJyb3ctanVtcCAycyBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBhcnJvdy1qdW1wIDJzIGluZmluaXRlO1xuICBhbmltYXRpb246IGFycm93LWp1bXAgMnMgaW5maW5pdGU7XG59IiwiLmZhdm9yaXRlcy1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgICBcbiAgICBwYWRkaW5nOiAwIDIwcHggMCA2cHg7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICAgICAgY29udGVudDogXCJcXGYwMDRcIjtcbiAgICAgICAgY29sb3I6ICNERDFCMTY7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDRweDtcbiAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7ICAgICAgIFxuICAgIH1cbiAgICAmLnNob3ctbGlzdHtcbiAgICAgICAgd2lkdGg6IDI0MnB4O1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9ICAgIFxuICAgIHVsLmxpc3QtaW5saW5le1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAubGlzdC1pbmxpbmUtaXRlbXtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuI2Zhdm9yaXRlcyAuZHJvcGRvd257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogLTZweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAuYnRuLWJsb2Nre1xuICAgICAgICB3aWR0aDogMjQycHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxOyBcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTNweDsgICAgICAgIFxuICAgIH1cbiAgICAuZHJvcGRvd24tbWVudSBhe1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgaS5mYS1jaGVja3tcbiAgICAgICAgICAgIGNvbG9yOiAjMzc4RDNCO1xuICAgICAgICB9XG4gICAgfVxuICAgICYub3BlbntcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIC5idG4tYmxvY2t7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVye1xuICAgICAgICBjb250ZW50Om5vbmU7XG4gICAgfVxufVxuXG5cbkAtd2Via2l0LWtleWZyYW1lcyBhcnJvdy1qdW1wIHtcbiAgICAwJXtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAle1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG59XG5ALW1vei1rZXlmcmFtZXMgYXJyb3ctanVtcCB7XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJXtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxufVxuQC1vLWtleWZyYW1lcyBhcnJvdy1qdW1wIHtcbiAgICAwJXtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAle1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgYXJyb3ctanVtcCB7XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJXtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG59XG4jYXJyb3cge1xuICAtd2Via2l0LWFuaW1hdGlvbjogYXJyb3ctanVtcCAycyBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246ICAgIGFycm93LWp1bXAgMnMgaW5maW5pdGU7IFxuICAtby1hbmltYXRpb246ICAgICAgYXJyb3ctanVtcCAycyBpbmZpbml0ZTsgXG4gIGFuaW1hdGlvbjogICAgICAgICBhcnJvdy1qdW1wIDJzIGluZmluaXRlOyBcbn0iXX0= */");

/***/ }),

/***/ "./src/app/theme/components/favorites/favorites.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/favorites/favorites.component.ts ***!
  \*******************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");



let FavoritesComponent = class FavoritesComponent {
    constructor(menuService) {
        this.menuService = menuService;
        this.favoriteModel = [];
        this.favoriteSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 0,
            displayAllSelectedText: true
        };
        this.favoriteTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'menu item selected',
            checkedPlural: 'menu items selected',
            searchPlaceholder: 'Find menu item...',
            defaultTitle: 'Select favorite menu items',
            allSelected: 'All selected',
        };
        this.favoriteOptions = [];
        this.favorites = [];
        this.menuItems = this.menuService.getVerticalMenuItems().filter(menu => menu.routerLink != null || menu.href != null);
        this.menuItems.forEach(item => {
            let menu = {
                id: item.id,
                name: item.title,
                routerLink: item.routerLink,
                href: item.href,
                icon: item.icon,
                target: item.target
            };
            this.favoriteOptions.push(menu);
        });
        if (sessionStorage["favorites"]) {
            this.favorites = JSON.parse(sessionStorage.getItem("favorites"));
            this.favorites.forEach(favorite => {
                this.favoriteModel.push(favorite.id);
            });
        }
    }
    onDropdownOpened() {
        this.toggle = true;
    }
    onDropdownClosed() {
        this.toggle = false;
    }
    onChange() {
        this.favorites.length = 0;
        this.favoriteModel.forEach(i => {
            let favorite = this.favoriteOptions.find(mail => mail.id === +i);
            this.favorites.push(favorite);
        });
        sessionStorage.setItem("favorites", JSON.stringify(this.favorites));
    }
};
FavoritesComponent.ctorParameters = () => [
    { type: _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }
];
FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/favorites/favorites.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.component.scss */ "./src/app/theme/components/favorites/favorites.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
], FavoritesComponent);



/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.flag-icon-background {\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat;\n}\n.flag-icon {\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  position: relative;\n  display: inline-block;\n  width: 1.33333333em;\n  line-height: 1em;\n}\n.flag-icon:before {\n  content: \" \";\n}\n.flag-icon-gb {\n  background-image: url('gb.svg');\n}\n.flag-icon-de {\n  background-image: url('de.svg');\n}\n.flag-icon-fr {\n  background-image: url('fr.svg');\n}\n.flag-icon-ru {\n  background-image: url('ru.svg');\n}\n.flag-icon-tr {\n  background-image: url('tr.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mbGFncy1tZW51L2ZsYWdzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvZmxhZ3MtbWVudS9BOlxcaSZtX2NvZGVfdGVzdFxcY29kZV90ZXN0L3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcZmxhZ3MtbWVudVxcZmxhZ3MtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QURFRjtBQ0FBO0VBQ0Usd0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURHRjtBQ0RBO0VBQ0UsWUFBQTtBRElGO0FDREE7RUFDRSwrQkFBQTtBRElGO0FDRkE7RUFDRSwrQkFBQTtBREtGO0FDSEE7RUFDRSwrQkFBQTtBRE1GO0FDSkE7RUFDRSwrQkFBQTtBRE9GO0FDTEE7RUFDRSwrQkFBQTtBRFFGIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mbGFncy1tZW51L2ZsYWdzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZmxhZy1pY29uLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmZsYWctaWNvbiB7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEuMzMzMzMzMzNlbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbn1cblxuLmZsYWctaWNvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIsKgXCI7XG59XG5cbi5mbGFnLWljb24tZ2Ige1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9mbGFncy9nYi5zdmcpO1xufVxuXG4uZmxhZy1pY29uLWRlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZmxhZ3MvZGUuc3ZnKTtcbn1cblxuLmZsYWctaWNvbi1mciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL2ZsYWdzL2ZyLnN2Zyk7XG59XG5cbi5mbGFnLWljb24tcnUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9mbGFncy9ydS5zdmcpO1xufVxuXG4uZmxhZy1pY29uLXRyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZmxhZ3MvdHIuc3ZnKTtcbn0iLCIuZmxhZy1pY29uLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5mbGFnLWljb24ge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxLjMzMzMzMzMzZW07XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG59XG4uZmxhZy1pY29uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwwMGEwXCI7XG59XG5cbi5mbGFnLWljb24tZ2Ige1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9mbGFncy9nYi5zdmcpO1xufVxuLmZsYWctaWNvbi1kZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL2ZsYWdzL2RlLnN2Zyk7XG59XG4uZmxhZy1pY29uLWZyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZmxhZ3MvZnIuc3ZnKTtcbn1cbi5mbGFnLWljb24tcnUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9mbGFncy9ydS5zdmcpO1xufVxuLmZsYWctaWNvbi10ciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nL2ZsYWdzL3RyLnN2Zyk7XG59Il19 */");

/***/ }),

/***/ "./src/app/theme/components/flags-menu/flags-menu.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: FlagsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagsMenuComponent", function() { return FlagsMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FlagsMenuComponent = class FlagsMenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
FlagsMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flags-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./flags-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/flags-menu/flags-menu.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./flags-menu.component.scss */ "./src/app/theme/components/flags-menu/flags-menu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FlagsMenuComponent);



/***/ }),

/***/ "./src/app/theme/components/footer/footer.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**** General ****/\n.app-footer {\n  width: 100%;\n  height: 28px;\n  padding: 0 25px;\n}\n.app-footer .copyright {\n  font-size: 12px;\n}\n.app-footer .social-icons {\n  font-size: 18px;\n}\n.app-footer .social-icons a {\n  color: inherit;\n}\n.app-footer .social-icons i {\n  margin-right: 4px;\n  opacity: 0.8;\n}\n.app-footer .social-icons i:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mb290ZXIvQTpcXGkmbV9jb2RlX3Rlc3RcXGNvZGVfdGVzdC9zcmNcXGFwcFxcdGhlbWVcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2Zvb3Rlci9BOlxcaSZtX2NvZGVfdGVzdFxcY29kZV90ZXN0L3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQ0VBO0VBQ0ksV0FBQTtFQUNBLFlEZVk7RUNkWixlQUFBO0FDQUo7QURDSTtFQUNJLGVBQUE7QUNDUjtBRENJO0VBQ0ksZUFBQTtBQ0NSO0FEQVE7RUFDSSxjQUFBO0FDRVo7QURBUTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0VaO0FERFk7RUFDSSxVQUFBO0FDR2hCIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiogR2VuZXJhbCAqKioqL1xuLy8kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuJGxvZ28tZm9udDogJ01vb25Ib3VzZSc7XG5cbiR0b3AtbmF2YmFyLWhlaWdodDogNDZweDsgXG5cblxuJHNpZGViYXItd2lkdGg6IDI1MHB4O1xuJHNpZGViYXItY29tcGFjdC13aWR0aDogMTYwcHg7XG4kc2lkZWJhci1taW5pLXdpZHRoOiA3MHB4O1xuXG4kaG9yaXpvbnRhbC1tZW51LWhlaWdodDogMzhweDtcbiRob3Jpem9udGFsLWNvbXBhY3QtbWVudS1oZWlnaHQ6IDUycHg7XG4kaG9yaXpvbnRhbC1taW5pLW1lbnUtaGVpZ2h0OiA0NnB4O1xuXG4kY2hhdC1wZXJzb24tc2VhcmNoLW1lZGlhLWhlaWdodDogMzJweDtcbiRjaGF0LXdpbmRvdy1oZWFkZXItaGVpZ2h0OiAzMHB4O1xuJGNoYXQtd2luZG93LWZvb3Rlci1oZWlnaHQ6IDQ2cHg7XG5cbiRmb290ZXItaGVpZ2h0OiAyOHB4O1xuXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uYXBwLWZvb3RlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6ICRmb290ZXItaGVpZ2h0O1xuICAgIHBhZGRpbmc6IDAgMjVweDsgICBcbiAgICAuY29weXJpZ2h0e1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5zb2NpYWwtaWNvbnN7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgYXtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICAgIGl7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gICAgXG59XG5cbiIsIi8qKioqIEdlbmVyYWwgKioqKi9cbi5hcHAtZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjhweDtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuLmFwcC1mb290ZXIgLmNvcHlyaWdodCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5hcHAtZm9vdGVyIC5zb2NpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uYXBwLWZvb3RlciAuc29jaWFsLWljb25zIGEge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5hcHAtZm9vdGVyIC5zb2NpYWwtaWNvbnMgaSB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBvcGFjaXR5OiAwLjg7XG59XG4uYXBwLWZvb3RlciAuc29jaWFsLWljb25zIGk6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/theme/components/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");



let FooterComponent = class FooterComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/footer/footer.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/theme/components/footer/footer.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
], FooterComponent);



/***/ }),

/***/ "./src/app/theme/components/fullscreen/fullscreen.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/fullscreen/fullscreen.component.ts ***!
  \*********************************************************************/
/*! exports provided: FullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function() { return FullScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FullScreenComponent = class FullScreenComponent {
    constructor() {
        this.toggle = false;
    }
    requestFullscreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    }
    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    }
    getFullscreen() {
        if (this.expand) {
            this.requestFullscreen(document.documentElement);
        }
        if (this.compress) {
            this.exitFullscreen();
        }
    }
    onFullScreenChange() {
        const fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement != null) {
            this.toggle = true;
        }
        else {
            this.toggle = false;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('expand', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], FullScreenComponent.prototype, "expand", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('compress', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], FullScreenComponent.prototype, "compress", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], FullScreenComponent.prototype, "getFullscreen", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], FullScreenComponent.prototype, "onFullScreenChange", null);
FullScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fullscreen',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        template: `
    <span class="pl-2 pr-2">
        <i *ngIf="!toggle" #expand class="fa fa-expand transition"></i>
        <i *ngIf="toggle" #compress class="fa fa-compress transition"></i>
    </span>
  `
    })
], FullScreenComponent);



/***/ }),

/***/ "./src/app/theme/components/header/header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/header/header.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**** General ****/\n.navbar.app-header {\n  padding: 0;\n  z-index: 9;\n  transition: z-index 0.5s linear;\n}\n.navbar.app-header .top-navbar {\n  padding: 0 1rem;\n  height: 46px;\n}\n.navbar.app-header .top-navbar .logo {\n  width: 220px;\n  transform: translate3d(0, 0, 0);\n}\n.navbar.app-header.logo-visible {\n  z-index: 99999;\n}\n.top-navbar .app-search {\n  position: relative;\n  margin-left: 20px;\n}\n.top-navbar .app-search i {\n  position: absolute;\n  right: 2px;\n  font-size: 14px;\n  cursor: pointer;\n  z-index: 9;\n}\n.top-navbar .app-search .form-control {\n  border: none;\n  font-size: 12px;\n  height: 18px;\n  background: transparent;\n  padding: 0;\n  padding-right: 24px;\n  padding-left: 4px;\n  box-shadow: none;\n  width: 190px;\n  opacity: 0.7;\n}\n.top-navbar .app-search .form-control:focus {\n  opacity: 1;\n}\n.top-rigth-icons span {\n  font-size: 14px;\n  cursor: pointer;\n}\n.menu-icon {\n  position: relative;\n  width: 18px;\n  cursor: pointer;\n}\n.menu-icon .line {\n  width: 100%;\n  height: 2px;\n  position: absolute;\n  background-color: #ccc;\n  transform: rotate(0deg);\n  transition: 0.15s ease-in-out;\n  transform: translate3d(0, 0, 0);\n  outline: 1px solid transparent;\n}\n.menu-icon .line:nth-child(1) {\n  top: 0;\n}\n.menu-icon .line:nth-child(2), .menu-icon .line:nth-child(3) {\n  top: 4px;\n}\n.menu-icon .line:nth-child(4) {\n  top: 8px;\n}\n.menu-icon.open {\n  -webkit-backface-visibility: hidden;\n}\n.menu-icon.open .line:nth-child(1), .menu-icon.open .line:nth-child(4) {\n  top: 4px;\n  width: 0%;\n  left: 50%;\n}\n.menu-icon.open .line:nth-child(2) {\n  transform: rotate(-45deg);\n}\n.menu-icon.open .line:nth-child(3) {\n  transform: rotate(45deg);\n}\n.logo {\n  font-family: \"MoonHouse\";\n  padding: 0;\n  font-size: 27px;\n  display: inline-block;\n  width: 250px;\n}\n.logo:hover, .logo:focus {\n  text-decoration: none;\n  color: initial;\n}\n#info-content {\n  z-index: 1;\n}\n#info-content .info, #info-content .left-border {\n  opacity: 0;\n  transition: opacity 0.5s ease-out;\n}\n#info-content .close {\n  position: absolute;\n  right: 5px;\n  z-index: 1;\n}\n#info-content.show .info, #info-content.show .left-border {\n  opacity: 1;\n}\n#info-content .user-img {\n  width: 120px;\n}\n.triangle {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 11px 10px 0 10px;\n}\n.horizontal-menu-outer {\n  height: auto;\n}\n.horizontal-menu-outer #menu0 {\n  height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9oZWFkZXIvQTpcXGkmbV9jb2RlX3Rlc3RcXGNvZGVfdGVzdC9zcmNcXGFwcFxcdGhlbWVcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL2hlYWRlci9BOlxcaSZtX2NvZGVfdGVzdFxcY29kZV90ZXN0L3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQ0VBO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFHQSwrQkFBQTtBQ0FKO0FEQ0k7RUFDSSxlQUFBO0VBQ0EsWUROWTtBRU9wQjtBREFRO0VBQ0ksWUFBQTtFQUtBLCtCQUFBO0FDRVo7QURDSTtFQUNJLGNBQUE7QUNDUjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0RKO0FERUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNBUjtBREVJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNBUjtBRENRO0VBQ0ksVUFBQTtBQ0NaO0FESUk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0RSO0FES0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRko7QURHSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUlBLHVCQUFBO0VBSUEsNkJBQUE7RUFJQSwrQkFBQTtFQUNBLDhCQUFBO0FDRFI7QURHSTtFQUNHLE1BQUE7QUNEUDtBREdJO0VBQ0csUUFBQTtBQ0RQO0FER0k7RUFDRyxRQUFBO0FDRFA7QURHSTtFQUNJLG1DQUFBO0FDRFI7QURFUTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ0FaO0FERVE7RUFJSSx5QkFBQTtBQ0FaO0FERVE7RUFJSSx3QkFBQTtBQ0FaO0FETUE7RUFDSSx3QkRqSFE7RUNrSFIsVUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlEaEhZO0FFNkdoQjtBRElJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FDRlI7QURNQTtFQUNJLFVBQUE7QUNISjtBRElJO0VBQ0ksVUFBQTtFQUdBLGlDQUFBO0FDRlI7QURJSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNGUjtBREtRO0VBQ0ksVUFBQTtBQ0haO0FETUk7RUFDSSxZQUFBO0FDSlI7QURRQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0xKO0FEUUE7RUFDSSxZQUFBO0FDTEo7QURNSTtFQUNJLGFBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqIEdlbmVyYWwgKioqKi9cbi8vJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiRsb2dvLWZvbnQ6ICdNb29uSG91c2UnO1xuXG4kdG9wLW5hdmJhci1oZWlnaHQ6IDQ2cHg7IFxuXG5cbiRzaWRlYmFyLXdpZHRoOiAyNTBweDtcbiRzaWRlYmFyLWNvbXBhY3Qtd2lkdGg6IDE2MHB4O1xuJHNpZGViYXItbWluaS13aWR0aDogNzBweDtcblxuJGhvcml6b250YWwtbWVudS1oZWlnaHQ6IDM4cHg7XG4kaG9yaXpvbnRhbC1jb21wYWN0LW1lbnUtaGVpZ2h0OiA1MnB4O1xuJGhvcml6b250YWwtbWluaS1tZW51LWhlaWdodDogNDZweDtcblxuJGNoYXQtcGVyc29uLXNlYXJjaC1tZWRpYS1oZWlnaHQ6IDMycHg7XG4kY2hhdC13aW5kb3ctaGVhZGVyLWhlaWdodDogMzBweDtcbiRjaGF0LXdpbmRvdy1mb290ZXItaGVpZ2h0OiA0NnB4O1xuXG4kZm9vdGVyLWhlaWdodDogMjhweDtcblxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLm5hdmJhci5hcHAtaGVhZGVye1xuICAgIHBhZGRpbmc6IDA7IFxuICAgIHotaW5kZXg6IDk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB6LWluZGV4IDAuNXMgbGluZWFyOyAgXG4gICAgLW1vei10cmFuc2l0aW9uOiB6LWluZGV4IDAuNXMgbGluZWFyOyAgXG4gICAgdHJhbnNpdGlvbjogei1pbmRleCAwLjVzIGxpbmVhcjsgICBcbiAgICAudG9wLW5hdmJhcntcbiAgICAgICAgcGFkZGluZzogMCAxcmVtOyBcbiAgICAgICAgaGVpZ2h0OiAkdG9wLW5hdmJhci1oZWlnaHQ7XG4gICAgICAgIC5sb2dve1xuICAgICAgICAgICAgd2lkdGg6ICRzaWRlYmFyLXdpZHRoIC0gMzBweDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgICAgfSAgXG4gICAgfVxuICAgICYubG9nby12aXNpYmxle1xuICAgICAgICB6LWluZGV4OiA5OTk5OTsgIFxuICAgIH1cbiAgIFxufVxuXG4udG9wLW5hdmJhciAuYXBwLXNlYXJjaHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgaSB7ICAgICAgICBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7ICAgICAgXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgei1pbmRleDogOTtcbiAgICB9ICAgIFxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxOTBweDtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAmOmZvY3Vze1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi50b3AtcmlndGgtaWNvbnN7XG4gICAgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4ubWVudS1pY29ue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMThweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLmxpbmV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAtby10cmFuc2l0aW9uOiAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgLmxpbmU6bnRoLWNoaWxkKDEpe1xuICAgICAgIHRvcDowO1xuICAgIH1cbiAgICAubGluZTpudGgtY2hpbGQoMiksIC5saW5lOm50aC1jaGlsZCgzKXtcbiAgICAgICB0b3A6NHB4O1xuICAgIH1cbiAgICAubGluZTpudGgtY2hpbGQoNCl7XG4gICAgICAgdG9wOjhweDtcbiAgICB9XG4gICAgJi5vcGVue1xuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgLmxpbmU6bnRoLWNoaWxkKDEpLCAubGluZTpudGgtY2hpbGQoNCl7XG4gICAgICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAubGluZTpudGgtY2hpbGQoMil7ICAgICAgICAgICAgXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAubGluZTpudGgtY2hpbGQoMyl7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5sb2dve1xuICAgIGZvbnQtZmFtaWx5OiAkbG9nby1mb250O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOjI3cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAkc2lkZWJhci13aWR0aDsgIFxuICAgICY6aG92ZXIsICY6Zm9jdXN7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGluaXRpYWw7XG4gICAgfVxufVxuXG4jaW5mby1jb250ZW50e1xuICAgIHotaW5kZXg6IDE7ICAgICBcbiAgICAuaW5mbywgLmxlZnQtYm9yZGVye1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dDtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dDtcbiAgICB9XG4gICAgLmNsb3Nle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgICYuc2hvd3tcbiAgICAgICAgLmluZm8sIC5sZWZ0LWJvcmRlcntcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7IFxuICAgICAgICB9XG4gICAgfVxuICAgIC51c2VyLWltZ3tcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgIH0gICAgXG59XG5cbi50cmlhbmdsZXtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDExcHggMTBweCAwIDEwcHg7XG59XG5cbi5ob3Jpem9udGFsLW1lbnUtb3V0ZXJ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgICNtZW51MHtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICB9XG59IiwiLyoqKiogR2VuZXJhbCAqKioqL1xuLm5hdmJhci5hcHAtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbiAgei1pbmRleDogOTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB6LWluZGV4IDAuNXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IHotaW5kZXggMC41cyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IHotaW5kZXggMC41cyBsaW5lYXI7XG59XG4ubmF2YmFyLmFwcC1oZWFkZXIgLnRvcC1uYXZiYXIge1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIGhlaWdodDogNDZweDtcbn1cbi5uYXZiYXIuYXBwLWhlYWRlciAudG9wLW5hdmJhciAubG9nbyB7XG4gIHdpZHRoOiAyMjBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuLm5hdmJhci5hcHAtaGVhZGVyLmxvZ28tdmlzaWJsZSB7XG4gIHotaW5kZXg6IDk5OTk5O1xufVxuXG4udG9wLW5hdmJhciAuYXBwLXNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4udG9wLW5hdmJhciAuYXBwLXNlYXJjaCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogOTtcbn1cbi50b3AtbmF2YmFyIC5hcHAtc2VhcmNoIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHdpZHRoOiAxOTBweDtcbiAgb3BhY2l0eTogMC43O1xufVxuLnRvcC1uYXZiYXIgLmFwcC1zZWFyY2ggLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50b3AtcmlndGgtaWNvbnMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudS1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1lbnUtaWNvbiAubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5tZW51LWljb24gLmxpbmU6bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiAwO1xufVxuLm1lbnUtaWNvbiAubGluZTpudGgtY2hpbGQoMiksIC5tZW51LWljb24gLmxpbmU6bnRoLWNoaWxkKDMpIHtcbiAgdG9wOiA0cHg7XG59XG4ubWVudS1pY29uIC5saW5lOm50aC1jaGlsZCg0KSB7XG4gIHRvcDogOHB4O1xufVxuLm1lbnUtaWNvbi5vcGVuIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubWVudS1pY29uLm9wZW4gLmxpbmU6bnRoLWNoaWxkKDEpLCAubWVudS1pY29uLm9wZW4gLmxpbmU6bnRoLWNoaWxkKDQpIHtcbiAgdG9wOiA0cHg7XG4gIHdpZHRoOiAwJTtcbiAgbGVmdDogNTAlO1xufVxuLm1lbnUtaWNvbi5vcGVuIC5saW5lOm50aC1jaGlsZCgyKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuLm1lbnUtaWNvbi5vcGVuIC5saW5lOm50aC1jaGlsZCgzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5sb2dvIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9vbkhvdXNlXCI7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjUwcHg7XG59XG4ubG9nbzpob3ZlciwgLmxvZ286Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4jaW5mby1jb250ZW50IHtcbiAgei1pbmRleDogMTtcbn1cbiNpbmZvLWNvbnRlbnQgLmluZm8sICNpbmZvLWNvbnRlbnQgLmxlZnQtYm9yZGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQ7XG59XG4jaW5mby1jb250ZW50IC5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgei1pbmRleDogMTtcbn1cbiNpbmZvLWNvbnRlbnQuc2hvdyAuaW5mbywgI2luZm8tY29udGVudC5zaG93IC5sZWZ0LWJvcmRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4jaW5mby1jb250ZW50IC51c2VyLWltZyB7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLnRyaWFuZ2xlIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxMXB4IDEwcHggMCAxMHB4O1xufVxuXG4uaG9yaXpvbnRhbC1tZW51LW91dGVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmhvcml6b250YWwtbWVudS1vdXRlciAjbWVudTAge1xuICBoZWlnaHQ6IDI1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/theme/components/header/header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/components/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");





let HeaderComponent = class HeaderComponent {
    constructor(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.showHorizontalMenu = true;
        this.showInfoContent = false;
        this.settings = this.appSettings.settings;
        //this.menuItems = this.menuService.getHorizontalMenuItems();
    }
    ngOnInit() {
        if (window.innerWidth <= 768)
            this.showHorizontalMenu = false;
    }
    closeSubMenus() {
        let menu = document.querySelector("#menu0");
        if (menu) {
            for (let i = 0; i < menu.children.length; i++) {
                let child = menu.children[i].children[1];
                if (child) {
                    if (child.classList.contains('show')) {
                        child.classList.remove('show');
                        menu.children[i].children[0].classList.add('collapsed');
                    }
                }
            }
        }
    }
    onWindowResize() {
        if (window.innerWidth <= 768) {
            this.showHorizontalMenu = false;
        }
        else {
            this.showHorizontalMenu = true;
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"] },
    { type: _menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HeaderComponent.prototype, "onWindowResize", null);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/header/header.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('showInfo', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(180deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(0deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/theme/components/header/header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**** General ****/\n.horizontal-menu-wrapper {\n  min-height: 38px;\n}\n#navigation {\n  margin-left: auto;\n  margin-right: auto;\n}\n#navigation .menu {\n  margin-bottom: 0;\n}\n#navigation .menu li {\n  display: inline-block;\n  position: relative;\n}\n#navigation .menu li a {\n  font-size: 14px;\n  display: block;\n  padding: 0.6em 1em;\n  cursor: pointer;\n}\n#navigation .menu li a i {\n  margin-right: 10px;\n}\n#navigation .menu li.menu-item-has-children > a:after {\n  font-family: FontAwesome;\n  content: \"\";\n  margin-left: 10px;\n  font-size: 13px;\n}\n#navigation .menu .sub-menu {\n  display: none;\n  padding: 0;\n  position: absolute;\n  margin-top: 0;\n  left: 0;\n  z-index: 99999;\n  text-align: left;\n}\n#navigation ul.menu ul a,\n#navigation .menu ul ul a {\n  margin: 0;\n  font-size: 14px;\n  padding: 6px 10px;\n  min-width: 160px;\n  line-height: 20px;\n}\n#navigation ul.menu li:hover > ul,\n#navigation .menu ul li:hover > ul {\n  display: block;\n}\n#navigation .menu .sub-menu ul {\n  left: 100%;\n  top: 0;\n}\n#navigation ul.sub-menu > li.menu-item-has-children > a:after {\n  font-family: FontAwesome;\n  content: \"\";\n  float: right;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L2hvcml6b250YWwtbWVudS9ob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS9ob3Jpem9udGFsLW1lbnUvQTpcXGkmbV9jb2RlX3Rlc3RcXGNvZGVfdGVzdC9zcmNcXGFwcFxcdGhlbWVcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lbnUvaG9yaXpvbnRhbC1tZW51L0E6XFxpJm1fY29kZV90ZXN0XFxjb2RlX3Rlc3Qvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxtZW51XFxob3Jpem9udGFsLW1lbnVcXGhvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsa0JBQUE7QUNHQTtFQUNJLGdCRE9xQjtBRFB6QjtBRUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBRkNKO0FFQUc7RUFDSSxnQkFBQTtBRkVQO0FFRE87RUFDSyxxQkFBQTtFQUNBLGtCQUFBO0FGR1o7QUVGWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FGSWhCO0FFSGdCO0VBQ0ksa0JBQUE7QUZLcEI7QUVGWTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRkloQjtBRUdBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FGQUY7QUVFQTs7RUFFRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRkNGO0FFQ0E7O0VBRUUsY0FBQTtBRkVGO0FFQUE7RUFDRSxVQUFBO0VBQ0EsTUFBQTtBRkdGO0FFREE7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRklGIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L2hvcml6b250YWwtbWVudS9ob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKioqKiBHZW5lcmFsICoqKiovXG4uaG9yaXpvbnRhbC1tZW51LXdyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAzOHB4O1xufVxuXG4jbmF2aWdhdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4jbmF2aWdhdGlvbiAubWVudSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4jbmF2aWdhdGlvbiAubWVudSBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI25hdmlnYXRpb24gLm1lbnUgbGkgYSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuNmVtIDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI25hdmlnYXRpb24gLm1lbnUgbGkgYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuI25hdmlnYXRpb24gLm1lbnUgbGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGE6YWZ0ZXIge1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGNvbnRlbnQ6IFwi74SHXCI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbiNuYXZpZ2F0aW9uIC5tZW51IC5zdWItbWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5OTk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiNuYXZpZ2F0aW9uIHVsLm1lbnUgdWwgYSxcbiNuYXZpZ2F0aW9uIC5tZW51IHVsIHVsIGEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4jbmF2aWdhdGlvbiB1bC5tZW51IGxpOmhvdmVyID4gdWwsXG4jbmF2aWdhdGlvbiAubWVudSB1bCBsaTpob3ZlciA+IHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNuYXZpZ2F0aW9uIC5tZW51IC5zdWItbWVudSB1bCB7XG4gIGxlZnQ6IDEwMCU7XG4gIHRvcDogMDtcbn1cblxuI25hdmlnYXRpb24gdWwuc3ViLW1lbnUgPiBsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYTphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgY29udGVudDogXCLvhIVcIjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDEzcHg7XG59IiwiLyoqKiogR2VuZXJhbCAqKioqL1xuLy8kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuJGxvZ28tZm9udDogJ01vb25Ib3VzZSc7XG5cbiR0b3AtbmF2YmFyLWhlaWdodDogNDZweDsgXG5cblxuJHNpZGViYXItd2lkdGg6IDI1MHB4O1xuJHNpZGViYXItY29tcGFjdC13aWR0aDogMTYwcHg7XG4kc2lkZWJhci1taW5pLXdpZHRoOiA3MHB4O1xuXG4kaG9yaXpvbnRhbC1tZW51LWhlaWdodDogMzhweDtcbiRob3Jpem9udGFsLWNvbXBhY3QtbWVudS1oZWlnaHQ6IDUycHg7XG4kaG9yaXpvbnRhbC1taW5pLW1lbnUtaGVpZ2h0OiA0NnB4O1xuXG4kY2hhdC1wZXJzb24tc2VhcmNoLW1lZGlhLWhlaWdodDogMzJweDtcbiRjaGF0LXdpbmRvdy1oZWFkZXItaGVpZ2h0OiAzMHB4O1xuJGNoYXQtd2luZG93LWZvb3Rlci1oZWlnaHQ6IDQ2cHg7XG5cbiRmb290ZXItaGVpZ2h0OiAyOHB4O1xuXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG5cbi5ob3Jpem9udGFsLW1lbnUtd3JhcHBlcntcbiAgICBtaW4taGVpZ2h0OiAkaG9yaXpvbnRhbC1tZW51LWhlaWdodDtcbn1cbiNuYXZpZ2F0aW9ueyBcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87ICBcbiAgIC5tZW51e1xuICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgbGl7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjZlbSAxZW07IFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGl7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYxMDdcIjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgfVxuXG4gICB9XG59XG5cbiNuYXZpZ2F0aW9uIC5tZW51IC5zdWItbWVudXtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOjA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTk5OyBcbiAgdGV4dC1hbGlnbjogbGVmdDsgICBcbn0gIFxuI25hdmlnYXRpb24gdWwubWVudSB1bCBhLFxuI25hdmlnYXRpb24gLm1lbnUgdWwgdWwgYSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4jbmF2aWdhdGlvbiB1bC5tZW51IGxpOmhvdmVyID4gdWwsXG4jbmF2aWdhdGlvbiAubWVudSB1bCBsaTpob3ZlciA+IHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59ICBcbiNuYXZpZ2F0aW9uIC5tZW51IC5zdWItbWVudSB1bCB7IFxuICBsZWZ0OiAxMDAlO1xuICB0b3A6IDA7XG59XG4jbmF2aWdhdGlvbiB1bC5zdWItbWVudSA+IGxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhOmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBjb250ZW50OiBcIlxcZjEwNVwiO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \************************************************************************************/
/*! exports provided: HorizontalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalMenuComponent", function() { return HorizontalMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app.settings */ "./src/app/app.settings.ts");





let HorizontalMenuComponent = class HorizontalMenuComponent {
    constructor(appSettings, menuService, router, elementRef) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.elementRef = elementRef;
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                window.scrollTo(0, 0);
                let activeLink = this.menuService.getActiveLink(this.menuItems);
                this.menuService.setActiveLink(this.menuItems, activeLink);
                jQuery('.tooltip').tooltip({
                    sanitize: false,
                    sanitizeFn: function (content) {
                        return null;
                    }
                });
                jQuery('.tooltip').tooltip('hide');
            }
        });
    }
    ngOnInit() {
        let menu_wrapper = this.elementRef.nativeElement.children[0];
        this.menuService.createMenu(this.menuItems, menu_wrapper, 'horizontal');
        if (this.settings.theme.menuType == 'mini') {
            jQuery('.menu-item-link').tooltip({
                sanitize: false,
                sanitizeFn: function (content) {
                    return null;
                }
            });
            jQuery('.menu-item-link').tooltip();
        }
    }
    ngAfterViewInit() {
        let activeLink = this.menuService.getActiveLink(this.menuItems);
        this.menuService.setActiveLink(this.menuItems, activeLink);
    }
};
HorizontalMenuComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"] },
    { type: _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menuItems'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HorizontalMenuComponent.prototype, "menuItems", void 0);
HorizontalMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-horizontal-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./horizontal-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        providers: [_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./horizontal-menu.component.scss */ "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"],
        _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], HorizontalMenuComponent);



/***/ }),

/***/ "./src/app/theme/components/menu/menu.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/components/menu/menu.model.ts ***!
  \*****************************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Menu {
    constructor(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.icon = icon;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
}


/***/ }),

/***/ "./src/app/theme/components/menu/menu.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/components/menu/menu.service.ts ***!
  \*******************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/app/theme/components/menu/menu.ts");





let MenuService = class MenuService {
    constructor(location, renderer2, router) {
        this.location = location;
        this.renderer2 = renderer2;
        this.router = router;
    }
    getVerticalMenuItems() {
        return _menu__WEBPACK_IMPORTED_MODULE_4__["verticalMenuItems"];
    }
    /*
      public getHorizontalMenuItems(): Array<Menu> {
        return horizontalMenuItems;
      }*/
    createMenu(menu, nativeElement, type) {
        if (type === 'vertical') {
            this.createVerticalMenu(menu, nativeElement);
        }
        if (type === 'horizontal') {
            this.createHorizontalMenu(menu, nativeElement);
        }
    }
    createVerticalMenu(menu, nativeElement) {
        const menu0 = this.renderer2.createElement('div');
        this.renderer2.setAttribute(menu0, 'id', 'menu0');
        menu.forEach((menuItem) => {
            // tslint:disable-next-line:triple-equals
            if (menuItem.parentId == 0) {
                const subMenu = this.createVerticalMenuItem(menu, menuItem);
                this.renderer2.appendChild(menu0, subMenu);
            }
        });
        this.renderer2.appendChild(nativeElement, menu0);
    }
    createHorizontalMenu(menu, nativeElement) {
        const nav = this.renderer2.createElement('div');
        this.renderer2.setAttribute(nav, 'id', 'navigation');
        const ul = this.renderer2.createElement('ul');
        this.renderer2.addClass(ul, 'menu');
        this.renderer2.appendChild(nav, ul);
        menu.forEach((menuItem) => {
            if (menuItem.parentId == 0) {
                const subMenu = this.createHorizontalMenuItem(menu, menuItem);
                this.renderer2.appendChild(ul, subMenu);
            }
        });
        this.renderer2.appendChild(nativeElement, nav);
    }
    createVerticalMenuItem(menu, menuItem) {
        const div = this.renderer2.createElement('div');
        this.renderer2.addClass(div, 'card');
        this.renderer2.setAttribute(div, 'id', 'menu' + menuItem.id);
        const link = this.renderer2.createElement('a');
        this.renderer2.addClass(link, 'menu-item-link');
        this.renderer2.setAttribute(link, 'data-toggle', 'tooltip');
        this.renderer2.setAttribute(link, 'data-placement', 'right');
        this.renderer2.setAttribute(link, 'data-animation', 'false');
        this.renderer2.setAttribute(link, 'data-container', '.vertical-menu-tooltip-place');
        this.renderer2.setAttribute(link, 'data-original-title', menuItem.title);
        const icon = this.renderer2.createElement('i');
        this.renderer2.addClass(icon, 'fa');
        this.renderer2.addClass(icon, 'fa-' + menuItem.icon);
        this.renderer2.appendChild(link, icon);
        const span = this.renderer2.createElement('span');
        this.renderer2.addClass(span, 'menu-title');
        this.renderer2.appendChild(link, span);
        const menuText = this.renderer2.createText(menuItem.title);
        this.renderer2.appendChild(span, menuText);
        this.renderer2.setAttribute(link, 'id', 'link' + menuItem.id);
        this.renderer2.addClass(link, 'transition');
        this.renderer2.appendChild(div, link);
        if (menuItem.routerLink) {
            this.renderer2.listen(link, 'click', () => {
                this.router.navigate([menuItem.routerLink]);
                this.setActiveLink(menu, link);
                this.closeOtherSubMenus(div);
            });
        }
        if (menuItem.href) {
            this.renderer2.setAttribute(link, 'href', menuItem.href);
        }
        if (menuItem.target) {
            this.renderer2.setAttribute(link, 'target', menuItem.target);
        }
        if (menuItem.hasSubMenu) {
            this.renderer2.addClass(link, 'collapsed');
            const caret = this.renderer2.createElement('b');
            this.renderer2.addClass(caret, 'fa');
            this.renderer2.addClass(caret, 'fa-angle-up');
            this.renderer2.appendChild(link, caret);
            this.renderer2.setAttribute(link, 'data-toggle', 'collapse');
            this.renderer2.setAttribute(link, 'href', '#collapse' + menuItem.id);
            const collapse = this.renderer2.createElement('div');
            this.renderer2.setAttribute(collapse, 'id', 'collapse' + menuItem.id);
            this.renderer2.setAttribute(collapse, 'data-parent', '#menu' + menuItem.parentId);
            this.renderer2.addClass(collapse, 'collapse');
            this.renderer2.appendChild(div, collapse);
            this.createSubMenu(menu, menuItem.id, collapse, 'vertical');
        }
        return div;
    }
    createHorizontalMenuItem(menu, menuItem) {
        const li = this.renderer2.createElement('li');
        this.renderer2.addClass(li, 'menu-item');
        const link = this.renderer2.createElement('a');
        this.renderer2.addClass(link, 'menu-item-link');
        this.renderer2.setAttribute(link, 'data-toggle', 'tooltip');
        this.renderer2.setAttribute(link, 'data-placement', 'top');
        this.renderer2.setAttribute(link, 'data-animation', 'false');
        this.renderer2.setAttribute(link, 'data-container', '.horizontal-menu-tooltip-place');
        this.renderer2.setAttribute(link, 'data-original-title', menuItem.title);
        const icon = this.renderer2.createElement('i');
        this.renderer2.addClass(icon, 'fa');
        this.renderer2.addClass(icon, 'fa-' + menuItem.icon);
        this.renderer2.appendChild(link, icon);
        const span = this.renderer2.createElement('span');
        this.renderer2.addClass(span, 'menu-title');
        this.renderer2.appendChild(link, span);
        const menuText = this.renderer2.createText(menuItem.title);
        this.renderer2.appendChild(span, menuText);
        this.renderer2.appendChild(li, link);
        this.renderer2.setAttribute(link, 'id', 'link' + menuItem.id);
        this.renderer2.addClass(link, 'transition');
        if (menuItem.routerLink) {
            this.renderer2.listen(link, 'click', () => {
                this.router.navigate([menuItem.routerLink]);
                this.setActiveLink(menu, link);
            });
        }
        if (menuItem.href) {
            this.renderer2.setAttribute(link, 'href', menuItem.href);
        }
        if (menuItem.target) {
            this.renderer2.setAttribute(link, 'target', menuItem.target);
        }
        if (menuItem.hasSubMenu) {
            this.renderer2.addClass(li, 'menu-item-has-children');
            const subMenu = this.renderer2.createElement('ul');
            this.renderer2.addClass(subMenu, 'sub-menu');
            this.renderer2.appendChild(li, subMenu);
            this.createSubMenu(menu, menuItem.id, subMenu, 'horizontal');
        }
        return li;
    }
    createSubMenu(menu, menuItemId, parentElement, type) {
        const menus = menu.filter(item => item.parentId === menuItemId);
        menus.forEach((menuItem) => {
            let subMenu = null;
            if (type == 'vertical') {
                subMenu = this.createVerticalMenuItem(menu, menuItem);
            }
            if (type == 'horizontal') {
                subMenu = this.createHorizontalMenuItem(menu, menuItem);
            }
            this.renderer2.appendChild(parentElement, subMenu);
        });
    }
    closeOtherSubMenus(elem) {
        const children = (this.renderer2.parentNode(elem)).children;
        for (let i = 0; i < children.length; i++) {
            const child = this.renderer2.nextSibling(children[i].children[0]);
            if (child) {
                this.renderer2.addClass(children[i].children[0], 'collapsed');
                this.renderer2.removeClass(child, 'show');
            }
        }
    }
    getActiveLink(menu) {
        const url = this.location.path();
        const routerLink = (url) ? url : '/'; // url.substring(1, url.length);
        const activeMenuItem = menu.filter(item => item.routerLink === routerLink);
        if (activeMenuItem[0]) {
            const activeLink = document.querySelector('#link' + activeMenuItem[0].id);
            return activeLink;
        }
        return false;
    }
    setActiveLink(menu, link) {
        if (link) {
            menu.forEach((menuItem) => {
                const activeLink = document.querySelector('#link' + menuItem.id);
                if (activeLink) {
                    if (activeLink.classList.contains('active-link')) {
                        activeLink.classList.remove('active-link');
                    }
                }
            });
            this.renderer2.addClass(link, 'active-link');
        }
    }
    showActiveSubMenu(menu) {
        const url = this.location.path();
        const routerLink = url; // url.substring(1, url.length);
        const activeMenuItem = menu.filter(item => item.routerLink === routerLink);
        if (activeMenuItem[0]) {
            const activeLink = document.querySelector('#link' + activeMenuItem[0].id);
            let parent = this.renderer2.parentNode(activeLink);
            while (this.renderer2.parentNode(parent)) {
                parent = this.renderer2.parentNode(parent);
                if (parent.className == 'collapse') {
                    const parentMenu = menu.filter(item => item.id === activeMenuItem[0].parentId);
                    const activeParentLink = document.querySelector('#link' + parentMenu[0].id);
                    this.renderer2.removeClass(activeParentLink, 'collapsed');
                    this.renderer2.addClass(parent, 'show');
                }
                if (parent.classList.contains('menu-wrapper')) {
                    break;
                }
            }
        }
    }
    addNewMenuItem(menu, newMenuItem, type) {
        menu.push(newMenuItem);
        if (newMenuItem.parentId != 0) {
            const parentMenu = menu.filter(item => item.id === newMenuItem.parentId);
            if (parentMenu.length) {
                if (!parentMenu[0].hasSubMenu) {
                    parentMenu[0].hasSubMenu = true;
                    // parentMenu[0].routerLink = null;
                }
            }
        }
        let menu_wrapper = null;
        if (type == 'vertical') {
            menu_wrapper = document.getElementById('vertical-menu');
        }
        if (type == 'horizontal') {
            menu_wrapper = document.getElementById('horizontal-menu');
        }
        while (menu_wrapper.firstChild) {
            menu_wrapper.removeChild(menu_wrapper.firstChild);
        }
        this.createMenu(menu, menu_wrapper, type);
    }
};
MenuService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MenuService);



/***/ }),

/***/ "./src/app/theme/components/menu/menu.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/components/menu/menu.ts ***!
  \***********************************************/
/*! exports provided: verticalMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalMenuItems", function() { return verticalMenuItems; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.model */ "./src/app/theme/components/menu/menu.model.ts");


const verticalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_1__["Menu"](1, 'Dashboard', '/', null, 'tachometer', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_1__["Menu"](2, 'Game Of Throne', null, null, 'th-list', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_1__["Menu"](6, 'Houses', 'gameofthrone/houses', null, 'users', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_1__["Menu"](5, 'Books', 'gameofthrone/books', null, 'th-list', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_1__["Menu"](7, 'Character', 'gameofthrone/character', null, 'users', null, false, 2),
];


/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-wrapper {\n  height: 100%;\n}\n.menu-wrapper .card {\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n}\n.menu-wrapper .card a {\n  cursor: pointer;\n  padding: 10px 0;\n  font-size: 14px;\n  display: inline-block;\n  width: 100%;\n  outline: none;\n}\n.menu-wrapper .card a i {\n  padding: 0 12px;\n}\n.menu-wrapper .card a b {\n  float: right;\n  margin-right: 15px;\n  margin-top: 4px;\n  transition: transform 0.2s linear;\n}\n.menu-wrapper .card a.collapsed b {\n  transform: rotate(-180deg);\n}\n.menu-wrapper .collapsing {\n  transition: height 0.25s ease;\n}\n@media print {\n  :host {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvQTpcXGkmbV9jb2RlX3Rlc3RcXGNvZGVfdGVzdC9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXG1lbnVcXHZlcnRpY2FsLW1lbnVcXHZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS92ZXJ0aWNhbC1tZW51L3ZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0FDREo7QURFSTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDWjtBREFZO0VBQ0ksZUFBQTtBQ0VoQjtBREFZO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUtBLGlDQUFBO0FDRWhCO0FEQVk7RUFLSSwwQkFBQTtBQ0VoQjtBREVJO0VBR0ksNkJBQUE7QUNBUjtBRDBFQTtFQUNJO0lBQ0ksYUFBQTtFQ3ZFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvdmVydGljYWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL3N0eWxlcy9taXhpbnNcIjtcblxuLm1lbnUtd3JhcHBlcntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLmNhcmR7XG4gICAgICAgIGJvcmRlcjowO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYXtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGl7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYntcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogLW8tdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuY29sbGFwc2VkIGJ7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgIFxuICAgIH1cbiAgICAuY29sbGFwc2luZyB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IC4yNXMgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IC4yNXMgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IC4yNXMgZWFzZTtcbiAgICB9XG59XG5cbi8vIC5zaWRlYmFyLW91dGVyLmNvbXBhY3R7XG4vLyAgICAgYS5tZW51LWl0ZW0tbGlua3tcbi8vICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgICAgaXtcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGJ7XG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICAgICAgICByaWdodDogOHB4O1xuLy8gICAgICAgICAgICAgdG9wOiAyOHB4O1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuLy8gLnNpZGViYXItb3V0ZXIubWluaXtcbi8vICAgICBhLm1lbnUtaXRlbS1saW5re1xuLy8gICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbi8vICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgICAgICBzcGFuLm1lbnUtdGl0bGV7XG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuLy8gICAgICAgICB9ICAgICAgICBcbi8vICAgICAgICAgaXtcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuLy8gICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgYntcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgIG1hcmdpbjogMDtcbi8vICAgICAgICAgICAgIHJpZ2h0OiA4cHg7XG4vLyAgICAgICAgICAgICB0b3A6IDIwcHg7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cblxuXG5cbi8vIC5jYXJkLmhhcy1zdWItbWVudSAuc2hvdyAuY2FyZCA+IGEgPiBie1xuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbi8vICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4vLyAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4vLyAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbi8vICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuLy8gfVxuXG5cblxuXG5cbi8vIC5tZW51LXdyYXBwZXIgLmNhcmQgLmNhcmQgYXtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4vLyB9XG4vLyAubWVudS13cmFwcGVyIC5jYXJkIC5jYXJkIC5jYXJkIGF7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuLy8gfVxuLy8gLm1lbnUtd3JhcHBlciAuY2FyZCAuY2FyZCAuY2FyZCAuY2FyZCBhe1xuLy8gICAgIHBhZGRpbmctbGVmdDogNjBweDtcbi8vIH1cbi8vIC5tZW51LXdyYXBwZXIgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgYXtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4vLyB9XG4vLyAubWVudS13cmFwcGVyIC5jYXJkIC5jYXJkIC5jYXJkIC5jYXJkIC5jYXJkIC5jYXJkIGF7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbi8vIH1cbi8vIC5tZW51LXdyYXBwZXIgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgLmNhcmQgYXtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuLy8gfVxuQG1lZGlhIHByaW50IHtcbiAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSIsIi5tZW51LXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWVudS13cmFwcGVyIC5jYXJkIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5tZW51LXdyYXBwZXIgLmNhcmQgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubWVudS13cmFwcGVyIC5jYXJkIGEgaSB7XG4gIHBhZGRpbmc6IDAgMTJweDtcbn1cbi5tZW51LXdyYXBwZXIgLmNhcmQgYSBiIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgLW1zLXRyYW5zaXRpb246IC1tcy10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xufVxuLm1lbnUtd3JhcHBlciAuY2FyZCBhLmNvbGxhcHNlZCBiIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG59XG4ubWVudS13cmFwcGVyIC5jb2xsYXBzaW5nIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4yNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDAuMjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjI1cyBlYXNlO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICA6aG9zdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: VerticalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalMenuComponent", function() { return VerticalMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app.settings */ "./src/app/app.settings.ts");





let VerticalMenuComponent = class VerticalMenuComponent {
    constructor(appSettings, menuService, router, elementRef) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.elementRef = elementRef;
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                window.scrollTo(0, 0);
                let activeLink = this.menuService.getActiveLink(this.menuItems);
                this.menuService.setActiveLink(this.menuItems, activeLink);
                jQuery('.tooltip').tooltip({
                    sanitize: false,
                    sanitizeFn: function (content) {
                        return null;
                    }
                });
                jQuery('.tooltip').tooltip('hide');
                if (window.innerWidth <= 768) {
                    this.settings.theme.showMenu = false;
                }
            }
        });
    }
    ngOnInit() {
        let menu_wrapper = this.elementRef.nativeElement.children[0];
        this.menuService.createMenu(this.menuItems, menu_wrapper, 'vertical');
        if (this.settings.theme.menuType == 'mini') {
            jQuery('.menu-item-link').tooltip({
                sanitize: false,
                sanitizeFn: function (content) {
                    return null;
                }
            });
            jQuery('.menu-item-link').tooltip();
        }
    }
    ngAfterViewInit() {
        this.menuService.showActiveSubMenu(this.menuItems);
        let activeLink = this.menuService.getActiveLink(this.menuItems);
        this.menuService.setActiveLink(this.menuItems, activeLink);
    }
};
VerticalMenuComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"] },
    { type: _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('menuItems'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VerticalMenuComponent.prototype, "menuItems", void 0);
VerticalMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vertical-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vertical-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        providers: [_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vertical-menu.component.scss */ "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"],
        _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], VerticalMenuComponent);



/***/ }),

/***/ "./src/app/theme/components/messages/messages.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#messagesDropDown .dropdown-menu {\n  width: 312px;\n}\n#messagesDropDown .nav-link {\n  color: #a6a6a6;\n  border: 0;\n  border-radius: 0;\n  border-bottom: 4px solid transparent;\n}\n#messagesDropDown .nav-link:hover {\n  background-color: #f5f5f5;\n}\n#messagesDropDown .tab-content {\n  height: 250px;\n  border: 0;\n  border-top: 1px solid #ccc;\n}\n#messagesDropDown .tab-content .tab-pane {\n  padding: 0;\n}\n#messagesDropDown .tab-content .tab-pane .list a {\n  float: left;\n  width: 100%;\n  display: block;\n  padding: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n#messagesDropDown .tab-content .tab-pane .list a:hover {\n  background: #f5f5f5;\n}\n#messagesDropDown .tab-content .tab-pane .list a h3, #messagesDropDown .tab-content .tab-pane .list a h2 {\n  padding: 0;\n  margin: 0 0 4px 0;\n  color: #666666;\n}\n#messagesDropDown .tab-content .tab-pane .list a h3 {\n  font-size: 12px;\n}\n#messagesDropDown .tab-content .tab-pane .list a h2 {\n  font-size: 14px;\n}\n#messagesDropDown .tab-content .tab-pane .list span {\n  font-size: 10px;\n}\n#messagesDropDown .tab-content .tab-pane .list .meeting-day {\n  width: 46px;\n  height: 42px;\n  border-radius: 4px;\n  color: #fff;\n  text-align: center;\n}\n#messagesDropDown .tab-content .tab-pane .list .meeting-day span {\n  font-size: 13px;\n  display: block;\n  font-style: italic;\n}\n#messagesDropDown .tab-content .tab-pane .list .list-content {\n  float: right;\n  width: 235px;\n}\n#messagesDropDown .tab-content .tab-pane .list img {\n  float: left;\n  width: 45px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n#messagesDropDown .tab-content .tab-pane .list p {\n  color: #7d7d7d;\n  font-size: 11px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZXNzYWdlcy9BOlxcaSZtX2NvZGVfdGVzdFxcY29kZV90ZXN0L3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcbWVzc2FnZXNcXG1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtBQ0FSO0FERUk7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUNBUjtBRENRO0VBQ0kseUJBQUE7QUNDWjtBREVJO0VBQ0ksYUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQ0FSO0FEQ1E7RUFDSSxVQUFBO0FDQ1o7QURDZ0I7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7QUNDcEI7QURBb0I7RUFDSSxtQkFBQTtBQ0V4QjtBREFvQjtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNFeEI7QURBb0I7RUFDSSxlQUFBO0FDRXhCO0FEQW9CO0VBQ0ksZUFBQTtBQ0V4QjtBREVnQjtFQUNJLGVBQUE7QUNBcEI7QURFZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQXBCO0FEQ29CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0N4QjtBREVnQjtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQXBCO0FERWdCO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQXBCO0FERWdCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDQXBCIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtZXNzYWdlc0Ryb3BEb3due1xuICAgIC5kcm9wZG93bi1tZW51e1xuICAgICAgICB3aWR0aDogMzEycHg7XG4gICAgfVxuICAgIC5uYXYtbGlua3tcbiAgICAgICAgY29sb3I6ICNhNmE2YTY7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGFiLWNvbnRlbnR7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIC50YWItcGFuZXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDMsIGgyeyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDRweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tZWV0aW5nLWRheXtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ2cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpc3QtY29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjM1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3ZDdkN2Q7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxufSIsIiNtZXNzYWdlc0Ryb3BEb3duIC5kcm9wZG93bi1tZW51IHtcbiAgd2lkdGg6IDMxMnB4O1xufVxuI21lc3NhZ2VzRHJvcERvd24gLm5hdi1saW5rIHtcbiAgY29sb3I6ICNhNmE2YTY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuI21lc3NhZ2VzRHJvcERvd24gLm5hdi1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cbiNtZXNzYWdlc0Ryb3BEb3duIC50YWItY29udGVudCB7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59XG4jbWVzc2FnZXNEcm9wRG93biAudGFiLWNvbnRlbnQgLnRhYi1wYW5lIHtcbiAgcGFkZGluZzogMDtcbn1cbiNtZXNzYWdlc0Ryb3BEb3duIC50YWItY29udGVudCAudGFiLXBhbmUgLmxpc3QgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4jbWVzc2FnZXNEcm9wRG93biAudGFiLWNvbnRlbnQgLnRhYi1wYW5lIC5saXN0IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuI21lc3NhZ2VzRHJvcERvd24gLnRhYi1jb250ZW50IC50YWItcGFuZSAubGlzdCBhIGgzLCAjbWVzc2FnZXNEcm9wRG93biAudGFiLWNvbnRlbnQgLnRhYi1wYW5lIC5saXN0IGEgaDIge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCA0cHggMDtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG4jbWVzc2FnZXNEcm9wRG93biAudGFiLWNvbnRlbnQgLnRhYi1wYW5lIC5saXN0IGEgaDMge1xuICBmb250LXNpemU6IDEycHg7XG59XG4jbWVzc2FnZXNEcm9wRG93biAudGFiLWNvbnRlbnQgLnRhYi1wYW5lIC5saXN0IGEgaDIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4jbWVzc2FnZXNEcm9wRG93biAudGFiLWNvbnRlbnQgLnRhYi1wYW5lIC5saXN0IHNwYW4ge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4jbWVzc2FnZXNEcm9wRG93biAudGFiLWNvbnRlbnQgLnRhYi1wYW5lIC5saXN0IC5tZWV0aW5nLWRheSB7XG4gIHdpZHRoOiA0NnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNtZXNzYWdlc0Ryb3BEb3duIC50YWItY29udGVudCAudGFiLXBhbmUgLmxpc3QgLm1lZXRpbmctZGF5IHNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4jbWVzc2FnZXNEcm9wRG93biAudGFiLWNvbnRlbnQgLnRhYi1wYW5lIC5saXN0IC5saXN0LWNvbnRlbnQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAyMzVweDtcbn1cbiNtZXNzYWdlc0Ryb3BEb3duIC50YWItY29udGVudCAudGFiLXBhbmUgLmxpc3QgaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiNtZXNzYWdlc0Ryb3BEb3duIC50YWItY29udGVudCAudGFiLXBhbmUgLmxpc3QgcCB7XG4gIGNvbG9yOiAjN2Q3ZDdkO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/theme/components/messages/messages.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.service */ "./src/app/theme/components/messages/messages.service.ts");



let MessagesComponent = class MessagesComponent {
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
    }
    ngOnInit() {
        jQuery('#messagesTabs').on('click', '.nav-item a', function () {
            setTimeout(() => jQuery(this).closest('.dropdown').addClass('show'));
        });
    }
};
MessagesComponent.ctorParameters = () => [
    { type: _messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }
];
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/messages/messages.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        providers: [_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.component.scss */ "./src/app/theme/components/messages/messages.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]])
], MessagesComponent);



/***/ }),

/***/ "./src/app/theme/components/messages/messages.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.service.ts ***!
  \***************************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessagesService = class MessagesService {
    constructor() {
        this.messages = [
            {
                name: 'ashley',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'michael',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'julia',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'bruno',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'tereza',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'adam',
                text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
                time: '2 days ago'
            },
            {
                name: 'michael',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
        this.files = [
            {
                text: 'startng.zip',
                size: '~7.2 MB',
                value: '47%',
                class: 'danger'
            },
            {
                text: 'documentation.pdf',
                size: '~14.6 MB',
                value: '33%',
                class: 'info'
            },
            {
                text: 'wallpaper.jpg',
                size: '~558 KB',
                value: '60%',
                class: 'success'
            },
            {
                text: 'letter.doc',
                size: '~57 KB',
                value: '80%',
                class: 'warning'
            },
            {
                text: 'azimuth.zip',
                size: '~10.2 MB',
                value: '55%',
                class: 'primary'
            },
            {
                text: 'contacts.xlsx',
                size: '~96 KB',
                value: '75%',
                class: 'info'
            }
        ];
        this.meetings = [
            {
                day: '09',
                month: 'May',
                title: 'Meeting with Bruno',
                text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
                color: 'danger'
            },
            {
                day: '15',
                month: 'May',
                title: 'Training course',
                text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
                color: 'primary'
            },
            {
                day: '12',
                month: 'June',
                title: 'Dinner with Ashley',
                text: 'Curabitur rhoncus facilisis augue sed fringilla.',
                color: 'info'
            },
            {
                day: '14',
                month: 'June',
                title: 'Sport time',
                text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
                color: 'warning'
            },
            {
                day: '29',
                month: 'July',
                title: 'Birthday of Julia',
                text: 'Nam porttitor justo nec elit efficitur vestibulum.',
                color: 'success'
            }
        ];
    }
    getMessages() {
        return this.messages;
    }
    getFiles() {
        return this.files;
    }
    getMeetings() {
        return this.meetings;
    }
};
MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MessagesService);



/***/ }),

/***/ "./src/app/theme/components/side-chat/side-chat.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/side-chat/side-chat.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**** General ****/\n.side-chat {\n  position: fixed;\n  right: -52px;\n  z-index: 999;\n  width: 0;\n  top: 47px;\n}\n.side-chat .person-search-media {\n  height: 32px;\n}\n.side-chat .person-search-media .fa-search {\n  font-size: 18px;\n  padding: 0px 16px 4px;\n}\n.side-chat .person-search-media .person-search {\n  border: none;\n  background: rgba(255, 255, 255, 0.15);\n  padding: 4px 6px 2px;\n  box-shadow: none;\n  border-radius: 0;\n  color: #fff;\n}\n.side-chat .media {\n  position: relative;\n  width: 230px;\n  right: 0;\n  z-index: 9999999;\n  color: #fff;\n}\n.side-chat .media img {\n  width: 45px;\n}\n.side-chat .media h6 {\n  font-weight: 400;\n}\n.side-chat .media .status {\n  font-size: 12px;\n}\n.side-chat .chat-list {\n  padding-bottom: 78px;\n}\n.side-chat .chat-list .ps__rail-y {\n  z-index: 9999999;\n}\n.side-chat .chat-list .media {\n  cursor: pointer;\n}\n.side-chat .chat-window {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  display: block;\n}\n.side-chat .chat-window .header {\n  height: 30px;\n}\n.side-chat .chat-window .header .back {\n  font-size: 18px;\n  cursor: pointer;\n}\n.side-chat .chat-window .chat-talk-list {\n  height: calc(100vh - (46px + 30px + 46px));\n}\n.side-chat .chat-window .chat-talk-list .talk-text {\n  width: 150px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.side-chat .chat-window .chat-talk-list .ps__rail-y {\n  z-index: 9999999;\n}\n.side-chat .chat-window .media {\n  right: 0 !important;\n}\n.side-chat .chat-window .media .media-body {\n  background: rgba(255, 255, 255, 0.05);\n}\n.side-chat .chat-window .media .media-body.left:before {\n  content: \"\";\n  border: 7px solid transparent;\n  border-right-color: rgba(255, 255, 255, 0.05);\n  position: absolute;\n  top: 18px;\n  left: 49px;\n}\n.side-chat .chat-window .media .media-body.right:before {\n  content: \"\";\n  border: 7px solid transparent;\n  border-left-color: rgba(255, 255, 255, 0.05);\n  position: absolute;\n  top: 18px;\n  right: 48px;\n}\n.side-chat .chat-window .footer {\n  position: fixed;\n  bottom: 0;\n  height: 46px;\n  width: 230px;\n}\n.side-chat .chat-window .footer input[type=text] {\n  border: 1px solid #fff;\n}\n.side-chat.show {\n  right: 0;\n  width: 230px;\n}\n.side-chat.show-chat-item {\n  width: 230px;\n}\n.side-chat.hoverable.show {\n  width: 52px;\n}\n.side-chat.hoverable.show.show-chat-window {\n  width: 230px !important;\n}\n.side-chat.hoverable.show-chat-item {\n  width: 230px;\n}\n.side-chat.hoverable.show-chat-item .media {\n  right: -178px;\n}\n.side-chat.hoverable.show-chat-item .media:hover {\n  right: 0;\n}\n.side-chat.hoverable .chat-list {\n  padding-bottom: 78px;\n}\n.side-chat.hoverable .chat-list .ps__rail-y {\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlLWNoYXQvQTpcXGkmbV9jb2RlX3Rlc3RcXGNvZGVfdGVzdC9zcmNcXGFwcFxcdGhlbWVcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3NpZGUtY2hhdC9BOlxcaSZtX2NvZGVfdGVzdFxcY29kZV90ZXN0L3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcc2lkZS1jaGF0XFxzaWRlLWNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvc2lkZS1jaGF0L3NpZGUtY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQ0tBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNISjtBRElJO0VBQ0ksWURHMEI7QUVMbEM7QURHUTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQ0RaO0FER1E7RUFDSSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRFo7QURJSTtFQUNJLGtCQUFBO0VBQ0EsWUF6QmU7RUEwQmYsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0ZSO0FER1E7RUFDSSxXQUFBO0FDRFo7QURHUTtFQUNJLGdCQUFBO0FDRFo7QURHUTtFQUNJLGVBQUE7QUNEWjtBRElJO0VBQ0ssb0JBQUE7QUNGVDtBREdRO0VBQ0ksZ0JBQUE7QUNEWjtBREdRO0VBQ0ksZUFBQTtBQ0RaO0FESUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0ZSO0FER1E7RUFDSSxZRHpDZ0I7QUV3QzVCO0FERVk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0FoQjtBREdRO0VBQ0ssMENBQUE7QUNEYjtBREVZO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNBaEI7QURFWTtFQUNJLGdCQUFBO0FDQWhCO0FER1E7RUFDSSxtQkFBQTtBQ0RaO0FERVk7RUFDSSxxQ0FBQTtBQ0FoQjtBRENnQjtFQUNJLFdBQUE7RUFDQSw2QkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NwQjtBRENnQjtFQUNJLFdBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0NwQjtBREdRO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0RaO0FERVk7RUFDSSxzQkFBQTtBQ0FoQjtBRElJO0VBQ0ksUUFBQTtFQUNBLFlBekdlO0FDdUd2QjtBRElJO0VBQ0ksWUE1R2U7QUMwR3ZCO0FES1E7RUFDSSxXQWpITTtBQzhHbEI7QURJWTtFQUNJLHVCQUFBO0FDRmhCO0FES1E7RUFDSyxZQXRIVTtBQ21IdkI7QURJWTtFQUNJLGFBQUE7QUNGaEI7QURHZ0I7RUFDSSxRQUFBO0FDRHBCO0FES1E7RUFDSSxvQkFBQTtBQ0haO0FESVk7RUFDSSxVQUFBO0FDRmhCIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlLWNoYXQvc2lkZS1jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiogR2VuZXJhbCAqKioqL1xuLy8kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuJGxvZ28tZm9udDogJ01vb25Ib3VzZSc7XG5cbiR0b3AtbmF2YmFyLWhlaWdodDogNDZweDsgXG5cblxuJHNpZGViYXItd2lkdGg6IDI1MHB4O1xuJHNpZGViYXItY29tcGFjdC13aWR0aDogMTYwcHg7XG4kc2lkZWJhci1taW5pLXdpZHRoOiA3MHB4O1xuXG4kaG9yaXpvbnRhbC1tZW51LWhlaWdodDogMzhweDtcbiRob3Jpem9udGFsLWNvbXBhY3QtbWVudS1oZWlnaHQ6IDUycHg7XG4kaG9yaXpvbnRhbC1taW5pLW1lbnUtaGVpZ2h0OiA0NnB4O1xuXG4kY2hhdC1wZXJzb24tc2VhcmNoLW1lZGlhLWhlaWdodDogMzJweDtcbiRjaGF0LXdpbmRvdy1oZWFkZXItaGVpZ2h0OiAzMHB4O1xuJGNoYXQtd2luZG93LWZvb3Rlci1oZWlnaHQ6IDQ2cHg7XG5cbiRmb290ZXItaGVpZ2h0OiAyOHB4O1xuXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4kY2hhdC1pdGVtLXdpZHRoOiA1MnB4O1xuJGNoYXQtaXRlbS1zaG93LXdpZHRoOiAyMzBweDtcblxuLnNpZGUtY2hhdHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IC0kY2hhdC1pdGVtLXdpZHRoO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICB3aWR0aDogMDtcbiAgICB0b3A6ICR0b3AtbmF2YmFyLWhlaWdodCArIDFweDsgICAgXG4gICAgLnBlcnNvbi1zZWFyY2gtbWVkaWF7XG4gICAgICAgIGhlaWdodDogJGNoYXQtcGVyc29uLXNlYXJjaC1tZWRpYS1oZWlnaHQ7XG4gICAgICAgIC5mYS1zZWFyY2h7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTZweCA0cHg7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICAucGVyc29uLXNlYXJjaHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggNnB4IDJweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1lZGlhe1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAkY2hhdC1pdGVtLXNob3ctd2lkdGg7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiA5OTk5OTk5O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDZ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9IFxuICAgICAgICAuc3RhdHVze1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jaGF0LWxpc3R7XG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogJHRvcC1uYXZiYXItaGVpZ2h0ICsgJGNoYXQtcGVyc29uLXNlYXJjaC1tZWRpYS1oZWlnaHQ7IFxuICAgICAgICAucHNfX3JhaWwteXtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk5OTk7XG4gICAgICAgIH1cbiAgICAgICAgLm1lZGlhe1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jaGF0LXdpbmRvd3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC5oZWFkZXJ7XG4gICAgICAgICAgICBoZWlnaHQ6ICRjaGF0LXdpbmRvdy1oZWFkZXItaGVpZ2h0O1xuICAgICAgICAgICAgLmJhY2t7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgLmNoYXQtdGFsay1saXN0e1xuICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgjeyR0b3AtbmF2YmFyLWhlaWdodH0gKyAjeyRjaGF0LXdpbmRvdy1oZWFkZXItaGVpZ2h0fSArICN7JGNoYXQtd2luZG93LWZvb3Rlci1oZWlnaHR9KSk7XG4gICAgICAgICAgICAudGFsay10ZXh0e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIC5wc19fcmFpbC15e1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTk5OTk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIC5tZWRpYXtcbiAgICAgICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7ICAgICAgICAgICAgXG4gICAgICAgICAgICAubWVkaWEtYm9keXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICAgICAgICAgICAgICAgICYubGVmdDpiZWZvcmV7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0OXB4OyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYucmlnaHQ6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogNDhweDsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVye1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgICAgICAgaW5wdXRbdHlwZT0ndGV4dCdde1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgXG4gICAgfSAgXG4gICAgJi5zaG93e1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6ICRjaGF0LWl0ZW0tc2hvdy13aWR0aDsgICAgICAgIFxuICAgIH1cbiAgICAmLnNob3ctY2hhdC1pdGVte1xuICAgICAgICB3aWR0aDogJGNoYXQtaXRlbS1zaG93LXdpZHRoOyAgICAgICBcbiAgICB9XG4gICAgJi5ob3ZlcmFibGV7XG4gICAgICAgICYuc2hvd3tcbiAgICAgICAgICAgIHdpZHRoOiAkY2hhdC1pdGVtLXdpZHRoO1xuICAgICAgICAgICAgJi5zaG93LWNoYXQtd2luZG93e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAkY2hhdC1pdGVtLXNob3ctd2lkdGggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgJi5zaG93LWNoYXQtaXRlbXtcbiAgICAgICAgICAgICB3aWR0aDogJGNoYXQtaXRlbS1zaG93LXdpZHRoO1xuICAgICAgICAgICAgLm1lZGlhe1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtKCRjaGF0LWl0ZW0tc2hvdy13aWR0aCAtICRjaGF0LWl0ZW0td2lkdGgpOyBcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5jaGF0LWxpc3R7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJHRvcC1uYXZiYXItaGVpZ2h0ICsgJGNoYXQtcGVyc29uLXNlYXJjaC1tZWRpYS1oZWlnaHQ7IFxuICAgICAgICAgICAgLnBzX19yYWlsLXl7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gICAgICAgICBcbn1cblxuXG4iLCIvKioqKiBHZW5lcmFsICoqKiovXG4uc2lkZS1jaGF0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogLTUycHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDA7XG4gIHRvcDogNDdweDtcbn1cbi5zaWRlLWNoYXQgLnBlcnNvbi1zZWFyY2gtbWVkaWEge1xuICBoZWlnaHQ6IDMycHg7XG59XG4uc2lkZS1jaGF0IC5wZXJzb24tc2VhcmNoLW1lZGlhIC5mYS1zZWFyY2gge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDBweCAxNnB4IDRweDtcbn1cbi5zaWRlLWNoYXQgLnBlcnNvbi1zZWFyY2gtbWVkaWEgLnBlcnNvbi1zZWFyY2gge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIHBhZGRpbmc6IDRweCA2cHggMnB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zaWRlLWNoYXQgLm1lZGlhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjMwcHg7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTk5OTk5O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zaWRlLWNoYXQgLm1lZGlhIGltZyB7XG4gIHdpZHRoOiA0NXB4O1xufVxuLnNpZGUtY2hhdCAubWVkaWEgaDYge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnNpZGUtY2hhdCAubWVkaWEgLnN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zaWRlLWNoYXQgLmNoYXQtbGlzdCB7XG4gIHBhZGRpbmctYm90dG9tOiA3OHB4O1xufVxuLnNpZGUtY2hhdCAuY2hhdC1saXN0IC5wc19fcmFpbC15IHtcbiAgei1pbmRleDogOTk5OTk5OTtcbn1cbi5zaWRlLWNoYXQgLmNoYXQtbGlzdCAubWVkaWEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lkZS1jaGF0IC5jaGF0LXdpbmRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNpZGUtY2hhdCAuY2hhdC13aW5kb3cgLmhlYWRlciB7XG4gIGhlaWdodDogMzBweDtcbn1cbi5zaWRlLWNoYXQgLmNoYXQtd2luZG93IC5oZWFkZXIgLmJhY2sge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zaWRlLWNoYXQgLmNoYXQtd2luZG93IC5jaGF0LXRhbGstbGlzdCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtICg0NnB4ICsgMzBweCArIDQ2cHgpKTtcbn1cbi5zaWRlLWNoYXQgLmNoYXQtd2luZG93IC5jaGF0LXRhbGstbGlzdCAudGFsay10ZXh0IHtcbiAgd2lkdGg6IDE1MHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zaWRlLWNoYXQgLmNoYXQtd2luZG93IC5jaGF0LXRhbGstbGlzdCAucHNfX3JhaWwteSB7XG4gIHotaW5kZXg6IDk5OTk5OTk7XG59XG4uc2lkZS1jaGF0IC5jaGF0LXdpbmRvdyAubWVkaWEge1xuICByaWdodDogMCAhaW1wb3J0YW50O1xufVxuLnNpZGUtY2hhdCAuY2hhdC13aW5kb3cgLm1lZGlhIC5tZWRpYS1ib2R5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbn1cbi5zaWRlLWNoYXQgLmNoYXQtd2luZG93IC5tZWRpYSAubWVkaWEtYm9keS5sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlcjogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOHB4O1xuICBsZWZ0OiA0OXB4O1xufVxuLnNpZGUtY2hhdCAuY2hhdC13aW5kb3cgLm1lZGlhIC5tZWRpYS1ib2R5LnJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlcjogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIHJpZ2h0OiA0OHB4O1xufVxuLnNpZGUtY2hhdCAuY2hhdC13aW5kb3cgLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHdpZHRoOiAyMzBweDtcbn1cbi5zaWRlLWNoYXQgLmNoYXQtd2luZG93IC5mb290ZXIgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG4uc2lkZS1jaGF0LnNob3cge1xuICByaWdodDogMDtcbiAgd2lkdGg6IDIzMHB4O1xufVxuLnNpZGUtY2hhdC5zaG93LWNoYXQtaXRlbSB7XG4gIHdpZHRoOiAyMzBweDtcbn1cbi5zaWRlLWNoYXQuaG92ZXJhYmxlLnNob3cge1xuICB3aWR0aDogNTJweDtcbn1cbi5zaWRlLWNoYXQuaG92ZXJhYmxlLnNob3cuc2hvdy1jaGF0LXdpbmRvdyB7XG4gIHdpZHRoOiAyMzBweCAhaW1wb3J0YW50O1xufVxuLnNpZGUtY2hhdC5ob3ZlcmFibGUuc2hvdy1jaGF0LWl0ZW0ge1xuICB3aWR0aDogMjMwcHg7XG59XG4uc2lkZS1jaGF0LmhvdmVyYWJsZS5zaG93LWNoYXQtaXRlbSAubWVkaWEge1xuICByaWdodDogLTE3OHB4O1xufVxuLnNpZGUtY2hhdC5ob3ZlcmFibGUuc2hvdy1jaGF0LWl0ZW0gLm1lZGlhOmhvdmVyIHtcbiAgcmlnaHQ6IDA7XG59XG4uc2lkZS1jaGF0LmhvdmVyYWJsZSAuY2hhdC1saXN0IHtcbiAgcGFkZGluZy1ib3R0b206IDc4cHg7XG59XG4uc2lkZS1jaGF0LmhvdmVyYWJsZSAuY2hhdC1saXN0IC5wc19fcmFpbC15IHtcbiAgei1pbmRleDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/theme/components/side-chat/side-chat.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/side-chat/side-chat.component.ts ***!
  \*******************************************************************/
/*! exports provided: SideChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideChatComponent", function() { return SideChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _side_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-chat.service */ "./src/app/theme/components/side-chat/side-chat.service.ts");
/* harmony import */ var _side_chat_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-chat.model */ "./src/app/theme/components/side-chat/side-chat.model.ts");





let SideChatComponent = class SideChatComponent {
    constructor(appSettings, sideChatService) {
        this.appSettings = appSettings;
        this.sideChatService = sideChatService;
        this.showHoverableChatItem = false;
        this.showChatWindow = false;
        this.newChatText = '';
        this.settings = this.appSettings.settings;
        this.chats = sideChatService.getChats();
        this.talks = this.sideChatService.getTalk();
    }
    ngOnInit() { }
    back() {
        this.showChatWindow = false;
        this.talks.shift();
        this.talks.length = 2;
    }
    getChat(chat) {
        this.searchText = '';
        this.showChatWindow = true;
        this.interlocutor = chat.author;
        this.talks.forEach(item => {
            if (item.side == 'left') {
                item.image = chat.image;
            }
        });
        this.talks.unshift(chat);
    }
    addChatItem($event) {
        if (($event.which === 1 || $event.which === 13) && this.newChatText.trim() != '') {
            this.talks.push(new _side_chat_model__WEBPACK_IMPORTED_MODULE_4__["SideChat"]('assets/img/users/user.jpg', 'Emilio Verdines', 'online', this.newChatText, new Date(), 'right'));
            this.newChatText = '';
            let chatContainer = document.querySelector('.chat-talk-list');
            setTimeout(() => {
                var nodes = chatContainer.querySelectorAll('.media');
                let newChatTextHeight = nodes[nodes.length - 1];
                chatContainer.scrollTop = chatContainer.scrollHeight + newChatTextHeight.clientHeight;
            });
        }
    }
};
SideChatComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] },
    { type: _side_chat_service__WEBPACK_IMPORTED_MODULE_3__["SideChatService"] }
];
SideChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/side-chat/side-chat.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        providers: [_side_chat_service__WEBPACK_IMPORTED_MODULE_3__["SideChatService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-chat.component.scss */ "./src/app/theme/components/side-chat/side-chat.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _side_chat_service__WEBPACK_IMPORTED_MODULE_3__["SideChatService"]])
], SideChatComponent);



/***/ }),

/***/ "./src/app/theme/components/side-chat/side-chat.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/side-chat/side-chat.model.ts ***!
  \***************************************************************/
/*! exports provided: SideChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideChat", function() { return SideChat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SideChat {
    constructor(image, author, authorStatus, text, date, side) {
        this.image = image;
        this.author = author;
        this.authorStatus = authorStatus;
        this.text = text;
        this.date = date;
        this.side = side;
    }
}


/***/ }),

/***/ "./src/app/theme/components/side-chat/side-chat.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/side-chat/side-chat.service.ts ***!
  \*****************************************************************/
/*! exports provided: SideChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideChatService", function() { return SideChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _side_chat_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-chat.model */ "./src/app/theme/components/side-chat/side-chat.model.ts");



let date = new Date(), day = date.getDate(), month = date.getMonth(), year = date.getFullYear(), hour = date.getHours(), minute = date.getMinutes();
let chats = [
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_2__["SideChat"]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_2__["SideChat"]('assets/img/profile/bruno.jpg', 'Bruno Vespa', 'Do not disturb', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_2__["SideChat"]('assets/img/avatars/avatar-3.png', 'Andy Warhol', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_2__["SideChat"]('assets/img/profile/julia.jpg', 'Julia Aniston', 'Away', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_2__["SideChat"]('assets/img/profile/adam.jpg', 'Adam Sandler', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_2__["SideChat"]('assets/img/avatars/avatar-7.png', 'Lusia Manuel', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_2__["SideChat"]('assets/img/profile/tereza.jpg', 'Tereza Stiles', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_2__["SideChat"]('assets/img/users/default-user.jpg', 'unknown', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_2__["SideChat"]('assets/img/avatars/avatar-1.png', 'Jeremi Powell', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_2__["SideChat"]('assets/img/avatars/avatar-8.png', 'Calico Jack', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_2__["SideChat"]('assets/img/profile/michael.jpg', 'Michael Blair', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_2__["SideChat"]('assets/img/avatars/avatar-5.png', 'Michelle Ormond', 'Away', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_2__["SideChat"]('assets/img/avatars/avatar-6.png', 'Sean Connery', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left')
];
let talks = [
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_2__["SideChat"]('assets/img/users/user.jpg', 'Emilio Verdines', 'Online', 'Hi, StartNG is a fully responsive, organized folder structure, clean & customizable code, easy to use and much more...', new Date(year, month, day - 2, hour, minute + 2), 'right'),
    new _side_chat_model__WEBPACK_IMPORTED_MODULE_2__["SideChat"]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute + 3), 'left'),
];
let SideChatService = class SideChatService {
    getChats() {
        return chats;
    }
    getTalk() {
        return talks;
    }
};
SideChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SideChatService);

// import {Injectable} from '@angular/core'
// let date = new Date(),
//     day = date.getDate(),
//     month = date.getMonth(),
//     year = date.getFullYear(),
//     hour = date.getHours(),
//     minute = date.getMinutes();
// @Injectable()
// export class SideChatService {
//     private chats = [
//         {
//             image: 'assets/img/profile/ashley.jpg',
//             author: 'Ashley Ahlberg', 
//             authorStatus: 'Online',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/profile/bruno.jpg',
//             author: 'Bruno Vespa', 
//             authorStatus: 'Do not disturb',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/profile/julia.jpg',
//             author: 'Julia Aniston', 
//             authorStatus: 'Away',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/users/default-user.jpg',
//             author: 'unknown',
//             authorStatus: 'Offline',
//             text: 'After you get up and running, you can place Font Awesome icons just about...',
//             time: '1 min ago'
//         },
//         // {
//         //     image: 'michael',
//         //     author: 'Michael Blair',
//         //     text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
//         //     time: '2 hrs ago'
//         // },
//         // {
//         //     image: 'julia',
//         //     author: 'Julia Aniston',
//         //     text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
//         //     time: '10 hrs ago'
//         // },
//         // {
//         //     image: 'bruno',
//         //     author: 'Bruno Vespa',
//         //     text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
//         //     time: '1 day ago'
//         // },
//         // {
//         //     image: 'tereza',
//         //     author: 'Tereza Stiles',
//         //     text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
//         //     time: '1 day ago'
//         // },
//         // {
//         //     image: 'adam',
//         //     author: 'Adam Sandler',
//         //     text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
//         //     time: '2 days ago'
//         // },
//     ]; 
//     public getChats():Array<Object> {
//         return this.chats;
//     }
// }


/***/ }),

/***/ "./src/app/theme/components/sidebar/sidebar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/sidebar/sidebar.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**** General ****/\n.sidebar-outer {\n  height: 100%;\n  width: 250px;\n}\n.sidebar-outer .logo {\n  height: 46px;\n  padding: 0 14px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlYmFyL0E6XFxpJm1fY29kZV90ZXN0XFxjb2RlX3Rlc3Qvc3JjXFxhcHBcXHRoZW1lXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9zaWRlYmFyL0E6XFxpJm1fY29kZV90ZXN0XFxjb2RlX3Rlc3Qvc3JjXFxhcHBcXHRoZW1lXFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQ0VBO0VBQ0ksWUFBQTtFQUNBLFlER1k7QUVIaEI7QURDSTtFQUNJLFlERlk7RUNHWixlQUFBO0VBQ0EsWUREUTtBRUVoQiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiogR2VuZXJhbCAqKioqL1xuLy8kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuJGxvZ28tZm9udDogJ01vb25Ib3VzZSc7XG5cbiR0b3AtbmF2YmFyLWhlaWdodDogNDZweDsgXG5cblxuJHNpZGViYXItd2lkdGg6IDI1MHB4O1xuJHNpZGViYXItY29tcGFjdC13aWR0aDogMTYwcHg7XG4kc2lkZWJhci1taW5pLXdpZHRoOiA3MHB4O1xuXG4kaG9yaXpvbnRhbC1tZW51LWhlaWdodDogMzhweDtcbiRob3Jpem9udGFsLWNvbXBhY3QtbWVudS1oZWlnaHQ6IDUycHg7XG4kaG9yaXpvbnRhbC1taW5pLW1lbnUtaGVpZ2h0OiA0NnB4O1xuXG4kY2hhdC1wZXJzb24tc2VhcmNoLW1lZGlhLWhlaWdodDogMzJweDtcbiRjaGF0LXdpbmRvdy1oZWFkZXItaGVpZ2h0OiAzMHB4O1xuJGNoYXQtd2luZG93LWZvb3Rlci1oZWlnaHQ6IDQ2cHg7XG5cbiRmb290ZXItaGVpZ2h0OiAyOHB4O1xuXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uc2lkZWJhci1vdXRlcntcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIHdpZHRoOiAkc2lkZWJhci13aWR0aDtcbiAgICAubG9nb3tcbiAgICAgICAgaGVpZ2h0OiAkdG9wLW5hdmJhci1oZWlnaHQ7XG4gICAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICAgICAgd2lkdGg6ICRzaWRlYmFyLXdpZHRoO1xuICAgIH0gICAgXG59XG5cblxuXG4vLyBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xuLy8gICAgIC5zaWRlYmFyLW91dGVyIC5sb2dve1xuLy8gICAgICAgICB3aWR0aDogNTBweDtcbi8vICAgICAgICAgIC5zdGFydHtcbi8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuXG5cblxuLy8gLmNvbGxhcHNpbmcge1xuLy8gLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAvLyAgIGhlaWdodDogMDtcbi8vIC8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgLjE1cyBlYXNlO1xuLy8gICAgICAgIC1vLXRyYW5zaXRpb246IGhlaWdodCAuMTVzIGVhc2U7XG4vLyAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IC4xNXMgZWFzZTtcbi8vIH0iLCIvKioqKiBHZW5lcmFsICoqKiovXG4uc2lkZWJhci1vdXRlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDI1MHB4O1xufVxuLnNpZGViYXItb3V0ZXIgLmxvZ28ge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgd2lkdGg6IDI1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/theme/components/sidebar/sidebar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/components/sidebar/sidebar.component.ts ***!
  \***************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");




let SidebarComponent = class SidebarComponent {
    constructor(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.settings = this.appSettings.settings;
        this.menuItems = this.menuService.getVerticalMenuItems();
    }
    ngOnInit() {
        if (sessionStorage['userMenuItems']) {
            const ids = JSON.parse(sessionStorage.getItem('userMenuItems'));
            const newArr = [];
            ids.forEach(id => {
                const newMenuItem = this.menuItems.filter(mail => mail.id == id);
                newArr.push(newMenuItem[0]);
            });
            this.menuItems = newArr;
        }
    }
    closeSubMenus() {
        const menu = document.querySelector('#menu0');
        for (let i = 0; i < menu.children.length; i++) {
            const child = menu.children[i].children[1];
            if (child) {
                if (child.classList.contains('show')) {
                    child.classList.remove('show');
                    menu.children[i].children[0].classList.add('collapsed');
                }
            }
        }
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] },
    { type: _menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/sidebar/sidebar.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/theme/components/sidebar/sidebar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-menu .user-menu {\n  width: 240px;\n  padding: 0;\n}\n.dropdown-menu .user-menu .user-img {\n  width: 100px;\n}\n.dropdown-menu .user-menu .dropdown-item {\n  color: #666 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy91c2VyLW1lbnUvQTpcXGkmbV9jb2RlX3Rlc3RcXGNvZGVfdGVzdC9zcmNcXGFwcFxcdGhlbWVcXGNvbXBvbmVudHNcXHVzZXItbWVudVxcdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3VzZXItbWVudS91c2VyLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0FDRVI7QURBSTtFQUNJLHNCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb21wb25lbnRzL3VzZXItbWVudS91c2VyLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudSAudXNlci1tZW51IHsgICAgXG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLnVzZXItaW1ne1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfSAgIFxuICAgIC5kcm9wZG93bi1pdGVte1xuICAgICAgICBjb2xvcjogIzY2NiAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbn0iLCIuZHJvcGRvd24tbWVudSAudXNlci1tZW51IHtcbiAgd2lkdGg6IDI0MHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmRyb3Bkb3duLW1lbnUgLnVzZXItbWVudSAudXNlci1pbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG4uZHJvcGRvd24tbWVudSAudXNlci1tZW51IC5kcm9wZG93bi1pdGVtIHtcbiAgY29sb3I6ICM2NjYgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/theme/components/user-menu/user-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserMenuComponent = class UserMenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/user-menu/user-menu.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-menu.component.scss */ "./src/app/theme/components/user-menu/user-menu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserMenuComponent);



/***/ }),

/***/ "./src/app/theme/pipes/pipes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/theme/pipes/pipes.module.ts ***!
  \*********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profilePicture/profilePicture.pipe */ "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts");
/* harmony import */ var _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/chat-person-search.pipe */ "./src/app/theme/pipes/search/chat-person-search.pipe.ts");
/* harmony import */ var _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/user-search.pipe */ "./src/app/theme/pipes/search/user-search.pipe.ts");
/* harmony import */ var _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./truncate/truncate.pipe */ "./src/app/theme/pipes/truncate/truncate.pipe.ts");
/* harmony import */ var _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/mail-search.pipe */ "./src/app/theme/pipes/search/mail-search.pipe.ts");
/* harmony import */ var _search_client_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/client-search.pipe */ "./src/app/theme/pipes/search/client-search.pipe.ts");









let PipesModule = class PipesModule {
};
PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [
            _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
            _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
            _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
            _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
            _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"],
            _search_client_search_pipe__WEBPACK_IMPORTED_MODULE_8__["ClientSearchPipe"]
        ],
        exports: [
            _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
            _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
            _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
            _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
            _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"],
            _search_client_search_pipe__WEBPACK_IMPORTED_MODULE_8__["ClientSearchPipe"]
        ]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilePicturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePipe", function() { return ProfilePicturePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfilePicturePipe = class ProfilePicturePipe {
    transform(input, ext = 'jpg') {
        return '../assets/img/profile/' + input + '.' + ext;
    }
};
ProfilePicturePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'profilePicture' })
], ProfilePicturePipe);



/***/ }),

/***/ "./src/app/theme/pipes/search/chat-person-search.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/pipes/search/chat-person-search.pipe.ts ***!
  \***************************************************************/
/*! exports provided: ChatPersonSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPersonSearchPipe", function() { return ChatPersonSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatPersonSearchPipe = class ChatPersonSearchPipe {
    transform(value, args) {
        let searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(message => {
                if (message.author) {
                    return message.author.search(searchText) !== -1;
                }
            });
        }
    }
};
ChatPersonSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ChatPersonSearchPipe' })
], ChatPersonSearchPipe);



/***/ }),

/***/ "./src/app/theme/pipes/search/client-search.pipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/pipes/search/client-search.pipe.ts ***!
  \**********************************************************/
/*! exports provided: ClientSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSearchPipe", function() { return ClientSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClientSearchPipe = class ClientSearchPipe {
    transform(value, args) {
        const searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(character => {
                if (character.name) {
                    return character.name.search(searchText) !== -1;
                }
                else {
                    return character.name.search(searchText) !== -1;
                }
            });
        }
    }
};
ClientSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ClientSearchPipe', pure: false })
], ClientSearchPipe);



/***/ }),

/***/ "./src/app/theme/pipes/search/mail-search.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/mail-search.pipe.ts ***!
  \********************************************************/
/*! exports provided: MailSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function() { return MailSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MailSearchPipe = class MailSearchPipe {
    transform(value, args) {
        let searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(mail => {
                if (mail.sender || mail.subject) {
                    if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                        return true;
                    }
                }
            });
        }
    }
};
MailSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'MailSearch'
    })
], MailSearchPipe);



/***/ }),

/***/ "./src/app/theme/pipes/search/user-search.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/user-search.pipe.ts ***!
  \********************************************************/
/*! exports provided: UserSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchPipe", function() { return UserSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserSearchPipe = class UserSearchPipe {
    transform(value, args) {
        let searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(user => {
                if (user.profile.name) {
                    return user.profile.name.search(searchText) !== -1;
                }
                else {
                    return user.username.search(searchText) !== -1;
                }
            });
        }
    }
};
UserSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'UserSearchPipe', pure: false })
], UserSearchPipe);



/***/ }),

/***/ "./src/app/theme/pipes/truncate/truncate.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/pipes/truncate/truncate.pipe.ts ***!
  \*******************************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TruncatePipe = class TruncatePipe {
    transform(value, args) {
        let limit = args > 0 ? parseInt(args) : 10;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
};
TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'truncate'
    })
], TruncatePipe);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// // private BASE_URL = 'http://localhost:9090/milele/api/v1/';
const environment = {
    production: false,
    apiVersion: 1.0,
    BASE_URL: 'https://anapioficeandfire.com/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance ifa an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! A:\i&m_code_test\code_test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
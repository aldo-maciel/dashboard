(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/QED":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");






class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 37, vars: 1, consts: [[1, "header"], [1, "header-items"], ["routerLink", "/home", 1, "header-item"], ["src", "assets/icon.svg", "alt", "home company icon"], ["routerLink", "/binary", "routerLinkActive", "header-item-active", 1, "header-item"], ["aria-hidden", "false", "aria-label", "binary icon"], ["routerLink", "/unique-element", "routerLinkActive", "header-item-active", 1, "header-item"], ["aria-hidden", "false", "aria-label", "unique element icon"], ["routerLinkActive", "header-item-active", 1, "header-item"], ["aria-hidden", "false", "aria-label", "register element icon"], ["aria-hidden", "false", "aria-label", "settings element icon"], [1, "header-content"], [1, "position-relative", "text-center"], ["mat-button", "", 3, "matMenuTriggerFor"], ["aria-hidden", "false", "aria-label", "User avatar icon"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-button", ""], ["mat-button", "", "color", "warn"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Bin\u00E1rio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "repeat_one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Elemento \u00FAnico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "perm_media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Cadastros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Configura\u00E7\u00F5es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Fulano da silva ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-menu", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"]], styles: [".header[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  padding: 0.5rem;\n}\n.header-items[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n}\n.header-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.header-items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 3.5rem;\n  margin: 0 1rem 0 3rem;\n}\n.header-item[_ngcontent-%COMP%] {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 1rem;\n}\n.header-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.header-item[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n}\n.header-item-active[_ngcontent-%COMP%], .header-item-active[_ngcontent-%COMP%]:hover {\n  color: #6c757d;\n}\n.header-content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex: auto;\n  justify-content: flex-end;\n  padding: 0 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9fdmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFERjtBQUdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBREo7QUFHSTtFQUNFLGFBQUE7QUFETjtBQUlJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUZOO0FBTUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBSko7QUFNSTtFQUNFLHFCQUFBO0FBSk47QUFPSTtFQUNFLGNDdEJDO0FEaUJQO0FBUUk7RUFFRSxjQ2pDSztBRDBCWDtBQVdFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQVRKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdmFyaWFibGVcIjtcblxuLmhlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IC41cmVtO1xuXG4gICYtaXRlbXMge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIHVsIGxpIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAzLjVyZW07XG4gICAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICAgIG1hcmdpbjogMCAxcmVtIDAgM3JlbTtcbiAgICB9XG4gIH1cblxuICAmLWl0ZW0ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcblxuICAgIG1hdC1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLjI1MHJlbTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkYmx1ZTtcbiAgICB9XG5cbiAgICAmLWFjdGl2ZSxcbiAgICAmLWFjdGl2ZTpob3ZlciB7XG4gICAgICBjb2xvcjogJGdyYXktNjAwO1xuICAgIH1cbiAgfVxuXG4gICYtY29udGVudCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbn1cbiIsIiR3aGl0ZTogI2ZmZmZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogIzAwMDAwMCAhZGVmYXVsdDtcblxuJGJsdWU6ICMwMDdiZmYgIWRlZmF1bHQ7XG4kaW5kaWdvOiAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAjZmZjMTA3ICFkZWZhdWx0O1xuJGdyZWVuOiAjMjhhNzQ1ICFkZWZhdWx0O1xuJHRlYWw6ICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogIzE3YTJiOCAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogJHB1cnBsZSAhZGVmYXVsdDtcbiRzdWNjZXNzOiAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogJGN5YW4gIWRlZmF1bHQ7XG4kd2FybmluZzogJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkYXJrOiAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRtdXRlZC1jb2xvcjogbWl4KCR3aGl0ZSwgJGdyYXktNzAwLCA3MCUpO1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZSgoXG4gICdwcmltYXJ5JzogJHByaW1hcnksXG4gICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LFxuICAnc3VjY2Vzcyc6ICRzdWNjZXNzLFxuICAnaW5mbyc6ICRpbmZvLFxuICAnd2FybmluZyc6ICR3YXJuaW5nLFxuICAnZGFuZ2VyJzogJGRhbmdlcixcbiAgJ2xpZ2h0JzogJGxpZ2h0LFxuICAnZGFyayc6ICRkYXJrLFxuICAnZGVmYXVsdCc6ICRncmF5LTEwMFxuKSwgJHRoZW1lLWNvbG9ycyk7XG5cbiR4bGc6IDI7XG4kbGc6IDEuNzI7XG4kbm9ybWFsOiAxLjQ0O1xuJHNtOiAxLjI7XG4kc21sOiAxO1xuJHhzbTogLjg5O1xuXG4kc2l6ZXM6ICgpICFkZWZhdWx0O1xuJHNpemVzOiAoXG4gICdub3JtYWwnOiAkbm9ybWFsLFxuICAnbGcnOiAkbGcsXG4gICd4bGcnOiAkeGxnLFxuICAnc20nOiAkc20sXG4gICdzbWwnOiAkc21sLFxuICAneHNtJzogJHhzbVxuKTtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aldo/IdeaProjects/dashboard/src/main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _line_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-chart */ "vnMl");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var ng_chartjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chartjs */ "jdj2");





class HomeComponent {
    constructor() {
        this.charts = _line_chart__WEBPACK_IMPORTED_MODULE_1__;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 37, vars: 23, consts: [[1, "panel", "home"], [1, "home-chart"], ["ngChartjs", "", "chartType", "line", 3, "datasets", "labels", "options", "legend", "inlinePlugins"], ["ngChartjs", "", "chartType", "bar", 3, "datasets", "labels", "options", "legend", "inlinePlugins"], ["ngChartjs", "", "chartType", "doughnut", 3, "data", "labels"], ["ngChartjs", "", "chartType", "radar", 3, "datasets", "options", "labels"], ["ngChartjs", "", "chartType", "pie", 3, "data", "labels", "options", "colors", "legend"], ["ngChartjs", "", "chartType", "polarArea", 3, "data", "labels", "legend"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "canvas", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "canvas", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "canvas", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "canvas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "canvas", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.charts.lineChartData)("labels", ctx.charts.lineChartLabels)("options", ctx.charts.lineChartOptions)("legend", ctx.charts.lineChartLegend)("inlinePlugins", ctx.inlinePlugin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.charts.lineChartData)("labels", ctx.charts.lineChartLabels)("options", ctx.charts.lineChartOptions)("legend", ctx.charts.lineChartLegend)("inlinePlugins", ctx.inlinePlugin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.charts.doughnutChartData)("labels", ctx.charts.doughnutChartLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.charts.radarChartData)("options", ctx.charts.radarChartOptions)("labels", ctx.charts.radarChartLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.charts.pieChartData)("labels", ctx.charts.pieChartLabels)("options", ctx.charts.pieChartOptions)("colors", ctx.charts.pieChartColors)("legend", ctx.charts.pieChartLegend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.charts.polarAreaChartData)("labels", ctx.charts.polarAreaChartLabels)("legend", ctx.charts.polarAreaLegend);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], ng_chartjs__WEBPACK_IMPORTED_MODULE_3__["NgChartjsDirective"]], styles: [".home[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-rows: auto;\n  grid-gap: 1rem;\n  height: 100%;\n  overflow: auto;\n}\n.home-chart[_ngcontent-%COMP%] {\n  margin: 1rem;\n  flex: 1;\n  min-width: 350px;\n}\n@media (min-width: 1400px) {\n  .home[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 1400px) {\n  .home[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 968px) {\n  .home[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n[_nghost-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVFO0VBQ0U7SUFDRSxxQ0FBQTtFQUFKO0FBQ0Y7QUFHRTtFQUNFO0lBQ0UscUNBQUE7RUFESjtBQUNGO0FBSUU7RUFDRTtJQUNFLDBCQUFBO0VBRko7QUFDRjtBQU1BO0VBQ0UsV0FBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tcm93czogYXV0bztcbiAgZ3JpZC1nYXA6IDFyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgJi1jaGFydCB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAzNTBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgICAmIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAgICYge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogOTY4cHgpIHtcbiAgICAmIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgfVxufVxuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "2Bq0":
/*!***************************************************************************!*\
  !*** ./src/app/pages/features/unique-element/unique-element.component.ts ***!
  \***************************************************************************/
/*! exports provided: UniqueElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueElementComponent", function() { return UniqueElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UniqueElementComponent {
    constructor() { }
    ngOnInit() {
    }
}
UniqueElementComponent.ɵfac = function UniqueElementComponent_Factory(t) { return new (t || UniqueElementComponent)(); };
UniqueElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UniqueElementComponent, selectors: [["app-unique-element"]], decls: 2, vars: 0, template: function UniqueElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Feature not implemented");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlYXR1cmVzL3VuaXF1ZS1lbGVtZW50L3VuaXF1ZS1lbGVtZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UniqueElementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-unique-element',
                templateUrl: './unique-element.component.html',
                styleUrls: ['./unique-element.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3u92":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/core/forms/controller-accessor.ts ***!
  \*********************************************************************/
/*! exports provided: ControllerAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerAccessor", function() { return ControllerAccessor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ControllerAccessor {
    constructor() {
        this.innerValue = null;
        this.onTouchedCallback = rxjs__WEBPACK_IMPORTED_MODULE_0__["noop"];
        this.onChangeCallback = rxjs__WEBPACK_IMPORTED_MODULE_0__["noop"];
        this.modelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.id = `selectInputId${Math.ceil(Math.random() * 1000)}`;
        this.required = false;
        this.disabled = false;
        this.text = '';
    }
    get value() {
        return this.innerValue;
    }
    set value(value) {
        this.writeValue(value);
    }
    onBlur() {
        this.onTouchedCallback();
    }
    writeValue(value, fireModelChange = true) {
        if (value !== this.innerValue) {
            this.innerValue = value;
            this.onChangeCallback(value);
            if (fireModelChange) {
                this.modelChanged.next(this.value);
            }
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    change() {
        this.onChangeCallback(this.value);
        this.onTouchedCallback();
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
ControllerAccessor.ɵfac = function ControllerAccessor_Factory(t) { return new (t || ControllerAccessor)(); };
ControllerAccessor.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ControllerAccessor, selectors: [["ng-component"]], inputs: { id: "id", required: "required", disabled: "disabled", name: "name", text: ["label", "text"] }, decls: 0, vars: 0, template: function ControllerAccessor_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControllerAccessor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                template: ''
            }]
    }], null, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['label']
        }] }); })();


/***/ }),

/***/ "6OJ2":
/*!***********************************************************!*\
  !*** ./src/app/pages/features/binary/binary.component.ts ***!
  \***********************************************************/
/*! exports provided: BinaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryComponent", function() { return BinaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _app_shared_components_core_forms_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/shared/components/core/forms/input/input.component */ "vnuB");
/* harmony import */ var _app_shared_components_core_forms_select_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/shared/components/core/forms/select/select.component */ "byeA");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function BinaryComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nenhum resultado encontrado!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BinaryComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const result_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", result_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const DECIMAL = 2;
class BinaryComponent {
    constructor() {
        this.operations = [];
        this.record = {};
        this.results = [];
    }
    ngOnInit() {
        const operations = ['+', '-', '*', '/', '%'];
        this.operations = operations.map(value => ({ value, desc: value }));
    }
    calculate(num, num2) {
        const operand1 = parseInt(String(num), DECIMAL);
        const operand2 = parseInt(String(num2), DECIMAL);
        const isOperand1Invalid = operand1 > 255 || operand1 < 0;
        const isOperand2Invalid = operand2 > 255 || operand2 < 0;
        if (isOperand2Invalid || isOperand1Invalid) {
            throw new Error(`<span class="binary-error">Operação permitida apenas com valores entre 0 e 255!</span>`);
        }
        switch (this.record.operacao) {
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '*':
                return operand1 * operand2;
            case '/':
                const operation = operand1 / operand2;
                return Number.isFinite(operation) ? 0 : operation;
            case '%':
                return operand1 % operand2;
            default:
                break;
        }
    }
    save() {
        let template = '';
        try {
            const { operador, operacao, divisor } = this.record;
            const result = this.calculate(operador, divisor);
            const fullResult = result.toString(DECIMAL).padStart(8, '0');
            const operandStr = `${operador}`;
            const divisorStr = `${divisor}`;
            template = `${operandStr} ${operacao} ${divisorStr} = <span class="binary-result">${fullResult}</span>`;
        }
        catch (error) {
            template = error.message;
        }
        finally {
            this.results.unshift(template);
            this.record = {};
        }
    }
}
BinaryComponent.ɵfac = function BinaryComponent_Factory(t) { return new (t || BinaryComponent)(); };
BinaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BinaryComponent, selectors: [["app-binary"]], decls: 17, vars: 12, consts: [[1, "binary"], [1, "binary-title"], [1, "binary-control"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "1rem", "fxFlex", "", 3, "ngSubmit"], ["form", "ngForm"], ["fxFlex", "", "name", "operador", "label", "Operador", "placeholder", "digite um valor", "type", "number", 3, "pattern", "required", "ngModel", "ngModelChange"], ["fxFlex", "", "name", "operacao", "label", "Opera\u00E7\u00E3o", 3, "required", "options", "ngModel", "ngModelChange"], ["fxFlex", "", "name", "divisor", "label", "Divisor", "placeholder", "digite um valor", "type", "number", 3, "pattern", "required", "ngModel", "ngModelChange"], ["type", "submit", "mat-button", "", "color", "primary", 3, "disabled"], [1, "binary-content"], [4, "ngIf"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function BinaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bin\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BinaryComponent_Template_form_ngSubmit_4_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BinaryComponent_Template_app_input_ngModelChange_6_listener($event) { return ctx.record.operador = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BinaryComponent_Template_app_select_ngModelChange_7_listener($event) { return ctx.record.operacao = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BinaryComponent_Template_app_input_ngModelChange_8_listener($event) { return ctx.record.divisor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Enviar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Resultados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BinaryComponent_div_15_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BinaryComponent_div_16_Template, 1, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", "[0-1]*")("required", true)("ngModel", ctx.record.operador);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("required", true)("options", ctx.operations)("ngModel", ctx.record.operacao);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", "[0-1]*")("required", true)("ngModel", ctx.record.divisor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.results.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.results);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _app_shared_components_core_forms_input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _app_shared_components_core_forms_select_select_component__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".binary[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.binary-title[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: center;\n  font-size: 1.72rem;\n}\n.binary-control[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  display: flex;\n  padding: 1rem;\n}\n.binary-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n  .binary-result {\n  color: #007bff;\n}\n  .binary-error {\n  color: #dc3545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVhdHVyZXMvYmluYXJ5L2JpbmFyeS5jb21wb25lbnQuc2NzcyIsInNyYy9fdmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0FBSEo7QUFVSTtFQUNFLGNDZEM7QURPUDtBQVVJO0VBQ0UsY0NkQTtBRE1OIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmVhdHVyZXMvYmluYXJ5L2JpbmFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvdmFyaWFibGVcIjtcblxuLmJpbmFyeSB7XG4gIHBhZGRpbmc6IDFyZW07XG5cbiAgJi10aXRsZSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAjeyRsZ31yZW07XG4gIH1cblxuICAmLWNvbnRyb2wge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5LTMwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAmLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxufVxuXG46Om5nLWRlZXAge1xuICAuYmluYXJ5IHtcbiAgICAmLXJlc3VsdCB7XG4gICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgfVxuXG4gICAgJi1lcnJvciB7XG4gICAgICBjb2xvcjogJGRhbmdlcjtcbiAgICB9XG4gIH1cbn1cbiIsIiR3aGl0ZTogI2ZmZmZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogIzAwMDAwMCAhZGVmYXVsdDtcblxuJGJsdWU6ICMwMDdiZmYgIWRlZmF1bHQ7XG4kaW5kaWdvOiAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAjZmZjMTA3ICFkZWZhdWx0O1xuJGdyZWVuOiAjMjhhNzQ1ICFkZWZhdWx0O1xuJHRlYWw6ICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogIzE3YTJiOCAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogJHB1cnBsZSAhZGVmYXVsdDtcbiRzdWNjZXNzOiAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogJGN5YW4gIWRlZmF1bHQ7XG4kd2FybmluZzogJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkYXJrOiAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRtdXRlZC1jb2xvcjogbWl4KCR3aGl0ZSwgJGdyYXktNzAwLCA3MCUpO1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZSgoXG4gICdwcmltYXJ5JzogJHByaW1hcnksXG4gICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LFxuICAnc3VjY2Vzcyc6ICRzdWNjZXNzLFxuICAnaW5mbyc6ICRpbmZvLFxuICAnd2FybmluZyc6ICR3YXJuaW5nLFxuICAnZGFuZ2VyJzogJGRhbmdlcixcbiAgJ2xpZ2h0JzogJGxpZ2h0LFxuICAnZGFyayc6ICRkYXJrLFxuICAnZGVmYXVsdCc6ICRncmF5LTEwMFxuKSwgJHRoZW1lLWNvbG9ycyk7XG5cbiR4bGc6IDI7XG4kbGc6IDEuNzI7XG4kbm9ybWFsOiAxLjQ0O1xuJHNtOiAxLjI7XG4kc21sOiAxO1xuJHhzbTogLjg5O1xuXG4kc2l6ZXM6ICgpICFkZWZhdWx0O1xuJHNpemVzOiAoXG4gICdub3JtYWwnOiAkbm9ybWFsLFxuICAnbGcnOiAkbGcsXG4gICd4bGcnOiAkeGxnLFxuICAnc20nOiAkc20sXG4gICdzbWwnOiAkc21sLFxuICAneHNtJzogJHhzbVxuKTtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BinaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-binary',
                templateUrl: './binary.component.html',
                styleUrls: ['./binary.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/header/header.component */ "/QED");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'dashboard';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "app"], [1, "app-header"], [1, "app-body"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_pages_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".app[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: 74px 1fr;\n  height: 100vh;\n  width: 100vw;\n}\n.app-header[_ngcontent-%COMP%] {\n  background-color: #dee2e6;\n  grid-area: 1/1/1/span 12;\n}\n.app-body[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  grid-area: 2/2/2/span 10;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL192YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0U7RUFDRSx5QkNQTztFRFFQLHdCQUFBO0FBREo7QUFJRTtFQUNFLHlCQ2RPO0VEZVAsd0JBQUE7RUFDQSxnQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy92YXJpYWJsZVwiO1xuXG4uYXBwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzRweCAxZnI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcblxuICAmLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktMzAwO1xuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gc3BhbiAxMjtcbiAgfVxuXG4gICYtYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktMTAwO1xuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAyIC8gc3BhbiAxMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG4iLCIkd2hpdGU6ICNmZmZmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICMwMDAwMDAgIWRlZmF1bHQ7XG5cbiRibHVlOiAjMDA3YmZmICFkZWZhdWx0O1xuJGluZGlnbzogIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICNkYzM1NDUgIWRlZmF1bHQ7XG4kb3JhbmdlOiAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogI2ZmYzEwNyAhZGVmYXVsdDtcbiRncmVlbjogIzI4YTc0NSAhZGVmYXVsdDtcbiR0ZWFsOiAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICMxN2EyYjggIWRlZmF1bHQ7XG5cbiRwcmltYXJ5OiAkYmx1ZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICRwdXJwbGUgIWRlZmF1bHQ7XG4kc3VjY2VzczogJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICRjeWFuICFkZWZhdWx0O1xuJHdhcm5pbmc6ICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZGFyazogJGdyYXktOTAwICFkZWZhdWx0O1xuXG4kbXV0ZWQtY29sb3I6IG1peCgkd2hpdGUsICRncmF5LTcwMCwgNzAlKTtcblxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoKFxuICAncHJpbWFyeSc6ICRwcmltYXJ5LFxuICAnc2Vjb25kYXJ5JzogJHNlY29uZGFyeSxcbiAgJ3N1Y2Nlc3MnOiAkc3VjY2VzcyxcbiAgJ2luZm8nOiAkaW5mbyxcbiAgJ3dhcm5pbmcnOiAkd2FybmluZyxcbiAgJ2Rhbmdlcic6ICRkYW5nZXIsXG4gICdsaWdodCc6ICRsaWdodCxcbiAgJ2RhcmsnOiAkZGFyayxcbiAgJ2RlZmF1bHQnOiAkZ3JheS0xMDBcbiksICR0aGVtZS1jb2xvcnMpO1xuXG4keGxnOiAyO1xuJGxnOiAxLjcyO1xuJG5vcm1hbDogMS40NDtcbiRzbTogMS4yO1xuJHNtbDogMTtcbiR4c206IC44OTtcblxuJHNpemVzOiAoKSAhZGVmYXVsdDtcbiRzaXplczogKFxuICAnbm9ybWFsJzogJG5vcm1hbCxcbiAgJ2xnJzogJGxnLFxuICAneGxnJzogJHhsZyxcbiAgJ3NtJzogJHNtLFxuICAnc21sJzogJHNtbCxcbiAgJ3hzbSc6ICR4c21cbik7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "V/fk":
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "q59W");
/* harmony import */ var _app_shared_components_core_forms_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/shared/components/core/forms/input/input.component */ "vnuB");
/* harmony import */ var _app_shared_components_core_forms_controller_accessor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/shared/components/core/forms/controller-accessor */ "3u92");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _app_shared_components_core_forms_select_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/shared/components/core/forms/select/select.component */ "byeA");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");












class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_app_shared_components_core_forms_controller_accessor__WEBPACK_IMPORTED_MODULE_6__["ControllerAccessor"], _app_shared_components_core_forms_input_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"], _app_shared_components_core_forms_select_select_component__WEBPACK_IMPORTED_MODULE_9__["SelectComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"]], exports: [_app_shared_components_core_forms_input_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"], _app_shared_components_core_forms_select_select_component__WEBPACK_IMPORTED_MODULE_9__["SelectComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_shared_components_core_forms_controller_accessor__WEBPACK_IMPORTED_MODULE_6__["ControllerAccessor"], _app_shared_components_core_forms_input_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"], _app_shared_components_core_forms_select_select_component__WEBPACK_IMPORTED_MODULE_9__["SelectComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"]],
                providers: [],
                exports: [_app_shared_components_core_forms_input_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"], _app_shared_components_core_forms_select_select_component__WEBPACK_IMPORTED_MODULE_9__["SelectComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-chartjs */ "jdj2");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/app/app-routing.module */ "vY5A");
/* harmony import */ var _app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/app/pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/header/header.component */ "/QED");
/* harmony import */ var _pages_features_binary_binary_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/features/binary/binary.component */ "6OJ2");
/* harmony import */ var _pages_features_unique_element_unique_element_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/features/unique-element/unique-element.component */ "2Bq0");
/* harmony import */ var _app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/app/shared/components/components.module */ "V/fk");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            ng_chartjs__WEBPACK_IMPORTED_MODULE_2__["NgChartjsModule"].registerPlugin(),
            _app_app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexModule"],
            _app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_20__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"], _pages_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"], _pages_features_binary_binary_component__WEBPACK_IMPORTED_MODULE_18__["BinaryComponent"], _pages_features_unique_element_unique_element_component__WEBPACK_IMPORTED_MODULE_19__["UniqueElementComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], ng_chartjs__WEBPACK_IMPORTED_MODULE_2__["NgChartjsModule"], _app_app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexModule"],
        _app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_20__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"], _pages_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"], _pages_features_binary_binary_component__WEBPACK_IMPORTED_MODULE_18__["BinaryComponent"], _pages_features_unique_element_unique_element_component__WEBPACK_IMPORTED_MODULE_19__["UniqueElementComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    ng_chartjs__WEBPACK_IMPORTED_MODULE_2__["NgChartjsModule"].registerPlugin(),
                    _app_app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexModule"],
                    _app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_20__["ComponentsModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "byeA":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/core/forms/select/select.component.ts ***!
  \*************************************************************************/
/*! exports provided: CUSTOM_SELECT_CONTROL_VALUE_ACCESSOR, SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_SELECT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_SELECT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_shared_components_core_forms_controller_accessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/shared/components/core/forms/controller-accessor */ "3u92");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");









function SelectComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1.desc, " ");
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
const CUSTOM_SELECT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => SelectComponent),
    multi: true
};
class SelectComponent extends _app_shared_components_core_forms_controller_accessor__WEBPACK_IMPORTED_MODULE_2__["ControllerAccessor"] {
    constructor() {
        super(...arguments);
        this.options = [];
        this.placeholder = '';
        this.onOptionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onSelectChange(event) {
        this.value = event;
        this.onOptionChange.emit(this.value);
    }
    toString(value) {
        return JSON.stringify(value);
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return ɵSelectComponent_BaseFactory(t || SelectComponent); };
SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], inputs: { options: "options", placeholder: "placeholder" }, outputs: { onOptionChange: "onOptionChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CUSTOM_SELECT_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 10, consts: [[1, "select", 3, "ngClass"], ["appearance", "legacy"], [1, "select-label"], [1, "form-control", "select-field", 3, "id", "name", "required", "disabled", "ngModel", "blur", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SelectComponent_Template_mat_select_blur_4_listener() { return ctx.onBlur(); })("ngModelChange", function SelectComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.onSelectChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectComponent_mat_option_5_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("name", ctx.name)("required", ctx.required)("disabled", ctx.disabled)("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"]], styles: [".select[_ngcontent-%COMP%] {\n  display: flex;\n  flex: auto;\n  flex-direction: column;\n  min-width: -webkit-max-content;\n  min-width: max-content;\n  position: relative;\n}\n.select-label[_ngcontent-%COMP%] {\n  line-height: 120%;\n  padding: 0.2rem 0.4rem;\n}\n.select.disabled[_ngcontent-%COMP%]::after {\n  border-color: #ced4da;\n}\n.select[_ngcontent-%COMP%]:not(.disabled):active::after {\n  transform: rotateZ(225deg);\n}\n.select-label[_ngcontent-%COMP%] {\n  line-height: 120%;\n  padding: 0.2rem 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29yZS9mb3Jtcy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL192YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQUEsc0JBQUE7RUFDQSxrQkFBQTtBQURGO0FBR0U7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0FBREo7QUFJRTtFQUNFLHFCQ1hPO0FEU1g7QUFLRTtFQUNFLDBCQUFBO0FBSEo7QUFNRTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvcmUvZm9ybXMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZSc7XG5cbi5zZWxlY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJi1sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgcGFkZGluZzogLjJyZW0gLjRyZW07XG4gIH1cblxuICAmLmRpc2FibGVkOjphZnRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkZ3JheS00MDA7XG4gIH1cblxuICAmOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigyMjVkZWcpO1xuICB9XG5cbiAgJi1sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgcGFkZGluZzogLjJyZW0gLjRyZW07XG4gIH1cbn1cbiIsIiR3aGl0ZTogI2ZmZmZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogIzAwMDAwMCAhZGVmYXVsdDtcblxuJGJsdWU6ICMwMDdiZmYgIWRlZmF1bHQ7XG4kaW5kaWdvOiAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAjZmZjMTA3ICFkZWZhdWx0O1xuJGdyZWVuOiAjMjhhNzQ1ICFkZWZhdWx0O1xuJHRlYWw6ICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogIzE3YTJiOCAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogJHB1cnBsZSAhZGVmYXVsdDtcbiRzdWNjZXNzOiAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogJGN5YW4gIWRlZmF1bHQ7XG4kd2FybmluZzogJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkYXJrOiAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRtdXRlZC1jb2xvcjogbWl4KCR3aGl0ZSwgJGdyYXktNzAwLCA3MCUpO1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZSgoXG4gICdwcmltYXJ5JzogJHByaW1hcnksXG4gICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LFxuICAnc3VjY2Vzcyc6ICRzdWNjZXNzLFxuICAnaW5mbyc6ICRpbmZvLFxuICAnd2FybmluZyc6ICR3YXJuaW5nLFxuICAnZGFuZ2VyJzogJGRhbmdlcixcbiAgJ2xpZ2h0JzogJGxpZ2h0LFxuICAnZGFyayc6ICRkYXJrLFxuICAnZGVmYXVsdCc6ICRncmF5LTEwMFxuKSwgJHRoZW1lLWNvbG9ycyk7XG5cbiR4bGc6IDI7XG4kbGc6IDEuNzI7XG4kbm9ybWFsOiAxLjQ0O1xuJHNtOiAxLjI7XG4kc21sOiAxO1xuJHhzbTogLjg5O1xuXG4kc2l6ZXM6ICgpICFkZWZhdWx0O1xuJHNpemVzOiAoXG4gICdub3JtYWwnOiAkbm9ybWFsLFxuICAnbGcnOiAkbGcsXG4gICd4bGcnOiAkeGxnLFxuICAnc20nOiAkc20sXG4gICdzbWwnOiAkc21sLFxuICAneHNtJzogJHhzbVxuKTtcbiJdfQ== */"] });
const ɵSelectComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SelectComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select',
                templateUrl: './select.component.html',
                styleUrls: ['./select.component.scss'],
                providers: [CUSTOM_SELECT_CONTROL_VALUE_ACCESSOR]
            }]
    }], null, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['placeholder']
        }], onOptionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/pages/home/home.component */ "1LmZ");
/* harmony import */ var _app_pages_features_unique_element_unique_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/pages/features/unique-element/unique-element.component */ "2Bq0");
/* harmony import */ var _app_pages_features_binary_binary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/pages/features/binary/binary.component */ "6OJ2");







const routes = [
    { path: 'home', component: _app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'unique-element', component: _app_pages_features_unique_element_unique_element_component__WEBPACK_IMPORTED_MODULE_3__["UniqueElementComponent"] },
    { path: 'binary', component: _app_pages_features_binary_binary_component__WEBPACK_IMPORTED_MODULE_4__["BinaryComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vnMl":
/*!******************************************!*\
  !*** ./src/app/pages/home/line-chart.ts ***!
  \******************************************/
/*! exports provided: lineChartData, lineChartLabels, lineChartOptions, lineChartLegend, doughnutChartLabels, doughnutChartData, radarChartOptions, radarChartLabels, radarChartData, pieChartOptions, pieChartLabels, pieChartData, pieChartLegend, pieChartColors, polarAreaChartLabels, polarAreaChartData, polarAreaLegend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartData", function() { return lineChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartLabels", function() { return lineChartLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartOptions", function() { return lineChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartLegend", function() { return lineChartLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doughnutChartLabels", function() { return doughnutChartLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doughnutChartData", function() { return doughnutChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radarChartOptions", function() { return radarChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radarChartLabels", function() { return radarChartLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radarChartData", function() { return radarChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartOptions", function() { return pieChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartLabels", function() { return pieChartLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartData", function() { return pieChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartLegend", function() { return pieChartLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartColors", function() { return pieChartColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polarAreaChartLabels", function() { return polarAreaChartLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polarAreaChartData", function() { return polarAreaChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polarAreaLegend", function() { return polarAreaLegend; });
const random = () => Math.round(Math.random() * 255);
const lineChartData = [
    {
        label: 'Produtos',
        fill: true,
        lineTension: 0.1,
        backgroundColor: `rgba(${random()}, ${random()}, ${random()},0.4)`,
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: `rgba(${random()}, ${random()}, ${random()},0.4)`,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: `rgba(${random()}, ${random()}, ${random()},0.4)`,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
    }
];
const lineChartLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'];
const lineChartOptions = {
    responsive: true
};
const lineChartLegend = true;
// Doughnut
const doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
const doughnutChartData = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70]
];
const radarChartOptions = {
    responsive: true
};
const radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
const radarChartData = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
];
const pieChartOptions = {
    responsive: true,
    legend: {
        position: 'top'
    },
    plugins: {
        datalabels: {
            formatter: (value, ctx) => {
                return ctx.chart.data.labels[ctx.dataIndex];
            }
        }
    }
};
const pieChartLabels = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
const pieChartData = [300, 500, 100];
const pieChartLegend = true;
const pieChartColors = [
    {
        backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)']
    }
];
const polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
const polarAreaChartData = [300, 500, 100, 40, 120];
const polarAreaLegend = true;


/***/ }),

/***/ "vnuB":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/core/forms/input/input.component.ts ***!
  \***********************************************************************/
/*! exports provided: INPUT_CONTROL_VALUE_ACCESSOR, InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_CONTROL_VALUE_ACCESSOR", function() { return INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_shared_components_core_forms_controller_accessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/shared/components/core/forms/controller-accessor */ "3u92");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "e6WT");








const _c0 = ["inputElement"];
function InputComponent_mat_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.text);
} }
const _c1 = function () { return { standalone: true }; };
function InputComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputComponent_input_3_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.value = $event; })("blur", function InputComponent_input_3_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onBlur(); })("keydown", function InputComponent_input_3_Template_input_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onKeydown($event); })("change", function InputComponent_input_3_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.change(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1))("disabled", ctx_r1.disabled)("name", ctx_r1.name)("max", ctx_r1.max)("maxLength", ctx_r1.maxLength)("type", ctx_r1.type)("required", ctx_r1.required)("placeholder", ctx_r1.placeholder)("autocomplete", ctx_r1.autocomplete)("ngModel", ctx_r1.value);
} }
const INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputComponent),
    multi: true
};
class InputComponent extends _app_shared_components_core_forms_controller_accessor__WEBPACK_IMPORTED_MODULE_2__["ControllerAccessor"] {
    constructor() {
        super(...arguments);
        this.placeholder = '';
        this.type = 'text';
        this.icon = '';
        this.maxLength = 99999;
        this.max = 99999;
        this.autofocus = true;
        this.autocomplete = true;
    }
    onKeydown(event) {
        if (this.type === 'number') {
            return !['e', 'E'].includes(event.key);
        }
        return true;
    }
    focus() {
        const element = this.inputElement.nativeElement;
        element && element.focus();
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return ɵInputComponent_BaseFactory(t || InputComponent); };
InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], viewQuery: function InputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
    } }, inputs: { placeholder: "placeholder", type: "type", icon: "icon", maxLength: "maxLength", max: "max", autofocus: "autofocus", autocomplete: "autocomplete" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([INPUT_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 2, consts: [[1, "input"], ["appearance", "legacy"], ["class", "input-label", 4, "ngIf"], ["matInput", "", "class", "form-control input-field", 3, "ngModelOptions", "disabled", "name", "max", "maxLength", "type", "required", "placeholder", "autocomplete", "ngModel", "ngModelChange", "blur", "keydown", "change", 4, "ngIf"], [1, "input-label"], ["matInput", "", 1, "form-control", "input-field", 3, "ngModelOptions", "disabled", "name", "max", "maxLength", "type", "required", "placeholder", "autocomplete", "ngModel", "ngModelChange", "blur", "keydown", "change"], ["inputElement", ""]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputComponent_mat_label_2_Template, 2, 1, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputComponent_input_3_Template, 2, 11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type !== "date");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".input[_ngcontent-%COMP%] {\n  display: flex;\n  flex: auto;\n  flex-direction: column;\n}\n.input-label[_ngcontent-%COMP%] {\n  line-height: 120%;\n  padding: 0.2rem 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29yZS9mb3Jtcy9pbnB1dC9pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29yZS9mb3Jtcy9pbnB1dC9pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZSc7XG5cbi5pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgJi1sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgcGFkZGluZzogLjJyZW0gLjRyZW07XG4gIH1cbn1cbiJdfQ== */"] });
const ɵInputComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](InputComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input',
                templateUrl: './input.component.html',
                styleUrls: ['./input.component.scss'],
                providers: [INPUT_CONTROL_VALUE_ACCESSOR]
            }]
    }], null, { inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputElement']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
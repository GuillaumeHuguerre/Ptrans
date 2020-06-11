(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n</ion-header>\n\n\n\n<ion-content fullscreen>\n  <ion-text color=\"light\">\n    <h4>MENU</h4>\n  </ion-text>\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div (click)=\"goToCalendar()\" class=\"item-menu\">\n        \n          <ion-icon id=\"icon-calendar\" name=\"calendar\"></ion-icon>\n          <ion-text color=\"light\"><h3>Calendrier</h3></ion-text>\n        \n      </div>\n      </ion-col>\n\n      <ion-col>\n        <div (click)=\"goToTodo()\" class=\"item-menu\">\n          <ion-icon id=\"icon-todo\" name=\"checkbox-outline\"></ion-icon>\n          <ion-text color=\"light\"><h3>Todo-List</h3></ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"item-menu\">\n        \n          <ion-icon id=\"icon-calendar\" name=\"timer\"></ion-icon>\n          <ion-text color=\"light\"><h3>Focus Keeper</h3></ion-text>\n        \n      </div>\n      </ion-col>\n\n      <ion-col>\n        <div class=\"item-menu\">\n          <ion-icon id=\"icon-todo\" name=\"contacts\"></ion-icon>\n          <ion-text color=\"light\"><h3>Amis</h3></ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/menu/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/menu/home.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ]),
                ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/menu/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  padding-bottom: 6%;\n  padding-top: 3%;\n  padding-left: 4%;\n  font-size: 30px;\n  border: none;\n}\n\nh3 {\n  padding-bottom: 6%;\n  padding-top: 3%;\n  padding-left: 4%;\n  font-size: 15px;\n  font-weight: normal;\n}\n\n#icon-menu {\n  font-size: 45px;\n}\n\n.item-menu {\n  background-color: #9980eb;\n  margin-top: 2%;\n  text-align: center;\n  border-radius: 3px;\n  padding-top: 5%;\n  padding-bottom: 5%;\n}\n\n.item-menu:hover {\n  cursor: pointer;\n}\n\nion-content {\n  --background: #7e57ff;\n}\n\nion-button {\n  --background: #9980eb;\n}\n\n#icon-calendar, #icon-todo {\n  font-size: 50px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9EOlxcQ291cnNcXFBUcmFuc1xcZGV2ZGFjdGljQ2FsZW5kYXIvc3JjXFxhcHBcXG1lbnVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9tZW51L2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUVJLGVBQUE7QUNGSjs7QURNQTtFQUVJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7QUNKSjs7QURPQTtFQUNJLHFCQUFBO0FDSko7O0FET0E7RUFDSSxxQkFBQTtBQ0pKOztBRFFBO0VBRUksZUFBQTtFQUNBLFlBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL21lbnUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmg0XG57XG4gICAgcGFkZGluZy1ib3R0b206IDYlO1xuICAgIHBhZGRpbmctdG9wOiAzJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDQlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbmgze1xuICAgIHBhZGRpbmctYm90dG9tOiA2JTtcbiAgICBwYWRkaW5nLXRvcDogMyU7XG4gICAgcGFkZGluZy1sZWZ0OiA0JTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuI2ljb24tbWVudVxue1xuICAgIGZvbnQtc2l6ZSA6IDQ1cHg7XG59XG5cblxuLml0ZW0tbWVudVxue1xuICAgIGJhY2tncm91bmQtY29sb3I6Izk5ODBlYiA7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG4uaXRlbS1tZW51OmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjN2U1N2ZmO1xufVxuXG5pb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogIzk5ODBlYjtcbiAgICBcbn1cblxuI2ljb24tY2FsZW5kYXIsICNpY29uLXRvZG9cbntcbiAgICBmb250LXNpemUgOiA1MHB4O1xuICAgIGNvbG9yIDogd2hpdGU7XG59XG4iLCJoNCB7XG4gIHBhZGRpbmctYm90dG9tOiA2JTtcbiAgcGFkZGluZy10b3A6IDMlO1xuICBwYWRkaW5nLWxlZnQ6IDQlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuaDMge1xuICBwYWRkaW5nLWJvdHRvbTogNiU7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgcGFkZGluZy1sZWZ0OiA0JTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4jaWNvbi1tZW51IHtcbiAgZm9udC1zaXplOiA0NXB4O1xufVxuXG4uaXRlbS1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5ODBlYjtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbn1cblxuLml0ZW0tbWVudTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICM3ZTU3ZmY7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICM5OTgwZWI7XG59XG5cbiNpY29uLWNhbGVuZGFyLCAjaWNvbi10b2RvIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/menu/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomePage = /** @class */ (function () {
    function HomePage(router) {
        this.router = router;
    }
    HomePage.prototype.goToCalendar = function () {
        this.router.navigate(['/calendrier']);
    };
    HomePage.prototype.goToTodo = function () {
        this.router.navigate(['/todo']);
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/menu/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-home-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todo-new-item-new-item-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/new-item/new-item.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/new-item/new-item.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>Nouveau</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"new_item_form\" (submit)=\"createItem(new_item_form.value)\">\n    <ion-item>\n      <ion-label color=\"tertiary\" position=\"floating\">Titre</ion-label>\n      <ion-input type=\"text\" formControlName=\"title\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"tertiary\" position=\"floating\">Description</ion-label>\n      <ion-input type=\"text\" formControlName=\"description\" required></ion-input>\n    </ion-item>\n    <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" [disabled]=\"!new_item_form.valid\">Créer</ion-button>\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/todo/new-item/new-item.module.ts":
/*!**************************************************!*\
  !*** ./src/app/todo/new-item/new-item.module.ts ***!
  \**************************************************/
/*! exports provided: NewItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPageModule", function() { return NewItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-item.page */ "./src/app/todo/new-item/new-item.page.ts");







const routes = [
    {
        path: '',
        component: _new_item_page__WEBPACK_IMPORTED_MODULE_6__["NewItemPage"]
    }
];
let NewItemPageModule = class NewItemPageModule {
};
NewItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_new_item_page__WEBPACK_IMPORTED_MODULE_6__["NewItemPage"]]
    })
], NewItemPageModule);



/***/ }),

/***/ "./src/app/todo/new-item/new-item.page.scss":
/*!**************************************************!*\
  !*** ./src/app/todo/new-item/new-item.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submit-btn {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9uZXctaXRlbS9EOlxcQ291cnNcXFBUcmFuc1xcZGV2ZGFjdGljQ2FsZW5kYXIvc3JjXFxhcHBcXHRvZG9cXG5ldy1pdGVtXFxuZXctaXRlbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RvZG8vbmV3LWl0ZW0vbmV3LWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vbmV3LWl0ZW0vbmV3LWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Ym1pdC1idG4ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuIiwiLnN1Ym1pdC1idG4ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/todo/new-item/new-item.page.ts":
/*!************************************************!*\
  !*** ./src/app/todo/new-item/new-item.page.ts ***!
  \************************************************/
/*! exports provided: NewItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemPage", function() { return NewItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");





let NewItemPage = class NewItemPage {
    constructor(router, formBuilder, itemService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
    }
    ngOnInit() {
        this.new_item_form = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    goBack() {
        this.router.navigate(['/todo']);
    }
    createItem(value) {
        this.itemService.createItem(value.title, value.description);
        this.new_item_form.reset();
        this.goBack();
    }
};
NewItemPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] }
];
NewItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-item',
        template: __webpack_require__(/*! raw-loader!./new-item.page.html */ "./node_modules/raw-loader/index.js!./src/app/todo/new-item/new-item.page.html"),
        styles: [__webpack_require__(/*! ./new-item.page.scss */ "./src/app/todo/new-item/new-item.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]])
], NewItemPage);



/***/ })

}]);
//# sourceMappingURL=todo-new-item-new-item-module-es2015.js.map
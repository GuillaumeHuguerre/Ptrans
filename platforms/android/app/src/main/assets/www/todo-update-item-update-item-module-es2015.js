(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todo-update-item-update-item-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/update-item/update-item.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/update-item/update-item.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>Modifier</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"item\" padding>\n  <form [formGroup]=\"edit_item_form\" (ngSubmit)=\"updateItem(edit_item_form.value)\">\n    <ion-item>\n      <ion-label color=\"tertiary\" position=\"floating\">Title</ion-label>\n      <ion-input type=\"text\" formControlName=\"title\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color=\"tertiary\" position=\"floating\">Description</ion-label>\n      <ion-input type=\"text\" formControlName=\"description\" required></ion-input>\n    </ion-item>\n    <ion-button class=\"submit-btn\" expand=\"block\" type=\"submit\" [disabled]=\"!edit_item_form.valid\">Modifier</ion-button>\n  </form>\n  \n  <ion-button (click)=\"delItem()\" color=\"danger\" expand=\"block\">Supprimer</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/todo/update-item/update-item.module.ts":
/*!********************************************************!*\
  !*** ./src/app/todo/update-item/update-item.module.ts ***!
  \********************************************************/
/*! exports provided: UpdateItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateItemPageModule", function() { return UpdateItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _update_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-item.page */ "./src/app/todo/update-item/update-item.page.ts");







const routes = [
    {
        path: '',
        component: _update_item_page__WEBPACK_IMPORTED_MODULE_6__["UpdateItemPage"]
    }
];
let UpdateItemPageModule = class UpdateItemPageModule {
};
UpdateItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_update_item_page__WEBPACK_IMPORTED_MODULE_6__["UpdateItemPage"]]
    })
], UpdateItemPageModule);



/***/ }),

/***/ "./src/app/todo/update-item/update-item.page.scss":
/*!********************************************************!*\
  !*** ./src/app/todo/update-item/update-item.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submit-btn {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby91cGRhdGUtaXRlbS9EOlxcQ291cnNcXFBUcmFuc1xcZGV2ZGFjdGljQ2FsZW5kYXIvc3JjXFxhcHBcXHRvZG9cXHVwZGF0ZS1pdGVtXFx1cGRhdGUtaXRlbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RvZG8vdXBkYXRlLWl0ZW0vdXBkYXRlLWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdXBkYXRlLWl0ZW0vdXBkYXRlLWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Ym1pdC1idG4ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuIiwiLnN1Ym1pdC1idG4ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/todo/update-item/update-item.page.ts":
/*!******************************************************!*\
  !*** ./src/app/todo/update-item/update-item.page.ts ***!
  \******************************************************/
/*! exports provided: UpdateItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateItemPage", function() { return UpdateItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/item.service */ "./src/app/services/item.service.ts");





let UpdateItemPage = class UpdateItemPage {
    constructor(router, route, formBuilder, itemService) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.itemService = itemService;
    }
    ngOnInit() {
        this.route.params.subscribe(data => {
            this.item = this.itemService.getItemById(data.id)[0];
            //if item is undefined, go back to home
            if (!this.item) {
                this.goBack();
            }
            else {
                this.edit_item_form = this.formBuilder.group({
                    title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.item.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                    description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.item.description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
                });
            }
        });
    }
    goBack() {
        this.router.navigate(['/home']);
    }
    updateItem(value) {
        let newValues = {
            id: this.item.id,
            title: value.title,
            description: value.description
        };
        this.itemService.updateItem(newValues);
        this.goBack();
    }
    delItem() {
        const index = this.itemService.items.indexOf(this.item);
        if (index > -1) {
            this.itemService.items.splice(index, 1);
            this.router.navigate(['/todo']);
        }
    }
};
UpdateItemPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] }
];
UpdateItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-item',
        template: __webpack_require__(/*! raw-loader!./update-item.page.html */ "./node_modules/raw-loader/index.js!./src/app/todo/update-item/update-item.page.html"),
        styles: [__webpack_require__(/*! ./update-item.page.scss */ "./src/app/todo/update-item/update-item.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]])
], UpdateItemPage);



/***/ })

}]);
//# sourceMappingURL=todo-update-item-update-item-module-es2015.js.map
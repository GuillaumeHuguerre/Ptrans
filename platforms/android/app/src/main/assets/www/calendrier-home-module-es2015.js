(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendrier-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/calendrier/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/calendrier/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>\n      Calendrier\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Card for adding a new event -->\n<ion-card>\n  <ion-card-header tappable (click)=\"collapseCard = !collapseCard\">\n    <ion-card-title>Nouvel évènement</ion-card-title>\n  </ion-card-header>\n  <ion-card-content *ngIf=\"collapseCard\">\n\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"Titre\" [(ngModel)]=\"event.title\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"Description\" [(ngModel)]=\"event.desc\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Début</ion-label>\n      <ion-datetime displayFormat=\"DD/MM/YYYY HH:mm\" pickerFormat=\"MMM D:HH:mm\" [(ngModel)]=\"event.startTime\" [min]=\"minDate\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Fin</ion-label>\n      <ion-datetime displayFormat=\"DD/MM/YYYY HH:mm\" pickerFormat=\"MMM D:HH:mm\" [(ngModel)]=\"event.endTime\" [min]=\"minDate\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Toute la journée</ion-label>\n      <ion-checkbox [(ngModel)]=\"event.allDay\"></ion-checkbox>\n    </ion-item>\n    <ion-button color=\"tertiary\" fill=\"outline\" expand=\"block\" (click)=\"addEvent()\" [disabled]=\"event.title == ''\">Add Event</ion-button>\n\n  </ion-card-content>\n</ion-card>\n\n<ion-row>\n  <!-- Change the displayed calendar mode -->\n  <ion-col size=\"4\">\n    <ion-button expand=\"block\" [color]=\"calendar.mode == 'month' ? 'tertiary' : 'tertiary'\" (click)=\"changeMode('month')\">Mois</ion-button>\n  </ion-col>\n  <ion-col size=\"4\">\n    <ion-button expand=\"block\" [color]=\"calendar.mode == 'week' ? 'tertiary' : 'tertiary'\" (click)=\"changeMode('week')\">Semaine</ion-button>\n  </ion-col>\n  <ion-col size=\"4\">\n    <ion-button expand=\"block\" [color]=\"calendar.mode == 'day' ? 'tertiary' : 'tertiary'\" (click)=\"changeMode('day')\">Jour</ion-button>\n  </ion-col>\n\n  <!-- Move back one screen of the slides -->\n  <ion-col size=\"6\" text-left>\n    <ion-button fill=\"clear\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n  </ion-col>\n\n  <!-- Move forward one screen of the slides -->\n  <ion-col size=\"6\" text-right>\n    <ion-button fill=\"clear\" (click)=\"next()\">\n      <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n  </ion-col>\n</ion-row>\n\n<ion-content padding>\n  <calendar \n  \n    [eventSource]=\"eventSource\" \n    [calendarMode]=\"calendar.mode\" \n    [currentDate]=\"calendar.currentDate\"\n    (onEventSelected)=\"onEventSelected($event)\"\n    (onTitleChanged)=\"onViewTitleChanged($event)\"\n    (onTimeSelected)=\"onTimeSelected($event)\" \n    startHour=\"1\"\n    endHour=\"25\"\n    step=\"30\"\n    startingDayWeek=\"1\">\n  </calendar>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/calendrier/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/calendrier/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/calendrier/home.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");








let HomePageModule = class HomePageModule {
};
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



/***/ }),

/***/ "./src/app/calendrier/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/calendrier/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZHJpZXIvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/calendrier/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/calendrier/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic2-calendar/calendar */ "./node_modules/ionic2-calendar/calendar.js");



let HomePage = class HomePage {
    constructor() {
        this.event = {
            title: '',
            desc: '',
            startTime: '',
            endTime: '',
            allDay: false
        };
        this.minDate = new Date().toISOString();
        this.eventSource = [];
        this.calendar = {
            mode: 'day',
            currentDate: new Date()
        };
        this.viewTitle = '';
    }
    ngOnInit() {
        this.resetEvent();
    }
    resetEvent() {
        this.event = {
            title: '',
            desc: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false
        };
    }
    addEvent() {
        let eventCopy = {
            title: this.event.title,
            startTime: new Date(this.event.startTime),
            endTime: new Date(this.event.endTime),
            allDay: this.event.allDay,
            desc: this.event.desc
        };
        if (eventCopy.allDay) {
            let start = eventCopy.startTime;
            let end = eventCopy.endTime;
            eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
            eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
        }
        this.eventSource.push(eventCopy);
        this.myCal.loadEvents();
        this.resetEvent();
    }
    changeMode(mode) {
        this.calendar.mode = mode;
    }
    back() {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slidePrev();
    }
    next() {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slideNext();
    }
    onEventSelected() {
    }
    onViewTitleChanged() {
    }
    onTimeSelected() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"])
], HomePage.prototype, "myCal", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/calendrier/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/calendrier/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=calendrier-home-module-es2015.js.map
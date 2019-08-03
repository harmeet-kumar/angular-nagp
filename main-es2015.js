(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/details/details.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/details/details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n    <div class=\"row cardRow\">\n\n        <div class=\"col-md-4 gridCol\" *ngFor=\"let student of students\">\n            <div class=\"card\" style=\"width: 18rem;background-color: white\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">{{student.firstName}}</h5>\n                    <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the\n                        card's content.</p>\n                    <a href=\"#\" class=\"card-link\">Card link</a>\n                    <a href=\"#\" class=\"card-link\">Another link</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/inputform/inputform.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inputform/inputform.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container box\">\n    <div style=\"text-align: center\"><h2>Form </h2></div>\n    <div class=\"col-md-10 offset-md-1\">\n    <!-- <div class=\"col-md-8 offset-md-2\"> -->\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label>First Name</label>\n                <div class=\"height65\">\n                    <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && studentForm.firstName.errors }\" />\n                    <div *ngIf=\"submitted && studentForm.firstName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"studentForm.firstName.errors.required\">First Name is required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>Last Name</label>\n                <div class=\"height65\">\n                    <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && studentForm.lastName.errors }\" />\n                    <div *ngIf=\"submitted && studentForm.lastName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"studentForm.lastName.errors.required\">Last Name is required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>Email</label>\n                <div class=\"height65\">\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && studentForm.email.errors }\" />\n                    <div *ngIf=\"submitted && studentForm.email.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"studentForm.email.errors.required\">Email is required</div>\n                        <div *ngIf=\"studentForm.email.errors.email\">Email must be a valid email address</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>Password</label>\n                <div class=\"height65\">\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && studentForm.password.errors }\" />\n                    <div *ngIf=\"submitted && studentForm.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"studentForm.password.errors.required\">Password is required</div>\n                        <div *ngIf=\"studentForm.password.errors.minlength\">Password must be at least 6 characters</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>Confirm Password</label>\n                <div class=\"height65\">\n                    <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && studentForm.confirmPassword.errors }\" />\n                    <div *ngIf=\"submitted && studentForm.confirmPassword.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"studentForm.confirmPassword.errors?.required\">Confirm Password is required</div>\n                        <div *ngIf=\"studentForm.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group margtop10\">\n                <button class=\"btn btn-primary\">Register</button>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-dark bg-dark mb-5 bar-margin header-bar\">\n        <i class=\"fab fa-korvue fa-2x\" style=\"color:white\"></i>\n    <a class=\"navbar-brand font-xl marg-left\" routerLink=\"/\">Kratos</a> \n    <div class=\"navbar-expand mr-auto marg-left\">\n        <div class=\"navbar-nav\">\n            \n            <a class=\"nav-item nav-link font-l marg-left\"   routerLink=\"form\" [routerLinkActive]=\"['active']\">\n                    <i class=\"fas fa-clipboard-list fa-m marg-left\" style=\"color:white; margin-right: 5px;\"></i>Form</a>\n            <a class=\"nav-item nav-link font-l marg-left\"   routerLink=\"details\" [routerLinkActive]=\"['active']\">\n                    <i class=\"fas fas fa-list fa-m marg-left\" style=\"color:white; margin-right: 5px;\"></i>Details</a>\n        </div>\n    </div> \n        <div class=\"navbar-expand ml-auto navbar-nav\">\n            <div class=\"navbar-nav\">\n                <div class=\"navbar-nav\" *ngIf=\"loggedIn\"> \n                    <a class=\"nav-item nav-link\" target=\"_blank\">\n                        <i class=\"fas fa-user\"></i>\n                        <span class=\"user-name\">Hi User {{username}}</span>\n                    </a>\n                </div>\n                <!-- <a (click)=\"logOut()\" *ngIf=\"loggedIn\" routerLink='login' class=\"btn btn-info marg-left \">\n                    <i class=\"fas fa-sign-out-alt\"></i>\n                    <span></span> Log out\n                </a> -->\n            </div>\n        </div>\n</nav>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/page-not-found/page-not-found.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/page-not-found/page-not-found.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n\t\t<div class=\"notfound\">\n\t\t\t<div class=\"notfound-bg\">\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t</div>\n\t\t\t<h1>oops!</h1>\n\t\t\t<h2>Error 404 : Page Not Found</h2>\n\t\t\t<a  href=\"\\\" >go back</a>\n\t\t\t<div class=\"notfound-social\">\n\t\t\t\t<a href=\"\\\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t<a  href=\"\\\"><i class=\"fa fa-twitter\"></i></a>\n\t\t\t\t<a  href=\"\\\"><i class=\"fa fa-pinterest\"></i></a>\n\t\t\t\t<a  href=\"\\\"><i class=\"fa fa-google-plus\"></i></a>\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inputform_inputform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputform/inputform.component */ "./src/app/inputform/inputform.component.ts");
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");






const routes = [
    {
        path: 'form',
        component: _inputform_inputform_component__WEBPACK_IMPORTED_MODULE_3__["InputformComponent"]
    },
    {
        path: 'details',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"]
    },
    {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
    },
    {
        path: 'notfound',
        component: _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    },
    {
        path: '**',
        redirectTo: 'notfound',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'kratos';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _inputform_inputform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inputform/inputform.component */ "./src/app/inputform/inputform.component.ts");
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
            _inputform_inputform_component__WEBPACK_IMPORTED_MODULE_6__["InputformComponent"],
            _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardRow{\r\n    margin: 0 auto; \r\n}\r\n\r\n.gridCol{\r\n    margin-bottom: 3%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFJvd3tcclxuICAgIG1hcmdpbjogMCBhdXRvOyBcclxufVxyXG5cclxuLmdyaWRDb2x7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/student.service */ "./src/app/shared/services/student.service.ts");



let DetailsComponent = class DetailsComponent {
    constructor(studentService) {
        this.studentService = studentService;
    }
    ngOnInit() {
        this.studentService.students.subscribe(val => {
            this.students = val;
        });
    }
};
DetailsComponent.ctorParameters = () => [
    { type: _shared_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"] }
];
DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: __webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/index.js!./src/app/details/details.component.html"),
        styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
    })
], DetailsComponent);



/***/ }),

/***/ "./src/app/inputform/inputform.component.css":
/*!***************************************************!*\
  !*** ./src/app/inputform/inputform.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    padding: 20px 0px 20px 0px;\r\n    border: 1px solid #BFBFBF;\r\n    background-color: white;\r\n    box-shadow: 10px 10px 5px #aaaaaa;\r\n    margin: 40px auto;\r\n    width: 70%;\r\n}\r\n\r\n.height65{\r\n    min-height: 65px !important;\r\n}\r\n\r\n.form-group {\r\n    margin: 0% !important;\r\n}\r\n\r\n.margtop10{\r\n    margin-top: 10px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXRmb3JtL2lucHV0Zm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9pbnB1dGZvcm0vaW5wdXRmb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xyXG4gICAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4ICNhYWFhYWE7XHJcbiAgICBtYXJnaW46IDQwcHggYXV0bztcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5oZWlnaHQ2NXtcclxuICAgIG1pbi1oZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luOiAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFyZ3RvcDEwe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/inputform/inputform.component.ts":
/*!**************************************************!*\
  !*** ./src/app/inputform/inputform.component.ts ***!
  \**************************************************/
/*! exports provided: InputformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputformComponent", function() { return InputformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/student.service */ "./src/app/shared/services/student.service.ts");
/* harmony import */ var _shared_validators_must_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/validators/must-match.validator */ "./src/app/shared/validators/must-match.validator.ts");
/* harmony import */ var _shared_Model_student__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/Model/student */ "./src/app/shared/Model/student.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let InputformComponent = class InputformComponent {
    constructor(router, formBuilder, studentService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.studentService = studentService;
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validators: Object(_shared_validators_must_match_validator__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('password', 'confirmPassword')
        });
    }
    get studentForm() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var student = new _shared_Model_student__WEBPACK_IMPORTED_MODULE_5__["Student"]();
        student.firstName = this.registerForm.value.firstName;
        student.lastName = this.registerForm.value.lastName;
        student.email = this.registerForm.value.email;
        student.password = this.registerForm.value.password;
        student.confirmPassword = this.registerForm.value.confirmPassword;
        this.studentService.addValue(student);
        this.registerForm.value.firstName = '';
        this.registerForm.value.lastName = '';
        this.registerForm.value.email = '';
        this.registerForm.value.password = '';
        this.registerForm.value.confirmPassword = '';
        this.router.navigate(['/details']);
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    }
};
InputformComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"] }
];
InputformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inputform',
        template: __webpack_require__(/*! raw-loader!./inputform.component.html */ "./node_modules/raw-loader/index.js!./src/app/inputform/inputform.component.html"),
        styles: [__webpack_require__(/*! ./inputform.component.css */ "./src/app/inputform/inputform.component.css")]
    })
], InputformComponent);



/***/ }),

/***/ "./src/app/shared/Model/student.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/Model/student.ts ***!
  \*****************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
class Student {
}


/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bar-margin {\r\n    z-index: 10;\r\n    margin-bottom: 0% !important;\r\n}\r\n\r\n.user-name {\r\n    color:white;\r\n    margin-left: 5px;\r\n}\r\n\r\n.marg-left {\r\n    margin-left: 10px;\r\n}\r\n\r\n.font-xl{\r\n    font-size: x-large;\r\n}\r\n\r\n.font-l {\r\n    font-size: larger;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXItbWFyZ2luIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVzZXItbmFtZSB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5tYXJnLWxlZnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mb250LXhse1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4uZm9udC1sIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.title = 'kratos';
        this.loggedIn = true;
    }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n \r\n  #notfound {\r\n    position: relative;\r\n    height: 100vh;\r\n    background-color: #fafbfd;\r\n  }\r\n  \r\n \r\n  #notfound .notfound {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  \r\n \r\n  .notfound {\r\n    max-width: 520px;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  \r\n \r\n  .notfound .notfound-bg {\r\n    position: absolute;\r\n    left: 0px;\r\n    right: 0px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    z-index: -1;\r\n  }\r\n  \r\n \r\n  .notfound .notfound-bg > div {\r\n    width: 100%;\r\n    background: #fff;\r\n    border-radius: 90px;\r\n    height: 125px;\r\n  }\r\n  \r\n \r\n  .notfound .notfound-bg > div:nth-child(1) {\r\n    box-shadow: 5px 5px 0px 0px #f3f3f3;\r\n  }\r\n  \r\n \r\n  .notfound .notfound-bg > div:nth-child(2) {\r\n    transform: scale(1.3);\r\n    box-shadow: 5px 5px 0px 0px #f3f3f3;\r\n    position: relative;\r\n    z-index: 10;\r\n  }\r\n  \r\n \r\n  .notfound .notfound-bg > div:nth-child(3) {\r\n    box-shadow: 5px 5px 0px 0px #f3f3f3;\r\n    position: relative;\r\n    z-index: 90;\r\n  }\r\n  \r\n \r\n  .notfound h1 {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 86px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    margin-top: 0;\r\n    margin-bottom: 8px;\r\n    color: #151515;\r\n  }\r\n  \r\n \r\n  .notfound h2 {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 26px;\r\n    margin: 0;\r\n    font-weight: 700;\r\n    color: #151515;\r\n  }\r\n  \r\n \r\n  .notfound a {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    background: #18e06f;\r\n    display: inline-block;\r\n    padding: 15px 30px;\r\n    border-radius: 5px;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n \r\n  .notfound-social {\r\n    margin-top: 20px;\r\n  }\r\n  \r\n \r\n  .notfound-social>a {\r\n    display: inline-block;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    width: 40px;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    background-color: #dedede;\r\n    margin: 3px;\r\n    padding: 0px;\r\n    transition: 0.2s all;\r\n  }\r\n  \r\n \r\n  .notfound-social>a:hover {\r\n    background-color: #18e06f;\r\n  }\r\n  \r\n \r\n  @media only screen and (max-width: 767px) {\r\n      .notfound .notfound-bg {\r\n        width: 287px;\r\n        margin: auto;\r\n      }\r\n  \r\n      .notfound .notfound-bg > div {\r\n        height: 85px;\r\n    }\r\n  }\r\n  \r\n \r\n  @media only screen and (max-width: 480px) {\r\n    .notfound h1 {\r\n      font-size: 68px;\r\n    }\r\n  \r\n    .notfound h2 {\r\n      font-size: 18px;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFFWSxzQkFBc0I7RUFDaEM7OztFQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7RUFDM0I7OztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBR0EsZ0NBQWdDO0VBQzFDOzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFFBQVE7SUFHQSwyQkFBMkI7SUFDbkMsV0FBVztFQUNiOzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7RUFDZjs7O0VBRUE7SUFFVSxtQ0FBbUM7RUFDN0M7OztFQUVBO0lBR1UscUJBQXFCO0lBRXJCLG1DQUFtQztJQUMzQyxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOzs7RUFFQTtJQUVVLG1DQUFtQztJQUMzQyxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOzs7RUFFQTtJQUNFLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7OztFQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7OztFQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7OztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBRVosb0JBQW9CO0VBQ3RCOzs7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7O0VBRUE7TUFDSTtRQUNFLFlBQVk7UUFDWixZQUFZO01BQ2Q7O01BRUE7UUFDRSxZQUFZO0lBQ2hCO0VBQ0Y7OztFQUVBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsZUFBZTtJQUNqQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiBcclxuICAjbm90Zm91bmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmQ7XHJcbiAgfVxyXG4gIFxyXG4gICNub3Rmb3VuZCAubm90Zm91bmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCB7XHJcbiAgICBtYXgtd2lkdGg6IDUyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtYmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtYmcgPiBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtYmcgPiBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAwcHggMHB4ICNmM2YzZjM7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMHB4IDBweCAjZjNmM2YzO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLWJnID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMHB4IDBweCAjZjNmM2YzO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDBweCAwcHggI2YzZjNmMztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLWJnID4gZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMHB4IDBweCAjZjNmM2YzO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDBweCAwcHggI2YzZjNmMztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDkwO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA4NnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgY29sb3I6ICMxNTE1MTU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCBoMiB7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMxNTE1MTU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCBhIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMThlMDZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kLXNvY2lhbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQtc29jaWFsPmEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG4gIH1cclxuICAubm90Zm91bmQtc29jaWFsPmE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4ZTA2ZjtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAubm90Zm91bmQgLm5vdGZvdW5kLWJnIHtcclxuICAgICAgICB3aWR0aDogMjg3cHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5ub3Rmb3VuZCAubm90Zm91bmQtYmcgPiBkaXYge1xyXG4gICAgICAgIGhlaWdodDogODVweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLm5vdGZvdW5kIGgxIHtcclxuICAgICAgZm9udC1zaXplOiA2OHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5vdGZvdW5kIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PageNotFoundComponent = class PageNotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirectToApp() {
        this.router.navigateByUrl('');
    }
};
PageNotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/shared/page-not-found/page-not-found.component.css")]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/shared/services/student.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/student.service.ts ***!
  \****************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let StudentService = class StudentService {
    constructor(http) {
        this.http = http;
        this.students = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        var studentList = JSON.parse(localStorage.getItem('students'));
        if (studentList && studentList.length != 0) {
            this.students.next(studentList);
        }
        else {
            this.getStudentsFromJSON();
        }
    } // http is initialized in the constructor to get data from json
    getStudentsFromJSON() {
        this.http.get('assets/students.json').subscribe(data => {
            this.students.next(data);
        });
    }
    addValue(student) {
        this.students.next([...this.students.getValue(), student]);
        console.log(this.students.getValue());
        return this.students.getValue();
    }
    getStudents() {
        return this.students.getValue();
    }
};
StudentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StudentService);



/***/ }),

/***/ "./src/app/shared/validators/must-match.validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/validators/must-match.validator.ts ***!
  \***********************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\NAGP\test\angular\kratos\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
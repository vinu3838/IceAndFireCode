(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n   Ice And Fire\n  </h1>\n <router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _view_info_view_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-info/view-info.component */ "./src/app/view-info/view-info.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _info_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-details.service */ "./src/app/info-details.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pipe_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe_search */ "./src/app/pipe_search.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _comp_not_found_comp_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comp-not-found/comp-not-found.component */ "./src/app/comp-not-found/comp-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pipe_search__WEBPACK_IMPORTED_MODULE_8__["FilterPipe"],
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _view_info_view_info_component__WEBPACK_IMPORTED_MODULE_3__["ViewInfoComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"],
                _comp_not_found_comp_not_found_component__WEBPACK_IMPORTED_MODULE_10__["CompNotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: '', component: _view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"] },
                    { path: 'Information/:url', component: _view_info_view_info_component__WEBPACK_IMPORTED_MODULE_3__["ViewInfoComponent"] },
                    { path: '**', component: _view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"] },
                    { path: 'NotFound', component: _view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"] }
                ])
            ],
            providers: [_info_details_service__WEBPACK_IMPORTED_MODULE_6__["InfoDetailsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comp-not-found/comp-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/comp-not-found/comp-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comp-not-found/comp-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/comp-not-found/comp-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n404 error or Problem with Internet Connection\n</p>\n<a [routerLink]=\"['']\" class=\"btn btn-primary\">Reload</a>"

/***/ }),

/***/ "./src/app/comp-not-found/comp-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/comp-not-found/comp-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: CompNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompNotFoundComponent", function() { return CompNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompNotFoundComponent = /** @class */ (function () {
    function CompNotFoundComponent() {
    }
    CompNotFoundComponent.prototype.ngOnInit = function () {
    };
    CompNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comp-not-found',
            template: __webpack_require__(/*! ./comp-not-found.component.html */ "./src/app/comp-not-found/comp-not-found.component.html"),
            styles: [__webpack_require__(/*! ./comp-not-found.component.css */ "./src/app/comp-not-found/comp-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompNotFoundComponent);
    return CompNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/info-details.service.ts":
/*!*****************************************!*\
  !*** ./src/app/info-details.service.ts ***!
  \*****************************************/
/*! exports provided: InfoDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDetailsService", function() { return InfoDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Observable } from 'rxjs/observable';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';

var InfoDetailsService = /** @class */ (function () {
    function InfoDetailsService(http, route) {
        this.http = http;
        this.route = route;
        this.Information = [];
        this.allInfo = [];
    }
    InfoDetailsService.prototype.getInfo = function () {
        var _this = this;
        this.allInfo = [];
        //this.allBooks= 
        this.http.get('https://www.anapioficeandfire.com/api/books').subscribe(function (data) {
            //console.log(data);
            _this.allInfo.push(data);
            //console.log((this.allInfo));
            //return this.allInfo;
        }, function (error) {
            alert("Error Occured");
            _this.route.navigateByUrl('NotFound');
        });
        this.http.get('https://www.anapioficeandfire.com/api/characters').subscribe(function (data) {
            //console.log(data);
            _this.allInfo.push(data);
            //return this.allInfo;
        }, function (error) {
            alert("Error Occured");
            _this.route.navigateByUrl('NotFound');
        });
        this.http.get('https://www.anapioficeandfire.com/api/houses').subscribe(function (data) {
            //console.log(data);
            _this.allInfo.push(data);
            //return this.allInfo;
        }, function (error) {
            alert("Error Occured");
            _this.route.navigateByUrl('NotFound');
        });
        console.log((this.allInfo));
        return this.allInfo;
    };
    InfoDetailsService.prototype.getDetails = function (url) {
        var _this = this;
        console.log(url);
        this.http.get(url).subscribe(function (data) {
            _this.Information.pop();
            //console.log(data);
            _this.Information.push(data);
            //console.log((this.allInfo));
            //return this.allInfo;
        }, function (error) {
            alert("Error Occured");
            _this.route.navigateByUrl('');
        });
        console.log((this.Information));
        return this.Information;
    };
    InfoDetailsService.prototype.ngOnInit = function () {
    };
    InfoDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InfoDetailsService);
    return InfoDetailsService;
}());



/***/ }),

/***/ "./src/app/pipe_search.ts":
/*!********************************!*\
  !*** ./src/app/pipe_search.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        console.log("Hello World");
        console.log(items);
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        console.log(searchText);
        console.log(items);
        if (items.toLowerCase().includes(searchText)) {
            return items;
        }
        // return items.filter( it => {
        //   console.log(it); 
        //       return it.toLowerCase().includes(searchText);
        //     });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/view-info/view-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-info/view-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " table {\r\n    border:none;\r\n    border-collapse: collapse;\r\n}\r\n\r\ntable td {\r\n    \r\n    border-right: 1px ridge rgb(94, 85, 85);\r\n}\r\n\r\ntable td:first-child {\r\n    border-left: none;\r\n}\r\n\r\ntable td:last-child {\r\n    border-right: none;\r\n}\r\n\r\n.title\r\n{\r\n    width:20vw;\r\n    font-weight: bold;\r\n\r\n}\r\n\r\n.Description\r\n{\r\n\r\n    width:80vw;\r\n    text-align: left;\r\n    font-weight: normal;\r\n\r\n}\r\n\r\n.home\r\n{\r\n\r\n   \r\n   width:100%;\r\n}\r\n\r\n.home-btn\r\n{\r\n    float:right;\r\n}\r\n\r\n.back-btn\r\n{\r\n    float:left;\r\n}"

/***/ }),

/***/ "./src/app/view-info/view-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-info/view-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"(details.length > 0)\">\n<div class=\"home\">\n  <a (click)=\"Home()\" class=\"btn btn-primary p-2 m-2 home-btn\">Home</a>\n  <a (click)=\"Back()\" class=\"btn btn-primary p-2 m-2 back-btn\">Back</a>\n  </div>\n<table class=\"table table-striped\">\n  <thead *ngIf=\"(details[0]['authors'])\">\n    <tr>\n      <th class=\"title\">Category</th>\n      <th class=\"Description\">Book</th>\n  \n    </tr>\n  </thead>\n  <thead *ngIf=\"(details[0]['aliases'])\">\n    <tr>\n      <th class=\"title\">Category</th>\n      <th class=\"Description\">Character</th>\n    </tr>\n  </thead>\n  <thead *ngIf=\"(details[0]['region'])\">\n    <tr>\n      <th class=\"title\">Category</th>\n      <th class=\"Description\">House</th>\n    </tr>\n  </thead>\n  <tbody *ngIf=\"(details[0]['authors'])\">\n    <tr>\n      <td class=\"title\">Name Of Book</td>\n      <td class=\"Description\">{{details[0]['name']}}</td>\n    </tr>\n    <tr>\n      <td class=\"title\">ISBN</td>\n      <td class=\"Description\">{{details[0]['isbn']}}</td>\n    </tr>\n    <tr>\n      <td class=\"title\">Authors Of Book</td>\n      <td class=\"Description\">\n        <p  *ngFor= \"let author of details[0]['authors']\">{{author}}<br></p>\n      </td>\n    </tr>\n    <tr>\n      <td class=\"title\">Number of Pages</td>\n      <td class=\"Description\">{{details[0]['numberOfPages']}}</td>\n    </tr>\n    <tr>\n        <td class=\"title\">Publisher</td>\n        <td class=\"Description\">{{details[0]['publiser']}}</td>\n      </tr>\n      <tr>\n          <td class=\"title\">Country</td>\n          <td class=\"Description\">{{details[0]['country']}}</td>\n        </tr>\n        <tr>\n            <td class=\"title\">Media Type</td>\n            <td class=\"Description\">{{details[0]['mediaType']}}</td>\n          </tr>\n          <tr>\n              <td class=\"title\">Released Date</td>\n              <td class=\"Description\">{{details[0]['released'] | date}}</td>\n            </tr>\n\n\n            <tr>\n                <td class=\"title\">Url Of Characters</td>\n                <td class=\"Description\" style=\"font-size:0.8rem;\">\n                 <a *ngFor= \"let character of details[0]['characters']; let last=last\" [routerLink]=\"['/Information',character]\">{{character}} {{ last ? ' ':', '}}</a>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"title\">Url Of POV Characters</td>\n                <td class=\"Description\" style=\"font-size:0.8rem;\">\n                 <a *ngFor= \"let povCharacters of details[0]['povCharacters']; let last=last\" [routerLink]=\"['/Information',povCharacters]\">{{povCharacters}} {{ last ? ' ':', '}}</a>\n                </td>\n              </tr>\n             \n\n  </tbody>\n  <tbody *ngIf=\"(details[0]['aliases'])\">\n      <tr>\n        <td class=\"title\">Name Of Character</td>\n        <td class=\"Description\">{{details[0]['name']}}</td>\n      </tr>\n      <tr>\n        <td class=\"title\">Gender</td>\n        <td class=\"Description\">{{details[0]['gender']}}</td>\n      </tr>\n\n      <tr>\n          <td class=\"title\">Culture</td>\n          <td class=\"Description\">{{details[0]['culture']}}</td>\n        </tr>\n\n        <tr>\n            <td class=\"title\">Birth of date</td>\n            <td class=\"Description\">{{details[0]['born']}}</td>\n          </tr>\n\n\n          <tr>\n              <td class=\"title\">Death date</td>\n              <td class=\"Description\">{{details[0]['died']}}</td>\n            </tr>\n  \n\n\n      <tr>\n        <td class=\"title\">Titles</td>\n        <td class=\"Description\">\n          <p  *ngFor= \"let titles of details[0]['titles']\">{{titles}}<br> </p>\n        </td>\n      </tr>\n\n      <tr>\n          <td class=\"title\">Aliases</td>\n          <td class=\"Description\">\n            <p  *ngFor= \"let aliases of details[0]['aliases']\">{{aliases}}<br> </p>\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"title\">Information about Father</td>\n          <td class=\"Description\"><a [routerLink]=\"['/Information',details[0]['father']]\">{{details[0]['father']}}</a></td>\n        </tr>\n\n        <tr>\n          <td class=\"title\">Information about Mother</td>\n          <td class=\"Description\"><a [routerLink]=\"['/Information',details[0]['mother']]\">{{details[0]['mother']}}</a></td>\n        </tr>\n\n        <tr>\n          <td class=\"title\">Information about Spouse</td>\n          <td class=\"Description\"><a [routerLink]=\"['/Information',details[0]['spouse']]\">{{details[0]['spouse']}}</a></td>\n        </tr>\n        <tr>\n          <td class=\"title\">Allegiances</td>\n          <td class=\"Description\" style=\"font-size:0.8rem;\">\n           <a *ngFor= \"let allegiances of details[0]['allegiances']; let last=last\" [routerLink]=\"['/Information',allegiances]\">{{allegiances}} {{ last ? ' ':', '}}</a>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"title\">Url of Books</td>\n          <td class=\"Description\" style=\"font-size:0.8rem;\">\n           <a *ngFor= \"let books of details[0]['books']; let last=last\" [routerLink]=\"['/Information',books]\">{{books}} {{ last ? ' ':', '}}</a>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"title\">Url of POV Books</td>\n          <td class=\"Description\" style=\"font-size:0.8rem;\">\n           <a *ngFor= \"let povBooks of details[0]['povBooks']; let last=last\" [routerLink]=\"['/Information',povBooks]\">{{povBooks}} {{ last ? ' ':', '}}</a>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"title\">TV Series GOT</td>\n          <td class=\"Description\">\n           <p *ngFor= \"let tvSeries of details[0]['tvSeries']\">{{tvSeries}}<br></p>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"title\">Played By</td>\n          <td class=\"Description\">\n           <p *ngFor= \"let playedBy of details[0]['playedBy']\">{{playedBy}}<br></p>\n          </td>\n        </tr>  \n    </tbody>\n\n\n    <tbody *ngIf=\"(details[0]['region'])\">\n      <tr>\n        <td class=\"title\">Name Of House</td>\n        <td class=\"Description\">{{details[0]['name']}}</td>\n      </tr>\n      <tr>\n        <td class=\"title\">Region</td>\n        <td class=\"Description\">{{details[0]['region']}}</td>\n      </tr>\n\n      <tr>\n          <td class=\"title\">Coat of Arms</td>\n          <td class=\"Description\">{{details[0]['coatOfArms']}}</td>\n        </tr>\n\n        <tr>\n            <td class=\"title\">Words</td>\n            <td class=\"Description\">{{details[0]['words']}}</td>\n          </tr>\n\n          <tr>\n            <td class=\"title\">Titles</td>\n            <td class=\"Description\">\n              <p  *ngFor= \"let titles of details[0]['titles']\">{{titles}}<br> </p>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"title\">Seats</td>\n            <td class=\"Description\">\n              <p  *ngFor= \"let seats of details[0]['seats']\">{{seats}}<br> </p>\n            </td>\n          </tr>\n\n\n          <tr>\n            <td class=\"title\">Information about Current Lord</td>\n            <td class=\"Description\"><a [routerLink]=\"['/Information',details[0]['currentLord']]\">{{details[0]['currentLord']}}</a></td>\n          </tr>\n\n          <tr>\n            <td class=\"title\">Heir</td>\n            <td class=\"Description\"><a [routerLink]=\"['/Information',details[0]['heir']]\">{{details[0]['heir']}}</a></td>\n          </tr>\n\n          <tr>\n            <td class=\"title\">Over Lord</td>\n            <td class=\"Description\"><a [routerLink]=\"['/Information',details[0]['overlord']]\">{{details[0]['overlord']}}</a></td>\n          </tr>\n  \n  \n          <tr>\n            <td class=\"title\">Founded</td>\n            <td class=\"Description\">{{details[0]['founded']}}</td>\n          </tr>\n\n          <tr>\n            <td class=\"title\">Information of Founder</td>\n            <td class=\"Description\"><a [routerLink]=\"['/Information',details[0]['founder']]\">{{details[0]['founder']}}</a></td>\n          </tr>\n\n          \n          <tr>\n            <td class=\"title\">Died Out</td>\n            <td class=\"Description\">{{details[0]['diedOut']}}</td>\n          </tr>\n\n          <tr>\n            <td class=\"title\">Ancestral Weapons</td>\n            <td class=\"Description\">\n             <p *ngFor= \"let ancestralWeapons of details[0]['ancestralWeapons']\">{{ancestralWeapons}}<br></p>\n            </td>\n          </tr> \n        \n  \n        <tr>\n          <td class=\"title\">Cadet Branches</td>\n          <td class=\"Description\" style=\"font-size:0.8rem;\">\n           <a *ngFor= \"let cadetBranches of details[0]['cadetBranches']; let last=last\" [routerLink]=\"['/Information',cadetBranches]\">{{cadetBranches}} {{ last ? ' ':', '}}</a>\n          </td>\n        </tr>\n\n        <tr>\n          <td class=\"title\">Url of Sworn Members</td>\n          <td class=\"Description\" style=\"font-size:0.8rem;\">\n           <a *ngFor= \"let swornMembers of details[0]['swornMembers']; let last=last\" [routerLink]=\"['/Information',swornMembers]\">{{swornMembers}} {{ last ? ' ':', '}}</a>\n          </td>\n        </tr> \n    </tbody>\n\n\n</table>\n</div>"

/***/ }),

/***/ "./src/app/view-info/view-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-info/view-info.component.ts ***!
  \**************************************************/
/*! exports provided: ViewInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInfoComponent", function() { return ViewInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _info_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../info-details.service */ "./src/app/info-details.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewInfoComponent = /** @class */ (function () {
    function ViewInfoComponent(route, activeRote, Info, location) {
        this.route = route;
        this.activeRote = activeRote;
        this.Info = Info;
        this.location = location;
        this.details = [];
    }
    ViewInfoComponent.prototype.Back = function () {
        this.location.back();
    };
    ViewInfoComponent.prototype.Home = function () {
        this.route.navigateByUrl('');
    };
    ViewInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRote.params.subscribe(function (params) {
            _this.url = params['url'];
            console.log(_this.url);
            _this.details = _this.Info.getDetails(_this.url);
            console.log(_this.details);
        });
    };
    ViewInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-info',
            template: __webpack_require__(/*! ./view-info.component.html */ "./src/app/view-info/view-info.component.html"),
            styles: [__webpack_require__(/*! ./view-info.component.css */ "./src/app/view-info/view-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _info_details_service__WEBPACK_IMPORTED_MODULE_2__["InfoDetailsService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ViewInfoComponent);
    return ViewInfoComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.flex-container {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    background-color: DodgerBlue;\r\n    height:15vh;\r\n    width:100%;\r\n    justify-content: space-between;\r\n  \r\n   \r\n  }\r\n\r\ninput\r\n{\r\n\r\n\r\nvertical-align: center;\r\nfloat:right;\r\n\r\n}\r\n\r\n.house\r\n{\r\n\r\nheight:30vw;\r\n}\r\n\r\n.char{\r\n\r\nbackground: green;\r\n}\r\n\r\n.book{\r\n\r\n    background: red;\r\n    }\r\n\r\n.house >.list-group\r\n{\r\n\r\n    height:28vw;\r\n\r\n}\r\n\r\n@media screen and (max-width: 1600px) {\r\n  \r\n    .house\r\n    {\r\n    \r\n    height:40vw;\r\n    \r\n    }\r\n    \r\n    \r\n    .house >.list-group\r\n    {\r\n    \r\n        height:35vw;\r\n    \r\n    }\r\n\r\n  }\r\n\r\n@media screen and (max-width: 1160px) {\r\n  \r\n    .house\r\n{\r\n\r\nheight:80vh;\r\n\r\n}\r\n\r\n\r\n.house >.list-group-flush\r\n{\r\n\r\n    height:75vh;\r\n\r\n}\r\n\r\n  }\r\n\r\n "

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div  *ngFor=\"let detail of details\">\n \n<div class=\"row\">\n  \n\n\n\n  <div class= \"flex-container m-2 p-2\"  *ngIf='detail[1][\"authors\"]'>\n    <div><h1>Books</h1></div>\n  <div>\n  <input type=\"text\"  class=\"mt-2 mr-2\"placeholder=\" Search Books..\" name=\"search\" style=\"border-radius:10px;\" [(ngModel)]=\"searchText\">\n  </div>\n   </div>\n\n\n   <div class= \"flex-container m-2 p-2\"  *ngIf='detail[1][\"aliases\"]'>\n     <div><h1>Characters</h1></div>\n   <div>\n   <input type=\"text\" [(ngModel)]=\"searchTextChar\" class=\"mt-2 mr-2\"placeholder=\" Search Character..\" name=\"search\" style=\"border-radius:10px;\">\n   </div>\n    </div>\n\n    <div class= \"flex-container m-2 p-2\"  *ngIf='detail[1][\"region\"]'>\n     <div><h1>Houses</h1></div>\n   <div>\n   <input type=\"text\" [(ngModel)]=\"searchTextHouse\" class=\"mt-2 mr-2\"placeholder=\" Search Houses..\" name=\"search\" style=\"border-radius:10px;\">\n   </div>\n    </div>\n\n\n\n    <div *ngFor=\"let ViewDetail of detail\"> \n\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12 m-2 BookInformation\" *ngIf='(ViewDetail[\"authors\"]) && (ViewDetail[\"name\"] | filter:searchText)'>\n    \n    <div class=\"card book\" style=\"width: 18rem;\">\n      <div class=\"card-header\">\n        Books\n      </div>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\"><b>{{ViewDetail[\"name\"]}}</b></li>\n        <li class=\"list-group-item\" *ngFor= \"let author of ViewDetail['authors']\"><b>Authors: </b>{{author}}</li>\n        <li class=\"list-group-item\"><b>Number of Pages:</b> {{ViewDetail[\"numberOfPages\"]}}</li>\n        <li class=\"list-group-item\"><b>ISBN:</b> {{ViewDetail[\"isbn\"]}}</li>\n        <li class=\"list-group-item\"><b>Released Date:</b>  {{ViewDetail[\"released\"]|date}}</li>\n      </ul>\n      <div class=\"card-body\">\n        <a [routerLink]=\"['/Information',ViewDetail['url']]\" class=\"btn btn-primary\">More Info</a>\n      </div>\n    </div>\n    \n  </div> \n\n\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12 m-2\" *ngIf='(ViewDetail[\"aliases\"])  && (ViewDetail[\"aliases\"][0] | filter:searchTextChar)'>\n     \n    <div class=\"card char\" style=\"width: 18rem;\">\n      <div class=\"card-header\">\n        Characters\n      </div>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\" *ngFor= \"let aliase of ViewDetail['aliases']\"><b>{{aliase}}</b></li>\n        <li class=\"list-group-item\"><b>Name:</b> {{ViewDetail[\"name\"]}}</li>\n        <li class=\"list-group-item\"><b>Gender:</b> {{ViewDetail[\"gender\"]}}</li>\n        <li class=\"list-group-item\"><b>Culture:</b> {{ViewDetail[\"culture\"]}}</li>\n        <li class=\"list-group-item\"><b>Born:</b> {{ViewDetail[\"born\"]|date}}</li>\n      </ul>\n      <div class=\"card-body\">\n        <a [routerLink]=\"['/Information',ViewDetail['url']]\" class=\"btn btn-primary\">More Info</a>\n      </div>\n    </div>\n    </div> \n\n    <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12 m-2\" *ngIf='ViewDetail[\"region\"] && (ViewDetail[\"name\"] | filter:searchTextHouse)'>\n      \n      \n      <div class=\"card house\" style=\"width: 18rem;\">\n        <div class=\"card-header\">\n          Houses\n        </div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\"><b>{{ViewDetail[\"name\"]}}</b></li>\n          <li class=\"list-group-item\"><b>Coat Of Arms :</b> {{ViewDetail[\"coatOfArms\"]}}</li>\n          <li class=\"list-group-item\"><b>Region:</b> {{ViewDetail[\"region\"]}}</li>\n          <li class=\"list-group-item\"><b>Words of House:</b> {{ViewDetail[\"words\"]}}</li>\n          <li class=\"list-group-item\"><b>Founded On:</b> {{ViewDetail[\"founded\"]}}</li>\n        </ul>\n        <div class=\"card-body\">\n          <a [routerLink]=\"['/Information',ViewDetail['url']]\" class=\"btn btn-primary\">More Info</a>\n        </div>\n      </div>\n      </div> \n\n\n</div>\n</div>\n</div>\n\n<!-- \n<div class=\"page-header charHeader p-2 mt-3 mb-3\">\n  <h1>Characters</h1>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12 m-2\">\n    <div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Card title</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"btn-primary\">Card link</a>\n    <a href=\"#\" class=\"btn-primary\">Another link</a>\n  </div>\n</div>\n  </div> \n</div>\n\n<div class=\"page-header houseHeader p-2 mt-3 mb-3\">\n  <h1>Houses</h1>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12 m-2\">\n    <div class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Card title</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a href=\"#\" class=\"btn-primary\">Card link</a>\n    <a href=\"#\" class=\"btn-primary\">Another link</a>\n  </div>\n</div>\n  </div> \n</div> -->\n <!-- </div>\n</div> -->"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _info_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../info-details.service */ "./src/app/info-details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { FilterPipe} from '../pipe_search';
//import { FormsModule }   from '@angular/forms';

var ViewComponent = /** @class */ (function () {
    function ViewComponent(infoBook, route) {
        this.infoBook = infoBook;
        this.route = route;
        // GetDetails(url: string)
        // {
        //   console.log(url);
        //   this.route.navigateByUrl(`Information/${url}`);
        // }
        this.i = 0;
        this.details = [];
        this.i++;
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.details = this.infoBook.getInfo();
        console.log(this.details);
        console.log(this.i);
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_info_details_service__WEBPACK_IMPORTED_MODULE_1__["InfoDetailsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewComponent);
    return ViewComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Edwisor\Angular\IceAndFire\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
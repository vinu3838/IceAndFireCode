"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var InfoDetailsService = /** @class */ (function () {
    function InfoDetailsService(http) {
        this.http = http;
        this.allInfo = [];
    }
    InfoDetailsService.prototype.getInfo = function () {
        var _this = this;
        //this.allBooks= 
        this.http.get('https://www.anapioficeandfire.com/api/books').subscribe(function (data) {
            //console.log(data);
            _this.allInfo.push(data);
            //console.log((this.allInfo));
            //return this.allInfo;
        });
        this.http.get('https://www.anapioficeandfire.com/api/characters').subscribe(function (data) {
            //console.log(data);
            _this.allInfo.push(data);
            //return this.allInfo;
        });
        this.http.get('https://www.anapioficeandfire.com/api/houses').subscribe(function (data) {
            //console.log(data);
            _this.allInfo.push(data);
            //return this.allInfo;
        });
        console.log((this.allInfo));
        return this.allInfo;
    };
    InfoDetailsService.prototype.ngOnInit = function () {
    };
    InfoDetailsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], InfoDetailsService);
    return InfoDetailsService;
}());
exports.InfoDetailsService = InfoDetailsService;
//# sourceMappingURL=info-details.service.js.map
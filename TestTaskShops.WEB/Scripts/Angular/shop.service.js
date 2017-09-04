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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var webApi_1 = require("./webApi");
var ShopService = (function () {
    function ShopService(http) {
        this.http = http;
        this.apiUrl = webApi_1.WebApi.shopsUrl;
    }
    ShopService.prototype.getUsers = function () {
        return this.http.get(this.apiUrl)
            .map(function (resp) { return resp.json(); })
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    ShopService.prototype.createShop = function (shop) {
        var body = JSON.stringify(shop);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post(this.apiUrl, body, { headers: headers })
            .map(function (resp) { })
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    ShopService.prototype.editShop = function (shop) {
        var body = JSON.stringify(shop);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.put(this.apiUrl + shop.Id, body, { headers: headers })
            .map(function (resp) { })
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    ShopService.prototype.deleteShop = function (id) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.delete(this.apiUrl + id, { headers: headers })
            .map(function (resp) { })
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    return ShopService;
}());
ShopService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ShopService);
exports.ShopService = ShopService;
//# sourceMappingURL=shop.service.js.map
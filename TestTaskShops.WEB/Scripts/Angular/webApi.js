"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebApi = (function () {
    function WebApi() {
    }
    return WebApi;
}());
WebApi.baseUrl = 'http://localhost:58410';
WebApi.shopsUrl = WebApi.baseUrl + '/api/shops/';
WebApi.productsUrl = WebApi.baseUrl + '/api/products/';
WebApi.shopProductsUrl = WebApi.baseUrl + '/api/shopProducts/';
exports.WebApi = WebApi;
//# sourceMappingURL=webApi.js.map
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
var shop_model_1 = require("./shop.model");
var shopProducts_model_1 = require("./shopProducts.model");
var shopProducts_service_1 = require("./shopProducts.service");
var ShopProductsComponent = (function () {
    function ShopProductsComponent(shopProductsService) {
        this.shopProductsService = shopProductsService;
        this.onBack = new core_1.EventEmitter();
        this.shopProducts = new shopProducts_model_1.ShopProducts(new shop_model_1.Shop(0, '', '', ''), new Array());
    }
    ShopProductsComponent.prototype.loadShopProducts = function (shopId) {
        var _this = this;
        this.shopProductsService.getShopProducts(shopId).subscribe(function (data) { return _this.shopProducts = data; }, function (error) { return _this.error = error; });
    };
    ShopProductsComponent.prototype.onRefrash = function () {
        this.loadShopProducts(this.shopProducts.Shop.Id);
    };
    ShopProductsComponent.prototype.back = function () {
        this.onBack.emit({});
    };
    return ShopProductsComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ShopProductsComponent.prototype, "onBack", void 0);
ShopProductsComponent = __decorate([
    core_1.Component({
        selector: 'shop-products',
        templateUrl: './shopProducts.component.html',
        providers: [shopProducts_service_1.ShopProductsService]
    }),
    __metadata("design:paramtypes", [shopProducts_service_1.ShopProductsService])
], ShopProductsComponent);
exports.ShopProductsComponent = ShopProductsComponent;
//# sourceMappingURL=shopProducts.component.js.map
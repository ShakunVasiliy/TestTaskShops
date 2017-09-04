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
var shopsList_component_1 = require("./shopsList.component");
var shopProducts_component_1 = require("./shopProducts.component");
var MainComponent = (function () {
    function MainComponent() {
        this.shopsListDisplay = 'block';
        this.shopProductsDisplay = 'none';
    }
    MainComponent.prototype.onShowShopProducts = function (shopId) {
        this.shopsListDisplay = 'none';
        this.shopProductsDisplay = 'block';
        this.shopProductsComponent.loadShopProducts(shopId);
    };
    MainComponent.prototype.onShowShopsList = function () {
        this.shopsListDisplay = 'block';
        this.shopProductsDisplay = 'none';
        this.shopsListComponent.loadShops();
    };
    return MainComponent;
}());
__decorate([
    core_1.ViewChild(shopsList_component_1.ShopsListComponent),
    __metadata("design:type", shopsList_component_1.ShopsListComponent)
], MainComponent.prototype, "shopsListComponent", void 0);
__decorate([
    core_1.ViewChild(shopProducts_component_1.ShopProductsComponent),
    __metadata("design:type", shopProducts_component_1.ShopProductsComponent)
], MainComponent.prototype, "shopProductsComponent", void 0);
MainComponent = __decorate([
    core_1.Component({
        selector: 'main',
        templateUrl: './main.component.html'
    }),
    __metadata("design:paramtypes", [])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map
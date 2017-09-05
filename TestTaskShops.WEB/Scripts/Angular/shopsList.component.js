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
var core_2 = require("@angular/core");
var shop_service_1 = require("./shop.service");
var shop_model_1 = require("./shop.model");
var ShopsListComponent = (function () {
    function ShopsListComponent(shopService) {
        this.shopService = shopService;
        this.onShowShopProducts = new core_1.EventEmitter();
        this.resetEditingParams();
    }
    ShopsListComponent.prototype.ngOnInit = function () {
        this.loadShops();
    };
    ShopsListComponent.prototype.showShopProducts = function (shopId) {
        this.onShowShopProducts.emit(shopId);
    };
    ShopsListComponent.prototype.loadShops = function () {
        var _this = this;
        this.shopService.getUsers().subscribe(function (data) { return _this.shops = data; }, function (error) { return _this.error = error; });
    };
    ShopsListComponent.prototype.refresh = function () {
        this.cancelEdit();
        this.loadShops();
    };
    ShopsListComponent.prototype.addShop = function () {
        this.editingShop = new shop_model_1.Shop(null, '', '', '');
        this.isNewShop = true;
        this.shops.push(this.editingShop);
    };
    ShopsListComponent.prototype.editShop = function (shop) {
        if (shop.Id === null)
            return;
        this.cancelEdit();
        this.editingShop = new shop_model_1.Shop(shop.Id, shop.Name, shop.Address, shop.Mode);
        this.isNewShop = false;
    };
    ShopsListComponent.prototype.deleteShop = function (id) {
        this.shopService.deleteShop(id)
            .subscribe(this.GetSuccesfullFunc(), this.GetFailedFunc());
    };
    ShopsListComponent.prototype.cancelEdit = function () {
        if (this.isNewShop) {
            this.shops.pop();
        }
        this.resetEditingParams();
    };
    ShopsListComponent.prototype.saveShop = function () {
        if (this.isNewShop) {
            this.shopService.createShop(this.editingShop)
                .subscribe(this.GetSuccesfullFunc(), this.GetFailedFunc());
        }
        else {
            this.shopService.editShop(this.editingShop)
                .subscribe(this.GetSuccesfullFunc(), this.GetFailedFunc());
        }
        this.resetEditingParams();
    };
    ShopsListComponent.prototype.loadTemplate = function (shop) {
        if ((this.editingShop)
            && (this.editingShop.Id === shop.Id)) {
            return this.editTemplate;
        }
        else {
            return this.readOnlyTemplate;
        }
    };
    ShopsListComponent.prototype.resetEditingParams = function () {
        this.editingShop = null;
        this.isNewShop = false;
    };
    ShopsListComponent.prototype.GetSuccesfullFunc = function () {
        var self = this;
        return function (data) {
            self.loadShops();
        };
    };
    ShopsListComponent.prototype.GetFailedFunc = function () {
        return function (error) { };
    };
    return ShopsListComponent;
}());
__decorate([
    core_2.ViewChild('readOnlyTemplate'),
    __metadata("design:type", core_2.TemplateRef)
], ShopsListComponent.prototype, "readOnlyTemplate", void 0);
__decorate([
    core_2.ViewChild('editTemplate'),
    __metadata("design:type", core_2.TemplateRef)
], ShopsListComponent.prototype, "editTemplate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ShopsListComponent.prototype, "onShowShopProducts", void 0);
ShopsListComponent = __decorate([
    core_1.Component({
        selector: 'shops-list',
        templateUrl: './shopsList.component.html',
        providers: [shop_service_1.ShopService]
    }),
    __metadata("design:paramtypes", [shop_service_1.ShopService])
], ShopsListComponent);
exports.ShopsListComponent = ShopsListComponent;
//# sourceMappingURL=shopsList.component.js.map
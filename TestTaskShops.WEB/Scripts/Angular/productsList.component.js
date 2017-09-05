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
var product_model_1 = require("./product.model");
var product_service_1 = require("./product.service");
var ProductsListComponent = (function () {
    function ProductsListComponent(productService) {
        this.productService = productService;
        this.onRefresh = new core_1.EventEmitter();
        this.resetEditingParams();
    }
    Object.defineProperty(ProductsListComponent.prototype, "products", {
        get: function () {
            return this._products;
        },
        set: function (value) {
            this._products = value;
        },
        enumerable: true,
        configurable: true
    });
    ProductsListComponent.prototype.refresh = function () {
        this.cancelEdit();
        this.onRefresh.emit({});
    };
    ProductsListComponent.prototype.addProduct = function () {
        this.editingProduct = new product_model_1.Product(null, '', '', this.shopId);
        this.isNewProduct = true;
        this._products.push(this.editingProduct);
    };
    ProductsListComponent.prototype.editProduct = function (product) {
        if (product.Id === null)
            return;
        this.cancelEdit();
        this.editingProduct = new product_model_1.Product(product.Id, product.Name, product.Description, product.ShopId);
        this.isNewProduct = false;
    };
    ProductsListComponent.prototype.deleteProduct = function (id) {
        this.productService.deleteProduct(id)
            .subscribe(this.GetSuccesfullFunc(), this.GetFailedFunc());
    };
    ProductsListComponent.prototype.saveProduct = function () {
        if (this.isNewProduct) {
            this.productService.createProduct(this.editingProduct)
                .subscribe(this.GetSuccesfullFunc(), this.GetFailedFunc());
        }
        else {
            this.productService.editProduct(this.editingProduct)
                .subscribe(this.GetSuccesfullFunc(), this.GetFailedFunc());
        }
        this.resetEditingParams();
    };
    ProductsListComponent.prototype.cancelEdit = function () {
        if (this.isNewProduct) {
            this._products.pop();
        }
        this.resetEditingParams();
    };
    ProductsListComponent.prototype.loadTemplate = function (product) {
        if ((this.editingProduct)
            && (this.editingProduct.Id === product.Id)) {
            return this.editTemplate;
        }
        else {
            return this.readOnlyTemplate;
        }
    };
    ProductsListComponent.prototype.resetEditingParams = function () {
        this.editingProduct = null;
        this.isNewProduct = false;
    };
    ProductsListComponent.prototype.GetSuccesfullFunc = function () {
        var self = this;
        return function (data) {
            self.refresh();
        };
    };
    ProductsListComponent.prototype.GetFailedFunc = function () {
        return function (error) { };
    };
    return ProductsListComponent;
}());
__decorate([
    core_2.ViewChild('readOnlyTemplate'),
    __metadata("design:type", core_2.TemplateRef)
], ProductsListComponent.prototype, "readOnlyTemplate", void 0);
__decorate([
    core_2.ViewChild('editTemplate'),
    __metadata("design:type", core_2.TemplateRef)
], ProductsListComponent.prototype, "editTemplate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProductsListComponent.prototype, "onRefresh", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ProductsListComponent.prototype, "shopId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ProductsListComponent.prototype, "products", null);
ProductsListComponent = __decorate([
    core_1.Component({
        selector: 'products-list',
        templateUrl: './productsList.component.html',
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductsListComponent);
exports.ProductsListComponent = ProductsListComponent;
//# sourceMappingURL=productsList.component.js.map
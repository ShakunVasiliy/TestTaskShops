"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var main_component_1 = require("./main.component");
var shopsList_component_1 = require("./shopsList.component");
var shopProducts_component_1 = require("./shopProducts.component");
var productsList_component_1 = require("./productsList.component");
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [
            main_component_1.MainComponent,
            shopsList_component_1.ShopsListComponent,
            shopProducts_component_1.ShopProductsComponent,
            productsList_component_1.ProductsListComponent
        ],
        bootstrap: [main_component_1.MainComponent]
    })
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=main.module.js.map
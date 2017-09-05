import { Component, ViewChild } from '@angular/core';

import { ShopsListComponent } from './shopsList.component';
import { ShopProductsComponent } from './shopProducts.component';
import { DisplayValues } from './displayValues';

@Component({
    selector: 'main',
    templateUrl: './main.component.html'
})

export class MainComponent {
    public shopsListDisplay: string;
    public shopProductsDisplay: string;

    @ViewChild(ShopsListComponent)
    private shopsListComponent: ShopsListComponent;

    @ViewChild(ShopProductsComponent)
    private shopProductsComponent: ShopProductsComponent;

    constructor()
    {
        this.shopsListDisplay = DisplayValues.block;
        this.shopProductsDisplay = DisplayValues.none;
    }

    onShowShopProducts(shopId: number) {
        this.shopsListDisplay = DisplayValues.none;
        this.shopProductsDisplay = DisplayValues.block;

        this.shopProductsComponent.loadShopProducts(shopId);
    }

    onShowShopsList() {
        this.shopsListDisplay = DisplayValues.block;
        this.shopProductsDisplay = DisplayValues.none;

        this.shopsListComponent.loadShops();
    }
}